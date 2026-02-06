// Output formatters for conversation trees

import type { ConversationTree, TweetNode, UserTweetsResult, SearchResult, RawTweet, UserProfile } from './types/index.js';

export function toJson(tree: ConversationTree): string {
  return JSON.stringify(
    {
      root: tree.root,
      stats: tree.stats,
    },
    (_key, value) => {
      // Skip indexById in serialization (circular refs from children)
      if (value instanceof Map) return undefined;
      return value;
    },
    2,
  );
}

function formatNodeAsMarkdown(node: TweetNode, depth: number): string {
  const indent = '  '.repeat(depth);
  const bullet = `${indent}- `;
  const quoteTag = node.isQuote ? ' *(quote)*' : '';

  let out = `${bullet}**${node.author.name}** (@${node.author.handle})${quoteTag}\n`;

  // Indent text lines under the bullet
  const textIndent = indent + '  ';
  const textLines = node.text
    .split('\n')
    .map(l => `${textIndent}${l}`)
    .join('\n');
  out += `${textLines}\n`;

  if (node.isPartial) {
    out += `${textIndent}*[${node.children.length}/${node.replyCount} replies shown]*\n`;
  }
  out += '\n';

  for (const child of node.children) {
    out += formatNodeAsMarkdown(child, depth + 1);
  }
  return out;
}

export function toMarkdown(tree: ConversationTree): string {
  const rootUrl = `https://x.com/${tree.root.author.handle}/status/${tree.root.id}`;
  let out = `# Conversation Thread\n\n`;
  out += `**Root:** ${rootUrl}\n`;
  out += `**Tweets:** ${tree.stats.totalTweets} | **Dangling:** ${tree.stats.danglingParents}\n\n`;
  out += formatNodeAsMarkdown(tree.root, 0);
  return out;
}

// ─── User Tweets Formatters ──────────────────────────────────────────────────

export function tweetsToJson(result: UserTweetsResult): string {
  return JSON.stringify(
    {
      username: result.username,
      stats: result.stats,
      tweets: result.tweets,
    },
    null,
    2,
  );
}

function formatEngagement(tweet: RawTweet): string {
  const parts: string[] = [];
  if (tweet.viewCount != null) parts.push(`${tweet.viewCount.toLocaleString()} views`);
  if (tweet.favoriteCount != null) parts.push(`${tweet.favoriteCount} likes`);
  if (tweet.retweetCount != null) parts.push(`${tweet.retweetCount} RTs`);
  if (tweet.replyCount) parts.push(`${tweet.replyCount} replies`);
  if (tweet.quoteCount != null) parts.push(`${tweet.quoteCount} quotes`);
  if (tweet.bookmarkCount != null) parts.push(`${tweet.bookmarkCount} bookmarks`);
  return parts.length > 0 ? parts.join(' | ') : '';
}

export function tweetsToMarkdown(result: UserTweetsResult): string {
  const { username, tweets, stats } = result;
  let out = `# Tweets by @${username}\n\n`;
  out += `**Total:** ${stats.totalTweets} tweets`;
  out += ` (${stats.originalTweets} original, ${stats.replyTweets} replies)`;
  out += ` | **Pages fetched:** ${stats.pagesFetched}\n`;
  if (stats.dateRange.from || stats.dateRange.to) {
    out += `**Date range:** ${stats.dateRange.from ?? '...'} — ${stats.dateRange.to ?? '...'}\n`;
  }
  out += '\n---\n\n';

  for (const tweet of tweets) {
    const date = new Date(tweet.createdAt).toLocaleString();
    const isReply = tweet.parentId != null;
    const replyTag = isReply ? ' *(reply)*' : '';
    const tweetUrl = `https://x.com/${tweet.author.handle}/status/${tweet.id}`;

    out += `> **@${tweet.author.handle}**${replyTag} — ${date}\n`;
    for (const line of tweet.text.split('\n')) {
      out += `> ${line}\n`;
    }
    const engagement = formatEngagement(tweet);
    if (engagement) {
      out += `>\n> *${engagement}*\n`;
    }
    out += `>\n> [Link](${tweetUrl})\n\n`;
  }

  return out;
}

// ─── Search Formatters ──────────────────────────────────────────────────────

export function searchToJson(result: SearchResult): string {
  return JSON.stringify(
    {
      query: result.query,
      stats: result.stats,
      tweets: result.tweets,
    },
    null,
    2,
  );
}

export function searchToMarkdown(result: SearchResult): string {
  const { query, tweets, stats } = result;
  let out = `# Search: "${query}"\n\n`;
  out += `**Total:** ${stats.totalTweets} tweets`;
  out += ` | **Pages fetched:** ${stats.pagesFetched}\n`;
  if (stats.dateRange.from || stats.dateRange.to) {
    out += `**Date range:** ${stats.dateRange.from ?? '...'} — ${stats.dateRange.to ?? '...'}\n`;
  }
  out += '\n---\n\n';

  for (const tweet of tweets) {
    const date = new Date(tweet.createdAt).toLocaleString();
    const isReply = tweet.parentId != null;
    const replyTag = isReply ? ' *(reply)*' : '';
    const tweetUrl = `https://x.com/${tweet.author.handle}/status/${tweet.id}`;

    out += `> **@${tweet.author.handle}**${replyTag} — ${date}\n`;
    for (const line of tweet.text.split('\n')) {
      out += `> ${line}\n`;
    }
    const engagement = formatEngagement(tweet);
    if (engagement) {
      out += `>\n> *${engagement}*\n`;
    }
    out += `>\n> [Link](${tweetUrl})\n\n`;
  }

  return out;
}

// ─── Profile Formatters ──────────────────────────────────────────────────────

export function profileToJson(profile: UserProfile): string {
  return JSON.stringify(profile, null, 2);
}

export function profileToMarkdown(profile: UserProfile): string {
  let out = `# ${profile.name} (@${profile.handle})\n\n`;

  if (profile.isVerified) {
    out += `**Verified:** ✓${profile.verifiedType ? ` ${profile.verifiedType}` : ''}\n`;
  }
  if (profile.bio) {
    out += `**Bio:** ${profile.bio}\n`;
  }
  if (profile.location) {
    out += `**Location:** ${profile.location}\n`;
  }
  if (profile.website) {
    out += `**Website:** ${profile.website}\n`;
  }

  const joined = new Date(profile.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  out += `**Joined:** ${joined}\n`;

  out += `\n## Stats\n\n`;
  out += `| Followers | Following | Tweets | Media | Likes |\n`;
  out += `|-----------|-----------|--------|-------|-------|\n`;
  out += `| ${profile.followerCount.toLocaleString()} | ${profile.followingCount.toLocaleString()} | ${profile.tweetCount.toLocaleString()} | ${profile.mediaCount.toLocaleString()} | ${profile.likeCount.toLocaleString()} |\n`;

  out += `\n**Profile:** https://x.com/${profile.handle}\n`;

  return out;
}
