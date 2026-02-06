# User's Media

**Route:** `GET /usermedia.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Helps to get a user's media

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| screenname | STRING | Yes | `elonmusk` |
| rest_id | STRING | No | - |

## Response Schema

```typescript
// Root: UserSMediaResponse
interface UserSMediaResponse {
  next_cursor: string;
  status: string;
  timeline: UserSMediaResponseTimelineItem[];
  user: UserSMediaResponseUser;
}

interface UserSMediaResponseTimelineItem {
  author: UserSMediaResponseTimelineItemAuthor;  // 10/10
  bookmarks: number;  // 10/10
  conversation_id: string;  // 10/10
  created_at: string;  // 10/10
  favorites: number;  // 10/10
  lang: string;  // 10/10
  media: UserSMediaResponseTimelineItemMedia;  // 10/10
  quotes: number;  // 10/10
  replies: number;  // 10/10
  retweets: number;  // 10/10
  source: string;  // 10/10
  text: string;  // 10/10
  tweet_id: string;  // 10/10
  views: string;  // 10/10
  quoted?: UserSMediaResponseTimelineItemQuoted;  // 3/10
  reply_to?: string;  // 6/10
}

interface UserSMediaResponseTimelineItemAuthor {
  avatar?: null;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserSMediaResponseTimelineItemMedia {
  photo?: UserSMediaResponseTimelineItemMediaPhotoItem[];
  video?: UserSMediaResponseTimelineItemMediaVideoItem[];
}

interface UserSMediaResponseTimelineItemMediaPhotoItem {
  id?: string;
  media_url_https?: string;
}

interface UserSMediaResponseTimelineItemMediaVideoItem {
  aspect_ratio?: number[];
  duration?: null;
  id?: string;
  media_url_https?: string;
  original_info?: UserSMediaResponseTimelineItemMediaVideoItemOriginalInfo;
  variants?: UserSMediaResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface UserSMediaResponseTimelineItemMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserSMediaResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;
  content_type?: string;
  url?: string;
}

interface UserSMediaResponseTimelineItemQuoted {
  author?: UserSMediaResponseTimelineItemQuotedAuthor;
  bookmarks?: number | null;
  conversation_id?: string | null;
  created_at?: string | null;
  favorites?: number | null;
  lang?: string | null;
  media?: UserSMediaResponseTimelineItemQuotedMedia | unknown[];
  quotes?: number | null;
  replies?: number | null;
  retweets?: number | null;
  text?: string | null;
  tweet_id?: string | null;
  views?: string | null;
}

interface UserSMediaResponseTimelineItemQuotedAuthor {
  avatar?: null;
  blue_verified?: boolean | null;
  name?: string | null;
  rest_id?: string | null;
  screen_name?: string | null;
}

interface UserSMediaResponseTimelineItemQuotedMedia {
  photo?: UserSMediaResponseTimelineItemQuotedMediaPhotoItem[];
}

interface UserSMediaResponseTimelineItemQuotedMediaPhotoItem {
  id?: string;
  media_url_https?: string;
}

interface UserSMediaResponseUser {
  affiliates: unknown[];
  avatar: string;
  blue_verified: boolean;
  business_account: unknown[];
  created_at: string;
  desc: string;
  friends: number;
  header_image: string;
  id: string;
  location: string;
  media_count: number;
  name: string;
  pinned_tweet_ids_str: string[];
  profile: null;
  protected: null;
  rest_id: string;
  status: string;
  statuses_count: number;
  sub_count: number;
  verification_type: null;
  website: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "tweet_id": "2019604620893434151",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 02:50:38 +0000 2026",
      "favorites": 8,
      "text": "@CloudR907 You're trolling right https://t.co/lNmuqVKhLC",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "reply_to": "2019602809965146633",
      "views": "1393",
      "quotes": 0,
      "replies": 1,
      "retweets": 0,
      "conversation_id": "2019567144938410392",
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcTsmVXsAAG-_1.jpg",
            "id": "2019604614824308736"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcTsmVXsAAG-_1.jpg",
            "id": "2019604614824308736"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/HAbTz8TWgAAfa-o.jpg",
            "variants": [
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              },
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              }
            ],
            "aspect_ratio": [
              249,
              249
            ],
            "duration": null,
            "original_info": {
              "height": 304,
              "width": 498,
              "focus_rects": []
            },
            "id": "2019534372236328960"
          },
          {
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/HAbTz8TWgAAfa-o.jpg",
            "variants": [
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              },
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              }
            ],
            "aspect_ratio": [
              249,
              249
            ],
            "duration": null,
            "original_info": {
              "height": 304,
              "width": 498,
              "focus_rects": []
            },
            "id": "2019534372236328960"
          }
        ]
      },
      "author": {
        "rest_id": "1577241403",
        "name": "@levelsio",
        "screen_name": "levelsio",
        "avatar": null,
        "blue_verified": true
      },
      "quoted": {
        "tweet_id": "2019440554736513150",
        "bookmarks": 217,
        "created_at": "Thu Feb 05 15:58:42 +0000 2026",
        "favorites": 1943,
        "text": "Markets crashing so a great day to buy up things cheaper than normal\n\nAdded $237,000 more @Tesla to my portfolio\n\nI feel...",
        "lang": "en",
        "views": "347701",
        "quotes": 8,
        "replies": 165,
        "retweets": 38,
        "conversation_id": "2019440554736513150",
        "author": {
          "rest_id": "1577241403",
          "name": "@levelsio",
          "screen_name": "levelsio",
          "avatar": null,
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAZ-exJWoAAsDoq.jpg",
              "id": "2019440549975990272"
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/HAZ-exJWoAAsDoq.jpg",
              "id": "2019440549975990272"
            }
          ]
        }
      }
    },
    {
      "tweet_id": "2019604620893434151",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 02:50:38 +0000 2026",
      "favorites": 8,
      "text": "@CloudR907 You're trolling right https://t.co/lNmuqVKhLC",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "reply_to": "2019602809965146633",
      "views": "1393",
      "quotes": 0,
      "replies": 1,
      "retweets": 0,
      "conversation_id": "2019567144938410392",
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcTsmVXsAAG-_1.jpg",
            "id": "2019604614824308736"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcTsmVXsAAG-_1.jpg",
            "id": "2019604614824308736"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/HAbTz8TWgAAfa-o.jpg",
            "variants": [
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              },
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              }
            ],
            "aspect_ratio": [
              249,
              249
            ],
            "duration": null,
            "original_info": {
              "height": 304,
              "width": 498,
              "focus_rects": []
            },
            "id": "2019534372236328960"
          },
          {
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/HAbTz8TWgAAfa-o.jpg",
            "variants": [
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              },
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/HAbTz8TWgAAfa-o.mp4"
              }
            ],
            "aspect_ratio": [
              249,
              249
            ],
            "duration": null,
            "original_info": {
              "height": 304,
              "width": 498,
              "focus_rects": []
            },
            "id": "2019534372236328960"
          }
        ]
      },
      "author": {
        "rest_id": "1577241403",
        "name": "@levelsio",
        "screen_name": "levelsio",
        "avatar": null,
        "blue_verified": true
      },
      "quoted": {
        "tweet_id": "2019440554736513150",
        "bookmarks": 217,
        "created_at": "Thu Feb 05 15:58:42 +0000 2026",
        "favorites": 1943,
        "text": "Markets crashing so a great day to buy up things cheaper than normal\n\nAdded $237,000 more @Tesla to my portfolio\n\nI feel...",
        "lang": "en",
        "views": "347701",
        "quotes": 8,
        "replies": 165,
        "retweets": 38,
        "conversation_id": "2019440554736513150",
        "author": {
          "rest_id": "1577241403",
          "name": "@levelsio",
          "screen_name": "levelsio",
          "avatar": null,
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAZ-exJWoAAsDoq.jpg",
              "id": "2019440549975990272"
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/HAZ-exJWoAAsDoq.jpg",
              "id": "2019440549975990272"
            }
          ]
        }
      }
    }
  ],
  "next_cursor": "DAABCgABHAemPcs___0KAAIcBWnGmlpxaAgAAwAAAAIAAA",
  "status": "ok",
  "user": {
    "status": "active",
    "profile": null,
    "rest_id": "1577241403",
    "blue_verified": true,
    "verification_type": null,
    "affiliates": [],
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
    "desc": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
    "name": "@levelsio",
    "website": "readMAKE.com",
    "protected": null,
    "location": "📕 My book $6K/m  👉",
    "friends": 2689,
    "sub_count": 816081,
    "statuses_count": 168924,
    "media_count": 18324,
    "created_at": "Mon Jul 08 09:31:59 +0000 2013",
    "pinned_tweet_ids_str": [
      "1947295471082316145"
    ],
    "id": "1577241403"
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "tweet_id": "2019604620893434151",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 02:50:38 +0000 2026",
      "favorites": 8,
      "text": "@CloudR907 You're trolling right https://t.co/lNmuqVKhLC",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "views": "1393",
      "quotes": 0,
      "replies": 1,
      "retweets": 0,
      "conversation_id": "2019567144938410392",
      "media": {},
      "author": {}
    }
  ],
  "next_cursor": "DAABCgABHAemPcs___0KAAIcBWnGmlpxaAgAAwAAAAIAAA",
  "status": "ok",
  "user": {
    "status": "active",
    "profile": null,
    "rest_id": "1577241403",
    "blue_verified": true,
    "verification_type": null,
    "affiliates": [],
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
    "desc": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
    "name": "@levelsio",
    "website": "readMAKE.com",
    "protected": null,
    "location": "📕 My book $6K/m  👉",
    "friends": 2689,
    "sub_count": 816081,
    "statuses_count": 168924,
    "media_count": 18324,
    "created_at": "Mon Jul 08 09:31:59 +0000 2013",
    "pinned_tweet_ids_str": [
      "1947295471082316145"
    ],
    "id": "1577241403"
  }
}
```

## Notes

- Pagination: uses next_cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
