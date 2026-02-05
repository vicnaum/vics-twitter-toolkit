// Response parsers for RapidAPI Twitter endpoints
// Ported from twitter-threader with fixes:
// - includeQuotes passed as parameter (not captured from env at import time)
// - Zod schema defined at module level (not recreated per call)
// - sanitizeString applied to text fields
// - parseViewCount handles comma-separated strings

import { z } from 'zod';
import type { RawTweet } from './types/index.js';
import { parseTwitterDate, sanitizeString, parseViewCount, log } from './utils/index.js';

// Zod schema at module level — validated once, reused per call
const TweetResultSchema = z.object({
  __typename: z.string().optional(),
  rest_id: z.string(),
  legacy: z.object({
    full_text: z.string().default(''),
    conversation_id_str: z.string(),
    in_reply_to_status_id_str: z.string().nullable().optional(),
    created_at: z.string(),
    reply_count: z.number().default(0),
    is_quote_status: z.boolean().default(false),
    favorite_count: z.number().default(0),
    retweet_count: z.number().default(0),
    quote_count: z.number().default(0),
    view_count_info: z
      .object({ count: z.string(), state: z.string().optional() })
      .optional(),
    retweeted_status_result: z.any().optional(),
    quoted_status_result: z.any().optional(),
  }),
  core: z
    .object({
      user_result: z
        .object({
          result: z.object({
            __typename: z.string().optional(),
            legacy: z.any().optional(),
            core: z.any().optional(),
          }),
        })
        .optional(),
      user_results: z
        .object({
          result: z.object({
            __typename: z.string().optional(),
            legacy: z.any().optional(),
            core: z.any().optional(),
          }),
        })
        .optional(),
    })
    .optional(),
  view_count_info: z.object({ count: z.string() }).optional(),
});

/** Unwrap TweetWithVisibilityResults and similar wrappers */
function unwrapTweet(result: any): any | null {
  if (!result) return null;
  if (result.__typename === 'Tweet') return result;
  if (result.__typename === 'TweetWithVisibilityResults' && result.tweet) {
    return result.tweet;
  }
  return null;
}

/** Parse a single tweet result object into a RawTweet */
export function parseTweetResult(tweetResult: any, includeQuotes: boolean): RawTweet | null {
  const original = unwrapTweet(tweetResult);
  if (!original) return null;

  const parsed = TweetResultSchema.safeParse(original);
  if (!parsed.success) {
    log(
      'parseTweetResult: Zod validation failed: ' +
        parsed.error.issues
          .slice(0, 3)
          .map(i => i.message)
          .join(', '),
      'warn',
    );
    return null;
  }

  const data = parsed.data;
  const legacy = data.legacy;

  // Skip retweets always
  if (legacy.retweeted_status_result) return null;

  // Skip quotes if configured off
  if (!includeQuotes && (legacy.quoted_status_result || legacy.is_quote_status)) return null;

  // Prefer Note Tweet text when available (expands "See more")
  const noteTweetText: string | undefined =
    (original as any)?.note_tweet?.note_tweet_results?.result?.text;
  const resolvedText =
    typeof noteTweetText === 'string' && noteTweetText.length > 0
      ? noteTweetText
      : legacy.full_text || '';

  // Handle both user_result (singular) and user_results (plural)
  const user = data.core?.user_result?.result || data.core?.user_results?.result;
  const handle = user?.legacy?.screen_name || user?.core?.screen_name || '';
  const name = user?.legacy?.name || user?.core?.name || '';

  // View count: legacy field or tweet-root field, comma-safe parsing
  const viewCount =
    parseViewCount(legacy.view_count_info?.count) ??
    parseViewCount(data.view_count_info?.count);

  const tweet: RawTweet = {
    id: data.rest_id,
    parentId: legacy.in_reply_to_status_id_str || null,
    conversationId: legacy.conversation_id_str,
    text: sanitizeString(resolvedText),
    createdAt: parseTwitterDate(legacy.created_at),
    author: { handle: sanitizeString(handle), name: sanitizeString(name) },
    replyCount: legacy.reply_count || 0,
    isQuote: legacy.is_quote_status || false,
    favoriteCount: legacy.favorite_count || 0,
    retweetCount: legacy.retweet_count || 0,
    quoteCount: legacy.quote_count || 0,
    ...(viewCount !== undefined ? { viewCount } : {}),
  };

  if (!tweet.id || !tweet.text || !tweet.author.handle) {
    log(`parseTweetResult: Missing required fields id=${tweet.id} handle=${tweet.author.handle}`, 'warn');
    return null;
  }

  return tweet;
}

// ─── Instruction-level parsing (shared between Search & TweetDetail) ────────

function parseInstructions(
  instructions: any[],
  includeQuotes: boolean,
): { tweets: RawTweet[]; nextCursor?: string } {
  const tweets: RawTweet[] = [];
  let nextCursor: string | undefined;

  for (const instruction of instructions) {
    if (instruction.__typename === 'TimelineAddEntries' && instruction.entries) {
      for (const entry of instruction.entries) {
        const content = entry.content;
        if (!content) continue;

        // Cursor entries
        if (content.__typename === 'TimelineTimelineCursor') {
          const cursorType = content.cursor_type || content.cursorType;
          if (cursorType === 'Bottom' && content.value) {
            nextCursor = content.value;
          }
          continue;
        }

        // Single tweet entries
        if (content.__typename === 'TimelineTimelineItem' && content.content) {
          const tc = content.content;
          if (tc.__typename === 'TimelineTweet') {
            const tr = tc.tweet_results?.result ?? tc.tweetResult?.result;
            if (tr) {
              const tweet = parseTweetResult(tr, includeQuotes);
              if (tweet) tweets.push(tweet);
            }
          }
        }

        // Module entries (conversation threads grouped together)
        if (content.__typename === 'TimelineTimelineModule' && content.items) {
          for (const item of content.items) {
            if (item.item?.content?.__typename === 'TimelineTweet') {
              const tr =
                item.item.content.tweetResult?.result ??
                item.item.content.tweet_results?.result;
              if (tr) {
                const tweet = parseTweetResult(tr, includeQuotes);
                if (tweet) tweets.push(tweet);
              }
            }
          }
        }
      }
    } else if (instruction.__typename === 'TimelineReplaceEntry' && instruction.entry) {
      const content = instruction.entry.content;
      if (content && content.__typename === 'TimelineTimelineCursor') {
        const cursorType = content.cursor_type || content.cursorType;
        if (cursorType === 'Bottom' && content.value) {
          nextCursor = content.value;
        }
      }
    }
  }

  return { tweets, nextCursor };
}

/** Parse Search API response (twitter283 /Search endpoint) */
export function parseSearchResponse(
  response: any,
  includeQuotes: boolean,
): { tweets: RawTweet[]; nextCursor?: string } {
  const instructions =
    response.data?.search_by_raw_query?.search_timeline?.timeline?.instructions;
  if (!instructions || !Array.isArray(instructions)) {
    log('No instructions found in Search API response', 'warn');
    return { tweets: [] };
  }
  return parseInstructions(instructions, includeQuotes);
}

/** Parse TweetDetailConversationv2 response */
export function parseTweetDetailResponse(
  response: any,
  includeQuotes: boolean,
): { tweets: RawTweet[]; nextCursor?: string } {
  const instructions = response.data?.timeline_response?.instructions;
  if (!instructions || !Array.isArray(instructions)) {
    log('No instructions found in TweetDetail response', 'warn');
    return { tweets: [] };
  }
  return parseInstructions(instructions, includeQuotes);
}
