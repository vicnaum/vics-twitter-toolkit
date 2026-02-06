# User Likes

**Route:** `GET /UserLikes`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Likes

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| user_id | STRING | Yes | `951329744804392960` |

## Response Schema

```typescript
// Root: UserLikesResponse
interface UserLikesResponse {
  data: UserLikesResponseData;
}

interface UserLikesResponseData {
  user_result_by_rest_id: UserLikesResponseDataUserResultByRestId;
}

interface UserLikesResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  favorites_by_time_timeline_v2: UserFavoritesByTimeTimelineV2;
  rest_id: string;
}

interface UserFavoritesByTimeTimelineV2 {
  id: string;
  timeline: UserFavoritesByTimeTimelineV2Timeline;
}

interface UserFavoritesByTimeTimelineV2Timeline {
  id: string;
  instructions: TimelineAddEntriesItem[];
  metadata: UserFavoritesByTimeTimelineV2TimelineMetadata;
}

interface TimelineAddEntriesItem {
  __typename: string;
  entries: TimelineAddEntriesItemEntriesItem[];
}

interface TimelineAddEntriesItemEntriesItem {
  content: TimelineTimelineItem;  // 27/27
  entry_id: string;  // 27/27
  sort_index: string;  // 27/27
}

interface TimelineTimelineItem {
  __typename?: string;
  content?: TimelineTweet;
  cursor_type?: string;
  value?: string;
}

interface TimelineTweet {
  __typename?: string;
  promoted_metadata?: TimelineTweetPromotedMetadata;
  timeline_tweet_display_type?: string;
  tweet_results?: TimelineTweetTweetResults;
}

interface TimelineTweetPromotedMetadata {
  ad_metadata_container?: TimelineTweetPromotedMetadataAdMetadataContainer;
  advertiser_results?: TimelineTweetPromotedMetadataAdvertiserResults;
  click_tracking_info?: TimelineTweetPromotedMetadataClickTrackingInfo;
  disclosure_type?: string;
  experiment_values?: TimelineTweetPromotedMetadataExperimentValuesItem[];
  impression_id?: string;
  impression_string?: string;
}

interface TimelineTweetPromotedMetadataAdMetadataContainer {
  render_legacy_website_card?: boolean;
  sk_ad_network_data_list?: TimelineTweetPromotedMetadataAdMetadataContainerSkAdNetworkDataListItem[];
}

interface TimelineTweetPromotedMetadataAdMetadataContainerSkAdNetworkDataListItem {
  ad_network_id?: string;  // 4/2
  campaign_id?: string;  // 4/2
  dst_app_id?: string;  // 4/2
  fidelity_type?: number;  // 4/2
  impression_time_in_millis?: number;  // 4/2
  nonce?: string;  // 4/2
  signature?: string;  // 4/2
  src_app_id?: string;  // 4/2
  version?: string;  // 4/2
}

interface TimelineTweetPromotedMetadataAdvertiserResults {
  rest_id?: string;
  result?: User;
}

interface TimelineTweetPromotedMetadataClickTrackingInfo {
  url_params?: TimelineTweetPromotedMetadataClickTrackingInfoUrlParamsItem[];
}

interface TimelineTweetPromotedMetadataClickTrackingInfoUrlParamsItem {
  key?: string;
  value?: string;
}

interface TimelineTweetPromotedMetadataExperimentValuesItem {
  key?: string;
  value?: string;
}

interface TimelineTweetTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface Tweet {
  article: TweetArticle;
  note_tweet: TweetNoteTweet;
  previous_counts: TweetPreviousCounts;
  __typename?: string;
  card?: TweetCard;
  core?: TweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  quoted_tweet_results?: TweetQuotedTweetResults;
  rest_id?: string;
  tweet?: TweetTweet;
  unmention_data?: TweetUnmentionData;
  view_count_info?: TweetViewCountInfo;
}

interface TweetArticle {
  article_results: TweetArticleArticleResults;
}

interface TweetArticleArticleResults {
  id: string;
  rest_id: string;
  result: ArticleEntity;
}

interface ArticleEntity {
  __typename: string;
  cover_media_results: ArticleEntityCoverMediaResults;
  preview_text: string;
  rest_id: string;
  title: string;
}

interface ArticleEntityCoverMediaResults {
  id: string;
  result: ApiMedia;
}

interface ApiMedia {
  __typename: string;
  id: string;
  media_availability: ApiMediaMediaAvailability;
  media_id: string;
  media_info: ApiImage;
  media_key: string;
}

interface ApiMediaMediaAvailability {
  status: string;
}

interface ApiImage {
  __typename: string;
  color_info: ApiImageColorInfo;
  original_img_height: number;
  original_img_url: string;
  original_img_width: number;
}

interface ApiImageColorInfo {
  palette: ApiImageColorInfoPaletteItem[];
}

interface ApiImageColorInfoPaletteItem {
  percentage: number;  // 5/5
  rgb: ApiImageColorInfoPaletteItemRgb;  // 5/5
}

interface ApiImageColorInfoPaletteItemRgb {
  blue?: number;
  green?: number;
  red?: number;
}

interface TweetNoteTweet {
  is_expandable: boolean;
  note_tweet_results: TweetNoteTweetNoteTweetResults;
}

interface TweetNoteTweetNoteTweetResults {
  rest_id: string;
  result: NoteTweet;
}

interface NoteTweet {
  __typename: string;
  entity_set: NoteTweetEntitySet;
  media: NoteTweetMedia;
  rest_id: string;
  richtext: NoteTweetRichtext;
  text: string;
}

interface NoteTweetEntitySet {
  hashtags: NoteTweetEntitySetHashtagsItem[];
  user_mentions: NoteTweetEntitySetUserMentionsItem[];
}

interface NoteTweetEntitySetHashtagsItem {
  indices: number[];
  text: string;
}

interface NoteTweetEntitySetUserMentionsItem {
  id_str: string;  // 2/2
  indices: number[];  // 2/2
  name: string;  // 2/2
  screen_name: string;  // 2/2
}

interface NoteTweetMedia {
  inline_media: unknown[];
}

interface NoteTweetRichtext {
  richtext_tags: unknown[];
}

interface TweetPreviousCounts {
  bookmark_count: number;
  favorite_count: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
}

interface TweetCard {
  legacy?: TweetCardLegacy;
  rest_id?: string;
}

interface TweetCardLegacy {
  binding_values?: TweetCardLegacyBindingValuesItem[];
  card_platform?: TweetCardLegacyCardPlatform;
  name?: string;
  url?: string;
}

interface TweetCardLegacyBindingValuesItem {
  key?: string;  // 8/2
  value?: TweetCardLegacyBindingValuesItemValue;  // 8/2
}

interface TweetCardLegacyBindingValuesItemValue {
  scribe_key?: string;
  string_value?: string;
}

interface TweetCardLegacyCardPlatform {
  platform?: TweetCardLegacyCardPlatformPlatform;
}

interface TweetCardLegacyCardPlatformPlatform {
  audience?: TweetCardLegacyCardPlatformPlatformAudience;
  device?: TweetCardLegacyCardPlatformPlatformDevice;
}

interface TweetCardLegacyCardPlatformPlatformAudience {
  name?: string;
}

interface TweetCardLegacyCardPlatformPlatformDevice {
  name?: string;
  version?: string;
}

interface TweetCore {
  user_results?: TweetCoreUserResults;
}

interface TweetCoreUserResults {
  rest_id?: string;
  result?: User;
}

interface EditControlInitial {
  edit_control_initial: EditControlInitialEditControlInitial;
  __typename?: string;
  edit_tweet_ids?: string[];
  editable_until_msecs?: string;
  edits_remaining?: string;
  is_edit_eligible?: boolean;
}

interface EditControlInitialEditControlInitial {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  edits_remaining: string;
  is_edit_eligible: boolean;
}

interface TweetLegacy {
  place: TweetLegacyPlace;
  bookmark_count?: number;
  conversation_id_str?: string;
  created_at?: string;
  display_text_range?: number[];
  entities?: TweetLegacyEntities;
  extended_entities?: TweetLegacyExtendedEntities;
  favorite_count?: number;
  full_text?: string;
  is_quote_status?: boolean;
  lang?: string;
  possibly_sensitive_editable?: boolean;
  quote_count?: number;
  quoted_status_id_str?: string;
  quoted_status_permalink?: TweetLegacyQuotedStatusPermalink;
  reply_count?: number;
  retweet_count?: number;
  scopes?: TweetLegacyScopes;
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
  hashtags?: TweetLegacyEntitiesHashtagsItem[];
  urls?: TweetLegacyEntitiesUrlsItem[];
  user_mentions?: TweetLegacyEntitiesUserMentionsItem[];
}

interface TweetLegacyEntitiesHashtagsItem {
  indices?: number[];
  text?: string;
}

interface TweetLegacyEntitiesUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface TweetLegacyEntitiesUserMentionsItem {
  id_str?: string;  // 15/3
  indices?: number[];  // 15/3
  name?: string;  // 15/3
  screen_name?: string;  // 15/3
}

interface TweetLegacyExtendedEntities {
  media?: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  additional_media_info?: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: TweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus;
  display_url?: string;  // 15/4
  expanded_url?: string;  // 15/4
  ext_media_availability?: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;  // 15/4
  features?: TweetLegacyExtendedEntitiesMediaItemFeatures;  // 12/4
  id_str?: string;  // 15/4
  indices?: number[];  // 15/4
  media_key?: string;  // 15/4
  media_results?: TweetLegacyExtendedEntitiesMediaItemMediaResults;  // 15/4
  media_url_https?: string;  // 15/4
  original_info?: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;  // 15/4
  sizes?: TweetLegacyExtendedEntitiesMediaItemSizes;  // 15/4
  type?: string;  // 15/4
  url?: string;  // 15/4
  video_info?: TweetLegacyExtendedEntitiesMediaItemVideoInfo;
}

interface TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable?: boolean;
}

interface TweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus {
  allow_download?: boolean;
}

interface TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability {
  status?: string;
}

interface TweetLegacyExtendedEntitiesMediaItemFeatures {
  all?: TweetLegacyExtendedEntitiesMediaItemFeaturesAll;
  large?: TweetLegacyExtendedEntitiesMediaItemFeaturesLarge;
  orig?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrig;
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesAll {
  tags?: TweetLegacyExtendedEntitiesMediaItemFeaturesAllTagsItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesAllTagsItem {
  name?: string;  // 55/12
  screen_name?: string;  // 55/12
  type?: string;  // 55/12
  user_id?: string;  // 55/12
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLarge {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 42/22
  w?: number;  // 42/22
  x?: number;  // 42/22
  y?: number;  // 42/22
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrig {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 42/22
  w?: number;  // 42/22
  x?: number;  // 42/22
  y?: number;  // 42/22
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResults {
  id?: string;
  result?: ApiMedia;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 60/5
  w?: number;  // 60/5
  x?: number;  // 60/5
  y?: number;  // 60/5
}

interface TweetLegacyExtendedEntitiesMediaItemSizes {
  large?: TweetLegacyExtendedEntitiesMediaItemSizesLarge;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  w?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: TweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 7/4
  content_type?: string;  // 9/4
  url?: string;  // 9/4
}

interface TweetLegacyQuotedStatusPermalink {
  display?: string;
  expanded?: string;
  url?: string;
}

interface TweetLegacyScopes {
  followers?: boolean;
}

interface TweetQuotedTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface TweetTweet {
  card: TweetTweetCard;
  note_tweet: TweetTweetNoteTweet;
  quoted_tweet_results: TweetTweetQuotedTweetResults;
  core?: TweetTweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetTweetLegacy;
  rest_id?: string;
  unmention_data?: TweetTweetUnmentionData;
  view_count_info?: TweetTweetViewCountInfo;
}

interface TweetTweetCard {
  legacy: TweetTweetCardLegacy;
  rest_id: string;
}

interface TweetTweetCardLegacy {
  binding_values: TweetTweetCardLegacyBindingValuesItem[];
  card_platform: TweetTweetCardLegacyCardPlatform;
  name: string;
  url: string;
}

interface TweetTweetCardLegacyBindingValuesItem {
  key: string;  // 2/2
  value: TweetTweetCardLegacyBindingValuesItemValue;  // 2/2
}

interface TweetTweetCardLegacyBindingValuesItemValue {
  scribe_key: string;
  string_value?: string;
}

interface TweetTweetCardLegacyCardPlatform {
  platform: TweetTweetCardLegacyCardPlatformPlatform;
}

interface TweetTweetCardLegacyCardPlatformPlatform {
  audience: TweetTweetCardLegacyCardPlatformPlatformAudience;
  device: TweetTweetCardLegacyCardPlatformPlatformDevice;
}

interface TweetTweetCardLegacyCardPlatformPlatformAudience {
  name: string;
}

interface TweetTweetCardLegacyCardPlatformPlatformDevice {
  name: string;
  version: string;
}

interface TweetTweetNoteTweet {
  is_expandable: boolean;
  note_tweet_results: TweetTweetNoteTweetNoteTweetResults;
}

interface TweetTweetNoteTweetNoteTweetResults {
  rest_id: string;
  result: NoteTweet;
}

interface TweetTweetQuotedTweetResults {
  rest_id: string;
  result: Tweet;
}

interface TweetTweetCore {
  user_results?: TweetTweetCoreUserResults;
}

interface TweetTweetCoreUserResults {
  rest_id?: string;
  result?: User;
}

interface TweetTweetLegacy {
  is_quote_status: boolean;
  quoted_status_id_str: string;
  quoted_status_permalink: TweetTweetLegacyQuotedStatusPermalink;
  scopes: TweetTweetLegacyScopes;
  bookmark_count?: number;
  conversation_control?: TweetTweetLegacyConversationControl;
  conversation_id_str?: string;
  created_at?: string;
  display_text_range?: number[];
  entities?: {};
  favorite_count?: number;
  full_text?: string;
  lang?: string;
  limited_actions_policy?: string;
  quote_count?: number;
  reply_count?: number;
  retweet_count?: number;
  user_id_str?: string;
}

interface TweetTweetLegacyQuotedStatusPermalink {
  display: string;
  expanded: string;
  url: string;
}

interface TweetTweetLegacyScopes {
  followers: boolean;
}

interface TweetTweetLegacyConversationControl {
  conversation_owner_results?: TweetTweetLegacyConversationControlConversationOwnerResults;
  policy?: string;
}

interface TweetTweetLegacyConversationControlConversationOwnerResults {
  rest_id?: string;
  result?: User;
}

interface TweetTweetUnmentionData {
  id?: string;
}

interface TweetTweetViewCountInfo {
  count?: string;
  state?: string;
}

interface TweetUnmentionData {
  id?: string;
}

interface TweetViewCountInfo {
  count?: string;
  state?: string;
}

interface UserFavoritesByTimeTimelineV2TimelineMetadata {
  scribe_config: UserFavoritesByTimeTimelineV2TimelineMetadataScribeConfig;
}

interface UserFavoritesByTimeTimelineV2TimelineMetadataScribeConfig {
  page: string;
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
        "favorites_by_time_timeline_v2": {
          "id": "VGltZWxpbmU6CgBaDTPNXM9UMAAA",
          "timeline": {
            "id": "FavoritesByTimeProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineAddEntries",
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768685164970778972",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "1407411848446611459",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 809
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_normal.png"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/1407411848446611459/1709051502"
                                  },
                                  "core": {
                                    "created_at": "Tue Jun 22 18:55:13 +0000 2021",
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {
                                    "label": {
                                      "badge": {
                                        "url": "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_bigger.jpg"
                                      },
                                      "description": "Solana",
                                      "url": {
                                        "url": "https://twitter.com/solana",
                                        "url_type": "DeepLink"
                                      },
                                      "user_label_type": "BusinessLabel",
                                      "user_label_display_type": "Badge"
                                    }
                                  },
                                  "location": {
                                    "location": " Zug, Switzerland"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768685164970778972",
                                      "1768685164970778972"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Solana Foundation is a non-profit organization dedicated to the decentralization, growth, and security of the Solana net...",
                                    "entities": {
                                      "description": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "symbols": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_image_shape": "Square",
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
                                    "followers": 85869,
                                    "following": 53
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "1407411848446611459",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 61,
                                    "tweets": 902
                                  },
                                  "website": {
                                    "url": "https://t.co/nDOWbQ1U00"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  }
                                }
                              }
                            },
                            "is_translatable": false,
                            "legacy": {
                              "bookmark_count": 55,
                              "conversation_id_str": "1768685164970778972",
                              "created_at": "Fri Mar 15 17:06:18 +0000 2024",
                              "display_text_range": [
                                0,
                                0
                              ],
                              "entities": {
                                "urls": [
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "hashtags": [
                                  {
                                    "indices": [
                                      118,
                                      118
                                    ],
                                    "text": "OnlyPossibleOnSolana"
                                  },
                                  {
                                    "indices": [
                                      118,
                                      118
                                    ],
                                    "text": "OnlyPossibleOnSolana"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "951329744804392960",
                                    "indices": [
                                      15,
                                      15
                                    ],
                                    "name": "Solana",
                                    "screen_name": "solana"
                                  },
                                  {
                                    "id_str": "951329744804392960",
                                    "indices": [
                                      15,
                                      15
                                    ],
                                    "name": "Solana",
                                    "screen_name": "solana"
                                  }
                                ]
                              },
                              "favorite_count": 465,
                              "full_text": "https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 17,
                              "reply_count": 49,
                              "retweet_count": 118,
                              "user_id_str": "1407411848446611459",
                              "scopes": {
                                "followers": false
                              },
                              "extended_entities": {
                                "media": [
                                  {
                                    "display_url": "pic.twitter.com/cAp84CefmO",
                                    "expanded_url": "https://twitter.com/rishabhbansal97/status/1769021067409146033/photo/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "features": {
                                      "all": {
                                        "tags": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "large": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "orig": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "id_str": "1769021037163712513",
                                    "indices": [
                                      33,
                                      33
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGIzTScMawLEAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjNNJwxrAsQAA",
                                        "media_key": "3_1769021037163712513"
                                      }
                                    },
                                    "media_url_https": "https://pbs.twimg.com/media/GIzTQrhWEAE-tKr.jpg",
                                    "original_info": {
                                      "focus_rects": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        },
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ],
                                      "height": 942,
                                      "width": 942
                                    },
                                    "sizes": {
                                      "large": {
                                        "h": 942,
                                        "w": 942
                                      }
                                    },
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 4873,
                                      "variants": [
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "display_url": "pic.twitter.com/cAp84CefmO",
                                    "expanded_url": "https://twitter.com/rishabhbansal97/status/1769021067409146033/photo/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "features": {
                                      "all": {
                                        "tags": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "large": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "orig": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "id_str": "1769021037163712513",
                                    "indices": [
                                      33,
                                      33
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGIzTScMawLEAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjNNJwxrAsQAA",
                                        "media_key": "3_1769021037163712513"
                                      }
                                    },
                                    "media_url_https": "https://pbs.twimg.com/media/GIzTQrhWEAE-tKr.jpg",
                                    "original_info": {
                                      "focus_rects": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        },
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ],
                                      "height": 942,
                                      "width": 942
                                    },
                                    "sizes": {
                                      "large": {
                                        "h": 942,
                                        "w": 942
                                      }
                                    },
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 4873,
                                      "variants": [
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "place": {
                                "bounding_box_polygon": {
                                  "coordinates": [
                                    [
                                      [
                                        -74.932319,
                                        -74.932319
                                      ],
                                      [
                                        -74.932319,
                                        -74.932319
                                      ]
                                    ]
                                  ],
                                  "type": "Polygon"
                                },
                                "country": "United States",
                                "country_code": "US",
                                "full_name": "Delhi, NY",
                                "id": "00c96b9a4040e78d",
                                "name": "Delhi",
                                "place_type": "city"
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1768685164970778972",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYi6HJYZYhXA8AAgoAAAAAAA=="
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768685164970778972",
                                "1768685164970778972"
                              ],
                              "editable_until_msecs": "1710525978000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5",
                              "edit_control_initial": {
                                "edit_tweet_ids": [
                                  "1768978085251060180",
                                  "1768978085251060180"
                                ],
                                "editable_until_msecs": "1710595816000",
                                "is_edit_eligible": false,
                                "edits_remaining": "4"
                              }
                            },
                            "view_count_info": {
                              "count": "115897",
                              "state": "EnabledWithCount"
                            },
                            "article": {
                              "article_results": {
                                "id": "QXJ0aWNsZUVudGl0eVJlc3VsdHM6MTc2ODY4MzQzMjE5MDY0MDEyOA==",
                                "rest_id": "1768683432190640128",
                                "result": {
                                  "__typename": "ArticleEntity",
                                  "rest_id": "1768683432190640128",
                                  "title": "Block Optimization on the Solana Network",
                                  "preview_text": "The @Solana network has been experiencing extremely high usage which has tested components of the network — specifically...",
                                  "cover_media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwABQoAARiLoS5UVgAACgACE4ghno9WEAMAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAAFCgABGIuhLlRWAAAKAAITiCGej1YQAwAA",
                                      "media_availability": {
                                        "status": "Available"
                                      },
                                      "media_id": "1768684499028541440",
                                      "media_info": {
                                        "__typename": "ApiImage",
                                        "color_info": {
                                          "palette": "..."
                                        },
                                        "original_img_height": 960,
                                        "original_img_width": 2400,
                                        "original_img_url": "https://pbs.twimg.com/media/GIuhLlRWAAADwvV.jpg"
                                      },
                                      "media_key": "3_1768684499028541440"
                                    }
                                  }
                                }
                              }
                            },
                            "card": {
                              "legacy": {
                                "binding_values": [
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"video_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"install\",...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"video_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"install\",...",
                                      "scribe_key": "card_url"
                                    }
                                  }
                                ],
                                "card_platform": {
                                  "platform": {
                                    "audience": {
                                      "name": "production"
                                    },
                                    "device": {
                                      "name": "iPhone",
                                      "version": "13"
                                    }
                                  }
                                },
                                "name": "unified_card",
                                "url": "card://1763636688243351553"
                              },
                              "rest_id": "card://1763636688243351553"
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768997829282762752",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768997829282762752",
                                  "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                  "entity_set": {
                                    "hashtags": [
                                      {
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "text": "Solana"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "917396937313316865",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Staking Facilities",
                                        "screen_name": "StakingFac"
                                      },
                                      {
                                        "id_str": "917396937313316865",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Staking Facilities",
                                        "screen_name": "StakingFac"
                                      }
                                    ]
                                  },
                                  "media": {
                                    "inline_media": []
                                  },
                                  "richtext": {
                                    "richtext_tags": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "quoted_tweet_results": {
                              "rest_id": "1768904892209570035",
                              "result": {
                                "__typename": "Tweet",
                                "core": {
                                  "user_results": {
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
                                      "identity_profile_labels_highlighted_label": {
                                        "label": {
                                          "badge": "...",
                                          "description": "...",
                                          "url": "...",
                                          "user_label_type": "...",
                                          "user_label_display_type": "..."
                                        }
                                      },
                                      "location": {
                                        "location": "Switzerland"
                                      },
                                      "media_permissions": {
                                        "can_media_tag": true
                                      },
                                      "notifications_settings": {},
                                      "pinned_items": {
                                        "tweet_ids_str": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "privacy": {},
                                      "private_super_following": false,
                                      "profile_bio": {
                                        "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                        "entities": {
                                          "description": "...",
                                          "url": "..."
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
                                        "followers": 2514095,
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
                                },
                                "is_translatable": false,
                                "legacy": {
                                  "bookmark_count": 97,
                                  "conversation_id_str": "1768904892209570035",
                                  "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                  "display_text_range": [
                                    0,
                                    0
                                  ],
                                  "entities": {
                                    "urls": [
                                      {
                                        "display_url": "x.com/i/article/1768…",
                                        "expanded_url": "http://x.com/i/article/1768976374625087489",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/QmI6kqBTtO"
                                      }
                                    ]
                                  },
                                  "extended_entities": {
                                    "media": [
                                      {
                                        "allow_download_status": {
                                          "allow_download": "..."
                                        },
                                        "display_url": "pic.twitter.com/3lV0eR2yxk",
                                        "expanded_url": "https://twitter.com/solana/status/1768904892209570035/photo/1",
                                        "ext_media_availability": {
                                          "status": "..."
                                        },
                                        "features": {
                                          "all": "...",
                                          "large": "...",
                                          "orig": "..."
                                        },
                                        "id_str": "1768900902956732416",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "media_key": "3_1768900902956732416",
                                        "media_results": {
                                          "id": "...",
                                          "result": "..."
                                        },
                                        "media_url_https": "https://pbs.twimg.com/media/GIxl_8uakAAV9B-.jpg",
                                        "original_info": {
                                          "focus_rects": "...",
                                          "height": "...",
                                          "width": "..."
                                        },
                                        "sizes": {
                                          "large": "..."
                                        },
                                        "type": "photo",
                                        "url": "https://t.co/3lV0eR2yxk"
                                      },
                                      {
                                        "allow_download_status": {
                                          "allow_download": "..."
                                        },
                                        "display_url": "pic.twitter.com/3lV0eR2yxk",
                                        "expanded_url": "https://twitter.com/solana/status/1768904892209570035/photo/1",
                                        "ext_media_availability": {
                                          "status": "..."
                                        },
                                        "features": {
                                          "all": "...",
                                          "large": "...",
                                          "orig": "..."
                                        },
                                        "id_str": "1768900902956732416",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "media_key": "3_1768900902956732416",
                                        "media_results": {
                                          "id": "...",
                                          "result": "..."
                                        },
                                        "media_url_https": "https://pbs.twimg.com/media/GIxl_8uakAAV9B-.jpg",
                                        "original_info": {
                                          "focus_rects": "...",
                                          "height": "...",
                                          "width": "..."
                                        },
                                        "sizes": {
                                          "large": "..."
                                        },
                                        "type": "photo",
                                        "url": "https://t.co/3lV0eR2yxk"
                                      }
                                    ]
                                  },
                                  "favorite_count": 5585,
                                  "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                  "lang": "en",
                                  "possibly_sensitive_editable": true,
                                  "quote_count": 270,
                                  "reply_count": 2457,
                                  "retweet_count": 1624,
                                  "user_id_str": "951329744804392960"
                                },
                                "rest_id": "1768904892209570035",
                                "unmention_data": {
                                  "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                },
                                "edit_control": {
                                  "__typename": "EditControlInitial",
                                  "edit_tweet_ids": [
                                    "1768904892209570035",
                                    "1768904892209570035"
                                  ],
                                  "editable_until_msecs": "1710578365000",
                                  "is_edit_eligible": true,
                                  "edits_remaining": "5"
                                },
                                "view_count_info": {
                                  "count": "821035",
                                  "state": "EnabledWithCount"
                                },
                                "article": {
                                  "article_results": {
                                    "id": "QXJ0aWNsZUVudGl0eVJlc3VsdHM6MTc2ODk3NjM3NDYyNTA4NzQ4OQ==",
                                    "rest_id": "1768976374625087489",
                                    "result": {
                                      "__typename": "ArticleEntity",
                                      "rest_id": "1768976374625087489",
                                      "title": "Token Extensions",
                                      "preview_text": "Token Extensions Resources\nOverview page\nVideo overview of Token Extensions\nGetting Started guide\nTechnical Paper on how..."
                                    }
                                  }
                                }
                              }
                            },
                            "tweet": {
                              "card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"!\",\"is_rtl\":false...",
                                        "scribe_key": "card_url"
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"!\",\"is_rtl\":false...",
                                        "scribe_key": "card_url"
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      },
                                      "device": {
                                        "name": "iPhone",
                                        "version": "13"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://1766905118228627456"
                                },
                                "rest_id": "card://1766905118228627456"
                              },
                              "core": {
                                "user_results": {
                                  "rest_id": "1318019421181411329",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 2
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1760448636394074112/MYNv_-_B_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1318019421181411329/1701934039"
                                    },
                                    "core": {
                                      "created_at": "Mon Oct 19 02:41:43 +0000 2020",
                                      "name": "blub",
                                      "screen_name": "Spider1_Aurora"
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
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Support a discussion about digital collectibles (NFT)",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 85,
                                      "following": 1
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1318019421181411329",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 0,
                                      "tweets": 1
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
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1318019421181411329",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1318019421181411329",
                                      "core": {
                                        "screen_name": "Spider1_Aurora"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1766905119457558640",
                                "created_at": "Sun Mar 10 19:13:02 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 93,
                                "full_text": "Hey guys, check out this channel!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 3,
                                "reply_count": 30,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1318019421181411329",
                                "is_quote_status": true,
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                }
                              },
                              "rest_id": "1766905119457558640",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYhU7YPRZAcA8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1766905119457558640",
                                  "1766905119457558640"
                                ],
                                "editable_until_msecs": "1710101582000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "330314",
                                "state": "EnabledWithCount"
                              },
                              "note_tweet": {
                                "note_tweet_results": {
                                  "rest_id": "1768967062284853248",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "rest_id": "1768967062284853248",
                                    "text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                    "entity_set": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    }
                                  }
                                },
                                "is_expandable": true
                              },
                              "quoted_tweet_results": {
                                "rest_id": "1768904892209570035",
                                "result": {
                                  "__typename": "Tweet",
                                  "rest_id": "1768904892209570035",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "951329744804392960",
                                      "result": {
                                        "__typename": "User",
                                        "action_counts": {
                                          "favorites_count": "..."
                                        },
                                        "avatar": {
                                          "image_url": "..."
                                        },
                                        "banner": {
                                          "image_url": "..."
                                        },
                                        "core": {
                                          "created_at": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        "dm_permissions": {
                                          "can_dm": "..."
                                        },
                                        "exclusive_tweet_following": false,
                                        "identity_profile_labels_highlighted_label": {},
                                        "location": {
                                          "location": "..."
                                        },
                                        "media_permissions": {
                                          "can_media_tag": "..."
                                        },
                                        "notifications_settings": {},
                                        "pinned_items": {
                                          "tweet_ids_str": "..."
                                        },
                                        "privacy": {},
                                        "private_super_following": false,
                                        "profile_bio": {
                                          "description": "...",
                                          "entities": "..."
                                        },
                                        "profile_image_shape": "Square",
                                        "profile_metadata": {
                                          "profile_interstitial_type": "...",
                                          "profile_link_color": "..."
                                        },
                                        "profile_translation": {
                                          "translator_type_enum": "..."
                                        },
                                        "properties": {
                                          "has_extended_profile": "..."
                                        },
                                        "relationship_counts": {
                                          "followers": "...",
                                          "following": "..."
                                        },
                                        "relationship_perspectives": {},
                                        "rest_id": "951329744804392960",
                                        "super_follow_eligible": false,
                                        "super_followed_by": false,
                                        "super_following": false,
                                        "tweet_counts": {
                                          "media_tweets": "...",
                                          "tweets": "..."
                                        },
                                        "website": {
                                          "url": "..."
                                        },
                                        "verification": {
                                          "is_blue_verified": "...",
                                          "verified_type": "..."
                                        }
                                      }
                                    }
                                  },
                                  "is_translatable": false,
                                  "legacy": {
                                    "bookmark_count": 97,
                                    "conversation_id_str": "1768904892209570035",
                                    "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {},
                                    "extended_entities": {
                                      "media": [
                                        {
                                          "allow_download_status": "...",
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "ext_media_availability": "...",
                                          "features": "...",
                                          "id_str": "...",
                                          "indices": "...",
                                          "media_key": "...",
                                          "media_results": "...",
                                          "media_url_https": "...",
                                          "original_info": "...",
                                          "sizes": "...",
                                          "type": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 5585,
                                    "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 270,
                                    "reply_count": 2457,
                                    "retweet_count": 1624,
                                    "user_id_str": "951329744804392960"
                                  },
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768904892209570035"
                                    ],
                                    "editable_until_msecs": "1710578365000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "821035",
                                    "state": "EnabledWithCount"
                                  }
                                }
                              }
                            },
                            "previous_counts": {
                              "bookmark_count": 0,
                              "favorite_count": 2,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "quote_count": 0
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710715358869,
                                "nonce": "b325fe24-08dc-40a0-b542-72a4524a2696",
                                "signature": "MDUCGQChBZyct56FtXW48kZgTP92W9YePJKlCyQCGEig3p4vIFoFDUzeXiVjUybmXgtoJ4f8Kg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710715358869,
                                "nonce": "b325fe24-08dc-40a0-b542-72a4524a2696",
                                "signature": "MDUCGQChBZyct56FtXW48kZgTP92W9YePJKlCyQCGEig3p4vIFoFDUzeXiVjUybmXgtoJ4f8Kg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "6613972",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 90606
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1562073119233376256/xi2OPUMe_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/6613972/1661139265"
                              },
                              "core": {
                                "created_at": "Wed Jun 06 08:34:22 +0000 2007",
                                "name": "FanDuel",
                                "screen_name": "FanDuel"
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
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "@FDSportsbook\n@FanDuelCasino\n@FanDuelTV\n\nAge & location restrictions apply. Gambling Problem? Call 1-800-GAMBLER or visi...",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "fanduel.com/RG",
                                        "expanded_url": "http://fanduel.com/RG",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wqj1ELcs35"
                                      },
                                      {
                                        "display_url": "fanduel.com/RG",
                                        "expanded_url": "http://fanduel.com/RG",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wqj1ELcs35"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "FDSportsbook"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "FDSportsbook"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "fanduel.com/join",
                                        "expanded_url": "https://www.fanduel.com/join",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/chZUpF0TWS"
                                      },
                                      {
                                        "display_url": "fanduel.com/join",
                                        "expanded_url": "https://www.fanduel.com/join",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/chZUpF0TWS"
                                      }
                                    ]
                                  }
                                }
                              },
                              "profile_image_shape": "Square",
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1493FF"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": false
                              },
                              "relationship_counts": {
                                "followers": 353348,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76221,
                                "tweets": 145236
                              },
                              "website": {
                                "url": "https://t.co/chZUpF0TWS"
                              },
                              "verification": {
                                "is_blue_verified": false,
                                "verified_type": "Business"
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "22m2yru7krt5ehm1kyxk0zo8sy"
                              },
                              {
                                "key": "twclid",
                                "value": "22m2yru7krt5ehm1kyxk0zo8sy"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [
                            {
                              "key": "image_app_card_variation",
                              "value": "0"
                            },
                            {
                              "key": "image_app_card_variation",
                              "value": "0"
                            }
                          ],
                          "impression_id": "274a29adfa83e7e9",
                          "impression_string": "274a29adfa83e7e9"
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAAHCgABGI6B8s4AAAELAAIAAAATMTc5Mzc3NzQ5NzM1MzM0MDgzNQgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1768685164970778972",
                    "sort_index": "1769494583441358848"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1768685164970778972",
                          "result": {
                            "__typename": "Tweet",
                            "core": {
                              "user_results": {
                                "rest_id": "1407411848446611459",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 809
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1664354560326942721/8btI2Xs7_normal.png"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/1407411848446611459/1709051502"
                                  },
                                  "core": {
                                    "created_at": "Tue Jun 22 18:55:13 +0000 2021",
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {
                                    "label": {
                                      "badge": {
                                        "url": "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_bigger.jpg"
                                      },
                                      "description": "Solana",
                                      "url": {
                                        "url": "https://twitter.com/solana",
                                        "url_type": "DeepLink"
                                      },
                                      "user_label_type": "BusinessLabel",
                                      "user_label_display_type": "Badge"
                                    }
                                  },
                                  "location": {
                                    "location": " Zug, Switzerland"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768685164970778972",
                                      "1768685164970778972"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "Solana Foundation is a non-profit organization dedicated to the decentralization, growth, and security of the Solana net...",
                                    "entities": {
                                      "description": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "symbols": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "url": {
                                        "urls": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  },
                                  "profile_image_shape": "Square",
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
                                    "followers": 85869,
                                    "following": 53
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "1407411848446611459",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 61,
                                    "tweets": 902
                                  },
                                  "website": {
                                    "url": "https://t.co/nDOWbQ1U00"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  }
                                }
                              }
                            },
                            "is_translatable": false,
                            "legacy": {
                              "bookmark_count": 55,
                              "conversation_id_str": "1768685164970778972",
                              "created_at": "Fri Mar 15 17:06:18 +0000 2024",
                              "display_text_range": [
                                0,
                                0
                              ],
                              "entities": {
                                "urls": [
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      0,
                                      0
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "hashtags": [
                                  {
                                    "indices": [
                                      118,
                                      118
                                    ],
                                    "text": "OnlyPossibleOnSolana"
                                  },
                                  {
                                    "indices": [
                                      118,
                                      118
                                    ],
                                    "text": "OnlyPossibleOnSolana"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "951329744804392960",
                                    "indices": [
                                      15,
                                      15
                                    ],
                                    "name": "Solana",
                                    "screen_name": "solana"
                                  },
                                  {
                                    "id_str": "951329744804392960",
                                    "indices": [
                                      15,
                                      15
                                    ],
                                    "name": "Solana",
                                    "screen_name": "solana"
                                  }
                                ]
                              },
                              "favorite_count": 465,
                              "full_text": "https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 17,
                              "reply_count": 49,
                              "retweet_count": 118,
                              "user_id_str": "1407411848446611459",
                              "scopes": {
                                "followers": false
                              },
                              "extended_entities": {
                                "media": [
                                  {
                                    "display_url": "pic.twitter.com/cAp84CefmO",
                                    "expanded_url": "https://twitter.com/rishabhbansal97/status/1769021067409146033/photo/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "features": {
                                      "all": {
                                        "tags": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "large": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "orig": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "id_str": "1769021037163712513",
                                    "indices": [
                                      33,
                                      33
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGIzTScMawLEAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjNNJwxrAsQAA",
                                        "media_key": "3_1769021037163712513"
                                      }
                                    },
                                    "media_url_https": "https://pbs.twimg.com/media/GIzTQrhWEAE-tKr.jpg",
                                    "original_info": {
                                      "focus_rects": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        },
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ],
                                      "height": 942,
                                      "width": 942
                                    },
                                    "sizes": {
                                      "large": {
                                        "h": 942,
                                        "w": 942
                                      }
                                    },
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 4873,
                                      "variants": [
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "display_url": "pic.twitter.com/cAp84CefmO",
                                    "expanded_url": "https://twitter.com/rishabhbansal97/status/1769021067409146033/photo/1",
                                    "ext_media_availability": {
                                      "status": "Available"
                                    },
                                    "features": {
                                      "all": {
                                        "tags": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "large": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "orig": {
                                        "faces": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    },
                                    "id_str": "1769021037163712513",
                                    "indices": [
                                      33,
                                      33
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGIzTScMawLEAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjNNJwxrAsQAA",
                                        "media_key": "3_1769021037163712513"
                                      }
                                    },
                                    "media_url_https": "https://pbs.twimg.com/media/GIzTQrhWEAE-tKr.jpg",
                                    "original_info": {
                                      "focus_rects": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        },
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ],
                                      "height": 942,
                                      "width": 942
                                    },
                                    "sizes": {
                                      "large": {
                                        "h": 942,
                                        "w": 942
                                      }
                                    },
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        16,
                                        16
                                      ],
                                      "duration_millis": 4873,
                                      "variants": [
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        },
                                        {
                                          "content_type": "...",
                                          "url": "...",
                                          "bitrate": "..."
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "place": {
                                "bounding_box_polygon": {
                                  "coordinates": [
                                    [
                                      [
                                        -74.932319,
                                        -74.932319
                                      ],
                                      [
                                        -74.932319,
                                        -74.932319
                                      ]
                                    ]
                                  ],
                                  "type": "Polygon"
                                },
                                "country": "United States",
                                "country_code": "US",
                                "full_name": "Delhi, NY",
                                "id": "00c96b9a4040e78d",
                                "name": "Delhi",
                                "place_type": "city"
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1768685164970778972",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYi6HJYZYhXA8AAgoAAAAAAA=="
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1768685164970778972",
                                "1768685164970778972"
                              ],
                              "editable_until_msecs": "1710525978000",
                              "is_edit_eligible": false,
                              "edits_remaining": "5",
                              "edit_control_initial": {
                                "edit_tweet_ids": [
                                  "1768978085251060180",
                                  "1768978085251060180"
                                ],
                                "editable_until_msecs": "1710595816000",
                                "is_edit_eligible": false,
                                "edits_remaining": "4"
                              }
                            },
                            "view_count_info": {
                              "count": "115897",
                              "state": "EnabledWithCount"
                            },
                            "article": {
                              "article_results": {
                                "id": "QXJ0aWNsZUVudGl0eVJlc3VsdHM6MTc2ODY4MzQzMjE5MDY0MDEyOA==",
                                "rest_id": "1768683432190640128",
                                "result": {
                                  "__typename": "ArticleEntity",
                                  "rest_id": "1768683432190640128",
                                  "title": "Block Optimization on the Solana Network",
                                  "preview_text": "The @Solana network has been experiencing extremely high usage which has tested components of the network — specifically...",
                                  "cover_media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwABQoAARiLoS5UVgAACgACE4ghno9WEAMAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAAFCgABGIuhLlRWAAAKAAITiCGej1YQAwAA",
                                      "media_availability": {
                                        "status": "Available"
                                      },
                                      "media_id": "1768684499028541440",
                                      "media_info": {
                                        "__typename": "ApiImage",
                                        "color_info": {
                                          "palette": "..."
                                        },
                                        "original_img_height": 960,
                                        "original_img_width": 2400,
                                        "original_img_url": "https://pbs.twimg.com/media/GIuhLlRWAAADwvV.jpg"
                                      },
                                      "media_key": "3_1768684499028541440"
                                    }
                                  }
                                }
                              }
                            },
                            "card": {
                              "legacy": {
                                "binding_values": [
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"video_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"install\",...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"video_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"install\",...",
                                      "scribe_key": "card_url"
                                    }
                                  }
                                ],
                                "card_platform": {
                                  "platform": {
                                    "audience": {
                                      "name": "production"
                                    },
                                    "device": {
                                      "name": "iPhone",
                                      "version": "13"
                                    }
                                  }
                                },
                                "name": "unified_card",
                                "url": "card://1763636688243351553"
                              },
                              "rest_id": "card://1763636688243351553"
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768997829282762752",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768997829282762752",
                                  "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                  "entity_set": {
                                    "hashtags": [
                                      {
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "text": "Solana"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "917396937313316865",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Staking Facilities",
                                        "screen_name": "StakingFac"
                                      },
                                      {
                                        "id_str": "917396937313316865",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Staking Facilities",
                                        "screen_name": "StakingFac"
                                      }
                                    ]
                                  },
                                  "media": {
                                    "inline_media": []
                                  },
                                  "richtext": {
                                    "richtext_tags": []
                                  }
                                }
                              },
                              "is_expandable": true
                            },
                            "quoted_tweet_results": {
                              "rest_id": "1768904892209570035",
                              "result": {
                                "__typename": "Tweet",
                                "core": {
                                  "user_results": {
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
                                      "identity_profile_labels_highlighted_label": {
                                        "label": {
                                          "badge": "...",
                                          "description": "...",
                                          "url": "...",
                                          "user_label_type": "...",
                                          "user_label_display_type": "..."
                                        }
                                      },
                                      "location": {
                                        "location": "Switzerland"
                                      },
                                      "media_permissions": {
                                        "can_media_tag": true
                                      },
                                      "notifications_settings": {},
                                      "pinned_items": {
                                        "tweet_ids_str": [
                                          "...",
                                          "..."
                                        ]
                                      },
                                      "privacy": {},
                                      "private_super_following": false,
                                      "profile_bio": {
                                        "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                        "entities": {
                                          "description": "...",
                                          "url": "..."
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
                                        "followers": 2514095,
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
                                },
                                "is_translatable": false,
                                "legacy": {
                                  "bookmark_count": 97,
                                  "conversation_id_str": "1768904892209570035",
                                  "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                  "display_text_range": [
                                    0,
                                    0
                                  ],
                                  "entities": {
                                    "urls": [
                                      {
                                        "display_url": "x.com/i/article/1768…",
                                        "expanded_url": "http://x.com/i/article/1768976374625087489",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/QmI6kqBTtO"
                                      }
                                    ]
                                  },
                                  "extended_entities": {
                                    "media": [
                                      {
                                        "allow_download_status": {
                                          "allow_download": "..."
                                        },
                                        "display_url": "pic.twitter.com/3lV0eR2yxk",
                                        "expanded_url": "https://twitter.com/solana/status/1768904892209570035/photo/1",
                                        "ext_media_availability": {
                                          "status": "..."
                                        },
                                        "features": {
                                          "all": "...",
                                          "large": "...",
                                          "orig": "..."
                                        },
                                        "id_str": "1768900902956732416",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "media_key": "3_1768900902956732416",
                                        "media_results": {
                                          "id": "...",
                                          "result": "..."
                                        },
                                        "media_url_https": "https://pbs.twimg.com/media/GIxl_8uakAAV9B-.jpg",
                                        "original_info": {
                                          "focus_rects": "...",
                                          "height": "...",
                                          "width": "..."
                                        },
                                        "sizes": {
                                          "large": "..."
                                        },
                                        "type": "photo",
                                        "url": "https://t.co/3lV0eR2yxk"
                                      },
                                      {
                                        "allow_download_status": {
                                          "allow_download": "..."
                                        },
                                        "display_url": "pic.twitter.com/3lV0eR2yxk",
                                        "expanded_url": "https://twitter.com/solana/status/1768904892209570035/photo/1",
                                        "ext_media_availability": {
                                          "status": "..."
                                        },
                                        "features": {
                                          "all": "...",
                                          "large": "...",
                                          "orig": "..."
                                        },
                                        "id_str": "1768900902956732416",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "media_key": "3_1768900902956732416",
                                        "media_results": {
                                          "id": "...",
                                          "result": "..."
                                        },
                                        "media_url_https": "https://pbs.twimg.com/media/GIxl_8uakAAV9B-.jpg",
                                        "original_info": {
                                          "focus_rects": "...",
                                          "height": "...",
                                          "width": "..."
                                        },
                                        "sizes": {
                                          "large": "..."
                                        },
                                        "type": "photo",
                                        "url": "https://t.co/3lV0eR2yxk"
                                      }
                                    ]
                                  },
                                  "favorite_count": 5585,
                                  "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                  "lang": "en",
                                  "possibly_sensitive_editable": true,
                                  "quote_count": 270,
                                  "reply_count": 2457,
                                  "retweet_count": 1624,
                                  "user_id_str": "951329744804392960"
                                },
                                "rest_id": "1768904892209570035",
                                "unmention_data": {
                                  "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                },
                                "edit_control": {
                                  "__typename": "EditControlInitial",
                                  "edit_tweet_ids": [
                                    "1768904892209570035",
                                    "1768904892209570035"
                                  ],
                                  "editable_until_msecs": "1710578365000",
                                  "is_edit_eligible": true,
                                  "edits_remaining": "5"
                                },
                                "view_count_info": {
                                  "count": "821035",
                                  "state": "EnabledWithCount"
                                },
                                "article": {
                                  "article_results": {
                                    "id": "QXJ0aWNsZUVudGl0eVJlc3VsdHM6MTc2ODk3NjM3NDYyNTA4NzQ4OQ==",
                                    "rest_id": "1768976374625087489",
                                    "result": {
                                      "__typename": "ArticleEntity",
                                      "rest_id": "1768976374625087489",
                                      "title": "Token Extensions",
                                      "preview_text": "Token Extensions Resources\nOverview page\nVideo overview of Token Extensions\nGetting Started guide\nTechnical Paper on how..."
                                    }
                                  }
                                }
                              }
                            },
                            "tweet": {
                              "card": {
                                "legacy": {
                                  "binding_values": [
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"!\",\"is_rtl\":false...",
                                        "scribe_key": "card_url"
                                      }
                                    },
                                    {
                                      "key": "unified_card",
                                      "value": {
                                        "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"!\",\"is_rtl\":false...",
                                        "scribe_key": "card_url"
                                      }
                                    }
                                  ],
                                  "card_platform": {
                                    "platform": {
                                      "audience": {
                                        "name": "production"
                                      },
                                      "device": {
                                        "name": "iPhone",
                                        "version": "13"
                                      }
                                    }
                                  },
                                  "name": "unified_card",
                                  "url": "card://1766905118228627456"
                                },
                                "rest_id": "card://1766905118228627456"
                              },
                              "core": {
                                "user_results": {
                                  "rest_id": "1318019421181411329",
                                  "result": {
                                    "__typename": "User",
                                    "action_counts": {
                                      "favorites_count": 2
                                    },
                                    "avatar": {
                                      "image_url": "https://pbs.twimg.com/profile_images/1760448636394074112/MYNv_-_B_normal.jpg"
                                    },
                                    "banner": {
                                      "image_url": "https://pbs.twimg.com/profile_banners/1318019421181411329/1701934039"
                                    },
                                    "core": {
                                      "created_at": "Mon Oct 19 02:41:43 +0000 2020",
                                      "name": "blub",
                                      "screen_name": "Spider1_Aurora"
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
                                    "pinned_items": {},
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Support a discussion about digital collectibles (NFT)",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 85,
                                      "following": 1
                                    },
                                    "relationship_perspectives": {},
                                    "rest_id": "1318019421181411329",
                                    "super_follow_eligible": false,
                                    "super_followed_by": false,
                                    "super_following": false,
                                    "tweet_counts": {
                                      "media_tweets": 0,
                                      "tweets": 1
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
                                "bookmark_count": 10,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "1318019421181411329",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1318019421181411329",
                                      "core": {
                                        "screen_name": "Spider1_Aurora"
                                      }
                                    }
                                  },
                                  "policy": "ByInvitation"
                                },
                                "conversation_id_str": "1766905119457558640",
                                "created_at": "Sun Mar 10 19:13:02 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {},
                                "favorite_count": 93,
                                "full_text": "Hey guys, check out this channel!",
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quote_count": 3,
                                "reply_count": 30,
                                "retweet_count": 9,
                                "scopes": {
                                  "followers": false
                                },
                                "user_id_str": "1318019421181411329",
                                "is_quote_status": true,
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                }
                              },
                              "rest_id": "1766905119457558640",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYhU7YPRZAcA8AAgoAAAAAAA=="
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1766905119457558640",
                                  "1766905119457558640"
                                ],
                                "editable_until_msecs": "1710101582000",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "count": "330314",
                                "state": "EnabledWithCount"
                              },
                              "note_tweet": {
                                "note_tweet_results": {
                                  "rest_id": "1768967062284853248",
                                  "result": {
                                    "__typename": "NoteTweet",
                                    "rest_id": "1768967062284853248",
                                    "text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                    "entity_set": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    }
                                  }
                                },
                                "is_expandable": true
                              },
                              "quoted_tweet_results": {
                                "rest_id": "1768904892209570035",
                                "result": {
                                  "__typename": "Tweet",
                                  "rest_id": "1768904892209570035",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "951329744804392960",
                                      "result": {
                                        "__typename": "User",
                                        "action_counts": {
                                          "favorites_count": "..."
                                        },
                                        "avatar": {
                                          "image_url": "..."
                                        },
                                        "banner": {
                                          "image_url": "..."
                                        },
                                        "core": {
                                          "created_at": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        "dm_permissions": {
                                          "can_dm": "..."
                                        },
                                        "exclusive_tweet_following": false,
                                        "identity_profile_labels_highlighted_label": {},
                                        "location": {
                                          "location": "..."
                                        },
                                        "media_permissions": {
                                          "can_media_tag": "..."
                                        },
                                        "notifications_settings": {},
                                        "pinned_items": {
                                          "tweet_ids_str": "..."
                                        },
                                        "privacy": {},
                                        "private_super_following": false,
                                        "profile_bio": {
                                          "description": "...",
                                          "entities": "..."
                                        },
                                        "profile_image_shape": "Square",
                                        "profile_metadata": {
                                          "profile_interstitial_type": "...",
                                          "profile_link_color": "..."
                                        },
                                        "profile_translation": {
                                          "translator_type_enum": "..."
                                        },
                                        "properties": {
                                          "has_extended_profile": "..."
                                        },
                                        "relationship_counts": {
                                          "followers": "...",
                                          "following": "..."
                                        },
                                        "relationship_perspectives": {},
                                        "rest_id": "951329744804392960",
                                        "super_follow_eligible": false,
                                        "super_followed_by": false,
                                        "super_following": false,
                                        "tweet_counts": {
                                          "media_tweets": "...",
                                          "tweets": "..."
                                        },
                                        "website": {
                                          "url": "..."
                                        },
                                        "verification": {
                                          "is_blue_verified": "...",
                                          "verified_type": "..."
                                        }
                                      }
                                    }
                                  },
                                  "is_translatable": false,
                                  "legacy": {
                                    "bookmark_count": 97,
                                    "conversation_id_str": "1768904892209570035",
                                    "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {},
                                    "extended_entities": {
                                      "media": [
                                        {
                                          "allow_download_status": "...",
                                          "display_url": "...",
                                          "expanded_url": "...",
                                          "ext_media_availability": "...",
                                          "features": "...",
                                          "id_str": "...",
                                          "indices": "...",
                                          "media_key": "...",
                                          "media_results": "...",
                                          "media_url_https": "...",
                                          "original_info": "...",
                                          "sizes": "...",
                                          "type": "...",
                                          "url": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 5585,
                                    "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 270,
                                    "reply_count": 2457,
                                    "retweet_count": 1624,
                                    "user_id_str": "951329744804392960"
                                  },
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768904892209570035"
                                    ],
                                    "editable_until_msecs": "1710578365000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "821035",
                                    "state": "EnabledWithCount"
                                  }
                                }
                              }
                            },
                            "previous_counts": {
                              "bookmark_count": 0,
                              "favorite_count": 2,
                              "reply_count": 0,
                              "retweet_count": 0,
                              "quote_count": 0
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710715358869,
                                "nonce": "b325fe24-08dc-40a0-b542-72a4524a2696",
                                "signature": "MDUCGQChBZyct56FtXW48kZgTP92W9YePJKlCyQCGEig3p4vIFoFDUzeXiVjUybmXgtoJ4f8Kg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710715358869,
                                "nonce": "b325fe24-08dc-40a0-b542-72a4524a2696",
                                "signature": "MDUCGQChBZyct56FtXW48kZgTP92W9YePJKlCyQCGEig3p4vIFoFDUzeXiVjUybmXgtoJ4f8Kg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "6613972",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 90606
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1562073119233376256/xi2OPUMe_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/6613972/1661139265"
                              },
                              "core": {
                                "created_at": "Wed Jun 06 08:34:22 +0000 2007",
                                "name": "FanDuel",
                                "screen_name": "FanDuel"
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
                                "can_media_tag": true
                              },
                              "notifications_settings": {},
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "@FDSportsbook\n@FanDuelCasino\n@FanDuelTV\n\nAge & location restrictions apply. Gambling Problem? Call 1-800-GAMBLER or visi...",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "fanduel.com/RG",
                                        "expanded_url": "http://fanduel.com/RG",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wqj1ELcs35"
                                      },
                                      {
                                        "display_url": "fanduel.com/RG",
                                        "expanded_url": "http://fanduel.com/RG",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wqj1ELcs35"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "FDSportsbook"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "FDSportsbook"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "fanduel.com/join",
                                        "expanded_url": "https://www.fanduel.com/join",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/chZUpF0TWS"
                                      },
                                      {
                                        "display_url": "fanduel.com/join",
                                        "expanded_url": "https://www.fanduel.com/join",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/chZUpF0TWS"
                                      }
                                    ]
                                  }
                                }
                              },
                              "profile_image_shape": "Square",
                              "profile_metadata": {
                                "profile_interstitial_type": "",
                                "profile_link_color": "1493FF"
                              },
                              "profile_translation": {
                                "translator_type_enum": "None"
                              },
                              "properties": {
                                "has_extended_profile": false
                              },
                              "relationship_counts": {
                                "followers": 353348,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76221,
                                "tweets": 145236
                              },
                              "website": {
                                "url": "https://t.co/chZUpF0TWS"
                              },
                              "verification": {
                                "is_blue_verified": false,
                                "verified_type": "Business"
                              }
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "22m2yru7krt5ehm1kyxk0zo8sy"
                              },
                              {
                                "key": "twclid",
                                "value": "22m2yru7krt5ehm1kyxk0zo8sy"
                              }
                            ]
                          },
                          "disclosure_type": "NoDisclosure",
                          "experiment_values": [
                            {
                              "key": "image_app_card_variation",
                              "value": "0"
                            },
                            {
                              "key": "image_app_card_variation",
                              "value": "0"
                            }
                          ],
                          "impression_id": "274a29adfa83e7e9",
                          "impression_string": "274a29adfa83e7e9"
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAAHCgABGI6B8s4AAAELAAIAAAATMTc5Mzc3NzQ5NzM1MzM0MDgzNQgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1768685164970778972",
                    "sort_index": "1769494583441358848"
                  }
                ]
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "favorites"
              }
            }
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
        "favorites_by_time_timeline_v2": {
          "id": "VGltZWxpbmU6CgBaDTPNXM9UMAAA",
          "timeline": {
            "id": "FavoritesByTimeProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineAddEntries",
                "entries": [
                  {
                    "content": {},
                    "entry_id": "tweet-1768685164970778972",
                    "sort_index": "1769494583441358848"
                  }
                ]
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "favorites"
              }
            }
          }
        }
      }
    }
  }
}
```

## Notes

- Pagination: uses cursor_type
- View counts may come as formatted strings (e.g., `"1,234,567"`)
