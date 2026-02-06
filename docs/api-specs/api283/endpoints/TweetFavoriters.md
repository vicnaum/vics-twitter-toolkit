# Tweet Favoriters

**Route:** `GET /TweetFavoriters`
**API:** `twitter283.p.rapidapi.com`
**Description:** Tweet Favoriters

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | No | `1768778186186195177` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: TweetFavoritersResponse
interface TweetFavoritersResponse {
  data: TweetFavoritersResponseData;
}

interface TweetFavoritersResponseData {
  favoriters_timeline: TweetFavoritersResponseDataFavoritersTimeline;
}

interface TweetFavoritersResponseDataFavoritersTimeline {
  id: string;
  timeline: TweetFavoritersResponseDataFavoritersTimelineTimeline;
}

interface TweetFavoritersResponseDataFavoritersTimelineTimeline {
  id: string;
  instructions: TimelineAddEntriesItem[];
  response_objects: TweetFavoritersResponseDataFavoritersTimelineTimelineResponseObjects;
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
  hashtags?: UserProfileBioEntitiesDescriptionHashtagsItem[];
  user_mentions?: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices?: number[];  // 7/3
  text?: string;  // 7/3
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str?: string;  // 7/6
  indices?: number[];  // 7/6
  name?: string;  // 7/6
  screen_name?: string;  // 7/6
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

interface TweetFavoritersResponseDataFavoritersTimelineTimelineResponseObjects {
  feedback_actions: unknown[];
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "favoriters_timeline": {
      "id": "VGltZWxpbmU6CgAeGIv2Y5IWgOkA",
      "timeline": {
        "id": "Favoriters-1768778186186195177",
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
                      "rest_id": "22878291",
                      "result": {
                        "__typename": "User",
                        "action_counts": {
                          "favorites_count": 482
                        },
                        "avatar": {
                          "image_url": "https://pbs.twimg.com/profile_images/1588499196243386368/ghVmU1oF_normal.jpg"
                        },
                        "banner": {
                          "image_url": "https://pbs.twimg.com/profile_banners/450916096/1655470450"
                        },
                        "core": {
                          "created_at": "Thu Mar 05 04:12:34 +0000 2009",
                          "name": "haiyong-e/acc",
                          "screen_name": "haiyong"
                        },
                        "dm_permissions": {
                          "can_dm": false
                        },
                        "exclusive_tweet_following": false,
                        "identity_profile_labels_highlighted_label": {},
                        "location": {
                          "location": "Shanghai"
                        },
                        "media_permissions": {
                          "can_media_tag": true
                        },
                        "notifications_settings": {},
                        "pinned_items": {
                          "tweet_ids_str": [
                            "1358834599594520579",
                            "1358834599594520579"
                          ]
                        },
                        "privacy": {},
                        "private_super_following": false,
                        "profile_bio": {
                          "description": "A Lisper",
                          "entities": {
                            "description": {
                              "hashtags": [
                                {
                                  "indices": [
                                    70,
                                    70
                                  ],
                                  "text": "twitter"
                                },
                                {
                                  "indices": [
                                    70,
                                    70
                                  ],
                                  "text": "twitter"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "0",
                                  "indices": [
                                    53,
                                    53
                                  ],
                                  "name": "",
                                  "screen_name": "KeepboredBr"
                                },
                                {
                                  "id_str": "0",
                                  "indices": [
                                    53,
                                    53
                                  ],
                                  "name": "",
                                  "screen_name": "KeepboredBr"
                                }
                              ]
                            },
                            "url": {
                              "urls": [
                                {
                                  "display_url": "instagram.com/cutehat120/",
                                  "expanded_url": "https://www.instagram.com/cutehat120/",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/Hm9xaBmxeq"
                                },
                                {
                                  "display_url": "instagram.com/cutehat120/",
                                  "expanded_url": "https://www.instagram.com/cutehat120/",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/Hm9xaBmxeq"
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
                          "has_extended_profile": false
                        },
                        "relationship_counts": {
                          "followers": 2,
                          "following": 38
                        },
                        "relationship_perspectives": {},
                        "rest_id": "22878291",
                        "super_follow_eligible": false,
                        "super_followed_by": false,
                        "super_following": false,
                        "tweet_counts": {
                          "media_tweets": 0,
                          "tweets": 9
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
                  "value": "HCaAgIDXtdz85DEAAA=="
                },
                "entry_id": "user-22878291",
                "sort_index": "1793832818236719104"
              },
              {
                "content": {
                  "__typename": "TimelineTimelineItem",
                  "content": {
                    "__typename": "TimelineUser",
                    "display_type": "User",
                    "user_results": {
                      "rest_id": "22878291",
                      "result": {
                        "__typename": "User",
                        "action_counts": {
                          "favorites_count": 482
                        },
                        "avatar": {
                          "image_url": "https://pbs.twimg.com/profile_images/1588499196243386368/ghVmU1oF_normal.jpg"
                        },
                        "banner": {
                          "image_url": "https://pbs.twimg.com/profile_banners/450916096/1655470450"
                        },
                        "core": {
                          "created_at": "Thu Mar 05 04:12:34 +0000 2009",
                          "name": "haiyong-e/acc",
                          "screen_name": "haiyong"
                        },
                        "dm_permissions": {
                          "can_dm": false
                        },
                        "exclusive_tweet_following": false,
                        "identity_profile_labels_highlighted_label": {},
                        "location": {
                          "location": "Shanghai"
                        },
                        "media_permissions": {
                          "can_media_tag": true
                        },
                        "notifications_settings": {},
                        "pinned_items": {
                          "tweet_ids_str": [
                            "1358834599594520579",
                            "1358834599594520579"
                          ]
                        },
                        "privacy": {},
                        "private_super_following": false,
                        "profile_bio": {
                          "description": "A Lisper",
                          "entities": {
                            "description": {
                              "hashtags": [
                                {
                                  "indices": [
                                    70,
                                    70
                                  ],
                                  "text": "twitter"
                                },
                                {
                                  "indices": [
                                    70,
                                    70
                                  ],
                                  "text": "twitter"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "0",
                                  "indices": [
                                    53,
                                    53
                                  ],
                                  "name": "",
                                  "screen_name": "KeepboredBr"
                                },
                                {
                                  "id_str": "0",
                                  "indices": [
                                    53,
                                    53
                                  ],
                                  "name": "",
                                  "screen_name": "KeepboredBr"
                                }
                              ]
                            },
                            "url": {
                              "urls": [
                                {
                                  "display_url": "instagram.com/cutehat120/",
                                  "expanded_url": "https://www.instagram.com/cutehat120/",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/Hm9xaBmxeq"
                                },
                                {
                                  "display_url": "instagram.com/cutehat120/",
                                  "expanded_url": "https://www.instagram.com/cutehat120/",
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "url": "https://t.co/Hm9xaBmxeq"
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
                          "has_extended_profile": false
                        },
                        "relationship_counts": {
                          "followers": 2,
                          "following": 38
                        },
                        "relationship_perspectives": {},
                        "rest_id": "22878291",
                        "super_follow_eligible": false,
                        "super_followed_by": false,
                        "super_following": false,
                        "tweet_counts": {
                          "media_tweets": 0,
                          "tweets": 9
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
                  "value": "HCaAgIDXtdz85DEAAA=="
                },
                "entry_id": "user-22878291",
                "sort_index": "1793832818236719104"
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
    "favoriters_timeline": {
      "id": "VGltZWxpbmU6CgAeGIv2Y5IWgOkA",
      "timeline": {
        "id": "Favoriters-1768778186186195177",
        "instructions": [
          {
            "__typename": "TimelineAddEntries",
            "entries": [
              {
                "content": {},
                "entry_id": "user-22878291",
                "sort_index": "1793832818236719104"
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
