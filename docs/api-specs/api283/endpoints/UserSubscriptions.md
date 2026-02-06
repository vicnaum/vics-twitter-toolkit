# User Subscriptions

**Route:** `GET /UserSubscriptions`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Subscriptions

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| user_id | STRING | Yes | `44196397` |

## Response Schema

```typescript
// Root: UserSubscriptionsResponse
interface UserSubscriptionsResponse {
  data: UserSubscriptionsResponseData;
}

interface UserSubscriptionsResponseData {
  user_result_by_rest_id: UserSubscriptionsResponseDataUserResultByRestId;
}

interface UserSubscriptionsResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  rest_id: string;
  user_creator_subscriptions_timeline: UserUserCreatorSubscriptionsTimeline;
}

interface UserUserCreatorSubscriptionsTimeline {
  id: string;
  timeline: UserUserCreatorSubscriptionsTimelineTimeline;
}

interface UserUserCreatorSubscriptionsTimelineTimeline {
  id: string;
  instructions: TimelineClearCacheItem[];
}

interface TimelineClearCacheItem {
  __typename: string;  // 3/3
  direction?: string;  // 1/3
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/3
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 22/22
  entry_id: string;  // 22/22
  sort_index: string;  // 22/22
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
      "rest_id": "44196397",
      "result": {
        "__typename": "User",
        "rest_id": "44196397",
        "user_creator_subscriptions_timeline": {
          "id": "VGltZWxpbmU6CgCGAAAAAAKiYi0A",
          "timeline": {
            "id": "CreatorSubscriptionsProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache",
                "direction": "Top",
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "CreatorSubscriptionsSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "226986867",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1137
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1217123421622018049/pEU-WVCY_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/226986867/1689266722"
                            },
                            "core": {
                              "created_at": "Wed Dec 15 16:17:30 +0000 2010",
                              "name": "Rob2628",
                              "screen_name": "Rob_2628"
                            },
                            "dm_permissions": {
                              "can_dm": false
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1734413903495356417/KEMZ12DX_bigger.jpg"
                                },
                                "description": "Vigilant News",
                                "url": {
                                  "url": "https://twitter.com/VigilantNews",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "NRW, Germany"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1741824559936868486",
                                "1741824559936868486"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Hi I'm Rob. I tweet about Gaming, @Diablo & @Twitch and stream efficient & high-quality gameplay! https://t.co/aEk18dC72...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    },
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
                                    },
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
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
                              "followers": 13972,
                              "following": 84
                            },
                            "relationship_perspectives": {},
                            "rest_id": "226986867",
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 89,
                              "tweets": 265
                            },
                            "website": {
                              "url": "https://t.co/U85a3MQv74"
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
                      "value": "1778342034311686337|1769499749477515242"
                    },
                    "entry_id": "user-226986867",
                    "sort_index": "1769499749477515264"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "CreatorSubscriptionsSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "226986867",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1137
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1217123421622018049/pEU-WVCY_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/226986867/1689266722"
                            },
                            "core": {
                              "created_at": "Wed Dec 15 16:17:30 +0000 2010",
                              "name": "Rob2628",
                              "screen_name": "Rob_2628"
                            },
                            "dm_permissions": {
                              "can_dm": false
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1734413903495356417/KEMZ12DX_bigger.jpg"
                                },
                                "description": "Vigilant News",
                                "url": {
                                  "url": "https://twitter.com/VigilantNews",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "NRW, Germany"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1741824559936868486",
                                "1741824559936868486"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Hi I'm Rob. I tweet about Gaming, @Diablo & @Twitch and stream efficient & high-quality gameplay! https://t.co/aEk18dC72...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    },
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
                                    },
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
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
                              "followers": 13972,
                              "following": 84
                            },
                            "relationship_perspectives": {},
                            "rest_id": "226986867",
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 89,
                              "tweets": 265
                            },
                            "website": {
                              "url": "https://t.co/U85a3MQv74"
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
                      "value": "1778342034311686337|1769499749477515242"
                    },
                    "entry_id": "user-226986867",
                    "sort_index": "1769499749477515264"
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
                        "component": "CreatorSubscriptionsSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "226986867",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1137
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1217123421622018049/pEU-WVCY_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/226986867/1689266722"
                            },
                            "core": {
                              "created_at": "Wed Dec 15 16:17:30 +0000 2010",
                              "name": "Rob2628",
                              "screen_name": "Rob_2628"
                            },
                            "dm_permissions": {
                              "can_dm": false
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1734413903495356417/KEMZ12DX_bigger.jpg"
                                },
                                "description": "Vigilant News",
                                "url": {
                                  "url": "https://twitter.com/VigilantNews",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "NRW, Germany"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1741824559936868486",
                                "1741824559936868486"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Hi I'm Rob. I tweet about Gaming, @Diablo & @Twitch and stream efficient & high-quality gameplay! https://t.co/aEk18dC72...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    },
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
                                    },
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
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
                              "followers": 13972,
                              "following": 84
                            },
                            "relationship_perspectives": {},
                            "rest_id": "226986867",
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 89,
                              "tweets": 265
                            },
                            "website": {
                              "url": "https://t.co/U85a3MQv74"
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
                      "value": "1778342034311686337|1769499749477515242"
                    },
                    "entry_id": "user-226986867",
                    "sort_index": "1769499749477515264"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "CreatorSubscriptionsSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "226986867",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 1137
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1217123421622018049/pEU-WVCY_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/226986867/1689266722"
                            },
                            "core": {
                              "created_at": "Wed Dec 15 16:17:30 +0000 2010",
                              "name": "Rob2628",
                              "screen_name": "Rob_2628"
                            },
                            "dm_permissions": {
                              "can_dm": false
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1734413903495356417/KEMZ12DX_bigger.jpg"
                                },
                                "description": "Vigilant News",
                                "url": {
                                  "url": "https://twitter.com/VigilantNews",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "NRW, Germany"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1741824559936868486",
                                "1741824559936868486"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "Hi I'm Rob. I tweet about Gaming, @Diablo & @Twitch and stream efficient & high-quality gameplay! https://t.co/aEk18dC72...",
                              "entities": {
                                "description": {
                                  "urls": [
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    },
                                    {
                                      "display_url": "youtube.com/c/Rob2628",
                                      "expanded_url": "https://www.youtube.com/c/Rob2628",
                                      "indices": [
                                        98,
                                        98
                                      ],
                                      "url": "https://t.co/aEk18dC723"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        34,
                                        34
                                      ],
                                      "name": "",
                                      "screen_name": "Diablo"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
                                    },
                                    {
                                      "display_url": "twitch.tv/rob2628",
                                      "expanded_url": "https://www.twitch.tv/rob2628",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/U85a3MQv74"
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
                              "followers": 13972,
                              "following": 84
                            },
                            "relationship_perspectives": {},
                            "rest_id": "226986867",
                            "super_follow_eligible": true,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 89,
                              "tweets": 265
                            },
                            "website": {
                              "url": "https://t.co/U85a3MQv74"
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
                      "value": "1778342034311686337|1769499749477515242"
                    },
                    "entry_id": "user-226986867",
                    "sort_index": "1769499749477515264"
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
      "rest_id": "44196397",
      "result": {
        "__typename": "User",
        "rest_id": "44196397",
        "user_creator_subscriptions_timeline": {
          "id": "VGltZWxpbmU6CgCGAAAAAAKiYi0A",
          "timeline": {
            "id": "CreatorSubscriptionsProduct-Timeline",
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
