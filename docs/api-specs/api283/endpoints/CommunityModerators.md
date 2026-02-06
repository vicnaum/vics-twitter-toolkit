# Community Moderators

**Route:** `GET /CommunityModerators`
**API:** `twitter283.p.rapidapi.com`
**Description:** Community Moderators

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| community_id | STRING | Yes | `1502929685792976898` |

## Response Schema

```typescript
// Root: CommunityModeratorsResponse
interface CommunityModeratorsResponse {
  data: CommunityModeratorsResponseData;
}

interface CommunityModeratorsResponseData {
  community_by_rest_id: CommunityModeratorsResponseDataCommunityByRestId;
}

interface CommunityModeratorsResponseDataCommunityByRestId {
  moderators_slice: CommunityModeratorsResponseDataCommunityByRestIdModeratorsSlice;
  rest_id: string;
}

interface CommunityModeratorsResponseDataCommunityByRestIdModeratorsSlice {
  items: CommunityModeratorsResponseDataCommunityByRestIdModeratorsSliceItemsItem[];
  slice_info: {};
}

interface CommunityModeratorsResponseDataCommunityByRestIdModeratorsSliceItemsItem {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  community_relationship: UserCommunityRelationship;
  rest_id: string;
}

interface UserCommunityRelationship {
  actions: UserCommunityRelationshipActions;
  community_reference: UserCommunityRelationshipCommunityReference;
  id: string;
  role: string;
  user_results: UserCommunityRelationshipUserResults;
}

interface UserCommunityRelationshipActions {
  id: string;
  remove_action_result: CommunityMemberRemoveActionUnavailable;
}

interface CommunityMemberRemoveActionUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface UserCommunityRelationshipCommunityReference {
  rest_id: string;
}

interface UserCommunityRelationshipUserResults {
  rest_id: string;
  result: User;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "community_by_rest_id": {
      "rest_id": "1502929685792976898",
      "moderators_slice": {
        "items": [
          {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "rest_id": "4649374704",
              "community_relationship": {
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
            }
          }
        ],
        "slice_info": {}
      }
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
      "moderators_slice": {
        "items": [
          {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "rest_id": "4649374704",
              "community_relationship": {
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
            }
          }
        ],
        "slice_info": {}
      }
    }
  }
}
```

## Notes

- Pagination: uses cursor parameter
