# Comunity Posts

**Route:** `GET /community_timeline.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Returns the posts from the community.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| ranking | ENUM | No | - |
| community_id | STRING | Yes | `1783990533192651232` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: ComunityPostsResponse
interface ComunityPostsResponse {
  cursor: string;
  timeline: ComunityPostsResponseTimelineItem[];
}

interface ComunityPostsResponseTimelineItem {
  author: ComunityPostsResponseTimelineItemAuthor;  // 19/19
  bookmarks: null;  // 19/19
  created_at: string;  // 19/19
  favorites: number;  // 19/19
  lang: string;  // 19/19
  media: ComunityPostsResponseTimelineItemMedia | unknown[];  // 19/19
  quotes: number;  // 19/19
  replies: number;  // 19/19
  retweets: number;  // 19/19
  screen_name: string;  // 19/19
  source: string;  // 19/19
  text: string;  // 19/19
  tweet_id: string;  // 19/19
  views: string;  // 19/19
  quoted?: ComunityPostsResponseTimelineItemQuoted;  // 3/19
}

interface ComunityPostsResponseTimelineItemAuthor {
  avatar?: null;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface ComunityPostsResponseTimelineItemMedia {
  photo?: ComunityPostsResponseTimelineItemMediaPhotoItem[];
}

interface ComunityPostsResponseTimelineItemMediaPhotoItem {
  id?: string;  // 12/2
  media_url_https?: string;  // 12/2
}

interface ComunityPostsResponseTimelineItemQuoted {
  author?: ComunityPostsResponseTimelineItemQuotedAuthor;
  bookmarks?: number;
  conversation_id?: string;
  created_at?: string;
  favorites?: number;
  lang?: string;
  media?: ComunityPostsResponseTimelineItemQuotedMedia | unknown[];
  quotes?: number;
  replies?: number;
  retweets?: number;
  text?: string;
  tweet_id?: string;
  views?: string;
}

interface ComunityPostsResponseTimelineItemQuotedAuthor {
  avatar?: null;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface ComunityPostsResponseTimelineItemQuotedMedia {
  photo?: ComunityPostsResponseTimelineItemQuotedMediaPhotoItem[];
}

interface ComunityPostsResponseTimelineItemQuotedMediaPhotoItem {
  id?: string;
  media_url_https?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "tweet_id": "2019740293411508351",
      "bookmarks": null,
      "created_at": "Fri Feb 06 11:49:45 +0000 2026",
      "favorites": 65,
      "text": "My long onboarding just got me my first annual premium.\n\nI can't believe it 😭 https://t.co/wCkargxVcY",
      "lang": "en",
      "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
      "views": "1581",
      "screen_name": "adriamatz",
      "quotes": 0,
      "replies": 33,
      "retweets": 0,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAeOhsyXwAAUdlZ.jpg",
            "id": "2019739667508215808"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/HAeOhsyXwAAUdlZ.jpg",
            "id": "2019739667508215808"
          }
        ]
      },
      "author": {
        "rest_id": "1844017390092271616",
        "name": "Adrià Martinez",
        "screen_name": "adriamatz",
        "avatar": null,
        "blue_verified": true
      },
      "quoted": {
        "tweet_id": "2019022067312869801",
        "bookmarks": 42,
        "created_at": "Wed Feb 04 12:15:47 +0000 2026",
        "favorites": 83,
        "text": "Went from 3 onboarding steps to 20+ with a hard paywall\n\nThen I realized:\n\n- Features don't move the needle\n- Marketing ...",
        "lang": "en",
        "views": "10223",
        "quotes": 1,
        "replies": 52,
        "retweets": 1,
        "conversation_id": "2019022067312869801",
        "author": {
          "rest_id": "1844017390092271616",
          "name": "Adrià Martinez",
          "screen_name": "adriamatz",
          "avatar": null,
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAUB3SBXwAAeEEu.jpg",
              "id": "2019022057187557376"
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/HAUB3SBXwAAeEEu.jpg",
              "id": "2019022057187557376"
            }
          ]
        }
      }
    },
    {
      "tweet_id": "2019740293411508351",
      "bookmarks": null,
      "created_at": "Fri Feb 06 11:49:45 +0000 2026",
      "favorites": 65,
      "text": "My long onboarding just got me my first annual premium.\n\nI can't believe it 😭 https://t.co/wCkargxVcY",
      "lang": "en",
      "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
      "views": "1581",
      "screen_name": "adriamatz",
      "quotes": 0,
      "replies": 33,
      "retweets": 0,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAeOhsyXwAAUdlZ.jpg",
            "id": "2019739667508215808"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/HAeOhsyXwAAUdlZ.jpg",
            "id": "2019739667508215808"
          }
        ]
      },
      "author": {
        "rest_id": "1844017390092271616",
        "name": "Adrià Martinez",
        "screen_name": "adriamatz",
        "avatar": null,
        "blue_verified": true
      },
      "quoted": {
        "tweet_id": "2019022067312869801",
        "bookmarks": 42,
        "created_at": "Wed Feb 04 12:15:47 +0000 2026",
        "favorites": 83,
        "text": "Went from 3 onboarding steps to 20+ with a hard paywall\n\nThen I realized:\n\n- Features don't move the needle\n- Marketing ...",
        "lang": "en",
        "views": "10223",
        "quotes": 1,
        "replies": 52,
        "retweets": 1,
        "conversation_id": "2019022067312869801",
        "author": {
          "rest_id": "1844017390092271616",
          "name": "Adrià Martinez",
          "screen_name": "adriamatz",
          "avatar": null,
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAUB3SBXwAAeEEu.jpg",
              "id": "2019022057187557376"
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/HAUB3SBXwAAeEEu.jpg",
              "id": "2019022057187557376"
            }
          ]
        }
      }
    }
  ],
  "cursor": "DAAFCgABHAelWJb__-oLAAIAAADoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJNY0IzVFd2ZHVSdEJ3SGp4aUhWaEIvSEFlWXRmMlhZSGtjQjMxeU1OWVJP..."
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "tweet_id": "2019740293411508351",
      "bookmarks": null,
      "created_at": "Fri Feb 06 11:49:45 +0000 2026",
      "favorites": 65,
      "text": "My long onboarding just got me my first annual premium.\n\nI can't believe it 😭 https://t.co/wCkargxVcY",
      "lang": "en",
      "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
      "views": "1581",
      "screen_name": "adriamatz",
      "quotes": 0,
      "replies": 33,
      "retweets": 0,
      "media": {},
      "author": {}
    }
  ],
  "cursor": "DAAFCgABHAelWJb__-oLAAIAAADoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJNY0IzVFd2ZHVSdEJ3SGp4aUhWaEIvSEFlWXRmMlhZSGtjQjMxeU1OWVJP..."
}
```

## Notes

- Pagination: uses cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
