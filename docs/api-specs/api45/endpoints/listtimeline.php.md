# List timeline

**Route:** `GET /listtimeline.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** With this endpoint you can get the timeline of the lists.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| list_id | STRING | Yes | `1343798673386434560` |

## Response Schema

```typescript
// Root: ListTimelineResponse
interface ListTimelineResponse {
  timeline: ListTimelineResponseTimelineItem[];
}

interface ListTimelineResponseTimelineItem {
  bookmarks: number;  // 81/81
  created_at: string;  // 81/81
  favorites: number;  // 81/81
  lang: string;  // 81/81
  media: unknown[] | ListTimelineResponseTimelineItemMedia;  // 81/81
  quotes: number;  // 81/81
  replies: number;  // 81/81
  retweets: number;  // 81/81
  screen_name: string;  // 81/81
  text: string;  // 81/81
  tweet_id: string;  // 81/81
}

interface ListTimelineResponseTimelineItemMedia {
  photo?: ListTimelineResponseTimelineItemMediaPhotoItem[];
  video?: ListTimelineResponseTimelineItemMediaVideoItem[];
}

interface ListTimelineResponseTimelineItemMediaPhotoItem {
  media_url_https?: string;  // 26/4
}

interface ListTimelineResponseTimelineItemMediaVideoItem {
  media_url_https?: string;
  variants?: ListTimelineResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface ListTimelineResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;  // 12/4
  content_type?: string;  // 16/4
  url?: string;  // 16/4
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "tweet_id": "1703367017942700311",
      "bookmarks": 0,
      "created_at": "Sun Sep 17 11:15:18 +0000 2023",
      "favorites": 0,
      "text": "Inside Out is one of Pixar's greatest hits, but it almost looked completely different, with Joy being paired with anothe...",
      "lang": "en",
      "screen_name": "screenrant",
      "quotes": 0,
      "replies": 0,
      "retweets": 0,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/F6N4dr7W4AAMDXD.jpg"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/F6N4dr7W4AAMDXD.jpg"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1703183542123986944/img/BCyOIU6fT16KIl_f.jpg",
            "variants": [
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              }
            ]
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1703183542123986944/img/BCyOIU6fT16KIl_f.jpg",
            "variants": [
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              }
            ]
          }
        ]
      }
    },
    {
      "tweet_id": "1703367017942700311",
      "bookmarks": 0,
      "created_at": "Sun Sep 17 11:15:18 +0000 2023",
      "favorites": 0,
      "text": "Inside Out is one of Pixar's greatest hits, but it almost looked completely different, with Joy being paired with anothe...",
      "lang": "en",
      "screen_name": "screenrant",
      "quotes": 0,
      "replies": 0,
      "retweets": 0,
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/F6N4dr7W4AAMDXD.jpg"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/F6N4dr7W4AAMDXD.jpg"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1703183542123986944/img/BCyOIU6fT16KIl_f.jpg",
            "variants": [
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              }
            ]
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1703183542123986944/img/BCyOIU6fT16KIl_f.jpg",
            "variants": [
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/amplify_video/1703183542123986944/vid/avc1/1280x720/snApqe-z4JHj5jQD.mp4?tag=14"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "tweet_id": "1703367017942700311",
      "bookmarks": 0,
      "created_at": "Sun Sep 17 11:15:18 +0000 2023",
      "favorites": 0,
      "text": "Inside Out is one of Pixar's greatest hits, but it almost looked completely different, with Joy being paired with anothe...",
      "lang": "en",
      "screen_name": "screenrant",
      "quotes": 0,
      "replies": 0,
      "retweets": 0,
      "media": {}
    }
  ]
}
```

## Notes

- Pagination: uses cursor parameter
