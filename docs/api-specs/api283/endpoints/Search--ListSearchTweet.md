# List Search Tweet

**Route:** `GET /Search`
**API:** `twitter283.p.rapidapi.com`
**Description:** Search Twitter (Top, Latest, Videos, Photos and People)  this api is the same as the search api. You just need to specify the list in the q section. example: q: list:1446054017499480064 btc

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| safe_search | BOOLEAN | No | `true` |
| count | STRING | No | `20` |
| type | ENUM | No | - |
| q | STRING | Yes | `list:1446054017499480064 btc` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: ListSearchTweetResponse
interface ListSearchTweetResponse {
  data: ListSearchTweetResponseData;
}

interface ListSearchTweetResponseData {
  search_by_raw_query: ListSearchTweetResponseDataSearchByRawQuery;
}

interface ListSearchTweetResponseDataSearchByRawQuery {
  id: string;
  rest_id: string;
  search_timeline: ListSearchTweetResponseDataSearchByRawQuerySearchTimeline;
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimeline {
  id: string;
  timeline: ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimeline;
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimeline {
  id: string;
  instructions: TimelineAddEntriesItem[];
  response_objects: ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjects;
}

interface TimelineAddEntriesItem {
  __typename: string;
  entries: TimelineAddEntriesItemEntriesItem[];
}

interface TimelineAddEntriesItemEntriesItem {
  content: TimelineTimelineItem;  // 22/22
  entry_id: string;  // 22/22
  sort_index: string;  // 22/22
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
  feedback_info?: TimelineTimelineItemFeedbackInfo;
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
}

interface TimelineUser {
  __typename?: string;
  display_type?: string;
  user_reactive_triggers?: TimelineUserUserReactiveTriggers;
  user_results?: TimelineUserUserResults;
}

interface TimelineUserUserReactiveTriggers {
  on_follow?: TimelineUserUserReactiveTriggersOnFollow;
}

interface TimelineUserUserReactiveTriggersOnFollow {
  execution?: TimelineRemoteTimelineReaction;
}

interface TimelineRemoteTimelineReaction {
  __typename?: string;
  request_params?: TimelineRemoteTimelineReactionRequestParamsItem[];
}

interface TimelineRemoteTimelineReactionRequestParamsItem {
  key?: string;  // 20/2
  value?: string;  // 20/2
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
  identity_profile_labels_highlighted_label?: UserIdentityProfileLabelsHighlightedLabel;
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

interface UserIdentityProfileLabelsHighlightedLabel {
  label: UserIdentityProfileLabelsHighlightedLabelLabel;
}

interface UserIdentityProfileLabelsHighlightedLabelLabel {
  badge: UserIdentityProfileLabelsHighlightedLabelLabelBadge;
  description: string;
  long_description: UserIdentityProfileLabelsHighlightedLabelLabelLongDescription;
  user_label_type: string;
}

interface UserIdentityProfileLabelsHighlightedLabelLabelBadge {
  url: string;
}

interface UserIdentityProfileLabelsHighlightedLabelLabelLongDescription {
  entities: UserIdentityProfileLabelsHighlightedLabelLabelLongDescriptionEntitiesItem[];
  text: string;
}

interface UserIdentityProfileLabelsHighlightedLabelLabelLongDescriptionEntitiesItem {
  from_index: number;
  ref: TimelineRichTextMention;
  to_index: number;
}

interface TimelineRichTextMention {
  __typename: string;
  screen_name: string;
  user_results: TimelineRichTextMentionUserResults;
}

interface TimelineRichTextMentionUserResults {
  rest_id: string;
  result: User;
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
  symbols: UserProfileBioEntitiesDescriptionSymbolsItem[];
  hashtags?: UserProfileBioEntitiesDescriptionHashtagsItem[];
  urls?: UserProfileBioEntitiesDescriptionUrlsItem[];
  user_mentions?: UserProfileBioEntitiesDescriptionUserMentionsItem[];
}

interface UserProfileBioEntitiesDescriptionSymbolsItem {
  indices: number[];
  text: string;
}

interface UserProfileBioEntitiesDescriptionHashtagsItem {
  indices?: number[];
  text?: string;
}

interface UserProfileBioEntitiesDescriptionUrlsItem {
  display_url?: string;  // 4/2
  expanded_url?: string;  // 4/2
  indices?: number[];  // 4/2
  url?: string;  // 4/2
}

interface UserProfileBioEntitiesDescriptionUserMentionsItem {
  id_str?: string;
  indices?: number[];
  name?: string;
  screen_name?: string;
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
  highlights?: TimelineTweetHighlights;
  timeline_tweet_display_type?: string;
  tweet_results?: TimelineTweetTweetResults;
}

interface TimelineTweetHighlights {
  text_highlights?: TimelineTweetHighlightsTextHighlightsItem[];
}

interface TimelineTweetHighlightsTextHighlightsItem {
  end_index?: number;
  start_index?: number;
}

interface TimelineTweetTweetResults {
  rest_id?: string;
  result?: Tweet;
}

interface Tweet {
  note_tweet: TweetNoteTweet;
  __typename?: string;
  core?: TweetCore;
  edit_control?: EditControlInitial;
  is_translatable?: boolean;
  legacy?: TweetLegacy;
  rest_id?: string;
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
  entity_set: {};
  media: NoteTweetMedia;
  rest_id: string;
  richtext: NoteTweetRichtext;
  text: string;
}

interface NoteTweetMedia {
  inline_media: unknown[];
}

interface NoteTweetRichtext {
  richtext_tags: NoteTweetRichtextRichtextTagsItem[];
}

interface NoteTweetRichtextRichtextTagsItem {
  from_index: number;
  richtext_types: string[];
  to_index: number;
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
  lang?: string;
  possibly_sensitive_editable?: boolean;
  quote_count?: number;
  reply_count?: number;
  retweet_count?: number;
  user_id_str?: string;
}

interface TweetLegacyEntities {
  symbols: TweetLegacyEntitiesSymbolsItem[];
  hashtags?: TweetLegacyEntitiesHashtagsItem[];
  urls?: TweetLegacyEntitiesUrlsItem[];
  user_mentions?: TweetLegacyEntitiesUserMentionsItem[];
}

interface TweetLegacyEntitiesSymbolsItem {
  indices: number[];
  text: string;
}

interface TweetLegacyEntitiesHashtagsItem {
  indices?: number[];  // 14/4
  text?: string;  // 14/4
}

interface TweetLegacyEntitiesUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface TweetLegacyEntitiesUserMentionsItem {
  id_str?: string;
  indices?: number[];
  name?: string;
  screen_name?: string;
}

interface TweetLegacyExtendedEntities {
  media?: TweetLegacyExtendedEntitiesMediaItem[];
}

interface TweetLegacyExtendedEntitiesMediaItem {
  ext_alt_text: string;
  source_status_id_str: string;
  source_user_id_str: string;
  additional_media_info?: TweetLegacyExtendedEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: TweetLegacyExtendedEntitiesMediaItemAllowDownloadStatus;
  display_url?: string;  // 22/4
  expanded_url?: string;  // 22/4
  ext_media_availability?: TweetLegacyExtendedEntitiesMediaItemExtMediaAvailability;  // 22/4
  features?: TweetLegacyExtendedEntitiesMediaItemFeatures;  // 16/4
  id_str?: string;  // 22/4
  indices?: number[];  // 22/4
  media_key?: string;  // 22/4
  media_results?: TweetLegacyExtendedEntitiesMediaItemMediaResults;  // 22/4
  media_url_https?: string;  // 22/4
  original_info?: TweetLegacyExtendedEntitiesMediaItemOriginalInfo;  // 22/4
  sizes?: TweetLegacyExtendedEntitiesMediaItemSizes;  // 22/4
  type?: string;  // 22/4
  url?: string;  // 22/4
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
  large?: TweetLegacyExtendedEntitiesMediaItemFeaturesLarge;
  orig?: TweetLegacyExtendedEntitiesMediaItemFeaturesOrig;
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLarge {
  faces: TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h: number;
  w: number;
  x: number;
  y: number;
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrig {
  faces: TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface TweetLegacyExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h: number;
  w: number;
  x: number;
  y: number;
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
  h?: number;  // 80/5
  w?: number;  // 80/5
  x?: number;  // 80/5
  y?: number;  // 80/5
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
  bitrate?: number;  // 16/4
  content_type?: string;  // 21/4
  url?: string;  // 21/4
}

interface TweetUnmentionData {
  id?: string;
}

interface TweetViewCountInfo {
  count?: string;
  state?: string;
}

interface TimelineTimelineItemFeedbackInfo {
  feedback_keys?: string[];
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjects {
  feedback_actions: ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItem[];
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItem {
  key: string;  // 3/3
  value: ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItemValue;  // 3/3
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItemValue {
  child_keys: string[];
  icon: string;
  client_event_info?: ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItemValueClientEventInfo;
  confirmation?: string;
  confirmation_display_type?: string;
  feedback_type?: string;
  has_undo_action?: boolean;
  prompt?: string;
}

interface ListSearchTweetResponseDataSearchByRawQuerySearchTimelineTimelineResponseObjectsFeedbackActionsItemValueClientEventInfo {
  action?: string;
  component?: string;
  element?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "search_by_raw_query": {
      "id": "U2VhcmNoUXVlcnk6bGlzdDoxNDQ2MDU0MDE3NDk5NDgwMDY0IGJ0Yw==",
      "rest_id": "list:1446054017499480064 btc",
      "search_timeline": {
        "id": "VGltZWxpbmU6DAB9CwABAAAAHGxpc3Q6MTQ0NjA1NDAxNzQ5OTQ4MDA2NCBidGMIAAIAAAABAAA=",
        "timeline": {
          "id": "TopTabSrpProduct-Timeline",
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
                          "controller_data": "DAACDAAFDAABDAABDAABCgABAAAAAAAAQAAAAAwAAgoAAQAAAAAAAAABCgACZxVRHSx/HRULAAMAAAAcbGlzdDoxNDQ2MDU0MDE3NDk5NDgwMDY0IGJ0YwoA..."
                        }
                      },
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1541036976048336896",
                        "result": {
                          "__typename": "Tweet",
                          "core": {
                            "user_results": {
                              "rest_id": "1337780902680809474",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 22495
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1369025687743500288/-4tdBSu5_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/1337780902680809474/1675437171"
                                },
                                "core": {
                                  "created_at": "Sat Dec 12 15:26:42 +0000 2020",
                                  "name": "Documenting ₿itcoin 📄",
                                  "screen_name": "DocumentingBTC"
                                },
                                "dm_permissions": {
                                  "can_dm": true
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/profile_images/1620589771038023680/PewlwV9H_bigger.jpg"
                                    },
                                    "description": "Taproot Wizards",
                                    "url": {
                                      "url": "https://twitter.com/TaprootWizards",
                                      "url_type": "DeepLink"
                                    },
                                    "user_label_type": "BusinessLabel",
                                    "user_label_display_type": "Badge"
                                  }
                                },
                                "location": {
                                  "location": "DM with post submissions"
                                },
                                "media_permissions": {
                                  "can_media_tag": true
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1363481580786835458",
                                    "1363481580786835458"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "The ₿est of ₿itcoin.",
                                  "entities": {
                                    "description": {
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
                                  "has_extended_profile": false
                                },
                                "relationship_counts": {
                                  "followers": 990409,
                                  "following": 1775
                                },
                                "relationship_perspectives": {},
                                "rest_id": "1337780902680809474",
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 3154,
                                  "tweets": 6796
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
                            "bookmark_count": 164,
                            "conversation_id_str": "1541036976048336896",
                            "created_at": "Sun Jun 26 12:33:40 +0000 2022",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "symbols": [
                                {
                                  "indices": [
                                    36,
                                    36
                                  ],
                                  "text": "BTC"
                                }
                              ],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/status/16378…",
                                  "expanded_url": "https://twitter.com/i/status/1637886259358998534/video/1",
                                  "indices": [
                                    49,
                                    49
                                  ],
                                  "url": "https://t.co/toN37S0CZb"
                                },
                                {
                                  "display_url": "twitter.com/i/status/16378…",
                                  "expanded_url": "https://twitter.com/i/status/1637886259358998534/video/1",
                                  "indices": [
                                    49,
                                    49
                                  ],
                                  "url": "https://t.co/toN37S0CZb"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "2360241314",
                                  "indices": [
                                    34,
                                    34
                                  ],
                                  "name": "Jack Mallers",
                                  "screen_name": "jackmallers"
                                },
                                {
                                  "id_str": "2360241314",
                                  "indices": [
                                    34,
                                    34
                                  ],
                                  "name": "Jack Mallers",
                                  "screen_name": "jackmallers"
                                }
                              ],
                              "hashtags": [
                                {
                                  "indices": [
                                    32,
                                    32
                                  ],
                                  "text": "bitcoin"
                                },
                                {
                                  "indices": [
                                    32,
                                    32
                                  ],
                                  "text": "bitcoin"
                                }
                              ]
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "display_url": "pic.twitter.com/WTcTIFGKhp",
                                  "expanded_url": "https://twitter.com/DocumentingBTC/status/1541036976048336896/photo/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "features": {
                                    "large": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    },
                                    "orig": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    }
                                  },
                                  "id_str": "1541036433598812161",
                                  "indices": [
                                    99,
                                    99
                                  ],
                                  "media_key": "3_1541036433598812161",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARVi3Hi6l5ABCgACFWLc9wcacAAAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAABCgABFWLceLqXkAEKAAIVYtz3BxpwAAAA",
                                      "media_key": "3_1541036433598812161"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/media/FWLceLqXkAEwqxz.jpg",
                                  "original_info": {
                                    "focus_rects": [
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      },
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      }
                                    ],
                                    "height": 1053,
                                    "width": 922
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1053,
                                      "w": 922
                                    }
                                  },
                                  "type": "photo",
                                  "url": "https://t.co/WTcTIFGKhp",
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "additional_media_info": {
                                    "monetizable": false,
                                    "source_user": {
                                      "user_results": {
                                        "rest_id": "299910920",
                                        "result": {
                                          "__typename": "...",
                                          "action_counts": "...",
                                          "avatar": "...",
                                          "banner": "...",
                                          "core": "...",
                                          "dm_permissions": "...",
                                          "exclusive_tweet_following": "...",
                                          "identity_profile_labels_highlighted_label": "...",
                                          "location": "...",
                                          "media_permissions": "...",
                                          "notifications_settings": "...",
                                          "pinned_items": "...",
                                          "privacy": "...",
                                          "private_super_following": "...",
                                          "profile_bio": "...",
                                          "profile_metadata": "...",
                                          "profile_translation": "...",
                                          "properties": "...",
                                          "relationship_counts": "...",
                                          "relationship_perspectives": "...",
                                          "rest_id": "...",
                                          "super_follow_eligible": "...",
                                          "super_followed_by": "...",
                                          "super_following": "...",
                                          "tweet_counts": "...",
                                          "website": "...",
                                          "verification": "..."
                                        }
                                      }
                                    }
                                  },
                                  "video_info": {
                                    "aspect_ratio": [
                                      1,
                                      1
                                    ],
                                    "duration_millis": 161170,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      }
                                    ]
                                  },
                                  "ext_alt_text": "Morpheus Believe GIF",
                                  "source_status_id_str": "1588297469871497217",
                                  "source_user_id_str": "299910920"
                                },
                                {
                                  "display_url": "pic.twitter.com/WTcTIFGKhp",
                                  "expanded_url": "https://twitter.com/DocumentingBTC/status/1541036976048336896/photo/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "features": {
                                    "large": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    },
                                    "orig": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    }
                                  },
                                  "id_str": "1541036433598812161",
                                  "indices": [
                                    99,
                                    99
                                  ],
                                  "media_key": "3_1541036433598812161",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARVi3Hi6l5ABCgACFWLc9wcacAAAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAABCgABFWLceLqXkAEKAAIVYtz3BxpwAAAA",
                                      "media_key": "3_1541036433598812161"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/media/FWLceLqXkAEwqxz.jpg",
                                  "original_info": {
                                    "focus_rects": [
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      },
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      }
                                    ],
                                    "height": 1053,
                                    "width": 922
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1053,
                                      "w": 922
                                    }
                                  },
                                  "type": "photo",
                                  "url": "https://t.co/WTcTIFGKhp",
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "additional_media_info": {
                                    "monetizable": false,
                                    "source_user": {
                                      "user_results": {
                                        "rest_id": "299910920",
                                        "result": {
                                          "__typename": "...",
                                          "action_counts": "...",
                                          "avatar": "...",
                                          "banner": "...",
                                          "core": "...",
                                          "dm_permissions": "...",
                                          "exclusive_tweet_following": "...",
                                          "identity_profile_labels_highlighted_label": "...",
                                          "location": "...",
                                          "media_permissions": "...",
                                          "notifications_settings": "...",
                                          "pinned_items": "...",
                                          "privacy": "...",
                                          "private_super_following": "...",
                                          "profile_bio": "...",
                                          "profile_metadata": "...",
                                          "profile_translation": "...",
                                          "properties": "...",
                                          "relationship_counts": "...",
                                          "relationship_perspectives": "...",
                                          "rest_id": "...",
                                          "super_follow_eligible": "...",
                                          "super_followed_by": "...",
                                          "super_following": "...",
                                          "tweet_counts": "...",
                                          "website": "...",
                                          "verification": "..."
                                        }
                                      }
                                    }
                                  },
                                  "video_info": {
                                    "aspect_ratio": [
                                      1,
                                      1
                                    ],
                                    "duration_millis": 161170,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      }
                                    ]
                                  },
                                  "ext_alt_text": "Morpheus Believe GIF",
                                  "source_status_id_str": "1588297469871497217",
                                  "source_user_id_str": "299910920"
                                }
                              ]
                            },
                            "favorite_count": 12644,
                            "full_text": "$21,000                                 $21,000\nin 2020                                    in 2022 https://t.co/WTcTIFGK...",
                            "lang": "en",
                            "possibly_sensitive_editable": true,
                            "quote_count": 253,
                            "reply_count": 366,
                            "retweet_count": 2712,
                            "user_id_str": "1337780902680809474"
                          },
                          "rest_id": "1541036976048336896",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEVYtz3BxpwAA8AAgoAAAAAAA=="
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1541036976048336896",
                              "1541036976048336896"
                            ],
                            "editable_until_msecs": "1656248620000",
                            "is_edit_eligible": true,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "state": "Enabled",
                            "count": "681182"
                          },
                          "note_tweet": {
                            "note_tweet_results": {
                              "rest_id": "1817546528216522752",
                              "result": {
                                "__typename": "NoteTweet",
                                "rest_id": "1817546528216522752",
                                "text": "🚨PUBLIC SERVICE ANNOUNCEMENT🚨\n\nHeather Morgan, AKA 'Razzlekhan' is a self proclaimed social engineer who pleaded guilt...",
                                "entity_set": {},
                                "media": {
                                  "inline_media": []
                                },
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 279,
                                      "to_index": 287,
                                      "richtext_types": [
                                        "Bold"
                                      ]
                                    }
                                  ]
                                }
                              }
                            },
                            "is_expandable": true
                          }
                        }
                      },
                      "highlights": {
                        "text_highlights": [
                          {
                            "start_index": 152,
                            "end_index": 155
                          },
                          {
                            "start_index": 152,
                            "end_index": 155
                          }
                        ]
                      }
                    },
                    "feedback_info": {
                      "feedback_keys": [
                        "1060665035",
                        "1060665035"
                      ]
                    },
                    "display_type": "Carousel",
                    "footer": {
                      "landing_url": {
                        "url": "twitter://search?query=list%3A1446054017499480064+btc&src=typed_query&type=users",
                        "url_type": "DeepLink"
                      },
                      "text": "View all"
                    },
                    "header": {
                      "display_type": "Classic",
                      "sticky": true,
                      "text": "People"
                    },
                    "items": [
                      {
                        "entry_id": "toptabsrpusermodule-1870231518329176072-user-970994516357472257",
                        "item": {
                          "client_event_info": {
                            "component": "user_module",
                            "details": {
                              "timelines_details": {
                                "controller_data": "DAACDAAFDAABDAACCgABAAAAAAAAAAEKAAJnFVEdLH8dFQsAAwAAABxsaXN0OjE0NDYwNTQwMTc0OTk0ODAwNjQgYnRjCgAFc57MAWtIGeEIAAYAAAABCgAH..."
                              }
                            },
                            "element": "user"
                          },
                          "content": {
                            "__typename": "TimelineUser",
                            "display_type": "UserDetailed",
                            "user_results": {
                              "rest_id": "970994516357472257",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 171403
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1698747465178959872/oT_AJ0eq_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/970994516357472257/1686177181"
                                },
                                "core": {
                                  "created_at": "Tue Mar 06 12:08:27 +0000 2018",
                                  "name": "Bitcoin Archive",
                                  "screen_name": "BTC_Archive"
                                },
                                "dm_permissions": {
                                  "can_dm": false
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/semantic_core_img/1428827730364096519/4ZXpTBhS?format=png&name=orig"
                                    },
                                    "description": "Automated",
                                    "long_description": {
                                      "entities": [
                                        {
                                          "from_index": "...",
                                          "ref": "...",
                                          "to_index": "..."
                                        }
                                      ],
                                      "text": "Automated by @btc_tainoko"
                                    },
                                    "user_label_type": "AutomatedLabel"
                                  }
                                },
                                "location": {
                                  "location": "Bitcoin.Archive.Channel@gmail"
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1861011222356697496",
                                    "1861011222356697496"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "#Bitcoin News, Insight, and Commentary🚀 🌗 \n👉Follow me: @ArchieX__",
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
                                      ],
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
                                      "symbols": [
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
                                  "followers": 1597710,
                                  "following": 703
                                },
                                "relationship_perspectives": {},
                                "rest_id": "970994516357472257",
                                "super_follow_eligible": true,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 6888,
                                  "tweets": 46036
                                },
                                "website": {
                                  "url": "https://t.co/WKw3Hxwf59"
                                },
                                "verification": {
                                  "is_blue_verified": true,
                                  "verified_type": "Business"
                                }
                              }
                            },
                            "user_reactive_triggers": {
                              "on_follow": {
                                "execution": {
                                  "__typename": "TimelineRemoteTimelineReaction",
                                  "request_params": [
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    },
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "entry_id": "toptabsrpusermodule-1870231518329176072-user-970994516357472257",
                        "item": {
                          "client_event_info": {
                            "component": "user_module",
                            "details": {
                              "timelines_details": {
                                "controller_data": "DAACDAAFDAABDAACCgABAAAAAAAAAAEKAAJnFVEdLH8dFQsAAwAAABxsaXN0OjE0NDYwNTQwMTc0OTk0ODAwNjQgYnRjCgAFc57MAWtIGeEIAAYAAAABCgAH..."
                              }
                            },
                            "element": "user"
                          },
                          "content": {
                            "__typename": "TimelineUser",
                            "display_type": "UserDetailed",
                            "user_results": {
                              "rest_id": "970994516357472257",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 171403
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1698747465178959872/oT_AJ0eq_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/970994516357472257/1686177181"
                                },
                                "core": {
                                  "created_at": "Tue Mar 06 12:08:27 +0000 2018",
                                  "name": "Bitcoin Archive",
                                  "screen_name": "BTC_Archive"
                                },
                                "dm_permissions": {
                                  "can_dm": false
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/semantic_core_img/1428827730364096519/4ZXpTBhS?format=png&name=orig"
                                    },
                                    "description": "Automated",
                                    "long_description": {
                                      "entities": [
                                        {
                                          "from_index": "...",
                                          "ref": "...",
                                          "to_index": "..."
                                        }
                                      ],
                                      "text": "Automated by @btc_tainoko"
                                    },
                                    "user_label_type": "AutomatedLabel"
                                  }
                                },
                                "location": {
                                  "location": "Bitcoin.Archive.Channel@gmail"
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1861011222356697496",
                                    "1861011222356697496"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "#Bitcoin News, Insight, and Commentary🚀 🌗 \n👉Follow me: @ArchieX__",
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
                                      ],
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
                                      "symbols": [
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
                                  "followers": 1597710,
                                  "following": 703
                                },
                                "relationship_perspectives": {},
                                "rest_id": "970994516357472257",
                                "super_follow_eligible": true,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 6888,
                                  "tweets": 46036
                                },
                                "website": {
                                  "url": "https://t.co/WKw3Hxwf59"
                                },
                                "verification": {
                                  "is_blue_verified": true,
                                  "verified_type": "Business"
                                }
                              }
                            },
                            "user_reactive_triggers": {
                              "on_follow": {
                                "execution": {
                                  "__typename": "TimelineRemoteTimelineReaction",
                                  "request_params": [
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    },
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    "cursor_type": "Top",
                    "value": "DAACCgACGfRlqDHAJxAKAAMZ9GWoMb_Y8AgABAAAAAELAAUAAADoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJNVll0ejNCeHB3QUJVYkdxNnhsbUFCR0hx..."
                  },
                  "entry_id": "tweet-1541036976048336896",
                  "sort_index": "1870231518329176064"
                },
                {
                  "content": {
                    "__typename": "TimelineTimelineItem",
                    "client_event_info": {
                      "component": "result",
                      "details": {
                        "timelines_details": {
                          "controller_data": "DAACDAAFDAABDAABDAABCgABAAAAAAAAQAAAAAwAAgoAAQAAAAAAAAABCgACZxVRHSx/HRULAAMAAAAcbGlzdDoxNDQ2MDU0MDE3NDk5NDgwMDY0IGJ0YwoA..."
                        }
                      },
                      "element": "tweet"
                    },
                    "content": {
                      "__typename": "TimelineTweet",
                      "timeline_tweet_display_type": "Tweet",
                      "tweet_results": {
                        "rest_id": "1541036976048336896",
                        "result": {
                          "__typename": "Tweet",
                          "core": {
                            "user_results": {
                              "rest_id": "1337780902680809474",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 22495
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1369025687743500288/-4tdBSu5_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/1337780902680809474/1675437171"
                                },
                                "core": {
                                  "created_at": "Sat Dec 12 15:26:42 +0000 2020",
                                  "name": "Documenting ₿itcoin 📄",
                                  "screen_name": "DocumentingBTC"
                                },
                                "dm_permissions": {
                                  "can_dm": true
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/profile_images/1620589771038023680/PewlwV9H_bigger.jpg"
                                    },
                                    "description": "Taproot Wizards",
                                    "url": {
                                      "url": "https://twitter.com/TaprootWizards",
                                      "url_type": "DeepLink"
                                    },
                                    "user_label_type": "BusinessLabel",
                                    "user_label_display_type": "Badge"
                                  }
                                },
                                "location": {
                                  "location": "DM with post submissions"
                                },
                                "media_permissions": {
                                  "can_media_tag": true
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1363481580786835458",
                                    "1363481580786835458"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "The ₿est of ₿itcoin.",
                                  "entities": {
                                    "description": {
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
                                  "has_extended_profile": false
                                },
                                "relationship_counts": {
                                  "followers": 990409,
                                  "following": 1775
                                },
                                "relationship_perspectives": {},
                                "rest_id": "1337780902680809474",
                                "super_follow_eligible": false,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 3154,
                                  "tweets": 6796
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
                            "bookmark_count": 164,
                            "conversation_id_str": "1541036976048336896",
                            "created_at": "Sun Jun 26 12:33:40 +0000 2022",
                            "display_text_range": [
                              0,
                              0
                            ],
                            "entities": {
                              "symbols": [
                                {
                                  "indices": [
                                    36,
                                    36
                                  ],
                                  "text": "BTC"
                                }
                              ],
                              "urls": [
                                {
                                  "display_url": "twitter.com/i/status/16378…",
                                  "expanded_url": "https://twitter.com/i/status/1637886259358998534/video/1",
                                  "indices": [
                                    49,
                                    49
                                  ],
                                  "url": "https://t.co/toN37S0CZb"
                                },
                                {
                                  "display_url": "twitter.com/i/status/16378…",
                                  "expanded_url": "https://twitter.com/i/status/1637886259358998534/video/1",
                                  "indices": [
                                    49,
                                    49
                                  ],
                                  "url": "https://t.co/toN37S0CZb"
                                }
                              ],
                              "user_mentions": [
                                {
                                  "id_str": "2360241314",
                                  "indices": [
                                    34,
                                    34
                                  ],
                                  "name": "Jack Mallers",
                                  "screen_name": "jackmallers"
                                },
                                {
                                  "id_str": "2360241314",
                                  "indices": [
                                    34,
                                    34
                                  ],
                                  "name": "Jack Mallers",
                                  "screen_name": "jackmallers"
                                }
                              ],
                              "hashtags": [
                                {
                                  "indices": [
                                    32,
                                    32
                                  ],
                                  "text": "bitcoin"
                                },
                                {
                                  "indices": [
                                    32,
                                    32
                                  ],
                                  "text": "bitcoin"
                                }
                              ]
                            },
                            "extended_entities": {
                              "media": [
                                {
                                  "display_url": "pic.twitter.com/WTcTIFGKhp",
                                  "expanded_url": "https://twitter.com/DocumentingBTC/status/1541036976048336896/photo/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "features": {
                                    "large": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    },
                                    "orig": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    }
                                  },
                                  "id_str": "1541036433598812161",
                                  "indices": [
                                    99,
                                    99
                                  ],
                                  "media_key": "3_1541036433598812161",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARVi3Hi6l5ABCgACFWLc9wcacAAAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAABCgABFWLceLqXkAEKAAIVYtz3BxpwAAAA",
                                      "media_key": "3_1541036433598812161"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/media/FWLceLqXkAEwqxz.jpg",
                                  "original_info": {
                                    "focus_rects": [
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      },
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      }
                                    ],
                                    "height": 1053,
                                    "width": 922
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1053,
                                      "w": 922
                                    }
                                  },
                                  "type": "photo",
                                  "url": "https://t.co/WTcTIFGKhp",
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "additional_media_info": {
                                    "monetizable": false,
                                    "source_user": {
                                      "user_results": {
                                        "rest_id": "299910920",
                                        "result": {
                                          "__typename": "...",
                                          "action_counts": "...",
                                          "avatar": "...",
                                          "banner": "...",
                                          "core": "...",
                                          "dm_permissions": "...",
                                          "exclusive_tweet_following": "...",
                                          "identity_profile_labels_highlighted_label": "...",
                                          "location": "...",
                                          "media_permissions": "...",
                                          "notifications_settings": "...",
                                          "pinned_items": "...",
                                          "privacy": "...",
                                          "private_super_following": "...",
                                          "profile_bio": "...",
                                          "profile_metadata": "...",
                                          "profile_translation": "...",
                                          "properties": "...",
                                          "relationship_counts": "...",
                                          "relationship_perspectives": "...",
                                          "rest_id": "...",
                                          "super_follow_eligible": "...",
                                          "super_followed_by": "...",
                                          "super_following": "...",
                                          "tweet_counts": "...",
                                          "website": "...",
                                          "verification": "..."
                                        }
                                      }
                                    }
                                  },
                                  "video_info": {
                                    "aspect_ratio": [
                                      1,
                                      1
                                    ],
                                    "duration_millis": 161170,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      }
                                    ]
                                  },
                                  "ext_alt_text": "Morpheus Believe GIF",
                                  "source_status_id_str": "1588297469871497217",
                                  "source_user_id_str": "299910920"
                                },
                                {
                                  "display_url": "pic.twitter.com/WTcTIFGKhp",
                                  "expanded_url": "https://twitter.com/DocumentingBTC/status/1541036976048336896/photo/1",
                                  "ext_media_availability": {
                                    "status": "Available"
                                  },
                                  "features": {
                                    "large": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    },
                                    "orig": {
                                      "faces": [
                                        {
                                          "h": "...",
                                          "w": "...",
                                          "x": "...",
                                          "y": "..."
                                        }
                                      ]
                                    }
                                  },
                                  "id_str": "1541036433598812161",
                                  "indices": [
                                    99,
                                    99
                                  ],
                                  "media_key": "3_1541036433598812161",
                                  "media_results": {
                                    "id": "QXBpTWVkaWFSZXN1bHRzOgwAAQoAARVi3Hi6l5ABCgACFWLc9wcacAAAAA==",
                                    "result": {
                                      "__typename": "ApiMedia",
                                      "id": "QXBpTWVkaWE6DAABCgABFWLceLqXkAEKAAIVYtz3BxpwAAAA",
                                      "media_key": "3_1541036433598812161"
                                    }
                                  },
                                  "media_url_https": "https://pbs.twimg.com/media/FWLceLqXkAEwqxz.jpg",
                                  "original_info": {
                                    "focus_rects": [
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      },
                                      {
                                        "h": 516,
                                        "w": 922,
                                        "x": 0,
                                        "y": 0
                                      }
                                    ],
                                    "height": 1053,
                                    "width": 922
                                  },
                                  "sizes": {
                                    "large": {
                                      "h": 1053,
                                      "w": 922
                                    }
                                  },
                                  "type": "photo",
                                  "url": "https://t.co/WTcTIFGKhp",
                                  "allow_download_status": {
                                    "allow_download": true
                                  },
                                  "additional_media_info": {
                                    "monetizable": false,
                                    "source_user": {
                                      "user_results": {
                                        "rest_id": "299910920",
                                        "result": {
                                          "__typename": "...",
                                          "action_counts": "...",
                                          "avatar": "...",
                                          "banner": "...",
                                          "core": "...",
                                          "dm_permissions": "...",
                                          "exclusive_tweet_following": "...",
                                          "identity_profile_labels_highlighted_label": "...",
                                          "location": "...",
                                          "media_permissions": "...",
                                          "notifications_settings": "...",
                                          "pinned_items": "...",
                                          "privacy": "...",
                                          "private_super_following": "...",
                                          "profile_bio": "...",
                                          "profile_metadata": "...",
                                          "profile_translation": "...",
                                          "properties": "...",
                                          "relationship_counts": "...",
                                          "relationship_perspectives": "...",
                                          "rest_id": "...",
                                          "super_follow_eligible": "...",
                                          "super_followed_by": "...",
                                          "super_following": "...",
                                          "tweet_counts": "...",
                                          "website": "...",
                                          "verification": "..."
                                        }
                                      }
                                    }
                                  },
                                  "video_info": {
                                    "aspect_ratio": [
                                      1,
                                      1
                                    ],
                                    "duration_millis": 161170,
                                    "variants": [
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      },
                                      {
                                        "content_type": "application/x-mpegURL",
                                        "url": "https://video.twimg.com/amplify_video/1763932801680699392/pl/nwXzTxbwnTdf2L3B.m3u8?tag=14&v=733",
                                        "bitrate": 432000
                                      }
                                    ]
                                  },
                                  "ext_alt_text": "Morpheus Believe GIF",
                                  "source_status_id_str": "1588297469871497217",
                                  "source_user_id_str": "299910920"
                                }
                              ]
                            },
                            "favorite_count": 12644,
                            "full_text": "$21,000                                 $21,000\nin 2020                                    in 2022 https://t.co/WTcTIFGK...",
                            "lang": "en",
                            "possibly_sensitive_editable": true,
                            "quote_count": 253,
                            "reply_count": 366,
                            "retweet_count": 2712,
                            "user_id_str": "1337780902680809474"
                          },
                          "rest_id": "1541036976048336896",
                          "unmention_data": {
                            "id": "VW5tZW50aW9uczoKAAEVYtz3BxpwAA8AAgoAAAAAAA=="
                          },
                          "edit_control": {
                            "__typename": "EditControlInitial",
                            "edit_tweet_ids": [
                              "1541036976048336896",
                              "1541036976048336896"
                            ],
                            "editable_until_msecs": "1656248620000",
                            "is_edit_eligible": true,
                            "edits_remaining": "5"
                          },
                          "view_count_info": {
                            "state": "Enabled",
                            "count": "681182"
                          },
                          "note_tweet": {
                            "note_tweet_results": {
                              "rest_id": "1817546528216522752",
                              "result": {
                                "__typename": "NoteTweet",
                                "rest_id": "1817546528216522752",
                                "text": "🚨PUBLIC SERVICE ANNOUNCEMENT🚨\n\nHeather Morgan, AKA 'Razzlekhan' is a self proclaimed social engineer who pleaded guilt...",
                                "entity_set": {},
                                "media": {
                                  "inline_media": []
                                },
                                "richtext": {
                                  "richtext_tags": [
                                    {
                                      "from_index": 279,
                                      "to_index": 287,
                                      "richtext_types": [
                                        "Bold"
                                      ]
                                    }
                                  ]
                                }
                              }
                            },
                            "is_expandable": true
                          }
                        }
                      },
                      "highlights": {
                        "text_highlights": [
                          {
                            "start_index": 152,
                            "end_index": 155
                          },
                          {
                            "start_index": 152,
                            "end_index": 155
                          }
                        ]
                      }
                    },
                    "feedback_info": {
                      "feedback_keys": [
                        "1060665035",
                        "1060665035"
                      ]
                    },
                    "display_type": "Carousel",
                    "footer": {
                      "landing_url": {
                        "url": "twitter://search?query=list%3A1446054017499480064+btc&src=typed_query&type=users",
                        "url_type": "DeepLink"
                      },
                      "text": "View all"
                    },
                    "header": {
                      "display_type": "Classic",
                      "sticky": true,
                      "text": "People"
                    },
                    "items": [
                      {
                        "entry_id": "toptabsrpusermodule-1870231518329176072-user-970994516357472257",
                        "item": {
                          "client_event_info": {
                            "component": "user_module",
                            "details": {
                              "timelines_details": {
                                "controller_data": "DAACDAAFDAABDAACCgABAAAAAAAAAAEKAAJnFVEdLH8dFQsAAwAAABxsaXN0OjE0NDYwNTQwMTc0OTk0ODAwNjQgYnRjCgAFc57MAWtIGeEIAAYAAAABCgAH..."
                              }
                            },
                            "element": "user"
                          },
                          "content": {
                            "__typename": "TimelineUser",
                            "display_type": "UserDetailed",
                            "user_results": {
                              "rest_id": "970994516357472257",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 171403
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1698747465178959872/oT_AJ0eq_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/970994516357472257/1686177181"
                                },
                                "core": {
                                  "created_at": "Tue Mar 06 12:08:27 +0000 2018",
                                  "name": "Bitcoin Archive",
                                  "screen_name": "BTC_Archive"
                                },
                                "dm_permissions": {
                                  "can_dm": false
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/semantic_core_img/1428827730364096519/4ZXpTBhS?format=png&name=orig"
                                    },
                                    "description": "Automated",
                                    "long_description": {
                                      "entities": [
                                        {
                                          "from_index": "...",
                                          "ref": "...",
                                          "to_index": "..."
                                        }
                                      ],
                                      "text": "Automated by @btc_tainoko"
                                    },
                                    "user_label_type": "AutomatedLabel"
                                  }
                                },
                                "location": {
                                  "location": "Bitcoin.Archive.Channel@gmail"
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1861011222356697496",
                                    "1861011222356697496"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "#Bitcoin News, Insight, and Commentary🚀 🌗 \n👉Follow me: @ArchieX__",
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
                                      ],
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
                                      "symbols": [
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
                                  "followers": 1597710,
                                  "following": 703
                                },
                                "relationship_perspectives": {},
                                "rest_id": "970994516357472257",
                                "super_follow_eligible": true,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 6888,
                                  "tweets": 46036
                                },
                                "website": {
                                  "url": "https://t.co/WKw3Hxwf59"
                                },
                                "verification": {
                                  "is_blue_verified": true,
                                  "verified_type": "Business"
                                }
                              }
                            },
                            "user_reactive_triggers": {
                              "on_follow": {
                                "execution": {
                                  "__typename": "TimelineRemoteTimelineReaction",
                                  "request_params": [
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    },
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "entry_id": "toptabsrpusermodule-1870231518329176072-user-970994516357472257",
                        "item": {
                          "client_event_info": {
                            "component": "user_module",
                            "details": {
                              "timelines_details": {
                                "controller_data": "DAACDAAFDAABDAACCgABAAAAAAAAAAEKAAJnFVEdLH8dFQsAAwAAABxsaXN0OjE0NDYwNTQwMTc0OTk0ODAwNjQgYnRjCgAFc57MAWtIGeEIAAYAAAABCgAH..."
                              }
                            },
                            "element": "user"
                          },
                          "content": {
                            "__typename": "TimelineUser",
                            "display_type": "UserDetailed",
                            "user_results": {
                              "rest_id": "970994516357472257",
                              "result": {
                                "__typename": "User",
                                "action_counts": {
                                  "favorites_count": 171403
                                },
                                "avatar": {
                                  "image_url": "https://pbs.twimg.com/profile_images/1698747465178959872/oT_AJ0eq_normal.jpg"
                                },
                                "banner": {
                                  "image_url": "https://pbs.twimg.com/profile_banners/970994516357472257/1686177181"
                                },
                                "core": {
                                  "created_at": "Tue Mar 06 12:08:27 +0000 2018",
                                  "name": "Bitcoin Archive",
                                  "screen_name": "BTC_Archive"
                                },
                                "dm_permissions": {
                                  "can_dm": false
                                },
                                "exclusive_tweet_following": false,
                                "identity_profile_labels_highlighted_label": {
                                  "label": {
                                    "badge": {
                                      "url": "https://pbs.twimg.com/semantic_core_img/1428827730364096519/4ZXpTBhS?format=png&name=orig"
                                    },
                                    "description": "Automated",
                                    "long_description": {
                                      "entities": [
                                        {
                                          "from_index": "...",
                                          "ref": "...",
                                          "to_index": "..."
                                        }
                                      ],
                                      "text": "Automated by @btc_tainoko"
                                    },
                                    "user_label_type": "AutomatedLabel"
                                  }
                                },
                                "location": {
                                  "location": "Bitcoin.Archive.Channel@gmail"
                                },
                                "media_permissions": {
                                  "can_media_tag": false
                                },
                                "notifications_settings": {},
                                "pinned_items": {
                                  "tweet_ids_str": [
                                    "1861011222356697496",
                                    "1861011222356697496"
                                  ]
                                },
                                "privacy": {},
                                "private_super_following": false,
                                "profile_bio": {
                                  "description": "#Bitcoin News, Insight, and Commentary🚀 🌗 \n👉Follow me: @ArchieX__",
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
                                      ],
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
                                      "symbols": [
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
                                  "followers": 1597710,
                                  "following": 703
                                },
                                "relationship_perspectives": {},
                                "rest_id": "970994516357472257",
                                "super_follow_eligible": true,
                                "super_followed_by": false,
                                "super_following": false,
                                "tweet_counts": {
                                  "media_tweets": 6888,
                                  "tweets": 46036
                                },
                                "website": {
                                  "url": "https://t.co/WKw3Hxwf59"
                                },
                                "verification": {
                                  "is_blue_verified": true,
                                  "verified_type": "Business"
                                }
                              }
                            },
                            "user_reactive_triggers": {
                              "on_follow": {
                                "execution": {
                                  "__typename": "TimelineRemoteTimelineReaction",
                                  "request_params": [
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    },
                                    {
                                      "key": "useGraphQLReactivity",
                                      "value": "true"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    "cursor_type": "Top",
                    "value": "DAACCgACGfRlqDHAJxAKAAMZ9GWoMb_Y8AgABAAAAAELAAUAAADoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUJNVll0ejNCeHB3QUJVYkdxNnhsbUFCR0hx..."
                  },
                  "entry_id": "tweet-1541036976048336896",
                  "sort_index": "1870231518329176064"
                }
              ]
            }
          ],
          "response_objects": {
            "feedback_actions": [
              {
                "key": "1060665035",
                "value": {
                  "child_keys": [
                    "628739688",
                    "628739688"
                  ],
                  "client_event_info": {
                    "action": "click",
                    "component": "result",
                    "element": "feedback_givefeedback"
                  },
                  "confirmation": "Thanks for offering your feedback. X is conducting research to improve search. Choose the option that best reflects your...",
                  "confirmation_display_type": "Inline",
                  "feedback_type": "GiveFeedback",
                  "has_undo_action": true,
                  "icon": "Frown",
                  "prompt": "This post's not helpful"
                }
              },
              {
                "key": "1060665035",
                "value": {
                  "child_keys": [
                    "628739688",
                    "628739688"
                  ],
                  "client_event_info": {
                    "action": "click",
                    "component": "result",
                    "element": "feedback_givefeedback"
                  },
                  "confirmation": "Thanks for offering your feedback. X is conducting research to improve search. Choose the option that best reflects your...",
                  "confirmation_display_type": "Inline",
                  "feedback_type": "GiveFeedback",
                  "has_undo_action": true,
                  "icon": "Frown",
                  "prompt": "This post's not helpful"
                }
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
    "search_by_raw_query": {
      "id": "U2VhcmNoUXVlcnk6bGlzdDoxNDQ2MDU0MDE3NDk5NDgwMDY0IGJ0Yw==",
      "rest_id": "list:1446054017499480064 btc",
      "search_timeline": {
        "id": "VGltZWxpbmU6DAB9CwABAAAAHGxpc3Q6MTQ0NjA1NDAxNzQ5OTQ4MDA2NCBidGMIAAIAAAABAAA=",
        "timeline": {
          "id": "TopTabSrpProduct-Timeline",
          "instructions": [
            {
              "__typename": "TimelineAddEntries",
              "entries": [
                {
                  "content": {
                    "display_type": "Carousel",
                    "footer": {
                      "landing_url": {
                        "url": "twitter://search?query=list%3A1446054017499480064+btc&src=typed_query&type=users",
                        "url_type": "DeepLink"
                      },
                      "text": "View all"
                    },
                    "header": {
                      "display_type": "Classic",
                      "sticky": true,
                      "text": "People"
                    },
                    "items": [
                      {
                        "entry_id": "toptabsrpusermodule-1870231518329176072-user-970994516357472257",
                        "item": {}
                      }
                    ]
                  },
                  "entry_id": "tweet-1541036976048336896",
                  "sort_index": "1870231518329176064"
                }
              ]
            }
          ],
          "response_objects": {
            "feedback_actions": [
              {
                "key": "1060665035",
                "value": {
                  "child_keys": [
                    "628739688"
                  ],
                  "icon": "Frown"
                }
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
- View counts may come as formatted strings (e.g., `"1,234,567"`)
