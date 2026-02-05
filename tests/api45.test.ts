import { describe, it, expect } from 'vitest';
import { Api45TweetSchema, Api45TimelineResponseSchema, convertApi45Tweet } from '../src/api45.js';
import type { Api45Tweet } from '../src/api45.js';

// ─── Zod Schema Tests ────────────────────────────────────────────────────────

describe('Api45TweetSchema', () => {
  const validTweet = {
    tweet_id: '123456789',
    text: 'Hello world!',
    created_at: 'Mon Jan 01 12:00:00 +0000 2024',
    conversation_id: '123456789',
    in_reply_to_status_id_str: null,
    favorites: 10,
    retweets: 5,
    replies: 3,
    quotes: 1,
    bookmarks: 2,
    views: '1,234',
    author: { screen_name: 'testuser', name: 'Test User' },
  };

  it('parses a valid tweet', () => {
    const result = Api45TweetSchema.safeParse(validTweet);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.tweet_id).toBe('123456789');
      expect(result.data.text).toBe('Hello world!');
      expect(result.data.author?.screen_name).toBe('testuser');
    }
  });

  it('accepts tweet with missing optional fields', () => {
    const minimal = {
      tweet_id: '999',
      text: 'Minimal tweet',
      created_at: 'Tue Feb 04 10:00:00 +0000 2025',
    };
    const result = Api45TweetSchema.safeParse(minimal);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.favorites).toBeUndefined();
      expect(result.data.views).toBeUndefined();
      expect(result.data.author).toBeUndefined();
    }
  });

  it('accepts null values for nullable fields', () => {
    const withNulls = {
      ...validTweet,
      favorites: null,
      views: null,
      in_reply_to_status_id_str: null,
    };
    const result = Api45TweetSchema.safeParse(withNulls);
    expect(result.success).toBe(true);
  });

  it('rejects missing required fields', () => {
    const noId = { text: 'no id', created_at: 'Mon Jan 01 12:00:00 +0000 2024' };
    expect(Api45TweetSchema.safeParse(noId).success).toBe(false);

    const noText = { tweet_id: '1', created_at: 'Mon Jan 01 12:00:00 +0000 2024' };
    expect(Api45TweetSchema.safeParse(noText).success).toBe(false);
  });
});

describe('Api45TimelineResponseSchema', () => {
  it('parses a valid timeline response', () => {
    const response = {
      timeline: [
        {
          tweet_id: '1',
          text: 'Hello',
          created_at: 'Mon Jan 01 12:00:00 +0000 2024',
          author: { screen_name: 'user', name: 'User' },
        },
      ],
      next_cursor: 'abc123',
    };
    const result = Api45TimelineResponseSchema.safeParse(response);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.timeline).toHaveLength(1);
      expect(result.data.next_cursor).toBe('abc123');
    }
  });

  it('defaults timeline to empty array when missing', () => {
    const result = Api45TimelineResponseSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.timeline).toEqual([]);
    }
  });

  it('parses error status', () => {
    const response = { timeline: [], status: 'error' };
    const result = Api45TimelineResponseSchema.safeParse(response);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.status).toBe('error');
    }
  });
});

// ─── Tweet Conversion Tests ──────────────────────────────────────────────────

