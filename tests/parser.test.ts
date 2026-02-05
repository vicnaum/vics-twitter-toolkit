import { describe, it, expect } from 'vitest';
import { parseTweetResult, parseSearchResponse, parseTweetDetailResponse } from '../src/parser.js';

describe('parseTweetResult', () => {
  const validTweet = {
    __typename: 'Tweet',
    rest_id: '123456',
    legacy: {
      full_text: 'Hello world',
      conversation_id_str: '123456',
      in_reply_to_status_id_str: null,
      created_at: 'Mon Jan 01 00:00:00 +0000 2024',
      reply_count: 5,
      is_quote_status: false,
      favorite_count: 10,
      retweet_count: 2,
      quote_count: 1,
    },
    core: {
      user_results: {
        result: {
          __typename: 'User',
          legacy: {
            screen_name: 'testuser',
            name: 'Test User',
          },
        },
      },
    },
  };

  it('parses a valid tweet', () => {
    const result = parseTweetResult(validTweet, true);
    expect(result).not.toBeNull();
    expect(result!.id).toBe('123456');
    expect(result!.text).toBe('Hello world');
    expect(result!.author.handle).toBe('testuser');
    expect(result!.author.name).toBe('Test User');
    expect(result!.replyCount).toBe(5);
    expect(result!.favoriteCount).toBe(10);
  });

  it('skips retweets', () => {
    const rt = {
      ...validTweet,
      legacy: { ...validTweet.legacy, retweeted_status_result: { result: {} } },
    };
    expect(parseTweetResult(rt, true)).toBeNull();
  });

  it('skips quotes when includeQuotes is false', () => {
    const qt = {
      ...validTweet,
      legacy: { ...validTweet.legacy, is_quote_status: true },
    };
    expect(parseTweetResult(qt, false)).toBeNull();
    expect(parseTweetResult(qt, true)).not.toBeNull();
  });

  it('unwraps TweetWithVisibilityResults', () => {
    const wrapped = {
      __typename: 'TweetWithVisibilityResults',
      tweet: validTweet,
    };
    const result = parseTweetResult(wrapped, true);
    expect(result).not.toBeNull();
    expect(result!.id).toBe('123456');
  });

  it('returns null for invalid data', () => {
    expect(parseTweetResult({ __typename: 'Tweet' }, true)).toBeNull();
    expect(parseTweetResult(null, true)).toBeNull();
    expect(parseTweetResult(undefined, true)).toBeNull();
  });

  it('sanitizes null bytes in text', () => {
    const withNull = {
      ...validTweet,
      legacy: { ...validTweet.legacy, full_text: 'hello\x00world' },
    };
    const result = parseTweetResult(withNull, true);
    expect(result!.text).toBe('helloworld');
  });

  it('prefers note_tweet text over full_text', () => {
    const withNote = {
      ...validTweet,
      note_tweet: {
        note_tweet_results: {
          result: { text: 'This is the long note tweet text' },
        },
      },
    };
    const result = parseTweetResult(withNote, true);
    expect(result!.text).toBe('This is the long note tweet text');
  });

  it('parses view count from legacy', () => {
    const withViews = {
      ...validTweet,
      legacy: {
        ...validTweet.legacy,
        view_count_info: { count: '1,234,567' },
      },
    };
    const result = parseTweetResult(withViews, true);
    expect(result!.viewCount).toBe(1234567);
  });
});

describe('parseSearchResponse', () => {
  it('returns empty for missing instructions', () => {
    expect(parseSearchResponse({}, true)).toEqual({ tweets: [] });
    expect(parseSearchResponse({ data: {} }, true)).toEqual({ tweets: [] });
  });
});

describe('parseTweetDetailResponse', () => {
  it('returns empty for missing instructions', () => {
    expect(parseTweetDetailResponse({}, true)).toEqual({ tweets: [] });
  });
});
