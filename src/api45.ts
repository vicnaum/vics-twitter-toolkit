// Twitter API 45 client (twitter-api45.p.rapidapi.com)
// Fetches user timelines and replies with pagination, date filtering, and dedup.
// Ported from twitter-stats with Zod validation and RawTweet conversion.

import { z } from 'zod';
import type { RawTweet, UserTweetsConfig, SearchConfig } from './types/index.js';
import {
  retry,
  log,
  fetchWithTimeout,
  sleep,
  sanitizeString,
  parseViewCount,
  parseTwitterDate,
  ensureDir,
  parseRetryAfter,
} from './utils/index.js';
import { writeFile } from 'fs/promises';

// ─── Zod Schemas ─────────────────────────────────────────────────────────────

const Api45AuthorSchema = z.object({
  screen_name: z.string(),
  name: z.string(),
});

export const Api45TweetSchema = z.object({
  tweet_id: z.string(),
  text: z.string(),
  created_at: z.string(),
  conversation_id: z.string().optional(),
  in_reply_to_status_id_str: z.string().nullish(),
  favorites: z.number().nullish(),
  retweets: z.number().nullish(),
  replies: z.number().nullish(),
  quotes: z.number().nullish(),
  bookmarks: z.number().nullish(),
  views: z.string().nullish(),
  lang: z.string().optional(),
  author: Api45AuthorSchema.optional(),
  media: z.any().optional(),
  entities: z.any().optional(),
  quoted: z.any().optional(),
});

export const Api45TimelineResponseSchema = z.object({
  timeline: z.array(Api45TweetSchema).default([]),
  next_cursor: z.string().optional(),
  status: z.string().optional(),
});

export type Api45Tweet = z.infer<typeof Api45TweetSchema>;

// ─── API Client ──────────────────────────────────────────────────────────────

export interface Api45ClientOptions {
  apiKey: string;
  apiHost: string;
  config: UserTweetsConfig;
}

const PRE_REQUEST_DELAY_MS = 1000;
const MAX_API_ERROR_RETRIES = 5;

export class TwitterApi45 {
  private apiKey: string;
  private apiHost: string;
  private config: UserTweetsConfig;

  constructor(opts: Api45ClientOptions) {
    this.apiKey = opts.apiKey;
    this.apiHost = opts.apiHost;
    this.config = opts.config;
  }

  private get headers(): Record<string, string> {
    return {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost,
    };
  }

  private async saveRawResponse(label: string, response: unknown) {
    if (!this.config.debugMode) return;
    try {
      await ensureDir('./raw_response');
      const ts = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `raw_response/api45_${label}_${ts}.json`;
      await writeFile(filename, JSON.stringify(response, null, 2));
      log(`Saved raw response to ${filename}`);
    } catch (err) {
      log(`Failed to save raw response: ${err}`, 'warn');
    }
  }

  /** Fetch all user tweets (timeline + optionally replies) */
  async fetchAllUserTweets(
    screenname: string,
  ): Promise<{ tweets: RawTweet[]; pagesFetched: number }> {
    const seen = new Set<string>();
    const allTweets: RawTweet[] = [];
    let totalPages = 0;

    const limit = this.config.limit;
    const unlimited = limit === 0;

    // Timeline
    log(`Fetching timeline for @${screenname}...`);
    const { tweets: timelineTweets, pages: timelinePages } = await this.paginateEndpoint(
      'timeline.php',
      screenname,
      seen,
      null, // no author filter for timeline
    );
    allTweets.push(...timelineTweets);
    totalPages += timelinePages;

    if (!unlimited && allTweets.length >= limit) {
      allTweets.length = limit;
      return { tweets: allTweets, pagesFetched: totalPages };
    }

    // Replies (optional)
    if (this.config.includeReplies) {
      log(`Fetching replies for @${screenname}...`);
      const { tweets: replyTweets, pages: replyPages } = await this.paginateEndpoint(
        'replies.php',
        screenname,
        seen,
        screenname, // filter to only this user's replies
      );
      allTweets.push(...replyTweets);
      totalPages += replyPages;

      if (!unlimited && allTweets.length >= limit) {
        allTweets.length = limit;
      }
    }

    return { tweets: allTweets, pagesFetched: totalPages };
  }

