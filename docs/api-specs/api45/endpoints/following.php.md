# Following

**Route:** `GET /following.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Get the list of accounts user is following.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| rest_id | STRING | No | - |
| cursor | STRING | No | - |
| screenname | STRING | Yes | `elonmusk` |

## Response Schema

```typescript
// Root: FollowingResponse
interface FollowingResponse {
  following: FollowingResponseFollowingItem[];
  next_cursor: string;
}

interface FollowingResponseFollowingItem {
  description: string;  // 68/68
  followers_count: number;  // 68/68
  friends_count: number;  // 68/68
  media_count: number;  // 68/68
  name: string;  // 68/68
  profile_image: string;  // 68/68
  screen_name: string;  // 68/68
  statuses_count: number;  // 68/68
  user_id: string;  // 68/68
}

```

## Example: Full Response (synthesized)

```json
{
  "following": [
    {
      "user_id": "95092020",
      "screen_name": "jordanbpeterson",
      "description": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast | Listen to the podcast here:",
      "profile_image": "https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg",
      "statuses_count": 44232,
      "followers_count": 4677701,
      "friends_count": 1429,
      "media_count": 6720,
      "name": "Dr Jordan B Peterson"
    },
    {
      "user_id": "95092020",
      "screen_name": "jordanbpeterson",
      "description": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast | Listen to the podcast here:",
      "profile_image": "https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg",
      "statuses_count": 44232,
      "followers_count": 4677701,
      "friends_count": 1429,
      "media_count": 6720,
      "name": "Dr Jordan B Peterson"
    }
  ],
  "next_cursor": "1771998670410248946|1703366189805207482"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "following": [
    {
      "user_id": "95092020",
      "screen_name": "jordanbpeterson",
      "description": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast | Listen to the podcast here:",
      "profile_image": "https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg",
      "statuses_count": 44232,
      "followers_count": 4677701,
      "friends_count": 1429,
      "media_count": 6720,
      "name": "Dr Jordan B Peterson"
    }
  ],
  "next_cursor": "1771998670410248946|1703366189805207482"
}
```

## Notes

- Pagination: uses next_cursor
