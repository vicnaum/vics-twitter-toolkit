# Username To UserId

**Route:** `GET /UsernameToUserId`
**API:** `twitter283.p.rapidapi.com`
**Description:** Username To UserId

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| username | STRING | Yes | `solana` |

## Response Schema

```typescript
// Root: UsernameToUserIdResponse
interface UsernameToUserIdResponse {
  id: number;
  id_str: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "id": 951329744804393000,
  "id_str": "951329744804392960"
}
```
