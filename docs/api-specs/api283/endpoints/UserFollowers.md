# User Followers

**Route:** `GET /UserFollowers`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Followers

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | Yes | `951329744804392960` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: UserFollowersResponse
interface UserFollowersResponse {
  data: UserFollowersResponseData;
}

interface UserFollowersResponseData {
  user_result_by_rest_id: UserFollowersResponseDataUserResultByRestId;
}

interface UserFollowersResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  followers_timeline: UserFollowersTimeline;
  rest_id: string;
}

interface UserFollowersTimeline {
  id: string;
  timeline: UserFollowersTimelineTimeline;
}

interface UserFollowersTimelineTimeline {
  id: string;
  instructions: TimelineClearCacheItem[];
}

interface TimelineClearCacheItem {
  __typename: string;  // 4/4
  direction?: string;  // 2/4
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/4
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 71/71
  entry_id: string;  // 71/71
  sort_index: string;  // 71/71
}

interface TimelineTimelineItem {
  __typename?: string;
  client_event_info?: TimelineTimelineItemClientEventInfo;
  content?: TimelineUser;
  cursor_type?: string;
  value?: string;
}

interface TimelineTimelineItemClientEventInfo {
  component?: string;
  element?: string;
}

interface TimelineUser {
  __typename?: string;
  display_type?: string;
  user_results?: TimelineUserUserResults;
}

