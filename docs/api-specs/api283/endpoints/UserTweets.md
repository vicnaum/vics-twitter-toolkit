# User Tweets

**Route:** `GET /UserTweets`
**API:** `twitter283.p.rapidapi.com`
**Description:** Get User Tweets By ID

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | Yes | `951329744804392960` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: UserTweetsResponse
interface UserTweetsResponse {
  data: UserTweetsResponseData;
}

interface UserTweetsResponseData {
  user_result_by_rest_id: UserTweetsResponseDataUserResultByRestId;
}

interface UserTweetsResponseDataUserResultByRestId {
  rest_id: string;
  result: User;
}

interface User {
  __typename: string;
  profile_timeline_v2: UserProfileTimelineV2;
  rest_id: string;
}

interface UserProfileTimelineV2 {
  id: string;
  timeline: UserProfileTimelineV2Timeline;
}

interface UserProfileTimelineV2Timeline {
  id: string;
  instructions: TimelineClearCacheItem[];
  metadata: UserProfileTimelineV2TimelineMetadata;
}

interface TimelineClearCacheItem {
  __typename: string;  // 3/3
  entries?: TimelineClearCacheItemEntriesItem[];  // 1/3
  entry?: TimelineClearCacheItemEntry;  // 1/3
}

interface TimelineClearCacheItemEntriesItem {
  content: TimelineTimelineItem;  // 28/28
  entry_id: string;  // 28/28
  sort_index: string;  // 28/28
}

interface TimelineTimelineItem {
  display_type: string;
  footer: TimelineTimelineItemFooter;
  header: TimelineTimelineItemHeader;
  items: TimelineTimelineItemItemsItem[];
  __typename?: string;
  client_event_info?: TimelineTimelineItemClientEventInfo;
  content?: TimelineTweet;
  cursor_type?: string;
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

interface TimelineTimelineItemItemsItem {
  entry_id: string;  // 10/10
  item: TimelineTimelineItemItemsItemItem;  // 10/10
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
  user_results?: TimelineUserUserResults;
}

interface TimelineUserUserResults {
  rest_id?: string;
  result?: User;
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
  note_tweet: TweetNoteTweet;
  __typename?: string;
  card?: TweetCard;
  core?: TweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  rest_id?: string;
  tweet?: TweetTweet;
  unmention_data?: TweetUnmentionData;
  view_count_info?: TweetViewCountInfo;
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
  urls: NoteTweetEntitySetUrlsItem[];
  user_mentions: NoteTweetEntitySetUserMentionsItem[];
}

interface NoteTweetEntitySetUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface NoteTweetEntitySetUserMentionsItem {
  id_str: string;  // 10/10
  indices: number[];  // 10/10
  name: string;  // 10/10
  screen_name: string;  // 10/10
}

interface NoteTweetMedia {
  inline_media: unknown[];
}

interface NoteTweetRichtext {
  richtext_tags: unknown[];
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
  __typename?: string;
  edit_tweet_ids?: string[];
  editable_until_msecs?: string;
  edits_remaining?: string;
  is_edit_eligible?: boolean;
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
  id_str?: string;  // 31/4
  indices?: number[];  // 31/4
  name?: string;  // 31/4
  screen_name?: string;  // 31/4
}

interface TweetLegacyExtendedEntities {
  media?: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  additional_media_info: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: TweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus;
  display_url?: string;  // 11/4
  expanded_url?: string;  // 11/4
  ext_media_availability?: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;  // 11/4
  features?: TweetLegacyExtendedEntitiesMediaItemFeatures;  // 9/4
  id_str?: string;  // 11/4
  indices?: number[];  // 11/4
  media_key?: string;  // 11/4
  media_results?: TweetLegacyExtendedEntitiesMediaItemMediaResults;  // 11/4
  media_url_https?: string;  // 11/4
  original_info?: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;  // 11/4
  sizes?: TweetLegacyExtendedEntitiesMediaItemSizes;  // 11/4
  source_status_id_str?: string;  // 9/4
  source_user_id_str?: string;  // 9/4
  type?: string;  // 11/4
  url?: string;  // 11/4
  video_info?: TweetLegacyExtendedEntitiesMediaItemVideoInfo;
}

interface TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable: boolean;
  source_user: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoSourceUser;
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
  name?: string;  // 54/12
  screen_name?: string;  // 54/12
  type?: string;  // 54/12
  user_id?: string;  // 54/12
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
  h?: number;  // 45/5
  w?: number;  // 45/5
  x?: number;  // 45/5
  y?: number;  // 45/5
}

