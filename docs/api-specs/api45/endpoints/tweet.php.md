# Tweet info

**Route:** `GET /tweet.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** With this endpoint you can get tweet info by it's id.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| id | STRING | Yes | `1671370010743263233` |

## Response Schema

```typescript
// Root: TweetInfoResponse
interface TweetInfoResponse {
  author: TweetInfoResponseAuthor;
  bookmarks: number;
  conversation_id: string;
  created_at: string;
  id: string;
  lang: string;
  likes: number;
  media: TweetInfoResponseMedia;
  quotes: number;
  replies: number;
  retweets: number;
  text: string;
}

interface TweetInfoResponseAuthor {
  blue_verified: boolean;
  image: string;
  name: string;
  rest_id: string;
  screen_name: string;
}

interface TweetInfoResponseMedia {
  video: TweetInfoResponseMediaVideoItem[];
}

interface TweetInfoResponseMediaVideoItem {
  media_url_https: string;
  variants: TweetInfoResponseMediaVideoItemVariantsItem[];
}

interface TweetInfoResponseMediaVideoItemVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
}

```

## Example: Full Response (synthesized)

```json
{
  "likes": 18776,
  "created_at": "Wed Jun 21 04:10:37 +0000 2023",
  "text": "Watching Twitter videos on my TV only took me a few seconds to set up🤯\n\nAn awesome feature, if you’re watching longer v...",
  "retweets": 2518,
  "bookmarks": 983,
  "quotes": 212,
  "replies": 1649,
  "lang": "en",
  "conversation_id": "1671370010743263233",
  "author": {
    "rest_id": "2337692699",
    "name": "Mathias Føns",
    "screen_name": "FonsDK",
    "image": "https://pbs.twimg.com/profile_images/1485391315819020292/1_3QNpYj_normal.jpg",
    "blue_verified": true
  },
  "media": {
    "video": [
      {
        "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1671367628504309761/img/WoU2L8IXtzfmhlq9.jpg",
        "variants": [
          {
            "bitrate": 632000,
            "content_type": "video/mp4",
            "url": "https://video.twimg.com/amplify_video/1671367628504309761/vid/320x568/GgI9Wk58dUudZiOo.mp4?tag=14"
          },
          {
            "bitrate": 632000,
            "content_type": "video/mp4",
            "url": "https://video.twimg.com/amplify_video/1671367628504309761/vid/320x568/GgI9Wk58dUudZiOo.mp4?tag=14"
          }
        ]
      }
    ]
  },
  "id": "1671370010743263233"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "likes": 18776,
  "created_at": "Wed Jun 21 04:10:37 +0000 2023",
  "text": "Watching Twitter videos on my TV only took me a few seconds to set up🤯\n\nAn awesome feature, if you’re watching longer v...",
  "retweets": 2518,
  "bookmarks": 983,
  "quotes": 212,
  "replies": 1649,
  "lang": "en",
  "conversation_id": "1671370010743263233",
  "author": {
    "rest_id": "2337692699",
    "name": "Mathias Føns",
    "screen_name": "FonsDK",
    "image": "https://pbs.twimg.com/profile_images/1485391315819020292/1_3QNpYj_normal.jpg",
    "blue_verified": true
  },
  "media": {
    "video": [
      {
        "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1671367628504309761/img/WoU2L8IXtzfmhlq9.jpg",
        "variants": [
          {
            "content_type": "video/mp4",
            "url": "https://video.twimg.com/amplify_video/1671367628504309761/vid/320x568/GgI9Wk58dUudZiOo.mp4?tag=14"
          }
        ]
      }
    ]
  },
  "id": "1671370010743263233"
}
```
