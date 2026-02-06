# User timeline

**Route:** `GET /timeline.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** This endpoint gets lates user's tweets by it's screenname.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| rest_id | STRING | No | - |
| cursor | STRING | No | - |
| screenname | STRING | Yes | `elonmusk` |

## Response Schema

```typescript
// Root: UserTimelineResponse
interface UserTimelineResponse {
  next_cursor: string;
  pinned: UserTimelineResponsePinned;
  prev_cursor: string;
  status: string;
  timeline: UserTimelineResponseTimelineItem[];
  user: UserTimelineResponseUser;
}

interface UserTimelineResponsePinned {
  author: UserTimelineResponsePinnedAuthor;
  bookmarks: number;
  conversation_id: string;
  created_at: string;
  favorites: number;
  lang: string;
  media: unknown[];
  quoted: UserTimelineResponsePinnedQuoted;
  quotes: number;
  replies: number;
  retweets: number;
  text: string;
  tweet_id: string;
  views: string;
}

interface UserTimelineResponsePinnedAuthor {
  avatar: string;
  blue_verified: boolean;
  name: string;
  rest_id: string;
  screen_name: string;
}

interface UserTimelineResponsePinnedQuoted {
  author: UserTimelineResponsePinnedQuotedAuthor;
  bookmarks: number;
  conversation_id: string;
  created_at: string;
  favorites: number;
  lang: string;
  media: UserTimelineResponsePinnedQuotedMedia;
  quotes: number;
  replies: number;
  retweets: number;
  text: string;
  tweet_id: string;
  views: string;
}

interface UserTimelineResponsePinnedQuotedAuthor {
  avatar: string;
  blue_verified: boolean;
  name: string;
  rest_id: string;
  screen_name: string;
}

interface UserTimelineResponsePinnedQuotedMedia {
  photo: UserTimelineResponsePinnedQuotedMediaPhotoItem[];
}

interface UserTimelineResponsePinnedQuotedMediaPhotoItem {
  id: string;
  media_url_https: string;
}

interface UserTimelineResponseTimelineItem {
  author: UserTimelineResponseTimelineItemAuthor;  // 20/20
  bookmarks: number;  // 20/20
  conversation_id: string;  // 20/20
  created_at: string;  // 20/20
  entities: UserTimelineResponseTimelineItemEntities;  // 20/20
  favorites: number;  // 20/20
  lang: string;  // 20/20
  media: UserTimelineResponseTimelineItemMedia | unknown[];  // 20/20
  quotes: number;  // 20/20
  replies: number;  // 20/20
  retweets: number;  // 20/20
  text: string;  // 20/20
  tweet_id: string;  // 20/20
  views: string;  // 20/20
  quoted?: UserTimelineResponseTimelineItemQuoted;  // 4/20
  retweeted?: UserTimelineResponseTimelineItemRetweeted;  // 12/20
  retweeted_tweet?: UserTimelineResponseTimelineItemRetweetedTweet;  // 12/20
}