  /** Fetch only user replies (from /replies.php, filtered by author) */
  async fetchAllUserReplies(
    screenname: string,
  ): Promise<{ tweets: RawTweet[]; pagesFetched: number }> {
    const seen = new Set<string>();
    log(`Fetching replies for @${screenname}...`);
    const { tweets, pages } = await this.paginateEndpoint(
      'replies.php',
      screenname,
      seen,
      screenname,
    );

    const limit = this.config.limit;
    if (limit !== 0 && tweets.length > limit) {
      tweets.length = limit;
    }

    return { tweets, pagesFetched: pages };
  }

  /** Search tweets via /search.php */
  async searchTweets(
    query: string,
    config: SearchConfig,
  ): Promise<{ tweets: RawTweet[]; pagesFetched: number }> {
    const seen = new Set<string>();
    const collected: RawTweet[] = [];
    let cursor: string | undefined;
    let page = 0;
    const unlimited = config.limit === 0;
    const searchType = config.sort === 'top' ? 'Top' : 'Latest';

    while (true) {
      page++;

      // Rate limiting
      await sleep(PRE_REQUEST_DELAY_MS);

      let url = `https://${this.apiHost}/search.php?query=${encodeURIComponent(query)}&search_type=${searchType}`;
      if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;

      log(`search page ${page}${cursor ? ' (cursor)' : ''}`);

      const response = await this.fetchWithApiRetry(url, `search_p${page}`);
      if (!response) break;

      const parsed = Api45TimelineResponseSchema.safeParse(response);
      if (!parsed.success) {
        log(`search page ${page}: Zod parse error: ${parsed.error.message}`, 'warn');
        break;
      }

      const { timeline, next_cursor } = parsed.data;

      if (timeline.length === 0) {
        log(`search page ${page}: empty timeline, stopping`);
        break;
      }

      let newCount = 0;
      for (const raw of timeline) {
        if (seen.has(raw.tweet_id)) continue;
        seen.add(raw.tweet_id);

        collected.push(convertApi45Tweet(raw));
        newCount++;

        if (!unlimited && collected.length >= config.limit) break;
      }

      log(`search page ${page}: ${timeline.length} tweets, ${newCount} new`);

      if (!unlimited && collected.length >= config.limit) break;
      if (!next_cursor) break;
      cursor = next_cursor;
    }

    log(`search complete: ${collected.length} tweets from ${page} pages`);
    return { tweets: collected, pagesFetched: page };
  }

