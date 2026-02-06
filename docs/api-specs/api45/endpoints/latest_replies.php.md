# Latest replies

**Route:** `GET /latest_replies.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Gets the latest replies of the tweet.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| id | STRING | Yes | `1738106896777699464` |

## Response Schema

```typescript
// Root: LatestRepliesResponse
interface LatestRepliesResponse {
  next_cursor: string;
  prev_cursor: string;
  status: string;
  timeline: LatestRepliesResponseTimelineItem[];
}

interface LatestRepliesResponseTimelineItem {
  bookmarks: number;  // 19/19
  conversation_id: string;  // 19/19
  created_at: string;  // 19/19
  entities: LatestRepliesResponseTimelineItemEntities;  // 19/19
  favorites: number;  // 19/19
  in_reply_to_screen_name: string;  // 19/19
  in_reply_to_status_id_str: string;  // 19/19
  in_reply_to_user_id_str: string;  // 19/19
  lang: string;  // 19/19
  media: unknown[];  // 19/19
  quotes: number;  // 19/19
  replies: number;  // 19/19
  retweets: number;  // 19/19
  screen_name: string;  // 19/19
  source: string;  // 19/19
  text: string;  // 19/19
  tweet_id: string;  // 19/19
  type: string;  // 19/19
  user_info: LatestRepliesResponseTimelineItemUserInfo;  // 19/19
  views: string;  // 19/19
}

interface LatestRepliesResponseTimelineItemEntities {
  hashtags?: unknown[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: unknown[];
  user_mentions?: LatestRepliesResponseTimelineItemEntitiesUserMentionsItem[];
}

interface LatestRepliesResponseTimelineItemEntitiesUserMentionsItem {
  id_str?: string;  // 24/2
  indices?: number[];  // 24/2
  name?: string;  // 24/2
  screen_name?: string;  // 24/2
}

interface LatestRepliesResponseTimelineItemUserInfo {
  avatar?: string;
  cover_image?: string | null;
  created_at?: string;
  description?: string;
  favourites_count?: number;
  followers_count?: number;
  friends_count?: number;
  location?: string;
  name?: string;
  rest_id?: string;
  screen_name?: string;
  url?: null | string;
  verified?: boolean;
  verified_type?: null;
}

```

## Example: Full Response (synthesized)

```json
{
  "status": "ok",
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1929304754812776882",
      "screen_name": "AnilaMathew",
      "bookmarks": 0,
      "favorites": 0,
      "created_at": "Sun Jun 01 22:31:12 +0000 2025",
      "text": "@elonmusk Wow",
      "lang": "und",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "quotes": 0,
      "replies": 0,
      "conversation_id": "1738106896777699464",
      "retweets": 0,
      "views": "9",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "44196397",
            "name": "Elon Musk",
            "screen_name": "elonmusk",
            "indices": [
              0,
              0
            ]
          },
          {
            "id_str": "44196397",
            "name": "Elon Musk",
            "screen_name": "elonmusk",
            "indices": [
              0,
              0
            ]
          }
        ]
      },
      "user_info": {
        "screen_name": "AnilaMathew",
        "name": "Anila Mathew",
        "created_at": "Wed Aug 12 15:56:35 +0000 2009",
        "description": "",
        "rest_id": "65072209",
        "followers_count": 1335,
        "favourites_count": 4067,
        "avatar": "https://pbs.twimg.com/profile_images/1942622796460261378/flSp7RJ-_normal.jpg",
        "url": "",
        "cover_image": "https://pbs.twimg.com/profile_banners/65072209/1749142813",
        "verified_type": null,
        "verified": false,
        "friends_count": 50,
        "location": ""
      },
      "media": [],
      "in_reply_to_screen_name": "elonmusk",
      "in_reply_to_status_id_str": "1738106896777699464",
      "in_reply_to_user_id_str": "44196397"
    },
    {
      "type": "tweet",
      "tweet_id": "1929304754812776882",
      "screen_name": "AnilaMathew",
      "bookmarks": 0,
      "favorites": 0,
      "created_at": "Sun Jun 01 22:31:12 +0000 2025",
      "text": "@elonmusk Wow",
      "lang": "und",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "quotes": 0,
      "replies": 0,
      "conversation_id": "1738106896777699464",
      "retweets": 0,
      "views": "9",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "44196397",
            "name": "Elon Musk",
            "screen_name": "elonmusk",
            "indices": [
              0,
              0
            ]
          },
          {
            "id_str": "44196397",
            "name": "Elon Musk",
            "screen_name": "elonmusk",
            "indices": [
              0,
              0
            ]
          }
        ]
      },
      "user_info": {
        "screen_name": "AnilaMathew",
        "name": "Anila Mathew",
        "created_at": "Wed Aug 12 15:56:35 +0000 2009",
        "description": "",
        "rest_id": "65072209",
        "followers_count": 1335,
        "favourites_count": 4067,
        "avatar": "https://pbs.twimg.com/profile_images/1942622796460261378/flSp7RJ-_normal.jpg",
        "url": "",
        "cover_image": "https://pbs.twimg.com/profile_banners/65072209/1749142813",
        "verified_type": null,
        "verified": false,
        "friends_count": 50,
        "location": ""
      },
      "media": [],
      "in_reply_to_screen_name": "elonmusk",
      "in_reply_to_status_id_str": "1738106896777699464",
      "in_reply_to_user_id_str": "44196397"
    }
  ],
  "next_cursor": "DAADDAABCgABGsZEc94WcbIKAAIYupbzQhaB6wAIAAIAAAACCAADAAAAAAgABAAAAAAKAAUcB6UmhQAnEAoABhwHpSaE_9jwAAA",
  "prev_cursor": "DAADDAABCgABGsZEc94WcbIKAAIYupbzQhaB6wAIAAIAAAABCAADAAAAAAgABAAAAAAKAAUcB6UmhQAnEAoABhwHpSaE_9jwAAA"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "status": "ok",
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1929304754812776882",
      "screen_name": "AnilaMathew",
      "bookmarks": 0,
      "favorites": 0,
      "created_at": "Sun Jun 01 22:31:12 +0000 2025",
      "text": "@elonmusk Wow",
      "lang": "und",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "quotes": 0,
      "replies": 0,
      "conversation_id": "1738106896777699464",
      "retweets": 0,
      "views": "9",
      "entities": {},
      "user_info": {},
      "media": [],
      "in_reply_to_screen_name": "elonmusk",
      "in_reply_to_status_id_str": "1738106896777699464",
      "in_reply_to_user_id_str": "44196397"
    }
  ],
  "next_cursor": "DAADDAABCgABGsZEc94WcbIKAAIYupbzQhaB6wAIAAIAAAACCAADAAAAAAgABAAAAAAKAAUcB6UmhQAnEAoABhwHpSaE_9jwAAA",
  "prev_cursor": "DAADDAABCgABGsZEc94WcbIKAAIYupbzQhaB6wAIAAIAAAABCAADAAAAAAgABAAAAAAKAAUcB6UmhQAnEAoABhwHpSaE_9jwAAA"
}
```

## Notes

- Pagination: uses next_cursor, prev_cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
