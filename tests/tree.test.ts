import { describe, it, expect } from 'vitest';
import { buildConversationTree } from '../src/tree.js';
import type { RawTweet } from '../src/types/index.js';

function makeTweet(overrides: Partial<RawTweet> & { id: string }): RawTweet {
  return {
    parentId: null,
    conversationId: 'root',
    text: `Tweet ${overrides.id}`,
    createdAt: new Date(Date.now() + Number(overrides.id)).toISOString(),
    author: { handle: 'user', name: 'User' },
    replyCount: 0,
    isQuote: false,
    ...overrides,
  };
}

describe('buildConversationTree', () => {
  it('builds a simple tree with root and children', () => {
    const tweets: RawTweet[] = [
      makeTweet({ id: '1', replyCount: 2 }),
      makeTweet({ id: '2', parentId: '1' }),
      makeTweet({ id: '3', parentId: '1' }),
    ];
    const tree = buildConversationTree(tweets, '1');
    expect(tree.root.id).toBe('1');
    expect(tree.root.children).toHaveLength(2);
    expect(tree.stats.totalTweets).toBe(3);
    expect(tree.stats.danglingParents).toBe(0);
  });

  it('returns actual indexById (not empty)', () => {
    const tweets: RawTweet[] = [makeTweet({ id: '1' })];
    const tree = buildConversationTree(tweets, '1');
    expect(tree.indexById.size).toBe(1);
    expect(tree.indexById.get('1')).toBeDefined();
  });

  it('creates stub for missing root', () => {
    const tweets: RawTweet[] = [makeTweet({ id: '2', parentId: '1' })];
    const tree = buildConversationTree(tweets, '999');
    expect(tree.root.id).toBe('999');
    expect(tree.root.text).toContain('not available');
  });

  it('creates stubs for dangling parents', () => {
    const tweets: RawTweet[] = [
      makeTweet({ id: '1' }),
      makeTweet({ id: '3', parentId: '2' }), // parent '2' missing
    ];
    const tree = buildConversationTree(tweets, '1');
    expect(tree.stats.danglingParents).toBe(1);
    expect(tree.indexById.has('2')).toBe(true);
    expect(tree.indexById.get('2')!.text).toContain('not available');
  });

  it('deduplicates tweets by ID', () => {
    const tweet = makeTweet({ id: '1', replyCount: 1 });
    const child = makeTweet({ id: '2', parentId: '1' });
    const tree = buildConversationTree([tweet, tweet, child, child], '1');
    expect(tree.root.children).toHaveLength(1);
    expect(tree.stats.totalTweets).toBe(2);
  });

  it('sorts children by creation time', () => {
    const tweets: RawTweet[] = [
      makeTweet({ id: '1', replyCount: 3 }),
      makeTweet({ id: '4', parentId: '1', createdAt: '2024-01-03T00:00:00Z' }),
      makeTweet({ id: '2', parentId: '1', createdAt: '2024-01-01T00:00:00Z' }),
      makeTweet({ id: '3', parentId: '1', createdAt: '2024-01-02T00:00:00Z' }),
    ];
    const tree = buildConversationTree(tweets, '1');
    expect(tree.root.children.map(c => c.id)).toEqual(['2', '3', '4']);
  });

  it('marks nodes as partial when children < replyCount', () => {
    const tweets: RawTweet[] = [
      makeTweet({ id: '1', replyCount: 5 }),
      makeTweet({ id: '2', parentId: '1' }),
    ];
    const tree = buildConversationTree(tweets, '1');
    expect(tree.root.isPartial).toBe(true);
  });
});
