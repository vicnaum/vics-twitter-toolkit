# Tweet Detail Light V3

**Route:** `GET /TweetDetailv3`
**API:** `twitter283.p.rapidapi.com`
**Description:** Tweet Detail Light V3

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | `1768778186186195177` |

## Response Schema

```typescript
// Root: TweetDetailLightV3Response
interface TweetDetailLightV3Response {
  data: TweetDetailLightV3ResponseData;
}

interface TweetDetailLightV3ResponseData {
  tweetResult: TweetDetailLightV3ResponseDataTweetResult;
}

interface TweetDetailLightV3ResponseDataTweetResult {
  result: Tweet;
}

interface Tweet {
  __typename: string;
  core: TweetCore;
  edit_control: TweetEditControl;
  is_translatable: boolean;
  legacy: TweetLegacy;
  rest_id: string;
  source: string;
  unmention_data: {};
  views: TweetViews;
}

interface TweetCore {
  user_results: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  result: User;
}

interface User {
  __typename: string;
  affiliates_highlighted_label: UserAffiliatesHighlightedLabel;
  has_graduated_access: boolean;
  id: string;
  is_blue_verified: boolean;
  legacy: UserLegacy;
  professional: UserProfessional;
  profile_image_shape: string;
  rest_id: string;
  super_follow_eligible: boolean;
  tipjar_settings: UserTipjarSettings;
}

interface UserAffiliatesHighlightedLabel {
  label: UserAffiliatesHighlightedLabelLabel;
}

interface UserAffiliatesHighlightedLabelLabel {
  badge: UserAffiliatesHighlightedLabelLabelBadge;
  description: string;
  url: UserAffiliatesHighlightedLabelLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface UserAffiliatesHighlightedLabelLabelBadge {
  url: string;
}

interface UserAffiliatesHighlightedLabelLabelUrl {
  url: string;
  urlType: string;
}

interface UserLegacy {
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: UserLegacyEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: unknown[];
}

interface UserLegacyEntities {
  description: UserLegacyEntitiesDescription;
}

interface UserLegacyEntitiesDescription {
  urls: unknown[];
}

interface UserProfessional {
  category: unknown[];
  professional_type: string;
  rest_id: string;
}

interface UserTipjarSettings {
  is_enabled: boolean;
}

interface TweetEditControl {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  edits_remaining: string;
  is_edit_eligible: boolean;
}

interface TweetLegacy {
  bookmark_count: number;
  bookmarked: boolean;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: TweetLegacyEntities;
  extended_entities: TweetLegacyExtendedEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  id_str: string;
  is_quote_status: boolean;
  lang: string;
  possibly_sensitive: boolean;
  possibly_sensitive_editable: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
}

interface TweetLegacyEntities {
  hashtags: unknown[];
  media: TweetLegacyEntitiesMediaItem[];
  symbols: unknown[];
  timestamps: unknown[];
  urls: unknown[];
  user_mentions: unknown[];
}

interface TweetLegacyEntitiesMediaItem {
  display_url: string;
  expanded_url: string;
  ext_media_availability: TweetLegacyEntitiesMediaItemExtMediaAvailability;
  features: TweetLegacyEntitiesMediaItemFeatures;
  id_str: string;
  indices: number[];
  media_key: string;
  media_results: TweetLegacyEntitiesMediaItemMediaResults;
  media_url_https: string;
  original_info: TweetLegacyEntitiesMediaItemOriginalInfo;
  sizes: TweetLegacyEntitiesMediaItemSizes;
  type: string;
  url: string;
}

interface TweetLegacyEntitiesMediaItemExtMediaAvailability {
  status: string;
}

interface TweetLegacyEntitiesMediaItemFeatures {
  large: TweetLegacyEntitiesMediaItemFeaturesLarge;
  medium: TweetLegacyEntitiesMediaItemFeaturesMedium;
  orig: TweetLegacyEntitiesMediaItemFeaturesOrig;
  small: TweetLegacyEntitiesMediaItemFeaturesSmall;
}

interface TweetLegacyEntitiesMediaItemFeaturesLarge {
  faces: unknown[];
}

interface TweetLegacyEntitiesMediaItemFeaturesMedium {
  faces: unknown[];
}

interface TweetLegacyEntitiesMediaItemFeaturesOrig {
  faces: unknown[];
}

interface TweetLegacyEntitiesMediaItemFeaturesSmall {
  faces: unknown[];
}

interface TweetLegacyEntitiesMediaItemMediaResults {
  result: TweetLegacyEntitiesMediaItemMediaResultsResult;
}

interface TweetLegacyEntitiesMediaItemMediaResultsResult {
  media_key: string;
}

interface TweetLegacyEntitiesMediaItemOriginalInfo {
  focus_rects: TweetLegacyEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height: number;
  width: number;
}

interface TweetLegacyEntitiesMediaItemOriginalInfoFocusRectsItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface TweetLegacyEntitiesMediaItemSizes {
  large: TweetLegacyEntitiesMediaItemSizesLarge;
  medium: TweetLegacyEntitiesMediaItemSizesMedium;
  small: TweetLegacyEntitiesMediaItemSizesSmall;
  thumb: TweetLegacyEntitiesMediaItemSizesThumb;
}

interface TweetLegacyEntitiesMediaItemSizesLarge {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyEntitiesMediaItemSizesMedium {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyEntitiesMediaItemSizesSmall {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyEntitiesMediaItemSizesThumb {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyExtendedEntities {
  media: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  display_url: string;
  expanded_url: string;
  ext_media_availability: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;
  features: TweetLegacyExtendedEntitiesMediaItemFeatures;
  id_str: string;
  indices: number[];
  media_key: string;
  media_results: TweetLegacyExtendedEntitiesMediaItemMediaResults;
  media_url_https: string;
  original_info: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;
  sizes: TweetLegacyExtendedEntitiesMediaItemSizes;
  type: string;
  url: string;
}

interface TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability {
  status: string;
}

interface TweetLegacyExtendedEntitiesMediaItemFeatures {
  large: TweetLegacyExtendedEntitiesMediaItemFeaturesLarge;
  medium: TweetLegacyExtendedEntitiesMediaItemFeaturesMedium;
  orig: TweetLegacyExtendedEntitiesMediaItemFeaturesOrig;
  small: TweetLegacyExtendedEntitiesMediaItemFeaturesSmall;
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLarge {
  faces: unknown[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesMedium {
  faces: unknown[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrig {
  faces: unknown[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesSmall {
  faces: unknown[];
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResults {
  result: TweetLegacyExtendedEntitiesMediaItemMediaResultsResult;
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResultsResult {
  media_key: string;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfo {
  focus_rects: TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height: number;
  width: number;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface TweetLegacyExtendedEntitiesMediaItemSizes {
  large: TweetLegacyExtendedEntitiesMediaItemSizesLarge;
  medium: TweetLegacyExtendedEntitiesMediaItemSizesMedium;
  small: TweetLegacyExtendedEntitiesMediaItemSizesSmall;
  thumb: TweetLegacyExtendedEntitiesMediaItemSizesThumb;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesLarge {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesMedium {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesSmall {
  h: number;
  resize: string;
  w: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesThumb {
  h: number;
  resize: string;
  w: number;
}

interface TweetViews {
  count: string;
  state: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "tweetResult": {
      "result": {
        "__typename": "Tweet",
        "rest_id": "1768778186186195177",
        "core": {
          "user_results": {
            "result": {
              "__typename": "User",
              "id": "VXNlcjo0NDE5NjM5Nw==",
              "rest_id": "44196397",
              "affiliates_highlighted_label": {
                "label": {
                  "url": {
                    "url": "https://twitter.com/X",
                    "urlType": "DeepLink"
                  },
                  "badge": {
                    "url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg"
                  },
                  "description": "X",
                  "userLabelType": "BusinessLabel",
                  "userLabelDisplayType": "Badge"
                }
              },
              "has_graduated_access": true,
              "is_blue_verified": true,
              "profile_image_shape": "Circle",
              "legacy": {
                "following": false,
                "can_dm": false,
                "can_media_tag": false,
                "created_at": "Tue Jun 02 20:12:29 +0000 2009",
                "default_profile": false,
                "default_profile_image": false,
                "description": "The people voted for major government reform",
                "entities": {
                  "description": {
                    "urls": []
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 97652,
                "followers_count": 206592023,
                "friends_count": 862,
                "has_custom_timelines": true,
                "is_translator": false,
                "listed_count": 154807,
                "location": "",
                "media_count": 2900,
                "name": "Elon Musk",
                "normal_followers_count": 206592023,
                "pinned_tweet_ids_str": [
                  "1864813706519155105"
                ],
                "possibly_sensitive": false,
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1726163678",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
                "profile_interstitial_type": "",
                "screen_name": "elonmusk",
                "statuses_count": 61445,
                "translator_type": "none",
                "verified": false,
                "want_retweets": false,
                "withheld_in_countries": []
              },
              "professional": {
                "rest_id": "1679729435447275522",
                "professional_type": "Creator",
                "category": []
              },
              "tipjar_settings": {
                "is_enabled": false
              },
              "super_follow_eligible": true
            }
          }
        },
        "unmention_data": {},
        "edit_control": {
          "edit_tweet_ids": [
            "1768778186186195177"
          ],
          "editable_until_msecs": "1710548156000",
          "is_edit_eligible": true,
          "edits_remaining": "5"
        },
        "is_translatable": false,
        "views": {
          "count": "52827796",
          "state": "EnabledWithCount"
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "legacy": {
          "bookmark_count": 3561,
          "bookmarked": false,
          "created_at": "Fri Mar 15 23:15:56 +0000 2024",
          "conversation_id_str": "1768778186186195177",
          "display_text_range": [
            0,
            0
          ],
          "entities": {
            "hashtags": [],
            "media": [
              {
                "display_url": "pic.twitter.com/BjrvXpkcgz",
                "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                "id_str": "1768778181643755520",
                "indices": [
                  13,
                  13
                ],
                "media_key": "3_1768778181643755520",
                "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                "type": "photo",
                "url": "https://t.co/BjrvXpkcgz",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": []
                  },
                  "medium": {
                    "faces": []
                  },
                  "small": {
                    "faces": []
                  },
                  "orig": {
                    "faces": []
                  }
                },
                "sizes": {
                  "large": {
                    "h": 1182,
                    "w": 2048,
                    "resize": "fit"
                  },
                  "medium": {
                    "h": 693,
                    "w": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "h": 392,
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
                  "height": 1182,
                  "width": 2048,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    },
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    }
                  ]
                },
                "media_results": {
                  "result": {
                    "media_key": "3_1768778181643755520"
                  }
                }
              }
            ],
            "symbols": [],
            "timestamps": [],
            "urls": [],
            "user_mentions": []
          },
          "extended_entities": {
            "media": [
              {
                "display_url": "pic.twitter.com/BjrvXpkcgz",
                "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                "id_str": "1768778181643755520",
                "indices": [
                  13,
                  13
                ],
                "media_key": "3_1768778181643755520",
                "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                "type": "photo",
                "url": "https://t.co/BjrvXpkcgz",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": []
                  },
                  "medium": {
                    "faces": []
                  },
                  "small": {
                    "faces": []
                  },
                  "orig": {
                    "faces": []
                  }
                },
                "sizes": {
                  "large": {
                    "h": 1182,
                    "w": 2048,
                    "resize": "fit"
                  },
                  "medium": {
                    "h": 693,
                    "w": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "h": 392,
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
                  "height": 1182,
                  "width": 2048,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    },
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    }
                  ]
                },
                "media_results": {
                  "result": {
                    "media_key": "3_1768778181643755520"
                  }
                }
              }
            ]
          },
          "favorite_count": 288169,
          "favorited": false,
          "full_text": "To the stars https://t.co/BjrvXpkcgz",
          "is_quote_status": false,
          "lang": "en",
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "quote_count": 1303,
          "reply_count": 14494,
          "retweet_count": 18196,
          "retweeted": false,
          "user_id_str": "44196397",
          "id_str": "1768778186186195177"
        }
      }
    }
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "data": {
    "tweetResult": {
      "result": {
        "__typename": "Tweet",
        "rest_id": "1768778186186195177",
        "core": {
          "user_results": {
            "result": {
              "__typename": "User",
              "id": "VXNlcjo0NDE5NjM5Nw==",
              "rest_id": "44196397",
              "affiliates_highlighted_label": {
                "label": {
                  "url": {
                    "url": "https://twitter.com/X",
                    "urlType": "DeepLink"
                  },
                  "badge": {
                    "url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg"
                  },
                  "description": "X",
                  "userLabelType": "BusinessLabel",
                  "userLabelDisplayType": "Badge"
                }
              },
              "has_graduated_access": true,
              "is_blue_verified": true,
              "profile_image_shape": "Circle",
              "legacy": {
                "following": false,
                "can_dm": false,
                "can_media_tag": false,
                "created_at": "Tue Jun 02 20:12:29 +0000 2009",
                "default_profile": false,
                "default_profile_image": false,
                "description": "The people voted for major government reform",
                "entities": {
                  "description": {
                    "urls": []
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 97652,
                "followers_count": 206592023,
                "friends_count": 862,
                "has_custom_timelines": true,
                "is_translator": false,
                "listed_count": 154807,
                "location": "",
                "media_count": 2900,
                "name": "Elon Musk",
                "normal_followers_count": 206592023,
                "pinned_tweet_ids_str": [
                  "1864813706519155105"
                ],
                "possibly_sensitive": false,
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1726163678",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
                "profile_interstitial_type": "",
                "screen_name": "elonmusk",
                "statuses_count": 61445,
                "translator_type": "none",
                "verified": false,
                "want_retweets": false,
                "withheld_in_countries": []
              },
              "professional": {
                "rest_id": "1679729435447275522",
                "professional_type": "Creator",
                "category": []
              },
              "tipjar_settings": {
                "is_enabled": false
              },
              "super_follow_eligible": true
            }
          }
        },
        "unmention_data": {},
        "edit_control": {
          "edit_tweet_ids": [
            "1768778186186195177"
          ],
          "editable_until_msecs": "1710548156000",
          "is_edit_eligible": true,
          "edits_remaining": "5"
        },
        "is_translatable": false,
        "views": {
          "count": "52827796",
          "state": "EnabledWithCount"
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "legacy": {
          "bookmark_count": 3561,
          "bookmarked": false,
          "created_at": "Fri Mar 15 23:15:56 +0000 2024",
          "conversation_id_str": "1768778186186195177",
          "display_text_range": [
            0
          ],
          "entities": {
            "hashtags": [],
            "media": [
              {
                "display_url": "pic.twitter.com/BjrvXpkcgz",
                "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                "id_str": "1768778181643755520",
                "indices": [
                  13
                ],
                "media_key": "3_1768778181643755520",
                "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                "type": "photo",
                "url": "https://t.co/BjrvXpkcgz",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": []
                  },
                  "medium": {
                    "faces": []
                  },
                  "small": {
                    "faces": []
                  },
                  "orig": {
                    "faces": []
                  }
                },
                "sizes": {
                  "large": {
                    "h": 1182,
                    "w": 2048,
                    "resize": "fit"
                  },
                  "medium": {
                    "h": 693,
                    "w": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "h": 392,
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
                  "height": 1182,
                  "width": 2048,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    }
                  ]
                },
                "media_results": {
                  "result": {
                    "media_key": "3_1768778181643755520"
                  }
                }
              }
            ],
            "symbols": [],
            "timestamps": [],
            "urls": [],
            "user_mentions": []
          },
          "extended_entities": {
            "media": [
              {
                "display_url": "pic.twitter.com/BjrvXpkcgz",
                "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                "id_str": "1768778181643755520",
                "indices": [
                  13
                ],
                "media_key": "3_1768778181643755520",
                "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                "type": "photo",
                "url": "https://t.co/BjrvXpkcgz",
                "ext_media_availability": {
                  "status": "Available"
                },
                "features": {
                  "large": {
                    "faces": []
                  },
                  "medium": {
                    "faces": []
                  },
                  "small": {
                    "faces": []
                  },
                  "orig": {
                    "faces": []
                  }
                },
                "sizes": {
                  "large": {
                    "h": 1182,
                    "w": 2048,
                    "resize": "fit"
                  },
                  "medium": {
                    "h": 693,
                    "w": 1200,
                    "resize": "fit"
                  },
                  "small": {
                    "h": 392,
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
                  "height": 1182,
                  "width": 2048,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 35,
                      "w": 2048,
                      "h": 1147
                    }
                  ]
                },
                "media_results": {
                  "result": {
                    "media_key": "3_1768778181643755520"
                  }
                }
              }
            ]
          },
          "favorite_count": 288169,
          "favorited": false,
          "full_text": "To the stars https://t.co/BjrvXpkcgz",
          "is_quote_status": false,
          "lang": "en",
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "quote_count": 1303,
          "reply_count": 14494,
          "retweet_count": 18196,
          "retweeted": false,
          "user_id_str": "44196397",
          "id_str": "1768778186186195177"
        }
      }
    }
  }
}
```

## Notes

- View counts may come as formatted strings (e.g., `"1,234,567"`)