interface TweetLegacyExtendedEntitiesMediaItemSizes {
  large?: TweetLegacyExtendedEntitiesMediaItemSizesLarge;
}

interface TweetLegacyExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  w?: number;
}

interface TweetLegacyExtendedEntitiesMediaItemVideoInfo {
  duration_millis: number;
  aspect_ratio?: number[];
  variants?: TweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem {
  bitrate: number;  // 4/4
  content_type?: string;  // 5/4
  url?: string;  // 5/4
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

interface TweetTweet {
  core?: TweetTweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetTweetLegacy;
  rest_id?: string;
  unmention_data?: TweetTweetUnmentionData;
  view_count_info?: TweetTweetViewCountInfo;
}

interface TweetTweetCore {
  user_results?: TweetTweetCoreUserResults;
}

interface TweetTweetCoreUserResults {
  rest_id?: string;
  result?: User;
}

interface TweetTweetLegacy {
  extended_entities: TweetTweetLegacyExtendedEntities;
  is_quote_status: boolean;
  possibly_sensitive_editable: boolean;
  quoted_status_id_str: string;
  quoted_status_permalink: TweetTweetLegacyQuotedStatusPermalink;
  retweeted_status_results: TweetTweetLegacyRetweetedStatusResults;
  scopes: TweetTweetLegacyScopes;
  bookmark_count?: number;
  conversation_control?: TweetTweetLegacyConversationControl;
  conversation_id_str?: string;
  created_at?: string;
  display_text_range?: number[];
  entities?: TweetTweetLegacyEntities;
  favorite_count?: number;
  full_text?: string;
  lang?: string;
  limited_actions_policy?: string;
  quote_count?: number;
  reply_count?: number;
  retweet_count?: number;
  user_id_str?: string;
}

interface TweetTweetLegacyExtendedEntities {
  media: TweetTweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetTweetLegacyExtendedEntitiesMediaItem {
  additional_media_info: TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status: TweetTweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus;
  display_url: string;
  expanded_url: string;
  ext_media_availability: TweetTweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;
  id_str: string;
  indices: number[];
  media_key: string;
  media_results: TweetTweetLegacyExtendedEntitiesMediaItemMediaResults;
  media_url_https: string;
  original_info: TweetTweetLegacyExtendedEntitiesMediaItemOriginalInfo;
  sizes: TweetTweetLegacyExtendedEntitiesMediaItemSizes;
  type: string;
  url: string;
  video_info: TweetTweetLegacyExtendedEntitiesMediaItemVideoInfo;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo {
  call_to_actions: TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoCallToActions;
  description: string;
  monetizable: boolean;
  title: string;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoCallToActions {
  visit_site: TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoCallToActionsVisitSite;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfoCallToActionsVisitSite {
  url: string;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus {
  allow_download: boolean;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemExtMediaAvailability {
  status: string;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemMediaResults {
  id: string;
  result: ApiMedia;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemOriginalInfo {
  focus_rects: unknown[];
  height: number;
  width: number;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemSizes {
  large: TweetTweetLegacyExtendedEntitiesMediaItemSizesLarge;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemSizesLarge {
  h: number;
  w: number;
}

interface TweetTweetLegacyExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: TweetTweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface TweetTweetLegacyExtendedEntitiesMediaItemVideoInfoVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
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

interface TweetTweetLegacyEntities {
  urls: TweetTweetLegacyEntitiesUrlsItem[];
  user_mentions: TweetTweetLegacyEntitiesUserMentionsItem[];
}

interface TweetTweetLegacyEntitiesUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface TweetTweetLegacyEntitiesUserMentionsItem {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

interface TweetTweetUnmentionData {
  id?: string;
}

interface TweetTweetViewCountInfo {
  count: string;
  state?: string;
}

interface TweetUnmentionData {
  id?: string;
}

interface TweetViewCountInfo {
  count?: string;
  state?: string;
}

interface TimelineClearCacheItemEntry {
  content: TimelineTimelineItem;
  entry_id: string;
  sort_index: string;
}

interface UserProfileTimelineV2TimelineMetadata {
  scribe_config: UserProfileTimelineV2TimelineMetadataScribeConfig;
}

interface UserProfileTimelineV2TimelineMetadataScribeConfig {
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
        "profile_timeline_v2": {
          "id": "VGltZWxpbmU6CgBdDTPNXM9UMAAA",
          "timeline": {
            "id": "ProfileBestProduct-Timeline",
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
                                  "followers": 2514019,
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
                            "retweet_count": 1163,
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
                            "count": "1077764",
                            "state": "EnabledWithCount"
                          }
                        }
                      }
                    }
                  },
                  "entry_id": "tweet-1762509355637719261",
                  "sort_index": "1769488794794328064"
                },
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkWGRjBh9RwAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "followers": 2514019,
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
                                    "favorite_count": 462,
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
                                    "count": "115170",
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
                                        "entities": {
                                          "urls": "..."
                                        },
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5578,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 265,
                                        "reply_count": 2449,
                                        "retweet_count": 1625,
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
                                        "count": "819340",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": false
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
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
                                "url": "card://1753315975406223360"
                              },
                              "rest_id": "card://1753315975406223360"
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
                                      "followers": 2514019,
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
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "cameliaus.com/products/micro…",
                                      "expanded_url": "http://cameliaus.com/products/microblading-eyebrow-pen",
                                      "indices": [
                                        219,
                                        219
                                      ],
                                      "url": "https://t.co/4wGNteZrvE"
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
                                        "count": "286119",
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
                                },
                                "extended_entities": {
                                  "media": [
                                    {
                                      "additional_media_info": {
                                        "call_to_actions": {
                                          "visit_site": "..."
                                        },
                                        "description": "",
                                        "monetizable": false,
                                        "title": ""
                                      },
                                      "allow_download_status": {
                                        "allow_download": false
                                      },
                                      "display_url": "pic.twitter.com/78zEnPWcM9",
                                      "expanded_url": "https://twitter.com/CameliaDeal/status/1742025184947892224/video/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "id_str": "1742024809012412416",
                                      "indices": [
                                        243,
                                        243
                                      ],
                                      "media_key": "13_1742024809012412416",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwABAoAARgs6lWLGkAAAAA=",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1742024809012412416/img/Z7HX_MRRxBwf3ffF.jpg",
                                      "original_info": {
                                        "focus_rects": [],
                                        "height": 960,
                                        "width": 540
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "video",
                                      "url": "https://t.co/78zEnPWcM9",
                                      "video_info": {
                                        "aspect_ratio": [
                                          "...",
                                          "..."
                                        ],
                                        "duration_millis": 49505,
                                        "variants": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "possibly_sensitive_editable": true,
                                "scopes": {
                                  "followers": false
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823",
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled",
                                "count": "7827074"
                              }
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768696161987411968",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768696161987411968",
                                  "text": "💌In this week’s Solana Community Update newsletter:\n\n- Country star @EricChurch is connecting with his fan community on...",
                                  "entity_set": {
                                    "urls": [
                                      {
                                        "display_url": "solana.com/newsletter",
                                        "expanded_url": "http://solana.com/newsletter",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wNXVbzJG3H"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
                                      },
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
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
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "1620697944075948032",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 0
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1620698357281980417/abAoS-QC_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1620697944075948032/1675240282"
                              },
                              "core": {
                                "created_at": "Wed Feb 01 08:19:24 +0000 2023",
                                "name": "Lemon8_US",
                                "screen_name": "lemon8us"
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
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029",
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Fresh Discoveries Everyday 🍋\nRomanticized Life Dreamer❤️\nShopping Enthusiast 🛍️🛍️\nhttps://t.co/7U1f1TD1El",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
                                      },
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
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
                                        "screen_name": "UnderdogPicks"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "UnderdogPicks"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
                                      },
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
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
                                "followers": 2887,
                                "following": 3
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1620697944075948032",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 1,
                                "tweets": 5
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true,
                                "verified_type": "Business"
                              },
                              "profile_image_shape": "Square"
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
                              },
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
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
                          "impression_id": "273f2084b142c13e",
                          "impression_string": "273f2084b142c13e"
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
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        }
                      ],
                      "cursor_type": "Top",
                      "value": "DAABCgABGI58rwfAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769488794794328063"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkWGRjBh9RwAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "followers": 2514019,
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
                                    "favorite_count": 462,
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
                                    "count": "115170",
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
                                        "entities": {
                                          "urls": "..."
                                        },
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5578,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 265,
                                        "reply_count": 2449,
                                        "retweet_count": 1625,
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
                                        "count": "819340",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": false
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
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
                                "url": "card://1753315975406223360"
                              },
                              "rest_id": "card://1753315975406223360"
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
                                      "followers": 2514019,
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
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "cameliaus.com/products/micro…",
                                      "expanded_url": "http://cameliaus.com/products/microblading-eyebrow-pen",
                                      "indices": [
                                        219,
                                        219
                                      ],
                                      "url": "https://t.co/4wGNteZrvE"
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
                                        "count": "286119",
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
                                },
                                "extended_entities": {
                                  "media": [
                                    {
                                      "additional_media_info": {
                                        "call_to_actions": {
                                          "visit_site": "..."
                                        },
                                        "description": "",
                                        "monetizable": false,
                                        "title": ""
                                      },
                                      "allow_download_status": {
                                        "allow_download": false
                                      },
                                      "display_url": "pic.twitter.com/78zEnPWcM9",
                                      "expanded_url": "https://twitter.com/CameliaDeal/status/1742025184947892224/video/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "id_str": "1742024809012412416",
                                      "indices": [
                                        243,
                                        243
                                      ],
                                      "media_key": "13_1742024809012412416",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwABAoAARgs6lWLGkAAAAA=",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1742024809012412416/img/Z7HX_MRRxBwf3ffF.jpg",
                                      "original_info": {
                                        "focus_rects": [],
                                        "height": 960,
                                        "width": 540
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "video",
                                      "url": "https://t.co/78zEnPWcM9",
                                      "video_info": {
                                        "aspect_ratio": [
                                          "...",
                                          "..."
                                        ],
                                        "duration_millis": 49505,
                                        "variants": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "possibly_sensitive_editable": true,
                                "scopes": {
                                  "followers": false
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823",
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled",
                                "count": "7827074"
                              }
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768696161987411968",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768696161987411968",
                                  "text": "💌In this week’s Solana Community Update newsletter:\n\n- Country star @EricChurch is connecting with his fan community on...",
                                  "entity_set": {
                                    "urls": [
                                      {
                                        "display_url": "solana.com/newsletter",
                                        "expanded_url": "http://solana.com/newsletter",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wNXVbzJG3H"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
                                      },
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
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
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "1620697944075948032",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 0
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1620698357281980417/abAoS-QC_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1620697944075948032/1675240282"
                              },
                              "core": {
                                "created_at": "Wed Feb 01 08:19:24 +0000 2023",
                                "name": "Lemon8_US",
                                "screen_name": "lemon8us"
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
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029",
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Fresh Discoveries Everyday 🍋\nRomanticized Life Dreamer❤️\nShopping Enthusiast 🛍️🛍️\nhttps://t.co/7U1f1TD1El",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
                                      },
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
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
                                        "screen_name": "UnderdogPicks"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "UnderdogPicks"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
                                      },
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
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
                                "followers": 2887,
                                "following": 3
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1620697944075948032",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 1,
                                "tweets": 5
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true,
                                "verified_type": "Business"
                              },
                              "profile_image_shape": "Square"
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
                              },
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
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
                          "impression_id": "273f2084b142c13e",
                          "impression_string": "273f2084b142c13e"
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
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        }
                      ],
                      "cursor_type": "Top",
                      "value": "DAABCgABGI58rwfAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769488794794328063"
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
                                  "followers": 2514019,
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
                            "retweet_count": 1163,
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
                            "count": "1077764",
                            "state": "EnabledWithCount"
                          }
                        }
                      }
                    }
                  },
                  "entry_id": "tweet-1762509355637719261",
                  "sort_index": "1769488794794328064"
                },
                "entries": [
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkWGRjBh9RwAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "followers": 2514019,
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
                                    "favorite_count": 462,
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
                                    "count": "115170",
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
                                        "entities": {
                                          "urls": "..."
                                        },
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5578,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 265,
                                        "reply_count": 2449,
                                        "retweet_count": 1625,
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
                                        "count": "819340",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": false
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
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
                                "url": "card://1753315975406223360"
                              },
                              "rest_id": "card://1753315975406223360"
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
                                      "followers": 2514019,
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
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "cameliaus.com/products/micro…",
                                      "expanded_url": "http://cameliaus.com/products/microblading-eyebrow-pen",
                                      "indices": [
                                        219,
                                        219
                                      ],
                                      "url": "https://t.co/4wGNteZrvE"
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
                                        "count": "286119",
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
                                },
                                "extended_entities": {
                                  "media": [
                                    {
                                      "additional_media_info": {
                                        "call_to_actions": {
                                          "visit_site": "..."
                                        },
                                        "description": "",
                                        "monetizable": false,
                                        "title": ""
                                      },
                                      "allow_download_status": {
                                        "allow_download": false
                                      },
                                      "display_url": "pic.twitter.com/78zEnPWcM9",
                                      "expanded_url": "https://twitter.com/CameliaDeal/status/1742025184947892224/video/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "id_str": "1742024809012412416",
                                      "indices": [
                                        243,
                                        243
                                      ],
                                      "media_key": "13_1742024809012412416",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwABAoAARgs6lWLGkAAAAA=",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1742024809012412416/img/Z7HX_MRRxBwf3ffF.jpg",
                                      "original_info": {
                                        "focus_rects": [],
                                        "height": 960,
                                        "width": 540
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "video",
                                      "url": "https://t.co/78zEnPWcM9",
                                      "video_info": {
                                        "aspect_ratio": [
                                          "...",
                                          "..."
                                        ],
                                        "duration_millis": 49505,
                                        "variants": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "possibly_sensitive_editable": true,
                                "scopes": {
                                  "followers": false
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823",
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled",
                                "count": "7827074"
                              }
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768696161987411968",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768696161987411968",
                                  "text": "💌In this week’s Solana Community Update newsletter:\n\n- Country star @EricChurch is connecting with his fan community on...",
                                  "entity_set": {
                                    "urls": [
                                      {
                                        "display_url": "solana.com/newsletter",
                                        "expanded_url": "http://solana.com/newsletter",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wNXVbzJG3H"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
                                      },
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
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
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "1620697944075948032",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 0
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1620698357281980417/abAoS-QC_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1620697944075948032/1675240282"
                              },
                              "core": {
                                "created_at": "Wed Feb 01 08:19:24 +0000 2023",
                                "name": "Lemon8_US",
                                "screen_name": "lemon8us"
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
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029",
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Fresh Discoveries Everyday 🍋\nRomanticized Life Dreamer❤️\nShopping Enthusiast 🛍️🛍️\nhttps://t.co/7U1f1TD1El",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
                                      },
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
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
                                        "screen_name": "UnderdogPicks"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "UnderdogPicks"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
                                      },
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
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
                                "followers": 2887,
                                "following": 3
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1620697944075948032",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 1,
                                "tweets": 5
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true,
                                "verified_type": "Business"
                              },
                              "profile_image_shape": "Square"
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
                              },
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
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
                          "impression_id": "273f2084b142c13e",
                          "impression_string": "273f2084b142c13e"
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
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        }
                      ],
                      "cursor_type": "Top",
                      "value": "DAABCgABGI58rwfAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769488794794328063"
                  },
                  {
                    "content": {
                      "__typename": "TimelineTimelineItem",
                      "client_event_info": {
                        "component": "tweet",
                        "details": {
                          "timelines_details": {
                            "controller_data": "DAACDAABDAABCgABAAAAAAAAAAAKAAkWGRjBh9RwAAAAAAA=",
                            "injection_type": "RankedOrganicTweet",
                            "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "followers": 2514019,
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
                                    "favorite_count": 462,
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
                                    "count": "115170",
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
                                        "entities": {
                                          "urls": "..."
                                        },
                                        "extended_entities": {
                                          "media": "..."
                                        },
                                        "favorite_count": 5578,
                                        "full_text": "🎉Happy Genesis Day 2024 to all who celebrate!🎉\n\n276+ billion transactions.\n1600+ validators.\n254+ million blocks.\n\nTha...",
                                        "lang": "en",
                                        "possibly_sensitive_editable": true,
                                        "quote_count": 265,
                                        "reply_count": 2449,
                                        "retweet_count": 1625,
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
                                        "count": "819340",
                                        "state": "EnabledWithCount"
                                      },
                                      "note_tweet": {
                                        "note_tweet_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        },
                                        "is_expandable": false
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                    "video_info": {
                                      "aspect_ratio": [
                                        1,
                                        1
                                      ],
                                      "variants": [
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        },
                                        {
                                          "bitrate": "...",
                                          "content_type": "...",
                                          "url": "..."
                                        }
                                      ],
                                      "duration_millis": 3392
                                    },
                                    "allow_download_status": {
                                      "allow_download": true
                                    },
                                    "additional_media_info": {
                                      "monetizable": false,
                                      "source_user": {
                                        "user_results": {
                                          "rest_id": "...",
                                          "result": "..."
                                        }
                                      }
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
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
                                      "scribe_key": "card_url"
                                    }
                                  },
                                  {
                                    "key": "unified_card",
                                    "value": {
                                      "string_value": "{\"type\":\"image_carousel_app\",\"component_objects\":{\"button_group_1\":{\"type\":\"button_group\",\"data\":{\"buttons\":[{\"action\":\"...",
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
                                "url": "card://1753315975406223360"
                              },
                              "rest_id": "card://1753315975406223360"
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
                                      "followers": 2514019,
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
                                  ],
                                  "urls": [
                                    {
                                      "display_url": "cameliaus.com/products/micro…",
                                      "expanded_url": "http://cameliaus.com/products/microblading-eyebrow-pen",
                                      "indices": [
                                        219,
                                        219
                                      ],
                                      "url": "https://t.co/4wGNteZrvE"
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
                                        "count": "286119",
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
                                },
                                "extended_entities": {
                                  "media": [
                                    {
                                      "additional_media_info": {
                                        "call_to_actions": {
                                          "visit_site": "..."
                                        },
                                        "description": "",
                                        "monetizable": false,
                                        "title": ""
                                      },
                                      "allow_download_status": {
                                        "allow_download": false
                                      },
                                      "display_url": "pic.twitter.com/78zEnPWcM9",
                                      "expanded_url": "https://twitter.com/CameliaDeal/status/1742025184947892224/video/1",
                                      "ext_media_availability": {
                                        "status": "Available"
                                      },
                                      "id_str": "1742024809012412416",
                                      "indices": [
                                        243,
                                        243
                                      ],
                                      "media_key": "13_1742024809012412416",
                                      "media_results": {
                                        "id": "QXBpTWVkaWFSZXN1bHRzOgwABAoAARgs6lWLGkAAAAA=",
                                        "result": {
                                          "__typename": "...",
                                          "id": "...",
                                          "media_key": "..."
                                        }
                                      },
                                      "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1742024809012412416/img/Z7HX_MRRxBwf3ffF.jpg",
                                      "original_info": {
                                        "focus_rects": [],
                                        "height": 960,
                                        "width": 540
                                      },
                                      "sizes": {
                                        "large": {
                                          "h": "...",
                                          "w": "..."
                                        }
                                      },
                                      "type": "video",
                                      "url": "https://t.co/78zEnPWcM9",
                                      "video_info": {
                                        "aspect_ratio": [
                                          "...",
                                          "..."
                                        ],
                                        "duration_millis": 49505,
                                        "variants": [
                                          "...",
                                          "..."
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "possibly_sensitive_editable": true,
                                "scopes": {
                                  "followers": false
                                }
                              },
                              "rest_id": "1769229480026050823",
                              "unmention_data": {
                                "id": "VW5tZW50aW9uczoKAAEYjZDWmxoRBw8AAgoAAAABAAAAAAYR2b4A"
                              },
                              "edit_control": {
                                "__typename": "EditControlInitial",
                                "edit_tweet_ids": [
                                  "1769229480026050823",
                                  "1769229480026050823"
                                ],
                                "editable_until_msecs": "1710655753389",
                                "is_edit_eligible": false,
                                "edits_remaining": "5"
                              },
                              "view_count_info": {
                                "state": "Enabled",
                                "count": "7827074"
                              }
                            },
                            "note_tweet": {
                              "note_tweet_results": {
                                "rest_id": "1768696161987411968",
                                "result": {
                                  "__typename": "NoteTweet",
                                  "rest_id": "1768696161987411968",
                                  "text": "💌In this week’s Solana Community Update newsletter:\n\n- Country star @EricChurch is connecting with his fan community on...",
                                  "entity_set": {
                                    "urls": [
                                      {
                                        "display_url": "solana.com/newsletter",
                                        "expanded_url": "http://solana.com/newsletter",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/wNXVbzJG3H"
                                      }
                                    ],
                                    "user_mentions": [
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
                                      },
                                      {
                                        "id_str": "18064372",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "Eric Church",
                                        "screen_name": "EricChurch"
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
                            }
                          }
                        },
                        "promoted_metadata": {
                          "ad_metadata_container": {
                            "sk_ad_network_data_list": [
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              },
                              {
                                "ad_network_id": "n66cz3y3bx.skadnetwork",
                                "campaign_id": "9",
                                "dst_app_id": "1498607143",
                                "impression_time_in_millis": 1710713978694,
                                "nonce": "7f6e9a36-e8a5-4f0f-960d-44e88ef8e5e3",
                                "signature": "MDUCGF4+Y0XmjvxzaHxqR74sPI9n3HsaaCv4kAIZAOXyDYuwTPzAFFRV1sNIf+ysJM47tTamtg==",
                                "src_app_id": "333903271",
                                "version": "3.0",
                                "fidelity_type": 1
                              }
                            ],
                            "render_legacy_website_card": false
                          },
                          "advertiser_results": {
                            "rest_id": "1620697944075948032",
                            "result": {
                              "__typename": "User",
                              "action_counts": {
                                "favorites_count": 0
                              },
                              "avatar": {
                                "image_url": "https://pbs.twimg.com/profile_images/1620698357281980417/abAoS-QC_normal.jpg"
                              },
                              "banner": {
                                "image_url": "https://pbs.twimg.com/profile_banners/1620697944075948032/1675240282"
                              },
                              "core": {
                                "created_at": "Wed Feb 01 08:19:24 +0000 2023",
                                "name": "Lemon8_US",
                                "screen_name": "lemon8us"
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
                              "pinned_items": {
                                "tweet_ids_str": [
                                  "1767219159337673029",
                                  "1767219159337673029"
                                ]
                              },
                              "privacy": {},
                              "private_super_following": false,
                              "profile_bio": {
                                "description": "Fresh Discoveries Everyday 🍋\nRomanticized Life Dreamer❤️\nShopping Enthusiast 🛍️🛍️\nhttps://t.co/7U1f1TD1El",
                                "entities": {
                                  "description": {
                                    "urls": [
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
                                      },
                                      {
                                        "display_url": "apps.apple.com/id/app/lemon8-…",
                                        "expanded_url": "https://apps.apple.com/id/app/lemon8-lifestyle-community/id14",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/7U1f1TD1El"
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
                                        "screen_name": "UnderdogPicks"
                                      },
                                      {
                                        "id_str": "0",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "name": "",
                                        "screen_name": "UnderdogPicks"
                                      }
                                    ]
                                  },
                                  "url": {
                                    "urls": [
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
                                      },
                                      {
                                        "display_url": "linktr.ee/UDFantasy",
                                        "expanded_url": "http://linktr.ee/UDFantasy",
                                        "indices": [
                                          "...",
                                          "..."
                                        ],
                                        "url": "https://t.co/da40f6OKUb"
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
                                "followers": 2887,
                                "following": 3
                              },
                              "relationship_perspectives": {},
                              "rest_id": "1620697944075948032",
                              "super_follow_eligible": false,
                              "super_followed_by": false,
                              "super_following": false,
                              "tweet_counts": {
                                "media_tweets": 1,
                                "tweets": 5
                              },
                              "website": {
                                "url": ""
                              },
                              "verification": {
                                "is_blue_verified": true,
                                "verified_type": "Business"
                              },
                              "profile_image_shape": "Square"
                            }
                          },
                          "click_tracking_info": {
                            "url_params": [
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
                              },
                              {
                                "key": "twclid",
                                "value": "27755x64erar4jq58lsgor3odr"
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
                          "impression_id": "273f2084b142c13e",
                          "impression_string": "273f2084b142c13e"
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
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        },
                        {
                          "entry_id": "who-to-follow-1769488794794328070-user-2312333412",
                          "item": {
                            "client_event_info": {
                              "component": "suggest_who_to_follow",
                              "details": {
                                "timelines_details": {
                                  "controller_data": "DAACDAACDAABCgABAAAAAAAAAAgAAAAA",
                                  "injection_type": "WhoToFollow",
                                  "source_data": "DAABCgABBCoxOGBqbf0KAAIAAAAAAAAAAAAIAAIAAACDCAADAAAAAgwABQwAAgwAAgwAAQoAAQAAAAAAAAAIAAAAAAA="
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
                                    "location": "worldwide"
                                  },
                                  "media_permissions": {
                                    "can_media_tag": true
                                  },
                                  "notifications_settings": {},
                                  "pinned_items": {
                                    "tweet_ids_str": [
                                      "1307029562321231873",
                                      "1307029562321231873"
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
                                        "symbols": [
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
                                    "followers": 3336974,
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
                              }
                            }
                          }
                        }
                      ],
                      "cursor_type": "Top",
                      "value": "DAABCgABGI58rwfAJxEKAAIYjflAMBbxcwgAAwAAAAEAAA"
                    },
                    "entry_id": "tweet-1769344282706506099",
                    "sort_index": "1769488794794328063"
                  }
                ]
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "profileBest"
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
        "profile_timeline_v2": {
          "id": "VGltZWxpbmU6CgBdDTPNXM9UMAAA",
          "timeline": {
            "id": "ProfileBestProduct-Timeline",
            "instructions": [
              {
                "__typename": "TimelineClearCache"
              }
            ],
            "metadata": {
              "scribe_config": {
                "page": "profileBest"
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
