# Tweet TweetResultsByRestIds

**Route:** `GET /TweetResultsByRestIds`
**API:** `twitter283.p.rapidapi.com`
**Description:** TweetResultsByRestIds

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_ids | STRING | Yes | `1885137730167779697,1884960531963904153` |

## Response Schema

```typescript
// Root: TweetTweetResultsByRestIdsResponse
interface TweetTweetResultsByRestIdsResponse {
  data: TweetTweetResultsByRestIdsResponseData;
}

interface TweetTweetResultsByRestIdsResponseData {
  tweetResult: TweetTweetResultsByRestIdsResponseDataTweetResultItem[];
}

interface TweetTweetResultsByRestIdsResponseDataTweetResultItem {
  result: Tweet;  // 2/2
}

interface Tweet {
  __typename?: string;
  award_eligible?: boolean;
  core?: TweetCore;
  edit_control?: TweetEditControl;
  granted_awards?: {};
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  rest_id?: string;
  source?: string;
  unmention_data?: {};
  views?: TweetViews;
}

interface TweetCore {
  user_results?: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  result?: User;
}

interface User {
  __typename?: string;
  affiliates_highlighted_label?: {};
  has_graduated_access?: boolean;
  id?: string;
  is_blue_verified?: boolean;
  legacy?: UserLegacy;
  professional?: UserProfessional;
  profile_image_shape?: string;
  rest_id?: string;
  tipjar_settings?: {};
  verified_phone_status?: boolean;
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
  url?: string;
  verified?: boolean;
  want_retweets?: boolean;
  withheld_in_countries?: unknown[];
}

interface UserLegacyEntities {
  description?: UserLegacyEntitiesDescription;
  url?: UserLegacyEntitiesUrl;
}

interface UserLegacyEntitiesDescription {
  urls?: unknown[];
}

interface UserLegacyEntitiesUrl {
  urls?: UserLegacyEntitiesUrlUrlsItem[];
}

interface UserLegacyEntitiesUrlUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface UserProfessional {
  category?: unknown[];
  professional_type?: string;
  rest_id?: string;
}

interface TweetEditControl {
  edit_tweet_ids?: string[];
  editable_until_msecs?: string;
  edits_remaining?: string;
  is_edit_eligible?: boolean;
}

interface TweetLegacy {
  bookmark_count?: number;
  bookmarked?: boolean;
  conversation_id_str?: string;
  created_at?: string;
  display_text_range?: number[];
  entities?: TweetLegacyEntities;
  extended_entities?: TweetLegacyExtendedEntities;
  favorite_count?: number;
  favorited?: boolean;
  full_text?: string;
  id_str?: string;
  is_quote_status?: boolean;
  lang?: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quote_count?: number;
  reply_count?: number;
  retweet_count?: number;
  retweeted?: boolean;
  user_id_str?: string;
}

interface TweetLegacyEntities {
  hashtags?: TweetLegacyEntitiesHashtagsItem[];
  media?: TweetLegacyEntitiesMediaItem[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: unknown[];
  user_mentions?: unknown[];
}

interface TweetLegacyEntitiesHashtagsItem {
  indices?: number[];
  text?: string;
}

interface TweetLegacyEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  ext_media_availability?: TweetLegacyEntitiesMediaItemExtMediaAvailability;
  features?: TweetLegacyEntitiesMediaItemFeatures;
  id_str?: string;
  indices?: number[];
  media_key?: string;
  media_results?: TweetLegacyEntitiesMediaItemMediaResults;
  media_url_https?: string;
  original_info?: TweetLegacyEntitiesMediaItemOriginalInfo;
  sizes?: TweetLegacyEntitiesMediaItemSizes;
  type?: string;
  url?: string;
}

interface TweetLegacyEntitiesMediaItemExtMediaAvailability {
  status?: string;
}

interface TweetLegacyEntitiesMediaItemFeatures {
  large?: TweetLegacyEntitiesMediaItemFeaturesLarge;
  medium?: TweetLegacyEntitiesMediaItemFeaturesMedium;
  orig?: TweetLegacyEntitiesMediaItemFeaturesOrig;
  small?: TweetLegacyEntitiesMediaItemFeaturesSmall;
}

interface TweetLegacyEntitiesMediaItemFeaturesLarge {
  faces?: TweetLegacyEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface TweetLegacyEntitiesMediaItemFeaturesLargeFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyEntitiesMediaItemFeaturesMedium {
  faces?: TweetLegacyEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface TweetLegacyEntitiesMediaItemFeaturesMediumFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyEntitiesMediaItemFeaturesOrig {
  faces?: TweetLegacyEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface TweetLegacyEntitiesMediaItemFeaturesOrigFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyEntitiesMediaItemFeaturesSmall {
  faces?: TweetLegacyEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface TweetLegacyEntitiesMediaItemFeaturesSmallFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyEntitiesMediaItemMediaResults {
  result?: TweetLegacyEntitiesMediaItemMediaResultsResult;
}

interface TweetLegacyEntitiesMediaItemMediaResultsResult {
  media_key?: string;
}

interface TweetLegacyEntitiesMediaItemOriginalInfo {
  focus_rects?: TweetLegacyEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface TweetLegacyEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface TweetLegacyEntitiesMediaItemSizes {
  large?: TweetLegacyEntitiesMediaItemSizesLarge;
  medium?: TweetLegacyEntitiesMediaItemSizesMedium;
  small?: TweetLegacyEntitiesMediaItemSizesSmall;
  thumb?: TweetLegacyEntitiesMediaItemSizesThumb;
}

interface TweetLegacyEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyExtendedEntities {
  media?: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  ext_media_availability?: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;
  features?: TweetLegacyExtendedEntitiesMediaItemFeatures;
  id_str?: string;
  indices?: number[];
  media_key?: string;
  media_results?: TweetLegacyExtendedEntitiesMediaItemMediaResults;
  media_url_https?: string;
  original_info?: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;
  sizes?: TweetLegacyExtendedEntitiesMediaItemSizes;
  type?: string;
  url?: string;
}

interface TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability {
  status?: string;
}

interface TweetLegacyExtendedEntitiesMediaItemFeatures {
  large?: TweetLegacyExtendedEntitiesMediaItemFeaturesLarge;
  medium?: TweetLegacyExtendedEntitiesMediaItemFeaturesMedium;
  orig?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrig;
  small?: TweetLegacyExtendedEntitiesMediaItemFeaturesSmall;
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLarge {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesMedium {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesMediumFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrig {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesSmall {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesSmallFacesItem {
  h: number;  // 2/2
  w: number;  // 2/2
  x: number;  // 2/2
  y: number;  // 2/2
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResults {
  result?: TweetLegacyExtendedEntitiesMediaItemMediaResultsResult;
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResultsResult {
  media_key?: string;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface TweetLegacyExtendedEntitiesMediaItemSizes {
  large?: TweetLegacyExtendedEntitiesMediaItemSizesLarge;
  medium?: TweetLegacyExtendedEntitiesMediaItemSizesMedium;
  small?: TweetLegacyExtendedEntitiesMediaItemSizesSmall;
  thumb?: TweetLegacyExtendedEntitiesMediaItemSizesThumb;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface TweetViews {
  count?: string;
  state?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "tweetResult": [
      {
        "result": {
          "__typename": "Tweet",
          "rest_id": "1885137730167779697",
          "core": {
            "user_results": {
              "result": {
                "__typename": "User",
                "id": "VXNlcjozNTczMTIwNjI=",
                "rest_id": "357312062",
                "affiliates_highlighted_label": {},
                "has_graduated_access": true,
                "is_blue_verified": true,
                "profile_image_shape": "Circle",
                "legacy": {
                  "following": false,
                  "can_dm": false,
                  "can_media_tag": false,
                  "created_at": "Thu Aug 18 05:06:08 +0000 2011",
                  "default_profile": false,
                  "default_profile_image": false,
                  "description": "Bitcoin is an open source censorship-resistant peer-to-peer immutable network. Trackable digital gold. Don't trust; veri...",
                  "entities": {
                    "description": {
                      "urls": []
                    },
                    "url": {
                      "urls": [
                        {
                          "display_url": "bitcoin.org/bitcoin.pdf",
                          "expanded_url": "https://bitcoin.org/bitcoin.pdf",
                          "url": "https://t.co/foKG3v5VuE",
                          "indices": [
                            0,
                            0
                          ]
                        },
                        {
                          "display_url": "bitcoin.org/bitcoin.pdf",
                          "expanded_url": "https://bitcoin.org/bitcoin.pdf",
                          "url": "https://t.co/foKG3v5VuE",
                          "indices": [
                            0,
                            0
                          ]
                        }
                      ]
                    }
                  },
                  "fast_followers_count": 0,
                  "favourites_count": 2820,
                  "followers_count": 7475264,
                  "friends_count": 16,
                  "has_custom_timelines": false,
                  "is_translator": false,
                  "listed_count": 21591,
                  "location": "Worldwide",
                  "media_count": 3533,
                  "name": "Bitcoin",
                  "normal_followers_count": 7475264,
                  "pinned_tweet_ids_str": [
                    "1283491850641461248",
                    "1283491850641461248"
                  ],
                  "possibly_sensitive": false,
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/357312062/1566845268",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg",
                  "profile_interstitial_type": "",
                  "screen_name": "Bitcoin",
                  "statuses_count": 27798,
                  "translator_type": "regular",
                  "url": "https://t.co/foKG3v5VuE",
                  "verified": false,
                  "want_retweets": false,
                  "withheld_in_countries": []
                },
                "professional": {
                  "rest_id": "1679703878185672704",
                  "professional_type": "Business",
                  "category": []
                },
                "tipjar_settings": {},
                "verified_phone_status": false
              }
            }
          },
          "unmention_data": {},
          "edit_control": {
            "edit_tweet_ids": [
              "1885137730167779697",
              "1885137730167779697"
            ],
            "editable_until_msecs": "1738290433000",
            "is_edit_eligible": true,
            "edits_remaining": "5"
          },
          "is_translatable": false,
          "views": {
            "count": "73264",
            "state": "EnabledWithCount"
          },
          "source": "<a href=\"https://www.bitcoin.org\" rel=\"nofollow\">Bitcoin Handle</a>",
          "award_eligible": false,
          "granted_awards": {},
          "legacy": {
            "bookmark_count": 18,
            "bookmarked": false,
            "created_at": "Fri Jan 31 01:27:13 +0000 2025",
            "conversation_id_str": "1885137730167779697",
            "display_text_range": [
              0,
              0
            ],
            "entities": {
              "hashtags": [
                {
                  "indices": [
                    0,
                    0
                  ],
                  "text": "Bitcoin"
                },
                {
                  "indices": [
                    0,
                    0
                  ],
                  "text": "Bitcoin"
                }
              ],
              "media": [
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                },
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
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
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                },
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                }
              ]
            },
            "favorite_count": 1444,
            "favorited": false,
            "full_text": "#Bitcoin https://t.co/BkWDC3EX2Z",
            "is_quote_status": false,
            "lang": "qme",
            "possibly_sensitive": false,
            "possibly_sensitive_editable": true,
            "quote_count": 6,
            "reply_count": 242,
            "retweet_count": 291,
            "retweeted": false,
            "user_id_str": "357312062",
            "id_str": "1885137730167779697"
          }
        }
      },
      {
        "result": {
          "__typename": "Tweet",
          "rest_id": "1885137730167779697",
          "core": {
            "user_results": {
              "result": {
                "__typename": "User",
                "id": "VXNlcjozNTczMTIwNjI=",
                "rest_id": "357312062",
                "affiliates_highlighted_label": {},
                "has_graduated_access": true,
                "is_blue_verified": true,
                "profile_image_shape": "Circle",
                "legacy": {
                  "following": false,
                  "can_dm": false,
                  "can_media_tag": false,
                  "created_at": "Thu Aug 18 05:06:08 +0000 2011",
                  "default_profile": false,
                  "default_profile_image": false,
                  "description": "Bitcoin is an open source censorship-resistant peer-to-peer immutable network. Trackable digital gold. Don't trust; veri...",
                  "entities": {
                    "description": {
                      "urls": []
                    },
                    "url": {
                      "urls": [
                        {
                          "display_url": "bitcoin.org/bitcoin.pdf",
                          "expanded_url": "https://bitcoin.org/bitcoin.pdf",
                          "url": "https://t.co/foKG3v5VuE",
                          "indices": [
                            0,
                            0
                          ]
                        },
                        {
                          "display_url": "bitcoin.org/bitcoin.pdf",
                          "expanded_url": "https://bitcoin.org/bitcoin.pdf",
                          "url": "https://t.co/foKG3v5VuE",
                          "indices": [
                            0,
                            0
                          ]
                        }
                      ]
                    }
                  },
                  "fast_followers_count": 0,
                  "favourites_count": 2820,
                  "followers_count": 7475264,
                  "friends_count": 16,
                  "has_custom_timelines": false,
                  "is_translator": false,
                  "listed_count": 21591,
                  "location": "Worldwide",
                  "media_count": 3533,
                  "name": "Bitcoin",
                  "normal_followers_count": 7475264,
                  "pinned_tweet_ids_str": [
                    "1283491850641461248",
                    "1283491850641461248"
                  ],
                  "possibly_sensitive": false,
                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/357312062/1566845268",
                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_normal.jpeg",
                  "profile_interstitial_type": "",
                  "screen_name": "Bitcoin",
                  "statuses_count": 27798,
                  "translator_type": "regular",
                  "url": "https://t.co/foKG3v5VuE",
                  "verified": false,
                  "want_retweets": false,
                  "withheld_in_countries": []
                },
                "professional": {
                  "rest_id": "1679703878185672704",
                  "professional_type": "Business",
                  "category": []
                },
                "tipjar_settings": {},
                "verified_phone_status": false
              }
            }
          },
          "unmention_data": {},
          "edit_control": {
            "edit_tweet_ids": [
              "1885137730167779697",
              "1885137730167779697"
            ],
            "editable_until_msecs": "1738290433000",
            "is_edit_eligible": true,
            "edits_remaining": "5"
          },
          "is_translatable": false,
          "views": {
            "count": "73264",
            "state": "EnabledWithCount"
          },
          "source": "<a href=\"https://www.bitcoin.org\" rel=\"nofollow\">Bitcoin Handle</a>",
          "award_eligible": false,
          "granted_awards": {},
          "legacy": {
            "bookmark_count": 18,
            "bookmarked": false,
            "created_at": "Fri Jan 31 01:27:13 +0000 2025",
            "conversation_id_str": "1885137730167779697",
            "display_text_range": [
              0,
              0
            ],
            "entities": {
              "hashtags": [
                {
                  "indices": [
                    0,
                    0
                  ],
                  "text": "Bitcoin"
                },
                {
                  "indices": [
                    0,
                    0
                  ],
                  "text": "Bitcoin"
                }
              ],
              "media": [
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                },
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
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
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                },
                {
                  "display_url": "pic.twitter.com/BkWDC3EX2Z",
                  "expanded_url": "https://twitter.com/Bitcoin/status/1885137730167779697/photo/1",
                  "id_str": "1885137726657179648",
                  "indices": [
                    9,
                    9
                  ],
                  "media_key": "3_1885137726657179648",
                  "media_url_https": "https://pbs.twimg.com/media/GilaxkYWsAAolF4.jpg",
                  "type": "photo",
                  "url": "https://t.co/BkWDC3EX2Z",
                  "ext_media_availability": {
                    "status": "Available"
                  },
                  "features": {
                    "large": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    },
                    "medium": {
                      "faces": [
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        },
                        {
                          "x": 248,
                          "y": 352,
                          "h": 129,
                          "w": 129
                        }
                      ]
                    },
                    "small": {
                      "faces": [
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        },
                        {
                          "x": 140,
                          "y": 199,
                          "h": 73,
                          "w": 73
                        }
                      ]
                    },
                    "orig": {
                      "faces": [
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        },
                        {
                          "x": 331,
                          "y": 470,
                          "h": 173,
                          "w": 173
                        }
                      ]
                    }
                  },
                  "sizes": {
                    "large": {
                      "h": 1600,
                      "w": 1600,
                      "resize": "fit"
                    },
                    "medium": {
                      "h": 1200,
                      "w": 1200,
                      "resize": "fit"
                    },
                    "small": {
                      "h": 680,
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
                    "height": 1600,
                    "width": 1600,
                    "focus_rects": [
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      },
                      {
                        "x": 0,
                        "y": 0,
                        "w": 1600,
                        "h": 896
                      }
                    ]
                  },
                  "media_results": {
                    "result": {
                      "media_key": "3_1885137726657179648"
                    }
                  }
                }
              ]
            },
            "favorite_count": 1444,
            "favorited": false,
            "full_text": "#Bitcoin https://t.co/BkWDC3EX2Z",
            "is_quote_status": false,
            "lang": "qme",
            "possibly_sensitive": false,
            "possibly_sensitive_editable": true,
            "quote_count": 6,
            "reply_count": 242,
            "retweet_count": 291,
            "retweeted": false,
            "user_id_str": "357312062",
            "id_str": "1885137730167779697"
          }
        }
      }
    ]
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "data": {
    "tweetResult": [
      {
        "result": {}
      }
    ]
  }
}
```

## Notes

- View counts may come as formatted strings (e.g., `"1,234,567"`)
