# User replies

**Route:** `GET /replies.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Gets user's replies of the user.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| screenname | STRING | Yes | - |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: UserRepliesResponse
interface UserRepliesResponse {
  next_cursor: string;
  timeline: UserRepliesResponseTimelineItem[];
  user: UserRepliesResponseUser;
}

interface UserRepliesResponseTimelineItem {
  author: UserRepliesResponseTimelineItemAuthor;  // 27/27
  bookmarks: number;  // 27/27
  conversation_id: string;  // 27/27
  created_at: string;  // 27/27
  entities: UserRepliesResponseTimelineItemEntities;  // 27/27
  favorites: number;  // 27/27
  in_reply_to_status_id_str: null | string;  // 27/27
  lang: string;  // 27/27
  media: unknown[] | UserRepliesResponseTimelineItemMedia;  // 27/27
  quotes: number;  // 27/27
  replies: number;  // 27/27
  retweets: number;  // 27/27
  text: string;  // 27/27
  tweet_id: string;  // 27/27
  views: string | null;  // 27/27
  quoted?: UserRepliesResponseTimelineItemQuoted;  // 8/27
  retweeted?: UserRepliesResponseTimelineItemRetweeted;  // 10/27
  retweeted_tweet?: UserRepliesResponseTimelineItemRetweetedTweet;  // 10/27
  source?: string;  // 13/27
}

interface UserRepliesResponseTimelineItemAuthor {
  avatar?: string;
  blue_verified?: boolean;
  favourites_count?: number;
  followers_count?: number;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserRepliesResponseTimelineItemEntities {
  hashtags?: unknown[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: unknown[];
  user_mentions?: UserRepliesResponseTimelineItemEntitiesUserMentionsItem[];
}

interface UserRepliesResponseTimelineItemEntitiesUserMentionsItem {
  id_str?: string;
  name?: string;
  screen_name?: string;
}

interface UserRepliesResponseTimelineItemMedia {
  photo: UserRepliesResponseTimelineItemMediaPhotoItem[];
  video?: UserRepliesResponseTimelineItemMediaVideoItem[];
}

interface UserRepliesResponseTimelineItemMediaPhotoItem {
  id: string;
  media_url_https: string;
}

interface UserRepliesResponseTimelineItemMediaVideoItem {
  aspect_ratio?: number[];
  duration?: number;
  id?: string;
  media_url_https?: string;
  original_info?: UserRepliesResponseTimelineItemMediaVideoItemOriginalInfo;
  variants?: UserRepliesResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface UserRepliesResponseTimelineItemMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserRepliesResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;  // 11/5
  content_type?: string;  // 14/5
  url?: string;  // 14/5
}

interface UserRepliesResponseTimelineItemQuoted {
  author?: UserRepliesResponseTimelineItemQuotedAuthor;
  bookmarks?: number;
  conversation_id?: string;
  created_at?: string;
  favorites?: number;
  lang?: string;
  media?: UserRepliesResponseTimelineItemQuotedMedia | unknown[];
  quotes?: number;
  replies?: number;
  retweets?: number;
  text?: string;
  tweet_id?: string;
  views?: string;
}

interface UserRepliesResponseTimelineItemQuotedAuthor {
  avatar?: string;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserRepliesResponseTimelineItemQuotedMedia {
  photo: UserRepliesResponseTimelineItemQuotedMediaPhotoItem[];
  video?: UserRepliesResponseTimelineItemQuotedMediaVideoItem[];
}

interface UserRepliesResponseTimelineItemQuotedMediaPhotoItem {
  id: string;
  media_url_https: string;
}

interface UserRepliesResponseTimelineItemQuotedMediaVideoItem {
  aspect_ratio?: number[];
  duration?: number;
  id?: string;
  media_url_https?: string;
  original_info?: UserRepliesResponseTimelineItemQuotedMediaVideoItemOriginalInfo;
  variants?: UserRepliesResponseTimelineItemQuotedMediaVideoItemVariantsItem[];
}

interface UserRepliesResponseTimelineItemQuotedMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserRepliesResponseTimelineItemQuotedMediaVideoItemVariantsItem {
  bitrate?: number;  // 12/5
  content_type?: string;  // 15/5
  url?: string;  // 15/5
}

interface UserRepliesResponseTimelineItemRetweeted {
  id?: string;
}

interface UserRepliesResponseTimelineItemRetweetedTweet {
  author?: UserRepliesResponseTimelineItemRetweetedTweetAuthor;
  bookmarks?: number;
  conversation_id?: string;
  created_at?: string;
  favorites?: number;
  lang?: string;
  media?: UserRepliesResponseTimelineItemRetweetedTweetMedia | unknown[];
  quotes?: number;
  replies?: number;
  retweets?: number;
  text?: string;
  tweet_id?: string;
}

interface UserRepliesResponseTimelineItemRetweetedTweetAuthor {
  avatar?: string;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserRepliesResponseTimelineItemRetweetedTweetMedia {
  photo: UserRepliesResponseTimelineItemRetweetedTweetMediaPhotoItem[];
  video?: UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItem[];
}

interface UserRepliesResponseTimelineItemRetweetedTweetMediaPhotoItem {
  id: string;
  media_url_https: string;
}

interface UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItem {
  aspect_ratio?: number[];
  duration?: number;
  id?: string;
  media_url_https?: string;
  original_info?: UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItemOriginalInfo;
  variants?: UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItemVariantsItem[];
}

interface UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserRepliesResponseTimelineItemRetweetedTweetMediaVideoItemVariantsItem {
  bitrate?: number;  // 26/5
  content_type?: string;  // 33/5
  url?: string;  // 33/5
}

interface UserRepliesResponseUser {
  affiliates: UserRepliesResponseUserAffiliates;
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
}

interface UserRepliesResponseUserAffiliates {
  label: UserRepliesResponseUserAffiliatesLabel;
}

interface UserRepliesResponseUserAffiliatesLabel {
  badge: UserRepliesResponseUserAffiliatesLabelBadge;
  description: string;
  url: UserRepliesResponseUserAffiliatesLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface UserRepliesResponseUserAffiliatesLabelBadge {
  url: string;
}

interface UserRepliesResponseUserAffiliatesLabelUrl {
  url: string;
  urlType: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "tweet_id": "2019761032319881441",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 13:12:10 +0000 2026",
      "favorites": 0,
      "text": "RT @KatieMiller: China's installed solar power capacity is projected to surpass coal for the first time this year. \n\nThe...",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id_str": "",
      "views": "1",
      "quotes": 0,
      "replies": 0,
      "retweets": 136,
      "conversation_id": "2019761032319881441",
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019640314315591680/img/JqFAtY1y0vA6WaRx.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 30000,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019640314315591680"
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019640314315591680/img/JqFAtY1y0vA6WaRx.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 30000,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019640314315591680"
          }
        ],
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcAM0GacAIo2ya.jpg",
            "id": "2019583178042929154"
          }
        ]
      },
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "240504013",
            "name": "Katie Miller",
            "screen_name": "KatieMiller"
          },
          {
            "id_str": "240504013",
            "name": "Katie Miller",
            "screen_name": "KatieMiller"
          }
        ]
      },
      "author": {
        "rest_id": "44196397",
        "name": "Elon Musk",
        "screen_name": "elonmusk",
        "followers_count": 234041799,
        "favourites_count": 206560,
        "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
        "blue_verified": true
      },
      "retweeted": {
        "id": "2019753322790408697"
      },
      "retweeted_tweet": {
        "tweet_id": "2019753322790408697",
        "bookmarks": 23,
        "created_at": "Fri Feb 06 12:41:32 +0000 2026",
        "favorites": 794,
        "text": "China's installed solar power capacity is projected to surpass coal for the first time this year. \n\nThe share of coal-fi...",
        "lang": "en",
        "quotes": 17,
        "replies": 284,
        "retweets": 136,
        "conversation_id": "2019753322790408697",
        "author": {
          "rest_id": "240504013",
          "name": "Katie Miller",
          "screen_name": "KatieMiller",
          "avatar": "https://pbs.twimg.com/profile_images/1949859422701834240/vcH44KhQ_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAea8T9XIAABI9s.jpg",
              "id": "2019753318839427072"
            }
          ],
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019647504074018816/img/jESIo7NHihkRIRjZ.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                }
              ],
              "aspect_ratio": [
                1,
                1
              ],
              "duration": 10054,
              "original_info": {
                "height": 960,
                "width": 960,
                "focus_rects": []
              },
              "id": "2019647504074018816"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019647504074018816/img/jESIo7NHihkRIRjZ.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                }
              ],
              "aspect_ratio": [
                1,
                1
              ],
              "duration": 10054,
              "original_info": {
                "height": 960,
                "width": 960,
                "focus_rects": []
              },
              "id": "2019647504074018816"
            }
          ]
        }
      },
      "quoted": {
        "tweet_id": "2019480054871285842",
        "bookmarks": 664,
        "created_at": "Thu Feb 05 18:35:39 +0000 2026",
        "favorites": 2052,
        "text": "Corporations that are purely AI and robotics will vastly outperform any corporations that have people in the loop\n\nYou c...",
        "lang": "en",
        "views": "4034793",
        "quotes": 79,
        "replies": 469,
        "retweets": 404,
        "conversation_id": "2019480054871285842",
        "author": {
          "rest_id": "1818311005698678784",
          "name": "X Freeze",
          "screen_name": "XFreeze",
          "avatar": "https://pbs.twimg.com/profile_images/1876785200010539008/2_HFJjq9_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019479090923786241/img/ugd2HjRREAdCWKmv.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "duration": 82407,
              "original_info": {
                "height": 1080,
                "width": 1920,
                "focus_rects": []
              },
              "id": "2019479090923786241"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019479090923786241/img/ugd2HjRREAdCWKmv.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "duration": 82407,
              "original_info": {
                "height": 1080,
                "width": 1920,
                "focus_rects": []
              },
              "id": "2019479090923786241"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAa0YGHXcAAY45a.jpg",
              "id": "2019499808973615104"
            }
          ]
        }
      }
    },
    {
      "tweet_id": "2019761032319881441",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 13:12:10 +0000 2026",
      "favorites": 0,
      "text": "RT @KatieMiller: China's installed solar power capacity is projected to surpass coal for the first time this year. \n\nThe...",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id_str": "",
      "views": "1",
      "quotes": 0,
      "replies": 0,
      "retweets": 136,
      "conversation_id": "2019761032319881441",
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019640314315591680/img/JqFAtY1y0vA6WaRx.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 30000,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019640314315591680"
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019640314315591680/img/JqFAtY1y0vA6WaRx.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/2019640314315591680/pl/3TSQ3QvNSC8o40aU.m3u8?tag=21&v=890",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              16,
              16
            ],
            "duration": 30000,
            "original_info": {
              "height": 720,
              "width": 1280,
              "focus_rects": []
            },
            "id": "2019640314315591680"
          }
        ],
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcAM0GacAIo2ya.jpg",
            "id": "2019583178042929154"
          }
        ]
      },
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "240504013",
            "name": "Katie Miller",
            "screen_name": "KatieMiller"
          },
          {
            "id_str": "240504013",
            "name": "Katie Miller",
            "screen_name": "KatieMiller"
          }
        ]
      },
      "author": {
        "rest_id": "44196397",
        "name": "Elon Musk",
        "screen_name": "elonmusk",
        "followers_count": 234041799,
        "favourites_count": 206560,
        "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
        "blue_verified": true
      },
      "retweeted": {
        "id": "2019753322790408697"
      },
      "retweeted_tweet": {
        "tweet_id": "2019753322790408697",
        "bookmarks": 23,
        "created_at": "Fri Feb 06 12:41:32 +0000 2026",
        "favorites": 794,
        "text": "China's installed solar power capacity is projected to surpass coal for the first time this year. \n\nThe share of coal-fi...",
        "lang": "en",
        "quotes": 17,
        "replies": 284,
        "retweets": 136,
        "conversation_id": "2019753322790408697",
        "author": {
          "rest_id": "240504013",
          "name": "Katie Miller",
          "screen_name": "KatieMiller",
          "avatar": "https://pbs.twimg.com/profile_images/1949859422701834240/vcH44KhQ_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAea8T9XIAABI9s.jpg",
              "id": "2019753318839427072"
            }
          ],
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019647504074018816/img/jESIo7NHihkRIRjZ.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                }
              ],
              "aspect_ratio": [
                1,
                1
              ],
              "duration": 10054,
              "original_info": {
                "height": 960,
                "width": 960,
                "focus_rects": []
              },
              "id": "2019647504074018816"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019647504074018816/img/jESIo7NHihkRIRjZ.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019647504074018816/pl/NYcjCEs8TPJvLHVo.m3u8?tag=21&v=cfc",
                  "bitrate": 432000
                }
              ],
              "aspect_ratio": [
                1,
                1
              ],
              "duration": 10054,
              "original_info": {
                "height": 960,
                "width": 960,
                "focus_rects": []
              },
              "id": "2019647504074018816"
            }
          ]
        }
      },
      "quoted": {
        "tweet_id": "2019480054871285842",
        "bookmarks": 664,
        "created_at": "Thu Feb 05 18:35:39 +0000 2026",
        "favorites": 2052,
        "text": "Corporations that are purely AI and robotics will vastly outperform any corporations that have people in the loop\n\nYou c...",
        "lang": "en",
        "views": "4034793",
        "quotes": 79,
        "replies": 469,
        "retweets": 404,
        "conversation_id": "2019480054871285842",
        "author": {
          "rest_id": "1818311005698678784",
          "name": "X Freeze",
          "screen_name": "XFreeze",
          "avatar": "https://pbs.twimg.com/profile_images/1876785200010539008/2_HFJjq9_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019479090923786241/img/ugd2HjRREAdCWKmv.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "duration": 82407,
              "original_info": {
                "height": 1080,
                "width": 1920,
                "focus_rects": []
              },
              "id": "2019479090923786241"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019479090923786241/img/ugd2HjRREAdCWKmv.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/2019479090923786241/pl/rrot0Psh0J0RAnRO.m3u8?tag=21&v=ee2",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "duration": 82407,
              "original_info": {
                "height": 1080,
                "width": 1920,
                "focus_rects": []
              },
              "id": "2019479090923786241"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/HAa0YGHXcAAY45a.jpg",
              "id": "2019499808973615104"
            }
          ]
        }
      }
    }
  ],
  "next_cursor": "DAAHCgABHAemD6o__-ULAAIAAAATMjAxOTY4Mjg0NDAwNDcyOTE3OAgAAwAAAAIAAA",
  "user": {
    "status": "active",
    "profile": null,
    "rest_id": "44196397",
    "blue_verified": true,
    "verification_type": null,
    "affiliates": {
      "label": {
        "url": {
          "url": "https://twitter.com/X",
          "urlType": "DeepLink"
        },
        "badge": {
          "url": "https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg"
        },
        "description": "X",
        "userLabelType": "BusinessLabel",
        "userLabelDisplayType": "Badge"
      }
    },
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/44196397/1739948056",
    "desc": "",
    "name": "Elon Musk",
    "protected": null,
    "location": "",
    "friends": 1283,
    "sub_count": 234041422,
    "statuses_count": 96267,
    "media_count": 4346,
    "created_at": "Tue Jun 02 20:12:29 +0000 2009",
    "pinned_tweet_ids_str": [
      "2018784828129243614"
    ],
    "id": "44196397"
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "tweet_id": "2019761032319881441",
      "bookmarks": 0,
      "created_at": "Fri Feb 06 13:12:10 +0000 2026",
      "favorites": 0,
      "text": "RT @KatieMiller: China's installed solar power capacity is projected to surpass coal for the first time this year. \n\nThe...",
      "lang": "en",
      "in_reply_to_status_id_str": "",
      "views": "1",
      "quotes": 0,
      "replies": 0,
      "retweets": 136,
      "conversation_id": "2019761032319881441",
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/HAcAM0GacAIo2ya.jpg",
            "id": "2019583178042929154"
          }
        ]
      },
      "entities": {},
      "author": {}
    }
  ],
  "next_cursor": "DAAHCgABHAemD6o__-ULAAIAAAATMjAxOTY4Mjg0NDAwNDcyOTE3OAgAAwAAAAIAAA",
  "user": {
    "status": "active",
    "profile": null,
    "rest_id": "44196397",
    "blue_verified": true,
    "verification_type": null,
    "affiliates": {
      "label": {
        "url": {
          "url": "https://twitter.com/X",
          "urlType": "DeepLink"
        },
        "badge": {
          "url": "https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg"
        },
        "description": "X",
        "userLabelType": "BusinessLabel",
        "userLabelDisplayType": "Badge"
      }
    },
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/44196397/1739948056",
    "desc": "",
    "name": "Elon Musk",
    "protected": null,
    "location": "",
    "friends": 1283,
    "sub_count": 234041422,
    "statuses_count": 96267,
    "media_count": 4346,
    "created_at": "Tue Jun 02 20:12:29 +0000 2009",
    "pinned_tweet_ids_str": [
      "2018784828129243614"
    ],
    "id": "44196397"
  }
}
```

## Notes

- Pagination: uses next_cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
