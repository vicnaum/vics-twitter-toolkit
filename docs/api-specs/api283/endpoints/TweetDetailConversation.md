# Tweet Detail & Conversation Timeline

**Route:** `GET /TweetDetailConversation`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET Tweet Detail & Conversation Timeline

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| tweet_id | STRING | Yes | `1768778186186195177` |

## Response Schema

```typescript
// Root: TweetDetailConversationTimelineResponse
interface TweetDetailConversationTimelineResponse {
  data: TweetDetailConversationTimelineResponseData;
}

interface TweetDetailConversationTimelineResponseData {
  threaded_conversation_with_injections_v2: TweetDetailConversationTimelineResponseDataThreadedConversationWithInjectionsV2;
}

interface TweetDetailConversationTimelineResponseDataThreadedConversationWithInjectionsV2 {
  id: string;
  instructions: TimelineAddEntriesItem[];
}

interface TimelineAddEntriesItem {
  __typename: string;  // 2/2
  direction?: string;  // 1/2
  entries?: TimelineAddEntriesItemEntriesItem[];  // 1/2
}

interface TimelineAddEntriesItemEntriesItem {
  content: TimelineTimelineItem;  // 5/5
  entry_id: string;  // 5/5
  sort_index: string;  // 5/5
}

interface TimelineTimelineItem {
  content: TimelineTweet;
  header: TimelineTimelineItemHeader;
  __typename?: string;
  client_event_info?: TimelineTimelineItemClientEventInfo;
  display_type?: string;
  items?: TimelineTimelineItemItemsItem[];
}

interface TimelineTweet {
  __typename: string;
  has_moderated_replies: boolean;
  timeline_tweet_display_type: string;
  tweet_results: TimelineTweetTweetResults;
}

interface TimelineTweetTweetResults {
  rest_id: string;
  result: Tweet;
}

interface Tweet {
  __typename: string;
  core: TweetCore;
  edit_control: EditControlInitial;
  is_translatable: boolean;
  legacy: TweetLegacy;
  rest_id: string;
  unmention_data: TweetUnmentionData;
  view_count_info: TweetViewCountInfo;
}

interface TweetCore {
  user_results: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  action_counts: UserActionCounts;
  avatar: UserAvatar;
  banner: UserBanner;
  core: UserCore;
  dm_permissions: UserDmPermissions;
  exclusive_tweet_following: boolean;
  identity_profile_labels_highlighted_label: {};
  location: UserLocation;
  media_permissions: UserMediaPermissions;
  notifications_settings: {};
  pinned_items: UserPinnedItems;
  privacy: {};
  private_super_following: boolean;
  profile_bio: UserProfileBio;
  profile_metadata: UserProfileMetadata;
  profile_translation: UserProfileTranslation;
  properties: UserProperties;
  relationship_counts: UserRelationshipCounts;
  relationship_perspectives: {};
  rest_id: string;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
  tweet_counts: UserTweetCounts;
  verification: UserVerification;
  website: UserWebsite;
}

interface UserActionCounts {
  favorites_count: number;
}

interface UserAvatar {
  image_url: string;
}

interface UserBanner {
  image_url: string;
}

interface UserCore {
  created_at: string;
  name: string;
  screen_name: string;
}

interface UserDmPermissions {
  can_dm: boolean;
}

interface UserLocation {
  location: string;
}

interface UserMediaPermissions {
  can_media_tag: boolean;
}

interface UserPinnedItems {
  tweet_ids_str: string[];
}

interface UserProfileBio {
  description: string;
  entities: UserProfileBioEntities;
}

interface UserProfileBioEntities {
  description: {};
}

interface UserProfileMetadata {
  profile_interstitial_type: string;
  profile_link_color: string;
}

interface UserProfileTranslation {
  translator_type_enum: string;
}

interface UserProperties {
  has_extended_profile: boolean;
}

interface UserRelationshipCounts {
  followers: number;
  following: number;
}

interface UserTweetCounts {
  media_tweets: number;
  tweets: number;
}

interface UserVerification {
  is_blue_verified: boolean;
}

interface UserWebsite {
  url: string;
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
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: {};
  favorite_count: number;
  full_text: string;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  user_id_str: string;
}

interface TweetUnmentionData {
  id: string;
}

interface TweetViewCountInfo {
  count: string;
  state: string;
}

interface TimelineTimelineItemHeader {
  display_type: string;
  social_context: TimelineGeneralContext;
  sticky: boolean;
  text: string;
}

interface TimelineGeneralContext {
  __typename: string;
  context_type: string;
  text: string;
}

interface TimelineTimelineItemClientEventInfo {
  component: string;
  details?: TimelineTimelineItemClientEventInfoDetails;
}

interface TimelineTimelineItemClientEventInfoDetails {
  conversation_details?: TimelineTimelineItemClientEventInfoDetailsConversationDetails;
}

interface TimelineTimelineItemClientEventInfoDetailsConversationDetails {
  conversation_section?: string;
}

interface TimelineTimelineItemItemsItem {
  entry_id?: string;
  item?: TimelineTimelineItemItemsItemItem;
}

interface TimelineTimelineItemItemsItemItem {
  client_event_info?: TimelineTimelineItemItemsItemItemClientEventInfo;
  content?: TimelineTweet;
}

interface TimelineTimelineItemItemsItemItemClientEventInfo {
  details?: TimelineTimelineItemItemsItemItemClientEventInfoDetails;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetails {
  conversation_details?: TimelineTimelineItemItemsItemItemClientEventInfoDetailsConversationDetails;
  timelines_details?: TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetailsConversationDetails {
  conversation_section?: string;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails {
  controller_data?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "threaded_conversation_with_injections_v2": {
      "id": "Conversation-1768956326384738775",
      "instructions": [
        {
          "__typename": "TimelineAddEntries",
          "entries": [
            {
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "has_moderated_replies": false,
                  "timeline_tweet_display_type": "Tweet",
                  "tweet_results": {
                    "rest_id": "1768956326384738775",
                    "result": {
                      "__typename": "Tweet",
                      "core": {
                        "user_results": {
                          "rest_id": "1742930265436200961",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1516
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068"
                            },
                            "core": {
                              "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                              "name": "Palwasha Gul",
                              "screen_name": "P_alwasha2317"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {},
                            "location": {
                              "location": ""
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1763529044077707511"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "follow back 💯🔙😁",
                              "entities": {
                                "description": {}
                              }
                            },
                            "profile_metadata": {
                              "profile_interstitial_type": "",
                              "profile_link_color": "1DA1F2"
                            },
                            "profile_translation": {
                              "translator_type_enum": "None"
                            },
                            "properties": {
                              "has_extended_profile": true
                            },
                            "relationship_counts": {
                              "followers": 2347,
                              "following": 2822
                            },
                            "relationship_perspectives": {},
                            "rest_id": "1742930265436200961",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 72,
                              "tweets": 1279
                            },
                            "website": {
                              "url": ""
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "is_translatable": false,
                      "legacy": {
                        "bookmark_count": 0,
                        "conversation_id_str": "1768956326384738775",
                        "created_at": "Sat Mar 16 11:03:48 +0000 2024",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {},
                        "favorite_count": 2,
                        "full_text": "aoa \nhave a nice day",
                        "lang": "en",
                        "quote_count": 0,
                        "reply_count": 2,
                        "retweet_count": 0,
                        "user_id_str": "1742930265436200961"
                      },
                      "rest_id": "1768956326384738775",
                      "unmention_data": {
                        "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAAAAA=="
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "1768956326384738775"
                        ],
                        "editable_until_msecs": "1710590628000",
                        "is_edit_eligible": true,
                        "edits_remaining": "5"
                      },
                      "view_count_info": {
                        "count": "32",
                        "state": "EnabledWithCount"
                      }
                    }
                  }
                },
                "client_event_info": {
                  "details": {
                    "conversation_details": {
                      "conversation_section": "HighQuality"
                    }
                  },
                  "component": "related_tweet"
                },
                "display_type": "VerticalConversation",
                "items": [
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  },
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  }
                ],
                "header": {
                  "display_type": "Classic",
                  "social_context": {
                    "__typename": "TimelineGeneralContext",
                    "context_type": "TextOnly",
                    "text": "Sourced from across X"
                  },
                  "sticky": true,
                  "text": "Discover more"
                }
              },
              "entry_id": "tweet-1768956326384738775",
              "sort_index": "7454415710470037032"
            },
            {
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "has_moderated_replies": false,
                  "timeline_tweet_display_type": "Tweet",
                  "tweet_results": {
                    "rest_id": "1768956326384738775",
                    "result": {
                      "__typename": "Tweet",
                      "core": {
                        "user_results": {
                          "rest_id": "1742930265436200961",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1516
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068"
                            },
                            "core": {
                              "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                              "name": "Palwasha Gul",
                              "screen_name": "P_alwasha2317"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {},
                            "location": {
                              "location": ""
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1763529044077707511"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "follow back 💯🔙😁",
                              "entities": {
                                "description": {}
                              }
                            },
                            "profile_metadata": {
                              "profile_interstitial_type": "",
                              "profile_link_color": "1DA1F2"
                            },
                            "profile_translation": {
                              "translator_type_enum": "None"
                            },
                            "properties": {
                              "has_extended_profile": true
                            },
                            "relationship_counts": {
                              "followers": 2347,
                              "following": 2822
                            },
                            "relationship_perspectives": {},
                            "rest_id": "1742930265436200961",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 72,
                              "tweets": 1279
                            },
                            "website": {
                              "url": ""
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "is_translatable": false,
                      "legacy": {
                        "bookmark_count": 0,
                        "conversation_id_str": "1768956326384738775",
                        "created_at": "Sat Mar 16 11:03:48 +0000 2024",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {},
                        "favorite_count": 2,
                        "full_text": "aoa \nhave a nice day",
                        "lang": "en",
                        "quote_count": 0,
                        "reply_count": 2,
                        "retweet_count": 0,
                        "user_id_str": "1742930265436200961"
                      },
                      "rest_id": "1768956326384738775",
                      "unmention_data": {
                        "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAAAAA=="
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "1768956326384738775"
                        ],
                        "editable_until_msecs": "1710590628000",
                        "is_edit_eligible": true,
                        "edits_remaining": "5"
                      },
                      "view_count_info": {
                        "count": "32",
                        "state": "EnabledWithCount"
                      }
                    }
                  }
                },
                "client_event_info": {
                  "details": {
                    "conversation_details": {
                      "conversation_section": "HighQuality"
                    }
                  },
                  "component": "related_tweet"
                },
                "display_type": "VerticalConversation",
                "items": [
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  },
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  }
                ],
                "header": {
                  "display_type": "Classic",
                  "social_context": {
                    "__typename": "TimelineGeneralContext",
                    "context_type": "TextOnly",
                    "text": "Sourced from across X"
                  },
                  "sticky": true,
                  "text": "Discover more"
                }
              },
              "entry_id": "tweet-1768956326384738775",
              "sort_index": "7454415710470037032"
            }
          ],
          "direction": "Top"
        },
        {
          "__typename": "TimelineAddEntries",
          "entries": [
            {
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "has_moderated_replies": false,
                  "timeline_tweet_display_type": "Tweet",
                  "tweet_results": {
                    "rest_id": "1768956326384738775",
                    "result": {
                      "__typename": "Tweet",
                      "core": {
                        "user_results": {
                          "rest_id": "1742930265436200961",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1516
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068"
                            },
                            "core": {
                              "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                              "name": "Palwasha Gul",
                              "screen_name": "P_alwasha2317"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {},
                            "location": {
                              "location": ""
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1763529044077707511"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "follow back 💯🔙😁",
                              "entities": {
                                "description": {}
                              }
                            },
                            "profile_metadata": {
                              "profile_interstitial_type": "",
                              "profile_link_color": "1DA1F2"
                            },
                            "profile_translation": {
                              "translator_type_enum": "None"
                            },
                            "properties": {
                              "has_extended_profile": true
                            },
                            "relationship_counts": {
                              "followers": 2347,
                              "following": 2822
                            },
                            "relationship_perspectives": {},
                            "rest_id": "1742930265436200961",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 72,
                              "tweets": 1279
                            },
                            "website": {
                              "url": ""
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "is_translatable": false,
                      "legacy": {
                        "bookmark_count": 0,
                        "conversation_id_str": "1768956326384738775",
                        "created_at": "Sat Mar 16 11:03:48 +0000 2024",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {},
                        "favorite_count": 2,
                        "full_text": "aoa \nhave a nice day",
                        "lang": "en",
                        "quote_count": 0,
                        "reply_count": 2,
                        "retweet_count": 0,
                        "user_id_str": "1742930265436200961"
                      },
                      "rest_id": "1768956326384738775",
                      "unmention_data": {
                        "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAAAAA=="
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "1768956326384738775"
                        ],
                        "editable_until_msecs": "1710590628000",
                        "is_edit_eligible": true,
                        "edits_remaining": "5"
                      },
                      "view_count_info": {
                        "count": "32",
                        "state": "EnabledWithCount"
                      }
                    }
                  }
                },
                "client_event_info": {
                  "details": {
                    "conversation_details": {
                      "conversation_section": "HighQuality"
                    }
                  },
                  "component": "related_tweet"
                },
                "display_type": "VerticalConversation",
                "items": [
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  },
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  }
                ],
                "header": {
                  "display_type": "Classic",
                  "social_context": {
                    "__typename": "TimelineGeneralContext",
                    "context_type": "TextOnly",
                    "text": "Sourced from across X"
                  },
                  "sticky": true,
                  "text": "Discover more"
                }
              },
              "entry_id": "tweet-1768956326384738775",
              "sort_index": "7454415710470037032"
            },
            {
              "content": {
                "__typename": "TimelineTimelineItem",
                "content": {
                  "__typename": "TimelineTweet",
                  "has_moderated_replies": false,
                  "timeline_tweet_display_type": "Tweet",
                  "tweet_results": {
                    "rest_id": "1768956326384738775",
                    "result": {
                      "__typename": "Tweet",
                      "core": {
                        "user_results": {
                          "rest_id": "1742930265436200961",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1516
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068"
                            },
                            "core": {
                              "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                              "name": "Palwasha Gul",
                              "screen_name": "P_alwasha2317"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {},
                            "location": {
                              "location": ""
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1763529044077707511"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "follow back 💯🔙😁",
                              "entities": {
                                "description": {}
                              }
                            },
                            "profile_metadata": {
                              "profile_interstitial_type": "",
                              "profile_link_color": "1DA1F2"
                            },
                            "profile_translation": {
                              "translator_type_enum": "None"
                            },
                            "properties": {
                              "has_extended_profile": true
                            },
                            "relationship_counts": {
                              "followers": 2347,
                              "following": 2822
                            },
                            "relationship_perspectives": {},
                            "rest_id": "1742930265436200961",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 72,
                              "tweets": 1279
                            },
                            "website": {
                              "url": ""
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "is_translatable": false,
                      "legacy": {
                        "bookmark_count": 0,
                        "conversation_id_str": "1768956326384738775",
                        "created_at": "Sat Mar 16 11:03:48 +0000 2024",
                        "display_text_range": [
                          0,
                          0
                        ],
                        "entities": {},
                        "favorite_count": 2,
                        "full_text": "aoa \nhave a nice day",
                        "lang": "en",
                        "quote_count": 0,
                        "reply_count": 2,
                        "retweet_count": 0,
                        "user_id_str": "1742930265436200961"
                      },
                      "rest_id": "1768956326384738775",
                      "unmention_data": {
                        "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAAAAA=="
                      },
                      "edit_control": {
                        "__typename": "EditControlInitial",
                        "edit_tweet_ids": [
                          "1768956326384738775"
                        ],
                        "editable_until_msecs": "1710590628000",
                        "is_edit_eligible": true,
                        "edits_remaining": "5"
                      },
                      "view_count_info": {
                        "count": "32",
                        "state": "EnabledWithCount"
                      }
                    }
                  }
                },
                "client_event_info": {
                  "details": {
                    "conversation_details": {
                      "conversation_section": "HighQuality"
                    }
                  },
                  "component": "related_tweet"
                },
                "display_type": "VerticalConversation",
                "items": [
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  },
                  {
                    "entry_id": "conversationthread-1768965096535896458-tweet-1768965096535896458",
                    "item": {
                      "client_event_info": {
                        "details": {
                          "conversation_details": {
                            "conversation_section": "HighQuality"
                          },
                          "timelines_details": {
                            "controller_data": "DAACDAAEDAABCgABFQqCiGAHhAUKAAIAAAAAFAIICAAAAAA="
                          }
                        }
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768965096535896458",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "3367733237",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 64995
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1673722494815989760/UBTWQ4D7_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/3367733237/1652810112"
                                  },
                                  "core": {
                                    "created_at": "Thu Jul 09 14:59:01 +0000 2015",
                                    "name": "Asif Niazi Khan",
                                    "screen_name": "Asifniazikhan43"
                                  },
                                  "dm_permissions": {
                                    "can_dm": true
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "Camden Town, London"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1512585742828064778",
                                      "1512585742828064778"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Imranist 💚🇵🇰💚 𝔽𝕠𝕝𝕝𝕠𝕨 𝕗𝕠𝕝𝕝𝕠𝕨𝕓𝕒𝕔𝕜 𝟙𝟘𝟘%\nChartered Accountant \nمیں ایک غلام سلطنت کا آزاد شہری ہوں۔ ج...",
                                    "entities": {
                                      "description": {},
                                      "url": {
                                        "urls": [
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "1BE805"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 4337,
                                    "following": 4992
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "3367733237",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 1517,
                                    "tweets": 53035
                                  },
                                  "website": {
                                    "url": ""
                                  },
                                  "verification": {
                                    "is_blue_verified": true
                                  }
                                }
                              }
                            },
                            "is_translatable": true,
                            "legacy": {
                              "bookmark_count": 0,
                              "conversation_id_str": "1768956326384738775",
                              "created_at": "Sat Mar 16 11:38:39 +0000 2024",
                              "display_text_range": [
                                15,
                                15
                              ],
                              "entities": {
                                "user_mentions": [
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  },
                                  {
                                    "id_str": "1742930265436200961",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "Palwasha Gul",
                                    "screen_name": "P_alwasha2317"
                                  }
                                ]
                              },
                              "favorite_count": 1,
                              "full_text": "@P_alwasha2317 و علیکم السلام ورحمتہ اللہ وبرکاتہ 🔙🔄",
                              "in_reply_to_status_id_str": "1768956326384738775",
                              "lang": "ur",
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "user_id_str": "3367733237"
                            },
                            "rest_id": "1768965096535896458",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjJhoEVeh1w8AAgoAAAABGDAh14uaIAEA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768965096535896458",
                                "1768965096535896458"
                              ],
                              "editable_until_msecs": "1710592719000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "4",
                              "state": "EnabledWithCount"
                            },
                            "reply_to_user_results": {
                              "rest_id": "1742930265436200961",
                              "result": {
                                "__typename": "User",
                                "rest_id": "1742930265436200961",
                                "core": {
                                  "screen_name": "P_alwasha2317"
                                }
                              }
                            },
                            "tweet": {
                              "core": {
                                "user_results": {
                                  "rest_id": "1745370802743111680",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 10
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                                    },
                                    "core": {
                                      "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                      "name": "Zachary Hurst",
                                      "screen_name": "ZacharyHurWWEB"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {},
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": true
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Software developer",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "1DA1F2"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 881,
                                      "following": 10
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1745370802743111680",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2,
                                      "tweets": 10
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1745370802743111680",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1745370802743111680",
                                      "core": {
                                        "screen_name": "ZacharyHurWWEB"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1765376254281220481",
                                "created_at": "Wed Mar 06 13:57:52 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 554,
                                "full_text": "Good morning and have a nice day!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 1,
                                "reply_count": 0,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1745370802743111680"
                              },
                              "rest_id": "1765376254281220481",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYf+BZk1eBgQ8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1765376254281220481"
                                ],
                                "editable_until_msecs": "1709737072000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "480618",
                                "state": "EnabledWithCount"
                              }
                            }
                          }
                        },
                        "promoted_metadata": {
                          "advertiser_results": {
                            "rest_id": "1745370802743111680",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 10
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1759168969095909376/qMAwr92K_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1745370802743111680/1708253544"
                              },
                              "core": {
                                "created_at": "Thu Jan 11 09:03:32 +0000 2024",
                                "name": "Zachary Hurst",
                                "screen_name": "ZacharyHurWWEB"
                              },
                              "dm_permissions": {
                                "can_dm": false
                              },
                              "exclusive_tweet_following": false,
                              "identity_profile_labels_highlighted_label": {},
                              "location": {
                                "location": ""
                              },
                              "media_permissions": {
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {},
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Software developer",
                                "entities": {
                                  "description": {}
                                }
                              },
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1DA1F2"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": true
                              },
                              "relationship_counts": {
                                "followers": 881,
                                "following": 10
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1745370802743111680",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 2,
                                "tweets": 10
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "23xqojg2w7119ycszc271omlgk"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [],
                          "impression_id": "277351effb07e0d9",
                          "impression_string": "277351effb07e0d9"
                        }
                      }
                    }
                  }
                ],
                "header": {
                  "display_type": "Classic",
                  "social_context": {
                    "__typename": "TimelineGeneralContext",
                    "context_type": "TextOnly",
                    "text": "Sourced from across X"
                  },
                  "sticky": true,
                  "text": "Discover more"
                }
              },
              "entry_id": "tweet-1768956326384738775",
              "sort_index": "7454415710470037032"
            }
          ],
          "direction": "Top"
        }
      ]
    }
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "data": {
    "threaded_conversation_with_injections_v2": {
      "id": "Conversation-1768956326384738775",
      "instructions": [
        {
          "__typename": "TimelineAddEntries"
        }
      ]
    }
  }
}
```

## Notes

- Pagination: uses cursor parameter
- View counts may come as formatted strings (e.g., `"1,234,567"`)
- GraphQL-style response with 2 `__typename` discriminated type(s)
