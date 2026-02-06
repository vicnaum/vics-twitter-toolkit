# User live

**Route:** `GET /broadcast.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Checks if user is broadcasting something right now or not.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| rest_id | STRING | Yes | `44196397` |

## Response Schema

```typescript
// Root: UserLiveResponse
interface UserLiveResponse {
  live: boolean;
}

```

## Example: Full Response (synthesized)

```json
{
  "live": false
}
```
