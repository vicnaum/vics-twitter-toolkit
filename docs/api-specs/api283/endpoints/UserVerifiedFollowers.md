# User Verified Followers

**Route:** `GET /UserVerifiedFollowers`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Verified Followers

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | Yes | `951329744804392960` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: UserVerifiedFollowersResponse
interface UserVerifiedFollowersResponse {
  data: UserVerifiedFollowersResponseData;
}

interface UserVerifiedFollowersResponseData {
  user_result_by_rest_id: UserVerifiedFollowersResponseDataUserResultByRestId;
}

interface UserVerifiedFollowersResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  blue_verified_followers_timeline: UserBlueVerifiedFollowersTimeline;
  rest_id: string;
}

interface UserBlueVerifiedFollowersTimeline {
  id: string;
  timeline: UserBlueVerifiedFollowersTimelineTimeline;
}

interface UserBlueVerifiedFollowersTimelineTimeline {
  id: string;
  instructions: TimelineClearCacheItem[];
}

interface TimelineClearCacheItem {
  __typename: string;  // 4/4
  direction?: string;  // 2/4
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/4
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 21/21
  entry_id: string;  // 21/21
  sort_index: string;  // 21/21
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
        "blue_verified_followers_timeline": {
          "id": "VGltZWxpbmU6CgCLDTPNXM9UMAAA",
          "timeline": {
            "id": "BlueVerifiedFollowersProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache",
                "direction": "Top",
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "BlueVerifiedFollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "981312885082161152",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 18360
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1760573803912925184/u261Eqpx_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/981312885082161152/1708952494"
                            },
                            "core": {
                              "created_at": "Tue Apr 03 23:29:58 +0000 2018",
                              "name": "M",
                              "screen_name": "magico020"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1683553635677110274/2Uyxmdke_bigger.jpg"
                                },
                                "description": "GANGSTER ALL ★ STAR ギャングオールスター",
                                "url": {
                                  "url": "https://twitter.com/gangsterallstar",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Amsterdam"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1730704397846417586",
                                "1730704397846417586"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "What are we buying today? Art, $DUKO & $CULT | 🇨🇴🇳🇱",
                              "entities": {
                                "description": {
                                  "symbols": [
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    },
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    }
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "sqrcat.io",
                                      "expanded_url": "https://sqrcat.io",
                                      "indices": [
                                        90,
                                        90
                                      ],
                                      "url": "https://t.co/1ihsKkfMZr"
                                    }
                                  ],
                                  "hashtags": [
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    },
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
                                    },
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
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
                              "followers": 1095,
                              "following": 536
                            },
                            "relationship_perspectives": {},
                            "rest_id": "981312885082161152",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 956,
                              "tweets": 6102
                            },
                            "website": {
                              "url": "https://t.co/REmRYN1AOB"
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793805094589527599|1769497817132302315"
                    },
                    "entry_id": "user-981312885082161152",
                    "sort_index": "1769497817132302336"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "BlueVerifiedFollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "981312885082161152",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 18360
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1760573803912925184/u261Eqpx_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/981312885082161152/1708952494"
                            },
                            "core": {
                              "created_at": "Tue Apr 03 23:29:58 +0000 2018",
                              "name": "M",
                              "screen_name": "magico020"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1683553635677110274/2Uyxmdke_bigger.jpg"
                                },
                                "description": "GANGSTER ALL ★ STAR ギャングオールスター",
                                "url": {
                                  "url": "https://twitter.com/gangsterallstar",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Amsterdam"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1730704397846417586",
                                "1730704397846417586"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "What are we buying today? Art, $DUKO & $CULT | 🇨🇴🇳🇱",
                              "entities": {
                                "description": {
                                  "symbols": [
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    },
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    }
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "sqrcat.io",
                                      "expanded_url": "https://sqrcat.io",
                                      "indices": [
                                        90,
                                        90
                                      ],
                                      "url": "https://t.co/1ihsKkfMZr"
                                    }
                                  ],
                                  "hashtags": [
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    },
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
                                    },
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
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
                              "followers": 1095,
                              "following": 536
                            },
                            "relationship_perspectives": {},
                            "rest_id": "981312885082161152",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 956,
                              "tweets": 6102
                            },
                            "website": {
                              "url": "https://t.co/REmRYN1AOB"
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793805094589527599|1769497817132302315"
                    },
                    "entry_id": "user-981312885082161152",
                    "sort_index": "1769497817132302336"
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
                        "component": "BlueVerifiedFollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "981312885082161152",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 18360
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1760573803912925184/u261Eqpx_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/981312885082161152/1708952494"
                            },
                            "core": {
                              "created_at": "Tue Apr 03 23:29:58 +0000 2018",
                              "name": "M",
                              "screen_name": "magico020"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1683553635677110274/2Uyxmdke_bigger.jpg"
                                },
                                "description": "GANGSTER ALL ★ STAR ギャングオールスター",
                                "url": {
                                  "url": "https://twitter.com/gangsterallstar",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Amsterdam"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1730704397846417586",
                                "1730704397846417586"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "What are we buying today? Art, $DUKO & $CULT | 🇨🇴🇳🇱",
                              "entities": {
                                "description": {
                                  "symbols": [
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    },
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    }
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "sqrcat.io",
                                      "expanded_url": "https://sqrcat.io",
                                      "indices": [
                                        90,
                                        90
                                      ],
                                      "url": "https://t.co/1ihsKkfMZr"
                                    }
                                  ],
                                  "hashtags": [
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    },
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
                                    },
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
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
                              "followers": 1095,
                              "following": 536
                            },
                            "relationship_perspectives": {},
                            "rest_id": "981312885082161152",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 956,
                              "tweets": 6102
                            },
                            "website": {
                              "url": "https://t.co/REmRYN1AOB"
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793805094589527599|1769497817132302315"
                    },
                    "entry_id": "user-981312885082161152",
                    "sort_index": "1769497817132302336"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "BlueVerifiedFollowersSgs",
                        "element": "user"
                      },
                      "content": {
                        "__typename": "TimelineUser",
                        "display_type": "User",
                        "user_results": {
                          "rest_id": "981312885082161152",
                          "result": {
                            "__typename": "User",
                            "action_counts": {
                              "favorites_count": 18360
                            },
                            "avatar": {
                              "image_url": "https://pbs.twimg.com/profile_images/1760573803912925184/u261Eqpx_normal.jpg"
                            },
                            "banner": {
                              "image_url": "https://pbs.twimg.com/profile_banners/981312885082161152/1708952494"
                            },
                            "core": {
                              "created_at": "Tue Apr 03 23:29:58 +0000 2018",
                              "name": "M",
                              "screen_name": "magico020"
                            },
                            "dm_permissions": {
                              "can_dm": true
                            },
                            "exclusive_tweet_following": false,
                            "identity_profile_labels_highlighted_label": {
                              "label": {
                                "badge": {
                                  "url": "https://pbs.twimg.com/profile_images/1683553635677110274/2Uyxmdke_bigger.jpg"
                                },
                                "description": "GANGSTER ALL ★ STAR ギャングオールスター",
                                "url": {
                                  "url": "https://twitter.com/gangsterallstar",
                                  "url_type": "DeepLink"
                                },
                                "user_label_type": "BusinessLabel",
                                "user_label_display_type": "Badge"
                              }
                            },
                            "location": {
                              "location": "Amsterdam"
                            },
                            "media_permissions": {
                              "can_media_tag": true
                            },
                            "notifications_settings": {},
                            "pinned_items": {
                              "tweet_ids_str": [
                                "1730704397846417586",
                                "1730704397846417586"
                              ]
                            },
                            "privacy": {},
                            "private_super_following": false,
                            "profile_bio": {
                              "description": "What are we buying today? Art, $DUKO & $CULT | 🇨🇴🇳🇱",
                              "entities": {
                                "description": {
                                  "symbols": [
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    },
                                    {
                                      "indices": [
                                        31,
                                        31
                                      ],
                                      "text": "DUKO"
                                    }
                                  ],
                                  "user_mentions": [
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    },
                                    {
                                      "id_str": "0",
                                      "indices": [
                                        44,
                                        44
                                      ],
                                      "name": "",
                                      "screen_name": "LAMBDA_protocol"
                                    }
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "sqrcat.io",
                                      "expanded_url": "https://sqrcat.io",
                                      "indices": [
                                        90,
                                        90
                                      ],
                                      "url": "https://t.co/1ihsKkfMZr"
                                    }
                                  ],
                                  "hashtags": [
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    },
                                    {
                                      "indices": [
                                        119,
                                        119
                                      ],
                                      "text": "ETH"
                                    }
                                  ]
                                },
                                "url": {
                                  "urls": [
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
                                    },
                                    {
                                      "display_url": "linktr.ee/magico020",
                                      "expanded_url": "https://linktr.ee/magico020",
                                      "indices": [
                                        0,
                                        0
                                      ],
                                      "url": "https://t.co/REmRYN1AOB"
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
                              "followers": 1095,
                              "following": 536
                            },
                            "relationship_perspectives": {},
                            "rest_id": "981312885082161152",
                            "super_follow_eligible": false,
                            "super_followed_by": false,
                            "super_following": false,
                            "tweet_counts": {
                              "media_tweets": 956,
                              "tweets": 6102
                            },
                            "website": {
                              "url": "https://t.co/REmRYN1AOB"
                            },
                            "verification": {
                              "is_blue_verified": true
                            }
                          }
                        }
                      },
                      "cursor_type": "Bottom",
                      "value": "1793805094589527599|1769497817132302315"
                    },
                    "entry_id": "user-981312885082161152",
                    "sort_index": "1769497817132302336"
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
        "blue_verified_followers_timeline": {
          "id": "VGltZWxpbmU6CgCLDTPNXM9UMAAA",
          "timeline": {
            "id": "BlueVerifiedFollowersProduct-Timeline",
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