describe('convertApi45Tweet', () => {
  const baseTweet: Api45Tweet = {
    tweet_id: '12345',
    text: 'Test tweet content',
    created_at: 'Mon Jan 01 12:00:00 +0000 2024',
    conversation_id: '12345',
    in_reply_to_status_id_str: null,
    favorites: 42,
    retweets: 10,
    replies: 5,
    quotes: 2,
    bookmarks: 3,
    views: '1,234,567',
    author: { screen_name: 'testuser', name: 'Test User' },
  };

  it('converts basic tweet fields', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.id).toBe('12345');
    expect(result.text).toBe('Test tweet content');
    expect(result.author.handle).toBe('testuser');
    expect(result.author.name).toBe('Test User');
    expect(result.conversationId).toBe('12345');
  });

  it('parses view count from comma-separated string', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.viewCount).toBe(1234567);
  });

  it('maps engagement metrics', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.favoriteCount).toBe(42);
    expect(result.retweetCount).toBe(10);
    expect(result.replyCount).toBe(5);
    expect(result.quoteCount).toBe(2);
    expect(result.bookmarkCount).toBe(3);
  });

  it('handles null/missing engagement values', () => {
    const sparse: Api45Tweet = {
      tweet_id: '999',
      text: 'sparse',
      created_at: 'Mon Jan 01 12:00:00 +0000 2024',
      favorites: null,
      retweets: null,
      replies: null,
      quotes: null,
      bookmarks: null,
      views: null,
    };
    const result = convertApi45Tweet(sparse);
    expect(result.favoriteCount).toBeUndefined();
    expect(result.retweetCount).toBeUndefined();
    expect(result.replyCount).toBe(0);
    expect(result.quoteCount).toBeUndefined();
    expect(result.bookmarkCount).toBeUndefined();
    expect(result.viewCount).toBeUndefined();
  });

  it('sets parentId from in_reply_to_status_id_str', () => {
    const reply: Api45Tweet = {
      ...baseTweet,
      in_reply_to_status_id_str: '99999',
    };
    const result = convertApi45Tweet(reply);
    expect(result.parentId).toBe('99999');
  });

  it('sets parentId to null when not a reply', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.parentId).toBeNull();
  });

  it('detects quote tweets', () => {
    const quote: Api45Tweet = {
      ...baseTweet,
      quoted: { tweet_id: '888', text: 'quoted content' },
    };
    const result = convertApi45Tweet(quote);
    expect(result.isQuote).toBe(true);
  });

  it('sets isQuote false when no quoted tweet', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.isQuote).toBe(false);
  });

  it('sanitizes null bytes in text', () => {
    const withNull: Api45Tweet = {
      ...baseTweet,
      text: 'hello\x00world',
    };
    const result = convertApi45Tweet(withNull);
    expect(result.text).toBe('helloworld');
  });

  it('sanitizes null bytes in author fields', () => {
    const withNull: Api45Tweet = {
      ...baseTweet,
      author: { screen_name: 'user\x00name', name: 'Display\x00Name' },
    };
    const result = convertApi45Tweet(withNull);
    expect(result.author.handle).toBe('username');
    expect(result.author.name).toBe('DisplayName');
  });

  it('handles missing author gracefully', () => {
    const noAuthor: Api45Tweet = {
      tweet_id: '111',
      text: 'orphan tweet',
      created_at: 'Mon Jan 01 12:00:00 +0000 2024',
    };
    const result = convertApi45Tweet(noAuthor);
    expect(result.author.handle).toBe('unknown');
    expect(result.author.name).toBe('Unknown');
  });

  it('falls back to tweet_id when conversation_id missing', () => {
    const noConvo: Api45Tweet = {
      tweet_id: '555',
      text: 'no convo',
      created_at: 'Mon Jan 01 12:00:00 +0000 2024',
    };
    const result = convertApi45Tweet(noConvo);
    expect(result.conversationId).toBe('555');
  });

  it('parses created_at to ISO string', () => {
    const result = convertApi45Tweet(baseTweet);
    expect(result.createdAt).toBe(new Date('Mon Jan 01 12:00:00 +0000 2024').toISOString());
  });
});

// ─── Author Filtering Logic ─────────────────────────────────────────────────

describe('author filtering (unit logic)', () => {
  it('case-insensitive screen_name comparison', () => {
    const filterAuthor = 'TestUser';
    const tweets: Api45Tweet[] = [
      {
        tweet_id: '1',
        text: 'my reply',
        created_at: 'Mon Jan 01 12:00:00 +0000 2024',
        author: { screen_name: 'testuser', name: 'Test' },
      },
      {
        tweet_id: '2',
        text: 'other reply',
        created_at: 'Mon Jan 01 12:00:00 +0000 2024',
        author: { screen_name: 'OtherUser', name: 'Other' },
      },
      {
        tweet_id: '3',
        text: 'CAPS reply',
        created_at: 'Mon Jan 01 12:00:00 +0000 2024',
        author: { screen_name: 'TESTUSER', name: 'Test' },
      },
    ];

    const filtered = tweets.filter(
      t => t.author && t.author.screen_name.toLowerCase() === filterAuthor.toLowerCase(),
    );
    expect(filtered).toHaveLength(2);
    expect(filtered.map(t => t.tweet_id)).toEqual(['1', '3']);
  });
});

// ─── Date Filtering Logic ────────────────────────────────────────────────────

describe('date filtering (unit logic)', () => {
  const tweets: Api45Tweet[] = [
    { tweet_id: '1', text: 'new', created_at: 'Wed Feb 05 12:00:00 +0000 2025', author: { screen_name: 'u', name: 'U' } },
    { tweet_id: '2', text: 'mid', created_at: 'Mon Jan 15 12:00:00 +0000 2024', author: { screen_name: 'u', name: 'U' } },
    { tweet_id: '3', text: 'old', created_at: 'Sun Jan 01 12:00:00 +0000 2023', author: { screen_name: 'u', name: 'U' } },
  ];

  it('filters tweets newer than --to', () => {
    const toDate = new Date('2024-12-31T23:59:59Z');
    const filtered = tweets.filter(t => new Date(t.created_at) <= toDate);
    expect(filtered).toHaveLength(2);
    expect(filtered.map(t => t.tweet_id)).toEqual(['2', '3']);
  });

  it('filters tweets older than --from', () => {
    const fromDate = new Date('2024-01-01T00:00:00Z');
    const filtered = tweets.filter(t => new Date(t.created_at) >= fromDate);
    expect(filtered).toHaveLength(2);
    expect(filtered.map(t => t.tweet_id)).toEqual(['1', '2']);
  });

  it('applies both --from and --to', () => {
    const fromDate = new Date('2024-01-01T00:00:00Z');
    const toDate = new Date('2024-12-31T23:59:59Z');
    const filtered = tweets.filter(
      t => new Date(t.created_at) >= fromDate && new Date(t.created_at) <= toDate,
    );
    expect(filtered).toHaveLength(1);
    expect(filtered[0]!.tweet_id).toBe('2');
  });
});
