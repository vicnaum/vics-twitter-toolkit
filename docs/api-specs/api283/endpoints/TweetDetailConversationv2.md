# Tweet Detail & Conversation Timeline Light

**Route:** `GET /TweetDetailConversationv2`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET Tweet Detail & Conversation Timeline Light

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | No | `1768778186186195177` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: TweetDetailConversationTimelineLightResponse
interface TweetDetailConversationTimelineLightResponse {
  data: TweetDetailConversationTimelineLightResponseData;
}

interface TweetDetailConversationTimelineLightResponseData {
  timeline_response: TweetDetailConversationTimelineLightResponseDataTimelineResponse;
}

interface TweetDetailConversationTimelineLightResponseDataTimelineResponse {
  instructions: TimelineClearCacheItem[];
  metadata: TweetDetailConversationTimelineLightResponseDataTimelineResponseMetadata;
}

interface TimelineClearCacheItem {
  __typename: string;  // 3/3
  direction?: string;  // 1/3
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/3
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 41/41
  entryId: string;  // 41/41
  sortIndex: string;  // 41/41
}

interface TimelineTimelineItem {
  content: TimelineTweet;
  cursorType: string;
  value: string;
  __typename?: string;
  clientEventInfo?: TimelineTimelineItemClientEventInfo;
  items?: TimelineTimelineItemItemsItem[];
  metadata?: TimelineTimelineItemMetadata;
  moduleDisplayType?: string;
}

interface TimelineTweet {
  __typename: string;
  tweetDisplayType: string;
  tweetResult: TimelineTweetTweetResult;
}

interface TimelineTweetTweetResult {
  result: Tweet;
}

interface Tweet {
  __typename: string;
  conversation_muted: boolean;
  core: TweetCore;
  edit_control: EditControlInitial;
  is_translatable: boolean;
  legacy: TweetLegacy;
  quick_promote_eligibility: TweetQuickPromoteEligibility;
  quoted_status_result: TweetQuotedStatusResult;
  rest_id: string;
  unmention_data: {};
  view_count_info: TweetViewCountInfo;
}

interface TweetCore {
  user_result: TweetCoreUserResult;
}

interface TweetCoreUserResult {
  result: User;
}

