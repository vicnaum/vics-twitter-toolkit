# Tweet Article

**Route:** `GET /TweetArticle`
**API:** `twitter283.p.rapidapi.com`
**Description:** Tweet Article

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | `1905545699552375179` |

## Response Schema

```typescript
// Root: TweetArticleResponse
interface TweetArticleResponse {
  data: TweetArticleResponseData;
}

interface TweetArticleResponseData {
  tweetResult: TweetArticleResponseDataTweetResult;
}

interface TweetArticleResponseDataTweetResult {
  result: Tweet;
}

interface Tweet {
  __typename: string;
  article: TweetArticle;
  core: TweetCore;
  edit_control: TweetEditControl;
  has_birdwatch_notes: boolean;
  is_translatable: boolean;
  legacy: TweetLegacy;
  rest_id: string;
  source: string;
  unmention_data: {};
  views: TweetViews;
}

interface TweetArticle {
  article_results: TweetArticleArticleResults;
}

interface TweetArticleArticleResults {
  result: TweetArticleArticleResultsResult;
}

interface TweetArticleArticleResultsResult {
  content_state: TweetArticleArticleResultsResultContentState;
  cover_media: TweetArticleArticleResultsResultCoverMedia;
  id: string;
  lifecycle_state: TweetArticleArticleResultsResultLifecycleState;
  media_entities: TweetArticleArticleResultsResultMediaEntitiesItem[];
  metadata: TweetArticleArticleResultsResultMetadata;
  preview_text: string;
  rest_id: string;
  title: string;
}

interface TweetArticleArticleResultsResultContentState {
  blocks: TweetArticleArticleResultsResultContentStateBlocksItem[];
  entityMap: TweetArticleArticleResultsResultContentStateEntityMapItem[];
}

interface TweetArticleArticleResultsResultContentStateBlocksItem {
  data: TweetArticleArticleResultsResultContentStateBlocksItemData;  // 73/73
  entityRanges: TweetArticleArticleResultsResultContentStateBlocksItemEntityRangesItem[];  // 73/73
  inlineStyleRanges: TweetArticleArticleResultsResultContentStateBlocksItemInlineStyleRangesItem[];  // 73/73
  key: string;  // 73/73
  text: string;  // 73/73
  type: string;  // 73/73
}

interface TweetArticleArticleResultsResultContentStateBlocksItemData {
  urls: TweetArticleArticleResultsResultContentStateBlocksItemDataUrlsItem[];
  mentions?: TweetArticleArticleResultsResultContentStateBlocksItemDataMentionsItem[];
}

interface TweetArticleArticleResultsResultContentStateBlocksItemDataUrlsItem {
  fromIndex: number;
  text: string;
  toIndex: number;
}

interface TweetArticleArticleResultsResultContentStateBlocksItemDataMentionsItem {
  fromIndex?: number;
  text?: string;
  toIndex?: number;
}

interface TweetArticleArticleResultsResultContentStateBlocksItemEntityRangesItem {
  key?: number;  // 11/2
  length?: number;  // 11/2
  offset?: number;  // 11/2
}

interface TweetArticleArticleResultsResultContentStateBlocksItemInlineStyleRangesItem {
  length?: number;
  offset?: number;
  style?: string;
}

interface TweetArticleArticleResultsResultContentStateEntityMapItem {
  key: string;  // 11/11
  value: TweetArticleArticleResultsResultContentStateEntityMapItemValue;  // 11/11
}

interface TweetArticleArticleResultsResultContentStateEntityMapItemValue {
  data?: TweetArticleArticleResultsResultContentStateEntityMapItemValueData;
  mutability?: string;
  type?: string;
}

interface TweetArticleArticleResultsResultContentStateEntityMapItemValueData {
  entityKey?: string;
  mediaItems?: TweetArticleArticleResultsResultContentStateEntityMapItemValueDataMediaItemsItem[];
  url?: string;
}

interface TweetArticleArticleResultsResultContentStateEntityMapItemValueDataMediaItemsItem {
  localMediaId?: string;
  mediaCategory?: string;
  mediaId?: string;
}

interface TweetArticleArticleResultsResultCoverMedia {
  id: string;
  media_id: string;
  media_info: ApiImage;
  media_key: string;
}

interface ApiImage {
  __typename: string;
  color_info: ApiImageColorInfo;
  original_img_height: number;
  original_img_url: string;
  original_img_width: number;
}

interface ApiImageColorInfo {
  palette: ApiImageColorInfoPaletteItem[];
}

interface ApiImageColorInfoPaletteItem {
  percentage: number;  // 5/5
  rgb: ApiImageColorInfoPaletteItemRgb;  // 5/5
}

interface ApiImageColorInfoPaletteItemRgb {
  blue?: number;
  green?: number;
  red?: number;
}

interface TweetArticleArticleResultsResultLifecycleState {
  modified_at_secs: number;
}

interface TweetArticleArticleResultsResultMediaEntitiesItem {
  id: string;  // 8/8
  media_id: string;  // 8/8
  media_info: ApiImage;  // 8/8
  media_key: string;  // 8/8
}

interface TweetArticleArticleResultsResultMetadata {
  first_published_at_secs: number;
}

interface TweetCore {
  user_results: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  result: User;
}

interface User {
  __typename: string;
  affiliates_highlighted_label: {};
  has_graduated_access: boolean;
  id: string;
  is_blue_verified: boolean;
  legacy: UserLegacy;
  location: UserLocation;
  parody_commentary_fan_label: string;
  privacy: UserPrivacy;
  professional: UserProfessional;
  profile_image_shape: string;
  rest_id: string;
  tipjar_settings: {};
  verification: UserVerification;
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
  url: string;
  want_retweets: boolean;
  withheld_in_countries: unknown[];
}

interface UserLegacyEntities {
  description: UserLegacyEntitiesDescription;
  url: UserLegacyEntitiesUrl;
}

interface UserLegacyEntitiesDescription {
  urls: UserLegacyEntitiesDescriptionUrlsItem[];
}

interface UserLegacyEntitiesDescriptionUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserLegacyEntitiesUrl {
  urls: UserLegacyEntitiesUrlUrlsItem[];
}

interface UserLegacyEntitiesUrlUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserLocation {
  location: string;
}

interface UserPrivacy {
  protected: boolean;
}

interface UserProfessional {
  category: unknown[];
  professional_type: string;
  rest_id: string;
}

interface UserVerification {
  verified: boolean;
  verified_type: string;
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
  symbols: unknown[];
  timestamps: unknown[];
  urls: TweetLegacyEntitiesUrlsItem[];
  user_mentions: unknown[];
}

interface TweetLegacyEntitiesUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
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
        "rest_id": "1905545699552375179",
        "has_birdwatch_notes": false,
        "core": {
          "user_results": {
            "result": {
              "__typename": "User",
              "id": "VXNlcjoxNzY0NjMxMTQxOTI2MDAyNjg5",
              "rest_id": "1764631141926002689",
              "affiliates_highlighted_label": {},
              "has_graduated_access": true,
              "is_blue_verified": true,
              "legacy": {
                "can_dm": true,
                "can_media_tag": true,
                "created_at": "Mon Mar 04 12:37:18 +0000 2024",
                "default_profile": true,
                "default_profile_image": false,
                "description": "DCo is a Web3 research and advisory firm working with gritty founders.\nSubscribe to our newsletter → https://t.co/QdeGhj...",
                "entities": {
                  "description": {
                    "urls": [
                      {
                        "display_url": "dco.link/subscribe",
                        "expanded_url": "https://dco.link/subscribe",
                        "url": "https://t.co/QdeGhjQoOe",
                        "indices": [
                          101,
                          101
                        ]
                      }
                    ]
                  },
                  "url": {
                    "urls": [
                      {
                        "display_url": "dco.link/build",
                        "expanded_url": "https://dco.link/build",
                        "url": "https://t.co/fHh8FwIPaF",
                        "indices": [
                          0,
                          0
                        ]
                      }
                    ]
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 633,
                "followers_count": 11721,
                "following": false,
                "friends_count": 146,
                "has_custom_timelines": false,
                "is_translator": false,
                "listed_count": 275,
                "media_count": 336,
                "name": "Decentralised.Co",
                "normal_followers_count": 11721,
                "pinned_tweet_ids_str": [
                  "1816424074525966696"
                ],
                "possibly_sensitive": false,
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1764631141926002689/1742563521",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1766132688316973056/LB-8W7_d_normal.jpg",
                "profile_interstitial_type": "",
                "screen_name": "Decentralisedco",
                "statuses_count": 688,
                "translator_type": "none",
                "url": "https://t.co/fHh8FwIPaF",
                "want_retweets": false,
                "withheld_in_countries": []
              },
              "location": {
                "location": "Work with us →"
              },
              "parody_commentary_fan_label": "None",
              "profile_image_shape": "Square",
              "professional": {
                "rest_id": "1765414720272482629",
                "professional_type": "Business",
                "category": []
              },
              "privacy": {
                "protected": false
              },
              "tipjar_settings": {},
              "verification": {
                "verified": false,
                "verified_type": "Business"
              }
            }
          }
        },
        "unmention_data": {},
        "edit_control": {
          "edit_tweet_ids": [
            "1905545699552375179"
          ],
          "editable_until_msecs": "1743156072000",
          "is_edit_eligible": false,
          "edits_remaining": "5"
        },
        "is_translatable": false,
        "views": {
          "count": "43397",
          "state": "EnabledWithCount"
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "article": {
          "article_results": {
            "result": {
              "rest_id": "1905541139144298498",
              "id": "QXJ0aWNsZUVudGl0eToxOTA1NTQxMTM5MTQ0Mjk4NDk4",
              "title": "When Tokens Burn",
              "preview_text": "Breaking down how crypto protocols approach revenue and cash flow\nThis is a summarised version of a newsletter issue pub...",
              "cover_media": {
                "id": "QXBpTWVkaWE6DAAFCgABGnHXrznXUAEKAAIYfTqslhdgAQAA",
                "media_key": "3_1905541264944091137",
                "media_id": "1905541264944091137",
                "media_info": {
                  "__typename": "ApiImage",
                  "original_img_height": 614,
                  "original_img_width": 1536,
                  "original_img_url": "https://pbs.twimg.com/media/GnHXrznXUAEs-v5.jpg",
                  "color_info": {
                    "palette": [
                      {
                        "percentage": 70.7,
                        "rgb": {
                          "blue": 101,
                          "green": 73,
                          "red": 25
                        }
                      },
                      {
                        "percentage": 70.7,
                        "rgb": {
                          "blue": 101,
                          "green": 73,
                          "red": 25
                        }
                      }
                    ]
                  }
                }
              },
              "content_state": {
                "blocks": [
                  {
                    "key": "9jblf",
                    "data": {
                      "urls": [
                        {
                          "fromIndex": 64,
                          "toIndex": 80,
                          "text": "Decentralised.co"
                        }
                      ],
                      "mentions": [
                        {
                          "fromIndex": 11,
                          "toIndex": 24,
                          "text": "desh_saurabh"
                        },
                        {
                          "fromIndex": 11,
                          "toIndex": 24,
                          "text": "desh_saurabh"
                        }
                      ]
                    },
                    "entityRanges": [
                      {
                        "key": 0,
                        "length": 9,
                        "offset": 51
                      },
                      {
                        "key": 0,
                        "length": 9,
                        "offset": 51
                      }
                    ],
                    "inlineStyleRanges": [
                      {
                        "length": 65,
                        "offset": 0,
                        "style": "Italic"
                      },
                      {
                        "length": 65,
                        "offset": 0,
                        "style": "Italic"
                      }
                    ],
                    "text": "Breaking down how crypto protocols approach revenue and cash flow",
                    "type": "unstyled"
                  },
                  {
                    "key": "9jblf",
                    "data": {
                      "urls": [
                        {
                          "fromIndex": 64,
                          "toIndex": 80,
                          "text": "Decentralised.co"
                        }
                      ],
                      "mentions": [
                        {
                          "fromIndex": 11,
                          "toIndex": 24,
                          "text": "desh_saurabh"
                        },
                        {
                          "fromIndex": 11,
                          "toIndex": 24,
                          "text": "desh_saurabh"
                        }
                      ]
                    },
                    "entityRanges": [
                      {
                        "key": 0,
                        "length": 9,
                        "offset": 51
                      },
                      {
                        "key": 0,
                        "length": 9,
                        "offset": 51
                      }
                    ],
                    "inlineStyleRanges": [
                      {
                        "length": 65,
                        "offset": 0,
                        "style": "Italic"
                      },
                      {
                        "length": 65,
                        "offset": 0,
                        "style": "Italic"
                      }
                    ],
                    "text": "Breaking down how crypto protocols approach revenue and cash flow",
                    "type": "unstyled"
                  }
                ],
                "entityMap": [
                  {
                    "key": "8",
                    "value": {
                      "type": "MEDIA",
                      "mutability": "Immutable",
                      "data": {
                        "entityKey": "787d9b22-d30a-49c0-9edb-8b2515eeb024",
                        "mediaItems": [
                          {
                            "localMediaId": "12",
                            "mediaCategory": "DraftTweetImage",
                            "mediaId": "1905543594913693696"
                          },
                          {
                            "localMediaId": "12",
                            "mediaCategory": "DraftTweetImage",
                            "mediaId": "1905543594913693696"
                          }
                        ],
                        "url": "mailto:venture@decentralised.co"
                      }
                    }
                  },
                  {
                    "key": "8",
                    "value": {
                      "type": "MEDIA",
                      "mutability": "Immutable",
                      "data": {
                        "entityKey": "787d9b22-d30a-49c0-9edb-8b2515eeb024",
                        "mediaItems": [
                          {
                            "localMediaId": "12",
                            "mediaCategory": "DraftTweetImage",
                            "mediaId": "1905543594913693696"
                          },
                          {
                            "localMediaId": "12",
                            "mediaCategory": "DraftTweetImage",
                            "mediaId": "1905543594913693696"
                          }
                        ],
                        "url": "mailto:venture@decentralised.co"
                      }
                    }
                  }
                ]
              },
              "media_entities": [
                {
                  "id": "QXBpTWVkaWE6DAAFCgABGnHZ9glXkAAKAAIYfTqslhdgAQAA",
                  "media_key": "3_1905543768096346112",
                  "media_id": "1905543768096346112",
                  "media_info": {
                    "__typename": "ApiImage",
                    "original_img_height": 1254,
                    "original_img_width": 2152,
                    "original_img_url": "https://pbs.twimg.com/media/GnHZ9glXkAAHEDJ.png",
                    "color_info": {
                      "palette": [
                        {
                          "percentage": 72.23,
                          "rgb": {
                            "blue": 255,
                            "green": 255,
                            "red": 255
                          }
                        },
                        {
                          "percentage": 72.23,
                          "rgb": {
                            "blue": 255,
                            "green": 255,
                            "red": 255
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "id": "QXBpTWVkaWE6DAAFCgABGnHZ9glXkAAKAAIYfTqslhdgAQAA",
                  "media_key": "3_1905543768096346112",
                  "media_id": "1905543768096346112",
                  "media_info": {
                    "__typename": "ApiImage",
                    "original_img_height": 1254,
                    "original_img_width": 2152,
                    "original_img_url": "https://pbs.twimg.com/media/GnHZ9glXkAAHEDJ.png",
                    "color_info": {
                      "palette": [
                        {
                          "percentage": 72.23,
                          "rgb": {
                            "blue": 255,
                            "green": 255,
                            "red": 255
                          }
                        },
                        {
                          "percentage": 72.23,
                          "rgb": {
                            "blue": 255,
                            "green": 255,
                            "red": 255
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "lifecycle_state": {
                "modified_at_secs": 1743152472
              },
              "metadata": {
                "first_published_at_secs": 1743152472
              }
            }
          }
        },
        "legacy": {
          "bookmark_count": 128,
          "bookmarked": false,
          "created_at": "Fri Mar 28 09:01:12 +0000 2025",
          "conversation_id_str": "1905545699552375179",
          "display_text_range": [
            0,
            0
          ],
          "entities": {
            "hashtags": [],
            "symbols": [],
            "timestamps": [],
            "urls": [
              {
                "display_url": "x.com/i/article/1905…",
                "expanded_url": "http://x.com/i/article/1905541139144298498",
                "url": "https://t.co/0jXV7JYsmw",
                "indices": [
                  0,
                  0
                ]
              }
            ],
            "user_mentions": []
          },
          "favorite_count": 156,
          "favorited": false,
          "full_text": "https://t.co/0jXV7JYsmw",
          "is_quote_status": false,
          "lang": "zxx",
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "quote_count": 9,
          "reply_count": 14,
          "retweet_count": 33,
          "retweeted": false,
          "user_id_str": "1764631141926002689",
          "id_str": "1905545699552375179"
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
        "rest_id": "1905545699552375179",
        "has_birdwatch_notes": false,
        "core": {
          "user_results": {
            "result": {
              "__typename": "User",
              "id": "VXNlcjoxNzY0NjMxMTQxOTI2MDAyNjg5",
              "rest_id": "1764631141926002689",
              "affiliates_highlighted_label": {},
              "has_graduated_access": true,
              "is_blue_verified": true,
              "legacy": {
                "can_dm": true,
                "can_media_tag": true,
                "created_at": "Mon Mar 04 12:37:18 +0000 2024",
                "default_profile": true,
                "default_profile_image": false,
                "description": "DCo is a Web3 research and advisory firm working with gritty founders.\nSubscribe to our newsletter → https://t.co/QdeGhj...",
                "entities": {
                  "description": {
                    "urls": [
                      {
                        "display_url": "dco.link/subscribe",
                        "expanded_url": "https://dco.link/subscribe",
                        "url": "https://t.co/QdeGhjQoOe",
                        "indices": [
                          101
                        ]
                      }
                    ]
                  },
                  "url": {
                    "urls": [
                      {
                        "display_url": "dco.link/build",
                        "expanded_url": "https://dco.link/build",
                        "url": "https://t.co/fHh8FwIPaF",
                        "indices": [
                          0
                        ]
                      }
                    ]
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 633,
                "followers_count": 11721,
                "following": false,
                "friends_count": 146,
                "has_custom_timelines": false,
                "is_translator": false,
                "listed_count": 275,
                "media_count": 336,
                "name": "Decentralised.Co",
                "normal_followers_count": 11721,
                "pinned_tweet_ids_str": [
                  "1816424074525966696"
                ],
                "possibly_sensitive": false,
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1764631141926002689/1742563521",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1766132688316973056/LB-8W7_d_normal.jpg",
                "profile_interstitial_type": "",
                "screen_name": "Decentralisedco",
                "statuses_count": 688,
                "translator_type": "none",
                "url": "https://t.co/fHh8FwIPaF",
                "want_retweets": false,
                "withheld_in_countries": []
              },
              "location": {
                "location": "Work with us →"
              },
              "parody_commentary_fan_label": "None",
              "profile_image_shape": "Square",
              "professional": {
                "rest_id": "1765414720272482629",
                "professional_type": "Business",
                "category": []
              },
              "privacy": {
                "protected": false
              },
              "tipjar_settings": {},
              "verification": {
                "verified": false,
                "verified_type": "Business"
              }
            }
          }
        },
        "unmention_data": {},
        "edit_control": {
          "edit_tweet_ids": [
            "1905545699552375179"
          ],
          "editable_until_msecs": "1743156072000",
          "is_edit_eligible": false,
          "edits_remaining": "5"
        },
        "is_translatable": false,
        "views": {
          "count": "43397",
          "state": "EnabledWithCount"
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "article": {
          "article_results": {
            "result": {
              "rest_id": "1905541139144298498",
              "id": "QXJ0aWNsZUVudGl0eToxOTA1NTQxMTM5MTQ0Mjk4NDk4",
              "title": "When Tokens Burn",
              "preview_text": "Breaking down how crypto protocols approach revenue and cash flow\nThis is a summarised version of a newsletter issue pub...",
              "cover_media": {
                "id": "QXBpTWVkaWE6DAAFCgABGnHXrznXUAEKAAIYfTqslhdgAQAA",
                "media_key": "3_1905541264944091137",
                "media_id": "1905541264944091137",
                "media_info": {
                  "__typename": "ApiImage",
                  "original_img_height": 614,
                  "original_img_width": 1536,
                  "original_img_url": "https://pbs.twimg.com/media/GnHXrznXUAEs-v5.jpg",
                  "color_info": {
                    "palette": [
                      {
                        "percentage": 70.7,
                        "rgb": {}
                      }
                    ]
                  }
                }
              },
              "content_state": {
                "blocks": [
                  {
                    "key": "9jblf",
                    "data": {
                      "urls": [
                        {
                          "fromIndex": 64,
                          "toIndex": 80,
                          "text": "Decentralised.co"
                        }
                      ]
                    },
                    "entityRanges": [
                      {}
                    ],
                    "inlineStyleRanges": [
                      {}
                    ],
                    "text": "Breaking down how crypto protocols approach revenue and cash flow",
                    "type": "unstyled"
                  }
                ],
                "entityMap": [
                  {
                    "key": "8",
                    "value": {}
                  }
                ]
              },
              "media_entities": [
                {
                  "id": "QXBpTWVkaWE6DAAFCgABGnHZ9glXkAAKAAIYfTqslhdgAQAA",
                  "media_key": "3_1905543768096346112",
                  "media_id": "1905543768096346112",
                  "media_info": {}
                }
              ],
              "lifecycle_state": {
                "modified_at_secs": 1743152472
              },
              "metadata": {
                "first_published_at_secs": 1743152472
              }
            }
          }
        },
        "legacy": {
          "bookmark_count": 128,
          "bookmarked": false,
          "created_at": "Fri Mar 28 09:01:12 +0000 2025",
          "conversation_id_str": "1905545699552375179",
          "display_text_range": [
            0
          ],
          "entities": {
            "hashtags": [],
            "symbols": [],
            "timestamps": [],
            "urls": [
              {
                "display_url": "x.com/i/article/1905…",
                "expanded_url": "http://x.com/i/article/1905541139144298498",
                "url": "https://t.co/0jXV7JYsmw",
                "indices": [
                  0
                ]
              }
            ],
            "user_mentions": []
          },
          "favorite_count": 156,
          "favorited": false,
          "full_text": "https://t.co/0jXV7JYsmw",
          "is_quote_status": false,
          "lang": "zxx",
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "quote_count": 9,
          "reply_count": 14,
          "retweet_count": 33,
          "retweeted": false,
          "user_id_str": "1764631141926002689",
          "id_str": "1905545699552375179"
        }
      }
    }
  }
}
```

## Notes

- View counts may come as formatted strings (e.g., `"1,234,567"`)
