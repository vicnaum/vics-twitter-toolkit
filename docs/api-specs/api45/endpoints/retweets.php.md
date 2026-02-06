# Retweets

**Route:** `GET /retweets.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Get the list of of users who retweeted the tweet.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| id | STRING | Yes | `1700199139470942473` |

## Response Schema

```typescript
// Root: RetweetsResponse
interface RetweetsResponse {
  next_cursor: string;
  retweets: RetweetsResponseRetweetsItem[];
}

interface RetweetsResponseRetweetsItem {
  description: string | null;  // 20/20
  followers_count: number | null;  // 20/20
  friends_count: number | null;  // 20/20
  media_count: number | null;  // 20/20
  name: string | null;  // 20/20
  profile_image: string | null;  // 20/20
  screen_name: string | null;  // 20/20
  statuses_count: number | null;  // 20/20
  user_id: string | null;  // 20/20
}

```

## Example: Full Response (synthesized)

```json
{
  "retweets": [
    {
      "user_id": "859966742532997120",
      "screen_name": "nobu7121",
      "description": "",
      "profile_image": "https://pbs.twimg.com/profile_images/1542088112427667462/-B3T9H41_normal.jpg",
      "statuses_count": 11667,
      "followers_count": 466,
      "friends_count": 1576,
      "media_count": 7,
      "name": "nobu712"
    },
    {
      "user_id": "859966742532997120",
      "screen_name": "nobu7121",
      "description": "",
      "profile_image": "https://pbs.twimg.com/profile_images/1542088112427667462/-B3T9H41_normal.jpg",
      "statuses_count": 11667,
      "followers_count": 466,
      "friends_count": 1576,
      "media_count": 7,
      "name": "nobu712"
    }
  ],
  "next_cursor": "HBagp5O9uuuNqjEAAA=="
}
```

## Example: Minimal Response (required fields only)

```json
{
  "retweets": [
    {
      "user_id": "859966742532997120",
      "screen_name": "nobu7121",
      "description": "",
      "profile_image": "https://pbs.twimg.com/profile_images/1542088112427667462/-B3T9H41_normal.jpg",
      "statuses_count": 11667,
      "followers_count": 466,
      "friends_count": 1576,
      "media_count": 7,
      "name": "nobu712"
    }
  ],
  "next_cursor": "HBagp5O9uuuNqjEAAA=="
}
```

## Notes

- Pagination: uses next_cursor
