# Tweet thread

**Route:** `GET /tweet_thread.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Gets the basic tweet info and the replies to it.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| id | STRING | Yes | `1738106896777699464` |

## Response Schema

```typescript
// Root: TweetThreadResponse
interface TweetThreadResponse {
  author: TweetThreadResponseAuthor;
  bookmarks: number;
  conversation_id: string;
  created_at: string;
  cursor: string;
  display_text: string;
  entities: TweetThreadResponseEntities;
  id: string;
  initial_tweets: null;
  lang: string;
  likes: number;
  media: null;
  quoted: TweetThreadResponseQuoted;
  quotes: number;
  replies: number;
  retweets: number;
  source: string;
  status: string;
  text: string;
  thread: TweetThreadResponseThreadItem[];
  views: string;
}

interface TweetThreadResponseAuthor {
  blue_verified: boolean;
  description: string;
  image: string;
  name: string;
  rest_id: string;
  screen_name: string;
  sub_count: number;
}

interface TweetThreadResponseEntities {
  hashtags: unknown[];
  symbols: unknown[];
  timestamps: unknown[];
  urls: unknown[];
  user_mentions: unknown[];
}

interface TweetThreadResponseQuoted {
  author: TweetThreadResponseQuotedAuthor;
  bookmarks: number;
  conversation_id: string;
  created_at: string;
  favorites: number;
  lang: string;
  media: TweetThreadResponseQuotedMedia;
  quotes: number;
  replies: number;
  retweets: number;
  source: string;
  text: string;
  tweet_id: string;
  views: string;
}

interface TweetThreadResponseQuotedAuthor {
  avatar: string;
  blue_verified: boolean;
  can_dm: boolean;
  name: string;
  rest_id: string;
  screen_name: string;
}

interface TweetThreadResponseQuotedMedia {
  video: TweetThreadResponseQuotedMediaVideoItem[];
}

interface TweetThreadResponseQuotedMediaVideoItem {
  aspect_ratio: number[];
  duration: number;
  id: string;
  media_url_https: string;
  original_info: TweetThreadResponseQuotedMediaVideoItemOriginalInfo;
  variants: TweetThreadResponseQuotedMediaVideoItemVariantsItem[];
}

interface TweetThreadResponseQuotedMediaVideoItemOriginalInfo {
  focus_rects: unknown[];
  height: number;
  width: number;
}

interface TweetThreadResponseQuotedMediaVideoItemVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
}

interface TweetThreadResponseThreadItem {
  author: TweetThreadResponseThreadItemAuthor;  // 36/36
  bookmarks: number;  // 36/36
  conversation_id: string;  // 36/36
  created_at: string;  // 36/36
  display_text: string;  // 36/36
  entities: TweetThreadResponseThreadItemEntities;  // 36/36
  id: string;  // 36/36
  lang: string;  // 36/36
  likes: number;  // 36/36
  media: unknown[] | TweetThreadResponseThreadItemMedia;  // 36/36
  quotes: number;  // 36/36
  replies: number;  // 36/36
  retweets: number;  // 36/36
  status: string;  // 36/36
  text: string;  // 36/36
  views: string;  // 36/36
}

interface TweetThreadResponseThreadItemAuthor {
  blue_verified?: boolean;
  can_dm?: boolean;
  description?: string;
  image?: string;
  name?: string;
  rest_id?: string;
  screen_name?: string;
  sub_count?: number;
}

