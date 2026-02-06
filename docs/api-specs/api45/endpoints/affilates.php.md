# Affilates

**Route:** `GET /affilates.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Give you the list of affilates for the corporate account.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| screenname | STRING | Yes | `x` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: AffilatesResponse
interface AffilatesResponse {
  followers: unknown[];
  more_users: boolean;
  next_cursor: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "followers": [],
  "more_users": true,
  "next_cursor": ""
}
```

## Notes

- Pagination: uses next_cursor