interface User {
  __typename: string;
  affiliates_highlighted_label: {};
  business_account: {};
  creator_subscriptions_count: number;
  exclusive_tweet_following: boolean;
  has_nft_avatar: boolean;
  is_blue_verified: boolean;
  legacy: UserLegacy;
  private_super_following: boolean;
  professional: UserProfessional;
  profile_image_shape: string;
  rest_id: string;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

interface UserLegacy {
  advertiser_account_service_levels: string[];
  advertiser_account_type: string;
  analytics_type: string;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  description: string;
  entities: UserLegacyEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  geo_enabled: boolean;
  has_custom_timelines: boolean;
  has_extended_profile: boolean;
  id_str: string;
  is_translator: boolean;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  profile_background_color: string;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  profile_link_color: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type_enum: string;
  url: string;
  verified: boolean;
  withheld_in_countries: unknown[];
}

interface UserLegacyEntities {
  description: UserLegacyEntitiesDescription;
  url: UserLegacyEntitiesUrl;
}

interface UserLegacyEntitiesDescription {
  hashtags: unknown[];
  symbols: unknown[];
  urls: UserLegacyEntitiesDescriptionUrlsItem[];
  user_mentions: UserLegacyEntitiesDescriptionUserMentionsItem[];
}

interface UserLegacyEntitiesDescriptionUrlsItem {
  display_url: string;  // 6/6
  expanded_url: string;  // 6/6
  indices: number[];  // 6/6
  url: string;  // 6/6
}

interface UserLegacyEntitiesDescriptionUserMentionsItem {
  id_str: string;  // 2/2
  indices: number[];  // 2/2
  name: string;  // 2/2
  screen_name: string;  // 2/2
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

interface UserProfessional {
  category: unknown[];
  professional_type: string;
  quick_promote_eligibility: UserProfessionalQuickPromoteEligibility;
}

interface UserProfessionalQuickPromoteEligibility {
  is_eligible: boolean;
}

interface EditControlInitial {
  __typename: string;
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
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  quoted_status_id_str: string;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
}

interface TweetLegacyEntities {
  hashtags: unknown[];
  symbols: unknown[];
  urls: unknown[];
  user_mentions: unknown[];
}

interface TweetQuickPromoteEligibility {
  eligibility: string;
}

interface TweetQuotedStatusResult {
  result: Tweet;
}

interface TweetViewCountInfo {
  count: string;
  state: string;
}

interface TimelineTimelineItemClientEventInfo {
  element: string;
  component?: string;
  details?: TimelineTimelineItemClientEventInfoDetails;
}

interface TimelineTimelineItemClientEventInfoDetails {
  conversationDetails?: TimelineTimelineItemClientEventInfoDetailsConversationDetails;
  timelinesDetails?: TimelineTimelineItemClientEventInfoDetailsTimelinesDetails;
}

interface TimelineTimelineItemClientEventInfoDetailsConversationDetails {
  conversationSection?: string;
}

interface TimelineTimelineItemClientEventInfoDetailsTimelinesDetails {
  controllerData?: string;
}

interface TimelineTimelineItemItemsItem {
  entryId?: string;
  item?: TimelineTimelineItemItemsItemItem;
}

interface TimelineTimelineItemItemsItemItem {
  clientEventInfo?: TimelineTimelineItemItemsItemItemClientEventInfo;
  content?: TimelineTweet;
}

interface TimelineTimelineItemItemsItemItemClientEventInfo {
  component?: string;
  details?: TimelineTimelineItemItemsItemItemClientEventInfoDetails;
  element?: string;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetails {
  conversationDetails?: TimelineTimelineItemItemsItemItemClientEventInfoDetailsConversationDetails;
  timelinesDetails?: TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetailsConversationDetails {
  conversationSection?: string;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails {
  controllerData?: string;
}

interface TimelineTimelineItemMetadata {
  conversationMetadata?: TimelineTimelineItemMetadataConversationMetadata;
}

interface TimelineTimelineItemMetadataConversationMetadata {
  allTweetIds?: string[];
  enableDeduplication?: boolean;
}

interface TweetDetailConversationTimelineLightResponseDataTimelineResponseMetadata {
  scribeConfig: TweetDetailConversationTimelineLightResponseDataTimelineResponseMetadataScribeConfig;
}

interface TweetDetailConversationTimelineLightResponseDataTimelineResponseMetadataScribeConfig {
  page: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "timeline_response": {
      "instructions": [
        {
          "__typename": "TimelineClearCache",
          "entries": [
            {
              "entryId": "tweet-2019056019121308063",
              "sortIndex": "2019765255122452480",
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "tweetResult": {
                    "result": {
                      "__typename": "Tweet",
                      "rest_id": "2019056019121308063",
                      "view_count_info": {
                        "count": "148363",
                        "state": "EnabledWithCount"
                      },
                      "legacy": {
                        "conversation_id_str": "2019056019121308063",
                        "created_at": "Wed Feb 04 14:30:41 +0000 2026",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {
                          "hashtags": [],
                          "symbols": [],
                          "urls": [],
                          "user_mentions": []
                        },
                        "favorite_count": 445,
                        "favorited": false,
                        "full_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
                        "is_quote_status": true,
                        "lang": "en",
                        "quote_count": 6,
                        "quoted_status_id_str": "2019024044738171136",
                        "reply_count": 281,
                        "retweet_count": 5,
                        "retweeted": false,
                        "user_id_str": "1577241403",
                        "bookmarked": false,
                        "bookmark_count": 129
                      },
                      "core": {
                        "user_result": {
                          "result": {
                            "__typename": "User",
                            "rest_id": "1577241403",
                            "has_nft_avatar": false,
                            "is_blue_verified": true,
                            "profile_image_shape": "Circle",
                            "affiliates_highlighted_label": {},
                            "legacy": {
                              "can_dm": false,
                              "can_media_tag": false,
                              "advertiser_account_service_levels": [
                                "smb"
                              ],
                              "advertiser_account_type": "promotable_user",
                              "analytics_type": "enabled",
                              "created_at": "Mon Jul 08 09:31:59 +0000 2013",
                              "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
                              "entities": {
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "readMAKE.com",
                                      "expanded_url": "http://readMAKE.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/IFRqZDK2Lw"
                                    }
                                  ]
                                },
                                "description": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    },
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    }
                                  ]
                                }
                              },
                              "fast_followers_count": 0,
                              "favourites_count": 162418,
                              "followers_count": 816099,
                              "friends_count": 2689,
                              "geo_enabled": false,
                              "has_custom_timelines": true,
                              "has_extended_profile": true,
                              "id_str": "1577241403",
                              "is_translator": false,
                              "location": "📕 My book $6K/m  👉",
                              "media_count": 18324,
                              "name": "@levelsio",
                              "normal_followers_count": 816099,
                              "pinned_tweet_ids_str": [
                                "1947295471082316145"
                              ],
                              "profile_background_color": "FFFFFF",
                              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
                              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
                              "profile_interstitial_type": "",
                              "profile_link_color": "FF473F",
                              "protected": false,
                              "screen_name": "levelsio",
                              "statuses_count": 168924,
                              "translator_type_enum": "None",
                              "url": "https://t.co/IFRqZDK2Lw",
                              "verified": false,
                              "withheld_in_countries": []
                            },
                            "business_account": {},
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "private_super_following": false,
                            "exclusive_tweet_following": false,
                            "professional": {
                              "professional_type": "Creator",
                              "category": [],
                              "quick_promote_eligibility": {
                                "is_eligible": false
                              }
                            },
                            "creator_subscriptions_count": 1
                          }
                        }
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "2019056019121308063"
                        ],
                        "editable_until_msecs": "1770219041000",
                        "edits_remaining": "5",
                        "is_edit_eligible": true
                      },
                      "unmention_data": {},
                      "quick_promote_eligibility": {
                        "eligibility": "IneligibleUserUnauthorized"
                      },
                      "conversation_muted": false,
                      "is_translatable": false,
                      "quoted_status_result": {
                        "result": {
                          "__typename": "Tweet",
                          "rest_id": "2019024044738171136",
                          "view_count_info": {
                            "count": "1023181",
                            "state": "EnabledWithCount"
                          },
                          "legacy": {
                            "conversation_id_str": "2019024044738171136",
                            "created_at": "Wed Feb 04 12:23:38 +0000 2026",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "hashtags": [],
                              "symbols": [],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/web/status/2…",
                                  "expanded_url": "https://twitter.com/i/web/status/2019024044738171136",
                                  "indices": [
                                    223,
                                    223
                                  ],
                                  "url": "https://t.co/xTAxrd3Uoh"
                                }
                              ],
                              "user_mentions": []
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "display_url": "pic.twitter.com/SgWZVIf4nT",
                                  "expanded_url": "https://twitter.com/saxena_puru/status/2019024044738171136/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "2019019581046833152",
                                  "indices": [
                                    247,
                                    247
                                  ],
                                  "media_key": "13_2019019581046833152",
                                  "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
                                  "original_info": {
                                    "width": 1320,
                                    "height": 734,
                                    "focus_rects": []
                                  },
                                  "sizes": {
                                    "large": {
                                      "w": 1320,
                                      "h": 734
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/SgWZVIf4nT",
                                  "video_info": {
                                    "aspect_ratio": [
                                      660,
                                      660
                                    ],
                                    "duration_millis": 159660,
                                    "variants": [
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      },
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      }
                                    ]
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  }
                                }
                              ]
                            },
                            "favorite_count": 5017,
                            "favorited": false,
                            "full_text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                            "is_quote_status": false,
                            "lang": "en",
                            "possibly_sensitive": false,
                            "possibly_sensitive_editable": true,
                            "quote_count": 241,
                            "reply_count": 302,
                            "retweet_count": 595,
                            "retweeted": false,
                            "user_id_str": "1033127171298975744",
                            "bookmarked": false,
                            "bookmark_count": 1979
                          },
                          "core": {
                            "user_result": {
                              "result": {
                                "__typename": "User",
                                "rest_id": "1033127171298975744",
                                "has_nft_avatar": false,
                                "is_blue_verified": true,
                                "profile_image_shape": "Circle",
                                "affiliates_highlighted_label": {},
                                "legacy": {
                                  "can_dm": false,
                                  "can_media_tag": false,
                                  "advertiser_account_service_levels": [
                                    "analytics"
                                  ],
                                  "advertiser_account_type": "promotable_user",
                                  "analytics_type": "disabled",
                                  "created_at": "Fri Aug 24 23:01:27 +0000 2018",
                                  "description": "Founder of research firm - AlphaTarget. Previously,  Founder / Portfolio manager of money management firms in Hong Kong....",
                                  "entities": {
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "description": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [],
                                      "user_mentions": []
                                    }
                                  },
                                  "fast_followers_count": 0,
                                  "favourites_count": 124716,
                                  "followers_count": 391146,
                                  "friends_count": 141,
                                  "geo_enabled": false,
                                  "has_custom_timelines": false,
                                  "has_extended_profile": true,
                                  "id_str": "1033127171298975744",
                                  "is_translator": false,
                                  "location": "",
                                  "media_count": 4136,
                                  "name": "Puru Saxena",
                                  "normal_followers_count": 391146,
                                  "pinned_tweet_ids_str": [
                                    "1880602184213016974"
                                  ],
                                  "profile_background_color": "F5F8FA",
                                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1033127171298975744/1714548979",
                                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
                                  "profile_interstitial_type": "",
                                  "profile_link_color": "1DA1F2",
                                  "protected": false,
                                  "screen_name": "saxena_puru",
                                  "statuses_count": 51658,
                                  "translator_type_enum": "None",
                                  "url": "https://t.co/0zExpwGfwy",
                                  "verified": false,
                                  "withheld_in_countries": []
                                },
                                "business_account": {},
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "private_super_following": false,
                                "exclusive_tweet_following": false,
                                "professional": {
                                  "professional_type": "Business",
                                  "category": [],
                                  "quick_promote_eligibility": {
                                    "is_eligible": false
                                  }
                                },
                                "creator_subscriptions_count": 0
                              }
                            }
                          },
                          "edit_control": {
                            "__typename": "EditControlEdit",
                            "initial_tweet_id": "2019020645414437347",
                            "edit_control_initial": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019020645414437347",
                                "2019020645414437347"
                              ],
                              "editable_until_msecs": "1770210608000",
                              "edits_remaining": "4",
                              "is_edit_eligible": true
                            }
                          },
                          "previous_counts": {
                            "favorite_count": 29,
                            "reply_count": 6,
                            "quote_count": 1
                          },
                          "unmention_data": {},
                          "quick_promote_eligibility": {
                            "eligibility": "IneligibleUserUnauthorized"
                          },
                          "conversation_muted": false,
                          "is_translatable": false,
                          "note_tweet": {
                            "note_tweet_results": {
                              "id": "2019024044658434049",
                              "result": {
                                "__typename": "NoteTweet",
                                "entity_set": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [],
                                  "user_mentions": []
                                },
                                "id": "2019024044658434049",
                                "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 55,
                                      "to_index": 189,
                                      "richtext_types": [
                                        "Italic"
                                      ]
                                    }
                                  ]
                                },
                                "media": {
                                  "inline_media": []
                                }
                              }
                            },
                            "is_expandable": false
                          }
                        }
                      }
                    }
                  },
                  "tweetDisplayType": "Tweet"
                },
                "clientEventInfo": {
                  "component": "tweet",
                  "element": "tweet",
                  "details": {
                    "timelinesDetails": {
                      "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                    },
                    "conversationDetails": {
                      "conversationSection": "HighQuality"
                    }
                  }
                },
                "items": [
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  },
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  }
                ],
                "moduleDisplayType": "VerticalConversation",
                "metadata": {
                  "conversationMetadata": {
                    "allTweetIds": [
                      "2019096837278310578",
                      "2019096837278310578"
                    ],
                    "enableDeduplication": true
                  }
                },
                "value": "DAAKCgABHAelzGE__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RkoySUNGMkR3SEFWRjREa1dvTEljQlNaZks1Wmgy...",
                "cursorType": "Bottom"
              }
            },
            {
              "entryId": "tweet-2019056019121308063",
              "sortIndex": "2019765255122452480",
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "tweetResult": {
                    "result": {
                      "__typename": "Tweet",
                      "rest_id": "2019056019121308063",
                      "view_count_info": {
                        "count": "148363",
                        "state": "EnabledWithCount"
                      },
                      "legacy": {
                        "conversation_id_str": "2019056019121308063",
                        "created_at": "Wed Feb 04 14:30:41 +0000 2026",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {
                          "hashtags": [],
                          "symbols": [],
                          "urls": [],
                          "user_mentions": []
                        },
                        "favorite_count": 445,
                        "favorited": false,
                        "full_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
                        "is_quote_status": true,
                        "lang": "en",
                        "quote_count": 6,
                        "quoted_status_id_str": "2019024044738171136",
                        "reply_count": 281,
                        "retweet_count": 5,
                        "retweeted": false,
                        "user_id_str": "1577241403",
                        "bookmarked": false,
                        "bookmark_count": 129
                      },
                      "core": {
                        "user_result": {
                          "result": {
                            "__typename": "User",
                            "rest_id": "1577241403",
                            "has_nft_avatar": false,
                            "is_blue_verified": true,
                            "profile_image_shape": "Circle",
                            "affiliates_highlighted_label": {},
                            "legacy": {
                              "can_dm": false,
                              "can_media_tag": false,
                              "advertiser_account_service_levels": [
                                "smb"
                              ],
                              "advertiser_account_type": "promotable_user",
                              "analytics_type": "enabled",
                              "created_at": "Mon Jul 08 09:31:59 +0000 2013",
                              "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
                              "entities": {
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "readMAKE.com",
                                      "expanded_url": "http://readMAKE.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/IFRqZDK2Lw"
                                    }
                                  ]
                                },
                                "description": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    },
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    }
                                  ]
                                }
                              },
                              "fast_followers_count": 0,
                              "favourites_count": 162418,
                              "followers_count": 816099,
                              "friends_count": 2689,
                              "geo_enabled": false,
                              "has_custom_timelines": true,
                              "has_extended_profile": true,
                              "id_str": "1577241403",
                              "is_translator": false,
                              "location": "📕 My book $6K/m  👉",
                              "media_count": 18324,
                              "name": "@levelsio",
                              "normal_followers_count": 816099,
                              "pinned_tweet_ids_str": [
                                "1947295471082316145"
                              ],
                              "profile_background_color": "FFFFFF",
                              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
                              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
                              "profile_interstitial_type": "",
                              "profile_link_color": "FF473F",
                              "protected": false,
                              "screen_name": "levelsio",
                              "statuses_count": 168924,
                              "translator_type_enum": "None",
                              "url": "https://t.co/IFRqZDK2Lw",
                              "verified": false,
                              "withheld_in_countries": []
                            },
                            "business_account": {},
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "private_super_following": false,
                            "exclusive_tweet_following": false,
                            "professional": {
                              "professional_type": "Creator",
                              "category": [],
                              "quick_promote_eligibility": {
                                "is_eligible": false
                              }
                            },
                            "creator_subscriptions_count": 1
                          }
                        }
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "2019056019121308063"
                        ],
                        "editable_until_msecs": "1770219041000",
                        "edits_remaining": "5",
                        "is_edit_eligible": true
                      },
                      "unmention_data": {},
                      "quick_promote_eligibility": {
                        "eligibility": "IneligibleUserUnauthorized"
                      },
                      "conversation_muted": false,
                      "is_translatable": false,
                      "quoted_status_result": {
                        "result": {
                          "__typename": "Tweet",
                          "rest_id": "2019024044738171136",
                          "view_count_info": {
                            "count": "1023181",
                            "state": "EnabledWithCount"
                          },
                          "legacy": {
                            "conversation_id_str": "2019024044738171136",
                            "created_at": "Wed Feb 04 12:23:38 +0000 2026",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "hashtags": [],
                              "symbols": [],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/web/status/2…",
                                  "expanded_url": "https://twitter.com/i/web/status/2019024044738171136",
                                  "indices": [
                                    223,
                                    223
                                  ],
                                  "url": "https://t.co/xTAxrd3Uoh"
                                }
                              ],
                              "user_mentions": []
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "display_url": "pic.twitter.com/SgWZVIf4nT",
                                  "expanded_url": "https://twitter.com/saxena_puru/status/2019024044738171136/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "2019019581046833152",
                                  "indices": [
                                    247,
                                    247
                                  ],
                                  "media_key": "13_2019019581046833152",
                                  "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
                                  "original_info": {
                                    "width": 1320,
                                    "height": 734,
                                    "focus_rects": []
                                  },
                                  "sizes": {
                                    "large": {
                                      "w": 1320,
                                      "h": 734
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/SgWZVIf4nT",
                                  "video_info": {
                                    "aspect_ratio": [
                                      660,
                                      660
                                    ],
                                    "duration_millis": 159660,
                                    "variants": [
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      },
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      }
                                    ]
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  }
                                }
                              ]
                            },
                            "favorite_count": 5017,
                            "favorited": false,
                            "full_text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                            "is_quote_status": false,
                            "lang": "en",
                            "possibly_sensitive": false,
                            "possibly_sensitive_editable": true,
                            "quote_count": 241,
                            "reply_count": 302,
                            "retweet_count": 595,
                            "retweeted": false,
                            "user_id_str": "1033127171298975744",
                            "bookmarked": false,
                            "bookmark_count": 1979
                          },
                          "core": {
                            "user_result": {
                              "result": {
                                "__typename": "User",
                                "rest_id": "1033127171298975744",
                                "has_nft_avatar": false,
                                "is_blue_verified": true,
                                "profile_image_shape": "Circle",
                                "affiliates_highlighted_label": {},
                                "legacy": {
                                  "can_dm": false,
                                  "can_media_tag": false,
                                  "advertiser_account_service_levels": [
                                    "analytics"
                                  ],
                                  "advertiser_account_type": "promotable_user",
                                  "analytics_type": "disabled",
                                  "created_at": "Fri Aug 24 23:01:27 +0000 2018",
                                  "description": "Founder of research firm - AlphaTarget. Previously,  Founder / Portfolio manager of money management firms in Hong Kong....",
                                  "entities": {
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "description": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [],
                                      "user_mentions": []
                                    }
                                  },
                                  "fast_followers_count": 0,
                                  "favourites_count": 124716,
                                  "followers_count": 391146,
                                  "friends_count": 141,
                                  "geo_enabled": false,
                                  "has_custom_timelines": false,
                                  "has_extended_profile": true,
                                  "id_str": "1033127171298975744",
                                  "is_translator": false,
                                  "location": "",
                                  "media_count": 4136,
                                  "name": "Puru Saxena",
                                  "normal_followers_count": 391146,
                                  "pinned_tweet_ids_str": [
                                    "1880602184213016974"
                                  ],
                                  "profile_background_color": "F5F8FA",
                                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1033127171298975744/1714548979",
                                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
                                  "profile_interstitial_type": "",
                                  "profile_link_color": "1DA1F2",
                                  "protected": false,
                                  "screen_name": "saxena_puru",
                                  "statuses_count": 51658,
                                  "translator_type_enum": "None",
                                  "url": "https://t.co/0zExpwGfwy",
                                  "verified": false,
                                  "withheld_in_countries": []
                                },
                                "business_account": {},
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "private_super_following": false,
                                "exclusive_tweet_following": false,
                                "professional": {
                                  "professional_type": "Business",
                                  "category": [],
                                  "quick_promote_eligibility": {
                                    "is_eligible": false
                                  }
                                },
                                "creator_subscriptions_count": 0
                              }
                            }
                          },
                          "edit_control": {
                            "__typename": "EditControlEdit",
                            "initial_tweet_id": "2019020645414437347",
                            "edit_control_initial": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019020645414437347",
                                "2019020645414437347"
                              ],
                              "editable_until_msecs": "1770210608000",
                              "edits_remaining": "4",
                              "is_edit_eligible": true
                            }
                          },
                          "previous_counts": {
                            "favorite_count": 29,
                            "reply_count": 6,
                            "quote_count": 1
                          },
                          "unmention_data": {},
                          "quick_promote_eligibility": {
                            "eligibility": "IneligibleUserUnauthorized"
                          },
                          "conversation_muted": false,
                          "is_translatable": false,
                          "note_tweet": {
                            "note_tweet_results": {
                              "id": "2019024044658434049",
                              "result": {
                                "__typename": "NoteTweet",
                                "entity_set": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [],
                                  "user_mentions": []
                                },
                                "id": "2019024044658434049",
                                "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 55,
                                      "to_index": 189,
                                      "richtext_types": [
                                        "Italic"
                                      ]
                                    }
                                  ]
                                },
                                "media": {
                                  "inline_media": []
                                }
                              }
                            },
                            "is_expandable": false
                          }
                        }
                      }
                    }
                  },
                  "tweetDisplayType": "Tweet"
                },
                "clientEventInfo": {
                  "component": "tweet",
                  "element": "tweet",
                  "details": {
                    "timelinesDetails": {
                      "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                    },
                    "conversationDetails": {
                      "conversationSection": "HighQuality"
                    }
                  }
                },
                "items": [
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  },
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  }
                ],
                "moduleDisplayType": "VerticalConversation",
                "metadata": {
                  "conversationMetadata": {
                    "allTweetIds": [
                      "2019096837278310578",
                      "2019096837278310578"
                    ],
                    "enableDeduplication": true
                  }
                },
                "value": "DAAKCgABHAelzGE__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RkoySUNGMkR3SEFWRjREa1dvTEljQlNaZks1Wmgy...",
                "cursorType": "Bottom"
              }
            }
          ],
          "direction": "Top"
        },
        {
          "__typename": "TimelineClearCache",
          "entries": [
            {
              "entryId": "tweet-2019056019121308063",
              "sortIndex": "2019765255122452480",
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "tweetResult": {
                    "result": {
                      "__typename": "Tweet",
                      "rest_id": "2019056019121308063",
                      "view_count_info": {
                        "count": "148363",
                        "state": "EnabledWithCount"
                      },
                      "legacy": {
                        "conversation_id_str": "2019056019121308063",
                        "created_at": "Wed Feb 04 14:30:41 +0000 2026",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {
                          "hashtags": [],
                          "symbols": [],
                          "urls": [],
                          "user_mentions": []
                        },
                        "favorite_count": 445,
                        "favorited": false,
                        "full_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
                        "is_quote_status": true,
                        "lang": "en",
                        "quote_count": 6,
                        "quoted_status_id_str": "2019024044738171136",
                        "reply_count": 281,
                        "retweet_count": 5,
                        "retweeted": false,
                        "user_id_str": "1577241403",
                        "bookmarked": false,
                        "bookmark_count": 129
                      },
                      "core": {
                        "user_result": {
                          "result": {
                            "__typename": "User",
                            "rest_id": "1577241403",
                            "has_nft_avatar": false,
                            "is_blue_verified": true,
                            "profile_image_shape": "Circle",
                            "affiliates_highlighted_label": {},
                            "legacy": {
                              "can_dm": false,
                              "can_media_tag": false,
                              "advertiser_account_service_levels": [
                                "smb"
                              ],
                              "advertiser_account_type": "promotable_user",
                              "analytics_type": "enabled",
                              "created_at": "Mon Jul 08 09:31:59 +0000 2013",
                              "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
                              "entities": {
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "readMAKE.com",
                                      "expanded_url": "http://readMAKE.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/IFRqZDK2Lw"
                                    }
                                  ]
                                },
                                "description": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    },
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    }
                                  ]
                                }
                              },
                              "fast_followers_count": 0,
                              "favourites_count": 162418,
                              "followers_count": 816099,
                              "friends_count": 2689,
                              "geo_enabled": false,
                              "has_custom_timelines": true,
                              "has_extended_profile": true,
                              "id_str": "1577241403",
                              "is_translator": false,
                              "location": "📕 My book $6K/m  👉",
                              "media_count": 18324,
                              "name": "@levelsio",
                              "normal_followers_count": 816099,
                              "pinned_tweet_ids_str": [
                                "1947295471082316145"
                              ],
                              "profile_background_color": "FFFFFF",
                              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
                              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
                              "profile_interstitial_type": "",
                              "profile_link_color": "FF473F",
                              "protected": false,
                              "screen_name": "levelsio",
                              "statuses_count": 168924,
                              "translator_type_enum": "None",
                              "url": "https://t.co/IFRqZDK2Lw",
                              "verified": false,
                              "withheld_in_countries": []
                            },
                            "business_account": {},
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "private_super_following": false,
                            "exclusive_tweet_following": false,
                            "professional": {
                              "professional_type": "Creator",
                              "category": [],
                              "quick_promote_eligibility": {
                                "is_eligible": false
                              }
                            },
                            "creator_subscriptions_count": 1
                          }
                        }
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "2019056019121308063"
                        ],
                        "editable_until_msecs": "1770219041000",
                        "edits_remaining": "5",
                        "is_edit_eligible": true
                      },
                      "unmention_data": {},
                      "quick_promote_eligibility": {
                        "eligibility": "IneligibleUserUnauthorized"
                      },
                      "conversation_muted": false,
                      "is_translatable": false,
                      "quoted_status_result": {
                        "result": {
                          "__typename": "Tweet",
                          "rest_id": "2019024044738171136",
                          "view_count_info": {
                            "count": "1023181",
                            "state": "EnabledWithCount"
                          },
                          "legacy": {
                            "conversation_id_str": "2019024044738171136",
                            "created_at": "Wed Feb 04 12:23:38 +0000 2026",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "hashtags": [],
                              "symbols": [],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/web/status/2…",
                                  "expanded_url": "https://twitter.com/i/web/status/2019024044738171136",
                                  "indices": [
                                    223,
                                    223
                                  ],
                                  "url": "https://t.co/xTAxrd3Uoh"
                                }
                              ],
                              "user_mentions": []
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "display_url": "pic.twitter.com/SgWZVIf4nT",
                                  "expanded_url": "https://twitter.com/saxena_puru/status/2019024044738171136/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "2019019581046833152",
                                  "indices": [
                                    247,
                                    247
                                  ],
                                  "media_key": "13_2019019581046833152",
                                  "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
                                  "original_info": {
                                    "width": 1320,
                                    "height": 734,
                                    "focus_rects": []
                                  },
                                  "sizes": {
                                    "large": {
                                      "w": 1320,
                                      "h": 734
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/SgWZVIf4nT",
                                  "video_info": {
                                    "aspect_ratio": [
                                      660,
                                      660
                                    ],
                                    "duration_millis": 159660,
                                    "variants": [
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      },
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      }
                                    ]
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  }
                                }
                              ]
                            },
                            "favorite_count": 5017,
                            "favorited": false,
                            "full_text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                            "is_quote_status": false,
                            "lang": "en",
                            "possibly_sensitive": false,
                            "possibly_sensitive_editable": true,
                            "quote_count": 241,
                            "reply_count": 302,
                            "retweet_count": 595,
                            "retweeted": false,
                            "user_id_str": "1033127171298975744",
                            "bookmarked": false,
                            "bookmark_count": 1979
                          },
                          "core": {
                            "user_result": {
                              "result": {
                                "__typename": "User",
                                "rest_id": "1033127171298975744",
                                "has_nft_avatar": false,
                                "is_blue_verified": true,
                                "profile_image_shape": "Circle",
                                "affiliates_highlighted_label": {},
                                "legacy": {
                                  "can_dm": false,
                                  "can_media_tag": false,
                                  "advertiser_account_service_levels": [
                                    "analytics"
                                  ],
                                  "advertiser_account_type": "promotable_user",
                                  "analytics_type": "disabled",
                                  "created_at": "Fri Aug 24 23:01:27 +0000 2018",
                                  "description": "Founder of research firm - AlphaTarget. Previously,  Founder / Portfolio manager of money management firms in Hong Kong....",
                                  "entities": {
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "description": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [],
                                      "user_mentions": []
                                    }
                                  },
                                  "fast_followers_count": 0,
                                  "favourites_count": 124716,
                                  "followers_count": 391146,
                                  "friends_count": 141,
                                  "geo_enabled": false,
                                  "has_custom_timelines": false,
                                  "has_extended_profile": true,
                                  "id_str": "1033127171298975744",
                                  "is_translator": false,
                                  "location": "",
                                  "media_count": 4136,
                                  "name": "Puru Saxena",
                                  "normal_followers_count": 391146,
                                  "pinned_tweet_ids_str": [
                                    "1880602184213016974"
                                  ],
                                  "profile_background_color": "F5F8FA",
                                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1033127171298975744/1714548979",
                                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
                                  "profile_interstitial_type": "",
                                  "profile_link_color": "1DA1F2",
                                  "protected": false,
                                  "screen_name": "saxena_puru",
                                  "statuses_count": 51658,
                                  "translator_type_enum": "None",
                                  "url": "https://t.co/0zExpwGfwy",
                                  "verified": false,
                                  "withheld_in_countries": []
                                },
                                "business_account": {},
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "private_super_following": false,
                                "exclusive_tweet_following": false,
                                "professional": {
                                  "professional_type": "Business",
                                  "category": [],
                                  "quick_promote_eligibility": {
                                    "is_eligible": false
                                  }
                                },
                                "creator_subscriptions_count": 0
                              }
                            }
                          },
                          "edit_control": {
                            "__typename": "EditControlEdit",
                            "initial_tweet_id": "2019020645414437347",
                            "edit_control_initial": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019020645414437347",
                                "2019020645414437347"
                              ],
                              "editable_until_msecs": "1770210608000",
                              "edits_remaining": "4",
                              "is_edit_eligible": true
                            }
                          },
                          "previous_counts": {
                            "favorite_count": 29,
                            "reply_count": 6,
                            "quote_count": 1
                          },
                          "unmention_data": {},
                          "quick_promote_eligibility": {
                            "eligibility": "IneligibleUserUnauthorized"
                          },
                          "conversation_muted": false,
                          "is_translatable": false,
                          "note_tweet": {
                            "note_tweet_results": {
                              "id": "2019024044658434049",
                              "result": {
                                "__typename": "NoteTweet",
                                "entity_set": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [],
                                  "user_mentions": []
                                },
                                "id": "2019024044658434049",
                                "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 55,
                                      "to_index": 189,
                                      "richtext_types": [
                                        "Italic"
                                      ]
                                    }
                                  ]
                                },
                                "media": {
                                  "inline_media": []
                                }
                              }
                            },
                            "is_expandable": false
                          }
                        }
                      }
                    }
                  },
                  "tweetDisplayType": "Tweet"
                },
                "clientEventInfo": {
                  "component": "tweet",
                  "element": "tweet",
                  "details": {
                    "timelinesDetails": {
                      "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                    },
                    "conversationDetails": {
                      "conversationSection": "HighQuality"
                    }
                  }
                },
                "items": [
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  },
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  }
                ],
                "moduleDisplayType": "VerticalConversation",
                "metadata": {
                  "conversationMetadata": {
                    "allTweetIds": [
                      "2019096837278310578",
                      "2019096837278310578"
                    ],
                    "enableDeduplication": true
                  }
                },
                "value": "DAAKCgABHAelzGE__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RkoySUNGMkR3SEFWRjREa1dvTEljQlNaZks1Wmgy...",
                "cursorType": "Bottom"
              }
            },
            {
              "entryId": "tweet-2019056019121308063",
              "sortIndex": "2019765255122452480",
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "tweetResult": {
                    "result": {
                      "__typename": "Tweet",
                      "rest_id": "2019056019121308063",
                      "view_count_info": {
                        "count": "148363",
                        "state": "EnabledWithCount"
                      },
                      "legacy": {
                        "conversation_id_str": "2019056019121308063",
                        "created_at": "Wed Feb 04 14:30:41 +0000 2026",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {
                          "hashtags": [],
                          "symbols": [],
                          "urls": [],
                          "user_mentions": []
                        },
                        "favorite_count": 445,
                        "favorited": false,
                        "full_text": "I don't get it\n\nOf course an AI would reinvent the tool if it can make it better and faster?\n\nAm I retarded?",
                        "is_quote_status": true,
                        "lang": "en",
                        "quote_count": 6,
                        "quoted_status_id_str": "2019024044738171136",
                        "reply_count": 281,
                        "retweet_count": 5,
                        "retweeted": false,
                        "user_id_str": "1577241403",
                        "bookmarked": false,
                        "bookmark_count": 129
                      },
                      "core": {
                        "user_result": {
                          "result": {
                            "__typename": "User",
                            "rest_id": "1577241403",
                            "has_nft_avatar": false,
                            "is_blue_verified": true,
                            "profile_image_shape": "Circle",
                            "affiliates_highlighted_label": {},
                            "legacy": {
                              "can_dm": false,
                              "can_media_tag": false,
                              "advertiser_account_service_levels": [
                                "smb"
                              ],
                              "advertiser_account_type": "promotable_user",
                              "analytics_type": "enabled",
                              "created_at": "Mon Jul 08 09:31:59 +0000 2013",
                              "description": "🇪🇺https://t.co/NdorAWqJC3 @euacc \n📸https://t.co/lAyoqmSBRX $110k/m \n🏡https://t.co/1oqUgfD6CZ $36K/m \n🛰https://t.co/...",
                              "entities": {
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "readMAKE.com",
                                      "expanded_url": "http://readMAKE.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/IFRqZDK2Lw"
                                    }
                                  ]
                                },
                                "description": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    },
                                    {
                                      "display_url": "euacc.com",
                                      "expanded_url": "http://euacc.com",
                                      "indices": [
                                        2,
                                        2
                                      ],
                                      "url": "https://t.co/NdorAWqJC3"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        26,
                                        26
                                      ],
                                      "name": "",
                                      "screen_name": "euacc"
                                    }
                                  ]
                                }
                              },
                              "fast_followers_count": 0,
                              "favourites_count": 162418,
                              "followers_count": 816099,
                              "friends_count": 2689,
                              "geo_enabled": false,
                              "has_custom_timelines": true,
                              "has_extended_profile": true,
                              "id_str": "1577241403",
                              "is_translator": false,
                              "location": "📕 My book $6K/m  👉",
                              "media_count": 18324,
                              "name": "@levelsio",
                              "normal_followers_count": 816099,
                              "pinned_tweet_ids_str": [
                                "1947295471082316145"
                              ],
                              "profile_background_color": "FFFFFF",
                              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1577241403/1665964220",
                              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996831016720486400/vycHz0uG_normal.jpg",
                              "profile_interstitial_type": "",
                              "profile_link_color": "FF473F",
                              "protected": false,
                              "screen_name": "levelsio",
                              "statuses_count": 168924,
                              "translator_type_enum": "None",
                              "url": "https://t.co/IFRqZDK2Lw",
                              "verified": false,
                              "withheld_in_countries": []
                            },
                            "business_account": {},
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "private_super_following": false,
                            "exclusive_tweet_following": false,
                            "professional": {
                              "professional_type": "Creator",
                              "category": [],
                              "quick_promote_eligibility": {
                                "is_eligible": false
                              }
                            },
                            "creator_subscriptions_count": 1
                          }
                        }
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "2019056019121308063"
                        ],
                        "editable_until_msecs": "1770219041000",
                        "edits_remaining": "5",
                        "is_edit_eligible": true
                      },
                      "unmention_data": {},
                      "quick_promote_eligibility": {
                        "eligibility": "IneligibleUserUnauthorized"
                      },
                      "conversation_muted": false,
                      "is_translatable": false,
                      "quoted_status_result": {
                        "result": {
                          "__typename": "Tweet",
                          "rest_id": "2019024044738171136",
                          "view_count_info": {
                            "count": "1023181",
                            "state": "EnabledWithCount"
                          },
                          "legacy": {
                            "conversation_id_str": "2019024044738171136",
                            "created_at": "Wed Feb 04 12:23:38 +0000 2026",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "hashtags": [],
                              "symbols": [],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/web/status/2…",
                                  "expanded_url": "https://twitter.com/i/web/status/2019024044738171136",
                                  "indices": [
                                    223,
                                    223
                                  ],
                                  "url": "https://t.co/xTAxrd3Uoh"
                                }
                              ],
                              "user_mentions": []
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "display_url": "pic.twitter.com/SgWZVIf4nT",
                                  "expanded_url": "https://twitter.com/saxena_puru/status/2019024044738171136/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "2019019581046833152",
                                  "indices": [
                                    247,
                                    247
                                  ],
                                  "media_key": "13_2019019581046833152",
                                  "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019019581046833152/img/agAEv_W-_a-62bDr.jpg",
                                  "original_info": {
                                    "width": 1320,
                                    "height": 734,
                                    "focus_rects": []
                                  },
                                  "sizes": {
                                    "large": {
                                      "w": 1320,
                                      "h": 734
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/SgWZVIf4nT",
                                  "video_info": {
                                    "aspect_ratio": [
                                      660,
                                      660
                                    ],
                                    "duration_millis": 159660,
                                    "variants": [
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      },
                                      {
                                        "url": "https://video.twimg.com/amplify_video/2019019581046833152/pl/-L9L-WPVtmMf1lSu.m3u8?tag=21&v=568",
                                        "content_type": "application/x-mpegURL",
                                        "bitrate": 256000
                                      }
                                    ]
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  }
                                }
                              ]
                            },
                            "favorite_count": 5017,
                            "favorited": false,
                            "full_text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                            "is_quote_status": false,
                            "lang": "en",
                            "possibly_sensitive": false,
                            "possibly_sensitive_editable": true,
                            "quote_count": 241,
                            "reply_count": 302,
                            "retweet_count": 595,
                            "retweeted": false,
                            "user_id_str": "1033127171298975744",
                            "bookmarked": false,
                            "bookmark_count": 1979
                          },
                          "core": {
                            "user_result": {
                              "result": {
                                "__typename": "User",
                                "rest_id": "1033127171298975744",
                                "has_nft_avatar": false,
                                "is_blue_verified": true,
                                "profile_image_shape": "Circle",
                                "affiliates_highlighted_label": {},
                                "legacy": {
                                  "can_dm": false,
                                  "can_media_tag": false,
                                  "advertiser_account_service_levels": [
                                    "analytics"
                                  ],
                                  "advertiser_account_type": "promotable_user",
                                  "analytics_type": "disabled",
                                  "created_at": "Fri Aug 24 23:01:27 +0000 2018",
                                  "description": "Founder of research firm - AlphaTarget. Previously,  Founder / Portfolio manager of money management firms in Hong Kong....",
                                  "entities": {
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "description": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [],
                                      "user_mentions": []
                                    }
                                  },
                                  "fast_followers_count": 0,
                                  "favourites_count": 124716,
                                  "followers_count": 391146,
                                  "friends_count": 141,
                                  "geo_enabled": false,
                                  "has_custom_timelines": false,
                                  "has_extended_profile": true,
                                  "id_str": "1033127171298975744",
                                  "is_translator": false,
                                  "location": "",
                                  "media_count": 4136,
                                  "name": "Puru Saxena",
                                  "normal_followers_count": 391146,
                                  "pinned_tweet_ids_str": [
                                    "1880602184213016974"
                                  ],
                                  "profile_background_color": "F5F8FA",
                                  "profile_banner_url": "https://pbs.twimg.com/profile_banners/1033127171298975744/1714548979",
                                  "profile_image_url_https": "https://pbs.twimg.com/profile_images/1972357739813691392/EoB2H421_normal.jpg",
                                  "profile_interstitial_type": "",
                                  "profile_link_color": "1DA1F2",
                                  "protected": false,
                                  "screen_name": "saxena_puru",
                                  "statuses_count": 51658,
                                  "translator_type_enum": "None",
                                  "url": "https://t.co/0zExpwGfwy",
                                  "verified": false,
                                  "withheld_in_countries": []
                                },
                                "business_account": {},
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "private_super_following": false,
                                "exclusive_tweet_following": false,
                                "professional": {
                                  "professional_type": "Business",
                                  "category": [],
                                  "quick_promote_eligibility": {
                                    "is_eligible": false
                                  }
                                },
                                "creator_subscriptions_count": 0
                              }
                            }
                          },
                          "edit_control": {
                            "__typename": "EditControlEdit",
                            "initial_tweet_id": "2019020645414437347",
                            "edit_control_initial": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019020645414437347",
                                "2019020645414437347"
                              ],
                              "editable_until_msecs": "1770210608000",
                              "edits_remaining": "4",
                              "is_edit_eligible": true
                            }
                          },
                          "previous_counts": {
                            "favorite_count": 29,
                            "reply_count": 6,
                            "quote_count": 1
                          },
                          "unmention_data": {},
                          "quick_promote_eligibility": {
                            "eligibility": "IneligibleUserUnauthorized"
                          },
                          "conversation_muted": false,
                          "is_translatable": false,
                          "note_tweet": {
                            "note_tweet_results": {
                              "id": "2019024044658434049",
                              "result": {
                                "__typename": "NoteTweet",
                                "entity_set": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [],
                                  "user_mentions": []
                                },
                                "id": "2019024044658434049",
                                "text": "Jensen Huang: Market is wrong about software stocks \n\n\"The notion that AI is somehow going to replace software companies...",
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 55,
                                      "to_index": 189,
                                      "richtext_types": [
                                        "Italic"
                                      ]
                                    }
                                  ]
                                },
                                "media": {
                                  "inline_media": []
                                }
                              }
                            },
                            "is_expandable": false
                          }
                        }
                      }
                    }
                  },
                  "tweetDisplayType": "Tweet"
                },
                "clientEventInfo": {
                  "component": "tweet",
                  "element": "tweet",
                  "details": {
                    "timelinesDetails": {
                      "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                    },
                    "conversationDetails": {
                      "conversationSection": "HighQuality"
                    }
                  }
                },
                "items": [
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  },
                  {
                    "entryId": "conversationthread-2019096837278310578-tweet-2019096837278310578",
                    "item": {
                      "content": {
                        "__typename": "TimelineTweet",
                        "tweetResult": {
                          "result": {
                            "__typename": "Tweet",
                            "rest_id": "2019096837278310578",
                            "view_count_info": {
                              "count": "1302",
                              "state": "EnabledWithCount"
                            },
                            "legacy": {
                              "conversation_id_str": "2019056019121308063",
                              "created_at": "Wed Feb 04 17:12:53 +0000 2026",
                              "display_text_range": [
                                10,
                                10
                              ],
                              "entities": {
                                "hashtags": [],
                                "symbols": [],
                                "urls": [
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  },
                                  {
                                    "display_url": "twitter.com/i/web/status/2…",
                                    "expanded_url": "https://twitter.com/i/web/status/2019096837278310578",
                                    "indices": [
                                      291,
                                      291
                                    ],
                                    "url": "https://t.co/YWGq5O1V9d"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  },
                                  {
                                    "id_str": "1577241403",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "@levelsio",
                                    "screen_name": "levelsio"
                                  }
                                ]
                              },
                              "favorite_count": 4,
                              "favorited": false,
                              "full_text": "@levelsio Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software en...",
                              "in_reply_to_user_id_str": "1577241403",
                              "in_reply_to_status_id_str": "2019056019121308063",
                              "in_reply_to_screen_name": "levelsio",
                              "is_quote_status": false,
                              "lang": "en",
                              "possibly_sensitive": false,
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 5,
                              "retweet_count": 0,
                              "retweeted": false,
                              "user_id_str": "1604942677056823304",
                              "bookmarked": false,
                              "bookmark_count": 3,
                              "extended_entities": {
                                "media": [
                                  {
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "display_url": "pic.twitter.com/AvoZSKX13Q",
                                    "expanded_url": "https://twitter.com/thosiawa/status/2019071790987743275/video/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "id_str": "2019071686205755392",
                                    "indices": [
                                      287,
                                      287
                                    ],
                                    "media_key": "13_2019071686205755392",
                                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/2019071686205755392/img/5w5uqbn1qdBGbjh0.jpg",
                                    "original_info": {
                                      "width": 1280,
                                      "height": 720,
                                      "focus_rects": []
                                    },
                                    "sizes": {
                                      "large": {
                                        "w": 1280,
                                        "h": 720
                                      }
                                    },
                                    "type": "video",
                                    "url": "https://t.co/AvoZSKX13Q",
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 99968,
                                      "variants": [
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "url": "...",
                                          "content_type": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              }
                            },
                            "core": {
                              "user_result": {
                                "result": {
                                  "__typename": "User",
                                  "rest_id": "1604942677056823304",
                                  "has_nft_avatar": false,
                                  "is_blue_verified": true,
                                  "profile_image_shape": "Circle",
                                  "affiliates_highlighted_label": {},
                                  "legacy": {
                                    "can_dm": true,
                                    "can_media_tag": true,
                                    "advertiser_account_service_levels": [
                                      "analytics",
                                      "analytics"
                                    ],
                                    "advertiser_account_type": "promotable_user",
                                    "analytics_type": "disabled",
                                    "created_at": "Mon Dec 19 20:52:28 +0000 2022",
                                    "description": "I build large, complex investment products for a living. \nAnd AI-Powered products for fun. \n\n🚀Aiming to one launch per ...",
                                    "entities": {
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "description": {
                                        "hashtags": [],
                                        "symbols": [],
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "fast_followers_count": 0,
                                    "favourites_count": 85,
                                    "followers_count": 118,
                                    "friends_count": 376,
                                    "geo_enabled": false,
                                    "has_custom_timelines": true,
                                    "has_extended_profile": true,
                                    "id_str": "1604942677056823304",
                                    "is_translator": false,
                                    "location": "👉",
                                    "media_count": 8,
                                    "name": "Andrea",
                                    "normal_followers_count": 118,
                                    "pinned_tweet_ids_str": [
                                      "2019278734100988194",
                                      "2019278734100988194"
                                    ],
                                    "profile_background_color": "F5F8FA",
                                    "profile_banner_url": "https://pbs.twimg.com/profile_banners/1604942677056823304/1745177197",
                                    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1719480252634664960/ua-UZ9uw_normal.jpg",
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1DA1F2",
                                    "protected": false,
                                    "screen_name": "AndreaDiPrata",
                                    "statuses_count": 392,
                                    "translator_type_enum": "None",
                                    "url": "https://t.co/n7aETpgQsh",
                                    "verified": false,
                                    "withheld_in_countries": [],
                                    "profile_location_place": {
                                      "country": "",
                                      "country_code": "",
                                      "full_name": "San Francisco, CA",
                                      "id": "5a110d312052166f",
                                      "name": "San Francisco, CA",
                                      "place_type": "unknown"
                                    }
                                  },
                                  "business_account": {},
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "private_super_following": false,
                                  "exclusive_tweet_following": false,
                                  "professional": {
                                    "professional_type": "Creator",
                                    "category": [
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      },
                                      {
                                        "id": 958,
                                        "name": "Entrepreneur"
                                      }
                                    ],
                                    "quick_promote_eligibility": {
                                      "is_eligible": false
                                    }
                                  },
                                  "creator_subscriptions_count": 0
                                }
                              }
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "2019096837278310578",
                                "2019096837278310578"
                              ],
                              "editable_until_msecs": "1770228773000",
                              "edits_remaining": "5",
                              "is_edit_eligible": false
                            },
                            "unmention_data": {},
                            "quick_promote_eligibility": {
                              "eligibility": "IneligibleUserUnauthorized"
                            },
                            "conversation_muted": false,
                            "is_translatable": false,
                            "note_tweet": {
                              "note_tweet_results": {
                                "id": "2019096837131579394",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "entity_set": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [],
                                    "user_mentions": []
                                  },
                                  "id": "2019096837131579394",
                                  "text": "Head of product in a large fintech here 👋 \n\nMy products are digital only and I have some sizeable software engineering ...",
                                  "richtext": {
                                    "richtext_tags": []
                                  },
                                  "media": {
                                    "inline_media": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "tweet": {
                              "rest_id": "2001686117989724468",
                              "view_count_info": {
                                "count": "3513334",
                                "state": "EnabledWithCount"
                              },
                              "legacy": {
                                "conversation_id_str": "2001686117989724468",
                                "created_at": "Thu Dec 18 16:08:54 +0000 2025",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "hashtags": [],
                                  "symbols": [],
                                  "urls": [
                                    {
                                      "display_url": "twitter.com/i/web/status/2…",
                                      "expanded_url": "https://twitter.com/i/web/status/2010702792168468512",
                                      "indices": [
                                        275,
                                        275
                                      ],
                                      "url": "https://t.co/uFh8ccChYX"
                                    }
                                  ],
                                  "user_mentions": []
                                },
                                "favorite_count": 121,
                                "favorited": false,
                                "full_text": "Deposit Now! Experience the best thrill in 2026 - have you tried YEET yet?",
                                "is_quote_status": false,
                                "lang": "en",
                                "quote_count": 1,
                                "reply_count": 5,
                                "retweet_count": 9,
                                "retweeted": false,
                                "user_id_str": "1993002401629192193",
                                "bookmarked": false,
                                "bookmark_count": 43,
                                "possibly_sensitive": false,
                                "possibly_sensitive_editable": true
                              },
                              "tweet_card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Instant Wins, Ins...",
                                        "scribe_key": "card_url",
                                        "image_value": {
                                          "height": "...",
                                          "width": "...",
                                          "url": "..."
                                        }
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://2001686116542656512",
                                  "user_refs_results": []
                                }
                              },
                              "core": {
                                "user_result": {
                                  "result": {
                                    "__typename": "User",
                                    "rest_id": "1993002401629192193",
                                    "has_nft_avatar": false,
                                    "is_blue_verified": true,
                                    "profile_image_shape": "Circle",
                                    "affiliates_highlighted_label": {},
                                    "legacy": {
                                      "can_dm": false,
                                      "can_media_tag": true,
                                      "advertiser_account_service_levels": [
                                        "smb",
                                        "smb"
                                      ],
                                      "advertiser_account_type": "promotable_user",
                                      "analytics_type": "disabled",
                                      "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                      "description": "Built for Big Moments | YEET it | 18+",
                                      "entities": {
                                        "url": {
                                          "urls": "..."
                                        },
                                        "description": {
                                          "hashtags": "...",
                                          "symbols": "...",
                                          "urls": "...",
                                          "user_mentions": "..."
                                        }
                                      },
                                      "fast_followers_count": 0,
                                      "favourites_count": 38,
                                      "followers_count": 52,
                                      "friends_count": 2,
                                      "geo_enabled": false,
                                      "has_custom_timelines": false,
                                      "has_extended_profile": true,
                                      "id_str": "1993002401629192193",
                                      "is_translator": false,
                                      "location": "",
                                      "media_count": 5,
                                      "name": "YEET Gaming",
                                      "normal_followers_count": 52,
                                      "pinned_tweet_ids_str": [],
                                      "profile_background_color": "F5F8FA",
                                      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2",
                                      "protected": false,
                                      "screen_name": "yeetedgaming",
                                      "statuses_count": 303,
                                      "translator_type_enum": "None",
                                      "url": "https://t.co/HQi3fqB6nc",
                                      "verified": false,
                                      "withheld_in_countries": []
                                    },
                                    "business_account": {},
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "private_super_following": false,
                                    "exclusive_tweet_following": false,
                                    "creator_subscriptions_count": 0,
                                    "professional": {
                                      "professional_type": "Business",
                                      "category": [
                                        {
                                          "id": "...",
                                          "name": "..."
                                        }
                                      ],
                                      "quick_promote_eligibility": {
                                        "is_eligible": false
                                      }
                                    }
                                  }
                                }
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "2001686117989724468",
                                  "2001686117989724468"
                                ],
                                "editable_until_msecs": "1766077734000",
                                "edits_remaining": "5",
                                "is_edit_eligible": false
                              },
                              "unmention_data": {},
                              "quick_promote_eligibility": {
                                "eligibility": "IneligibleUserUnauthorized"
                              },
                              "conversation_muted": false,
                              "is_translatable": false,
                              "note_tweet": {
                                "note_tweet_results": {
                                  "id": "2010702791996522497",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "entity_set": {
                                      "hashtags": [],
                                      "symbols": [],
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "user_mentions": []
                                    },
                                    "id": "2010702791996522497",
                                    "text": "Ainutlaatuinen arkkitehdin suunnittelema studio kattojen yllä Kruununhaassa. Koti sijaitsee arvostetulla Meritullinkadul...",
                                    "richtext": {
                                      "richtext_tags": []
                                    },
                                    "media": {
                                      "inline_media": []
                                    }
                                  }
                                },
                                "is_expandable": true
                              }
                            },
                            "limited_action_results": {
                              "limited_actions": [
                                {
                                  "gqlLimitedActionType": "Reply"
                                },
                                {
                                  "gqlLimitedActionType": "Reply"
                                }
                              ]
                            }
                          }
                        },
                        "tweetDisplayType": "Tweet",
                        "tweetPromotedMetadata": {
                          "advertiserResult": {
                            "result": {
                              "__typename": "User",
                              "rest_id": "1993002401629192193",
                              "has_nft_avatar": false,
                              "is_blue_verified": true,
                              "profile_image_shape": "Circle",
                              "affiliates_highlighted_label": {},
                              "legacy": {
                                "can_dm": false,
                                "can_media_tag": true,
                                "advertiser_account_service_levels": [
                                  "smb",
                                  "smb"
                                ],
                                "advertiser_account_type": "promotable_user",
                                "analytics_type": "disabled",
                                "created_at": "Mon Nov 24 17:03:19 +0000 2025",
                                "description": "Built for Big Moments | YEET it | 18+",
                                "entities": {
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      },
                                      {
                                        "display_url": "tinyurl.com/yeet-casino",
                                        "expanded_url": "https://tinyurl.com/yeet-casino",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/HQi3fqB6nc"
                                      }
                                    ]
                                  },
                                  "description": {
                                    "hashtags": [],
                                    "symbols": [],
                                    "urls": [
                                      {
                                        "display_url": "bit.ly/3i86HOg",
                                        "expanded_url": "https://bit.ly/3i86HOg",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/enW502xveN"
                                      }
                                    ],
                                    "user_mentions": []
                                  }
                                },
                                "fast_followers_count": 0,
                                "favourites_count": 38,
                                "followers_count": 52,
                                "friends_count": 2,
                                "geo_enabled": false,
                                "has_custom_timelines": false,
                                "has_extended_profile": true,
                                "id_str": "1993002401629192193",
                                "is_translator": false,
                                "location": "",
                                "media_count": 5,
                                "name": "YEET Gaming",
                                "normal_followers_count": 52,
                                "pinned_tweet_ids_str": [],
                                "profile_background_color": "F5F8FA",
                                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1993002401629192193/1764789741",
                                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1996298778651901952/QFodSp2u_normal.jpg",
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2",
                                "protected": false,
                                "screen_name": "yeetedgaming",
                                "statuses_count": 303,
                                "translator_type_enum": "None",
                                "url": "https://t.co/HQi3fqB6nc",
                                "verified": false,
                                "withheld_in_countries": []
                              },
                              "business_account": {},
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "private_super_following": false,
                              "exclusive_tweet_following": false,
                              "creator_subscriptions_count": 0,
                              "professional": {
                                "professional_type": "Business",
                                "category": [
                                  {
                                    "id": 697,
                                    "name": "Real Estate"
                                  }
                                ],
                                "quick_promote_eligibility": {
                                  "is_eligible": false
                                }
                              }
                            }
                          },
                          "impressionId": "1992a6a7f7acbd2d",
                          "disclosureType": "NoDisclosure",
                          "experimentValues": [
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            },
                            {
                              "key": "ads_experiment_ids",
                              "value": "415163"
                            }
                          ],
                          "adMetadataContainer": {},
                          "clickTrackingInfo": {
                            "urlParams": [
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              },
                              {
                                "key": "twclid",
                                "value": "2-wzge2vidc1t9ldk35wql2xp4"
                              }
                            ]
                          }
                        }
                      },
                      "clientEventInfo": {
                        "component": "tweet",
                        "element": "tweet",
                        "details": {
                          "timelinesDetails": {
                            "controllerData": "DAACDAAEDAABCgABAAAAAAAAAAEKAAIAAAAAAAAAAAoAAwAAAZwzJDVCAAAAAA=="
                          },
                          "conversationDetails": {
                            "conversationSection": "HighQuality"
                          }
                        }
                      }
                    }
                  }
                ],
                "moduleDisplayType": "VerticalConversation",
                "metadata": {
                  "conversationMetadata": {
                    "allTweetIds": [
                      "2019096837278310578",
                      "2019096837278310578"
                    ],
                    "enableDeduplication": true
                  }
                },
                "value": "DAAKCgABHAelzGE__ncLAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0JaZzF5bFl4ZlJ3RkoySUNGMkR3SEFWRjREa1dvTEljQlNaZks1Wmgy...",
                "cursorType": "Bottom"
              }
            }
          ],
          "direction": "Top"
        }
      ],
      "metadata": {
        "scribeConfig": {
          "page": "ranked_replies"
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
    "timeline_response": {
      "instructions": [
        {
          "__typename": "TimelineClearCache"
        }
      ],
      "metadata": {
        "scribeConfig": {
          "page": "ranked_replies"
        }
      }
    }
  }
}
```

## Notes

- Pagination: uses cursorType
- View counts may come as formatted strings (e.g., `"1,234,567"`)
- GraphQL-style response with 3 `__typename` discriminated type(s)