interface TimelineUserUserResults {
  rest_id?: string;
  result?: User;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "user_result_by_rest_id": {
      "rest_id": "951329744804392960",
      "result": {
        "__typename": "User",
        "rest_id": "951329744804392960",
        "followers_timeline": {
          "id": "VGltZWxpbmU6CgAEDTPNXM9UMAAA",
          "timeline": {
            "id": "FollowersProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache",
                "direction": "Top",
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "FollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "2327407569",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 102011
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1744816916546695168/bwxsSoNR_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/2327407569/1700516506"
                            },
                            "core": {
                              "created_at": "Thu Feb 06 05:03:51 +0000 2014",
                              "name": "toly 🇺🇸",
                              "screen_name": "aeyakovenko"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_bigger.png"
                                },
                                "description": "Solana Foundation",
                                "url": {
                                  "url": "https://twitter.com/SolanaFndn",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Solana Beach, CA"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1767252761211740209",
                                "1767252761211740209"
                              ]
                            },
                            "privacy": {
                              "protected": true
                            },
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Co-Founder of Solana Labs. Award winning phone creator. NFA, don’t trust me, mostly technical gibberish. https://t.co/zy...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    },
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    }
                                  ],
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
                                  "symbols": [
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    },
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    },
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    }
                                  ]
                                }
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
                              "followers": 334446,
                              "following": 4757
                            },
                            "relationship_perspectives": {},
                            "rest_id": "2327407569",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 823,
                              "tweets": 70204
                            },
                            "website": {
                              "url": "https://t.co/LomgbToDgJ"
                            },
                            "verification": {
                              "is_blue_verified": true,
                              "verified_type": "Business"
                            },
                            "profile_image_shape": "Square"
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793814858371082585|1769496596476592057"
                    },
                    "entry_id": "user-2327407569",
                    "sort_index": "1769496596476592128"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "FollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "2327407569",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 102011
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1744816916546695168/bwxsSoNR_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/2327407569/1700516506"
                            },
                            "core": {
                              "created_at": "Thu Feb 06 05:03:51 +0000 2014",
                              "name": "toly 🇺🇸",
                              "screen_name": "aeyakovenko"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_bigger.png"
                                },
                                "description": "Solana Foundation",
                                "url": {
                                  "url": "https://twitter.com/SolanaFndn",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Solana Beach, CA"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1767252761211740209",
                                "1767252761211740209"
                              ]
                            },
                            "privacy": {
                              "protected": true
                            },
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Co-Founder of Solana Labs. Award winning phone creator. NFA, don’t trust me, mostly technical gibberish. https://t.co/zy...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    },
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    }
                                  ],
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
                                  "symbols": [
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    },
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    },
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    }
                                  ]
                                }
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
                              "followers": 334446,
                              "following": 4757
                            },
                            "relationship_perspectives": {},
                            "rest_id": "2327407569",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 823,
                              "tweets": 70204
                            },
                            "website": {
                              "url": "https://t.co/LomgbToDgJ"
                            },
                            "verification": {
                              "is_blue_verified": true,
                              "verified_type": "Business"
                            },
                            "profile_image_shape": "Square"
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793814858371082585|1769496596476592057"
                    },
                    "entry_id": "user-2327407569",
                    "sort_index": "1769496596476592128"
                  }
                ]
              },
              {
                "__typename": "TimelineClearCache",
                "direction": "Top",
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "FollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "2327407569",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 102011
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1744816916546695168/bwxsSoNR_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/2327407569/1700516506"
                            },
                            "core": {
                              "created_at": "Thu Feb 06 05:03:51 +0000 2014",
                              "name": "toly 🇺🇸",
                              "screen_name": "aeyakovenko"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_bigger.png"
                                },
                                "description": "Solana Foundation",
                                "url": {
                                  "url": "https://twitter.com/SolanaFndn",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Solana Beach, CA"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1767252761211740209",
                                "1767252761211740209"
                              ]
                            },
                            "privacy": {
                              "protected": true
                            },
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Co-Founder of Solana Labs. Award winning phone creator. NFA, don’t trust me, mostly technical gibberish. https://t.co/zy...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    },
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    }
                                  ],
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
                                  "symbols": [
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    },
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    },
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    }
                                  ]
                                }
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
                              "followers": 334446,
                              "following": 4757
                            },
                            "relationship_perspectives": {},
                            "rest_id": "2327407569",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 823,
                              "tweets": 70204
                            },
                            "website": {
                              "url": "https://t.co/LomgbToDgJ"
                            },
                            "verification": {
                              "is_blue_verified": true,
                              "verified_type": "Business"
                            },
                            "profile_image_shape": "Square"
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793814858371082585|1769496596476592057"
                    },
                    "entry_id": "user-2327407569",
                    "sort_index": "1769496596476592128"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "FollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "2327407569",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 102011
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1744816916546695168/bwxsSoNR_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/2327407569/1700516506"
                            },
                            "core": {
                              "created_at": "Thu Feb 06 05:03:51 +0000 2014",
                              "name": "toly 🇺🇸",
                              "screen_name": "aeyakovenko"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_bigger.png"
                                },
                                "description": "Solana Foundation",
                                "url": {
                                  "url": "https://twitter.com/SolanaFndn",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Solana Beach, CA"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1767252761211740209",
                                "1767252761211740209"
                              ]
                            },
                            "privacy": {
                              "protected": true
                            },
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Co-Founder of Solana Labs. Award winning phone creator. NFA, don’t trust me, mostly technical gibberish. https://t.co/zy...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    },
                                    {
                                      "display_url": "solanamobile.com/two",
                                      "expanded_url": "http://solanamobile.com/two",
                                      "indices": [
                                        105,
                                        105
                                      ],
                                      "url": "https://t.co/zyJoDMPFJg"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        16,
                                        16
                                      ],
                                      "name": "",
                                      "screen_name": "solana"
                                    }
                                  ],
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
                                  "symbols": [
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    },
                                    {
                                      "indices": [
                                        17,
                                        17
                                      ],
                                      "text": "duko"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    },
                                    {
                                      "display_url": "solanamobile.com",
                                      "expanded_url": "http://solanamobile.com",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/LomgbToDgJ"
                                    }
                                  ]
                                }
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
                              "followers": 334446,
                              "following": 4757
                            },
                            "relationship_perspectives": {},
                            "rest_id": "2327407569",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 823,
                              "tweets": 70204
                            },
                            "website": {
                              "url": "https://t.co/LomgbToDgJ"
                            },
                            "verification": {
                              "is_blue_verified": true,
                              "verified_type": "Business"
                            },
                            "profile_image_shape": "Square"
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793814858371082585|1769496596476592057"
                    },
                    "entry_id": "user-2327407569",
                    "sort_index": "1769496596476592128"
                  }
                ]
              }
            ]
          }
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
    "user_result_by_rest_id": {
      "rest_id": "951329744804392960",
      "result": {
        "__typename": "User",
        "rest_id": "951329744804392960",
        "followers_timeline": {
          "id": "VGltZWxpbmU6CgAEDTPNXM9UMAAA",
          "timeline": {
            "id": "FollowersProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache"
              }
            ]
          }
        }
      }
    }
  }
}
```

## Notes

- Pagination: uses cursor_type
- GraphQL-style response with 3 `__typename` discriminated type(s)
