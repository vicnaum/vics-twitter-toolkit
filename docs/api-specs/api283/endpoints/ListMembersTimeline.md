# List Members

**Route:** `GET /ListMembersTimeline`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET ListMembersTimeline

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| list_id | STRING | Yes | `1446054017499480064` |

## Response Schema

```typescript
// Root: ListMembersResponse
interface ListMembersResponse {
  data: ListMembersResponseData;
}

interface ListMembersResponseData {
  list_by_rest_id: ListMembersResponseDataListByRestId;
}

interface ListMembersResponseDataListByRestId {
  members_timeline: ListMembersResponseDataListByRestIdMembersTimeline;
  rest_id: string;
}

interface ListMembersResponseDataListByRestIdMembersTimeline {
  id: string;
  timeline: ListMembersResponseDataListByRestIdMembersTimelineTimeline;
}

interface ListMembersResponseDataListByRestIdMembersTimelineTimeline {
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
  privacy?: {};
  private_super_following?: boolean;
  profile_bio?: UserProfileBio;
  profile_image_shape?: string;
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
  hashtags: UserProfileBioEntitiesDescriptionHashtagsItem[];
  urls?: UserProfileBioEntitiesDescriptionUrlsItem[];
  user_mentions?: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionUrlsItem {
  display_url?: string;  // 4/2
  expanded_url?: string;  // 4/2
  indices?: number[];  // 4/2
  url?: string;  // 4/2
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str?: string;  // 30/6
  indices?: number[];  // 30/6
  name?: string;  // 30/6
  screen_name?: string;  // 30/6
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
  verified_type?: string;
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
      "rest_id": "1539497752140206080",
      "members_timeline": {
        "id": "VGltZWxpbmU6CgAIFV1lDIjUUAAA",
        "timeline": {
          "id": "MembersProduct-Timeline",
          "instructions": [
            {
              "__typename": "TimelineClearCache",
              "direction": "Top",
              "entries": [
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "MembersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "1985065796511633408",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 118
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1985069972549165056/3Yzh9dOj_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/1985065796511633408/1762113090"
                          },
                          "core": {
                            "created_at": "Sun Nov 02 19:25:54 +0000 2025",
                            "name": "Jan Disselhoff",
                            "screen_name": "JDisselh"
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
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1997671607389634725",
                              "1997671607389634725"
                            ]
                          },
                          "privacy": {},
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "text": "Girldad"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  }
                                ],
                                "urls": [
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  },
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
                                  },
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
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
                            "followers": 101,
                            "following": 45
                          },
                          "relationship_perspectives": {},
                          "rest_id": "1985065796511633408",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 6,
                            "tweets": 77
                          },
                          "website": {
                            "url": ""
                          },
                          "verification": {
                            "is_blue_verified": false,
                            "verified_type": "Business"
                          },
                          "profile_image_shape": "Square"
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "6108034049922207746|2019765237917417450"
                  },
                  "entry_id": "user-1985065796511633408",
                  "sort_index": "2019765237917417472"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "MembersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "1985065796511633408",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 118
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1985069972549165056/3Yzh9dOj_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/1985065796511633408/1762113090"
                          },
                          "core": {
                            "created_at": "Sun Nov 02 19:25:54 +0000 2025",
                            "name": "Jan Disselhoff",
                            "screen_name": "JDisselh"
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
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1997671607389634725",
                              "1997671607389634725"
                            ]
                          },
                          "privacy": {},
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "text": "Girldad"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  }
                                ],
                                "urls": [
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  },
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
                                  },
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
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
                            "followers": 101,
                            "following": 45
                          },
                          "relationship_perspectives": {},
                          "rest_id": "1985065796511633408",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 6,
                            "tweets": 77
                          },
                          "website": {
                            "url": ""
                          },
                          "verification": {
                            "is_blue_verified": false,
                            "verified_type": "Business"
                          },
                          "profile_image_shape": "Square"
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "6108034049922207746|2019765237917417450"
                  },
                  "entry_id": "user-1985065796511633408",
                  "sort_index": "2019765237917417472"
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
                      "component": "MembersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "1985065796511633408",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 118
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1985069972549165056/3Yzh9dOj_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/1985065796511633408/1762113090"
                          },
                          "core": {
                            "created_at": "Sun Nov 02 19:25:54 +0000 2025",
                            "name": "Jan Disselhoff",
                            "screen_name": "JDisselh"
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
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1997671607389634725",
                              "1997671607389634725"
                            ]
                          },
                          "privacy": {},
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "text": "Girldad"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  }
                                ],
                                "urls": [
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  },
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
                                  },
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
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
                            "followers": 101,
                            "following": 45
                          },
                          "relationship_perspectives": {},
                          "rest_id": "1985065796511633408",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 6,
                            "tweets": 77
                          },
                          "website": {
                            "url": ""
                          },
                          "verification": {
                            "is_blue_verified": false,
                            "verified_type": "Business"
                          },
                          "profile_image_shape": "Square"
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "6108034049922207746|2019765237917417450"
                  },
                  "entry_id": "user-1985065796511633408",
                  "sort_index": "2019765237917417472"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "MembersSgs",
                      "element": "user"
                    },
                    "content": {
                      "__typename": "TimelineUser",
                      "display_type": "User",
                      "user_results": {
                        "rest_id": "1985065796511633408",
                        "result": {
                          "__typename": "User",
                          "action_counts": {
                            "favorites_count": 118
                          },
                          "avatar": {
                            "image_url": "https://pbs.twimg.com/profile_images/1985069972549165056/3Yzh9dOj_normal.jpg"
                          },
                          "banner": {
                            "image_url": "https://pbs.twimg.com/profile_banners/1985065796511633408/1762113090"
                          },
                          "core": {
                            "created_at": "Sun Nov 02 19:25:54 +0000 2025",
                            "name": "Jan Disselhoff",
                            "screen_name": "JDisselh"
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
                          "pinned_items": {
                            "tweet_ids_str": [
                              "1997671607389634725",
                              "1997671607389634725"
                            ]
                          },
                          "privacy": {},
                          "private_super_following": false,
                          "profile_bio": {
                            "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
                            "entities": {
                              "description": {
                                "hashtags": [
                                  {
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "text": "Girldad"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  },
                                  {
                                    "id_str": "0",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "name": "",
                                    "screen_name": "inferact"
                                  }
                                ],
                                "urls": [
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  },
                                  {
                                    "display_url": "arena.ai/jobs",
                                    "expanded_url": "http://arena.ai/jobs",
                                    "indices": [
                                      143,
                                      143
                                    ],
                                    "url": "https://t.co/XBZCrseaWF"
                                  }
                                ]
                              },
                              "url": {
                                "urls": [
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
                                  },
                                  {
                                    "display_url": "axiommath.ai",
                                    "expanded_url": "https://axiommath.ai",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/2zFOxzvCGq"
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
                            "followers": 101,
                            "following": 45
                          },
                          "relationship_perspectives": {},
                          "rest_id": "1985065796511633408",
                          "super_follow_eligible": false,
                          "super_followed_by": false,
                          "super_following": false,
                          "tweet_counts": {
                            "media_tweets": 6,
                            "tweets": 77
                          },
                          "website": {
                            "url": ""
                          },
                          "verification": {
                            "is_blue_verified": false,
                            "verified_type": "Business"
                          },
                          "profile_image_shape": "Square"
                        }
                      }
                    },
                    "cursor_type": "Bottom",
                    "value": "6108034049922207746|2019765237917417450"
                  },
                  "entry_id": "user-1985065796511633408",
                  "sort_index": "2019765237917417472"
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
      "rest_id": "1539497752140206080",
      "members_timeline": {
        "id": "VGltZWxpbmU6CgAIFV1lDIjUUAAA",
        "timeline": {
          "id": "MembersProduct-Timeline",
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
