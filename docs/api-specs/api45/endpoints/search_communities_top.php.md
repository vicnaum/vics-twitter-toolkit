# Communities Posts Search Top

**Route:** `GET /search_communities_top.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Search for the posts in communities post order top.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| query | STRING | Yes | `superman` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: CommunitiesPostsSearchTopResponse
interface CommunitiesPostsSearchTopResponse {
  next_cursor: string;
  timeline: CommunitiesPostsSearchTopResponseTimelineItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItem {
  author_id: string;  // 22/22
  bookmarks: number;  // 22/22
  community_id: string;  // 22/22
  conversation_id: string;  // 22/22
  created_at: string;  // 22/22
  edit_tweet_ids: null;  // 22/22
  entities: CommunitiesPostsSearchTopResponseTimelineItemEntities;  // 22/22
  favorites: number;  // 22/22
  geo: null;  // 22/22
  in_reply_to: null | string;  // 22/22
  in_reply_to_user_id: null | string;  // 22/22
  lang: string;  // 22/22
  limited_actions: null;  // 22/22
  media: unknown[] | CommunitiesPostsSearchTopResponseTimelineItemMedia;  // 22/22
  possibly_sensitive: null | boolean;  // 22/22
  quoted_from: string | null;  // 22/22
  quotes: number;  // 22/22
  replies: number;  // 22/22
  retweets: number;  // 22/22
  screen_name: string;  // 22/22
  source: string;  // 22/22
  text: string;  // 22/22
  tweet_id: string;  // 22/22
  type: string;  // 22/22
  user_info: CommunitiesPostsSearchTopResponseTimelineItemUserInfo;  // 22/22
  views: string;  // 22/22
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntities {
  hashtags?: unknown[];
  media?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItem[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: unknown[];
  user_mentions?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesUserMentionsItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItem {
  additional_media_info?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAllowDownloadStatus;  // 12/3
  display_url?: string;  // 21/3
  expanded_url?: string;  // 21/3
  ext_media_availability?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemExtMediaAvailability;  // 21/3
  features?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeatures;  // 13/3
  id_str?: string;  // 21/3
  indices?: number[];  // 21/3
  media_key?: string;  // 21/3
  media_results?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemMediaResults;  // 21/3
  media_url_https?: string;  // 21/3
  original_info?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemOriginalInfo;  // 21/3
  sizes?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizes;  // 21/3
  source_status_id_str?: string;
  source_user_id_str?: string;
  type?: string;  // 21/3
  url?: string;  // 21/3
  video_info?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemVideoInfo;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfo {
  monetizable?: boolean;
  source_user?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfoSourceUser;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfoSourceUser {
  user_results?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults {
  result?: User;
}

interface User {
  __typename?: string;
  affiliates_highlighted_label?: unknown[];
  has_graduated_access?: boolean;
  id?: string;
  is_blue_verified?: boolean;
  legacy?: UserLegacy;
  parody_commentary_fan_label?: string;
  professional?: UserProfessional;
  profile_image_shape?: string;
  rest_id?: string;
  tipjar_settings?: UserTipjarSettings | unknown[];
}

interface UserLegacy {
  can_dm?: boolean;
  can_media_tag?: boolean;
  created_at?: string;
  default_profile?: boolean;
  default_profile_image?: boolean;
  description?: string;
  entities?: UserLegacyEntities;
  fast_followers_count?: number;
  favourites_count?: number;
  followers_count?: number;
  following?: boolean;
  friends_count?: number;
  has_custom_timelines?: boolean;
  is_translator?: boolean;
  listed_count?: number;
  location?: string;
  media_count?: number;
  name?: string;
  normal_followers_count?: number;
  pinned_tweet_ids_str?: string[];
  possibly_sensitive?: boolean;
  profile_banner_url?: string;
  profile_image_url_https?: string;
  profile_interstitial_type?: string;
  screen_name?: string;
  statuses_count?: number;
  translator_type?: string;
  verified?: boolean;
  want_retweets?: boolean;
  withheld_in_countries?: unknown[];
}

interface UserLegacyEntities {
  description?: UserLegacyEntitiesDescription;
}

interface UserLegacyEntitiesDescription {
  urls?: unknown[];
}

interface UserProfessional {
  category?: UserProfessionalCategoryItem[];
  professional_type?: string;
  rest_id?: string;
}

interface UserProfessionalCategoryItem {
  icon_name?: string;
  id?: number;
  name?: string;
}

interface UserTipjarSettings {
  bitcoin_handle?: string;
  is_enabled?: boolean;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemAllowDownloadStatus {
  allow_download?: boolean;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemExtMediaAvailability {
  status?: string;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeatures {
  large?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesLarge;
  medium?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesMedium;
  orig?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesOrig;
  small?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesSmall;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesLarge {
  faces?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 22/5
  w?: number;  // 22/5
  x?: number;  // 22/5
  y?: number;  // 22/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesMedium {
  faces?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 22/5
  w?: number;  // 22/5
  x?: number;  // 22/5
  y?: number;  // 22/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesOrig {
  faces?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 22/5
  w?: number;  // 22/5
  x?: number;  // 22/5
  y?: number;  // 22/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesSmall {
  faces?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 22/5
  w?: number;  // 22/5
  x?: number;  // 22/5
  y?: number;  // 22/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemMediaResults {
  result?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemMediaResultsResult;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemMediaResultsResult {
  media_key?: string;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemOriginalInfo {
  focus_rects?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 65/5
  w?: number;  // 65/5
  x?: number;  // 65/5
  y?: number;  // 65/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizes {
  large?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesLarge;
  medium?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesMedium;
  small?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesSmall;
  thumb?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesThumb;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemVideoInfoVariantsItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 24/5
  content_type?: string;  // 31/5
  url?: string;  // 31/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemEntitiesUserMentionsItem {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

interface CommunitiesPostsSearchTopResponseTimelineItemMedia {
  photo?: CommunitiesPostsSearchTopResponseTimelineItemMediaPhotoItem[];
  video?: CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemMediaPhotoItem {
  id?: string;  // 13/3
  media_url_https?: string;  // 13/3
}

interface CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItem {
  aspect_ratio?: number[];
  duration?: number | null;
  id?: string;
  media_url_https?: string;
  original_info?: CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItemOriginalInfo;
  variants?: CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface CommunitiesPostsSearchTopResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;  // 24/5
  content_type?: string;  // 31/5
  url?: string;  // 31/5
}

interface CommunitiesPostsSearchTopResponseTimelineItemUserInfo {
  created_at?: string;
  description?: string;
  entities?: CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntities;
  favourites_count?: number;
  followers_count?: number;
  friends_count?: number;
  id?: string;
  location?: string;
  name?: string;
  pinned_tweet_id?: string | null;
  profile_image_url?: null;
  protected?: null;
  screen_name?: string;
  verified?: boolean;
  withheld?: unknown[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntities {
  description?: CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesDescription;
  url?: CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesUrl;
}

interface CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesDescription {
  urls?: unknown[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesUrl {
  urls?: CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesUrlUrlsItem[];
}

interface CommunitiesPostsSearchTopResponseTimelineItemUserInfoEntitiesUrlUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1796686051299274839",
      "screen_name": "Terence_Bsl",
      "bookmarks": 2295,
      "favorites": 61152,
      "created_at": "Fri May 31 23:31:50 +0000 2024",
      "text": "This is who people think can beat Superman lmao",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "conversation_id": "1796686051299274839",
      "possibly_sensitive": null,
      "edit_tweet_ids": null,
      "geo": null,
      "limited_actions": null,
      "in_reply_to_user_id": "",
      "in_reply_to": "",
      "quoted_from": "1796093141356871941",
      "community_id": "1589365710655979520",
      "author_id": "461081885",
      "quotes": 148,
      "replies": 36,
      "retweets": 3050,
      "views": "10325841",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "1569511401865216000",
            "name": "Jahtri",
            "screen_name": "gyattri_",
            "indices": [
              0,
              0
            ]
          }
        ],
        "media": [
          {
            "display_url": "pic.x.com/iulXODrvj1",
            "expanded_url": "https://x.com/tam3875954/status/1930752557955400138/photo/1",
            "id_str": "1930752554838695937",
            "indices": [
              77,
              77
            ],
            "media_key": "3_1930752554838695937",
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "type": "photo",
            "url": "https://t.co/iulXODrvj1",
            "ext_media_availability": {
              "status": "Available"
            },
            "features": {
              "large": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              },
              "medium": {
                "faces": [
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  },
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  }
                ]
              },
              "small": {
                "faces": [
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  },
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  }
                ]
              },
              "orig": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              }
            },
            "sizes": {
              "large": {
                "h": 2048,
                "w": 1536,
                "resize": "fit"
              },
              "medium": {
                "h": 1200,
                "w": 900,
                "resize": "fit"
              },
              "small": {
                "h": 680,
                "w": 510,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 2048,
              "width": 1536,
              "focus_rects": [
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                },
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "3_1930752554838695937"
              }
            },
            "allow_download_status": {
              "allow_download": true
            },
            "source_status_id_str": "1832888980834259453",
            "source_user_id_str": "1779518470670946304",
            "additional_media_info": {
              "monetizable": false,
              "source_user": {
                "user_results": {
                  "result": {
                    "__typename": "User",
                    "id": "VXNlcjoxNzc5NTE4NDcwNjcwOTQ2MzA0",
                    "rest_id": "1779518470670946304",
                    "affiliates_highlighted_label": [],
                    "has_graduated_access": true,
                    "parody_commentary_fan_label": "None",
                    "is_blue_verified": true,
                    "profile_image_shape": "Circle",
                    "legacy": {
                      "following": false,
                      "can_dm": true,
                      "can_media_tag": true,
                      "created_at": "Sun Apr 14 14:34:16 +0000 2024",
                      "default_profile": true,
                      "default_profile_image": false,
                      "description": "CLIPS, GIFS AND MORE!",
                      "entities": {
                        "description": {
                          "urls": []
                        }
                      },
                      "fast_followers_count": 0,
                      "favourites_count": 9307,
                      "followers_count": 9187,
                      "friends_count": 563,
                      "has_custom_timelines": false,
                      "is_translator": false,
                      "listed_count": 14,
                      "location": "",
                      "media_count": 2281,
                      "name": "DC ANIMATED MEDIA",
                      "normal_followers_count": 9187,
                      "pinned_tweet_ids_str": [
                        "1686377622048268289"
                      ],
                      "possibly_sensitive": false,
                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1779518470670946304/1764437609",
                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1952375011387277312/LtEzwhXk_normal.jpg",
                      "profile_interstitial_type": "",
                      "screen_name": "ARKHAMPUNK",
                      "statuses_count": 3879,
                      "translator_type": "none",
                      "verified": false,
                      "want_retweets": false,
                      "withheld_in_countries": []
                    },
                    "professional": {
                      "rest_id": "1835954002007150676",
                      "professional_type": "Creator",
                      "category": [
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        },
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        }
                      ]
                    },
                    "tipjar_settings": {
                      "is_enabled": true,
                      "bitcoin_handle": "bc1qxr4yg3g7zc03x6xhmakmqyg7dp5k0yk2nyesd9"
                    }
                  }
                }
              }
            },
            "video_info": {
              "aspect_ratio": [
                967,
                967
              ],
              "duration_millis": 45366,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                }
              ]
            }
          },
          {
            "display_url": "pic.x.com/iulXODrvj1",
            "expanded_url": "https://x.com/tam3875954/status/1930752557955400138/photo/1",
            "id_str": "1930752554838695937",
            "indices": [
              77,
              77
            ],
            "media_key": "3_1930752554838695937",
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "type": "photo",
            "url": "https://t.co/iulXODrvj1",
            "ext_media_availability": {
              "status": "Available"
            },
            "features": {
              "large": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              },
              "medium": {
                "faces": [
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  },
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  }
                ]
              },
              "small": {
                "faces": [
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  },
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  }
                ]
              },
              "orig": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              }
            },
            "sizes": {
              "large": {
                "h": 2048,
                "w": 1536,
                "resize": "fit"
              },
              "medium": {
                "h": 1200,
                "w": 900,
                "resize": "fit"
              },
              "small": {
                "h": 680,
                "w": 510,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 2048,
              "width": 1536,
              "focus_rects": [
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                },
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "3_1930752554838695937"
              }
            },
            "allow_download_status": {
              "allow_download": true
            },
            "source_status_id_str": "1832888980834259453",
            "source_user_id_str": "1779518470670946304",
            "additional_media_info": {
              "monetizable": false,
              "source_user": {
                "user_results": {
                  "result": {
                    "__typename": "User",
                    "id": "VXNlcjoxNzc5NTE4NDcwNjcwOTQ2MzA0",
                    "rest_id": "1779518470670946304",
                    "affiliates_highlighted_label": [],
                    "has_graduated_access": true,
                    "parody_commentary_fan_label": "None",
                    "is_blue_verified": true,
                    "profile_image_shape": "Circle",
                    "legacy": {
                      "following": false,
                      "can_dm": true,
                      "can_media_tag": true,
                      "created_at": "Sun Apr 14 14:34:16 +0000 2024",
                      "default_profile": true,
                      "default_profile_image": false,
                      "description": "CLIPS, GIFS AND MORE!",
                      "entities": {
                        "description": {
                          "urls": []
                        }
                      },
                      "fast_followers_count": 0,
                      "favourites_count": 9307,
                      "followers_count": 9187,
                      "friends_count": 563,
                      "has_custom_timelines": false,
                      "is_translator": false,
                      "listed_count": 14,
                      "location": "",
                      "media_count": 2281,
                      "name": "DC ANIMATED MEDIA",
                      "normal_followers_count": 9187,
                      "pinned_tweet_ids_str": [
                        "1686377622048268289"
                      ],
                      "possibly_sensitive": false,
                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1779518470670946304/1764437609",
                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1952375011387277312/LtEzwhXk_normal.jpg",
                      "profile_interstitial_type": "",
                      "screen_name": "ARKHAMPUNK",
                      "statuses_count": 3879,
                      "translator_type": "none",
                      "verified": false,
                      "want_retweets": false,
                      "withheld_in_countries": []
                    },
                    "professional": {
                      "rest_id": "1835954002007150676",
                      "professional_type": "Creator",
                      "category": [
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        },
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        }
                      ]
                    },
                    "tipjar_settings": {
                      "is_enabled": true,
                      "bitcoin_handle": "bc1qxr4yg3g7zc03x6xhmakmqyg7dp5k0yk2nyesd9"
                    }
                  }
                }
              }
            },
            "video_info": {
              "aspect_ratio": [
                967,
                967
              ],
              "duration_millis": 45366,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                }
              ]
            }
          }
        ]
      },
      "user_info": {
        "id": "461081885",
        "screen_name": "Terence_Bsl",
        "verified": false,
        "protected": null,
        "pinned_tweet_id": "1996855956437958807",
        "name": "Superman™",
        "withheld": [],
        "description": "Kryptonian. | Philanthropist. | Your Local Underdog. | CEO of the Funny | President of International NGO @ManusLegis | \ud83c...",
        "entities": {
          "description": {
            "urls": []
          },
          "url": {
            "urls": [
              {
                "display_url": "c.org/6h2d4ywpmX",
                "expanded_url": "https://c.org/6h2d4ywpmX",
                "url": "https://t.co/rz2VoS5DjK",
                "indices": [
                  0,
                  0
                ]
              },
              {
                "display_url": "c.org/6h2d4ywpmX",
                "expanded_url": "https://c.org/6h2d4ywpmX",
                "url": "https://t.co/rz2VoS5DjK",
                "indices": [
                  0,
                  0
                ]
              }
            ]
          }
        },
        "location": "Earth, Space Sector 2814",
        "followers_count": 2061,
        "favourites_count": 205727,
        "profile_image_url": null,
        "friends_count": 4999,
        "created_at": "Wed Jan 11 12:36:36 +0000 2012"
      },
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "id": "1930752554838695937"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "id": "1930752554838695937"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1832888532211269632/pu/img/xe7eaNExIeE--Fnq.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              967,
              967
            ],
            "duration": 45366,
            "original_info": {
              "height": 1080,
              "width": 1934,
              "focus_rects": []
            },
            "id": "1832888532211269632"
          },
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1832888532211269632/pu/img/xe7eaNExIeE--Fnq.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              967,
              967
            ],
            "duration": 45366,
            "original_info": {
              "height": 1080,
              "width": 1934,
              "focus_rects": []
            },
            "id": "1832888532211269632"
          }
        ]
      }
    },
    {
      "type": "tweet",
      "tweet_id": "1796686051299274839",
      "screen_name": "Terence_Bsl",
      "bookmarks": 2295,
      "favorites": 61152,
      "created_at": "Fri May 31 23:31:50 +0000 2024",
      "text": "This is who people think can beat Superman lmao",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "conversation_id": "1796686051299274839",
      "possibly_sensitive": null,
      "edit_tweet_ids": null,
      "geo": null,
      "limited_actions": null,
      "in_reply_to_user_id": "",
      "in_reply_to": "",
      "quoted_from": "1796093141356871941",
      "community_id": "1589365710655979520",
      "author_id": "461081885",
      "quotes": 148,
      "replies": 36,
      "retweets": 3050,
      "views": "10325841",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [],
        "user_mentions": [
          {
            "id_str": "1569511401865216000",
            "name": "Jahtri",
            "screen_name": "gyattri_",
            "indices": [
              0,
              0
            ]
          }
        ],
        "media": [
          {
            "display_url": "pic.x.com/iulXODrvj1",
            "expanded_url": "https://x.com/tam3875954/status/1930752557955400138/photo/1",
            "id_str": "1930752554838695937",
            "indices": [
              77,
              77
            ],
            "media_key": "3_1930752554838695937",
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "type": "photo",
            "url": "https://t.co/iulXODrvj1",
            "ext_media_availability": {
              "status": "Available"
            },
            "features": {
              "large": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              },
              "medium": {
                "faces": [
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  },
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  }
                ]
              },
              "small": {
                "faces": [
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  },
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  }
                ]
              },
              "orig": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              }
            },
            "sizes": {
              "large": {
                "h": 2048,
                "w": 1536,
                "resize": "fit"
              },
              "medium": {
                "h": 1200,
                "w": 900,
                "resize": "fit"
              },
              "small": {
                "h": 680,
                "w": 510,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 2048,
              "width": 1536,
              "focus_rects": [
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                },
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "3_1930752554838695937"
              }
            },
            "allow_download_status": {
              "allow_download": true
            },
            "source_status_id_str": "1832888980834259453",
            "source_user_id_str": "1779518470670946304",
            "additional_media_info": {
              "monetizable": false,
              "source_user": {
                "user_results": {
                  "result": {
                    "__typename": "User",
                    "id": "VXNlcjoxNzc5NTE4NDcwNjcwOTQ2MzA0",
                    "rest_id": "1779518470670946304",
                    "affiliates_highlighted_label": [],
                    "has_graduated_access": true,
                    "parody_commentary_fan_label": "None",
                    "is_blue_verified": true,
                    "profile_image_shape": "Circle",
                    "legacy": {
                      "following": false,
                      "can_dm": true,
                      "can_media_tag": true,
                      "created_at": "Sun Apr 14 14:34:16 +0000 2024",
                      "default_profile": true,
                      "default_profile_image": false,
                      "description": "CLIPS, GIFS AND MORE!",
                      "entities": {
                        "description": {
                          "urls": []
                        }
                      },
                      "fast_followers_count": 0,
                      "favourites_count": 9307,
                      "followers_count": 9187,
                      "friends_count": 563,
                      "has_custom_timelines": false,
                      "is_translator": false,
                      "listed_count": 14,
                      "location": "",
                      "media_count": 2281,
                      "name": "DC ANIMATED MEDIA",
                      "normal_followers_count": 9187,
                      "pinned_tweet_ids_str": [
                        "1686377622048268289"
                      ],
                      "possibly_sensitive": false,
                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1779518470670946304/1764437609",
                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1952375011387277312/LtEzwhXk_normal.jpg",
                      "profile_interstitial_type": "",
                      "screen_name": "ARKHAMPUNK",
                      "statuses_count": 3879,
                      "translator_type": "none",
                      "verified": false,
                      "want_retweets": false,
                      "withheld_in_countries": []
                    },
                    "professional": {
                      "rest_id": "1835954002007150676",
                      "professional_type": "Creator",
                      "category": [
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        },
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        }
                      ]
                    },
                    "tipjar_settings": {
                      "is_enabled": true,
                      "bitcoin_handle": "bc1qxr4yg3g7zc03x6xhmakmqyg7dp5k0yk2nyesd9"
                    }
                  }
                }
              }
            },
            "video_info": {
              "aspect_ratio": [
                967,
                967
              ],
              "duration_millis": 45366,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                }
              ]
            }
          },
          {
            "display_url": "pic.x.com/iulXODrvj1",
            "expanded_url": "https://x.com/tam3875954/status/1930752557955400138/photo/1",
            "id_str": "1930752554838695937",
            "indices": [
              77,
              77
            ],
            "media_key": "3_1930752554838695937",
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "type": "photo",
            "url": "https://t.co/iulXODrvj1",
            "ext_media_availability": {
              "status": "Available"
            },
            "features": {
              "large": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              },
              "medium": {
                "faces": [
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  },
                  {
                    "x": 646,
                    "y": 457,
                    "h": 53,
                    "w": 53
                  }
                ]
              },
              "small": {
                "faces": [
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  },
                  {
                    "x": 366,
                    "y": 258,
                    "h": 30,
                    "w": 30
                  }
                ]
              },
              "orig": {
                "faces": [
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  },
                  {
                    "x": 1104,
                    "y": 780,
                    "h": 92,
                    "w": 92
                  }
                ]
              }
            },
            "sizes": {
              "large": {
                "h": 2048,
                "w": 1536,
                "resize": "fit"
              },
              "medium": {
                "h": 1200,
                "w": 900,
                "resize": "fit"
              },
              "small": {
                "h": 680,
                "w": 510,
                "resize": "fit"
              },
              "thumb": {
                "h": 150,
                "w": 150,
                "resize": "crop"
              }
            },
            "original_info": {
              "height": 2048,
              "width": 1536,
              "focus_rects": [
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                },
                {
                  "x": 0,
                  "y": 850,
                  "w": 1536,
                  "h": 860
                }
              ]
            },
            "media_results": {
              "result": {
                "media_key": "3_1930752554838695937"
              }
            },
            "allow_download_status": {
              "allow_download": true
            },
            "source_status_id_str": "1832888980834259453",
            "source_user_id_str": "1779518470670946304",
            "additional_media_info": {
              "monetizable": false,
              "source_user": {
                "user_results": {
                  "result": {
                    "__typename": "User",
                    "id": "VXNlcjoxNzc5NTE4NDcwNjcwOTQ2MzA0",
                    "rest_id": "1779518470670946304",
                    "affiliates_highlighted_label": [],
                    "has_graduated_access": true,
                    "parody_commentary_fan_label": "None",
                    "is_blue_verified": true,
                    "profile_image_shape": "Circle",
                    "legacy": {
                      "following": false,
                      "can_dm": true,
                      "can_media_tag": true,
                      "created_at": "Sun Apr 14 14:34:16 +0000 2024",
                      "default_profile": true,
                      "default_profile_image": false,
                      "description": "CLIPS, GIFS AND MORE!",
                      "entities": {
                        "description": {
                          "urls": []
                        }
                      },
                      "fast_followers_count": 0,
                      "favourites_count": 9307,
                      "followers_count": 9187,
                      "friends_count": 563,
                      "has_custom_timelines": false,
                      "is_translator": false,
                      "listed_count": 14,
                      "location": "",
                      "media_count": 2281,
                      "name": "DC ANIMATED MEDIA",
                      "normal_followers_count": 9187,
                      "pinned_tweet_ids_str": [
                        "1686377622048268289"
                      ],
                      "possibly_sensitive": false,
                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1779518470670946304/1764437609",
                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1952375011387277312/LtEzwhXk_normal.jpg",
                      "profile_interstitial_type": "",
                      "screen_name": "ARKHAMPUNK",
                      "statuses_count": 3879,
                      "translator_type": "none",
                      "verified": false,
                      "want_retweets": false,
                      "withheld_in_countries": []
                    },
                    "professional": {
                      "rest_id": "1835954002007150676",
                      "professional_type": "Creator",
                      "category": [
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        },
                        {
                          "id": 15,
                          "name": "Entertainment & Recreation",
                          "icon_name": "IconBriefcaseStroke"
                        }
                      ]
                    },
                    "tipjar_settings": {
                      "is_enabled": true,
                      "bitcoin_handle": "bc1qxr4yg3g7zc03x6xhmakmqyg7dp5k0yk2nyesd9"
                    }
                  }
                }
              }
            },
            "video_info": {
              "aspect_ratio": [
                967,
                967
              ],
              "duration_millis": 45366,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                  "bitrate": 256000
                }
              ]
            }
          }
        ]
      },
      "user_info": {
        "id": "461081885",
        "screen_name": "Terence_Bsl",
        "verified": false,
        "protected": null,
        "pinned_tweet_id": "1996855956437958807",
        "name": "Superman™",
        "withheld": [],
        "description": "Kryptonian. | Philanthropist. | Your Local Underdog. | CEO of the Funny | President of International NGO @ManusLegis | \ud83c...",
        "entities": {
          "description": {
            "urls": []
          },
          "url": {
            "urls": [
              {
                "display_url": "c.org/6h2d4ywpmX",
                "expanded_url": "https://c.org/6h2d4ywpmX",
                "url": "https://t.co/rz2VoS5DjK",
                "indices": [
                  0,
                  0
                ]
              },
              {
                "display_url": "c.org/6h2d4ywpmX",
                "expanded_url": "https://c.org/6h2d4ywpmX",
                "url": "https://t.co/rz2VoS5DjK",
                "indices": [
                  0,
                  0
                ]
              }
            ]
          }
        },
        "location": "Earth, Space Sector 2814",
        "followers_count": 2061,
        "favourites_count": 205727,
        "profile_image_url": null,
        "friends_count": 4999,
        "created_at": "Wed Jan 11 12:36:36 +0000 2012"
      },
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "id": "1930752554838695937"
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/GstpOBRWoAEMRMr.jpg",
            "id": "1930752554838695937"
          }
        ],
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1832888532211269632/pu/img/xe7eaNExIeE--Fnq.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              967,
              967
            ],
            "duration": 45366,
            "original_info": {
              "height": 1080,
              "width": 1934,
              "focus_rects": []
            },
            "id": "1832888532211269632"
          },
          {
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1832888532211269632/pu/img/xe7eaNExIeE--Fnq.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1832888532211269632/pu/pl/zUqEtnK1e2Sm0NbA.m3u8?tag=14",
                "bitrate": 256000
              }
            ],
            "aspect_ratio": [
              967,
              967
            ],
            "duration": 45366,
            "original_info": {
              "height": 1080,
              "width": 1934,
              "focus_rects": []
            },
            "id": "1832888532211269632"
          }
        ]
      }
    }
  ],
  "next_cursor": "DAAHCgABHAelW6y__-oLAAIAAAAIV3pNNE9UTmQIAAMAAAACAAA"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "timeline": [
    {
      "type": "tweet",
      "tweet_id": "1796686051299274839",
      "screen_name": "Terence_Bsl",
      "bookmarks": 2295,
      "favorites": 61152,
      "created_at": "Fri May 31 23:31:50 +0000 2024",
      "text": "This is who people think can beat Superman lmao",
      "lang": "en",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "conversation_id": "1796686051299274839",
      "possibly_sensitive": null,
      "edit_tweet_ids": null,
      "geo": null,
      "limited_actions": null,
      "in_reply_to_user_id": "",
      "in_reply_to": "",
      "quoted_from": "1796093141356871941",
      "community_id": "1589365710655979520",
      "author_id": "461081885",
      "quotes": 148,
      "replies": 36,
      "retweets": 3050,
      "views": "10325841",
      "entities": {},
      "user_info": {},
      "media": {}
    }
  ],
  "next_cursor": "DAAHCgABHAelW6y__-oLAAIAAAAIV3pNNE9UTmQIAAMAAAACAAA"
}
```

## Notes

- Pagination: uses next_cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
