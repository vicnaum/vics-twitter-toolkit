// Twitter API client (API 283 — twitter283.p.rapidapi.com)
// Ported from twitter-threader with fixes:
// - Config passed as constructor param (no module-level env reads)
// - Class-based for clean state management and testability

import type { RawTweet, ConversationConfig } from './types/index.js';
import { retry, log, fetchWithTimeout, parseRetryAfter, ensureDir } from './utils/index.js';
import { parseSearchResponse, parseTweetDetailResponse } from './parser.js';
import { writeFile } from 'fs/promises';

export interface ApiClientOptions {
  apiKey: string;
  apiHost: string;
  config: ConversationConfig;
}

export class TwitterApi {
  private apiKey: string;
  private apiHost: string;
  private config: ConversationConfig;

  constructor(opts: ApiClientOptions) {
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

  private async saveRawResponse(id: string, label: string, response: any, tweetCount: number) {
    if (!this.config.debugMode) return;
    try {
      await ensureDir('./raw_response');
      const ts = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `raw_response/${id}_${label}_${tweetCount}t_${ts}.json`;
      await writeFile(filename, JSON.stringify(response, null, 2));
      log(`Saved raw response to ${filename}`);
    } catch (err) {
      log(`Failed to save raw response: ${err}`, 'warn');
    }
  }

  // ─── TweetDetail ──────────────────────────────────────────────────────────

  /** Fetch conversation via TweetDetailConversationv2 with cursor pagination */
  async fetchConversationViaTweetDetail(
    tweetId: string,
  ): Promise<{ tweets: RawTweet[]; showMoreCursors: string[] }> {
    const allTweets: RawTweet[] = [];
    const showMoreCursors: string[] = [];
    let page = 0;

    log(`TweetDetail fetch for ${tweetId}`);

    // Initial request
    const url = `https://${this.apiHost}/TweetDetailConversationv2?tweet_id=${tweetId}`;
    page++;

    const response = await retry(
      async () => {
        const res = await fetchWithTimeout(url, { method: 'GET', headers: this.headers });
        if (!res.ok) {
          const err: any = new Error(`TweetDetail API ${res.status} ${res.statusText}`);
          if (res.status === 429)
            err.retryAfterMs = parseRetryAfter(res.headers.get('retry-after')) ?? 1000;
          throw err;
        }
        return res.json();
      },
      1,
      'TweetDetail',
    );

    await this.saveRawResponse(tweetId, `detail_p${page}`, response, 0);

    const { tweets, nextCursor } = parseTweetDetailResponse(
      response,
      this.config.includeQuotes,
    );
    allTweets.push(...tweets);
    log(`TweetDetail page ${page}: ${tweets.length} tweets`);

    // Collect ShowMore cursors
    this.extractShowMoreCursors(response, showMoreCursors);

    // Paginate with bottom cursor
    let cursor = nextCursor;
    while (cursor && page < this.config.detailMaxPages) {
      page++;
      const cursorUrl = `https://${this.apiHost}/TweetDetailConversationv2?tweet_id=${tweetId}&cursor=${encodeURIComponent(cursor)}`;

      try {
        const cursorResponse = await retry(
          async () => {
            const res = await fetchWithTimeout(cursorUrl, {
              method: 'GET',
              headers: this.headers,
            });
            if (!res.ok) {
              if (res.status === 400 || res.status === 422) {
                log('Cursor pagination not supported by proxy', 'warn');
                return null;
              }
              const err: any = new Error(`TweetDetail API ${res.status} ${res.statusText}`);
              if (res.status === 429)
                err.retryAfterMs = parseRetryAfter(res.headers.get('retry-after')) ?? 1000;
              throw err;
            }
            return res.json();
          },
          1,
          'TweetDetail',
        );

        if (!cursorResponse) break;

        await this.saveRawResponse(tweetId, `detail_p${page}`, cursorResponse, 0);
        const result = parseTweetDetailResponse(cursorResponse, this.config.includeQuotes);
        if (result.tweets.length === 0) {
          log(`TweetDetail page ${page}: no new tweets, stopping`);
          break;
        }
        allTweets.push(...result.tweets);
        log(`TweetDetail page ${page}: ${result.tweets.length} tweets`);
        this.extractShowMoreCursors(cursorResponse, showMoreCursors);
        cursor = result.nextCursor;
      } catch (err) {
        log(`TweetDetail page ${page} error: ${err}`, 'warn');
        break;
      }
    }

    log(
      `TweetDetail complete: ${allTweets.length} tweets from ${page} pages, ${showMoreCursors.length} ShowMore cursors`,
    );
    return { tweets: allTweets, showMoreCursors };
  }

  // ─── Search ───────────────────────────────────────────────────────────────

  /** Fetch a single page of Search results for a conversation */
  async fetchSearchPage(
    conversationId: string,
    cursor?: string,
  ): Promise<{ tweets: RawTweet[]; nextCursor?: string }> {
    const query = `conversation_id:${conversationId} -is:retweet`;
    let url = `https://${this.apiHost}/Search?q=${encodeURIComponent(query)}&type=Latest&count=${this.config.searchCount}&safe_search=false`;
    if (cursor) url += `&cursor=${cursor}`;

    log(`Search page for ${conversationId}${cursor ? ' (cursor)' : ''}`);

    const response = await retry(
      async () => {
        const res = await fetchWithTimeout(url, { method: 'GET', headers: this.headers });
        if (!res.ok) {
          const err: any = new Error(`Search API ${res.status} ${res.statusText}`);
          if (res.status === 429)
            err.retryAfterMs = parseRetryAfter(res.headers.get('retry-after')) ?? 1000;
          throw err;
        }
        return res.json();
      },
      1,
      'Search',
    );

    const result = parseSearchResponse(response, this.config.includeQuotes);
    await this.saveRawResponse(
      conversationId,
      cursor ? 'search_cursor' : 'search_initial',
      response,
      result.tweets.length,
    );
    return result;
  }

  /** Paginate through all Search results for a conversation */
  async fetchAllSearchTweets(conversationId: string): Promise<RawTweet[]> {
    const allTweets: RawTweet[] = [];
    const seen = new Set<string>();
    let cursor: string | undefined;
    let page = 0;

    while (page < this.config.searchMaxPages) {
      page++;
      log(`Search page ${page}...`);

      const { tweets, nextCursor } = await this.fetchSearchPage(conversationId, cursor);

      let newCount = 0;
      for (const t of tweets) {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          allTweets.push(t);
          newCount++;
        }
      }

      log(`Search page ${page}: ${tweets.length} tweets (${newCount} new)`);

      if (tweets.length === 0 || newCount === 0 || !nextCursor) break;
      cursor = nextCursor;
    }

    log(`Search complete: ${allTweets.length} unique tweets from ${page} pages`);
    return allTweets;
  }

