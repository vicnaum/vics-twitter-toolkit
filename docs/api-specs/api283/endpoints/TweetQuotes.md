# TweetQuotes

**Route:** `GET /TweetQuotes`
**API:** `twitter283.p.rapidapi.com`
**Description:** TweetQuotes

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | `1768778186186195177` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: TweetQuotesResponse
interface TweetQuotesResponse {
  data: TweetQuotesResponseData;
}

interface TweetQuotesResponseData {
  search_by_raw_query: TweetQuotesResponseDataSearchByRawQuery;
}

interface TweetQuotesResponseDataSearchByRawQuery {
  id: string;
  rest_id: string;
  search_timeline: TweetQuotesResponseDataSearchByRawQuerySearchTimeline;
}

interface TweetQuotesResponseDataSearchByRawQuerySearchTimeline {
  id: string;
  timeline: TweetQuotesResponseDataSearchByRawQuerySearchTimelineTimeline;
}

interface TweetQuotesResponseDataSearchByRawQuerySearchTimelineTimeline {
  id: string;
  instructions: TimelineAddEntriesItem[];
}

interface TimelineAddEntriesItem {
  __typename: string;
  entries: TimelineAddEntriesItemEntriesItem[];
}

interface TimelineAddEntriesItemEntriesItem {
  content: TimelineTimelineItem;  // 11/11
  entry_id: string;  // 11/11
  sort_index: string;  // 11/11
}

interface TimelineTimelineItem {
  __typename?: string;
  client_event_info?: TimelineTimelineItemClientEventInfo;
  content?: TimelineTweet;
  cursor_type?: string;
  value?: string;
}

interface TimelineTimelineItemClientEventInfo {
  component?: string;
  details?: TimelineTimelineItemClientEventInfoDetails;
  element?: string;
}

interface TimelineTimelineItemClientEventInfoDetails {
  timelines_details?: TimelineTimelineItemClientEventInfoDetailsTimelinesDetails;
}

interface TimelineTimelineItemClientEventInfoDetailsTimelinesDetails {
  controller_data?: string;
}

interface TimelineTweet {
  __typename?: string;
  timeline_tweet_display_type?: string;
  tweet_results?: TimelineTweetTweetResults;
}

interface TimelineTweetTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface Tweet {
  reply_to_user_results: TweetReplyToUserResults;
  __typename?: string;
  core?: TweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  quoted_tweet_results?: TweetQuotedTweetResults;
  rest_id?: string;
  unmention_data?: TweetUnmentionData;
  view_count_info?: TweetViewCountInfo;
}

interface TweetReplyToUserResults {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  core: UserCore;
  rest_id: string;
}

interface UserCore {
  screen_name: string;
}

interface TweetCore {
  user_results?: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  rest_id?: string;
  result?: User;
}

interface EditControlInitial {
  __typename?: string;
  edit_tweet_ids?: string[];
  editable_until_msecs?: string;
  edits_remaining?: string;
  is_edit_eligible?: boolean;
}

interface TweetLegacy {
  place: TweetLegacyPlace;
  bookmark_count?: number;
  conversation_id_str?: string;
  created_at?: string;
  display_text_range?: number[];
  entities?: TweetLegacyEntities;
  favorite_count?: number;
  full_text?: string;
  is_quote_status?: boolean;
  lang?: string;
  quote_count?: number;
  quoted_status_id_str?: string;
  quoted_status_permalink?: TweetLegacyQuotedStatusPermalink;
  reply_count?: number;
  retweet_count?: number;
  user_id_str?: string;
}

interface TweetLegacyPlace {
  bounding_box_polygon: TweetLegacyPlaceBoundingBoxPolygon;
  country: string;
  country_code: string;
  full_name: string;
  id: string;
  name: string;
  place_type: string;
}

interface TweetLegacyPlaceBoundingBoxPolygon {
  coordinates: number[][][];
  type: string;
}

interface TweetLegacyEntities {
  symbols: TweetLegacyEntitiesSymbolsItem[];
  user_mentions?: TweetLegacyEntitiesUserMentionsItem[];
}

interface TweetLegacyEntitiesSymbolsItem {
  indices: number[];
  text: string;
}

interface TweetLegacyEntitiesUserMentionsItem {
  id_str?: string;
  indices?: number[];
  name?: string;
  screen_name?: string;
}

interface TweetLegacyQuotedStatusPermalink {
  display?: string;
  expanded?: string;
  url?: string;
}

