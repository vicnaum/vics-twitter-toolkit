# User Followers IDs

**Route:** `GET /FollowersIds`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Followers IDs

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| stringify_ids | BOOLEAN | No | `true` |
| count | STRING | No | `500` |
| cursor | STRING | No | - |
| user_id | STRING | No | - |
| username | STRING | No | `solana` |

## Response Schema

```typescript
// Root: UserFollowersIDsResponse
interface UserFollowersIDsResponse {
  ids: number[];
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  total_count: null;
}

```

## Example: Full Response (synthesized)

```json
{
  "ids": [
    1769916930360586200,
    1769916930360586200
  ],
  "next_cursor": 1793917833732437500,
  "next_cursor_str": "1793917833732437399",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Example: Minimal Response (required fields only)

```json
{
  "ids": [
    1769916930360586200
  ],
  "next_cursor": 1793917833732437500,
  "next_cursor_str": "1793917833732437399",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Notes

- Pagination: uses next_cursor, next_cursor_str, previous_cursor, previous_cursor_str