interface UserTimelineResponseTimelineItemAuthor {
  avatar?: string;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserTimelineResponseTimelineItemEntities {
  hashtags?: unknown[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: UserTimelineResponseTimelineItemEntitiesUrlsItem[];
  user_mentions?: UserTimelineResponseTimelineItemEntitiesUserMentionsItem[];
}

interface UserTimelineResponseTimelineItemEntitiesUrlsItem {
  display_url: string;
  expanded_url: string;
  url: string;
}

interface UserTimelineResponseTimelineItemEntitiesUserMentionsItem {
  id_str?: string;
  name?: string;
  screen_name?: string;
}

interface UserTimelineResponseTimelineItemMedia {
  photo?: UserTimelineResponseTimelineItemMediaPhotoItem[];
  video?: UserTimelineResponseTimelineItemMediaVideoItem[];
}

interface UserTimelineResponseTimelineItemMediaPhotoItem {
  id?: string;  // 8/4
  media_url_https?: string;  // 8/4
  sizes?: UserTimelineResponseTimelineItemMediaPhotoItemSizes;  // 8/4
}

interface UserTimelineResponseTimelineItemMediaPhotoItemSizes {
  h?: number;
  w?: number;
}

interface UserTimelineResponseTimelineItemMediaVideoItem {
  aspect_ratio?: number[];
  id?: string;
  media_url_https?: string;
  original_info?: UserTimelineResponseTimelineItemMediaVideoItemOriginalInfo;
  variants?: UserTimelineResponseTimelineItemMediaVideoItemVariantsItem[];
}

interface UserTimelineResponseTimelineItemMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserTimelineResponseTimelineItemMediaVideoItemVariantsItem {
  bitrate?: number;  // 15/4
  content_type?: string;  // 20/4
  url?: string;  // 20/4
}

interface UserTimelineResponseTimelineItemQuoted {
  author?: UserTimelineResponseTimelineItemQuotedAuthor;
  bookmarks?: number;
  conversation_id?: string;
  created_at?: string;
  favorites?: number;
  lang?: string;
  media?: UserTimelineResponseTimelineItemQuotedMedia;
  quotes?: number;
  replies?: number;
  retweets?: number;
  text?: string;
  tweet_id?: string;
  views?: string;
}

interface UserTimelineResponseTimelineItemQuotedAuthor {
  avatar?: string;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserTimelineResponseTimelineItemQuotedMedia {
  photo?: UserTimelineResponseTimelineItemQuotedMediaPhotoItem[];
  video?: UserTimelineResponseTimelineItemQuotedMediaVideoItem[];
}

interface UserTimelineResponseTimelineItemQuotedMediaPhotoItem {
  id?: string;
  media_url_https?: string;
  sizes?: UserTimelineResponseTimelineItemQuotedMediaPhotoItemSizes;
}

interface UserTimelineResponseTimelineItemQuotedMediaPhotoItemSizes {
  h?: number;
  w?: number;
}

interface UserTimelineResponseTimelineItemQuotedMediaVideoItem {
  aspect_ratio?: number[];
  id?: string;
  media_url_https?: string;
  original_info?: UserTimelineResponseTimelineItemQuotedMediaVideoItemOriginalInfo;
  variants?: UserTimelineResponseTimelineItemQuotedMediaVideoItemVariantsItem[];
}

interface UserTimelineResponseTimelineItemQuotedMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserTimelineResponseTimelineItemQuotedMediaVideoItemVariantsItem {
  bitrate?: number;  // 6/4
  content_type?: string;  // 8/4
  url?: string;  // 8/4
}

interface UserTimelineResponseTimelineItemRetweeted {
  id?: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweet {
  author?: UserTimelineResponseTimelineItemRetweetedTweetAuthor;
  bookmarks?: number;
  conversation_id?: string;
  created_at?: string;
  entities?: UserTimelineResponseTimelineItemRetweetedTweetEntities;
  favorites?: number;
  lang?: string;
  media?: UserTimelineResponseTimelineItemRetweetedTweetMedia | unknown[];
  quotes?: number;
  replies?: number;
  retweets?: number;
  text?: string;
  tweet_id?: string;
  views?: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetAuthor {
  avatar?: string;
  blue_verified?: boolean;
  name?: string;
  rest_id?: string;
  screen_name?: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntities {
  hashtags?: unknown[];
  media?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItem[];
  symbols?: unknown[];
  timestamps?: unknown[];
  urls?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesUrlsItem[];
  user_mentions?: unknown[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItem {
  source_status_id_str: string;
  source_user_id_str: string;
  additional_media_info?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfo;
  allow_download_status?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAllowDownloadStatus;
  display_url?: string;  // 15/4
  expanded_url?: string;  // 15/4
  ext_media_availability?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemExtMediaAvailability;  // 15/4
  features?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeatures;  // 12/4
  id_str?: string;  // 15/4
  indices?: number[];  // 15/4
  media_key?: string;  // 15/4
  media_results?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemMediaResults;  // 15/4
  media_url_https?: string;  // 15/4
  original_info?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemOriginalInfo;  // 15/4
  sizes?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizes;  // 15/4
  type?: string;  // 15/4
  url?: string;  // 15/4
  video_info?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemVideoInfo;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfo {
  source_user: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfoSourceUser;
  monetizable?: boolean;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfoSourceUser {
  user_results: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAdditionalMediaInfoSourceUserUserResults {
  result: User;
}

interface User {
  __typename: string;
  affiliates_highlighted_label: unknown[];
  has_graduated_access: boolean;
  id: string;
  is_blue_verified: boolean;
  legacy: UserLegacy;
  profile_image_shape: string;
  rest_id: string;
  tipjar_settings: unknown[];
}

interface UserLegacy {
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: UserLegacyEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: unknown[];
  possibly_sensitive: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: unknown[];
}

interface UserLegacyEntities {
  description: UserLegacyEntitiesDescription;
  url: UserLegacyEntitiesUrl;
}

interface UserLegacyEntitiesDescription {
  urls: unknown[];
}

interface UserLegacyEntitiesUrl {
  urls: UserLegacyEntitiesUrlUrlsItem[];
}

interface UserLegacyEntitiesUrlUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemAllowDownloadStatus {
  allow_download?: boolean;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemExtMediaAvailability {
  status?: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeatures {
  large?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesLarge;
  medium?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesMedium;
  orig?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesOrig;
  small?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesSmall;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesLarge {
  faces?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesLargeFacesItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesLargeFacesItem {
  h?: number;  // 6/2
  w?: number;  // 6/2
  x?: number;  // 6/2
  y?: number;  // 6/2
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesMedium {
  faces?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesMediumFacesItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesMediumFacesItem {
  h?: number;  // 6/2
  w?: number;  // 6/2
  x?: number;  // 6/2
  y?: number;  // 6/2
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesOrig {
  faces?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesOrigFacesItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesOrigFacesItem {
  h?: number;  // 6/2
  w?: number;  // 6/2
  x?: number;  // 6/2
  y?: number;  // 6/2
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesSmall {
  faces?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesSmallFacesItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemFeaturesSmallFacesItem {
  h?: number;  // 6/2
  w?: number;  // 6/2
  x?: number;  // 6/2
  y?: number;  // 6/2
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemMediaResults {
  result?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemMediaResultsResult;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemMediaResultsResult {
  media_key?: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemOriginalInfo {
  focus_rects?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemOriginalInfoFocusRectsItem[];
  height?: number;
  width?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemOriginalInfoFocusRectsItem {
  h?: number;  // 60/5
  w?: number;  // 60/5
  x?: number;  // 60/5
  y?: number;  // 60/5
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizes {
  large?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesLarge;
  medium?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesMedium;
  small?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesSmall;
  thumb?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesThumb;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesLarge {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesMedium {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesSmall {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemSizesThumb {
  h?: number;
  resize?: string;
  w?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemVideoInfo {
  aspect_ratio?: number[];
  duration_millis?: number;
  variants?: UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemVideoInfoVariantsItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesMediaItemVideoInfoVariantsItem {
  bitrate?: number;  // 10/5
  content_type?: string;  // 13/5
  url?: string;  // 13/5
}

interface UserTimelineResponseTimelineItemRetweetedTweetEntitiesUrlsItem {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

interface UserTimelineResponseTimelineItemRetweetedTweetMedia {
  photo?: UserTimelineResponseTimelineItemRetweetedTweetMediaPhotoItem[];
  video?: UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetMediaPhotoItem {
  id?: string;  // 12/4
  media_url_https?: string;  // 12/4
  sizes?: UserTimelineResponseTimelineItemRetweetedTweetMediaPhotoItemSizes;  // 12/4
}

interface UserTimelineResponseTimelineItemRetweetedTweetMediaPhotoItemSizes {
  h?: number;
  w?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItem {
  aspect_ratio?: number[];
  id?: string;
  media_url_https?: string;
  original_info?: UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItemOriginalInfo;
  variants?: UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItemVariantsItem[];
}

interface UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItemOriginalInfo {
  focus_rects?: unknown[];
  height?: number;
  width?: number;
}

interface UserTimelineResponseTimelineItemRetweetedTweetMediaVideoItemVariantsItem {
  bitrate?: number;  // 10/5
  content_type?: string;  // 13/5
  url?: string;  // 13/5
}

interface UserTimelineResponseUser {
  affiliates: UserTimelineResponseUserAffiliates;
  avatar: string;
  blue_verified: boolean;
  business_account: unknown[];
  created_at: string;
  desc: string;
  friends: number;
  header_image: string;
  id: string;
  location: string;
  media_count: number;
  name: string;
  pinned_tweet_ids_str: string[];
  profile: string;
  protected: null;
  rest_id: string;
  status: string;
  statuses_count: number;
  sub_count: number;
}

interface UserTimelineResponseUserAffiliates {
  label: UserTimelineResponseUserAffiliatesLabel;
}

interface UserTimelineResponseUserAffiliatesLabel {
  badge: UserTimelineResponseUserAffiliatesLabelBadge;
  description: string;
  url: UserTimelineResponseUserAffiliatesLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface UserTimelineResponseUserAffiliatesLabelBadge {
  url: string;
}

interface UserTimelineResponseUserAffiliatesLabelUrl {
  url: string;
  urlType: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "pinned": {
    "tweet_id": "1858318917141197107",
    "bookmarks": 988,
    "created_at": "Mon Nov 18 01:18:50 +0000 2024",
    "favorites": 26948,
    "text": "There are so many regulators that it’s like a sports game with more refs than players on the field!",
    "lang": "en",
    "views": "12559174",
    "quotes": 229,
    "replies": 3286,
    "retweets": 4982,
    "conversation_id": "1858318917141197107",
    "media": [],
    "author": {
      "rest_id": "44196397",
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
      "blue_verified": true
    },
    "quoted": {
      "tweet_id": "1858318075906359423",
      "bookmarks": 113,
      "created_at": "Mon Nov 18 01:15:29 +0000 2024",
      "favorites": 988,
      "text": "Top Chart: Regulatory Agency Budget\n\nBottom Chart: Regulatory Agency Staffing https://t.co/k8uj1zihjy",
      "lang": "en",
      "views": "12539013",
      "quotes": 33,
      "replies": 119,
      "retweets": 195,
      "conversation_id": "1858318075906359423",
      "author": {
        "rest_id": "1485689970593468416",
        "name": "The Rabbit Hole",
        "screen_name": "TheRabbitHole84",
        "avatar": "https://pbs.twimg.com/profile_images/1522017422550528001/6AceRKJQ_normal.png",
        "blue_verified": true
      },
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GcoScLUXIAAVfxD.jpg",
            "id": "1858318071527579648"
          }
        ]
      }
    }
  },
  "timeline": [
    {
      "tweet_id": "1858398528214630863",
      "bookmarks": 0,
      "created_at": "Mon Nov 18 06:35:11 +0000 2024",
      "favorites": 0,
      "text": "RT @DefiyantlyFree: Pete Hegseth on the corruption in government schools. https://t.co/WN6iQGWSD1",
      "lang": "en",
      "views": "102",
      "quotes": 0,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [
          {
            "display_url": "spacex.com/launches/missi…",
            "expanded_url": "http://spacex.com/launches/mission/?missionId=starship-flight-6",
            "url": "https://t.co/oIFc3u9laE"
          }
        ],
        "user_mentions": [
          {
            "id_str": "1560341081576939524",
            "name": "Insurrection Barbie",
            "screen_name": "DefiyantlyFree"
          },
          {
            "id_str": "1560341081576939524",
            "name": "Insurrection Barbie",
            "screen_name": "DefiyantlyFree"
          }
        ]
      },
      "replies": 0,
      "retweets": 1666,
      "conversation_id": "1858398528214630863",
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              }
            ],
            "aspect_ratio": [
              9,
              9
            ],
            "original_info": {
              "height": 1024,
              "width": 576,
              "focus_rects": []
            },
            "id": "1858298285095587840"
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              }
            ],
            "aspect_ratio": [
              9,
              9
            ],
            "original_info": {
              "height": 1024,
              "width": 576,
              "focus_rects": []
            },
            "id": "1858298285095587840"
          }
        ],
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
            "id": "1858391629431771136",
            "sizes": {
              "h": 715,
              "w": 930
            }
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
            "id": "1858391629431771136",
            "sizes": {
              "h": 715,
              "w": 930
            }
          }
        ]
      },
      "author": {
        "rest_id": "44196397",
        "name": "Elon Musk",
        "screen_name": "elonmusk",
        "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
        "blue_verified": true
      },
      "retweeted": {
        "id": "1858298397075366398"
      },
      "retweeted_tweet": {
        "tweet_id": "1858298397075366398",
        "bookmarks": 792,
        "created_at": "Sun Nov 17 23:57:18 +0000 2024",
        "favorites": 7843,
        "text": "Pete Hegseth on the corruption in government schools. https://t.co/WN6iQGWSD1",
        "lang": "en",
        "views": "1026322",
        "quotes": 75,
        "entities": {
          "hashtags": [],
          "media": [
            {
              "display_url": "pic.x.com/WN6iQGWSD1",
              "expanded_url": "https://x.com/DefiyantlyFree/status/1858298397075366398/video/1",
              "id_str": "1858298285095587840",
              "indices": [
                54,
                54
              ],
              "media_key": "13_1858298285095587840",
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "type": "video",
              "url": "https://t.co/WN6iQGWSD1",
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "user_results": {
                    "result": {
                      "__typename": "User",
                      "id": "VXNlcjoxNDM4MjY2ODcy",
                      "rest_id": "1438266872",
                      "affiliates_highlighted_label": [],
                      "has_graduated_access": true,
                      "is_blue_verified": false,
                      "profile_image_shape": "Circle",
                      "legacy": {
                        "can_dm": false,
                        "can_media_tag": false,
                        "created_at": "Sat May 18 12:27:40 +0000 2013",
                        "default_profile": false,
                        "default_profile_image": false,
                        "description": "Fan de musique & progressive, batteur & claviériste, infographiste, réalise les affiches du festival Prog en Beauce (Are...",
                        "entities": {
                          "description": {
                            "urls": []
                          },
                          "url": {
                            "urls": [
                              {
                                "display_url": "youtube.com/user/fabien282…",
                                "expanded_url": "https://www.youtube.com/user/fabien28290",
                                "url": "https://t.co/MI7fVBjHmY",
                                "indices": [
                                  0,
                                  0
                                ]
                              }
                            ]
                          }
                        },
                        "fast_followers_count": 0,
                        "favourites_count": 5678,
                        "followers_count": 268,
                        "friends_count": 536,
                        "has_custom_timelines": true,
                        "is_translator": false,
                        "listed_count": 11,
                        "location": "France",
                        "media_count": 436,
                        "name": "Fabien Bienvenu",
                        "normal_followers_count": 268,
                        "pinned_tweet_ids_str": [],
                        "possibly_sensitive": false,
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1438266872/1561925715",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1728811944935579648/6CbuwDJb_normal.jpg",
                        "profile_interstitial_type": "",
                        "screen_name": "FabBienvenu",
                        "statuses_count": 3034,
                        "translator_type": "none",
                        "url": "https://t.co/MI7fVBjHmY",
                        "verified": false,
                        "want_retweets": false,
                        "withheld_in_countries": []
                      },
                      "tipjar_settings": []
                    }
                  }
                }
              },
              "ext_media_availability": {
                "status": "Available"
              },
              "sizes": {
                "large": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "medium": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "small": {
                  "h": 680,
                  "w": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "h": 150,
                  "w": 150,
                  "resize": "crop"
                }
              },
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  },
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  }
                ]
              },
              "allow_download_status": {
                "allow_download": true
              },
              "video_info": {
                "aspect_ratio": [
                  9,
                  9
                ],
                "duration_millis": 182366,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  }
                ]
              },
              "media_results": {
                "result": {
                  "media_key": "13_1858298285095587840"
                }
              },
              "features": {
                "large": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    },
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                }
              },
              "source_status_id_str": "1364329548494553091",
              "source_user_id_str": "1438266872"
            },
            {
              "display_url": "pic.x.com/WN6iQGWSD1",
              "expanded_url": "https://x.com/DefiyantlyFree/status/1858298397075366398/video/1",
              "id_str": "1858298285095587840",
              "indices": [
                54,
                54
              ],
              "media_key": "13_1858298285095587840",
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "type": "video",
              "url": "https://t.co/WN6iQGWSD1",
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "user_results": {
                    "result": {
                      "__typename": "User",
                      "id": "VXNlcjoxNDM4MjY2ODcy",
                      "rest_id": "1438266872",
                      "affiliates_highlighted_label": [],
                      "has_graduated_access": true,
                      "is_blue_verified": false,
                      "profile_image_shape": "Circle",
                      "legacy": {
                        "can_dm": false,
                        "can_media_tag": false,
                        "created_at": "Sat May 18 12:27:40 +0000 2013",
                        "default_profile": false,
                        "default_profile_image": false,
                        "description": "Fan de musique & progressive, batteur & claviériste, infographiste, réalise les affiches du festival Prog en Beauce (Are...",
                        "entities": {
                          "description": {
                            "urls": []
                          },
                          "url": {
                            "urls": [
                              {
                                "display_url": "youtube.com/user/fabien282…",
                                "expanded_url": "https://www.youtube.com/user/fabien28290",
                                "url": "https://t.co/MI7fVBjHmY",
                                "indices": [
                                  0,
                                  0
                                ]
                              }
                            ]
                          }
                        },
                        "fast_followers_count": 0,
                        "favourites_count": 5678,
                        "followers_count": 268,
                        "friends_count": 536,
                        "has_custom_timelines": true,
                        "is_translator": false,
                        "listed_count": 11,
                        "location": "France",
                        "media_count": 436,
                        "name": "Fabien Bienvenu",
                        "normal_followers_count": 268,
                        "pinned_tweet_ids_str": [],
                        "possibly_sensitive": false,
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1438266872/1561925715",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1728811944935579648/6CbuwDJb_normal.jpg",
                        "profile_interstitial_type": "",
                        "screen_name": "FabBienvenu",
                        "statuses_count": 3034,
                        "translator_type": "none",
                        "url": "https://t.co/MI7fVBjHmY",
                        "verified": false,
                        "want_retweets": false,
                        "withheld_in_countries": []
                      },
                      "tipjar_settings": []
                    }
                  }
                }
              },
              "ext_media_availability": {
                "status": "Available"
              },
              "sizes": {
                "large": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "medium": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "small": {
                  "h": 680,
                  "w": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "h": 150,
                  "w": 150,
                  "resize": "crop"
                }
              },
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  },
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  }
                ]
              },
              "allow_download_status": {
                "allow_download": true
              },
              "video_info": {
                "aspect_ratio": [
                  9,
                  9
                ],
                "duration_millis": 182366,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  }
                ]
              },
              "media_results": {
                "result": {
                  "media_key": "13_1858298285095587840"
                }
              },
              "features": {
                "large": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    },
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                }
              },
              "source_status_id_str": "1364329548494553091",
              "source_user_id_str": "1438266872"
            }
          ],
          "symbols": [],
          "timestamps": [],
          "urls": [
            {
              "display_url": "spacex.com/launches/missi…",
              "expanded_url": "http://spacex.com/launches/mission/?missionId=starship-flight-6",
              "url": "https://t.co/oIFc3u9laE",
              "indices": [
                94,
                94
              ]
            }
          ],
          "user_mentions": []
        },
        "replies": 480,
        "retweets": 1666,
        "conversation_id": "1858298397075366398",
        "author": {
          "rest_id": "1560341081576939524",
          "name": "Insurrection Barbie",
          "screen_name": "DefiyantlyFree",
          "avatar": "https://pbs.twimg.com/profile_images/1842740427872522240/X0Sggcwq_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                }
              ],
              "aspect_ratio": [
                9,
                9
              ],
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": []
              },
              "id": "1858298285095587840"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                }
              ],
              "aspect_ratio": [
                9,
                9
              ],
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": []
              },
              "id": "1858298285095587840"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
              "id": "1858391629431771136",
              "sizes": {
                "h": 715,
                "w": 930
              }
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
              "id": "1858391629431771136",
              "sizes": {
                "h": 715,
                "w": 930
              }
            }
          ]
        }
      },
      "quoted": {
        "tweet_id": "1858081283621941457",
        "bookmarks": 3109,
        "created_at": "Sun Nov 17 09:34:34 +0000 2024",
        "favorites": 12919,
        "text": "Nominated Department of Health and Human Services lead Robert F. Kennedy Jr.’s questioning of vaccines and current healt...",
        "lang": "en",
        "views": "3663350",
        "quotes": 261,
        "replies": 366,
        "retweets": 3697,
        "conversation_id": "1858081283621941457",
        "author": {
          "rest_id": "1109532876310302721",
          "name": "Camus",
          "screen_name": "newstart_2024",
          "avatar": "https://pbs.twimg.com/profile_images/1729784630734123008/aXeiuu36_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1858081055342768128/pu/img/t3KYWWDVtam2NZxu.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "original_info": {
                "height": 720,
                "width": 1280,
                "focus_rects": []
              },
              "id": "1858081055342768128"
            },
            {
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1858081055342768128/pu/img/t3KYWWDVtam2NZxu.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "original_info": {
                "height": 720,
                "width": 1280,
                "focus_rects": []
              },
              "id": "1858081055342768128"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/GcmBtZgWQAAkxYg.jpg",
              "id": "1858158938207698944",
              "sizes": {
                "h": 900,
                "w": 1070
              }
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/GcmBtZgWQAAkxYg.jpg",
              "id": "1858158938207698944",
              "sizes": {
                "h": 900,
                "w": 1070
              }
            }
          ]
        }
      }
    },
    {
      "tweet_id": "1858398528214630863",
      "bookmarks": 0,
      "created_at": "Mon Nov 18 06:35:11 +0000 2024",
      "favorites": 0,
      "text": "RT @DefiyantlyFree: Pete Hegseth on the corruption in government schools. https://t.co/WN6iQGWSD1",
      "lang": "en",
      "views": "102",
      "quotes": 0,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "timestamps": [],
        "urls": [
          {
            "display_url": "spacex.com/launches/missi…",
            "expanded_url": "http://spacex.com/launches/mission/?missionId=starship-flight-6",
            "url": "https://t.co/oIFc3u9laE"
          }
        ],
        "user_mentions": [
          {
            "id_str": "1560341081576939524",
            "name": "Insurrection Barbie",
            "screen_name": "DefiyantlyFree"
          },
          {
            "id_str": "1560341081576939524",
            "name": "Insurrection Barbie",
            "screen_name": "DefiyantlyFree"
          }
        ]
      },
      "replies": 0,
      "retweets": 1666,
      "conversation_id": "1858398528214630863",
      "media": {
        "video": [
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              }
            ],
            "aspect_ratio": [
              9,
              9
            ],
            "original_info": {
              "height": 1024,
              "width": 576,
              "focus_rects": []
            },
            "id": "1858298285095587840"
          },
          {
            "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                "bitrate": 632000
              }
            ],
            "aspect_ratio": [
              9,
              9
            ],
            "original_info": {
              "height": 1024,
              "width": 576,
              "focus_rects": []
            },
            "id": "1858298285095587840"
          }
        ],
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
            "id": "1858391629431771136",
            "sizes": {
              "h": 715,
              "w": 930
            }
          },
          {
            "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
            "id": "1858391629431771136",
            "sizes": {
              "h": 715,
              "w": 930
            }
          }
        ]
      },
      "author": {
        "rest_id": "44196397",
        "name": "Elon Musk",
        "screen_name": "elonmusk",
        "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
        "blue_verified": true
      },
      "retweeted": {
        "id": "1858298397075366398"
      },
      "retweeted_tweet": {
        "tweet_id": "1858298397075366398",
        "bookmarks": 792,
        "created_at": "Sun Nov 17 23:57:18 +0000 2024",
        "favorites": 7843,
        "text": "Pete Hegseth on the corruption in government schools. https://t.co/WN6iQGWSD1",
        "lang": "en",
        "views": "1026322",
        "quotes": 75,
        "entities": {
          "hashtags": [],
          "media": [
            {
              "display_url": "pic.x.com/WN6iQGWSD1",
              "expanded_url": "https://x.com/DefiyantlyFree/status/1858298397075366398/video/1",
              "id_str": "1858298285095587840",
              "indices": [
                54,
                54
              ],
              "media_key": "13_1858298285095587840",
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "type": "video",
              "url": "https://t.co/WN6iQGWSD1",
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "user_results": {
                    "result": {
                      "__typename": "User",
                      "id": "VXNlcjoxNDM4MjY2ODcy",
                      "rest_id": "1438266872",
                      "affiliates_highlighted_label": [],
                      "has_graduated_access": true,
                      "is_blue_verified": false,
                      "profile_image_shape": "Circle",
                      "legacy": {
                        "can_dm": false,
                        "can_media_tag": false,
                        "created_at": "Sat May 18 12:27:40 +0000 2013",
                        "default_profile": false,
                        "default_profile_image": false,
                        "description": "Fan de musique & progressive, batteur & claviériste, infographiste, réalise les affiches du festival Prog en Beauce (Are...",
                        "entities": {
                          "description": {
                            "urls": []
                          },
                          "url": {
                            "urls": [
                              {
                                "display_url": "youtube.com/user/fabien282…",
                                "expanded_url": "https://www.youtube.com/user/fabien28290",
                                "url": "https://t.co/MI7fVBjHmY",
                                "indices": [
                                  0,
                                  0
                                ]
                              }
                            ]
                          }
                        },
                        "fast_followers_count": 0,
                        "favourites_count": 5678,
                        "followers_count": 268,
                        "friends_count": 536,
                        "has_custom_timelines": true,
                        "is_translator": false,
                        "listed_count": 11,
                        "location": "France",
                        "media_count": 436,
                        "name": "Fabien Bienvenu",
                        "normal_followers_count": 268,
                        "pinned_tweet_ids_str": [],
                        "possibly_sensitive": false,
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1438266872/1561925715",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1728811944935579648/6CbuwDJb_normal.jpg",
                        "profile_interstitial_type": "",
                        "screen_name": "FabBienvenu",
                        "statuses_count": 3034,
                        "translator_type": "none",
                        "url": "https://t.co/MI7fVBjHmY",
                        "verified": false,
                        "want_retweets": false,
                        "withheld_in_countries": []
                      },
                      "tipjar_settings": []
                    }
                  }
                }
              },
              "ext_media_availability": {
                "status": "Available"
              },
              "sizes": {
                "large": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "medium": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "small": {
                  "h": 680,
                  "w": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "h": 150,
                  "w": 150,
                  "resize": "crop"
                }
              },
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  },
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  }
                ]
              },
              "allow_download_status": {
                "allow_download": true
              },
              "video_info": {
                "aspect_ratio": [
                  9,
                  9
                ],
                "duration_millis": 182366,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  }
                ]
              },
              "media_results": {
                "result": {
                  "media_key": "13_1858298285095587840"
                }
              },
              "features": {
                "large": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    },
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                }
              },
              "source_status_id_str": "1364329548494553091",
              "source_user_id_str": "1438266872"
            },
            {
              "display_url": "pic.x.com/WN6iQGWSD1",
              "expanded_url": "https://x.com/DefiyantlyFree/status/1858298397075366398/video/1",
              "id_str": "1858298285095587840",
              "indices": [
                54,
                54
              ],
              "media_key": "13_1858298285095587840",
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "type": "video",
              "url": "https://t.co/WN6iQGWSD1",
              "additional_media_info": {
                "monetizable": false,
                "source_user": {
                  "user_results": {
                    "result": {
                      "__typename": "User",
                      "id": "VXNlcjoxNDM4MjY2ODcy",
                      "rest_id": "1438266872",
                      "affiliates_highlighted_label": [],
                      "has_graduated_access": true,
                      "is_blue_verified": false,
                      "profile_image_shape": "Circle",
                      "legacy": {
                        "can_dm": false,
                        "can_media_tag": false,
                        "created_at": "Sat May 18 12:27:40 +0000 2013",
                        "default_profile": false,
                        "default_profile_image": false,
                        "description": "Fan de musique & progressive, batteur & claviériste, infographiste, réalise les affiches du festival Prog en Beauce (Are...",
                        "entities": {
                          "description": {
                            "urls": []
                          },
                          "url": {
                            "urls": [
                              {
                                "display_url": "youtube.com/user/fabien282…",
                                "expanded_url": "https://www.youtube.com/user/fabien28290",
                                "url": "https://t.co/MI7fVBjHmY",
                                "indices": [
                                  0,
                                  0
                                ]
                              }
                            ]
                          }
                        },
                        "fast_followers_count": 0,
                        "favourites_count": 5678,
                        "followers_count": 268,
                        "friends_count": 536,
                        "has_custom_timelines": true,
                        "is_translator": false,
                        "listed_count": 11,
                        "location": "France",
                        "media_count": 436,
                        "name": "Fabien Bienvenu",
                        "normal_followers_count": 268,
                        "pinned_tweet_ids_str": [],
                        "possibly_sensitive": false,
                        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1438266872/1561925715",
                        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1728811944935579648/6CbuwDJb_normal.jpg",
                        "profile_interstitial_type": "",
                        "screen_name": "FabBienvenu",
                        "statuses_count": 3034,
                        "translator_type": "none",
                        "url": "https://t.co/MI7fVBjHmY",
                        "verified": false,
                        "want_retweets": false,
                        "withheld_in_countries": []
                      },
                      "tipjar_settings": []
                    }
                  }
                }
              },
              "ext_media_availability": {
                "status": "Available"
              },
              "sizes": {
                "large": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "medium": {
                  "h": 1024,
                  "w": 576,
                  "resize": "fit"
                },
                "small": {
                  "h": 680,
                  "w": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "h": 150,
                  "w": 150,
                  "resize": "crop"
                }
              },
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": [
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  },
                  {
                    "x": 0,
                    "y": 135,
                    "w": 930,
                    "h": 521
                  }
                ]
              },
              "allow_download_status": {
                "allow_download": true
              },
              "video_info": {
                "aspect_ratio": [
                  9,
                  9
                ],
                "duration_millis": 182366,
                "variants": [
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  },
                  {
                    "content_type": "application/x-mpegURL",
                    "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                    "bitrate": 632000
                  }
                ]
              },
              "media_results": {
                "result": {
                  "media_key": "13_1858298285095587840"
                }
              },
              "features": {
                "large": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "medium": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                },
                "small": {
                  "faces": [
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    },
                    {
                      "x": 445,
                      "y": 193,
                      "h": 116,
                      "w": 116
                    }
                  ]
                },
                "orig": {
                  "faces": [
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    },
                    {
                      "x": 609,
                      "y": 264,
                      "h": 160,
                      "w": 160
                    }
                  ]
                }
              },
              "source_status_id_str": "1364329548494553091",
              "source_user_id_str": "1438266872"
            }
          ],
          "symbols": [],
          "timestamps": [],
          "urls": [
            {
              "display_url": "spacex.com/launches/missi…",
              "expanded_url": "http://spacex.com/launches/mission/?missionId=starship-flight-6",
              "url": "https://t.co/oIFc3u9laE",
              "indices": [
                94,
                94
              ]
            }
          ],
          "user_mentions": []
        },
        "replies": 480,
        "retweets": 1666,
        "conversation_id": "1858298397075366398",
        "author": {
          "rest_id": "1560341081576939524",
          "name": "Insurrection Barbie",
          "screen_name": "DefiyantlyFree",
          "avatar": "https://pbs.twimg.com/profile_images/1842740427872522240/X0Sggcwq_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                }
              ],
              "aspect_ratio": [
                9,
                9
              ],
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": []
              },
              "id": "1858298285095587840"
            },
            {
              "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1858298285095587840/img/JE2gaoQom3PGl1Pj.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/amplify_video/1858298285095587840/pl/m6bBFE-GJSPMCp-u.m3u8?tag=16&v=95b",
                  "bitrate": 632000
                }
              ],
              "aspect_ratio": [
                9,
                9
              ],
              "original_info": {
                "height": 1024,
                "width": 576,
                "focus_rects": []
              },
              "id": "1858298285095587840"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
              "id": "1858391629431771136",
              "sizes": {
                "h": 715,
                "w": 930
              }
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/GcpVVz3XEAAy5XF.jpg",
              "id": "1858391629431771136",
              "sizes": {
                "h": 715,
                "w": 930
              }
            }
          ]
        }
      },
      "quoted": {
        "tweet_id": "1858081283621941457",
        "bookmarks": 3109,
        "created_at": "Sun Nov 17 09:34:34 +0000 2024",
        "favorites": 12919,
        "text": "Nominated Department of Health and Human Services lead Robert F. Kennedy Jr.’s questioning of vaccines and current healt...",
        "lang": "en",
        "views": "3663350",
        "quotes": 261,
        "replies": 366,
        "retweets": 3697,
        "conversation_id": "1858081283621941457",
        "author": {
          "rest_id": "1109532876310302721",
          "name": "Camus",
          "screen_name": "newstart_2024",
          "avatar": "https://pbs.twimg.com/profile_images/1729784630734123008/aXeiuu36_normal.jpg",
          "blue_verified": true
        },
        "media": {
          "video": [
            {
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1858081055342768128/pu/img/t3KYWWDVtam2NZxu.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "original_info": {
                "height": 720,
                "width": 1280,
                "focus_rects": []
              },
              "id": "1858081055342768128"
            },
            {
              "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1858081055342768128/pu/img/t3KYWWDVtam2NZxu.jpg",
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1858081055342768128/pu/pl/EZvlVO2a8MiVcu74.m3u8?tag=12&v=2b5",
                  "bitrate": 256000
                }
              ],
              "aspect_ratio": [
                16,
                16
              ],
              "original_info": {
                "height": 720,
                "width": 1280,
                "focus_rects": []
              },
              "id": "1858081055342768128"
            }
          ],
          "photo": [
            {
              "media_url_https": "https://pbs.twimg.com/media/GcmBtZgWQAAkxYg.jpg",
              "id": "1858158938207698944",
              "sizes": {
                "h": 900,
                "w": 1070
              }
            },
            {
              "media_url_https": "https://pbs.twimg.com/media/GcmBtZgWQAAkxYg.jpg",
              "id": "1858158938207698944",
              "sizes": {
                "h": 900,
                "w": 1070
              }
            }
          ]
        }
      }
    }
  ],
  "next_cursor": "DAABCgABGcqaFgd__-gKAAIZyhbkCxZRqQgAAwAAAAIAAA",
  "prev_cursor": "DAABCgABGcqaFgeAJxEKAAIZyludfVeBzwgAAwAAAAEAAA",
  "status": "ok",
  "user": {
    "status": "active",
    "profile": "elonmusk",
    "rest_id": "44196397",
    "blue_verified": true,
    "affiliates": {
      "label": {
        "url": {
          "url": "https://twitter.com/X",
          "urlType": "DeepLink"
        },
        "badge": {
          "url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg"
        },
        "description": "X",
        "userLabelType": "BusinessLabel",
        "userLabelDisplayType": "Badge"
      }
    },
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/44196397/1726163678",
    "desc": "The people voted for major government reform",
    "name": "Elon Musk",
    "protected": null,
    "location": "",
    "friends": 831,
    "sub_count": 205113140,
    "statuses_count": 58993,
    "media_count": 2782,
    "created_at": "Tue Jun 02 20:12:29 +0000 2009",
    "pinned_tweet_ids_str": [
      "1858318917141197107"
    ],
    "id": "44196397"
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "pinned": {
    "tweet_id": "1858318917141197107",
    "bookmarks": 988,
    "created_at": "Mon Nov 18 01:18:50 +0000 2024",
    "favorites": 26948,
    "text": "There are so many regulators that it’s like a sports game with more refs than players on the field!",
    "lang": "en",
    "views": "12559174",
    "quotes": 229,
    "replies": 3286,
    "retweets": 4982,
    "conversation_id": "1858318917141197107",
    "media": [],
    "author": {
      "rest_id": "44196397",
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
      "blue_verified": true
    },
    "quoted": {
      "tweet_id": "1858318075906359423",
      "bookmarks": 113,
      "created_at": "Mon Nov 18 01:15:29 +0000 2024",
      "favorites": 988,
      "text": "Top Chart: Regulatory Agency Budget\n\nBottom Chart: Regulatory Agency Staffing https://t.co/k8uj1zihjy",
      "lang": "en",
      "views": "12539013",
      "quotes": 33,
      "replies": 119,
      "retweets": 195,
      "conversation_id": "1858318075906359423",
      "author": {
        "rest_id": "1485689970593468416",
        "name": "The Rabbit Hole",
        "screen_name": "TheRabbitHole84",
        "avatar": "https://pbs.twimg.com/profile_images/1522017422550528001/6AceRKJQ_normal.png",
        "blue_verified": true
      },
      "media": {
        "photo": [
          {
            "media_url_https": "https://pbs.twimg.com/media/GcoScLUXIAAVfxD.jpg",
            "id": "1858318071527579648"
          }
        ]
      }
    }
  },
  "timeline": [
    {
      "tweet_id": "1858398528214630863",
      "bookmarks": 0,
      "created_at": "Mon Nov 18 06:35:11 +0000 2024",
      "favorites": 0,
      "text": "RT @DefiyantlyFree: Pete Hegseth on the corruption in government schools. https://t.co/WN6iQGWSD1",
      "lang": "en",
      "views": "102",
      "quotes": 0,
      "entities": {},
      "replies": 0,
      "retweets": 1666,
      "conversation_id": "1858398528214630863",
      "media": {},
      "author": {}
    }
  ],
  "next_cursor": "DAABCgABGcqaFgd__-gKAAIZyhbkCxZRqQgAAwAAAAIAAA",
  "prev_cursor": "DAABCgABGcqaFgeAJxEKAAIZyludfVeBzwgAAwAAAAEAAA",
  "status": "ok",
  "user": {
    "status": "active",
    "profile": "elonmusk",
    "rest_id": "44196397",
    "blue_verified": true,
    "affiliates": {
      "label": {
        "url": {
          "url": "https://twitter.com/X",
          "urlType": "DeepLink"
        },
        "badge": {
          "url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg"
        },
        "description": "X",
        "userLabelType": "BusinessLabel",
        "userLabelDisplayType": "Badge"
      }
    },
    "business_account": [],
    "avatar": "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_normal.jpg",
    "header_image": "https://pbs.twimg.com/profile_banners/44196397/1726163678",
    "desc": "The people voted for major government reform",
    "name": "Elon Musk",
    "protected": null,
    "location": "",
    "friends": 831,
    "sub_count": 205113140,
    "statuses_count": 58993,
    "media_count": 2782,
    "created_at": "Tue Jun 02 20:12:29 +0000 2009",
    "pinned_tweet_ids_str": [
      "1858318917141197107"
    ],
    "id": "44196397"
  }
}
```

## Notes

- Pagination: uses next_cursor, prev_cursor
- View counts may come as formatted strings (e.g., `"1,234,567"`)
