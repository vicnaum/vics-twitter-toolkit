# List followers

**Route:** `GET /list_followers.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Get the followers of the list on Twitter / X

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| list_id | STRING | Yes | `1177128103228989440` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: ListFollowersResponse
interface ListFollowersResponse {
  followers: ListFollowersResponseFollowersItem[];
  more_users: boolean;
  next_cursor: string;
  status: string;
}

interface ListFollowersResponseFollowersItem {
  affiliates: unknown[];  // 20/20
  blue_verified: boolean;  // 20/20
  business_account: null;  // 20/20
  created_at: string;  // 20/20
  description: string;  // 20/20
  followers_count: number;  // 20/20
  friends_count: number;  // 20/20
  location: string;  // 20/20
  media_count: number;  // 20/20
  name: string;  // 20/20
  profile_image: null;  // 20/20
  screen_name: string;  // 20/20
  statuses_count: number;  // 20/20
  user_id: string;  // 20/20
  verified: boolean;  // 20/20
  website: null | string;  // 20/20
}

```

## Example: Full Response (synthesized)

```json
{
  "followers": [
    {
      "user_id": "1518761378185682944",
      "screen_name": "K3vn_C",
      "description": "",
      "profile_image": null,
      "statuses_count": 4043,
      "followers_count": 70,
      "friends_count": 405,
      "media_count": 147,
      "created_at": "Tue Apr 26 01:18:31 +0000 2022",
      "location": "",
      "blue_verified": true,
      "verified": false,
      "website": "",
      "name": "Kevin",
      "affiliates": [],
      "business_account": null
    },
    {
      "user_id": "1518761378185682944",
      "screen_name": "K3vn_C",
      "description": "",
      "profile_image": null,
      "statuses_count": 4043,
      "followers_count": 70,
      "friends_count": 405,
      "media_count": 147,
      "created_at": "Tue Apr 26 01:18:31 +0000 2022",
      "location": "",
      "blue_verified": true,
      "verified": false,
      "website": "",
      "name": "Kevin",
      "affiliates": [],
      "business_account": null
    }
  ],
  "next_cursor": "1855575326146952547|2019764796081045482",
  "status": "ok",
  "more_users": true
}
```

## Example: Minimal Response (required fields only)

```json
{
  "followers": [
    {
      "user_id": "1518761378185682944",
      "screen_name": "K3vn_C",
      "description": "",
      "profile_image": null,
      "statuses_count": 4043,
      "followers_count": 70,
      "friends_count": 405,
      "media_count": 147,
      "created_at": "Tue Apr 26 01:18:31 +0000 2022",
      "location": "",
      "blue_verified": true,
      "verified": false,
      "website": "",
      "name": "Kevin",
      "affiliates": [],
      "business_account": null
    }
  ],
  "next_cursor": "1855575326146952547|2019764796081045482",
  "status": "ok",
  "more_users": true
}
```

## Notes

- Pagination: uses next_cursor
