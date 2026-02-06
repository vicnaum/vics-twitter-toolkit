# Search

**Route:** `GET /search.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** WARNING: The Search endpoint is rate limited for new customers to 60 requests/minute. Please contact me if you need a higher limit. Email: alexander.xbx@gmail.com

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| search_type | ENUM | No | - |
| cursor | STRING | No | - |
| query | STRING | Yes | `cybertruck` |

## Response Schema

```typescript
// Root: SearchResponse
interface SearchResponse {
  next_cursor: string;
  timeline: SearchResponseTimelineItem[];
}

interface SearchResponseTimelineItem {
  bookmarks: number;  // 22/22
  created_at: string;  // 22/22
  favorites: number;  // 22/22
  lang: string;  // 22/22
  media: SearchResponseTimelineItemMedia | unknown[];  // 22/22
  quotes: number;  // 22/22
  replies: number;  // 22/22
  retweets: number;  // 22/22
  screen_name: string;  // 22/22
  text: string;  // 22/22
  tweet_id: string;  // 22/22
  type: string;  // 22/22
}

interface SearchResponseTimelineItemMedia {
  photo?: SearchResponseTimelineItemMediaPhotoItem[];
  video?: SearchResponseTimelineItemMediaVideoItem[];
}

interface SearchResponseTimelineItemMediaPhotoItem {
  media_url_https?: string;  // 14/4
}

interface SearchResponseTimelineItemMediaVideoItem {
  media_url_https?: string;
  variants?: SearchResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface SearchResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;  // 18/4
  content_type?: string;  // 24/4
  url?: string;  // 24/4
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1703108627035254988",
      "screen_name": "fishcatut",
      "bookmarks": 9,
      "favorites": 241,
      "created_at": "Sat Sep 16 18:08:33 +0000 2023",
      "text": "What’s going on here #cybertruck #tesla https://t.co/6W1eU8HAu6",
      "lang": "en",
      "quotes": 14,
      "replies": 42,
      "retweets": 19,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/F6KoROmWoAANrrN.jpg"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/F6KoROmWoAANrrN.jpg"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1703346196859801601/pu/img/zA9Stc-b335N7L45.jpg",
            "variants": [
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              },
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              }
            ]
          },
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1703346196859801601/pu/img/zA9Stc-b335N7L45.jpg",
            "variants": [
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              },
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "tweet",
      "tweet_id": "1703108627035254988",
      "screen_name": "fishcatut",
      "bookmarks": 9,
      "favorites": 241,
      "created_at": "Sat Sep 16 18:08:33 +0000 2023",
      "text": "What’s going on here #cybertruck #tesla https://t.co/6W1eU8HAu6",
      "lang": "en",
      "quotes": 14,
      "replies": 42,
      "retweets": 19,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/F6KoROmWoAANrrN.jpg"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/F6KoROmWoAANrrN.jpg"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1703346196859801601/pu/img/zA9Stc-b335N7L45.jpg",
            "variants": [
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              },
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              }
            ]
          },
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1703346196859801601/pu/img/zA9Stc-b335N7L45.jpg",
            "variants": [
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              },
              {
                "bitrate": 256000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1703346196859801601/pu/vid/avc1/480x270/fB9zcrSCmumapDBC.mp4?tag=12"
              }
            ]
          }
        ]
      }
    }
  ],
  "next_cursor": "DAACCgACF6OTaL7AJxAKAAMXo5Novr_Y8AgABAAAAAILAAUAAAEIRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJZWG96L0s3TnZRcVJlaTc1dlpsc0RTRjZN..."
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1703108627035254988",
      "screen_name": "fishcatut",
      "bookmarks": 9,
      "favorites": 241,
      "created_at": "Sat Sep 16 18:08:33 +0000 2023",
      "text": "What’s going on here #cybertruck #tesla https://t.co/6W1eU8HAu6",
      "lang": "en",
      "quotes": 14,
      "replies": 42,
      "retweets": 19,
      "media": {}
    }
  ],
  "next_cursor": "DAACCgACF6OTaL7AJxAKAAMXo5Novr_Y8AgABAAAAAILAAUAAAEIRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJZWG96L0s3TnZRcVJlaTc1dlpsc0RTRjZN..."
}
```

## Notes

- Pagination: uses next_cursor
