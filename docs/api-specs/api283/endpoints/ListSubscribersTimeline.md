# List Subscribers

**Route:** `GET /ListSubscribersTimeline`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET ListSubscribersTimeline

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| list_id | STRING | Yes | `1446054017499480064` |

## Response Schema

```typescript
// Root: ListSubscribersResponse
interface ListSubscribersResponse {
  data: ListSubscribersResponseData;
}

interface ListSubscribersResponseData {
  list_by_rest_id: ListSubscribersResponseDataListByRestId;
}

interface ListSubscribersResponseDataListByRestId {
  rest_id: string;
  subscribers_timeline: ListSubscribersResponseDataListByRestIdSubscribersTimeline;
}

interface ListSubscribersResponseDataListByRestIdSubscribersTimeline {
  id: string;
  timeline: ListSubscribersResponseDataListByRestIdSubscribersTimelineTimeline;
}

interface ListSubscribersResponseDataListByRestIdSubscribersTimelineTimeline {
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

interface User {
  __typename?: string;
  action_counts?: UserActionCounts;
  avatar?: UserAvatar;
  banner?: UserBanner;
  core?: UserCore;
  dm_permissions?: UserDmPermissions;
  exclusive_tweet_following?: boolean;
  identity_profile_labels_highlighted_label?: {};
  location?: UserLocation;
  media_permissions?: UserMediaPermissions;
  notifications_settings?: {};
  pinned_items?: UserPinnedItems;
  privacy?: UserPrivacy;
  private_super_following?: boolean;
  profile_bio?: UserProfileBio;
  profile_metadata?: UserProfileMetadata;
  profile_translation?: UserProfileTranslation;
  properties?: UserProperties;
  relationship_counts?: UserRelationshipCounts;
  relationship_perspectives?: {};
  rest_id?: string;
  super_follow_eligible?: boolean;
  super_followed_by?: boolean;
  super_following?: boolean;
  tweet_counts?: UserTweetCounts;
  verification?: UserVerification;
  website?: UserWebsite;
}

interface UserActionCounts {
  favorites_count?: number;
}

interface UserAvatar {
  image_url?: string;
}

interface UserBanner {
  image_url?: string;
}

interface UserCore {
  created_at?: string;
  name?: string;
  screen_name?: string;
}

interface UserDmPermissions {
  can_dm?: boolean;
}

interface UserLocation {
  location?: string;
}

interface UserMediaPermissions {
  can_media_tag?: boolean;
}

interface UserPinnedItems {
  tweet_ids_str?: string[];
}

interface UserPrivacy {
  protected?: boolean;
}

interface UserProfileBio {
  description?: string;
  entities?: UserProfileBioEntities;
  withheld_in_countries?: unknown[];
}

interface UserProfileBioEntities {
  description?: UserProfileBioEntitiesDescription;
  url?: UserProfileBioEntitiesUrl;
}

interface UserProfileBioEntitiesDescription {
  symbols: UserProfileBioEntitiesDescriptionSymbolsItem[];
  hashtags?: UserProfileBioEntitiesDescriptionHashtagsItem[];
  user_mentions?: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionSymbolsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices?: number[];  // 14/9
  text?: string;  // 14/9
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str?: string;  // 6/4
  indices?: number[];  // 6/4
  name?: string;  // 6/4
  screen_name?: string;  // 6/4
}

interface UserProfileBioEntitiesUrl {
  urls?: UserProfileBioEntitiesUrlUrlsItem[];
}

interface UserProfileBioEntitiesUrlUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface UserProfileMetadata {
  profile_interstitial_type?: string;
  profile_link_color?: string;
}

interface UserProfileTranslation {
  translator_type_enum?: string;
}

interface UserProperties {
  has_extended_profile?: boolean;
}

interface UserRelationshipCounts {
  followers?: number;
  following?: number;
}

interface UserTweetCounts {
  media_tweets?: number;
  tweets?: number;
}

interface UserVerification {
  is_blue_verified?: boolean;
}

interface UserWebsite {
  url?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "list_by_rest_id": {
      "rest_id": "1446054017499480064",
      "subscribers_timeline": {
        "id": "VGltZWxpbmU6CgAJFBFqd6cVQAAA",
        "timeline": {
          "id": "SubscribersProduct-Timeline",
          "instructions": [
            {
              "__typename": "TimelineClearCache",
              "direction": "Top",
              "entries": [
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "SubscribersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "897580268911022082",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 1733
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1582134322181640192/618pEDBJ_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/897580268911022082/1569446225"
                          },
                          "core": {
                            "created_at": "Tue Aug 15 22:06:27 +0000 2017",
                            "name": "Stefan “Tommy Pickles” Purlija",
                            "screen_name": "PurlijaSounds"
                          },
                          "dm_permissions": {
                            "can_dm": false
                          },
                          "exclusive_tweet_following": false,
                          "identity_profile_labels_highlighted_label": {},
                          "location": {
                            "location": "Manhattan, NY"
                          },
                          "media_permissions": {
                            "can_media_tag": true
                          },
                          "notifications_settings": {},
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1810912598751117570",
                              "1810912598751117570"
                            ]
                          },
                          "privacy": {
                            "protected": true
                          },
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Music Production. Video game enthusiast. Cards. Top-rated EBAY seller.",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  },
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  }
                                ],
                                "symbols": [
                                  {
                                    "indices": [
                                      28,
                                      28
                                    ],
                                    "text": "BTC"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  },
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  }
                                ]
                              }
                            },
                            "withheld_in_countries": []
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
                            "followers": 19,
                            "following": 156
                          },
                          "relationship_perspectives": {},
                          "rest_id": "897580268911022082",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 11,
                            "tweets": 161
                          },
                          "website": {
                            "url": "https://t.co/Q4hbNRX80f"
                          },
                          "verification": {
                            "is_blue_verified": false
                          }
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "1818357571140109350|1870230281189851114"
                  },
                  "entry_id": "user-897580268911022082",
                  "sort_index": "1870230281189851136"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "SubscribersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "897580268911022082",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 1733
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1582134322181640192/618pEDBJ_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/897580268911022082/1569446225"
                          },
                          "core": {
                            "created_at": "Tue Aug 15 22:06:27 +0000 2017",
                            "name": "Stefan “Tommy Pickles” Purlija",
                            "screen_name": "PurlijaSounds"
                          },
                          "dm_permissions": {
                            "can_dm": false
                          },
                          "exclusive_tweet_following": false,
                          "identity_profile_labels_highlighted_label": {},
                          "location": {
                            "location": "Manhattan, NY"
                          },
                          "media_permissions": {
                            "can_media_tag": true
                          },
                          "notifications_settings": {},
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1810912598751117570",
                              "1810912598751117570"
                            ]
                          },
                          "privacy": {
                            "protected": true
                          },
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Music Production. Video game enthusiast. Cards. Top-rated EBAY seller.",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  },
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  }
                                ],
                                "symbols": [
                                  {
                                    "indices": [
                                      28,
                                      28
                                    ],
                                    "text": "BTC"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  },
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  }
                                ]
                              }
                            },
                            "withheld_in_countries": []
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
                            "followers": 19,
                            "following": 156
                          },
                          "relationship_perspectives": {},
                          "rest_id": "897580268911022082",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 11,
                            "tweets": 161
                          },
                          "website": {
                            "url": "https://t.co/Q4hbNRX80f"
                          },
                          "verification": {
                            "is_blue_verified": false
                          }
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "1818357571140109350|1870230281189851114"
                  },
                  "entry_id": "user-897580268911022082",
                  "sort_index": "1870230281189851136"
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
                      "component": "SubscribersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "897580268911022082",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 1733
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1582134322181640192/618pEDBJ_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/897580268911022082/1569446225"
                          },
                          "core": {
                            "created_at": "Tue Aug 15 22:06:27 +0000 2017",
                            "name": "Stefan “Tommy Pickles” Purlija",
                            "screen_name": "PurlijaSounds"
                          },
                          "dm_permissions": {
                            "can_dm": false
                          },
                          "exclusive_tweet_following": false,
                          "identity_profile_labels_highlighted_label": {},
                          "location": {
                            "location": "Manhattan, NY"
                          },
                          "media_permissions": {
                            "can_media_tag": true
                          },
                          "notifications_settings": {},
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1810912598751117570",
                              "1810912598751117570"
                            ]
                          },
                          "privacy": {
                            "protected": true
                          },
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Music Production. Video game enthusiast. Cards. Top-rated EBAY seller.",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  },
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  }
                                ],
                                "symbols": [
                                  {
                                    "indices": [
                                      28,
                                      28
                                    ],
                                    "text": "BTC"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  },
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  }
                                ]
                              }
                            },
                            "withheld_in_countries": []
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
                            "followers": 19,
                            "following": 156
                          },
                          "relationship_perspectives": {},
                          "rest_id": "897580268911022082",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 11,
                            "tweets": 161
                          },
                          "website": {
                            "url": "https://t.co/Q4hbNRX80f"
                          },
                          "verification": {
                            "is_blue_verified": false
                          }
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "1818357571140109350|1870230281189851114"
                  },
                  "entry_id": "user-897580268911022082",
                  "sort_index": "1870230281189851136"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "SubscribersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "897580268911022082",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 1733
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1582134322181640192/618pEDBJ_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/897580268911022082/1569446225"
                          },
                          "core": {
                            "created_at": "Tue Aug 15 22:06:27 +0000 2017",
                            "name": "Stefan “Tommy Pickles” Purlija",
                            "screen_name": "PurlijaSounds"
                          },
                          "dm_permissions": {
                            "can_dm": false
                          },
                          "exclusive_tweet_following": false,
                          "identity_profile_labels_highlighted_label": {},
                          "location": {
                            "location": "Manhattan, NY"
                          },
                          "media_permissions": {
                            "can_media_tag": true
                          },
                          "notifications_settings": {},
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1810912598751117570",
                              "1810912598751117570"
                            ]
                          },
                          "privacy": {
                            "protected": true
                          },
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Music Production. Video game enthusiast. Cards. Top-rated EBAY seller.",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  },
                                  {
                                    "indices": [
                                      97,
                                      97
                                    ],
                                    "text": "MAGA"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      63,
                                      63
                                    ],
                                    "name": "",
                                    "screen_name": "Matrix_MTF"
                                  }
                                ],
                                "symbols": [
                                  {
                                    "indices": [
                                      28,
                                      28
                                    ],
                                    "text": "BTC"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  },
                                  {
                                    "display_url": "ebay.com/usr/stillaknic…",
                                    "expanded_url": "https://www.ebay.com/usr/stillaknicksfan",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/Q4hbNRX80f"
                                  }
                                ]
                              }
                            },
                            "withheld_in_countries": []
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
                            "followers": 19,
                            "following": 156
                          },
                          "relationship_perspectives": {},
                          "rest_id": "897580268911022082",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 11,
                            "tweets": 161
                          },
                          "website": {
                            "url": "https://t.co/Q4hbNRX80f"
                          },
                          "verification": {
                            "is_blue_verified": false
                          }
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "1818357571140109350|1870230281189851114"
                  },
                  "entry_id": "user-897580268911022082",
                  "sort_index": "1870230281189851136"
                }
              ]
            }
          ]
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
    "list_by_rest_id": {
      "rest_id": "1446054017499480064",
      "subscribers_timeline": {
        "id": "VGltZWxpbmU6CgAJFBFqd6cVQAAA",
        "timeline": {
          "id": "SubscribersProduct-Timeline",
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
```

## Notes

- Pagination: uses cursor_type
- GraphQL-style response with 3 `__typename` discriminated type(s)