  // ─── Missing-tweet backfill ───────────────────────────────────────────────

  /** Fetch individual tweets by ID (for filling missing tree nodes) */
  async fetchMissingTweets(tweetIds: string[]): Promise<RawTweet[]> {
    const allTweets: RawTweet[] = [];
    log(`Fetching ${tweetIds.length} missing tweet(s)`);

    const concurrency = this.config.missingFetchConcurrency;
    let idx = 0;

    const worker = async () => {
      while (idx < tweetIds.length) {
        const id = tweetIds[idx++];
        if (!id) break;
        try {
          const url = `https://${this.apiHost}/TweetDetailConversationv2?tweet_id=${id}`;
          const response = await retry(
            async () => {
              const res = await fetchWithTimeout(url, { method: 'GET', headers: this.headers });
              if (!res.ok) {
                const err: any = new Error(`API ${res.status} ${res.statusText}`);
                if (res.status === 429)
                  err.retryAfterMs = parseRetryAfter(res.headers.get('retry-after')) ?? 1000;
                throw err;
              }
              return res.json();
            },
            1,
            'MissingTweet',
          );

          await this.saveRawResponse(id, 'missing', response, 0);
          const { tweets } = parseTweetDetailResponse(response, this.config.includeQuotes);
          allTweets.push(...tweets);
        } catch (err) {
          log(`Failed to fetch missing tweet ${id}: ${err}`, 'warn');
        }
      }
    };

    await Promise.all(
      Array.from({ length: Math.min(concurrency, tweetIds.length) }, () => worker()),
    );
    log(`Fetched ${allTweets.length} tweets from ${tweetIds.length} missing-tweet requests`);
    return allTweets;
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private extractShowMoreCursors(response: any, cursors: string[]) {
    const instructions = response.data?.timeline_response?.instructions;
    if (!instructions) return;
    for (const inst of instructions) {
      if (inst.__typename === 'TimelineAddEntries' && inst.entries) {
        for (const entry of inst.entries) {
          if (entry.content?.cursorType === 'ShowMore' && entry.content.value) {
            cursors.push(entry.content.value);
          }
        }
      }
    }
  }
}
