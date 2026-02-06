# User Tweets  & Replies

**Route:** `GET /UserTweetsReplies`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Tweets  & Replies

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| user_id | STRING | Yes | `951329744804392960` |

## Response Schema

```typescript
// Root: UserTweetsRepliesResponse
interface UserTweetsRepliesResponse {
  data: UserTweetsRepliesResponseData;
}

interface UserTweetsRepliesResponseData {
  user_result_by_rest_id: UserTweetsRepliesResponseDataUserResultByRestId;
}

interface UserTweetsRepliesResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  profile_with_replies_timeline_v2: UserProfileWithRepliesTimelineV2;
  rest_id: string;
}

interface UserProfileWithRepliesTimelineV2 {
  id: string;
  timeline: UserProfileWithRepliesTimelineV2Timeline;
}

interface UserProfileWithRepliesTimelineV2Timeline {
  id: string;
  instructions: TimelineClearCacheItem[];
  metadata: UserProfileWithRepliesTimelineV2TimelineMetadata;
}

interface TimelineClearCacheItem {
  __typename: string;  // 3/3
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/3
  entry?: TimelineClearCacheItemEntry;  // 1/3
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 29/29
  entry_id: string;  // 29/29
  sort_index: string;  // 29/29
}

interface TimelineTimelineItem {
  footer: TimelineTimelineItemFooter;
  header: TimelineTimelineItemHeader;
  __typename?: string;
  client_event_info?: TimelineTimelineItemClientEventInfo;
  content?: TimelineTweet;
  cursor_type?: string;
  display_type?: string;
  items?: TimelineTimelineItemItemsItem[];
  metadata?: TimelineTimelineItemMetadata;
  value?: string;
}

interface TimelineTimelineItemFooter {
  landing_url: TimelineTimelineItemFooterLandingUrl;
  text: string;
}

interface TimelineTimelineItemFooterLandingUrl {
  url: string;
  url_type: string;
}

interface TimelineTimelineItemHeader {
  display_type: string;
  sticky: boolean;
  text: string;
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
  source_data: string;
  controller_data?: string;
  injection_type?: string;
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
  ad_network_id?: string;  // 6/2
  campaign_id?: string;  // 6/2
  dst_app_id?: string;  // 6/2
  fidelity_type?: number;  // 6/2
  impression_time_in_millis?: number;  // 6/2
  nonce?: string;  // 6/2
  signature?: string;  // 6/2
  src_app_id?: string;  // 6/2
  version?: string;  // 6/2
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
  tweet: TweetTweet;
  __typename?: string;
  card?: TweetCard;
  core?: TweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  rest_id?: string;
  unmention_data?: TweetUnmentionData;
  view_count_info?: TweetViewCountInfo;
}

interface TweetTweet {
  core: TweetTweetCore;
  edit_control: EditControlInitial;
  is_translatable: boolean;
  legacy: TweetTweetLegacy;
  rest_id: string;
  unmention_data: TweetTweetUnmentionData;
  view_count_info: TweetTweetViewCountInfo;
}

interface TweetTweetCore {
  user_results: TweetTweetCoreUserResults;
}

interface TweetTweetCoreUserResults {
  rest_id: string;
  result: User;
}

interface EditControlInitial {
  __typename: string;
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  edits_remaining: string;
  is_edit_eligible: boolean;
}

interface TweetTweetLegacy {
  bookmark_count: number;
  conversation_control: TweetTweetLegacyConversationControl;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: TweetTweetLegacyEntities;
  favorite_count: number;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  limited_actions_policy: string;
  quote_count: number;
  quoted_status_id_str: string;
  quoted_status_permalink: TweetTweetLegacyQuotedStatusPermalink;
  reply_count: number;
  retweet_count: number;
  retweeted_status_results: TweetTweetLegacyRetweetedStatusResults;
  user_id_str: string;
}

interface TweetTweetLegacyConversationControl {
  conversation_owner_results: TweetTweetLegacyConversationControlConversationOwnerResults;
  policy: string;
}

interface TweetTweetLegacyConversationControlConversationOwnerResults {
  rest_id: string;
  result: User;
}

interface TweetTweetLegacyEntities {
  user_mentions: TweetTweetLegacyEntitiesUserMentionsItem[];
}

interface TweetTweetLegacyEntitiesUserMentionsItem {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

interface TweetTweetLegacyQuotedStatusPermalink {
  display: string;
  expanded: string;
  url: string;
}

interface TweetTweetLegacyRetweetedStatusResults {
  rest_id: string;
  result: TweetWithVisibilityResults;
}

interface TweetWithVisibilityResults {
  __typename: string;
  tweet: TweetWithVisibilityResultsTweet;
}

interface TweetWithVisibilityResultsTweet {
  core: TweetWithVisibilityResultsTweetCore;
  edit_control: EditControlInitial;
  is_translatable: boolean;
  legacy: TweetWithVisibilityResultsTweetLegacy;
  note_tweet: TweetWithVisibilityResultsTweetNoteTweet;
  quoted_tweet_results: TweetWithVisibilityResultsTweetQuotedTweetResults;
  rest_id: string;
  unmention_data: TweetWithVisibilityResultsTweetUnmentionData;
  view_count_info: TweetWithVisibilityResultsTweetViewCountInfo;
}

interface TweetWithVisibilityResultsTweetCore {
  user_results: TweetWithVisibilityResultsTweetCoreUserResults;
}

interface TweetWithVisibilityResultsTweetCoreUserResults {
  rest_id: string;
  result: User;
}

interface TweetWithVisibilityResultsTweetLegacy {
  bookmark_count: number;
  conversation_control: TweetWithVisibilityResultsTweetLegacyConversationControl;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: {};
  favorite_count: number;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  limited_actions_policy: string;
  quote_count: number;
  quoted_status_id_str: string;
  quoted_status_permalink: TweetWithVisibilityResultsTweetLegacyQuotedStatusPermalink;
  reply_count: number;
  retweet_count: number;
  user_id_str: string;
}

interface TweetWithVisibilityResultsTweetLegacyConversationControl {
  conversation_owner_results: TweetWithVisibilityResultsTweetLegacyConversationControlConversationOwnerResults;
  policy: string;
}

interface TweetWithVisibilityResultsTweetLegacyConversationControlConversationOwnerResults {
  rest_id: string;
  result: User;
}

interface TweetWithVisibilityResultsTweetLegacyQuotedStatusPermalink {
  display: string;
  expanded: string;
  url: string;
}

interface TweetWithVisibilityResultsTweetNoteTweet {
  is_expandable: boolean;
  note_tweet_results: TweetWithVisibilityResultsTweetNoteTweetNoteTweetResults;
}

interface TweetWithVisibilityResultsTweetNoteTweetNoteTweetResults {
  rest_id: string;
  result: NoteTweet;
}

interface NoteTweet {
  __typename: string;
  entity_set: NoteTweetEntitySet;
  rest_id: string;
  text: string;
}

interface NoteTweetEntitySet {
  user_mentions: NoteTweetEntitySetUserMentionsItem[];
}

interface NoteTweetEntitySetUserMentionsItem {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

interface TweetWithVisibilityResultsTweetQuotedTweetResults {
  rest_id: string;
  result: Tweet;
}

interface TweetWithVisibilityResultsTweetUnmentionData {
  id: string;
}

interface TweetWithVisibilityResultsTweetViewCountInfo {
  count: string;
  state: string;
}

interface TweetTweetUnmentionData {
  id: string;
}

interface TweetTweetViewCountInfo {
  state: string;
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
  key?: string;  // 10/2
  value?: TweetCardLegacyBindingValuesItemValue;  // 10/2
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

interface TweetLegacy {
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
  retweeted_status_results?: TweetLegacyRetweetedStatusResults;
  scopes?: TweetLegacyScopes;
  user_id_str?: string;
}

interface TweetLegacyEntities {
  urls?: TweetLegacyEntitiesUrlsItem[];
  user_mentions?: TweetLegacyEntitiesUserMentionsItem[];
}

interface TweetLegacyEntitiesUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface TweetLegacyEntitiesUserMentionsItem {
  id_str?: string;  // 21/4
  indices?: number[];  // 21/4
  name?: string;  // 21/4
  screen_name?: string;  // 21/4
}

interface TweetLegacyExtendedEntities {
  media?: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  additional_media_info?: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: TweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus;
  display_url?: string;  // 10/4
  expanded_url?: string;  // 10/4
  ext_media_availability?: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;  // 10/4
  features?: TweetLegacyExtendedEntitiesMediaItemFeatures;  // 7/4
  id_str?: string;  // 10/4
  indices?: number[];  // 10/4
  media_key?: string;  // 10/4
  media_results?: TweetLegacyExtendedEntitiesMediaItemMediaResults;  // 10/4
  media_url_https?: string;  // 10/4
  original_info?: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;  // 10/4
  sizes?: TweetLegacyExtendedEntitiesMediaItemSizes;  // 10/4
  source_status_id_str?: string;  // 9/4
  source_user_id_str?: string;  // 9/4
  type?: string;  // 10/4
  url?: string;  // 10/4
  video_info?: TweetLegacyExtendedEntitiesMediaItemVideoInfo;
}

interface TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo {
  source_user: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoSourceUser;
  monetizable?: boolean;
}

interface TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoSourceUser {
  user_results: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults;
}

interface TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults {
  rest_id: string;
  result: User;
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
  name?: string;  // 52/12
  screen_name?: string;  // 52/12
  type?: string;  // 52/12
  user_id?: string;  // 52/12
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLarge {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 16/7
  w?: number;  // 16/7
  x?: number;  // 16/7
  y?: number;  // 16/7
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrig {
  faces?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 16/7
  w?: number;  // 16/7
  x?: number;  // 16/7
  y?: number;  // 16/7
}

interface TweetLegacyExtendedEntitiesMediaItemMediaResults {
  id?: string;
  result?: ApiMedia;
}

interface ApiMedia {
  __typename?: string;
  id?: string;
  media_key?: string;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 35/5
  w?: number;  // 35/5
  x?: number;  // 35/5
  y?: number;  // 35/5
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

interface TweetLegacyRetweetedStatusResults {
  rest_id?: string;
  result?: Tweet;
}

interface TweetLegacyScopes {
  followers?: boolean;
}

interface TweetUnmentionData {
  id?: string;
}

interface TweetViewCountInfo {
  count?: string;
  state?: string;
}

interface TimelineTimelineItemItemsItem {
  entry_id?: string;  // 22/10
  item?: TimelineTimelineItemItemsItemItem;  // 22/10
}

interface TimelineTimelineItemItemsItemItem {
  client_event_info?: TimelineTimelineItemItemsItemItemClientEventInfo;
  content?: TimelineUser;
}

interface TimelineTimelineItemItemsItemItemClientEventInfo {
  component?: string;
  details?: TimelineTimelineItemItemsItemItemClientEventInfoDetails;
  element?: string;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetails {
  timelines_details?: TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails;
}

interface TimelineTimelineItemItemsItemItemClientEventInfoDetailsTimelinesDetails {
  controller_data?: string;
  injection_type?: string;
  source_data?: string;
}

interface TimelineUser {
  __typename?: string;
  display_type?: string;
  timeline_tweet_display_type?: string;
  tweet_results?: TimelineUserTweetResults;
  user_results?: TimelineUserUserResults;
}

interface TimelineUserTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface TimelineUserUserResults {
  rest_id?: string;
  result?: User;
}

interface TimelineTimelineItemMetadata {
  conversation_metadata?: TimelineTimelineItemMetadataConversationMetadata;
}

interface TimelineTimelineItemMetadataConversationMetadata {
  all_tweet_ids?: string[];
  enable_deduplication?: boolean;
}

interface TimelineClearCacheItemEntry {
  content: TimelineTimelineItem;
  entry_id: string;
  sort_index: string;
}

interface UserProfileWithRepliesTimelineV2TimelineMetadata {
  scribe_config: UserProfileWithRepliesTimelineV2TimelineMetadataScribeConfig;
}

interface UserProfileWithRepliesTimelineV2TimelineMetadataScribeConfig {
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
        "profile_with_replies_timeline_v2": {
          "id": "VGltZWxpbmU6CgBeDTPNXM9UMAAA",
          "timeline": {
            "id": "ProfileAllProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache",
                "entry": {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "pinned_tweets",
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "social_context": {
                        "__typename": "TimelineGeneralContext",
                        "context_type": "Pin",
                        "text": "Pinned"
                      },
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1762509355637719261",
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
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
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
                                  "followers": 2514054,
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
                            "bookmark_count": 208,
                            "conversation_id_str": "1762509355637719261",
                            "created_at": "Tue Feb 27 16:05:50 +0000 2024",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "urls": [
                                {
                                  "display_url": "colosseum.org/renaissance",
                                  "expanded_url": "http://colosseum.org/renaissance",
                                  "indices": [
                                    221,
                                    221
                                  ],
                                  "url": "https://t.co/kCsGgA1jaV"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "1626610682773794816",
                                  "indices": [
                                    59,
                                    59
                                  ],
                                  "name": "Colosseum",
                                  "screen_name": "ColosseumOrg"
                                }
                              ]
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "display_url": "pic.twitter.com/2yawU3Eroc",
                                  "expanded_url": "https://twitter.com/solana/status/1762509355637719261/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "1762481246569963520",
                                  "indices": [
                                    245,
                                    245
                                  ],
                                  "media_key": "7_1762481246569963520",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAwoAARh1l1sRFyAACgACGHWw67gWwN0AAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAADCgABGHWXWxEXIAAKAAIYdbDruBbA3QAA",
                                      "media_key": "7_1762481246569963520"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1762481246569963520/pu/img/ETvuX2l8HxaCvsMs.jpg",
                                  "original_info": {
                                    "focus_rects": [],
                                    "height": 1080,
                                    "width": 1920
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1080,
                                      "w": 1920
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/2yawU3Eroc",
                                  "video_info": {
                                    "aspect_ratio": [
                                      16,
                                      16
                                    ],
                                    "duration_millis": 88588,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/ext_tw_video/1762481246569963520/pu/pl/EbO0Nx6LlqKIQv5F.m3u8?tag=12&container=cmaf",
                                        "bitrate": 256000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/ext_tw_video/1762481246569963520/pu/pl/EbO0Nx6LlqKIQv5F.m3u8?tag=12&container=cmaf",
                                        "bitrate": 256000
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "favorite_count": 3087,
                            "full_text": "1/ Announcing the Solana Renaissance Hackathon, powered by @ColosseumOrg! 🎨\n\n🌍 An online, global Solana hackathon\n🏁 R...",
                            "lang": "en",
                            "possibly_sensitive_editable": true,
                            "quote_count": 206,
                            "reply_count": 2424,
                            "retweet_count": 1162,
                            "user_id_str": "951329744804392960"
                          },
                          "rest_id": "1762509355637719261",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEYdbDruBbA3Q8AAgoAAAABFpLhzD6WcAAA"
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1762509355637719261"
                            ],
                            "editable_until_msecs": "1709053550000",
                            "is_edit_eligible": false,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "count": "1077910",
                            "state": "EnabledWithCount"
                          }
                        }
                      }
                    }
                  },
                  "entry_id": "tweet-1762509355637719261",
                  "sort_index": "1769491585172504576"
                },
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkVyG5vMtoAAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                          }
                        },
                        "element": "tweet"
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1769344282706506099",
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
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                    "profile_link_color": "7FDBB6"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 2514054,
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
                              "bookmark_count": 0,
                              "conversation_id_str": "1769344282706506099",
                              "created_at": "Sun Mar 17 12:45:24 +0000 2024",
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
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  }
                                ]
                              },
                              "favorite_count": 0,
                              "full_text": "RT @SolanaFndn: https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 118,
                              "user_id_str": "951329744804392960",
                              "retweeted_status_results": {
                                "rest_id": "1768685164970778972",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1407411848446611459",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1407411848446611459",
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
                                      ],
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ],
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 464,
                                    "full_text": "https://t.co/8Q1Hp35RQN",
                                    "lang": "zxx",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 17,
                                    "reply_count": 48,
                                    "retweet_count": 118,
                                    "user_id_str": "1407411848446611459",
                                    "extended_entities": {
                                      "media": [
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        },
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        }
                                      ]
                                    },
                                    "place": {
                                      "bounding_box_polygon": {
                                        "coordinates": [
                                          "..."
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
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "115516",
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
                                          "id": "...",
                                          "result": "..."
                                        }
                                      }
                                    }
                                  },
                                  "note_tweet": {
                                    "note_tweet_results": {
                                      "rest_id": "1768997829282762752",
                                      "result": {
                                        "__typename": "NoteTweet",
                                        "rest_id": "1768997829282762752",
                                        "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                        "entity_set": {
                                          "hashtags": "...",
                                          "user_mentions": "..."
                                        },
                                        "media": {
                                          "inline_media": "..."
                                        },
                                        "richtext": {
                                          "richtext_tags": "..."
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
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              },
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1769344282706506099",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjflAMBbxcw8AAgoAAAABE4ghno9WEAMA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1769344282706506099",
                                "1769344282706506099"
                              ],
                              "editable_until_msecs": "1710683124481",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "1",
                              "state": "EnabledWithCount"
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
                            "tweet": {
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
                                        "1762509355637719261"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 2514054,
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
                                "bookmark_count": 0,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "101833150",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "101833150",
                                      "core": {
                                        "screen_name": "rajgokal"
                                      }
                                    }
                                  },
                                  "policy": "Verified"
                                },
                                "conversation_id_str": "1769229480026050823",
                                "created_at": "Sun Mar 17 05:09:13 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "user_mentions": [
                                    {
                                      "id_str": "101833150",
                                      "indices": [
                                        3,
                                        3
                                      ],
                                      "name": "raj 🖤",
                                      "screen_name": "rajgokal"
                                    }
                                  ]
                                },
                                "favorite_count": 0,
                                "full_text": "RT @rajgokal: 🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that...",
                                "is_quote_status": true,
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                },
                                "quote_count": 0,
                                "reply_count": 0,
                                "retweet_count": 418,
                                "user_id_str": "951329744804392960",
                                "retweeted_status_results": {
                                  "rest_id": "1768967062473564368",
                                  "result": {
                                    "__typename": "TweetWithVisibilityResults",
                                    "tweet": {
                                      "rest_id": "1768967062473564368",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 70,
                                        "conversation_control": {
                                          "conversation_owner_results": "...",
                                          "policy": "..."
                                        },
                                        "conversation_id_str": "1768967062473564368",
                                        "created_at": "Sat Mar 16 11:46:28 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "favorite_count": 1958,
                                        "full_text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                        "is_quote_status": true,
                                        "lang": "en",
                                        "limited_actions_policy": "limited_replies",
                                        "quoted_status_id_str": "1768904892209570035",
                                        "quoted_status_permalink": {
                                          "display": "...",
                                          "expanded": "...",
                                          "url": "..."
                                        },
                                        "quote_count": 62,
                                        "reply_count": 92,
                                        "retweet_count": 418,
                                        "user_id_str": "101833150"
                                      },
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjKIrwhpg0A8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710593188000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "286358",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": true
                                      },
                                      "quoted_tweet_results": {
                                        "rest_id": "1768904892209570035",
                                        "result": {
                                          "__typename": "...",
                                          "rest_id": "..."
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled"
                              }
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
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
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
                                  "1767219159337673029",
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
                                "followers": 353343,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76220,
                                "tweets": 145235
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
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
                              },
                              {
                                "key": "twclid",
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
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
                          "impression_id": "2744427a285a6c3f",
                          "impression_string": "2744427a285a6c3f"
                        }
                      },
                      "display_type": "Carousel",
                      "footer": {
                        "landing_url": {
                          "url": "twitter://connect_people?user_id=951329744804392960&display_location=profile_wtf_showmore",
                          "url_type": "DeepLink"
                        },
                        "text": "Show more"
                      },
                      "header": {
                        "display_type": "Classic",
                        "sticky": false,
                        "text": "Who to follow"
                      },
                      "items": [
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "metadata": {
                        "conversation_metadata": {
                          "all_tweet_ids": [
                            "1768938917565198459",
                            "1768938917565198459"
                          ],
                          "enable_deduplication": true
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAABCgABGI5_OLdAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769491585172504575"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkVyG5vMtoAAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                          }
                        },
                        "element": "tweet"
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1769344282706506099",
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
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                    "profile_link_color": "7FDBB6"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 2514054,
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
                              "bookmark_count": 0,
                              "conversation_id_str": "1769344282706506099",
                              "created_at": "Sun Mar 17 12:45:24 +0000 2024",
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
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  }
                                ]
                              },
                              "favorite_count": 0,
                              "full_text": "RT @SolanaFndn: https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 118,
                              "user_id_str": "951329744804392960",
                              "retweeted_status_results": {
                                "rest_id": "1768685164970778972",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1407411848446611459",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1407411848446611459",
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
                                      ],
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ],
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 464,
                                    "full_text": "https://t.co/8Q1Hp35RQN",
                                    "lang": "zxx",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 17,
                                    "reply_count": 48,
                                    "retweet_count": 118,
                                    "user_id_str": "1407411848446611459",
                                    "extended_entities": {
                                      "media": [
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        },
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        }
                                      ]
                                    },
                                    "place": {
                                      "bounding_box_polygon": {
                                        "coordinates": [
                                          "..."
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
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "115516",
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
                                          "id": "...",
                                          "result": "..."
                                        }
                                      }
                                    }
                                  },
                                  "note_tweet": {
                                    "note_tweet_results": {
                                      "rest_id": "1768997829282762752",
                                      "result": {
                                        "__typename": "NoteTweet",
                                        "rest_id": "1768997829282762752",
                                        "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                        "entity_set": {
                                          "hashtags": "...",
                                          "user_mentions": "..."
                                        },
                                        "media": {
                                          "inline_media": "..."
                                        },
                                        "richtext": {
                                          "richtext_tags": "..."
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
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              },
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1769344282706506099",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjflAMBbxcw8AAgoAAAABE4ghno9WEAMA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1769344282706506099",
                                "1769344282706506099"
                              ],
                              "editable_until_msecs": "1710683124481",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "1",
                              "state": "EnabledWithCount"
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
                            "tweet": {
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
                                        "1762509355637719261"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 2514054,
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
                                "bookmark_count": 0,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "101833150",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "101833150",
                                      "core": {
                                        "screen_name": "rajgokal"
                                      }
                                    }
                                  },
                                  "policy": "Verified"
                                },
                                "conversation_id_str": "1769229480026050823",
                                "created_at": "Sun Mar 17 05:09:13 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "user_mentions": [
                                    {
                                      "id_str": "101833150",
                                      "indices": [
                                        3,
                                        3
                                      ],
                                      "name": "raj 🖤",
                                      "screen_name": "rajgokal"
                                    }
                                  ]
                                },
                                "favorite_count": 0,
                                "full_text": "RT @rajgokal: 🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that...",
                                "is_quote_status": true,
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                },
                                "quote_count": 0,
                                "reply_count": 0,
                                "retweet_count": 418,
                                "user_id_str": "951329744804392960",
                                "retweeted_status_results": {
                                  "rest_id": "1768967062473564368",
                                  "result": {
                                    "__typename": "TweetWithVisibilityResults",
                                    "tweet": {
                                      "rest_id": "1768967062473564368",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 70,
                                        "conversation_control": {
                                          "conversation_owner_results": "...",
                                          "policy": "..."
                                        },
                                        "conversation_id_str": "1768967062473564368",
                                        "created_at": "Sat Mar 16 11:46:28 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "favorite_count": 1958,
                                        "full_text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                        "is_quote_status": true,
                                        "lang": "en",
                                        "limited_actions_policy": "limited_replies",
                                        "quoted_status_id_str": "1768904892209570035",
                                        "quoted_status_permalink": {
                                          "display": "...",
                                          "expanded": "...",
                                          "url": "..."
                                        },
                                        "quote_count": 62,
                                        "reply_count": 92,
                                        "retweet_count": 418,
                                        "user_id_str": "101833150"
                                      },
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjKIrwhpg0A8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710593188000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "286358",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": true
                                      },
                                      "quoted_tweet_results": {
                                        "rest_id": "1768904892209570035",
                                        "result": {
                                          "__typename": "...",
                                          "rest_id": "..."
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled"
                              }
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
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
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
                                  "1767219159337673029",
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
                                "followers": 353343,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76220,
                                "tweets": 145235
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
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
                              },
                              {
                                "key": "twclid",
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
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
                          "impression_id": "2744427a285a6c3f",
                          "impression_string": "2744427a285a6c3f"
                        }
                      },
                      "display_type": "Carousel",
                      "footer": {
                        "landing_url": {
                          "url": "twitter://connect_people?user_id=951329744804392960&display_location=profile_wtf_showmore",
                          "url_type": "DeepLink"
                        },
                        "text": "Show more"
                      },
                      "header": {
                        "display_type": "Classic",
                        "sticky": false,
                        "text": "Who to follow"
                      },
                      "items": [
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "metadata": {
                        "conversation_metadata": {
                          "all_tweet_ids": [
                            "1768938917565198459",
                            "1768938917565198459"
                          ],
                          "enable_deduplication": true
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAABCgABGI5_OLdAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769491585172504575"
                  }
                ]
              },
              {
                "__typename": "TimelineClearCache",
                "entry": {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "pinned_tweets",
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "social_context": {
                        "__typename": "TimelineGeneralContext",
                        "context_type": "Pin",
                        "text": "Pinned"
                      },
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1762509355637719261",
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
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
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
                                  "followers": 2514054,
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
                            "bookmark_count": 208,
                            "conversation_id_str": "1762509355637719261",
                            "created_at": "Tue Feb 27 16:05:50 +0000 2024",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "urls": [
                                {
                                  "display_url": "colosseum.org/renaissance",
                                  "expanded_url": "http://colosseum.org/renaissance",
                                  "indices": [
                                    221,
                                    221
                                  ],
                                  "url": "https://t.co/kCsGgA1jaV"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "1626610682773794816",
                                  "indices": [
                                    59,
                                    59
                                  ],
                                  "name": "Colosseum",
                                  "screen_name": "ColosseumOrg"
                                }
                              ]
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "additional_media_info": {
                                    "monetizable": false
                                  },
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "display_url": "pic.twitter.com/2yawU3Eroc",
                                  "expanded_url": "https://twitter.com/solana/status/1762509355637719261/video/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "id_str": "1762481246569963520",
                                  "indices": [
                                    245,
                                    245
                                  ],
                                  "media_key": "7_1762481246569963520",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAwoAARh1l1sRFyAACgACGHWw67gWwN0AAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAADCgABGHWXWxEXIAAKAAIYdbDruBbA3QAA",
                                      "media_key": "7_1762481246569963520"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1762481246569963520/pu/img/ETvuX2l8HxaCvsMs.jpg",
                                  "original_info": {
                                    "focus_rects": [],
                                    "height": 1080,
                                    "width": 1920
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1080,
                                      "w": 1920
                                    }
                                  },
                                  "type": "video",
                                  "url": "https://t.co/2yawU3Eroc",
                                  "video_info": {
                                    "aspect_ratio": [
                                      16,
                                      16
                                    ],
                                    "duration_millis": 88588,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/ext_tw_video/1762481246569963520/pu/pl/EbO0Nx6LlqKIQv5F.m3u8?tag=12&container=cmaf",
                                        "bitrate": 256000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/ext_tw_video/1762481246569963520/pu/pl/EbO0Nx6LlqKIQv5F.m3u8?tag=12&container=cmaf",
                                        "bitrate": 256000
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "favorite_count": 3087,
                            "full_text": "1/ Announcing the Solana Renaissance Hackathon, powered by @ColosseumOrg! 🎨\n\n🌍 An online, global Solana hackathon\n🏁 R...",
                            "lang": "en",
                            "possibly_sensitive_editable": true,
                            "quote_count": 206,
                            "reply_count": 2424,
                            "retweet_count": 1162,
                            "user_id_str": "951329744804392960"
                          },
                          "rest_id": "1762509355637719261",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEYdbDruBbA3Q8AAgoAAAABFpLhzD6WcAAA"
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1762509355637719261"
                            ],
                            "editable_until_msecs": "1709053550000",
                            "is_edit_eligible": false,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "count": "1077910",
                            "state": "EnabledWithCount"
                          }
                        }
                      }
                    }
                  },
                  "entry_id": "tweet-1762509355637719261",
                  "sort_index": "1769491585172504576"
                },
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkVyG5vMtoAAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                          }
                        },
                        "element": "tweet"
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1769344282706506099",
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
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                    "profile_link_color": "7FDBB6"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 2514054,
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
                              "bookmark_count": 0,
                              "conversation_id_str": "1769344282706506099",
                              "created_at": "Sun Mar 17 12:45:24 +0000 2024",
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
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  }
                                ]
                              },
                              "favorite_count": 0,
                              "full_text": "RT @SolanaFndn: https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 118,
                              "user_id_str": "951329744804392960",
                              "retweeted_status_results": {
                                "rest_id": "1768685164970778972",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1407411848446611459",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1407411848446611459",
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
                                      ],
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ],
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 464,
                                    "full_text": "https://t.co/8Q1Hp35RQN",
                                    "lang": "zxx",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 17,
                                    "reply_count": 48,
                                    "retweet_count": 118,
                                    "user_id_str": "1407411848446611459",
                                    "extended_entities": {
                                      "media": [
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        },
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        }
                                      ]
                                    },
                                    "place": {
                                      "bounding_box_polygon": {
                                        "coordinates": [
                                          "..."
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
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "115516",
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
                                          "id": "...",
                                          "result": "..."
                                        }
                                      }
                                    }
                                  },
                                  "note_tweet": {
                                    "note_tweet_results": {
                                      "rest_id": "1768997829282762752",
                                      "result": {
                                        "__typename": "NoteTweet",
                                        "rest_id": "1768997829282762752",
                                        "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                        "entity_set": {
                                          "hashtags": "...",
                                          "user_mentions": "..."
                                        },
                                        "media": {
                                          "inline_media": "..."
                                        },
                                        "richtext": {
                                          "richtext_tags": "..."
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
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              },
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1769344282706506099",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjflAMBbxcw8AAgoAAAABE4ghno9WEAMA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1769344282706506099",
                                "1769344282706506099"
                              ],
                              "editable_until_msecs": "1710683124481",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "1",
                              "state": "EnabledWithCount"
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
                            "tweet": {
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
                                        "1762509355637719261"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 2514054,
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
                                "bookmark_count": 0,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "101833150",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "101833150",
                                      "core": {
                                        "screen_name": "rajgokal"
                                      }
                                    }
                                  },
                                  "policy": "Verified"
                                },
                                "conversation_id_str": "1769229480026050823",
                                "created_at": "Sun Mar 17 05:09:13 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "user_mentions": [
                                    {
                                      "id_str": "101833150",
                                      "indices": [
                                        3,
                                        3
                                      ],
                                      "name": "raj 🖤",
                                      "screen_name": "rajgokal"
                                    }
                                  ]
                                },
                                "favorite_count": 0,
                                "full_text": "RT @rajgokal: 🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that...",
                                "is_quote_status": true,
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                },
                                "quote_count": 0,
                                "reply_count": 0,
                                "retweet_count": 418,
                                "user_id_str": "951329744804392960",
                                "retweeted_status_results": {
                                  "rest_id": "1768967062473564368",
                                  "result": {
                                    "__typename": "TweetWithVisibilityResults",
                                    "tweet": {
                                      "rest_id": "1768967062473564368",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 70,
                                        "conversation_control": {
                                          "conversation_owner_results": "...",
                                          "policy": "..."
                                        },
                                        "conversation_id_str": "1768967062473564368",
                                        "created_at": "Sat Mar 16 11:46:28 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "favorite_count": 1958,
                                        "full_text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                        "is_quote_status": true,
                                        "lang": "en",
                                        "limited_actions_policy": "limited_replies",
                                        "quoted_status_id_str": "1768904892209570035",
                                        "quoted_status_permalink": {
                                          "display": "...",
                                          "expanded": "...",
                                          "url": "..."
                                        },
                                        "quote_count": 62,
                                        "reply_count": 92,
                                        "retweet_count": 418,
                                        "user_id_str": "101833150"
                                      },
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjKIrwhpg0A8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710593188000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "286358",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": true
                                      },
                                      "quoted_tweet_results": {
                                        "rest_id": "1768904892209570035",
                                        "result": {
                                          "__typename": "...",
                                          "rest_id": "..."
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled"
                              }
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
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
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
                                  "1767219159337673029",
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
                                "followers": 353343,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76220,
                                "tweets": 145235
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
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
                              },
                              {
                                "key": "twclid",
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
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
                          "impression_id": "2744427a285a6c3f",
                          "impression_string": "2744427a285a6c3f"
                        }
                      },
                      "display_type": "Carousel",
                      "footer": {
                        "landing_url": {
                          "url": "twitter://connect_people?user_id=951329744804392960&display_location=profile_wtf_showmore",
                          "url_type": "DeepLink"
                        },
                        "text": "Show more"
                      },
                      "header": {
                        "display_type": "Classic",
                        "sticky": false,
                        "text": "Who to follow"
                      },
                      "items": [
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "metadata": {
                        "conversation_metadata": {
                          "all_tweet_ids": [
                            "1768938917565198459",
                            "1768938917565198459"
                          ],
                          "enable_deduplication": true
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAABCgABGI5_OLdAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769491585172504575"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkVyG5vMtoAAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                          }
                        },
                        "element": "tweet"
                      },
                      "content": {
                        "__typename": "TimelineTweet",
                        "timeline_tweet_display_type": "Tweet",
                        "tweet_results": {
                          "rest_id": "1769344282706506099",
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
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                    "profile_link_color": "7FDBB6"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 2514054,
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
                              "bookmark_count": 0,
                              "conversation_id_str": "1769344282706506099",
                              "created_at": "Sun Mar 17 12:45:24 +0000 2024",
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
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  },
                                  {
                                    "display_url": "x.com/i/article/1768…",
                                    "expanded_url": "http://x.com/i/article/1768683432190640128",
                                    "indices": [
                                      16,
                                      16
                                    ],
                                    "url": "https://t.co/8Q1Hp35RQN"
                                  }
                                ],
                                "user_mentions": [
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  },
                                  {
                                    "id_str": "1407411848446611459",
                                    "indices": [
                                      3,
                                      3
                                    ],
                                    "name": "Solana Foundation",
                                    "screen_name": "SolanaFndn"
                                  }
                                ]
                              },
                              "favorite_count": 0,
                              "full_text": "RT @SolanaFndn: https://t.co/8Q1Hp35RQN",
                              "lang": "zxx",
                              "possibly_sensitive_editable": true,
                              "quote_count": 0,
                              "reply_count": 0,
                              "retweet_count": 118,
                              "user_id_str": "951329744804392960",
                              "retweeted_status_results": {
                                "rest_id": "1768685164970778972",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1407411848446611459",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1407411848446611459",
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
                                      ],
                                      "hashtags": [
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        },
                                        {
                                          "indices": "...",
                                          "text": "..."
                                        }
                                      ],
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
                                    "favorite_count": 464,
                                    "full_text": "https://t.co/8Q1Hp35RQN",
                                    "lang": "zxx",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 17,
                                    "reply_count": 48,
                                    "retweet_count": 118,
                                    "user_id_str": "1407411848446611459",
                                    "extended_entities": {
                                      "media": [
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        },
                                        {
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
                                          "url": "...",
                                          "additional_media_info": "...",
                                          "allow_download_status": "...",
                                          "video_info": "..."
                                        }
                                      ]
                                    },
                                    "place": {
                                      "bounding_box_polygon": {
                                        "coordinates": [
                                          "..."
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
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "115516",
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
                                          "id": "...",
                                          "result": "..."
                                        }
                                      }
                                    }
                                  },
                                  "note_tweet": {
                                    "note_tweet_results": {
                                      "rest_id": "1768997829282762752",
                                      "result": {
                                        "__typename": "NoteTweet",
                                        "rest_id": "1768997829282762752",
                                        "text": "A heart-felt GM from the entire @StakingFac team on this very special day. \n\n‘G’ as in genesis - others would call that ...",
                                        "entity_set": {
                                          "hashtags": "...",
                                          "user_mentions": "..."
                                        },
                                        "media": {
                                          "inline_media": "..."
                                        },
                                        "richtext": {
                                          "richtext_tags": "..."
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
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              },
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
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
                                      54,
                                      54
                                    ],
                                    "media_key": "3_1769021037163712513",
                                    "media_results": {
                                      "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARiM00K4VhABCgACGI0RCgDX0AMAAA==",
                                      "result": {
                                        "__typename": "ApiMedia",
                                        "id": "QXBpTWVkaWE6DAABCgABGIzTQrhWEAEKAAIYjREKANfQAwAA",
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
                                    "source_status_id_str": "1769021067409146033",
                                    "source_user_id_str": "304437309",
                                    "type": "photo",
                                    "url": "https://t.co/cAp84CefmO",
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
                                    },
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "duration_millis": 1607233,
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
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    }
                                  }
                                ]
                              },
                              "is_quote_status": true,
                              "quoted_status_id_str": "1768904892209570035",
                              "quoted_status_permalink": {
                                "display": "x.com/solana/status/…",
                                "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                "url": "https://t.co/WmbiWAlMEh"
                              }
                            },
                            "rest_id": "1769344282706506099",
                            "unmention_data": {
                              "id": "VW5tZW50aW9uczoKAAEYjflAMBbxcw8AAgoAAAABE4ghno9WEAMA"
                            },
                            "edit_control": {
                              "__typename": "EditControlInitial",
                              "edit_tweet_ids": [
                                "1769344282706506099",
                                "1769344282706506099"
                              ],
                              "editable_until_msecs": "1710683124481",
                              "is_edit_eligible": false,
                              "edits_remaining": "5"
                            },
                            "view_count_info": {
                              "count": "1",
                              "state": "EnabledWithCount"
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
                            "tweet": {
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
                                        "1762509355637719261"
                                      ]
                                    },
                                    "privacy": {},
                                    "private_super_following": false,
                                    "profile_bio": {
                                      "description": "Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed. Twitter by @SolanaFn...",
                                      "entities": {
                                        "description": {
                                          "user_mentions": "..."
                                        },
                                        "url": {
                                          "urls": "..."
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
                                      "followers": 2514054,
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
                                "bookmark_count": 0,
                                "conversation_control": {
                                  "conversation_owner_results": {
                                    "rest_id": "101833150",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "101833150",
                                      "core": {
                                        "screen_name": "rajgokal"
                                      }
                                    }
                                  },
                                  "policy": "Verified"
                                },
                                "conversation_id_str": "1769229480026050823",
                                "created_at": "Sun Mar 17 05:09:13 +0000 2024",
                                "display_text_range": [
                                  0,
                                  0
                                ],
                                "entities": {
                                  "user_mentions": [
                                    {
                                      "id_str": "101833150",
                                      "indices": [
                                        3,
                                        3
                                      ],
                                      "name": "raj 🖤",
                                      "screen_name": "rajgokal"
                                    }
                                  ]
                                },
                                "favorite_count": 0,
                                "full_text": "RT @rajgokal: 🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that...",
                                "is_quote_status": true,
                                "lang": "en",
                                "limited_actions_policy": "limited_replies",
                                "quoted_status_id_str": "1768904892209570035",
                                "quoted_status_permalink": {
                                  "display": "x.com/solana/status/…",
                                  "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                  "url": "https://t.co/cH3avxFrQ5"
                                },
                                "quote_count": 0,
                                "reply_count": 0,
                                "retweet_count": 418,
                                "user_id_str": "951329744804392960",
                                "retweeted_status_results": {
                                  "rest_id": "1768967062473564368",
                                  "result": {
                                    "__typename": "TweetWithVisibilityResults",
                                    "tweet": {
                                      "rest_id": "1768967062473564368",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 70,
                                        "conversation_control": {
                                          "conversation_owner_results": "...",
                                          "policy": "..."
                                        },
                                        "conversation_id_str": "1768967062473564368",
                                        "created_at": "Sat Mar 16 11:46:28 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "favorite_count": 1958,
                                        "full_text": "🎂 happy birthday to solana 🥳\n\non march 16, 2020, lockdowns were spreading financial panic globally. that day the dow d...",
                                        "is_quote_status": true,
                                        "lang": "en",
                                        "limited_actions_policy": "limited_replies",
                                        "quoted_status_id_str": "1768904892209570035",
                                        "quoted_status_permalink": {
                                          "display": "...",
                                          "expanded": "...",
                                          "url": "..."
                                        },
                                        "quote_count": 62,
                                        "reply_count": 92,
                                        "retweet_count": 418,
                                        "user_id_str": "101833150"
                                      },
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjKIrwhpg0A8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710593188000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "286358",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": true
                                      },
                                      "quoted_tweet_results": {
                                        "rest_id": "1768904892209570035",
                                        "result": {
                                          "__typename": "...",
                                          "rest_id": "..."
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled"
                              }
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
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "18",
                                "dst_app_id": "1608208805",
                                "impression_time_in_millis": 1710714643981,
                                "nonce": "45972f1e-34df-4d5f-b0c2-27029bad8f2c",
                                "signature": "MDUCGQCJw6IQw6LjhscYLv9ldSkm0S3BqbwSxgkCGBCb1wyd1dfQ5nxgufK66TlCl+PAUjCUDg==",
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
                                  "1767219159337673029",
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
                                "followers": 353343,
                                "following": 4006
                              },
                              "relationship_perspectives": {},
                              "rest_id": "6613972",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 76220,
                                "tweets": 145235
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
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
                              },
                              {
                                "key": "twclid",
                                "value": "2-4215ctrai3njr7x5xcpgpk711"
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
                          "impression_id": "2744427a285a6c3f",
                          "impression_string": "2744427a285a6c3f"
                        }
                      },
                      "display_type": "Carousel",
                      "footer": {
                        "landing_url": {
                          "url": "twitter://connect_people?user_id=951329744804392960&display_location=profile_wtf_showmore",
                          "url_type": "DeepLink"
                        },
                        "text": "Show more"
                      },
                      "header": {
                        "display_type": "Classic",
                        "sticky": false,
                        "text": "Who to follow"
                      },
                      "items": [
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769491585172504582-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgAB3ihPDlCDp+wKAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
                                }
                              },
                              "element": "user"
                            },
                            "content": {
                              "__typename": "TimelineUser",
                              "display_type": "User",
                              "user_results": {
                                "rest_id": "2312333412",
                                "result": {
                                  "__typename": "User",
                                  "action_counts": {
                                    "favorites_count": 2090
                                  },
                                  "avatar": {
                                    "image_url": "https://pbs.twimg.com/profile_images/1627642622645878784/TP1GH9TM_normal.jpg"
                                  },
                                  "banner": {
                                    "image_url": "https://pbs.twimg.com/profile_banners/2312333412/1676895216"
                                  },
                                  "core": {
                                    "created_at": "Sun Jan 26 19:15:24 +0000 2014",
                                    "name": "Ethereum Foundation",
                                    "screen_name": "ethereum"
                                  },
                                  "dm_permissions": {
                                    "can_dm": false
                                  },
                                  "exclusive_tweet_following": false,
                                  "identity_profile_labels_highlighted_label": {},
                                  "location": {
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1768008251495338448",
                                      "1768008251495338448"
                                    ]
                                  },
                                  "privacy": {},
                                  "private_super_following": false,
                                  "profile_bio": {
                                    "description": "EF is a non-profit and part of a community of organizations and people working to fund protocol development, grow the ec...",
                                    "entities": {
                                      "description": {
                                        "hashtags": [
                                          "...",
                                          "..."
                                        ],
                                        "user_mentions": [
                                          "...",
                                          "..."
                                        ],
                                        "urls": [
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
                                  "profile_metadata": {
                                    "profile_interstitial_type": "",
                                    "profile_link_color": "666666"
                                  },
                                  "profile_translation": {
                                    "translator_type_enum": "None"
                                  },
                                  "properties": {
                                    "has_extended_profile": true
                                  },
                                  "relationship_counts": {
                                    "followers": 3336991,
                                    "following": 0
                                  },
                                  "relationship_perspectives": {},
                                  "rest_id": "2312333412",
                                  "super_follow_eligible": false,
                                  "super_followed_by": false,
                                  "super_following": false,
                                  "tweet_counts": {
                                    "media_tweets": 405,
                                    "tweets": 3605
                                  },
                                  "website": {
                                    "url": "https://t.co/eL8HNFWxrK"
                                  },
                                  "verification": {
                                    "is_blue_verified": true,
                                    "verified_type": "Business"
                                  },
                                  "profile_image_shape": "Square"
                                }
                              },
                              "timeline_tweet_display_type": "Tweet",
                              "tweet_results": {
                                "rest_id": "1768938917565198459",
                                "result": {
                                  "__typename": "Tweet",
                                  "core": {
                                    "user_results": {
                                      "rest_id": "1586801129173782530",
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
                                        "identity_profile_labels_highlighted_label": {
                                          "label": "..."
                                        },
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
                                        "rest_id": "1586801129173782530",
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
                                    "bookmark_count": 1,
                                    "conversation_id_str": "1768938917565198459",
                                    "created_at": "Sat Mar 16 09:54:37 +0000 2024",
                                    "display_text_range": [
                                      0,
                                      0
                                    ],
                                    "entities": {
                                      "user_mentions": [
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        },
                                        {
                                          "id_str": "...",
                                          "indices": "...",
                                          "name": "...",
                                          "screen_name": "..."
                                        }
                                      ]
                                    },
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
                                        },
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
                                    "favorite_count": 78,
                                    "full_text": "Are we excited about Solana's Bday? \nYes. \nYes we are. https://t.co/uMJBbJqbrZ",
                                    "lang": "en",
                                    "possibly_sensitive_editable": true,
                                    "quote_count": 4,
                                    "reply_count": 8,
                                    "retweet_count": 12,
                                    "user_id_str": "1586801129173782530",
                                    "in_reply_to_status_id_str": "1768938917565198459",
                                    "is_quote_status": true,
                                    "quoted_status_id_str": "1768904892209570035",
                                    "quoted_status_permalink": {
                                      "display": "x.com/solana/status/…",
                                      "expanded": "https://twitter.com/solana/status/1768904892209570035",
                                      "url": "https://t.co/FnpnYIDL2e"
                                    }
                                  },
                                  "rest_id": "1768938917565198459",
                                  "unmention_data": {
                                    "id": "VW5tZW50aW9uczoKAAEYjIiSwtZwew8AAgoAAAAAAA=="
                                  },
                                  "edit_control": {
                                    "__typename": "EditControlInitial",
                                    "edit_tweet_ids": [
                                      "1768938917565198459",
                                      "1768938917565198459"
                                    ],
                                    "editable_until_msecs": "1710586477000",
                                    "is_edit_eligible": true,
                                    "edits_remaining": "5"
                                  },
                                  "view_count_info": {
                                    "count": "4864",
                                    "state": "EnabledWithCount"
                                  },
                                  "reply_to_user_results": {
                                    "rest_id": "1586801129173782530",
                                    "result": {
                                      "__typename": "User",
                                      "rest_id": "1586801129173782530",
                                      "core": {
                                        "screen_name": "SuperteamDE"
                                      }
                                    }
                                  },
                                  "quoted_tweet_results": {
                                    "rest_id": "1768904892209570035",
                                    "result": {
                                      "__typename": "Tweet",
                                      "core": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      },
                                      "is_translatable": false,
                                      "legacy": {
                                        "bookmark_count": 97,
                                        "conversation_id_str": "1768904892209570035",
                                        "created_at": "Sat Mar 16 07:39:25 +0000 2024",
                                        "display_text_range": [
                                          "...",
                                          "..."
                                        ],
                                        "entities": {},
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5581,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 270,
                                        "reply_count": 2453,
                                        "retweet_count": 1627,
                                        "user_id_str": "951329744804392960"
                                      },
                                      "rest_id": "1768904892209570035",
                                      "unmention_data": {
                                        "id": "VW5tZW50aW9uczoKAAEYjGmgnZog8w8AAgoAAAAAAA=="
                                      },
                                      "edit_control": {
                                        "__typename": "EditControlInitial",
                                        "edit_tweet_ids": [
                                          "...",
                                          "..."
                                        ],
                                        "editable_until_msecs": "1710578365000",
                                        "is_edit_eligible": true,
                                        "edits_remaining": "5"
                                      },
                                      "view_count_info": {
                                        "count": "820155",
                                        "state": "EnabledWithCount"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "metadata": {
                        "conversation_metadata": {
                          "all_tweet_ids": [
                            "1768938917565198459",
                            "1768938917565198459"
                          ],
                          "enable_deduplication": true
                        }
                      },
                      "cursor_type": "Top",
                      "value": "DAABCgABGI5_OLdAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769491585172504575"
                  }
                ]
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "profileAll"
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
        "profile_with_replies_timeline_v2": {
          "id": "VGltZWxpbmU6CgBeDTPNXM9UMAAA",
          "timeline": {
            "id": "ProfileAllProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache"
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "profileAll"
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
- GraphQL-style response with 3 `__typename` discriminated type(s)
