# Tweet Retweeters

**Route:** `GET /TweetRetweeters`
**API:** `twitter283.p.rapidapi.com`
**Description:** Tweet Retweeters

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| tweet_id | STRING | Yes | `1768778186186195177` |

## Response Schema

```typescript
// Root: TweetRetweetersResponse
interface TweetRetweetersResponse {
  data: TweetRetweetersResponseData;
}

interface TweetRetweetersResponseData {
  retweeters_timeline: TweetRetweetersResponseDataRetweetersTimeline;
}

interface TweetRetweetersResponseDataRetweetersTimeline {
  id: string;
  timeline: TweetRetweetersResponseDataRetweetersTimelineTimeline;
}

interface TweetRetweetersResponseDataRetweetersTimelineTimeline {
  id: string;
  instructions: TimelineAddEntriesItem[];
  response_objects: TweetRetweetersResponseDataRetweetersTimelineTimelineResponseObjects;
}

interface TimelineAddEntriesItem {
  __typename: string;
  entries: TimelineAddEntriesItemEntriesItem[];
}

interface TimelineAddEntriesItemEntriesItem {
  content: TimelineTimelineItem;  // 102/102
  entry_id: string;  // 102/102
  sort_index: string;  // 102/102
}

interface TimelineTimelineItem {
  __typename?: string;
  content?: TimelineUser;
  cursor_type?: string;
  value?: string;
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
}

interface UserProfileBioEntities {
  description?: UserProfileBioEntitiesDescription;
  url?: UserProfileBioEntitiesUrl;
}

interface UserProfileBioEntitiesDescription {
  symbols: UserProfileBioEntitiesDescriptionSymbolsItem[];
  hashtags?: UserProfileBioEntitiesDescriptionHashtagsItem[];
  urls?: UserProfileBioEntitiesDescriptionUrlsItem[];
  user_mentions?: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionSymbolsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices?: number[];  // 14/5
  text?: string;  // 14/5
}

interface UserProfileBioEntitiesDescriptionUrlsItem {
  display_url?: string;  // 5/2
  expanded_url?: string;  // 5/2
  indices?: number[];  // 5/2
  url?: string;  // 5/2
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str?: string;
  indices?: number[];
  name?: string;
  screen_name?: string;
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

interface TweetRetweetersResponseDataRetweetersTimelineTimelineResponseObjects {
  feedback_actions: unknown[];
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "retweeters_timeline": {
      "id": "VGltZWxpbmU6CgAdGIv2Y5IWgOkA",
      "timeline": {
        "id": "Retweeters-1768778186186195177",
        "instructions": [
          {
            "__typename": "TimelineAddEntries",
            "entries": [
              {
                "content": {
                  "__typename": "TimelineTimelineItem",
                  "content": {
                    "__typename": "TimelineUser",
                    "display_type": "User",
                    "user_results": {
                      "rest_id": "35848766",
                      "result": {
                        "__typename": "User",
                        "action_counts": {
                          "favorites_count": 75835
                        },
                        "avatar": {
                          "image_url": "https://pbs.twimg.com/profile_images/1749913843349028864/nIsKG0ie_normal.png"
                        },
                        "banner": {
                          "image_url": "https://pbs.twimg.com/profile_banners/35848766/1402682163"
                        },
                        "core": {
                          "created_at": "Mon Apr 27 20:22:49 +0000 2009",
                          "name": "Maritza Mercado 🇺🇸",
                          "screen_name": "TatianaBru"
                        },
                        "dm_permissions": {
                          "can_dm": true
                        },
                        "exclusive_tweet_following": false,
                        "identity_profile_labels_highlighted_label": {},
                        "location": {
                          "location": "Global Citizen"
                        },
                        "media_permissions": {
                          "can_media_tag": false
                        },
                        "notifications_settings": {},
                        "pinned_items": {
                          "tweet_ids_str": [
                            "1513192657509658627",
                            "1513192657509658627"
                          ]
                        },
                        "privacy": {},
                        "private_super_following": false,
                        "profile_bio": {
                          "description": "Favors the Unique & Eclectic; Believe in #freedom from tyranny; God Bless the #US & @Pontifex",
                          "entities": {
                            "description": {
                              "hashtags": [
                                {
                                  "indices": [
                                    41,
                                    41
                                  ],
                                  "text": "freedom"
                                },
                                {
                                  "indices": [
                                    41,
                                    41
                                  ],
                                  "text": "freedom"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "0",
                                  "indices": [
                                    84,
                                    84
                                  ],
                                  "name": "",
                                  "screen_name": "Pontifex"
                                },
                                {
                                  "id_str": "0",
                                  "indices": [
                                    84,
                                    84
                                  ],
                                  "name": "",
                                  "screen_name": "Pontifex"
                                }
                              ],
                              "urls": [
                                {
                                  "display_url": "SpaceX.com",
                                  "expanded_url": "http://SpaceX.com",
                                  "indices": [
                                    56,
                                    56
                                  ],
                                  "url": "https://t.co/MIMtGqTHSV"
                                },
                                {
                                  "display_url": "SpaceX.com",
                                  "expanded_url": "http://SpaceX.com",
                                  "indices": [
                                    56,
                                    56
                                  ],
                                  "url": "https://t.co/MIMtGqTHSV"
                                }
                              ],
                              "symbols": [
                                {
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "text": "NFTs"
                                }
                              ]
                            },
                            "url": {
                              "urls": [
                                {
                                  "display_url": "instagram.com/aedabitcontemp…",
                                  "expanded_url": "https://www.instagram.com/aedabitcontemporaryvignetteart",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/sSoz9at7hF"
                                },
                                {
                                  "display_url": "instagram.com/aedabitcontemp…",
                                  "expanded_url": "https://www.instagram.com/aedabitcontemporaryvignetteart",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/sSoz9at7hF"
                                }
                              ]
                            }
                          }
                        },
                        "profile_metadata": {
                          "profile_interstitial_type": "",
                          "profile_link_color": "9D582E"
                        },
                        "profile_translation": {
                          "translator_type_enum": "None"
                        },
                        "properties": {
                          "has_extended_profile": true
                        },
                        "relationship_counts": {
                          "followers": 2933,
                          "following": 2547
                        },
                        "relationship_perspectives": {},
                        "rest_id": "35848766",
                        "super_follow_eligible": false,
                        "super_followed_by": false,
                        "super_following": false,
                        "tweet_counts": {
                          "media_tweets": 563,
                          "tweets": 72418
                        },
                        "website": {
                          "url": ""
                        },
                        "verification": {
                          "is_blue_verified": false
                        }
                      }
                    }
                  },
                  "cursor_type": "Top",
                  "value": "HCaAgIDS1vH85DEAAA=="
                },
                "entry_id": "user-35848766",
                "sort_index": "1793833183437914112"
              },
              {
                "content": {
                  "__typename": "TimelineTimelineItem",
                  "content": {
                    "__typename": "TimelineUser",
                    "display_type": "User",
                    "user_results": {
                      "rest_id": "35848766",
                      "result": {
                        "__typename": "User",
                        "action_counts": {
                          "favorites_count": 75835
                        },
                        "avatar": {
                          "image_url": "https://pbs.twimg.com/profile_images/1749913843349028864/nIsKG0ie_normal.png"
                        },
                        "banner": {
                          "image_url": "https://pbs.twimg.com/profile_banners/35848766/1402682163"
                        },
                        "core": {
                          "created_at": "Mon Apr 27 20:22:49 +0000 2009",
                          "name": "Maritza Mercado 🇺🇸",
                          "screen_name": "TatianaBru"
                        },
                        "dm_permissions": {
                          "can_dm": true
                        },
                        "exclusive_tweet_following": false,
                        "identity_profile_labels_highlighted_label": {},
                        "location": {
                          "location": "Global Citizen"
                        },
                        "media_permissions": {
                          "can_media_tag": false
                        },
                        "notifications_settings": {},
                        "pinned_items": {
                          "tweet_ids_str": [
                            "1513192657509658627",
                            "1513192657509658627"
                          ]
                        },
                        "privacy": {},
                        "private_super_following": false,
                        "profile_bio": {
                          "description": "Favors the Unique & Eclectic; Believe in #freedom from tyranny; God Bless the #US & @Pontifex",
                          "entities": {
                            "description": {
                              "hashtags": [
                                {
                                  "indices": [
                                    41,
                                    41
                                  ],
                                  "text": "freedom"
                                },
                                {
                                  "indices": [
                                    41,
                                    41
                                  ],
                                  "text": "freedom"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "0",
                                  "indices": [
                                    84,
                                    84
                                  ],
                                  "name": "",
                                  "screen_name": "Pontifex"
                                },
                                {
                                  "id_str": "0",
                                  "indices": [
                                    84,
                                    84
                                  ],
                                  "name": "",
                                  "screen_name": "Pontifex"
                                }
                              ],
                              "urls": [
                                {
                                  "display_url": "SpaceX.com",
                                  "expanded_url": "http://SpaceX.com",
                                  "indices": [
                                    56,
                                    56
                                  ],
                                  "url": "https://t.co/MIMtGqTHSV"
                                },
                                {
                                  "display_url": "SpaceX.com",
                                  "expanded_url": "http://SpaceX.com",
                                  "indices": [
                                    56,
                                    56
                                  ],
                                  "url": "https://t.co/MIMtGqTHSV"
                                }
                              ],
                              "symbols": [
                                {
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "text": "NFTs"
                                }
                              ]
                            },
                            "url": {
                              "urls": [
                                {
                                  "display_url": "instagram.com/aedabitcontemp…",
                                  "expanded_url": "https://www.instagram.com/aedabitcontemporaryvignetteart",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/sSoz9at7hF"
                                },
                                {
                                  "display_url": "instagram.com/aedabitcontemp…",
                                  "expanded_url": "https://www.instagram.com/aedabitcontemporaryvignetteart",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/sSoz9at7hF"
                                }
                              ]
                            }
                          }
                        },
                        "profile_metadata": {
                          "profile_interstitial_type": "",
                          "profile_link_color": "9D582E"
                        },
                        "profile_translation": {
                          "translator_type_enum": "None"
                        },
                        "properties": {
                          "has_extended_profile": true
                        },
                        "relationship_counts": {
                          "followers": 2933,
                          "following": 2547
                        },
                        "relationship_perspectives": {},
                        "rest_id": "35848766",
                        "super_follow_eligible": false,
                        "super_followed_by": false,
                        "super_following": false,
                        "tweet_counts": {
                          "media_tweets": 563,
                          "tweets": 72418
                        },
                        "website": {
                          "url": ""
                        },
                        "verification": {
                          "is_blue_verified": false
                        }
                      }
                    }
                  },
                  "cursor_type": "Top",
                  "value": "HCaAgIDS1vH85DEAAA=="
                },
                "entry_id": "user-35848766",
                "sort_index": "1793833183437914112"
              }
            ]
          }
        ],
        "response_objects": {
          "feedback_actions": []
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
    "retweeters_timeline": {
      "id": "VGltZWxpbmU6CgAdGIv2Y5IWgOkA",
      "timeline": {
        "id": "Retweeters-1768778186186195177",
        "instructions": [
          {
            "__typename": "TimelineAddEntries",
            "entries": [
              {
                "content": {},
                "entry_id": "user-35848766",
                "sort_index": "1793833183437914112"
              }
            ]
          }
        ],
        "response_objects": {
          "feedback_actions": []
        }
      }
    }
  }
}
```

## Notes

- Pagination: uses cursor_type