  /** Paginate a single endpoint (timeline.php or replies.php) */
  private async paginateEndpoint(
    endpoint: string,
    screenname: string,
    seen: Set<string>,
    filterAuthor: string | null,
  ): Promise<{ tweets: RawTweet[]; pages: number }> {
    const collected: RawTweet[] = [];
    let cursor: string | undefined;
    let page = 0;
    const limit = this.config.limit;
    const unlimited = limit === 0;

    while (true) {
      page++;

      // Rate limiting
      await sleep(PRE_REQUEST_DELAY_MS);

      let url = `https://${this.apiHost}/${endpoint}?screenname=${encodeURIComponent(screenname)}`;
      if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;

      log(`${endpoint} page ${page}${cursor ? ' (cursor)' : ''}`);

      const response = await this.fetchWithApiRetry(url, `${endpoint}_p${page}`);
      if (!response) break;

      const parsed = Api45TimelineResponseSchema.safeParse(response);
      if (!parsed.success) {
        log(`${endpoint} page ${page}: Zod parse error: ${parsed.error.message}`, 'warn');
        break;
      }

      const { timeline, next_cursor } = parsed.data;

      if (timeline.length === 0) {
        log(`${endpoint} page ${page}: empty timeline, stopping`);
        break;
      }

      let newCount = 0;
      let stoppedByDate = false;

      for (const raw of timeline) {
        // Author filter (for replies endpoint)
        if (filterAuthor && raw.author) {
          if (raw.author.screen_name.toLowerCase() !== filterAuthor.toLowerCase()) {
            continue;
          }
        }

        // Date filtering
        const tweetDate = new Date(raw.created_at);

        // Skip tweets newer than --to
        if (this.config.toDate && tweetDate > this.config.toDate) {
          continue;
        }

        // Stop if tweet is older than --from (timeline is reverse chronological)
        if (this.config.fromDate && tweetDate < this.config.fromDate) {
          stoppedByDate = true;
          break;
        }

        // Dedup
        if (seen.has(raw.tweet_id)) continue;
        seen.add(raw.tweet_id);

        collected.push(convertApi45Tweet(raw));
        newCount++;

        // Limit check
        if (!unlimited && seen.size >= limit) break;
      }

      log(`${endpoint} page ${page}: ${timeline.length} tweets, ${newCount} new`);

      if (stoppedByDate) {
        log(`${endpoint}: reached --from date, stopping`);
        break;
      }

      if (!unlimited && seen.size >= limit) break;
      if (!next_cursor) break;
      cursor = next_cursor;
    }

    log(`${endpoint} complete: ${collected.length} tweets from ${page} pages`);
    return { tweets: collected, pages: page };
  }

  /** Fetch URL with API-level error retry (response status === "error") */
  private async fetchWithApiRetry(url: string, label: string): Promise<unknown | null> {
    let apiRetries = 0;

    while (apiRetries < MAX_API_ERROR_RETRIES) {
      const response = await retry(
        async () => {
          const res = await fetchWithTimeout(url, { method: 'GET', headers: this.headers });
          if (!res.ok) {
            const err: any = new Error(`API45 ${res.status} ${res.statusText}`);
            if (res.status === 429)
              err.retryAfterMs = parseRetryAfter(res.headers.get('retry-after')) ?? 2000;
            throw err;
          }
          return res.json();
        },
        1,
        'API45',
      );

      await this.saveRawResponse(label, response);

      // Check for API-level error in response body
      const parsed = Api45TimelineResponseSchema.safeParse(response);
      if (parsed.success && parsed.data.status === 'error') {
        apiRetries++;
        log(`API45 response status=error, retry ${apiRetries}/${MAX_API_ERROR_RETRIES}...`, 'warn');
        await sleep(2000);
        continue;
      }

      return response;
    }

    log(`API45 max error retries reached for ${label}`, 'warn');
    return null;
  }
}

// ─── Tweet Conversion ────────────────────────────────────────────────────────

/** Convert an API 45 tweet to our unified RawTweet format */
export function convertApi45Tweet(raw: Api45Tweet): RawTweet {
  return {
    id: raw.tweet_id,
    parentId: raw.in_reply_to_status_id_str ?? null,
    conversationId: raw.conversation_id ?? raw.tweet_id,
    text: sanitizeString(raw.text),
    createdAt: parseTwitterDate(raw.created_at),
    author: {
      handle: sanitizeString(raw.author?.screen_name) || 'unknown',
      name: sanitizeString(raw.author?.name) || 'Unknown',
    },
    replyCount: raw.replies ?? 0,
    isQuote: !!raw.quoted,
    favoriteCount: raw.favorites ?? undefined,
    retweetCount: raw.retweets ?? undefined,
    quoteCount: raw.quotes ?? undefined,
    viewCount: parseViewCount(raw.views ?? undefined),
    bookmarkCount: raw.bookmarks ?? undefined,
  };
}
