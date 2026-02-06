# Community Member Search

**Route:** `GET /CommunityMemberSearch`
**API:** `twitter283.p.rapidapi.com`
**Description:** Community Member Search

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| q | STRING | Yes | `CryptoCrunchApp` |
| community_id | STRING | Yes | `1502929685792976898` |

## Response Schema

```typescript
// Root: CommunityMemberSearchResponse
interface CommunityMemberSearchResponse {
  data: CommunityMemberSearchResponseData;
}

interface CommunityMemberSearchResponseData {
  community_by_rest_id: CommunityMemberSearchResponseDataCommunityByRestId;
}

interface CommunityMemberSearchResponseDataCommunityByRestId {
  member_relationship_typeahead: CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItem[];
  rest_id: string;
}

interface CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItem {
  actions: CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemActions;  // 3/3
  community_reference: CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemCommunityReference;  // 3/3
  id: string;  // 3/3
  role: string;  // 3/3
  user_results: CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemUserResults;  // 3/3
}

interface CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemActions {
  id?: string;
  remove_action_result?: CommunityMemberRemoveActionUnavailable;
}

interface CommunityMemberRemoveActionUnavailable {
  __typename?: string;
  message?: string;
  reason?: string;
}

interface CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemCommunityReference {
  rest_id?: string;
}

interface CommunityMemberSearchResponseDataCommunityByRestIdMemberRelationshipTypeaheadItemUserResults {
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
  professional?: UserProfessional;
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

interface UserProfessional {
  category?: UserProfessionalCategoryItem[];
  professional_type?: string;
  rest_id?: string;
}

interface UserProfessionalCategoryItem {
  id?: number;
  name?: string;
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
  urls: UserProfileBioEntitiesDescriptionUrlsItem[];
  hashtags?: UserProfileBioEntitiesDescriptionHashtagsItem[];
}

interface UserProfileBioEntitiesDescriptionUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices?: number[];
  text?: string;
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
    "community_by_rest_id": {
      "rest_id": "1502929685792976898",
      "member_relationship_typeahead": [
        {
          "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcDoKAAEAAAABFR/T8AoAAhTbepYcFHACAA==",
          "community_reference": {
            "rest_id": "1502929685792976898"
          },
          "role": "Admin",
          "user_results": {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "action_counts": {
                "favorites_count": 3238
              },
              "avatar": {
                "image_url": "https://pbs.twimg.com/profile_images/1716465525037875200/bWo4lIqa_normal.png"
              },
              "banner": {
                "image_url": "https://pbs.twimg.com/profile_banners/4649374704/1698072248"
              },
              "core": {
                "created_at": "Fri Dec 25 13:36:04 +0000 2015",
                "name": "CryptoCrunchApp",
                "screen_name": "CryptoCrunchApp"
              },
              "dm_permissions": {
                "can_dm": true
              },
              "exclusive_tweet_following": false,
              "identity_profile_labels_highlighted_label": {},
              "location": {
                "location": "Turn on Notifications 🔔"
              },
              "media_permissions": {
                "can_media_tag": true
              },
              "notifications_settings": {},
              "pinned_items": {
                "tweet_ids_str": [
                  "1856004500860907585",
                  "1856004500860907585"
                ]
              },
              "privacy": {},
              "private_super_following": false,
              "professional": {
                "rest_id": "1460984759727710208",
                "category": [
                  {
                    "id": 1042,
                    "name": "Content Creator"
                  },
                  {
                    "id": 1042,
                    "name": "Content Creator"
                  }
                ],
                "professional_type": "Creator"
              },
              "profile_bio": {
                "description": "Read Everything Happening in #Bitcoin and Crypto | Top Content Creator 🌠🧠\n\nDM to discuss content service 🤝\n\n🌐 https:...",
                "entities": {
                  "description": {
                    "hashtags": [
                      {
                        "indices": [
                          29,
                          29
                        ],
                        "text": "Bitcoin"
                      },
                      {
                        "indices": [
                          29,
                          29
                        ],
                        "text": "Bitcoin"
                      }
                    ],
                    "urls": [
                      {
                        "display_url": "cryptocrunchapp.com/bio/",
                        "expanded_url": "https://cryptocrunchapp.com/bio/",
                        "indices": [
                          110,
                          110
                        ],
                        "url": "https://t.co/fD3974t4y8"
                      }
                    ]
                  },
                  "url": {
                    "urls": [
                      {
                        "display_url": "t.me/addlist/nmwY8W…",
                        "expanded_url": "https://t.me/addlist/nmwY8WVHEs9mNGFl",
                        "indices": [
                          0,
                          0
                        ],
                        "url": "https://t.co/GGelX2KOOw"
                      },
                      {
                        "display_url": "t.me/addlist/nmwY8W…",
                        "expanded_url": "https://t.me/addlist/nmwY8WVHEs9mNGFl",
                        "indices": [
                          0,
                          0
                        ],
                        "url": "https://t.co/GGelX2KOOw"
                      }
                    ]
                  }
                },
                "withheld_in_countries": []
              },
              "profile_metadata": {
                "profile_interstitial_type": "",
                "profile_link_color": "19CF86"
              },
              "profile_translation": {
                "translator_type_enum": "None"
              },
              "properties": {
                "has_extended_profile": true
              },
              "relationship_counts": {
                "followers": 40402,
                "following": 503
              },
              "relationship_perspectives": {},
              "rest_id": "4649374704",
              "super_follow_eligible": true,
              "super_followed_by": false,
              "super_following": false,
              "tweet_counts": {
                "media_tweets": 7492,
                "tweets": 20092
              },
              "website": {
                "url": "https://t.co/GGelX2KOOw"
              },
              "verification": {
                "is_blue_verified": true
              }
            }
          },
          "actions": {
            "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcEFjdGlvbnM6CgABAAAAARUf0/AKAAIU23qWHBRwAgA=",
            "remove_action_result": {
              "__typename": "CommunityMemberRemoveActionUnavailable",
              "message": "Invalid community role.",
              "reason": "Unavailable"
            }
          }
        },
        {
          "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcDoKAAEAAAABFR/T8AoAAhTbepYcFHACAA==",
          "community_reference": {
            "rest_id": "1502929685792976898"
          },
          "role": "Admin",
          "user_results": {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "action_counts": {
                "favorites_count": 3238
              },
              "avatar": {
                "image_url": "https://pbs.twimg.com/profile_images/1716465525037875200/bWo4lIqa_normal.png"
              },
              "banner": {
                "image_url": "https://pbs.twimg.com/profile_banners/4649374704/1698072248"
              },
              "core": {
                "created_at": "Fri Dec 25 13:36:04 +0000 2015",
                "name": "CryptoCrunchApp",
                "screen_name": "CryptoCrunchApp"
              },
              "dm_permissions": {
                "can_dm": true
              },
              "exclusive_tweet_following": false,
              "identity_profile_labels_highlighted_label": {},
              "location": {
                "location": "Turn on Notifications 🔔"
              },
              "media_permissions": {
                "can_media_tag": true
              },
              "notifications_settings": {},
              "pinned_items": {
                "tweet_ids_str": [
                  "1856004500860907585",
                  "1856004500860907585"
                ]
              },
              "privacy": {},
              "private_super_following": false,
              "professional": {
                "rest_id": "1460984759727710208",
                "category": [
                  {
                    "id": 1042,
                    "name": "Content Creator"
                  },
                  {
                    "id": 1042,
                    "name": "Content Creator"
                  }
                ],
                "professional_type": "Creator"
              },
              "profile_bio": {
                "description": "Read Everything Happening in #Bitcoin and Crypto | Top Content Creator 🌠🧠\n\nDM to discuss content service 🤝\n\n🌐 https:...",
                "entities": {
                  "description": {
                    "hashtags": [
                      {
                        "indices": [
                          29,
                          29
                        ],
                        "text": "Bitcoin"
                      },
                      {
                        "indices": [
                          29,
                          29
                        ],
                        "text": "Bitcoin"
                      }
                    ],
                    "urls": [
                      {
                        "display_url": "cryptocrunchapp.com/bio/",
                        "expanded_url": "https://cryptocrunchapp.com/bio/",
                        "indices": [
                          110,
                          110
                        ],
                        "url": "https://t.co/fD3974t4y8"
                      }
                    ]
                  },
                  "url": {
                    "urls": [
                      {
                        "display_url": "t.me/addlist/nmwY8W…",
                        "expanded_url": "https://t.me/addlist/nmwY8WVHEs9mNGFl",
                        "indices": [
                          0,
                          0
                        ],
                        "url": "https://t.co/GGelX2KOOw"
                      },
                      {
                        "display_url": "t.me/addlist/nmwY8W…",
                        "expanded_url": "https://t.me/addlist/nmwY8WVHEs9mNGFl",
                        "indices": [
                          0,
                          0
                        ],
                        "url": "https://t.co/GGelX2KOOw"
                      }
                    ]
                  }
                },
                "withheld_in_countries": []
              },
              "profile_metadata": {
                "profile_interstitial_type": "",
                "profile_link_color": "19CF86"
              },
              "profile_translation": {
                "translator_type_enum": "None"
              },
              "properties": {
                "has_extended_profile": true
              },
              "relationship_counts": {
                "followers": 40402,
                "following": 503
              },
              "relationship_perspectives": {},
              "rest_id": "4649374704",
              "super_follow_eligible": true,
              "super_followed_by": false,
              "super_following": false,
              "tweet_counts": {
                "media_tweets": 7492,
                "tweets": 20092
              },
              "website": {
                "url": "https://t.co/GGelX2KOOw"
              },
              "verification": {
                "is_blue_verified": true
              }
            }
          },
          "actions": {
            "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcEFjdGlvbnM6CgABAAAAARUf0/AKAAIU23qWHBRwAgA=",
            "remove_action_result": {
              "__typename": "CommunityMemberRemoveActionUnavailable",
              "message": "Invalid community role.",
              "reason": "Unavailable"
            }
          }
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
    "community_by_rest_id": {
      "rest_id": "1502929685792976898",
      "member_relationship_typeahead": [
        {
          "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcDoKAAEAAAABFR/T8AoAAhTbepYcFHACAA==",
          "community_reference": {},
          "role": "Admin",
          "user_results": {},
          "actions": {}
        }
      ]
    }
  }
}
```

## Notes

- Pagination: uses cursor parameter