interface TweetThreadResponseThreadItemEntities {
  media: TweetThreadResponseThreadItemEntitiesMediaItem[];
  hashtags?: unknown[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: unknown[];
  user_mentions?: TweetThreadResponseThreadItemEntitiesUserMentionsItem[];
}

interface TweetThreadResponseThreadItemEntitiesMediaItem {
  additional_media_info: TweetThreadResponseThreadItemEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status: TweetThreadResponseThreadItemEntitiesMediaItemAllowDownloadStatus;
  display_url: string;
  expanded_url: string;
  ext_media_availability: TweetThreadResponseThreadItemEntitiesMediaItemExtMediaAvailability;
  id_str: string;
  indices: number[];
  media_key: string;
  media_results: TweetThreadResponseThreadItemEntitiesMediaItemMediaResults;
  media_url_https: string;
  original_info: TweetThreadResponseThreadItemEntitiesMediaItemOriginalInfo;
  sizes: TweetThreadResponseThreadItemEntitiesMediaItemSizes;
  type: string;
  url: string;
  video_info: TweetThreadResponseThreadItemEntitiesMediaItemVideoInfo;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemAdditionalMediaInfo {
  monetizable: boolean;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemAllowDownloadStatus {
  allow_download: boolean;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemExtMediaAvailability {
  status: string;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemMediaResults {
  result: TweetThreadResponseThreadItemEntitiesMediaItemMediaResultsResult;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemMediaResultsResult {
  media_key: string;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemOriginalInfo {
  focus_rects: unknown[];
  height: number;
  width: number;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemSizes {
  large: TweetThreadResponseThreadItemEntitiesMediaItemSizesLarge;
  medium: TweetThreadResponseThreadItemEntitiesMediaItemSizesMedium;
  small: TweetThreadResponseThreadItemEntitiesMediaItemSizesSmall;
  thumb: TweetThreadResponseThreadItemEntitiesMediaItemSizesThumb;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemSizesLarge {
  h: number;
  resize: string;
  w: number;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemSizesMedium {
  h: number;
  resize: string;
  w: number;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemSizesSmall {
  h: number;
  resize: string;
  w: number;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemSizesThumb {
  h: number;
  resize: string;
  w: number;
}

interface TweetThreadResponseThreadItemEntitiesMediaItemVideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: TweetThreadResponseThreadItemEntitiesMediaItemVideoInfoVariantsItem[];
}

interface TweetThreadResponseThreadItemEntitiesMediaItemVideoInfoVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
}

interface TweetThreadResponseThreadItemEntitiesUserMentionsItem {
  id_str?: string;  // 38/3
  indices?: number[];  // 38/3
  name?: string;  // 38/3
  screen_name?: string;  // 38/3
}

interface TweetThreadResponseThreadItemMedia {
  video: TweetThreadResponseThreadItemMediaVideoItem[];
}

interface TweetThreadResponseThreadItemMediaVideoItem {
  aspect_ratio: number[];
  duration: number;
  id: string;
  media_url_https: string;
  original_info: TweetThreadResponseThreadItemMediaVideoItemOriginalInfo;
  variants: TweetThreadResponseThreadItemMediaVideoItemVariantsItem[];
}

interface TweetThreadResponseThreadItemMediaVideoItemOriginalInfo {
  focus_rects: unknown[];
  height: number;
  width: number;
}

interface TweetThreadResponseThreadItemMediaVideoItemVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
}

```

## Example: Full Response (synthesized)

```json
{
  "likes": 445,
  "display_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
  "created_at": "Wed Feb 04 14:30:41 +0000 2026",
  "quoted": {
    "tweet_id": "2019024044738171136",
    "bookmarks": 1979,
    "created_at": "Wed Feb 04 12:23:38 +0000 2026",
    "favorites": 5017,
    "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
    "lang": "en",
    "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    "views": "1023152",
    "quotes": 241,
    "replies": 302,
    "retweets": 596,
    "conversation_id": "2019024044738171136",
    "author": {
      "rest_id": "1033127171298975744",
      "name": "Puru Saxena",
      "can_dm": false,
      "screen_name": "saxena_puru",
      "avatar": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
      "blue_verified": true
    },
    "media": {
      "video": [
        {
          "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
          "variants": [
            {
              "content_type": "application/x-mpegURL",
              "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
              "bitrate": 256000
            },
            {
              "content_type": "application/x-mpegURL",
              "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
              "bitrate": 256000
            }
          ],
          "aspect_ratio": [
            660,
            660
          ],
          "duration": 159660,
          "original_info": {
            "height": 734,
            "width": 1320,
            "focus_rects": []
          },
          "id": "2019019581046833152"
        }
      ]
    }
  },
  "status": "active",
  "text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
  "retweets": 5,
  "bookmarks": 129,
  "quotes": 6,
  "replies": 281,
  "lang": "en",
  "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
  "views": "148355",
  "conversation_id": "2019056019121308063",
  "entities": {
    "hashtags": [],
    "symbols": [],
    "timestamps": [],
    "urls": [],
    "user_mentions": []
  },
  "initial_tweets": null,
  "author": {
    "rest_id": "1577241403",
    "name": "@levelsio",
    "screen_name": "levelsio",
    "image": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
    "blue_verified": true,
    "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
    "sub_count": 816080
  },
  "media": null,
  "id": "2019056019121308063",
  "thread": [
    {
      "likes": 4,
      "created_at": "Wed Feb 04 17:12:53 +0000 2026",
      "status": "active",
      "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
      "retweets": 0,
      "bookmarks": 3,
      "quotes": 0,
      "display_text": "oduct in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering teams to l...",
      "replies": 5,
      "lang": "en",
      "views": "1302",
      "conversation_id": "2019056019121308063",
      "id": "2019096837278310578",
      "author": {
        "rest_id": "1604942677056823304",
        "name": "Andrea",
        "screen_name": "AndreaDiPrata",
        "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
        "image": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
        "blue_verified": true,
        "can_dm": true,
        "sub_count": 118
      },
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "1577241403",
            "name": "@levelsio",
            "screen_name": "levelsio",
            "indices": [
              0,
              0
            ]
          },
          {
            "id_str": "1577241403",
            "name": "@levelsio",
            "screen_name": "levelsio",
            "indices": [
              0,
              0
            ]
          }
        ],
        "media": [
          {
            "display_url": "pic.x.com/AvoZSKX13Q",
            "expanded_url": "https://x.com/thosiawa/status/2019071790987743275/video/1",
            "id_str": "2019071686205755392",
            "indices": [
              287,
              287
            ],
            "media_key": "13_2019071686205755392",
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "type": "video",
            "url": "https://t.co/AvoZSKX13Q",
            "additional_media_info": {
              "monetizable": false
            },
            "ext_media_availability": {
              "status": "Available"
            },
            "sizes": {
              "large": {
                "h": 720,
                "w": 1280,
                "resize": "fit"
              },
              "medium": {
                "h": 675,
                "w": 1200,
                "resize": "fit"
              },
              "small": {
                "h": 383,
                "w": 680,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "allow_download_status": {
              "allow_download": true
            },
            "video_info": {
              "aspect_ratio": [
                16,
                16
              ],
              "duration_millis": 99968,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                  "bitrate": 256000
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "13_2019071686205755392"
              }
            }
          }
        ]
      },
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 99968,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019071686205755392"
          }
        ]
      }
    },
    {
      "likes": 4,
      "created_at": "Wed Feb 04 17:12:53 +0000 2026",
      "status": "active",
      "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
      "retweets": 0,
      "bookmarks": 3,
      "quotes": 0,
      "display_text": "oduct in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering teams to l...",
      "replies": 5,
      "lang": "en",
      "views": "1302",
      "conversation_id": "2019056019121308063",
      "id": "2019096837278310578",
      "author": {
        "rest_id": "1604942677056823304",
        "name": "Andrea",
        "screen_name": "AndreaDiPrata",
        "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
        "image": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
        "blue_verified": true,
        "can_dm": true,
        "sub_count": 118
      },
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "1577241403",
            "name": "@levelsio",
            "screen_name": "levelsio",
            "indices": [
              0,
              0
            ]
          },
          {
            "id_str": "1577241403",
            "name": "@levelsio",
            "screen_name": "levelsio",
            "indices": [
              0,
              0
            ]
          }
        ],
        "media": [
          {
            "display_url": "pic.x.com/AvoZSKX13Q",
            "expanded_url": "https://x.com/thosiawa/status/2019071790987743275/video/1",
            "id_str": "2019071686205755392",
            "indices": [
              287,
              287
            ],
            "media_key": "13_2019071686205755392",
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "type": "video",
            "url": "https://t.co/AvoZSKX13Q",
            "additional_media_info": {
              "monetizable": false
            },
            "ext_media_availability": {
              "status": "Available"
            },
            "sizes": {
              "large": {
                "h": 720,
                "w": 1280,
                "resize": "fit"
              },
              "medium": {
                "h": 675,
                "w": 1200,
                "resize": "fit"
              },
              "small": {
                "h": 383,
                "w": 680,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "allow_download_status": {
              "allow_download": true
            },
            "video_info": {
              "aspect_ratio": [
                16,
                16
              ],
              "duration_millis": 99968,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                  "bitrate": 256000
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "13_2019071686205755392"
              }
            }
          }
        ]
      },
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 99968,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019071686205755392"
          }
        ]
      }
    }
  ],
  "cursor": "DAAKCgABHAelVQ9__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RlR1Mm5HOEhpSEFVbllnSVhZUEFjQlVYZ09SYWdz..."
}
```

## Example: Minimal Response (required fields only)

```json
{
  "likes": 445,
  "display_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
  "created_at": "Wed Feb 04 14:30:41 +0000 2026",
  "quoted": {
    "tweet_id": "2019024044738171136",
    "bookmarks": 1979,
    "created_at": "Wed Feb 04 12:23:38 +0000 2026",
    "favorites": 5017,
    "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
    "lang": "en",
    "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    "views": "1023152",
    "quotes": 241,
    "replies": 302,
    "retweets": 596,
    "conversation_id": "2019024044738171136",
    "author": {
      "rest_id": "1033127171298975744",
      "name": "Puru Saxena",
      "can_dm": false,
      "screen_name": "saxena_puru",
      "avatar": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
      "blue_verified": true
    },
    "media": {
      "video": [
        {
          "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
          "variants": [
            {
              "content_type": "application/x-mpegURL",
              "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568"
            }
          ],
          "aspect_ratio": [
            660
          ],
          "duration": 159660,
          "original_info": {
            "height": 734,
            "width": 1320,
            "focus_rects": []
          },
          "id": "2019019581046833152"
        }
      ]
    }
  },
  "status": "active",
  "text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
  "retweets": 5,
  "bookmarks": 129,
  "quotes": 6,
  "replies": 281,
  "lang": "en",
  "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
  "views": "148355",
  "conversation_id": "2019056019121308063",
  "entities": {
    "hashtags": [],
    "symbols": [],
    "timestamps": [],
    "urls": [],
    "user_mentions": []
  },
  "initial_tweets": null,
  "author": {
    "rest_id": "1577241403",
    "name": "@levelsio",
    "screen_name": "levelsio",
    "image": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
    "blue_verified": true,
    "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
    "sub_count": 816080
  },
  "media": null,
  "id": "2019056019121308063",
  "thread": [
    {
      "likes": 4,
      "created_at": "Wed Feb 04 17:12:53 +0000 2026",
      "status": "active",
      "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
      "retweets": 0,
      "bookmarks": 3,
      "quotes": 0,
      "display_text": "oduct in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering teams to l...",
      "replies": 5,
      "lang": "en",
      "views": "1302",
      "conversation_id": "2019056019121308063",
      "id": "2019096837278310578",
      "author": {},
      "entities": {
        "media": [
          {
            "display_url": "pic.x.com/AvoZSKX13Q",
            "expanded_url": "https://x.com/thosiawa/status/2019071790987743275/video/1",
            "id_str": "2019071686205755392",
            "indices": [
              287
            ],
            "media_key": "13_2019071686205755392",
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "type": "video",
            "url": "https://t.co/AvoZSKX13Q",
            "additional_media_info": {
              "monetizable": false
            },
            "ext_media_availability": {
              "status": "Available"
            },
            "sizes": {
              "large": {
                "h": 720,
                "w": 1280,
                "resize": "fit"
              },
              "medium": {
                "h": 675,
                "w": 1200,
                "resize": "fit"
              },
              "small": {
                "h": 383,
                "w": 680,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "allow_download_status": {
              "allow_download": true
            },
            "video_info": {
              "aspect_ratio": [
                16
              ],
              "duration_millis": 99968,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447"
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "13_2019071686205755392"
              }
            }
          }
        ]
      },
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019071686205755392/pl/XnaiS1103ytcgrAC.m3u8?tag=21&v=447"
              }
            ],
            "aspect_ratio": [
              16
            ],
            "duration": 99968,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019071686205755392"
          }
        ]
      }
    }
  ],
  "cursor": "DAAKCgABHAelVQ9__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RlR1Mm5HOEhpSEFVbllnSVhZUEFjQlVYZ09SYWdz..."
}
```

## Notes

- Pagination: uses cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
