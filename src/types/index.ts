// Core data structures for the Twitter toolkit

/** Raw tweet as extracted from API responses (before tree building) */
export interface RawTweet {
  id: string;
  parentId: string | null;
  conversationId: string;
  text: string;
  createdAt: string; // ISO 8601
  author: {
    handle: string;
    name: string;
  };
  replyCount: number;
  isQuote: boolean;
  favoriteCount?: number;
  retweetCount?: number;
  quoteCount?: number;
  viewCount?: number;
  bookmarkCount?: number;
}

/** A tweet node in the conversation tree */
export interface TweetNode {
  id: string;
  parentId: string | null;
  text: string;
  author: {
    handle: string;
    name: string;
  };
  url: string;
  createdAtMs: number;
  replyCount: number;
  isQuote: boolean;
  favoriteCount?: number;
  retweetCount?: number;
  quoteCount?: number;
  viewCount?: number;
  children: TweetNode[];
  isPartial: boolean; // true if children.length < replyCount
}

/** Complete conversation tree with metadata */
export interface ConversationTree {
  root: TweetNode;
  indexById: Map<string, TweetNode>;
  stats: {
    totalTweets: number;
    pagesFetched: number;
    danglingParents: number;
  };
}

/** Configuration for conversation fetching */
export interface ConversationConfig {
  includeQuotes: boolean;
  detailMaxPages: number;
  searchMaxPages: number;
  searchCount: number;
  missingFetchConcurrency: number;
  debugMode: boolean;
}

/** Parsed input from CLI (URL, username, or tweet ID) */
export type ParsedInput =
  | { type: 'tweet_id'; id: string }
  | { type: 'username'; username: string }
  | { type: 'unknown'; raw: string };

/** Configuration for user-tweets fetching */
export interface UserTweetsConfig {
  limit: number;
  fromDate?: Date;
  toDate?: Date;
  includeReplies: boolean;
  debugMode: boolean;
}

/** Result of a user-tweets fetch */
export interface UserTweetsResult {
  username: string;
  tweets: RawTweet[];
  stats: {
    totalTweets: number;
    originalTweets: number;
    replyTweets: number;
    pagesFetched: number;
    dateRange: { from: string | null; to: string | null };
  };
}

/** Configuration for search */
export interface SearchConfig {
  limit: number;
  sort: 'top' | 'recent';
  debugMode: boolean;
}

/** Result of a search query */
export interface SearchResult {
  query: string;
  tweets: RawTweet[];
  stats: {
    totalTweets: number;
    pagesFetched: number;
    dateRange: { from: string | null; to: string | null };
  };
}

/** User profile as extracted from API 283 /UserResultByScreenName */
export interface UserProfile {
  id: string;
  handle: string;
  name: string;
  bio: string;
  location: string;
  website: string | null;
  avatarUrl: string;
  bannerUrl: string | null;
  createdAt: string; // ISO 8601
  followerCount: number;
  followingCount: number;
  tweetCount: number;
  mediaCount: number;
  likeCount: number;
  isVerified: boolean;
  verifiedType: string | null;
  pinnedTweetIds: string[];
  profileImageShape: string;
}

export const DEFAULT_CONFIG: ConversationConfig = {
  includeQuotes: true,
  detailMaxPages: 25,
  searchMaxPages: 25,
  searchCount: 1000,
  missingFetchConcurrency: 4,
  debugMode: false,
};
