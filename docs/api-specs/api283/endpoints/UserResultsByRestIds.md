# UserResultsByRestIds

**Route:** `GET /UserResultsByRestIds`
**API:** `twitter283.p.rapidapi.com`
**Description:** Users By Rest IDs

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_ids | STRING | Yes | `951329744804392960,1055894724245155841` |

## Response Schema

```typescript
// Root: UserResultsByRestIdsResponse
interface UserResultsByRestIdsResponse {
  data: UserResultsByRestIdsResponseData;
}

interface UserResultsByRestIdsResponseData {
  users: UserResultsByRestIdsResponseDataUsersItem[];
}

interface UserResultsByRestIdsResponseDataUsersItem {
  rest_id: string;  // 2/2
  result: User;  // 2/2
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
}

interface UserProfileBioEntities {
  description?: UserProfileBioEntitiesDescription;
  url?: UserProfileBioEntitiesUrl;
}

interface UserProfileBioEntitiesDescription {
  hashtags: UserProfileBioEntitiesDescriptionHashtagsItem[];
  user_mentions: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
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
    "users": [
      {
        "rest_id": "951329744804392960",
        "result": {
          "__typename": "User",
          "action_counts": {
            "favorites_count": 10402
          },
          "avatar": {
            "image_url": "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_normal.jpg"
          },
          "banner": {
            "image_url": "https://pbs.twimg.com/profile_banners/951329744804392960/1709050744"
          },
          "core": {
            "created_at": "Thu Jan 11 05:47:40 +0000 2018",
            "name": "Solana",
            "screen_name": "solana"
          },
          "dm_permissions": {
            "can_dm": true
          },
          "exclusive_tweet_following": false,
          "identity_profile_labels_highlighted_label": {},
          "location": {
            "location": "Switzerland"
          },
          "media_permissions": {
            "can_media_tag": true
          },
          "notifications_settings": {},
          "pinned_items": {
            "tweet_ids_str": [
              "1762509355637719261",
              "1762509355637719261"
            ]
          },
          "privacy": {},
          "private_super_following": false,
          "profile_bio": {
            "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
            "entities": {
              "description": {
                "user_mentions": [
                  {
                    "id_str": "0",
                    "indices": [
                      111,
                      111
                    ],
                    "name": "",
                    "screen_name": "SolanaFndn"
                  }
                ],
                "hashtags": [
                  {
                    "indices": [
                      0,
                      0
                    ],
                    "text": "Avalanche"
                  }
                ]
              },
              "url": {
                "urls": [
                  {
                    "display_url": "solana.com",
                    "expanded_url": "http://solana.com",
                    "indices": [
                      0,
                      0
                    ],
                    "url": "https://t.co/uk5hidtSx5"
                  },
                  {
                    "display_url": "solana.com",
                    "expanded_url": "http://solana.com",
                    "indices": [
                      0,
                      0
                    ],
                    "url": "https://t.co/uk5hidtSx5"
                  }
                ]
              }
            }
          },
          "profile_image_shape": "Square",
          "profile_metadata": {
            "profile_interstitial_type": "",
            "profile_link_color": "7FDBB6"
          },
          "profile_translation": {
            "translator_type_enum": "None"
          },
          "properties": {
            "has_extended_profile": true
          },
          "relationship_counts": {
            "followers": 2514036,
            "following": 1063
          },
          "relationship_perspectives": {},
          "rest_id": "951329744804392960",
          "super_follow_eligible": false,
          "super_followed_by": false,
          "super_following": false,
          "tweet_counts": {
            "media_tweets": 727,
            "tweets": 8008
          },
          "website": {
            "url": "https://t.co/uk5hidtSx5"
          },
          "verification": {
            "is_blue_verified": true,
            "verified_type": "Business"
          }
        }
      },
      {
        "rest_id": "951329744804392960",
        "result": {
          "__typename": "User",
          "action_counts": {
            "favorites_count": 10402
          },
          "avatar": {
            "image_url": "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_normal.jpg"
          },
          "banner": {
            "image_url": "https://pbs.twimg.com/profile_banners/951329744804392960/1709050744"
          },
          "core": {
            "created_at": "Thu Jan 11 05:47:40 +0000 2018",
            "name": "Solana",
            "screen_name": "solana"
          },
          "dm_permissions": {
            "can_dm": true
          },
          "exclusive_tweet_following": false,
          "identity_profile_labels_highlighted_label": {},
          "location": {
            "location": "Switzerland"
          },
          "media_permissions": {
            "can_media_tag": true
          },
          "notifications_settings": {},
          "pinned_items": {
            "tweet_ids_str": [
              "1762509355637719261",
              "1762509355637719261"
            ]
          },
          "privacy": {},
          "private_super_following": false,
          "profile_bio": {
            "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
            "entities": {
              "description": {
                "user_mentions": [
                  {
                    "id_str": "0",
                    "indices": [
                      111,
                      111
                    ],
                    "name": "",
                    "screen_name": "SolanaFndn"
                  }
                ],
                "hashtags": [
                  {
                    "indices": [
                      0,
                      0
                    ],
                    "text": "Avalanche"
                  }
                ]
              },
              "url": {
                "urls": [
                  {
                    "display_url": "solana.com",
                    "expanded_url": "http://solana.com",
                    "indices": [
                      0,
                      0
                    ],
                    "url": "https://t.co/uk5hidtSx5"
                  },
                  {
                    "display_url": "solana.com",
                    "expanded_url": "http://solana.com",
                    "indices": [
                      0,
                      0
                    ],
                    "url": "https://t.co/uk5hidtSx5"
                  }
                ]
              }
            }
          },
          "profile_image_shape": "Square",
          "profile_metadata": {
            "profile_interstitial_type": "",
            "profile_link_color": "7FDBB6"
          },
          "profile_translation": {
            "translator_type_enum": "None"
          },
          "properties": {
            "has_extended_profile": true
          },
          "relationship_counts": {
            "followers": 2514036,
            "following": 1063
          },
          "relationship_perspectives": {},
          "rest_id": "951329744804392960",
          "super_follow_eligible": false,
          "super_followed_by": false,
          "super_following": false,
          "tweet_counts": {
            "media_tweets": 727,
            "tweets": 8008
          },
          "website": {
            "url": "https://t.co/uk5hidtSx5"
          },
          "verification": {
            "is_blue_verified": true,
            "verified_type": "Business"
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
    "users": [
      {
        "rest_id": "951329744804392960",
        "result": {}
      }
    ]
  }
}
```
