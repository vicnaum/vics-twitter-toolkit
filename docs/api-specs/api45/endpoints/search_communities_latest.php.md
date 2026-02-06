# Communities Posts Search Latest

**Route:** `GET /search_communities_latest.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Search for the Latest posts in communities

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| query | STRING | Yes | `superman` |

## Response Schema

```typescript
// Root: CommunitiesPostsSearchLatestResponse
interface CommunitiesPostsSearchLatestResponse {
  next_cursor: null;
  timeline: unknown[];
}

```

## Example: Full Response (synthesized)

```json
{
  "timeline": [],
  "next_cursor": null
}
```

## Notes

- Pagination: uses next_cursor
