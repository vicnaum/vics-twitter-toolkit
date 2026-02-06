# User Following / Light

**Route:** `GET /FollowingLight`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Following / Light

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | No | - |
| username | STRING | No | `solana` |
| cursor | STRING | No | - |
| count | STRING | No | `20` |

## Response Schema

```typescript
// Root: UserFollowingLightResponse
interface UserFollowingLightResponse {
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  total_count: null;
  users: UserFollowingLightResponseUsersItem[];
}

interface UserFollowingLightResponseUsersItem {
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
  entities: UserFollowingLightResponseUsersItemEntities;  // 200/200
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
  url: string | null;  // 200/200
  utc_offset: null;  // 200/200
  verified: boolean;  // 200/200
  withheld_in_countries: unknown[];  // 200/200
  profile_banner_url?: string;  // 194/200
  status?: UserFollowingLightResponseUsersItemStatus;  // 199/200
}

interface UserFollowingLightResponseUsersItemEntities {
  description?: UserFollowingLightResponseUsersItemEntitiesDescription;
  url?: UserFollowingLightResponseUsersItemEntitiesUrl;
}

interface UserFollowingLightResponseUsersItemEntitiesDescription {
  urls?: UserFollowingLightResponseUsersItemEntitiesDescriptionUrlsItem[];
}

interface UserFollowingLightResponseUsersItemEntitiesDescriptionUrlsItem {
  display_url?: string;  // 76/3
  expanded_url?: string;  // 76/3
  indices?: number[];  // 76/3
  url?: string;  // 76/3
}

interface UserFollowingLightResponseUsersItemEntitiesUrl {
  urls?: UserFollowingLightResponseUsersItemEntitiesUrlUrlsItem[];
}

interface UserFollowingLightResponseUsersItemEntitiesUrlUrlsItem {
  display_url?: string;
  expanded_url?: string;
  indices?: number[];
  url?: string;
}

interface UserFollowingLightResponseUsersItemStatus {
  contributors?: null;
  coordinates?: null;
  created_at?: string;
  entities?: UserFollowingLightResponseUsersItemStatusEntities;
  extended_entities?: UserFollowingLightResponseUsersItemStatusExtendedEntities;
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
  place?: null | UserFollowingLightResponseUsersItemStatusPlace;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quoted_status_id?: number;
  quoted_status_id_str?: string;
  retweet_count?: number;
  retweeted?: boolean;
  retweeted_status?: UserFollowingLightResponseUsersItemStatusRetweetedStatus;
  self_thread?: UserFollowingLightResponseUsersItemStatusSelfThread;
  source?: string;
  supplemental_language?: null;
  text?: string;
  truncated?: boolean;
}

interface UserFollowingLightResponseUsersItemStatusEntities {
  hashtags?: UserFollowingLightResponseUsersItemStatusEntitiesHashtagsItem[];
  media?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItem[];
  symbols?: UserFollowingLightResponseUsersItemStatusEntitiesSymbolsItem[];
  urls?: UserFollowingLightResponseUsersItemStatusEntitiesUrlsItem[];
  user_mentions?: UserFollowingLightResponseUsersItemStatusEntitiesUserMentionsItem[];
}

interface UserFollowingLightResponseUsersItemStatusEntitiesHashtagsItem {
  indices?: number[];
  text?: string;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  features?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeatures;
  id?: number;
  id_str?: string;
  indices?: number[];
  media_url?: string;
  media_url_https?: string;
  original_info?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemOriginalInfo;
  sizes?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizes;
  source_status_id?: number;
  source_status_id_str?: string;
  source_user_id?: number;
  source_user_id_str?: string;
  type?: string;
  url?: string;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeatures {
  large?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrig;
  small?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmall;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 16/3
  w?: number;  // 16/3
  x?: number;  // 16/3
  y?: number;  // 16/3
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 16/3
  w?: number;  // 16/3
  x?: number;  // 16/3
  y?: number;  // 16/3
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 16/3
  w?: number;  // 16/3
  x?: number;  // 16/3
  y?: number;  // 16/3
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 16/3
  w?: number;  // 16/3
  x?: number;  // 16/3
  y?: number;  // 16/3
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 110/5
  w?: number;  // 110/5
  x?: number;  // 110/5
  y?: number;  // 110/5
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizes {
  large?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesMedium;
  small?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesSmall;
  thumb?: UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesThumb;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesSymbolsItem {
  indices?: number[];
  text?: string;
}

interface UserFollowingLightResponseUsersItemStatusEntitiesUrlsItem {
  display_url?: string;  // 60/2
  expanded_url?: string;  // 60/2
  indices?: number[];  // 60/2
  url?: string;  // 60/2
}

interface UserFollowingLightResponseUsersItemStatusEntitiesUserMentionsItem {
  id?: number;  // 269/8
  id_str?: string;  // 269/8
  indices?: number[];  // 269/8
  name?: string;  // 269/8
  screen_name?: string;  // 269/8
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntities {
  media?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItem {
  additional_media_info?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemAdditionalMediaInfo;
  display_url?: string;  // 33/3
  expanded_url?: string;  // 33/3
  features?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeatures;  // 33/3
  id?: number;  // 33/3
  id_str?: string;  // 33/3
  indices?: number[];  // 33/3
  media_key?: string;  // 33/3
  media_url?: string;  // 33/3
  media_url_https?: string;  // 33/3
  original_info?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfo;  // 33/3
  sizes?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizes;  // 33/3
  source_status_id?: number;  // 10/2
  source_status_id_str?: string;  // 10/2
  source_user_id?: number;  // 10/2
  source_user_id_str?: string;  // 10/2
  type?: string;  // 33/3
  url?: string;  // 33/3
  video_info?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfo;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable?: boolean;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeatures {
  large?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrig;
  small?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmall;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 22/3
  w?: number;  // 22/3
  x?: number;  // 22/3
  y?: number;  // 22/3
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 22/3
  w?: number;  // 22/3
  x?: number;  // 22/3
  y?: number;  // 22/3
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 22/3
  w?: number;  // 22/3
  x?: number;  // 22/3
  y?: number;  // 22/3
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 22/3
  w?: number;  // 22/3
  x?: number;  // 22/3
  y?: number;  // 22/3
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 140/5
  w?: number;  // 140/5
  x?: number;  // 140/5
  y?: number;  // 140/5
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizes {
  large?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesMedium;
  small?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesSmall;
  thumb?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesThumb;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface UserFollowingLightResponseUsersItemStatusExtendedEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 9/4
  content_type?: string;  // 11/4
  url?: string;  // 11/4
}

interface UserFollowingLightResponseUsersItemStatusPlace {
  attributes?: {};
  bounding_box?: UserFollowingLightResponseUsersItemStatusPlaceBoundingBox;
  contained_within?: unknown[];
  country?: string;
  country_code?: string;
  full_name?: string;
  id?: string;
  name?: string;
  place_type?: string;
  url?: string;
}

interface UserFollowingLightResponseUsersItemStatusPlaceBoundingBox {
  coordinates?: number[][][];
  type?: string;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatus {
  contributors?: null;
  coordinates?: null;
  created_at?: string;
  entities?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntities;
  extended_entities?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntities;
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
  self_thread?: UserFollowingLightResponseUsersItemStatusRetweetedStatusSelfThread;
  source?: string;
  supplemental_language?: null;
  text?: string;
  truncated?: boolean;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntities {
  hashtags?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesHashtagsItem[];
  media?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItem[];
  symbols?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesSymbolsItem[];
  urls?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesUrlsItem[];
  user_mentions?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesUserMentionsItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesHashtagsItem {
  indices?: number[];
  text?: string;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItem {
  display_url?: string;
  expanded_url?: string;
  features?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeatures;
  id?: number;
  id_str?: string;
  indices?: number[];
  media_url?: string;
  media_url_https?: string;
  original_info?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfo;
  sizes?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizes;
  type?: string;
  url?: string;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeatures {
  large?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrig;
  small?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmall;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 35/5
  w?: number;  // 35/5
  x?: number;  // 35/5
  y?: number;  // 35/5
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizes {
  large?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesMedium;
  small?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesSmall;
  thumb?: UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesThumb;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesSymbolsItem {
  indices?: number[];
  text?: string;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesUrlsItem {
  display_url?: string;  // 63/2
  expanded_url?: string;  // 63/2
  indices?: number[];  // 63/2
  url?: string;  // 63/2
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusEntitiesUserMentionsItem {
  id?: number;  // 43/3
  id_str?: string;  // 43/3
  indices?: number[];  // 43/3
  name?: string;  // 43/3
  screen_name?: string;  // 43/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntities {
  media?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItem {
  additional_media_info: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemAdditionalMediaInfo;
  video_info: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfo;
  display_url?: string;  // 9/2
  expanded_url?: string;  // 9/2
  features?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeatures;  // 9/2
  id?: number;  // 9/2
  id_str?: string;  // 9/2
  indices?: number[];  // 9/2
  media_key?: string;  // 9/2
  media_url?: string;  // 9/2
  media_url_https?: string;  // 9/2
  original_info?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfo;  // 9/2
  sizes?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizes;  // 9/2
  type?: string;  // 9/2
  url?: string;  // 9/2
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemAdditionalMediaInfo {
  monetizable: boolean;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfoVariantsItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemVideoInfoVariantsItem {
  content_type: string;  // 4/4
  url: string;  // 4/4
  bitrate?: number;  // 3/4
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeatures {
  large?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMedium;
  orig?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrig;
  small?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmall;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLarge {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMedium {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrig {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmall {
  faces?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 5/3
  w?: number;  // 5/3
  x?: number;  // 5/3
  y?: number;  // 5/3
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfo {
  focus_rects?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 40/5
  w?: number;  // 40/5
  x?: number;  // 40/5
  y?: number;  // 40/5
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizes {
  large?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesLarge;
  medium?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesMedium;
  small?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesSmall;
  thumb?: UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesThumb;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusExtendedEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserFollowingLightResponseUsersItemStatusRetweetedStatusSelfThread {
  id?: number;
  id_str?: string;
}

interface UserFollowingLightResponseUsersItemStatusSelfThread {
  id?: number;
  id_str?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "users": [
    {
      "id": 1649024512325984300,
      "id_str": "1649024512325984257",
      "name": "Solana Payments",
      "screen_name": "solanapayments",
      "location": "Solana Beach, CA",
      "description": "Independently managed site to showcase Solana’s payment ecosystem ft. 100+ amazing projects. Check out the v1 now! ⇩",
      "url": "https://t.co/yUd8hZCyBq",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/yUd8hZCyBq",
              "expanded_url": "http://www.solanapayments.fun",
              "display_url": "solanapayments.fun",
              "indices": [
                0,
                0
              ]
            },
            {
              "url": "https://t.co/yUd8hZCyBq",
              "expanded_url": "http://www.solanapayments.fun",
              "display_url": "solanapayments.fun",
              "indices": [
                0,
                0
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "https://t.co/9IHFkkuCsA",
              "expanded_url": "https://parallel.life/play/",
              "display_url": "parallel.life/play/",
              "indices": [
                56,
                56
              ]
            },
            {
              "url": "https://t.co/9IHFkkuCsA",
              "expanded_url": "https://parallel.life/play/",
              "display_url": "parallel.life/play/",
              "indices": [
                56,
                56
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 60,
      "fast_followers_count": 0,
      "normal_followers_count": 60,
      "friends_count": 0,
      "listed_count": 1,
      "created_at": "Thu Apr 20 12:17:56 +0000 2023",
      "favourites_count": 14,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5,
      "media_count": 1,
      "lang": null,
      "status": {
        "created_at": "Wed Mar 13 21:23:36 +0000 2024",
        "id": 1768025140405961200,
        "id_str": "1768025140405961168",
        "text": "RT @inSitesh: You can now participate in Grant Round 1 to support @solanapayments and other open-source projects on @_cu...",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "ARB",
              "indices": [
                102,
                102
              ]
            },
            {
              "text": "ARB",
              "indices": [
                102,
                102
              ]
            }
          ],
          "symbols": [
            {
              "text": "JUP",
              "indices": [
                10,
                10
              ]
            },
            {
              "text": "JUP",
              "indices": [
                10,
                10
              ]
            }
          ],
          "user_mentions": [
            {
              "screen_name": "inSitesh",
              "name": "Sitesh",
              "id": 1247893211097387000,
              "id_str": "1247893211097387008",
              "indices": [
                3,
                3
              ]
            },
            {
              "screen_name": "inSitesh",
              "name": "Sitesh",
              "id": 1247893211097387000,
              "id_str": "1247893211097387008",
              "indices": [
                3,
                3
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/EprC1rGUmS",
              "expanded_url": "https://twitter.com/i/web/status/1769906688050561272",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                116,
                116
              ]
            },
            {
              "url": "https://t.co/EprC1rGUmS",
              "expanded_url": "https://twitter.com/i/web/status/1769906688050561272",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                116,
                116
              ]
            }
          ],
          "media": [
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960"
            },
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960"
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
        "place": {
          "id": "163c4422d849466a",
          "url": "https://api.twitter.com/1.1/geo/id/163c4422d849466a.json",
          "place_type": "city",
          "name": "Xochitepec",
          "full_name": "Xochitepec, Morelos",
          "country_code": "MX",
          "country": "Mexico",
          "contained_within": [],
          "bounding_box": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -99.301903,
                  -99.301903
                ],
                [
                  -99.301903,
                  -99.301903
                ]
              ],
              [
                [
                  -99.301903,
                  -99.301903
                ],
                [
                  -99.301903,
                  -99.301903
                ]
              ]
            ]
          },
          "attributes": {}
        },
        "contributors": null,
        "retweeted_status": {
          "created_at": "Wed Mar 13 21:07:38 +0000 2024",
          "id": 1768021122102989000,
          "id_str": "1768021122102989086",
          "text": "You can now participate in Grant Round 1 to support @solanapayments and other open-source projects on @_cubik. ✨\n\nhttps:...",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "ARB",
                "indices": [
                  88,
                  88
                ]
              },
              {
                "text": "ARB",
                "indices": [
                  88,
                  88
                ]
              }
            ],
            "symbols": [
              {
                "text": "NORMIE",
                "indices": [
                  74,
                  74
                ]
              },
              {
                "text": "NORMIE",
                "indices": [
                  74,
                  74
                ]
              }
            ],
            "user_mentions": [
              {
                "screen_name": "solanapayments",
                "name": "Solana Payments",
                "id": 1649024512325984300,
                "id_str": "1649024512325984257",
                "indices": [
                  52,
                  52
                ]
              },
              {
                "screen_name": "solanapayments",
                "name": "Solana Payments",
                "id": 1649024512325984300,
                "id_str": "1649024512325984257",
                "indices": [
                  52,
                  52
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/XJPYUnTpU8",
                "expanded_url": "https://www.cubik.so/p/solana-payments-hub",
                "display_url": "cubik.so/p/solana-payme…",
                "indices": [
                  114,
                  114
                ]
              },
              {
                "url": "https://t.co/XJPYUnTpU8",
                "expanded_url": "https://www.cubik.so/p/solana-payments-hub",
                "display_url": "cubik.so/p/solana-payme…",
                "indices": [
                  114,
                  114
                ]
              }
            ],
            "media": [
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                }
              },
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                }
              }
            ]
          },
          "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": "",
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": "",
          "in_reply_to_screen_name": "",
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 3,
          "favorite_count": 8,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "lang": "en",
          "supplemental_language": null,
          "self_thread": {
            "id": 1768426897451454700,
            "id_str": "1768426897451454698"
          },
          "extended_entities": {
            "media": [
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                },
                "media_key": "3_1769862852452741120",
                "video_info": {
                  "aspect_ratio": [
                    16,
                    16
                  ],
                  "duration_millis": 37631,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              },
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                },
                "media_key": "3_1769862852452741120",
                "video_info": {
                  "aspect_ratio": [
                    16,
                    16
                  ],
                  "duration_millis": 37631,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "quoted_status_id": 1767219011224211700,
          "quoted_status_id_str": "1767219011224211758"
        },
        "is_quote_status": false,
        "retweet_count": 3,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en",
        "supplemental_language": null,
        "extended_entities": {
          "media": [
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "media_key": "3_1769760115249369090",
              "video_info": {
                "aspect_ratio": [
                  249,
                  249
                ],
                "variants": [
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  },
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  }
                ],
                "duration_millis": 4150
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960",
              "additional_media_info": {
                "monetizable": false
              }
            },
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "media_key": "3_1769760115249369090",
              "video_info": {
                "aspect_ratio": [
                  249,
                  249
                ],
                "variants": [
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  },
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  }
                ],
                "duration_millis": 4150
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960",
              "additional_media_info": {
                "monetizable": false
              }
            }
          ]
        },
        "possibly_sensitive": false,
        "possibly_sensitive_editable": true,
        "self_thread": {
          "id": 1769760113038951000,
          "id_str": "1769760113038950840"
        },
        "quoted_status_id": 1769754694107218400,
        "quoted_status_id_str": "1769754694107218331"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1649024512325984257/1685108988",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1769760113038951000,
        1769760113038951000
      ],
      "pinned_tweet_ids_str": [
        "1769760113038950840",
        "1769760113038950840"
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
    },
    {
      "id": 1649024512325984300,
      "id_str": "1649024512325984257",
      "name": "Solana Payments",
      "screen_name": "solanapayments",
      "location": "Solana Beach, CA",
      "description": "Independently managed site to showcase Solana’s payment ecosystem ft. 100+ amazing projects. Check out the v1 now! ⇩",
      "url": "https://t.co/yUd8hZCyBq",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/yUd8hZCyBq",
              "expanded_url": "http://www.solanapayments.fun",
              "display_url": "solanapayments.fun",
              "indices": [
                0,
                0
              ]
            },
            {
              "url": "https://t.co/yUd8hZCyBq",
              "expanded_url": "http://www.solanapayments.fun",
              "display_url": "solanapayments.fun",
              "indices": [
                0,
                0
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "https://t.co/9IHFkkuCsA",
              "expanded_url": "https://parallel.life/play/",
              "display_url": "parallel.life/play/",
              "indices": [
                56,
                56
              ]
            },
            {
              "url": "https://t.co/9IHFkkuCsA",
              "expanded_url": "https://parallel.life/play/",
              "display_url": "parallel.life/play/",
              "indices": [
                56,
                56
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 60,
      "fast_followers_count": 0,
      "normal_followers_count": 60,
      "friends_count": 0,
      "listed_count": 1,
      "created_at": "Thu Apr 20 12:17:56 +0000 2023",
      "favourites_count": 14,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5,
      "media_count": 1,
      "lang": null,
      "status": {
        "created_at": "Wed Mar 13 21:23:36 +0000 2024",
        "id": 1768025140405961200,
        "id_str": "1768025140405961168",
        "text": "RT @inSitesh: You can now participate in Grant Round 1 to support @solanapayments and other open-source projects on @_cu...",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "ARB",
              "indices": [
                102,
                102
              ]
            },
            {
              "text": "ARB",
              "indices": [
                102,
                102
              ]
            }
          ],
          "symbols": [
            {
              "text": "JUP",
              "indices": [
                10,
                10
              ]
            },
            {
              "text": "JUP",
              "indices": [
                10,
                10
              ]
            }
          ],
          "user_mentions": [
            {
              "screen_name": "inSitesh",
              "name": "Sitesh",
              "id": 1247893211097387000,
              "id_str": "1247893211097387008",
              "indices": [
                3,
                3
              ]
            },
            {
              "screen_name": "inSitesh",
              "name": "Sitesh",
              "id": 1247893211097387000,
              "id_str": "1247893211097387008",
              "indices": [
                3,
                3
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/EprC1rGUmS",
              "expanded_url": "https://twitter.com/i/web/status/1769906688050561272",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                116,
                116
              ]
            },
            {
              "url": "https://t.co/EprC1rGUmS",
              "expanded_url": "https://twitter.com/i/web/status/1769906688050561272",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                116,
                116
              ]
            }
          ],
          "media": [
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960"
            },
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960"
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
        "place": {
          "id": "163c4422d849466a",
          "url": "https://api.twitter.com/1.1/geo/id/163c4422d849466a.json",
          "place_type": "city",
          "name": "Xochitepec",
          "full_name": "Xochitepec, Morelos",
          "country_code": "MX",
          "country": "Mexico",
          "contained_within": [],
          "bounding_box": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -99.301903,
                  -99.301903
                ],
                [
                  -99.301903,
                  -99.301903
                ]
              ],
              [
                [
                  -99.301903,
                  -99.301903
                ],
                [
                  -99.301903,
                  -99.301903
                ]
              ]
            ]
          },
          "attributes": {}
        },
        "contributors": null,
        "retweeted_status": {
          "created_at": "Wed Mar 13 21:07:38 +0000 2024",
          "id": 1768021122102989000,
          "id_str": "1768021122102989086",
          "text": "You can now participate in Grant Round 1 to support @solanapayments and other open-source projects on @_cubik. ✨\n\nhttps:...",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "ARB",
                "indices": [
                  88,
                  88
                ]
              },
              {
                "text": "ARB",
                "indices": [
                  88,
                  88
                ]
              }
            ],
            "symbols": [
              {
                "text": "NORMIE",
                "indices": [
                  74,
                  74
                ]
              },
              {
                "text": "NORMIE",
                "indices": [
                  74,
                  74
                ]
              }
            ],
            "user_mentions": [
              {
                "screen_name": "solanapayments",
                "name": "Solana Payments",
                "id": 1649024512325984300,
                "id_str": "1649024512325984257",
                "indices": [
                  52,
                  52
                ]
              },
              {
                "screen_name": "solanapayments",
                "name": "Solana Payments",
                "id": 1649024512325984300,
                "id_str": "1649024512325984257",
                "indices": [
                  52,
                  52
                ]
              }
            ],
            "urls": [
              {
                "url": "https://t.co/XJPYUnTpU8",
                "expanded_url": "https://www.cubik.so/p/solana-payments-hub",
                "display_url": "cubik.so/p/solana-payme…",
                "indices": [
                  114,
                  114
                ]
              },
              {
                "url": "https://t.co/XJPYUnTpU8",
                "expanded_url": "https://www.cubik.so/p/solana-payments-hub",
                "display_url": "cubik.so/p/solana-payme…",
                "indices": [
                  114,
                  114
                ]
              }
            ],
            "media": [
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                }
              },
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                }
              }
            ]
          },
          "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": "",
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": "",
          "in_reply_to_screen_name": "",
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 3,
          "favorite_count": 8,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "possibly_sensitive_editable": true,
          "lang": "en",
          "supplemental_language": null,
          "self_thread": {
            "id": 1768426897451454700,
            "id_str": "1768426897451454698"
          },
          "extended_entities": {
            "media": [
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                },
                "media_key": "3_1769862852452741120",
                "video_info": {
                  "aspect_ratio": [
                    16,
                    16
                  ],
                  "duration_millis": 37631,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              },
              {
                "id": 1769862852452741000,
                "id_str": "1769862852452741120",
                "indices": [
                  99,
                  99
                ],
                "media_url": "http://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "media_url_https": "https://pbs.twimg.com/media/GI_Q4x2a8AAHDl6.jpg",
                "url": "https://t.co/VmUq0Y6d3J",
                "display_url": "pic.twitter.com/VmUq0Y6d3J",
                "expanded_url": "https://twitter.com/TensorFdn/status/1769862855548137754/photo/1",
                "type": "photo",
                "original_info": {
                  "width": 1200,
                  "height": 675,
                  "focus_rects": [
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
                    },
                    {
                      "x": 0,
                      "y": 0,
                      "h": 672,
                      "w": 1200
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
                    "h": 675,
                    "resize": "fit"
                  },
                  "large": {
                    "w": 1200,
                    "h": 675,
                    "resize": "fit"
                  },
                  "small": {
                    "w": 680,
                    "h": 383,
                    "resize": "fit"
                  }
                },
                "features": {
                  "medium": {
                    "faces": [
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      },
                      {
                        "x": 330,
                        "y": 165,
                        "h": 90,
                        "w": 90
                      }
                    ]
                  },
                  "orig": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "large": {
                    "faces": [
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      },
                      {
                        "x": 352,
                        "y": 177,
                        "h": 96,
                        "w": 96
                      }
                    ]
                  },
                  "small": {
                    "faces": [
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      },
                      {
                        "x": 187,
                        "y": 94,
                        "h": 51,
                        "w": 51
                      }
                    ]
                  }
                },
                "media_key": "3_1769862852452741120",
                "video_info": {
                  "aspect_ratio": [
                    16,
                    16
                  ],
                  "duration_millis": 37631,
                  "variants": [
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    },
                    {
                      "bitrate": 832000,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/ext_tw_video/1769787433581703168/pu/vid/avc1/640x360/pmMR51UQCMThq-e4.mp4?tag=12"
                    }
                  ]
                },
                "additional_media_info": {
                  "monetizable": false
                }
              }
            ]
          },
          "quoted_status_id": 1767219011224211700,
          "quoted_status_id_str": "1767219011224211758"
        },
        "is_quote_status": false,
        "retweet_count": 3,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en",
        "supplemental_language": null,
        "extended_entities": {
          "media": [
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "media_key": "3_1769760115249369090",
              "video_info": {
                "aspect_ratio": [
                  249,
                  249
                ],
                "variants": [
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  },
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  }
                ],
                "duration_millis": 4150
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960",
              "additional_media_info": {
                "monetizable": false
              }
            },
            {
              "id": 1769760115249369000,
              "id_str": "1769760115249369090",
              "indices": [
                0,
                0
              ],
              "media_url": "http://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "media_url_https": "https://pbs.twimg.com/media/GI9zcr8X0AICO9G.jpg",
              "url": "https://t.co/CtpsuAYqdx",
              "display_url": "pic.twitter.com/CtpsuAYqdx",
              "expanded_url": "https://twitter.com/GolfNApp/status/1769760120131539022/photo/1",
              "type": "photo",
              "original_info": {
                "width": 1280,
                "height": 681,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  },
                  {
                    "x": 0,
                    "y": 0,
                    "h": 681,
                    "w": 1216
                  }
                ]
              },
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 638,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1280,
                  "h": 681,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 362,
                  "resize": "fit"
                }
              },
              "features": {
                "medium": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "large": {
                  "faces": [
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    },
                    {
                      "x": 829,
                      "y": 285,
                      "h": 37,
                      "w": 37
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    },
                    {
                      "x": 563,
                      "y": 193,
                      "h": 25,
                      "w": 25
                    }
                  ]
                }
              },
              "media_key": "3_1769760115249369090",
              "video_info": {
                "aspect_ratio": [
                  249,
                  249
                ],
                "variants": [
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  },
                  {
                    "bitrate": 0,
                    "content_type": "video/mp4",
                    "url": "https://video.twimg.com/tweet_video/GI_llNCWEAArcxa.mp4"
                  }
                ],
                "duration_millis": 4150
              },
              "source_status_id": 1769862855548137700,
              "source_status_id_str": "1769862855548137754",
              "source_user_id": 1767330195072041000,
              "source_user_id_str": "1767330195072040960",
              "additional_media_info": {
                "monetizable": false
              }
            }
          ]
        },
        "possibly_sensitive": false,
        "possibly_sensitive_editable": true,
        "self_thread": {
          "id": 1769760113038951000,
          "id_str": "1769760113038950840"
        },
        "quoted_status_id": 1769754694107218400,
        "quoted_status_id_str": "1769754694107218331"
      },
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1649024512325984257/1685108988",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1769760113038951000,
        1769760113038951000
      ],
      "pinned_tweet_ids_str": [
        "1769760113038950840",
        "1769760113038950840"
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
  "next_cursor": 1750493660920418300,
  "next_cursor_str": "1750493660920418210",
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
      "id": 1649024512325984300,
      "id_str": "1649024512325984257",
      "name": "Solana Payments",
      "screen_name": "solanapayments",
      "location": "Solana Beach, CA",
      "description": "Independently managed site to showcase Solana’s payment ecosystem ft. 100+ amazing projects. Check out the v1 now! ⇩",
      "url": "https://t.co/yUd8hZCyBq",
      "entities": {},
      "protected": false,
      "followers_count": 60,
      "fast_followers_count": 0,
      "normal_followers_count": 60,
      "friends_count": 0,
      "listed_count": 1,
      "created_at": "Thu Apr 20 12:17:56 +0000 2023",
      "favourites_count": 14,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5,
      "media_count": 1,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": "",
      "profile_background_image_url_https": "",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1662093420373102599/cR9k_fPM_normal.jpg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "pinned_tweet_ids": [
        1769760113038951000
      ],
      "pinned_tweet_ids_str": [
        "1769760113038950840"
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
  "next_cursor": 1750493660920418300,
  "next_cursor_str": "1750493660920418210",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Notes

- Pagination: uses next_cursor, next_cursor_str, previous_cursor, previous_cursor_str