interface TweetQuotedTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface TweetUnmentionData {
  id?: string;
}

interface TweetViewCountInfo {
  count?: string;
  state?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "search_by_raw_query": {
      "id": "U2VhcmNoUXVlcnk6cXVvdGVkX3R3ZWV0X2lkOjE3Njg3NzgxODYxODYxOTUxNzc=",
      "rest_id": "quoted_tweet_id:1768778186186195177",
      "search_timeline": {
        "id": "VGltZWxpbmU6DAB+CwABAAAAI3F1b3RlZF90d2VldF9pZDoxNzY4Nzc4MTg2MTg2MTk1MTc3AAA=",
        "timeline": {
          "id": "LatestTabSrpProduct-Timeline",
          "instructions": [
            {
              "__typename": "TimelineAddEntries",
              "entries": [
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "result",
                      "details": {
                        "timelines_details": {
                          "controller_data": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAAAAAwAAgoAAQAAAAAAAAAACgACqNs1jXhyG28KAAUzHGTPw1lJdQgABgAAAAAKAAcPNaZ7/8ew6wAAAAAA"
                        }
                      },
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1769554147450224746",
                        "result": {
                          "__typename": "Tweet",
                          "core": {
                            "user_results": {
                              "rest_id": "1375854582316871681",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 1755
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1766110910433701888/42P1a_ln_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/1375854582316871681/1706974046"
                                },
                                "core": {
                                  "created_at": "Sat Mar 27 16:58:03 +0000 2021",
                                  "name": "coasting",
                                  "screen_name": "xcoasting"
                                },
                                "dm_permissions": {
                                  "can_dm": true
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {},
                                "location": {
                                  "location": ""
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1760362270008164795",
                                    "1760362270008164795"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "web3⛓️",
                                  "entities": {
                                    "description": {
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ]
                                    },
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        },
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
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
                                  "followers": 191,
                                  "following": 92
                                },
                                "relationship_perspectives": {},
                                "rest_id": "1375854582316871681",
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 849,
                                  "tweets": 1449
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
                          "is_translatable": false,
                          "legacy": {
                            "bookmark_count": 0,
                            "conversation_id_str": "1769554147450224746",
                            "created_at": "Mon Mar 18 02:39:20 +0000 2024",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "symbols": [
                                {
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "text": "USA"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "44196397",
                                  "indices": [
                                    16,
                                    16
                                  ],
                                  "name": "Elon Musk",
                                  "screen_name": "elonmusk"
                                },
                                {
                                  "id_str": "44196397",
                                  "indices": [
                                    16,
                                    16
                                  ],
                                  "name": "Elon Musk",
                                  "screen_name": "elonmusk"
                                }
                              ]
                            },
                            "favorite_count": 0,
                            "full_text": "$USA 🇺🇸🦅",
                            "is_quote_status": true,
                            "lang": "qme",
                            "quoted_status_id_str": "1768778186186195177",
                            "quoted_status_permalink": {
                              "display": "x.com/elonmusk/statu…",
                              "expanded": "https://twitter.com/elonmusk/status/1768778186186195177",
                              "url": "https://t.co/rDKU54Bsrl"
                            },
                            "quote_count": 0,
                            "reply_count": 0,
                            "retweet_count": 0,
                            "user_id_str": "1375854582316871681",
                            "place": {
                              "bounding_box_polygon": {
                                "coordinates": [
                                  [
                                    [
                                      5.2121062,
                                      5.2121062
                                    ],
                                    [
                                      5.2121062,
                                      5.2121062
                                    ]
                                  ]
                                ],
                                "type": "Polygon"
                              },
                              "country": "Belgium",
                              "country_code": "BE",
                              "full_name": "Hasselt, Belgium",
                              "id": "86592634e53a5e3f",
                              "name": "Hasselt",
                              "place_type": "city"
                            }
                          },
                          "rest_id": "1769554147450224746",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEYjrgfIZcAag8AAgoAAAAAAA=="
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1769554147450224746",
                              "1769554147450224746"
                            ],
                            "editable_until_msecs": "1710733160000",
                            "is_edit_eligible": true,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "count": "36",
                            "state": "EnabledWithCount"
                          },
                          "quoted_tweet_results": {
                            "rest_id": "1768778186186195177",
                            "result": {
                              "__typename": "Tweet",
                              "core": {
                                "user_results": {
                                  "rest_id": "44196397",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 46132
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/44196397/1690621312"
                                    },
                                    "core": {
                                      "created_at": "Tue Jun 02 20:12:29 +0000 2009",
                                      "name": "Elon Musk",
                                      "screen_name": "elonmusk"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {
                                      "label": {
                                        "badge": {
                                          "url": "..."
                                        },
                                        "description": "X",
                                        "url": {
                                          "url": "...",
                                          "url_type": "..."
                                        },
                                        "user_label_type": "BusinessLabel",
                                        "user_label_display_type": "Badge"
                                      }
                                    },
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": false
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {
                                      "tweet_ids_str": [
                                        "1768778186186195177",
                                        "1768778186186195177"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "0084B4"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 177391674,
                                      "following": 557
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "44196397",
                                    "super_follow_eligible": true,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2096,
                                      "tweets": 40394
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 3698,
                                "conversation_id_str": "1768778186186195177",
                                "created_at": "Fri Mar 15 23:15:56 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "extended_entities": {
                                  "media": [
                                    {
                                      "display_url": "pic.twitter.com/BjrvXpkcgz",
                                      "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "features": {
                                        "large": {},
                                        "orig": {}
                                      },
                                      "id_str": "1768778181643755520",
                                      "indices": [
                                        13,
                                        13
                                      ],
                                      "media_key": "3_1768778181643755520",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiL9mKDVmAACgACGIv2Y5IWgOkAAA==",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                                      "original_info": {
                                        "focus_rects": [
                                          "...",
                                          "..."
                                        ],
                                        "height": 1182,
                                        "width": 2048
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "photo",
                                      "url": "https://t.co/BjrvXpkcgz"
                                    },
                                    {
                                      "display_url": "pic.twitter.com/BjrvXpkcgz",
                                      "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "features": {
                                        "large": {},
                                        "orig": {}
                                      },
                                      "id_str": "1768778181643755520",
                                      "indices": [
                                        13,
                                        13
                                      ],
                                      "media_key": "3_1768778181643755520",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiL9mKDVmAACgACGIv2Y5IWgOkAAA==",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                                      "original_info": {
                                        "focus_rects": [
                                          "...",
                                          "..."
                                        ],
                                        "height": 1182,
                                        "width": 2048
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "photo",
                                      "url": "https://t.co/BjrvXpkcgz"
                                    }
                                  ]
                                },
                                "favorite_count": 295170,
                                "full_text": "To the stars https://t.co/BjrvXpkcgz",
                                "lang": "en",
                                "possibly_sensitive_editable": true,
                                "quote_count": 1107,
                                "reply_count": 12347,
                                "retweet_count": 20611,
                                "user_id_str": "44196397"
                              },
                              "rest_id": "1768778186186195177",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYi/ZjkhaA6Q8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1768778186186195177",
                                  "1768778186186195177"
                                ],
                                "editable_until_msecs": "1710548156000",
                                "is_edit_eligible": true,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "50176215",
                                "state": "EnabledWithCount"
                              }
                            }
                          },
                          "reply_to_user_results": {
                            "rest_id": "44196397",
                            "result": {
                              "__typename": "User",
                              "rest_id": "44196397",
                              "core": {
                                "screen_name": "elonmusk"
                              }
                            }
                          }
                        }
                      }
                    },
                    "cursor_type": "Top",
                    "value": "DAADDAABCgABGI64HyGXAGoKAAIYjokI_NYQEAAIAAIAAAABCAADAAAAAAgABAAAAAAKAAUYjsU7iQAnEAoABhiOxTuI_9jwAAA"
                  },
                  "entry_id": "tweet-1769554147450224746",
                  "sort_index": "1769568563095404544"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "result",
                      "details": {
                        "timelines_details": {
                          "controller_data": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAAAAAwAAgoAAQAAAAAAAAAACgACqNs1jXhyG28KAAUzHGTPw1lJdQgABgAAAAAKAAcPNaZ7/8ew6wAAAAAA"
                        }
                      },
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1769554147450224746",
                        "result": {
                          "__typename": "Tweet",
                          "core": {
                            "user_results": {
                              "rest_id": "1375854582316871681",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 1755
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1766110910433701888/42P1a_ln_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/1375854582316871681/1706974046"
                                },
                                "core": {
                                  "created_at": "Sat Mar 27 16:58:03 +0000 2021",
                                  "name": "coasting",
                                  "screen_name": "xcoasting"
                                },
                                "dm_permissions": {
                                  "can_dm": true
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {},
                                "location": {
                                  "location": ""
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1760362270008164795",
                                    "1760362270008164795"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "web3⛓️",
                                  "entities": {
                                    "description": {
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ]
                                    },
                                    "url": {
                                      "urls": [
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
                                        },
                                        {
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "indices": "...",
                                          "url": "..."
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
                                  "followers": 191,
                                  "following": 92
                                },
                                "relationship_perspectives": {},
                                "rest_id": "1375854582316871681",
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 849,
                                  "tweets": 1449
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
                          "is_translatable": false,
                          "legacy": {
                            "bookmark_count": 0,
                            "conversation_id_str": "1769554147450224746",
                            "created_at": "Mon Mar 18 02:39:20 +0000 2024",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "symbols": [
                                {
                                  "indices": [
                                    0,
                                    0
                                  ],
                                  "text": "USA"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "44196397",
                                  "indices": [
                                    16,
                                    16
                                  ],
                                  "name": "Elon Musk",
                                  "screen_name": "elonmusk"
                                },
                                {
                                  "id_str": "44196397",
                                  "indices": [
                                    16,
                                    16
                                  ],
                                  "name": "Elon Musk",
                                  "screen_name": "elonmusk"
                                }
                              ]
                            },
                            "favorite_count": 0,
                            "full_text": "$USA 🇺🇸🦅",
                            "is_quote_status": true,
                            "lang": "qme",
                            "quoted_status_id_str": "1768778186186195177",
                            "quoted_status_permalink": {
                              "display": "x.com/elonmusk/statu…",
                              "expanded": "https://twitter.com/elonmusk/status/1768778186186195177",
                              "url": "https://t.co/rDKU54Bsrl"
                            },
                            "quote_count": 0,
                            "reply_count": 0,
                            "retweet_count": 0,
                            "user_id_str": "1375854582316871681",
                            "place": {
                              "bounding_box_polygon": {
                                "coordinates": [
                                  [
                                    [
                                      5.2121062,
                                      5.2121062
                                    ],
                                    [
                                      5.2121062,
                                      5.2121062
                                    ]
                                  ]
                                ],
                                "type": "Polygon"
                              },
                              "country": "Belgium",
                              "country_code": "BE",
                              "full_name": "Hasselt, Belgium",
                              "id": "86592634e53a5e3f",
                              "name": "Hasselt",
                              "place_type": "city"
                            }
                          },
                          "rest_id": "1769554147450224746",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEYjrgfIZcAag8AAgoAAAAAAA=="
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1769554147450224746",
                              "1769554147450224746"
                            ],
                            "editable_until_msecs": "1710733160000",
                            "is_edit_eligible": true,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "count": "36",
                            "state": "EnabledWithCount"
                          },
                          "quoted_tweet_results": {
                            "rest_id": "1768778186186195177",
                            "result": {
                              "__typename": "Tweet",
                              "core": {
                                "user_results": {
                                  "rest_id": "44196397",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 46132
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/44196397/1690621312"
                                    },
                                    "core": {
                                      "created_at": "Tue Jun 02 20:12:29 +0000 2009",
                                      "name": "Elon Musk",
                                      "screen_name": "elonmusk"
                                    },
                                    "dm_permissions": {
                                      "can_dm": false
                                    },
                                    "exclusive_tweet_following": false,
                                    "identity_profile_labels_highlighted_label": {
                                      "label": {
                                        "badge": {
                                          "url": "..."
                                        },
                                        "description": "X",
                                        "url": {
                                          "url": "...",
                                          "url_type": "..."
                                        },
                                        "user_label_type": "BusinessLabel",
                                        "user_label_display_type": "Badge"
                                      }
                                    },
                                    "location": {
                                      "location": ""
                                    },
                                    "media_permissions": {
                                      "can_media_tag": false
                                    },
                                    "notifications_settings": {},
                                    "pinned_items": {
                                      "tweet_ids_str": [
                                        "1768778186186195177",
                                        "1768778186186195177"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "",
                                      "entities": {
                                        "description": {}
                                      }
                                    },
                                    "profile_metadata": {
                                      "profile_interstitial_type": "",
                                      "profile_link_color": "0084B4"
                                    },
                                    "profile_translation": {
                                      "translator_type_enum": "None"
                                    },
                                    "properties": {
                                      "has_extended_profile": true
                                    },
                                    "relationship_counts": {
                                      "followers": 177391674,
                                      "following": 557
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "44196397",
                                    "super_follow_eligible": true,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 2096,
                                      "tweets": 40394
                                    },
                                    "website": {
                                      "url": ""
                                    },
                                    "verification": {
                                      "is_blue_verified": true
                                    }
                                  }
                                }
                              },
                              "is_translatable": false,
                              "legacy": {
                                "bookmark_count": 3698,
                                "conversation_id_str": "1768778186186195177",
                                "created_at": "Fri Mar 15 23:15:56 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "extended_entities": {
                                  "media": [
                                    {
                                      "display_url": "pic.twitter.com/BjrvXpkcgz",
                                      "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "features": {
                                        "large": {},
                                        "orig": {}
                                      },
                                      "id_str": "1768778181643755520",
                                      "indices": [
                                        13,
                                        13
                                      ],
                                      "media_key": "3_1768778181643755520",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiL9mKDVmAACgACGIv2Y5IWgOkAAA==",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                                      "original_info": {
                                        "focus_rects": [
                                          "...",
                                          "..."
                                        ],
                                        "height": 1182,
                                        "width": 2048
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "photo",
                                      "url": "https://t.co/BjrvXpkcgz"
                                    },
                                    {
                                      "display_url": "pic.twitter.com/BjrvXpkcgz",
                                      "expanded_url": "https://twitter.com/elonmusk/status/1768778186186195177/photo/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "features": {
                                        "large": {},
                                        "orig": {}
                                      },
                                      "id_str": "1768778181643755520",
                                      "indices": [
                                        13,
                                        13
                                      ],
                                      "media_key": "3_1768778181643755520",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiL9mKDVmAACgACGIv2Y5IWgOkAAA==",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/media/GIv2YoNWYAAREIl.jpg",
                                      "original_info": {
                                        "focus_rects": [
                                          "...",
                                          "..."
                                        ],
                                        "height": 1182,
                                        "width": 2048
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "photo",
                                      "url": "https://t.co/BjrvXpkcgz"
                                    }
                                  ]
                                },
                                "favorite_count": 295170,
                                "full_text": "To the stars https://t.co/BjrvXpkcgz",
                                "lang": "en",
                                "possibly_sensitive_editable": true,
                                "quote_count": 1107,
                                "reply_count": 12347,
                                "retweet_count": 20611,
                                "user_id_str": "44196397"
                              },
                              "rest_id": "1768778186186195177",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYi/ZjkhaA6Q8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1768778186186195177",
                                  "1768778186186195177"
                                ],
                                "editable_until_msecs": "1710548156000",
                                "is_edit_eligible": true,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "50176215",
                                "state": "EnabledWithCount"
                              }
                            }
                          },
                          "reply_to_user_results": {
                            "rest_id": "44196397",
                            "result": {
                              "__typename": "User",
                              "rest_id": "44196397",
                              "core": {
                                "screen_name": "elonmusk"
                              }
                            }
                          }
                        }
                      }
                    },
                    "cursor_type": "Top",
                    "value": "DAADDAABCgABGI64HyGXAGoKAAIYjokI_NYQEAAIAAIAAAABCAADAAAAAAgABAAAAAAKAAUYjsU7iQAnEAoABhiOxTuI_9jwAAA"
                  },
                  "entry_id": "tweet-1769554147450224746",
                  "sort_index": "1769568563095404544"
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
    "search_by_raw_query": {
      "id": "U2VhcmNoUXVlcnk6cXVvdGVkX3R3ZWV0X2lkOjE3Njg3NzgxODYxODYxOTUxNzc=",
      "rest_id": "quoted_tweet_id:1768778186186195177",
      "search_timeline": {
        "id": "VGltZWxpbmU6DAB+CwABAAAAI3F1b3RlZF90d2VldF9pZDoxNzY4Nzc4MTg2MTg2MTk1MTc3AAA=",
        "timeline": {
          "id": "LatestTabSrpProduct-Timeline",
          "instructions": [
            {
              "__typename": "TimelineAddEntries",
              "entries": [
                {
                  "content": {},
                  "entry_id": "tweet-1769554147450224746",
                  "sort_index": "1769568563095404544"
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

## Notes

- Pagination: uses cursor_type
- View counts may come as formatted strings (e.g., `"1,234,567"`)
