# Tweet Detail Light

**Route:** `GET /TweetDetail`
**API:** `twitter283.p.rapidapi.com`
**Description:** Tweet Detail Light

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | `1768778186186195177` |

## Response Schema

```typescript
// Root: TweetDetailLightResponse
interface TweetDetailLightResponse {
  data: TweetDetailLightResponseData;
}

interface TweetDetailLightResponseData {
  tweet_result: TweetDetailLightResponseDataTweetResult;
}

interface TweetDetailLightResponseDataTweetResult {
  result: Tweet;
}

interface Tweet {
  __typename: string;
  conversation_muted: boolean;
  core: TweetCore;
  is_translatable: boolean;
  legacy: TweetLegacy;
  quick_promote_eligibility: TweetQuickPromoteEligibility;
  rest_id: string;
  unmention_info: {};
}

interface TweetCore {
  user_result: TweetCoreUserResult;
}

interface TweetCoreUserResult {
  result: User;
}

interface User {
  __typename: string;
  affiliates_highlighted_label: {};
  business_account: {};
  has_nft_avatar: boolean;
  is_blue_verified: boolean;
  legacy: UserLegacy;
  rest_id: string;
}

interface UserLegacy {
  advertiser_account_service_levels: string[];
  advertiser_account_type: string;
  analytics_type: string;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  description: string;
  entities: UserLegacyEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  geo_enabled: boolean;
  has_custom_timelines: boolean;
  has_extended_profile: boolean;
  id_str: string;
  is_translator: boolean;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  profile_background_color: string;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  profile_link_color: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type_enum: string;
  verified: boolean;
  withheld_in_countries: unknown[];
}

interface UserLegacyEntities {
  description: UserLegacyEntitiesDescription;
}

interface UserLegacyEntitiesDescription {
  hashtags: unknown[];
  symbols: unknown[];
  urls: unknown[];
  user_mentions: unknown[];
}

interface TweetLegacy {
  bookmark_count: number;
  bookmarked: boolean;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: TweetLegacyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  user_id_str: string;
}

interface TweetLegacyEntities {
  hashtags: unknown[];
  symbols: unknown[];
  urls: unknown[];
  user_mentions: unknown[];
}

interface TweetQuickPromoteEligibility {
  eligibility: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "tweet_result": {
      "result": {
        "__typename": "Tweet",
        "rest_id": "1768956326384738775",
        "legacy": {
          "conversation_id_str": "1768956326384738775",
          "created_at": "Sat Mar 16 11:03:48 +0000 2024",
          "display_text_range": [
            0,
            0
          ],
          "entities": {
            "hashtags": [],
            "symbols": [],
            "urls": [],
            "user_mentions": []
          },
          "favorite_count": 2,
          "favorited": false,
          "full_text": "aoa \nhave a nice day",
          "is_quote_status": false,
          "lang": "en",
          "quote_count": 0,
          "reply_count": 2,
          "retweet_count": 0,
          "retweeted": false,
          "user_id_str": "1742930265436200961",
          "bookmarked": false,
          "bookmark_count": 0
        },
        "core": {
          "user_result": {
            "result": {
              "__typename": "User",
              "rest_id": "1742930265436200961",
              "has_nft_avatar": false,
              "is_blue_verified": true,
              "affiliates_highlighted_label": {},
              "legacy": {
                "can_dm": true,
                "can_media_tag": true,
                "advertiser_account_service_levels": [
                  "analytics"
                ],
                "advertiser_account_type": "promotable_user",
                "analytics_type": "disabled",
                "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                "description": "follow back 💯🔙😁",
                "entities": {
                  "description": {
                    "hashtags": [],
                    "symbols": [],
                    "urls": [],
                    "user_mentions": []
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 1516,
                "followers_count": 2350,
                "friends_count": 2822,
                "geo_enabled": false,
                "has_custom_timelines": false,
                "has_extended_profile": true,
                "id_str": "1742930265436200961",
                "is_translator": false,
                "location": "",
                "media_count": 72,
                "name": "Palwasha Gul",
                "normal_followers_count": 2350,
                "pinned_tweet_ids_str": [
                  "1763529044077707511"
                ],
                "profile_background_color": "F5F8FA",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg",
                "profile_interstitial_type": "",
                "profile_link_color": "1DA1F2",
                "protected": false,
                "screen_name": "P_alwasha2317",
                "statuses_count": 1279,
                "translator_type_enum": "None",
                "verified": false,
                "withheld_in_countries": []
              },
              "business_account": {}
            }
          }
        },
        "unmention_info": {},
        "quick_promote_eligibility": {
          "eligibility": "IneligibleNotProfessional"
        },
        "conversation_muted": false,
        "is_translatable": false
      }
    }
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "data": {
    "tweet_result": {
      "result": {
        "__typename": "Tweet",
        "rest_id": "1768956326384738775",
        "legacy": {
          "conversation_id_str": "1768956326384738775",
          "created_at": "Sat Mar 16 11:03:48 +0000 2024",
          "display_text_range": [
            0
          ],
          "entities": {
            "hashtags": [],
            "symbols": [],
            "urls": [],
            "user_mentions": []
          },
          "favorite_count": 2,
          "favorited": false,
          "full_text": "aoa \nhave a nice day",
          "is_quote_status": false,
          "lang": "en",
          "quote_count": 0,
          "reply_count": 2,
          "retweet_count": 0,
          "retweeted": false,
          "user_id_str": "1742930265436200961",
          "bookmarked": false,
          "bookmark_count": 0
        },
        "core": {
          "user_result": {
            "result": {
              "__typename": "User",
              "rest_id": "1742930265436200961",
              "has_nft_avatar": false,
              "is_blue_verified": true,
              "affiliates_highlighted_label": {},
              "legacy": {
                "can_dm": true,
                "can_media_tag": true,
                "advertiser_account_service_levels": [
                  "analytics"
                ],
                "advertiser_account_type": "promotable_user",
                "analytics_type": "disabled",
                "created_at": "Thu Jan 04 15:25:51 +0000 2024",
                "description": "follow back 💯🔙😁",
                "entities": {
                  "description": {
                    "hashtags": [],
                    "symbols": [],
                    "urls": [],
                    "user_mentions": []
                  }
                },
                "fast_followers_count": 0,
                "favourites_count": 1516,
                "followers_count": 2350,
                "friends_count": 2822,
                "geo_enabled": false,
                "has_custom_timelines": false,
                "has_extended_profile": true,
                "id_str": "1742930265436200961",
                "is_translator": false,
                "location": "",
                "media_count": 72,
                "name": "Palwasha Gul",
                "normal_followers_count": 2350,
                "pinned_tweet_ids_str": [
                  "1763529044077707511"
                ],
                "profile_background_color": "F5F8FA",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/1742930265436200961/1704382068",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1742930838021627904/AqGC1PsU_normal.jpg",
                "profile_interstitial_type": "",
                "profile_link_color": "1DA1F2",
                "protected": false,
                "screen_name": "P_alwasha2317",
                "statuses_count": 1279,
                "translator_type_enum": "None",
                "verified": false,
                "withheld_in_countries": []
              },
              "business_account": {}
            }
          }
        },
        "unmention_info": {},
        "quick_promote_eligibility": {
          "eligibility": "IneligibleNotProfessional"
        },
        "conversation_muted": false,
        "is_translatable": false
      }
    }
  }
}
```
