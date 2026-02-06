# User Following IDs

**Route:** `GET /FollowingIds`
**API:** `twitter283.p.rapidapi.com`
**Description:** User Following IDs

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| stringify_ids | BOOLEAN | No | `true` |
| user_id | STRING | No | - |
| cursor | STRING | No | - |
| username | STRING | No | `solana` |
| count | STRING | No | `500` |

## Response Schema

```typescript
// Root: UserFollowingIDsResponse
interface UserFollowingIDsResponse {
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
    1408454783141396500,
    1408454783141396500
  ],
  "next_cursor": 1793915679204177400,
  "next_cursor_str": "1793915679204177390",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Example: Minimal Response (required fields only)

```json
{
  "ids": [
    1408454783141396500
  ],
  "next_cursor": 1793915679204177400,
  "next_cursor_str": "1793915679204177390",
  "previous_cursor": 0,
  "previous_cursor_str": "0",
  "total_count": null
}
```

## Notes

- Pagination: uses next_cursor, next_cursor_str, previous_cursor, previous_cursor_str
