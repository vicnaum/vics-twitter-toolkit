# Communities Search

**Route:** `GET /search_communities.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Search for the communities on the X

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| query | STRING | Yes | `superman` |

## Response Schema

```typescript
// Root: CommunitiesSearchResponse
interface CommunitiesSearchResponse {
  communities: CommunitiesSearchResponseCommunitiesItem[];
  next_cursor: string;
}

interface CommunitiesSearchResponseCommunitiesItem {
  community_id: string;  // 8/8
  custom_banner: string;  // 8/8
  default_banner: string;  // 8/8
  is_nsfw: boolean;  // 8/8
  member_count: number;  // 8/8
  name: string;  // 8/8
  primary_topic: null | string;  // 8/8
  user_id: string;  // 8/8
}

```

## Example: Full Response (synthesized)

```json
{
  "communities": [
    {
      "community_id": "1997149926107619388",
      "member_count": 221,
      "name": "Superman",
      "primary_topic": "",
      "is_nsfw": false,
      "custom_banner": "https://pbs.twimg.com/community_banner_img/1997155064108982273/k0QKVcxM?format=jpg&name=orig",
      "default_banner": "https://pbs.twimg.com/media/FECTH-kUUAQMe8W.jpg",
      "user_id": ""
    },
    {
      "community_id": "1997149926107619388",
      "member_count": 221,
      "name": "Superman",
      "primary_topic": "",
      "is_nsfw": false,
      "custom_banner": "https://pbs.twimg.com/community_banner_img/1997155064108982273/k0QKVcxM?format=jpg&name=orig",
      "default_banner": "https://pbs.twimg.com/media/FECTH-kUUAQMe8W.jpg",
      "user_id": ""
    }
  ],
  "next_cursor": "WzAuMzAxMDMsMTk0MTcxMTY3NDU3MjIyNjk2Ml0="
}
```

## Example: Minimal Response (required fields only)

```json
{
  "communities": [
    {
      "community_id": "1997149926107619388",
      "member_count": 221,
      "name": "Superman",
      "primary_topic": "",
      "is_nsfw": false,
      "custom_banner": "https://pbs.twimg.com/community_banner_img/1997155064108982273/k0QKVcxM?format=jpg&name=orig",
      "default_banner": "https://pbs.twimg.com/media/FECTH-kUUAQMe8W.jpg",
      "user_id": ""
    }
  ],
  "next_cursor": "WzAuMzAxMDMsMTk0MTcxMTY3NDU3MjIyNjk2Ml0="
}
```

## Notes

- Pagination: uses next_cursor
