# AutoComplete

**Route:** `GET /AutoComplete`
**API:** `twitter283.p.rapidapi.com`
**Description:** Auto Complete

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| q | STRING | Yes | `doge` |

## Response Schema

```typescript
// Root: AutoCompleteResponse
interface AutoCompleteResponse {
  completed_in: number;
  events: unknown[];
  hashtags: unknown[];
  lists: unknown[];
  num_results: number;
  oneclick: unknown[];
  ordered_sections: unknown[];
  query: string;
  topics: AutoCompleteResponseTopicsItem[];
  users: AutoCompleteResponseUsersItem[];
}

interface AutoCompleteResponseTopicsItem {
  inline: boolean;  // 3/3
  rounded_score: number;  // 3/3
  tokens: unknown[];  // 3/3
  topic: string;  // 3/3
  result_context?: AutoCompleteResponseTopicsItemResultContext;  // 1/3
}

interface AutoCompleteResponseTopicsItemResultContext {
  display_string: string;
  types: AutoCompleteResponseTopicsItemResultContextTypesItem[];
}

interface AutoCompleteResponseTopicsItemResultContextTypesItem {
  type: string;
}

interface AutoCompleteResponseUsersItem {
  badges: AutoCompleteResponseUsersItemBadgesItem[];  // 9/9
  can_media_tag: boolean;  // 9/9
  connecting_user_count: number;  // 9/9
  connecting_user_ids: unknown[];  // 9/9
  ext_is_blue_verified: boolean;  // 9/9
  id: number;  // 9/9
  id_str: string;  // 9/9
  inline: boolean;  // 9/9
  is_blocked: boolean;  // 9/9
  is_dm_able: boolean;  // 9/9
  is_protected: boolean;  // 9/9
  is_secret_dm_able: boolean;  // 9/9
  location: string;  // 9/9
  name: string;  // 9/9
  profile_image_url: string;  // 9/9
  profile_image_url_https: string;  // 9/9
  rounded_score: number;  // 9/9
  screen_name: string;  // 9/9
  social_context: AutoCompleteResponseUsersItemSocialContext;  // 9/9
  social_proof: number;  // 9/9
  social_proofs_ordered: unknown[];  // 9/9
  tokens: unknown[];  // 9/9
  verified: boolean;  // 9/9
  ext_verified_type?: string;  // 1/9
}

interface AutoCompleteResponseUsersItemBadgesItem {
  badge_type?: string;
  badge_url?: string;
  description?: string;
}

interface AutoCompleteResponseUsersItemSocialContext {
  followed_by?: boolean;
  following?: boolean;
}

```

## Example: Full Response (synthesized)

```json
{
  "num_results": 12,
  "users": [
    {
      "id": 44196397,
      "id_str": "44196397",
      "verified": false,
      "ext_is_blue_verified": true,
      "badges": [
        {
          "badge_url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg",
          "badge_type": "BusinessLabel",
          "description": "X"
        },
        {
          "badge_url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg",
          "badge_type": "BusinessLabel",
          "description": "X"
        }
      ],
      "is_dm_able": false,
      "is_secret_dm_able": false,
      "is_blocked": false,
      "can_media_tag": false,
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "location": "",
      "is_protected": false,
      "rounded_score": 0,
      "social_proof": 0,
      "connecting_user_count": 0,
      "connecting_user_ids": [],
      "social_proofs_ordered": [],
      "social_context": {
        "following": false,
        "followed_by": false
      },
      "tokens": [],
      "inline": false,
      "ext_verified_type": "Business"
    },
    {
      "id": 44196397,
      "id_str": "44196397",
      "verified": false,
      "ext_is_blue_verified": true,
      "badges": [
        {
          "badge_url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg",
          "badge_type": "BusinessLabel",
          "description": "X"
        },
        {
          "badge_url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg",
          "badge_type": "BusinessLabel",
          "description": "X"
        }
      ],
      "is_dm_able": false,
      "is_secret_dm_able": false,
      "is_blocked": false,
      "can_media_tag": false,
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "location": "",
      "is_protected": false,
      "rounded_score": 0,
      "social_proof": 0,
      "connecting_user_count": 0,
      "connecting_user_ids": [],
      "social_proofs_ordered": [],
      "social_context": {
        "following": false,
        "followed_by": false
      },
      "tokens": [],
      "inline": false,
      "ext_verified_type": "Business"
    }
  ],
  "topics": [
    {
      "topic": "elon musk",
      "rounded_score": 0,
      "tokens": [],
      "inline": false,
      "result_context": {
        "display_string": "Trending",
        "types": [
          {
            "type": "trending"
          }
        ]
      }
    },
    {
      "topic": "elon musk",
      "rounded_score": 0,
      "tokens": [],
      "inline": false,
      "result_context": {
        "display_string": "Trending",
        "types": [
          {
            "type": "trending"
          }
        ]
      }
    }
  ],
  "events": [],
  "lists": [],
  "ordered_sections": [],
  "oneclick": [],
  "hashtags": [],
  "completed_in": 0,
  "query": "elon"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "num_results": 12,
  "users": [
    {
      "id": 44196397,
      "id_str": "44196397",
      "verified": false,
      "ext_is_blue_verified": true,
      "badges": [
        {}
      ],
      "is_dm_able": false,
      "is_secret_dm_able": false,
      "is_blocked": false,
      "can_media_tag": false,
      "name": "Elon Musk",
      "screen_name": "elonmusk",
      "profile_image_url": "http://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
      "location": "",
      "is_protected": false,
      "rounded_score": 0,
      "social_proof": 0,
      "connecting_user_count": 0,
      "connecting_user_ids": [],
      "social_proofs_ordered": [],
      "social_context": {},
      "tokens": [],
      "inline": false
    }
  ],
  "topics": [
    {
      "topic": "elon musk",
      "rounded_score": 0,
      "tokens": [],
      "inline": false
    }
  ],
  "events": [],
  "lists": [],
  "ordered_sections": [],
  "oneclick": [],
  "hashtags": [],
  "completed_in": 0,
  "query": "elon"
}
```
