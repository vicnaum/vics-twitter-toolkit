# Community Info

**Route:** `GET /CommunityResultsById`
**API:** `twitter283.p.rapidapi.com`
**Description:** CommunityResultsById

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| community_id | STRING | Yes | `1502929685792976898` |

## Response Schema

```typescript
// Root: CommunityInfoResponse
interface CommunityInfoResponse {
  data: CommunityInfoResponseData;
}

interface CommunityInfoResponseData {
  community_results_by_rest_id: CommunityInfoResponseDataCommunityResultsByRestId;
}

interface CommunityInfoResponseDataCommunityResultsByRestId {
  rest_id: string;
  result: Community;
}

interface Community {
  __typename: string;
  actions: CommunityActions;
  admin_results: CommunityAdminResults;
  automoderation_settings: CommunityAutomoderationSettings;
  community_topic: CommunityCommunityTopic;
  created_at: number;
  creator_results: CommunityCreatorResults;
  custom_banner_media: CommunityCustomBannerMedia;
  default_banner_media: CommunityDefaultBannerMedia;
  description: string;
  invites_policy: string;
  invites_result: CommunityInvitesUnavailable;
  is_nsfw: boolean;
  is_pinned: boolean;
  join_policy: string;
  join_requests_result: CommunityJoinRequestsUnavailable;
  member_count: number;
  members_facepile_results: CommunityMembersFacepileResultsItem[];
  moderator_count: number;
  name: string;
  new_tweet_count_since_last_viewed: number;
  notification_settings: CommunityNotificationSettingsItem[];
  rest_id: string;
  rules: CommunityRulesItem[];
  spam_filter_setting: string;
  viewer_relationship: CommunityViewerRelationship;
}

interface CommunityActions {
  community_spotlight_setup_action_result: CommunitySpotlightSetupActionShow;
  delete_action_result: CommunityDeleteActionUnavailable;
  join_action_result: CommunityJoinActionUnavailable;
  leave_action_result: CommunityLeaveActionUnavailable;
  pin_action_result: CommunityTweetPinActionUnavailable;
  rest_id: string;
  space_create_action_result: CommunitySpaceCreateActionUnavailable;
}

interface CommunitySpotlightSetupActionShow {
  __typename: string;
  deeplink: string;
}

interface CommunityDeleteActionUnavailable {
  __typename: string;
  unavailable_reason: string;
}

interface CommunityJoinActionUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunityLeaveActionUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunityTweetPinActionUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunitySpaceCreateActionUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunityAdminResults {
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
  withheld_in_countries: unknown[];
}

interface UserProfileBioEntities {
  description: UserProfileBioEntitiesDescription;
  url: UserProfileBioEntitiesUrl;
}

interface UserProfileBioEntitiesDescription {
  hashtags: UserProfileBioEntitiesDescriptionHashtagsItem[];
  urls: UserProfileBioEntitiesDescriptionUrlsItem[];
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserProfileBioEntitiesUrl {
  urls: UserProfileBioEntitiesUrlUrlsItem[];
}

interface UserProfileBioEntitiesUrlUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
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

interface CommunityAutomoderationSettings {
  auto_spam_detector_enabled: boolean;
  banned_keywords: string[];
  hide_until_review_enabled: boolean;
}

interface CommunityCommunityTopic {
  id: string;
  topic_name: string;
}

interface CommunityCreatorResults {
  rest_id: string;
  result: User;
}

interface CommunityCustomBannerMedia {
  id: string;
  media_info: ApiImage;
}

interface ApiImage {
  __typename: string;
  original_img_height: number;
  original_img_url: string;
  original_img_width: number;
  salient_rect: ApiImageSalientRect;
}

interface ApiImageSalientRect {
  height: number;
  left: number;
  top: number;
  width: number;
}

interface CommunityDefaultBannerMedia {
  id: string;
  media_info: ApiImage;
}

interface CommunityInvitesUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunityJoinRequestsUnavailable {
  __typename: string;
  message: string;
  reason: string;
}

interface CommunityMembersFacepileResultsItem {
  rest_id: string;  // 5/5
  result: User;  // 5/5
}

interface CommunityNotificationSettingsItem {
  notification_setting: string;  // 2/2
  notification_type: string;  // 2/2
}

interface CommunityRulesItem {
  name: string;  // 7/7
  rest_id: string;  // 7/7
  description?: string;  // 6/7
}

interface CommunityViewerRelationship {
  id: string;
  moderation_state: CommunityUserDefaultModerationState;
  role: string;
}

interface CommunityUserDefaultModerationState {
  __typename: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "community_results_by_rest_id": {
      "rest_id": "1502929685792976898",
      "result": {
        "__typename": "Community",
        "rest_id": "1502929685792976898",
        "actions": {
          "rest_id": "1502929685792976898",
          "join_action_result": {
            "__typename": "CommunityJoinActionUnavailable",
            "reason": "Unavailable",
            "message": "Your account state is not valid."
          },
          "leave_action_result": {
            "__typename": "CommunityLeaveActionUnavailable",
            "reason": "ViewerNotMember",
            "message": "Not a member."
          },
          "pin_action_result": {
            "__typename": "CommunityTweetPinActionUnavailable",
            "message": "Pinning action unavailable for community",
            "reason": "Unavailable"
          },
          "delete_action_result": {
            "__typename": "CommunityDeleteActionUnavailable",
            "unavailable_reason": "Unavailable"
          },
          "space_create_action_result": {
            "__typename": "CommunitySpaceCreateActionUnavailable",
            "message": "Action is not available",
            "reason": "Unavailable"
          },
          "community_spotlight_setup_action_result": {
            "__typename": "CommunitySpotlightSetupActionShow",
            "deeplink": "twitter://profile_spotlight"
          }
        },
        "admin_results": {
          "rest_id": "4649374704",
          "result": {
            "__typename": "User",
            "action_counts": {
              "favorites_count": 3240
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
              "followers": 40470,
              "following": 502
            },
            "relationship_perspectives": {},
            "rest_id": "4649374704",
            "super_follow_eligible": true,
            "super_followed_by": false,
            "super_following": false,
            "tweet_counts": {
              "media_tweets": 7503,
              "tweets": 20108
            },
            "website": {
              "url": "https://t.co/GGelX2KOOw"
            },
            "verification": {
              "is_blue_verified": true
            }
          }
        },
        "automoderation_settings": {
          "auto_spam_detector_enabled": true,
          "banned_keywords": [
            "giveaway",
            "giveaway"
          ],
          "hide_until_review_enabled": true
        },
        "created_at": 1647161334836,
        "creator_results": {
          "rest_id": "4649374704",
          "result": {
            "__typename": "User",
            "action_counts": {
              "favorites_count": 3240
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
              "followers": 40470,
              "following": 502
            },
            "relationship_perspectives": {},
            "rest_id": "4649374704",
            "super_follow_eligible": true,
            "super_followed_by": false,
            "super_following": false,
            "tweet_counts": {
              "media_tweets": 7503,
              "tweets": 20108
            },
            "website": {
              "url": "https://t.co/GGelX2KOOw"
            },
            "verification": {
              "is_blue_verified": true
            }
          }
        },
        "custom_banner_media": {
          "id": "QXBpTWVkaWE6DAATCgABGWPQD7qWsAAAAA==",
          "media_info": {
            "__typename": "ApiImage",
            "original_img_height": 400,
            "original_img_width": 1000,
            "original_img_url": "https://pbs.twimg.com/community_banner_img/1829534639616077824/YCMyDS4v?format=jpg&name=orig",
            "salient_rect": {
              "height": 1,
              "left": 743,
              "top": 200,
              "width": 1
            }
          }
        },
        "default_banner_media": {
          "id": "QXBpTWVkaWE6DAABCgABFECQMglVIAQKAAITiFWq8lUQBAAA",
          "media_info": {
            "__typename": "ApiImage",
            "original_img_height": 480,
            "original_img_width": 1200,
            "original_img_url": "https://pbs.twimg.com/media/FECQMglVIAQBwV5.jpg"
          }
        },
        "description": "To educate and discuss Bitcoin and other cryptocurrencies. (Must Read Rules before posting please)",
        "invites_result": {
          "__typename": "CommunityInvitesUnavailable",
          "message": "Must be a member of the Community to invite others.",
          "reason": "Unavailable"
        },
        "invites_policy": "MemberInvitesAllowed",
        "is_nsfw": false,
        "is_pinned": false,
        "join_requests_result": {
          "__typename": "CommunityJoinRequestsUnavailable",
          "reason": "Unavailable",
          "message": "Viewer is not authorized."
        },
        "join_policy": "Open",
        "member_count": 67903,
        "members_facepile_results": [
          {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "action_counts": {
                "favorites_count": 3240
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
              "privacy": {
                "protected": true
              },
              "private_super_following": false,
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
                    ],
                    "user_mentions": [
                      {
                        "id_str": "0",
                        "indices": [
                          0,
                          0
                        ],
                        "name": "",
                        "screen_name": "creativemind"
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
                "followers": 40470,
                "following": 502
              },
              "relationship_perspectives": {},
              "rest_id": "4649374704",
              "super_follow_eligible": true,
              "super_followed_by": false,
              "super_following": false,
              "tweet_counts": {
                "media_tweets": 7503,
                "tweets": 20108
              },
              "website": {
                "url": "https://t.co/GGelX2KOOw"
              },
              "verification": {
                "is_blue_verified": true
              }
            }
          },
          {
            "rest_id": "4649374704",
            "result": {
              "__typename": "User",
              "action_counts": {
                "favorites_count": 3240
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
              "privacy": {
                "protected": true
              },
              "private_super_following": false,
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
                    ],
                    "user_mentions": [
                      {
                        "id_str": "0",
                        "indices": [
                          0,
                          0
                        ],
                        "name": "",
                        "screen_name": "creativemind"
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
                "followers": 40470,
                "following": 502
              },
              "relationship_perspectives": {},
              "rest_id": "4649374704",
              "super_follow_eligible": true,
              "super_followed_by": false,
              "super_following": false,
              "tweet_counts": {
                "media_tweets": 7503,
                "tweets": 20108
              },
              "website": {
                "url": "https://t.co/GGelX2KOOw"
              },
              "verification": {
                "is_blue_verified": true
              }
            }
          }
        ],
        "moderator_count": 1,
        "name": "Bitcoin and Crypto Community",
        "new_tweet_count_since_last_viewed": 0,
        "notification_settings": [
          {
            "notification_setting": "Enabled",
            "notification_type": "SpaceStarted"
          },
          {
            "notification_setting": "Enabled",
            "notification_type": "SpaceStarted"
          }
        ],
        "community_topic": {
          "id": "1901",
          "topic_name": "Cryptocurrency"
        },
        "rules": [
          {
            "rest_id": "1826836090776383954",
            "description": "We limit self-quotes to prevent misuse of community engagement. You can still share valuable info through quotes.",
            "name": "⚠️ (NO QUOTE POST) ⚠️ PLEASE POST DIRECTLY TO THE COMMUNITY"
          },
          {
            "rest_id": "1826836090776383954",
            "description": "We limit self-quotes to prevent misuse of community engagement. You can still share valuable info through quotes.",
            "name": "⚠️ (NO QUOTE POST) ⚠️ PLEASE POST DIRECTLY TO THE COMMUNITY"
          }
        ],
        "spam_filter_setting": "High",
        "viewer_relationship": {
          "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcDoKAAEWLn3PsNegAQoAAhTbepYcFHACAA==",
          "moderation_state": {
            "__typename": "CommunityUserDefaultModerationState"
          },
          "role": "NonMember"
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
    "community_results_by_rest_id": {
      "rest_id": "1502929685792976898",
      "result": {
        "__typename": "Community",
        "rest_id": "1502929685792976898",
        "actions": {
          "rest_id": "1502929685792976898",
          "join_action_result": {
            "__typename": "CommunityJoinActionUnavailable",
            "reason": "Unavailable",
            "message": "Your account state is not valid."
          },
          "leave_action_result": {
            "__typename": "CommunityLeaveActionUnavailable",
            "reason": "ViewerNotMember",
            "message": "Not a member."
          },
          "pin_action_result": {
            "__typename": "CommunityTweetPinActionUnavailable",
            "message": "Pinning action unavailable for community",
            "reason": "Unavailable"
          },
          "delete_action_result": {
            "__typename": "CommunityDeleteActionUnavailable",
            "unavailable_reason": "Unavailable"
          },
          "space_create_action_result": {
            "__typename": "CommunitySpaceCreateActionUnavailable",
            "message": "Action is not available",
            "reason": "Unavailable"
          },
          "community_spotlight_setup_action_result": {
            "__typename": "CommunitySpotlightSetupActionShow",
            "deeplink": "twitter://profile_spotlight"
          }
        },
        "admin_results": {
          "rest_id": "4649374704",
          "result": {
            "__typename": "User",
            "action_counts": {
              "favorites_count": 3240
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
              "followers": 40470,
              "following": 502
            },
            "relationship_perspectives": {},
            "rest_id": "4649374704",
            "super_follow_eligible": true,
            "super_followed_by": false,
            "super_following": false,
            "tweet_counts": {
              "media_tweets": 7503,
              "tweets": 20108
            },
            "website": {
              "url": "https://t.co/GGelX2KOOw"
            },
            "verification": {
              "is_blue_verified": true
            }
          }
        },
        "automoderation_settings": {
          "auto_spam_detector_enabled": true,
          "banned_keywords": [
            "giveaway"
          ],
          "hide_until_review_enabled": true
        },
        "created_at": 1647161334836,
        "creator_results": {
          "rest_id": "4649374704",
          "result": {
            "__typename": "User",
            "action_counts": {
              "favorites_count": 3240
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
              "followers": 40470,
              "following": 502
            },
            "relationship_perspectives": {},
            "rest_id": "4649374704",
            "super_follow_eligible": true,
            "super_followed_by": false,
            "super_following": false,
            "tweet_counts": {
              "media_tweets": 7503,
              "tweets": 20108
            },
            "website": {
              "url": "https://t.co/GGelX2KOOw"
            },
            "verification": {
              "is_blue_verified": true
            }
          }
        },
        "custom_banner_media": {
          "id": "QXBpTWVkaWE6DAATCgABGWPQD7qWsAAAAA==",
          "media_info": {
            "__typename": "ApiImage",
            "original_img_height": 400,
            "original_img_width": 1000,
            "original_img_url": "https://pbs.twimg.com/community_banner_img/1829534639616077824/YCMyDS4v?format=jpg&name=orig",
            "salient_rect": {
              "height": 1,
              "left": 743,
              "top": 200,
              "width": 1
            }
          }
        },
        "default_banner_media": {
          "id": "QXBpTWVkaWE6DAABCgABFECQMglVIAQKAAITiFWq8lUQBAAA",
          "media_info": {
            "__typename": "ApiImage",
            "original_img_height": 480,
            "original_img_width": 1200,
            "original_img_url": "https://pbs.twimg.com/media/FECQMglVIAQBwV5.jpg"
          }
        },
        "description": "To educate and discuss Bitcoin and other cryptocurrencies. (Must Read Rules before posting please)",
        "invites_result": {
          "__typename": "CommunityInvitesUnavailable",
          "message": "Must be a member of the Community to invite others.",
          "reason": "Unavailable"
        },
        "invites_policy": "MemberInvitesAllowed",
        "is_nsfw": false,
        "is_pinned": false,
        "join_requests_result": {
          "__typename": "CommunityJoinRequestsUnavailable",
          "reason": "Unavailable",
          "message": "Viewer is not authorized."
        },
        "join_policy": "Open",
        "member_count": 67903,
        "members_facepile_results": [
          {
            "rest_id": "4649374704",
            "result": {}
          }
        ],
        "moderator_count": 1,
        "name": "Bitcoin and Crypto Community",
        "new_tweet_count_since_last_viewed": 0,
        "notification_settings": [
          {
            "notification_setting": "Enabled",
            "notification_type": "SpaceStarted"
          }
        ],
        "community_topic": {
          "id": "1901",
          "topic_name": "Cryptocurrency"
        },
        "rules": [
          {
            "rest_id": "1826836090776383954",
            "name": "⚠️ (NO QUOTE POST) ⚠️ PLEASE POST DIRECTLY TO THE COMMUNITY"
          }
        ],
        "spam_filter_setting": "High",
        "viewer_relationship": {
          "id": "VXNlckNvbW11bml0eVJlbGF0aW9uc2hpcDoKAAEWLn3PsNegAQoAAhTbepYcFHACAA==",
          "moderation_state": {
            "__typename": "CommunityUserDefaultModerationState"
          },
          "role": "NonMember"
        }
      }
    }
  }
}
```

## Notes

- View counts may come as formatted strings (e.g., `"1,234,567"`)
