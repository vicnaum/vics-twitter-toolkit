# User Followers / Light

**Route:** `GET /FollowersLight`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Followers / Light

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | No | - |
| count | STRING | No | - |
| cursor | STRING | No | - |
| username | STRING | No | `solana` |

## Response Schema

```typescript
// Root: UserFollowersLightResponse
interface UserFollowersLightResponse {
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  total_count: null;
  users: UserFollowersLightResponseUsersItem[];
}

interface UserFollowersLightResponseUsersItem {
  advertiser_account_service_levels: unknown[];  // 200/200
  advertiser_account_type: string;  // 200/200
  analytics_type: string;  // 200/200
  blocked_by: boolean;  // 200/200
  blocking: boolean;  // 200/200
  business_profile_state: string;  // 200/200
  can_media_tag: boolean;  // 200/200
  contributors_enabled: boolean;  // 200/200
  created_at: string;  // 200/200
  default_profile: boolean;  // 200/200
  default_profile_image: boolean;  // 200/200
  description: string;  // 200/200
  entities: UserFollowersLightResponseUsersItemEntities;  // 200/200
  fast_followers_count: number;  // 200/200
  favourites_count: number;  // 200/200
  follow_request_sent: boolean;  // 200/200
  followed_by: boolean;  // 200/200
  followers_count: number;  // 200/200
  following: boolean;  // 200/200
  friends_count: number;  // 200/200
  geo_enabled: boolean;  // 200/200
  has_custom_timelines: boolean;  // 200/200
  has_extended_profile: boolean;  // 200/200
  id: number;  // 200/200
  id_str: string;  // 200/200
  is_translation_enabled: boolean;  // 200/200
  is_translator: boolean;  // 200/200
  lang: null;  // 200/200
  listed_count: number;  // 200/200
  live_following: boolean;  // 200/200
  location: string;  // 200/200
  media_count: number;  // 200/200
  muting: boolean;  // 200/200
  name: string;  // 200/200
  normal_followers_count: number;  // 200/200
  notifications: boolean;  // 200/200
  pinned_tweet_ids: number[];  // 200/200
  pinned_tweet_ids_str: string[];  // 200/200
  profile_background_color: string;  // 200/200
  profile_background_image_url: null | string;  // 200/200
  profile_background_image_url_https: null | string;  // 200/200
  profile_background_tile: boolean;  // 200/200
  profile_image_url: string;  // 200/200
  profile_image_url_https: string;  // 200/200
  profile_link_color: string;  // 200/200
  profile_sidebar_border_color: string;  // 200/200
  profile_sidebar_fill_color: string;  // 200/200
  profile_text_color: string;  // 200/200
  profile_use_background_image: boolean;  // 200/200
  protected: boolean;  // 200/200
  require_some_consent: boolean;  // 200/200
  screen_name: string;  // 200/200
  statuses_count: number;  // 200/200
  time_zone: null;  // 200/200
  translator_type: string;  // 200/200
  url: null | string;  // 200/200
  utc_offset: null;  // 200/200
  verified: boolean;  // 200/200
  withheld_in_countries: unknown[];  // 200/200
  profile_banner_url?: string;  // 83/200
  status?: UserFollowersLightResponseUsersItemStatus;  // 138/200
}

interface UserFollowersLightResponseUsersItemEntities {
  description?: UserFollowersLightResponseUsersItemEntitiesDescription;
  url?: UserFollowersLightResponseUsersItemEntitiesUrl;
}

interface UserFollowersLightResponseUsersItemEntitiesDescription {
  urls?: UserFollowersLightResponseUsersItemEntitiesDescriptionUrlsItem[];
}

interface UserFollowersLightResponseUsersItemEntitiesDescriptionUrlsItem {
  display_url?: string;  // 6/2
  expanded_url?: string;  // 6/2
  indices?: number[];  // 6/2
  url?: string;  // 6/2
}

interface UserFollowersLightResponseUsersItemEntitiesUrl {
  urls?: UserFollowersLightResponseUsersItemEntitiesUrlUrlsItem[];
}

interface UserFollowersLightResponseUsersItemEntitiesUrlUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface UserFollowersLightResponseUsersItemStatus {
  contributors?: null;
  coordinates?: null;
  created_at?: string;
  entities?: UserFollowersLightResponseUsersItemStatusEntities;
  extended_entities?: UserFollowersLightResponseUsersItemStatusExtendedEntities;
  favorite_count?: number;
  favorited?: boolean;
  geo?: null;
  id?: number;
  id_str?: string;
  in_reply_to_screen_name?: string | null;
  in_reply_to_status_id?: number | null;
  in_reply_to_status_id_str?: string | null;
  in_reply_to_user_id?: number | null;
  in_reply_to_user_id_str?: string | null;
  is_quote_status?: boolean;
  lang?: string;
  place?: null;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  retweet_count?: number;
  retweeted?: boolean;
  retweeted_status?: UserFollowersLightResponseUsersItemStatusRetweetedStatus;
  self_thread?: UserFollowersLightResponseUsersItemStatusSelfThread;
  source?: string;
  supplemental_language?: null;
  text?: string;
  truncated?: boolean;
}

interface UserFollowersLightResponseUsersItemStatusEntities {
  hashtags?: UserFollowersLightResponseUsersItemStatusEntitiesHashtagsItem[];
  media?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItem[];
  symbols?: UserFollowersLightResponseUsersItemStatusEntitiesSymbolsItem[];
  urls?: UserFollowersLightResponseUsersItemStatusEntitiesUrlsItem[];
  user_mentions?: UserFollowersLightResponseUsersItemStatusEntitiesUserMentionsItem[];
}

interface UserFollowersLightResponseUsersItemStatusEntitiesHashtagsItem {
  indices?: number[];  // 43/7
  text?: string;  // 43/7
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  features?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeatures;
  id?: number;
  id_str?: string;
  indices?: number[];
  media_url?: string;
  media_url_https?: string;
  original_info?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemOriginalInfo;
  sizes?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizes;
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
  type?: string;
  url?: string;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeatures {
  large?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrig;
  small?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmall;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 10/5
  w?: number;  // 10/5
  x?: number;  // 10/5
  y?: number;  // 10/5
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 70/5
  w?: number;  // 70/5
  x?: number;  // 70/5
  y?: number;  // 70/5
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizes {
  large?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesMedium;
  small?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesSmall;
  thumb?: UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesThumb;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusEntitiesSymbolsItem {
  indices?: number[];  // 22/2
  text?: string;  // 22/2
}

interface UserFollowersLightResponseUsersItemStatusEntitiesUrlsItem {
  display_url?: string;  // 32/2
  expanded_url?: string;  // 32/2
  indices?: number[];  // 32/2
  url?: string;  // 32/2
}

interface UserFollowersLightResponseUsersItemStatusEntitiesUserMentionsItem {
  id?: number;  // 139/4
  id_str?: string;  // 139/4
  indices?: number[];  // 139/4
  name?: string;  // 139/4
  screen_name?: string;  // 139/4
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntities {
  media?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItem {
  additional_media_info?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemAdditionalMediaInfo;
  display_url?: string;  // 22/3
  expanded_url?: string;  // 22/3
  features?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeatures;  // 22/3
  id?: number;  // 22/3
  id_str?: string;  // 22/3
  indices?: number[];  // 22/3
  media_key?: string;  // 22/3
  media_url?: string;  // 22/3
  media_url_https?: string;  // 22/3
  original_info?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfo;  // 22/3
  sizes?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizes;  // 22/3
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
  type?: string;  // 22/3
  url?: string;  // 22/3
  video_info?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfo;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable?: boolean;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeatures {
  large?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrig;
  small?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmall;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 11/5
  w?: number;  // 11/5
  x?: number;  // 11/5
  y?: number;  // 11/5
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 11/5
  w?: number;  // 11/5
  x?: number;  // 11/5
  y?: number;  // 11/5
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 11/5
  w?: number;  // 11/5
  x?: number;  // 11/5
  y?: number;  // 11/5
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 11/5
  w?: number;  // 11/5
  x?: number;  // 11/5
  y?: number;  // 11/5
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 90/5
  w?: number;  // 90/5
  x?: number;  // 90/5
  y?: number;  // 90/5
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizes {
  large?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesMedium;
  small?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesSmall;
  thumb?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesThumb;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface UserFollowersLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 10/4
  content_type?: string;  // 13/4
  url?: string;  // 13/4
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatus {
  contributors?: null;
  coordinates?: null;
  created_at?: string;
  entities?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntities;
  extended_entities?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntities;
  favorite_count?: number;
  favorited?: boolean;
  geo?: null;
  id?: number;
  id_str?: string;
  in_reply_to_screen_name?: null | string;
  in_reply_to_status_id?: null | number;
  in_reply_to_status_id_str?: null | string;
  in_reply_to_user_id?: null | number;
  in_reply_to_user_id_str?: null | string;
  is_quote_status?: boolean;
  lang?: string;
  place?: null;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  retweet_count?: number;
  retweeted?: boolean;
  self_thread?: UserFollowersLightResponseUsersItemStatusRetweetedStatusSelfThread;
  source?: string;
  supplemental_language?: null;
  text?: string;
  truncated?: boolean;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntities {
  hashtags?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesHashtagsItem[];
  media?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItem[];
  symbols?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesSymbolsItem[];
  urls?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesUrlsItem[];
  user_mentions?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesUserMentionsItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesHashtagsItem {
  indices?: number[];  // 12/3
  text?: string;  // 12/3
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  features?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeatures;
  id?: number;
  id_str?: string;
  indices?: number[];
  media_url?: string;
  media_url_https?: string;
  original_info?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfo;
  sizes?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizes;
  type?: string;
  url?: string;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeatures {
  large?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrig;
  small?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmall;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLargeFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMediumFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrigFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmallFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 30/5
  w?: number;  // 30/5
  x?: number;  // 30/5
  y?: number;  // 30/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizes {
  large?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesMedium;
  small?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesSmall;
  thumb?: UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesThumb;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesSymbolsItem {
  indices?: number[];  // 14/2
  text?: string;  // 14/2
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusEntitiesUserMentionsItem {
  id?: number;  // 22/3
  id_str?: string;  // 22/3
  indices?: number[];  // 22/3
  name?: string;  // 22/3
  screen_name?: string;  // 22/3
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntities {
  media?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItem {
  additional_media_info?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemAdditionalMediaInfo;
  display_url?: string;
  expanded_url?: string;
  features?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeatures;
  id?: number;
  id_str?: string;
  indices?: number[];
  media_key?: string;
  media_url?: string;
  media_url_https?: string;
  original_info?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfo;
  sizes?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizes;
  type?: string;
  url?: string;
  video_info?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfo;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable?: boolean;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeatures {
  large?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrig;
  small?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmall;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem {
  h: number;  // 5/5
  w: number;  // 5/5
  x: number;  // 5/5
  y: number;  // 5/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 30/5
  w?: number;  // 30/5
  x?: number;  // 30/5
  y?: number;  // 30/5
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizes {
  large?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesLarge;
  medium?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesMedium;
  small?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesSmall;
  thumb?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesThumb;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 6/4
  content_type?: string;  // 8/4
  url?: string;  // 8/4
}

interface UserFollowersLightResponseUsersItemStatusRetweetedStatusSelfThread {
  id?: number;
  id_str?: string;
}

interface UserFollowersLightResponseUsersItemStatusSelfThread {
  id?: number;
  id_str?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "users": [
    {
      "id": 1473049236908347400,
      "id_str": "1473049236908347392",
      "name": "Ian⭕️",
      "screen_name": "iannsui",
      "location": "San Diego, CA",
      "description": "skip for now",
      "url": "",
      "entities": {
        "description": {
          "urls": [
            {
              "url": "https://t.co/Uq7bX8xrKe",
              "expanded_url": "http://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                40,
                40
              ]
            },
            {
              "url": "https://t.co/Uq7bX8xrKe",
              "expanded_url": "http://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                40,
                40
              ]
            }
          ]
        },
        "url": {
          "urls": [
            {
              "url": "https://t.co/oKnPaSJfyr",
              "expanded_url": "https://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                0,
                0
              ]
            },
            {
              "url": "https://t.co/oKnPaSJfyr",
              "expanded_url": "https://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                0,
                0
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 9,
      "fast_followers_count": 0,
      "normal_followers_count": 9,
      "friends_count": 3,
      "listed_count": 0,
      "created_at": "Mon Dec 20 21:54:48 +0000 2021",
      "favourites_count": 2,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 0,
      "media_count": 0,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1473049236908347392/1703014555",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1733191792411976000,
        1733191792411976000
      ],
      "pinned_tweet_ids_str": [
        "1733191792411975865",
        "1733191792411975865"
      ],
      "has_custom_timelines": false,
      "can_media_tag": true,
      "followed_by": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "advertiser_account_type": "none",
      "advertiser_account_service_levels": [],
      "analytics_type": "disabled",
      "business_profile_state": "none",
      "translator_type": "none",
      "withheld_in_countries": [],
      "require_some_consent": false,
      "status": {
        "created_at": "Sat Mar 09 08:33:44 +0000 2024",
        "id": 1766381844923335000,
        "id_str": "1766381844923334912",
        "text": "@rovercrc what you guess about baby doge?",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "Solana",
              "indices": [
                101,
                101
              ]
            },
            {
              "text": "Solana",
              "indices": [
                101,
                101
              ]
            }
          ],
          "symbols": [
            {
              "text": "Solana",
              "indices": [
                0,
                0
              ]
            },
            {
              "text": "Solana",
              "indices": [
                0,
                0
              ]
            }
          ],
          "user_mentions": [
            {
              "screen_name": "rovercrc",
              "name": "Crypto Rover",
              "id": 1353384573435056000,
              "id_str": "1353384573435056128",
              "indices": [
                0,
                0
              ]
            },
            {
              "screen_name": "rovercrc",
              "name": "Crypto Rover",
              "id": 1353384573435056000,
              "id_str": "1353384573435056128",
              "indices": [
                0,
                0
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/ek96MWtoyx",
              "expanded_url": "https://twitter.com/i/web/status/1769658738338881990",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                117
              ]
            },
            {
              "url": "https://t.co/ek96MWtoyx",
              "expanded_url": "https://twitter.com/i/web/status/1769658738338881990",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                117
              ]
            }
          ],
          "media": [
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "photo",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              }
            },
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "photo",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1766381660248146000,
        "in_reply_to_status_id_str": "1766381660248145957",
        "in_reply_to_user_id": 1353384573435056000,
        "in_reply_to_user_id_str": "1353384573435056128",
        "in_reply_to_screen_name": "rovercrc",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en",
        "supplemental_language": null,
        "retweeted_status": {
          "created_at": "Sun Feb 04 16:14:05 +0000 2024",
          "id": 1754176510070518300,
          "id_str": "1754176510070518172",
          "text": "Sent. 👍🏾 https://t.co/bBYAcmHZa1 https://t.co/wtJSDmOug8",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "DeFi",
                "indices": [
                  94,
                  94
                ]
              },
              {
                "text": "DeFi",
                "indices": [
                  94,
                  94
                ]
              }
            ],
            "symbols": [
              {
                "text": "TOAD",
                "indices": [
                  0,
                  0
                ]
              },
              {
                "text": "TOAD",
                "indices": [
                  0,
                  0
                ]
              }
            ],
            "user_mentions": [
              {
                "screen_name": "solana",
                "name": "Solana",
                "id": 951329744804393000,
                "id_str": "951329744804392960",
                "indices": [
                  7,
                  7
                ]
              },
              {
                "screen_name": "solana",
                "name": "Solana",
                "id": 951329744804393000,
                "id_str": "951329744804392960",
                "indices": [
                  7,
                  7
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/bBYAcmHZa1",
                "expanded_url": "https://twitter.com/DanielStones0/status/1754175942027538441",
                "display_url": "twitter.com/DanielStones0/…",
                "indices": [
                  9,
                  9
                ]
              },
              {
                "url": "https://t.co/bBYAcmHZa1",
                "expanded_url": "https://twitter.com/DanielStones0/status/1754175942027538441",
                "display_url": "twitter.com/DanielStones0/…",
                "indices": [
                  9,
                  9
                ]
              }
            ],
            "media": [
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                }
              },
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                },
                "media_key": "3_1754176503317757952",
                "video_info": {
                  "aspect_ratio": [
                    148,
                    148
                  ],
                  "duration_millis": 365970,
                  "variants": [
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    },
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              },
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                },
                "media_key": "3_1754176503317757952",
                "video_info": {
                  "aspect_ratio": [
                    148,
                    148
                  ],
                  "duration_millis": 365970,
                  "variants": [
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    },
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": "",
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": "",
          "in_reply_to_screen_name": "",
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": true,
          "quoted_status_id": 1754175942027538400,
          "quoted_status_id_str": "1754175942027538441",
          "retweet_count": 7,
          "favorite_count": 71,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "lang": "en",
          "supplemental_language": null,
          "self_thread": {
            "id": 1753033413185958400,
            "id_str": "1753033413185958285"
          }
        },
        "quoted_status_id": 1754175942027538400,
        "quoted_status_id_str": "1754175942027538441",
        "possibly_sensitive": false,
        "possibly_sensitive_editable": true,
        "extended_entities": {
          "media": [
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "video",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "video_info": {
                "aspect_ratio": [
                  11,
                  11
                ],
                "duration_millis": 8816,
                "variants": [
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  },
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  }
                ]
              },
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              },
              "media_key": "7_1726809194869956608",
              "additional_media_info": {
                "monetizable": false
              }
            },
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "video",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "video_info": {
                "aspect_ratio": [
                  11,
                  11
                ],
                "duration_millis": 8816,
                "variants": [
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  },
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  }
                ]
              },
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              },
              "media_key": "7_1726809194869956608",
              "additional_media_info": {
                "monetizable": false
              }
            }
          ]
        },
        "self_thread": {
          "id": 1769633978536124700,
          "id_str": "1769633978536124794"
        }
      }
    },
    {
      "id": 1473049236908347400,
      "id_str": "1473049236908347392",
      "name": "Ian⭕️",
      "screen_name": "iannsui",
      "location": "San Diego, CA",
      "description": "skip for now",
      "url": "",
      "entities": {
        "description": {
          "urls": [
            {
              "url": "https://t.co/Uq7bX8xrKe",
              "expanded_url": "http://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                40,
                40
              ]
            },
            {
              "url": "https://t.co/Uq7bX8xrKe",
              "expanded_url": "http://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                40,
                40
              ]
            }
          ]
        },
        "url": {
          "urls": [
            {
              "url": "https://t.co/oKnPaSJfyr",
              "expanded_url": "https://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                0,
                0
              ]
            },
            {
              "url": "https://t.co/oKnPaSJfyr",
              "expanded_url": "https://storywork.co.kr",
              "display_url": "storywork.co.kr",
              "indices": [
                0,
                0
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 9,
      "fast_followers_count": 0,
      "normal_followers_count": 9,
      "friends_count": 3,
      "listed_count": 0,
      "created_at": "Mon Dec 20 21:54:48 +0000 2021",
      "favourites_count": 2,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 0,
      "media_count": 0,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1473049236908347392/1703014555",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1733191792411976000,
        1733191792411976000
      ],
      "pinned_tweet_ids_str": [
        "1733191792411975865",
        "1733191792411975865"
      ],
      "has_custom_timelines": false,
      "can_media_tag": true,
      "followed_by": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "advertiser_account_type": "none",
      "advertiser_account_service_levels": [],
      "analytics_type": "disabled",
      "business_profile_state": "none",
      "translator_type": "none",
      "withheld_in_countries": [],
      "require_some_consent": false,
      "status": {
        "created_at": "Sat Mar 09 08:33:44 +0000 2024",
        "id": 1766381844923335000,
        "id_str": "1766381844923334912",
        "text": "@rovercrc what you guess about baby doge?",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "Solana",
              "indices": [
                101,
                101
              ]
            },
            {
              "text": "Solana",
              "indices": [
                101,
                101
              ]
            }
          ],
          "symbols": [
            {
              "text": "Solana",
              "indices": [
                0,
                0
              ]
            },
            {
              "text": "Solana",
              "indices": [
                0,
                0
              ]
            }
          ],
          "user_mentions": [
            {
              "screen_name": "rovercrc",
              "name": "Crypto Rover",
              "id": 1353384573435056000,
              "id_str": "1353384573435056128",
              "indices": [
                0,
                0
              ]
            },
            {
              "screen_name": "rovercrc",
              "name": "Crypto Rover",
              "id": 1353384573435056000,
              "id_str": "1353384573435056128",
              "indices": [
                0,
                0
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/ek96MWtoyx",
              "expanded_url": "https://twitter.com/i/web/status/1769658738338881990",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                117
              ]
            },
            {
              "url": "https://t.co/ek96MWtoyx",
              "expanded_url": "https://twitter.com/i/web/status/1769658738338881990",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                117,
                117
              ]
            }
          ],
          "media": [
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "photo",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              }
            },
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "photo",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              }
            }
          ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1766381660248146000,
        "in_reply_to_status_id_str": "1766381660248145957",
        "in_reply_to_user_id": 1353384573435056000,
        "in_reply_to_user_id_str": "1353384573435056128",
        "in_reply_to_screen_name": "rovercrc",
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en",
        "supplemental_language": null,
        "retweeted_status": {
          "created_at": "Sun Feb 04 16:14:05 +0000 2024",
          "id": 1754176510070518300,
          "id_str": "1754176510070518172",
          "text": "Sent. 👍🏾 https://t.co/bBYAcmHZa1 https://t.co/wtJSDmOug8",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "DeFi",
                "indices": [
                  94,
                  94
                ]
              },
              {
                "text": "DeFi",
                "indices": [
                  94,
                  94
                ]
              }
            ],
            "symbols": [
              {
                "text": "TOAD",
                "indices": [
                  0,
                  0
                ]
              },
              {
                "text": "TOAD",
                "indices": [
                  0,
                  0
                ]
              }
            ],
            "user_mentions": [
              {
                "screen_name": "solana",
                "name": "Solana",
                "id": 951329744804393000,
                "id_str": "951329744804392960",
                "indices": [
                  7,
                  7
                ]
              },
              {
                "screen_name": "solana",
                "name": "Solana",
                "id": 951329744804393000,
                "id_str": "951329744804392960",
                "indices": [
                  7,
                  7
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/bBYAcmHZa1",
                "expanded_url": "https://twitter.com/DanielStones0/status/1754175942027538441",
                "display_url": "twitter.com/DanielStones0/…",
                "indices": [
                  9,
                  9
                ]
              },
              {
                "url": "https://t.co/bBYAcmHZa1",
                "expanded_url": "https://twitter.com/DanielStones0/status/1754175942027538441",
                "display_url": "twitter.com/DanielStones0/…",
                "indices": [
                  9,
                  9
                ]
              }
            ],
            "media": [
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                }
              },
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                },
                "media_key": "3_1754176503317757952",
                "video_info": {
                  "aspect_ratio": [
                    148,
                    148
                  ],
                  "duration_millis": 365970,
                  "variants": [
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    },
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              },
              {
                "id": 1754176503317758000,
                "id_str": "1754176503317757952",
                "indices": [
                  33,
                  33
                ],
                "media_url": "http://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GFgWPFmXgAA9PCX.jpg",
                "url": "https://t.co/wtJSDmOug8",
                "display_url": "pic.twitter.com/wtJSDmOug8",
                "expanded_url": "https://twitter.com/teddi_speaks/status/1754176510070518172/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1283,
                  "height": 1141,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    },
                    {
                      "x": 0,
                      "y": 313,
                      "h": 718,
                      "w": 1283
                    }
                  ]
                },
                "sizes": {
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "medium": {
                    "w": 1200,
                    "h": 1067,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1283,
                    "h": 1141,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 605,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      },
                      {
                        "x": 232,
                        "y": 298,
                        "h": 75,
                        "w": 75
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      },
                      {
                        "x": 144,
                        "y": 185,
                        "h": 46,
                        "w": 46
                      }
                    ]
                  }
                },
                "media_key": "3_1754176503317757952",
                "video_info": {
                  "aspect_ratio": [
                    148,
                    148
                  ],
                  "duration_millis": 365970,
                  "variants": [
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    },
                    {
                      "bitrate": 288000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/amplify_video/1767422865761030144/vid/avc1/492x270/zn8F4t9M6PFtlV9_.mp4?tag=14"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": "",
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": "",
          "in_reply_to_screen_name": "",
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": true,
          "quoted_status_id": 1754175942027538400,
          "quoted_status_id_str": "1754175942027538441",
          "retweet_count": 7,
          "favorite_count": 71,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "lang": "en",
          "supplemental_language": null,
          "self_thread": {
            "id": 1753033413185958400,
            "id_str": "1753033413185958285"
          }
        },
        "quoted_status_id": 1754175942027538400,
        "quoted_status_id_str": "1754175942027538441",
        "possibly_sensitive": false,
        "possibly_sensitive_editable": true,
        "extended_entities": {
          "media": [
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "video",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "video_info": {
                "aspect_ratio": [
                  11,
                  11
                ],
                "duration_millis": 8816,
                "variants": [
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  },
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  }
                ]
              },
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              },
              "media_key": "7_1726809194869956608",
              "additional_media_info": {
                "monetizable": false
              }
            },
            {
              "id": 1726809194869956600,
              "id_str": "1726809194869956608",
              "indices": [
                30,
                30
              ],
              "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1726809194869956608/pu/img/fHfnkJo-lIcQ6STL.jpg",
              "url": "https://t.co/N4QZxxSZlv",
              "display_url": "pic.twitter.com/N4QZxxSZlv",
              "expanded_url": "https://twitter.com/drip_haus/status/1726809224536281198/video/1",
              "type": "video",
              "original_info": {
                "width": 1188,
                "height": 1080,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  },
                  {
                    "x": 0,
                    "y": 461,
                    "h": 605,
                    "w": 1080
                  }
                ]
              },
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 618,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                },
                "large": {
                  "w": 1188,
                  "h": 1080,
                  "resize": "fit"
                }
              },
              "source_status_id": 1726809224536281000,
              "source_status_id_str": "1726809224536281198",
              "source_user_id": 1512518742051238000,
              "source_user_id_str": "1512518742051237893",
              "video_info": {
                "aspect_ratio": [
                  11,
                  11
                ],
                "duration_millis": 8816,
                "variants": [
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  },
                  {
                    "bitrate": 256000,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/ext_tw_video/1726809194869956608/pu/vid/avc1/296x270/OXuIRRYUrDhO7SpO.mp4?tag=12"
                  }
                ]
              },
              "features": {
                "orig": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    },
                    {
                      "x": 232,
                      "y": 298,
                      "h": 75,
                      "w": 75
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    },
                    {
                      "x": 144,
                      "y": 185,
                      "h": 46,
                      "w": 46
                    }
                  ]
                }
              },
              "media_key": "7_1726809194869956608",
              "additional_media_info": {
                "monetizable": false
              }
            }
          ]
        },
        "self_thread": {
          "id": 1769633978536124700,
          "id_str": "1769633978536124794"
        }
      }
    }
  ],
  "next_cursor": 1793919636939387100,
  "next_cursor_str": "1793919636939387142",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Example: Minimal Response (required fields only)

```json
{
  "users": [
    {
      "id": 1473049236908347400,
      "id_str": "1473049236908347392",
      "name": "Ian⭕️",
      "screen_name": "iannsui",
      "location": "San Diego, CA",
      "description": "skip for now",
      "url": "",
      "entities": {},
      "protected": false,
      "followers_count": 9,
      "fast_followers_count": 0,
      "normal_followers_count": 9,
      "friends_count": 3,
      "listed_count": 0,
      "created_at": "Mon Dec 20 21:54:48 +0000 2021",
      "favourites_count": 2,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 0,
      "media_count": 0,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1737195024818057216/3Ht-rmZb_normal.jpg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1733191792411976000
      ],
      "pinned_tweet_ids_str": [
        "1733191792411975865"
      ],
      "has_custom_timelines": false,
      "can_media_tag": true,
      "followed_by": false,
      "following": false,
      "live_following": false,
      "follow_request_sent": false,
      "notifications": false,
      "muting": false,
      "blocking": false,
      "blocked_by": false,
      "advertiser_account_type": "none",
      "advertiser_account_service_levels": [],
      "analytics_type": "disabled",
      "business_profile_state": "none",
      "translator_type": "none",
      "withheld_in_countries": [],
      "require_some_consent": false
    }
  ],
  "next_cursor": 1793919636939387100,
  "next_cursor_str": "1793919636939387142",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Notes

- Pagination: uses next_cursor, next_cursor_str, previous_cursor, previous_cursor_str
