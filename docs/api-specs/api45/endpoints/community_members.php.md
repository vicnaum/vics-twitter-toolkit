# Community Members

**Route:** `GET /community_members.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Gets the list of community members.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| community_id | STRING | Yes | `1506779564160258059` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: CommunityMembersResponse
interface CommunityMembersResponse {
  members: CommunityMembersResponseMembersItem[];
  next_cursor: string;
  status: string;
}

interface CommunityMembersResponseMembersItem {
  blue_verified: boolean;  // 20/20
  name: string;  // 20/20
  profile_image: string;  // 20/20
  screen_name: string;  // 20/20
  user_id: string;  // 20/20
}

```

## Example: Full Response (synthesized)

```json
{
  "members": [
    {
      "user_id": "641633",
      "screen_name": "marckohlbrugge",
      "profile_image": "https://pbs.twimg.com/profile_images/1857124042433572864/iMivVaYP_normal.jpg",
      "blue_verified": true,
      "name": "Marc Köhlbrugge"
    },
    {
      "user_id": "641633",
      "screen_name": "marckohlbrugge",
      "profile_image": "https://pbs.twimg.com/profile_images/1857124042433572864/iMivVaYP_normal.jpg",
      "blue_verified": true,
      "name": "Marc Köhlbrugge"
    }
  ],
  "next_cursor": "CycRAAAAAAwABAwKmwzBVQo+vQAAAABEb5BTCm07AAABfwdrA/gADJorCj69f/////////8KbTt//////////wAIP8AAAAACAAAA",
  "status": "ok"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "members": [
    {
      "user_id": "641633",
      "screen_name": "marckohlbrugge",
      "profile_image": "https://pbs.twimg.com/profile_images/1857124042433572864/iMivVaYP_normal.jpg",
      "blue_verified": true,
      "name": "Marc Köhlbrugge"
    }
  ],
  "next_cursor": "CycRAAAAAAwABAwKmwzBVQo+vQAAAABEb5BTCm07AAABfwdrA/gADJorCj69f/////////8KbTt//////////wAIP8AAAAACAAAA",
  "status": "ok"
}
```

## Notes

- Pagination: uses next_cursor
