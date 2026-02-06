# Followers

**Route:** `GET /followers.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Get latest user's followers list

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| screenname | STRING | Yes | `elonmusk` |
| blue_verified | ENUM | No | - |

## Response Schema

```typescript
// Root: FollowersResponse
interface FollowersResponse {
  followers: FollowersResponseFollowersItem[];
  followers_count: number;
  next_cursor: string;
  status: string;
}

interface FollowersResponseFollowersItem {
  description: string;  // 69/69
  followers_count: number;  // 69/69
  friends_count: number;  // 69/69
  media_count: number;  // 69/69
  name: string;  // 69/69
  profile_image: string;  // 69/69
  screen_name: string;  // 69/69
  statuses_count: number;  // 69/69
  user_id: string;  // 69/69
}

```

## Example: Full Response (synthesized)

```json
{
  "followers_count": 156995366,
  "followers": [
    {
      "user_id": "95092020",
      "screen_name": "jordanbpeterson",
      "description": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast | Listen to the podcast here:",
      "profile_image": "https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg",
      "statuses_count": 44232,
      "followers_count": 4677703,
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
      "followers_count": 4677703,
      "friends_count": 1429,
      "media_count": 6720,
      "name": "Dr Jordan B Peterson"
    }
  ],
  "next_cursor": "1777282984642729008|1703366347972411321",
  "status": "ok"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "followers_count": 156995366,
  "followers": [
    {
      "user_id": "95092020",
      "screen_name": "jordanbpeterson",
      "description": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast | Listen to the podcast here:",
      "profile_image": "https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg",
      "statuses_count": 44232,
      "followers_count": 4677703,
      "friends_count": 1429,
      "media_count": 6720,
      "name": "Dr Jordan B Peterson"
    }
  ],
  "next_cursor": "1777282984642729008|1703366347972411321",
  "status": "ok"
}
```

## Notes

- Pagination: uses next_cursor
