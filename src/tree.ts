// Conversation tree reconstruction
// Ported from twitter-threader with fixes:
// - Returns actual indexById (not empty Map)
// - O(1) child dedup via Set (not O(n²) via .some())
// - Single wiring pass after stub creation

import type { RawTweet, TweetNode, ConversationTree } from './types/index.js';
import { isoToEpochMs, log } from './utils/index.js';

export function buildConversationTree(tweets: RawTweet[], rootId: string): ConversationTree {
  const indexById = new Map<string, TweetNode>();
  let danglingParents = 0;

  log(`Building conversation tree from ${tweets.length} tweets`);

  // ── Pass 1: Create all nodes ──────────────────────────────────────────────
  for (const raw of tweets) {
    if (indexById.has(raw.id)) continue; // skip duplicates
    const node: TweetNode = {
      id: raw.id,
      parentId: raw.parentId,
      text: raw.text,
      author: raw.author,
      url: `https://x.com/${raw.author.handle}/status/${raw.id}`,
      createdAtMs: isoToEpochMs(raw.createdAt),
      replyCount: raw.replyCount,
      isQuote: raw.isQuote,
      favoriteCount: raw.favoriteCount,
      retweetCount: raw.retweetCount,
      quoteCount: raw.quoteCount,
      viewCount: raw.viewCount,
      children: [],
      isPartial: false,
    };
    indexById.set(node.id, node);
  }

  // ── Create stub nodes for dangling parents ────────────────────────────────
  const danglingIds = new Set<string>();
  for (const node of indexById.values()) {
    if (node.parentId && !indexById.has(node.parentId)) {
      danglingIds.add(node.parentId);
    }
  }
  for (const parentId of danglingIds) {
    danglingParents++;
    const stub: TweetNode = {
      id: parentId,
      parentId: null,
      text: `[Tweet ${parentId} - not available]`,
      author: { handle: 'unknown', name: 'Unknown' },
      url: `https://x.com/unknown/status/${parentId}`,
      createdAtMs: 0,
      replyCount: 0,
      isQuote: false,
      children: [],
      isPartial: false,
    };
    indexById.set(parentId, stub);
  }

  // ── Pass 2: Wire parent→child with O(1) dedup ────────────────────────────
  const childIdSets = new Map<string, Set<string>>();
  for (const node of indexById.values()) {
    if (!node.parentId) continue;
    const parent = indexById.get(node.parentId);
    if (!parent) continue;

    let childIds = childIdSets.get(parent.id);
    if (!childIds) {
      childIds = new Set();
      childIdSets.set(parent.id, childIds);
    }
    if (!childIds.has(node.id)) {
      childIds.add(node.id);
      parent.children.push(node);
    }
  }

  // ── Pass 3: Sort children by time, update isPartial ──────────────────────
  for (const node of indexById.values()) {
    node.children.sort((a, b) => a.createdAtMs - b.createdAtMs);
    node.isPartial = node.children.length < node.replyCount;
  }

  // ── Find or create root ───────────────────────────────────────────────────
  let root = indexById.get(rootId);
  if (!root) {
    log(`Root tweet ${rootId} not found, creating stub`, 'warn');
    root = {
      id: rootId,
      parentId: null,
      text: '[Root tweet not available]',
      author: { handle: 'unknown', name: 'Unknown' },
      url: `https://x.com/unknown/status/${rootId}`,
      createdAtMs: 0,
      replyCount: 0,
      isQuote: false,
      children: [],
      isPartial: false,
    };
    indexById.set(rootId, root);
  }

  log(`Tree built: ${indexById.size} nodes, ${danglingParents} dangling parents`);

  return {
    root,
    indexById, // Fixed: return actual populated index
    stats: {
      totalTweets: indexById.size,
      pagesFetched: 0,
      danglingParents,
    },
  };
}
