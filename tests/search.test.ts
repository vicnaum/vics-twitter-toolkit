import { describe, it, expect } from 'vitest';
import { sanitizeQueryForFilename } from '../src/utils/index.js';
import { searchToJson, searchToMarkdown } from '../src/formatters.js';
import type { SearchResult } from '../src/types/index.js';

// ─── Filename Sanitization ──────────────────────────────────────────────────

describe('sanitizeQueryForFilename', () => {
  it('replaces non-alphanumeric characters with underscores', () => {
    expect(sanitizeQueryForFilename('from:elonmusk')).toBe('from_elonmusk');
  });

  it('handles spaces and special chars', () => {
    expect(sanitizeQueryForFilename('bitcoin min_faves:100')).toBe('bitcoin_min_faves_100');
  });

  it('truncates to 60 characters', () => {
    const long = 'a'.repeat(100);
    expect(sanitizeQueryForFilename(long)).toHaveLength(60);
  });

  it('handles empty string', () => {
    expect(sanitizeQueryForFilename('')).toBe('');
  });

  it('preserves alphanumeric characters', () => {
    expect(sanitizeQueryForFilename('hello123world')).toBe('hello123world');
  });

  it('handles complex query with quotes and operators', () => {
    expect(sanitizeQueryForFilename('"exact phrase" from:user -filter:replies')).toBe(
      '_exact_phrase__from_user__filter_replies',
    );
  });
});

// ─── Search URL Construction ────────────────────────────────────────────────

describe('search URL construction', () => {
  it('encodes query parameter correctly', () => {
    const query = 'from:elonmusk bitcoin';
    const searchType = 'Latest';
    const url = `https://example.com/search.php?query=${encodeURIComponent(query)}&search_type=${searchType}`;
    expect(url).toBe('https://example.com/search.php?query=from%3Aelonmusk%20bitcoin&search_type=Latest');
  });

  it('maps sort=top to search_type=Top', () => {
    const sort = 'top' as const;
    const searchType = sort === 'top' ? 'Top' : 'Latest';
    expect(searchType).toBe('Top');
  });

  it('maps sort=recent to search_type=Latest', () => {
    const sort = 'recent' as const;
    const searchType = sort === 'top' ? 'Top' : 'Latest';
    expect(searchType).toBe('Latest');
  });

  it('appends cursor when provided', () => {
    const base = 'https://example.com/search.php?query=test&search_type=Latest';
    const cursor = 'abc123==';
    const url = `${base}&cursor=${encodeURIComponent(cursor)}`;
    expect(url).toContain('cursor=abc123%3D%3D');
  });
});

// ─── Search Formatters ──────────────────────────────────────────────────────

const sampleResult: SearchResult = {
  query: 'bitcoin min_faves:100',
  tweets: [
    {
      id: '111',
      parentId: null,
      conversationId: '111',
      text: 'Bitcoin is great!',
      createdAt: '2024-06-15T12:00:00.000Z',
      author: { handle: 'satoshi', name: 'Satoshi Nakamoto' },
      replyCount: 5,
      isQuote: false,
      favoriteCount: 200,
      retweetCount: 50,
      viewCount: 10000,
    },
    {
      id: '222',
      parentId: '111',
      conversationId: '111',
      text: 'I agree!',
      createdAt: '2024-06-14T08:00:00.000Z',
      author: { handle: 'hal', name: 'Hal Finney' },
      replyCount: 0,
      isQuote: false,
      favoriteCount: 150,
    },
  ],
  stats: {
    totalTweets: 2,
    pagesFetched: 1,
    dateRange: {
      from: '2024-06-14T08:00:00.000Z',
      to: '2024-06-15T12:00:00.000Z',
    },
  },
};

describe('searchToJson', () => {
  it('produces valid JSON with query, stats, and tweets', () => {
    const json = searchToJson(sampleResult);
    const parsed = JSON.parse(json);

    expect(parsed.query).toBe('bitcoin min_faves:100');
    expect(parsed.stats.totalTweets).toBe(2);
    expect(parsed.stats.pagesFetched).toBe(1);
    expect(parsed.tweets).toHaveLength(2);
    expect(parsed.tweets[0].id).toBe('111');
    expect(parsed.tweets[1].id).toBe('222');
  });

  it('includes date range in stats', () => {
    const json = searchToJson(sampleResult);
    const parsed = JSON.parse(json);

    expect(parsed.stats.dateRange.from).toBe('2024-06-14T08:00:00.000Z');
    expect(parsed.stats.dateRange.to).toBe('2024-06-15T12:00:00.000Z');
  });
});

describe('searchToMarkdown', () => {
  it('starts with the search query as header', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toMatch(/^# Search: "bitcoin min_faves:100"/);
  });

  it('includes stats line', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toContain('**Total:** 2 tweets');
    expect(md).toContain('**Pages fetched:** 1');
  });

  it('includes date range', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toContain('**Date range:**');
  });

  it('formats tweets as blockquotes', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toContain('> **@satoshi**');
    expect(md).toContain('> Bitcoin is great!');
    expect(md).toContain('> **@hal** *(reply)*');
  });

  it('includes engagement metrics', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toContain('200 likes');
    expect(md).toContain('50 RTs');
  });

  it('includes tweet links', () => {
    const md = searchToMarkdown(sampleResult);
    expect(md).toContain('[Link](https://x.com/satoshi/status/111)');
    expect(md).toContain('[Link](https://x.com/hal/status/222)');
  });

  it('handles empty results', () => {
    const empty: SearchResult = {
      query: 'nothing',
      tweets: [],
      stats: { totalTweets: 0, pagesFetched: 1, dateRange: { from: null, to: null } },
    };
    const md = searchToMarkdown(empty);
    expect(md).toContain('# Search: "nothing"');
    expect(md).toContain('**Total:** 0 tweets');
    expect(md).not.toContain('**Date range:**');
  });
});
