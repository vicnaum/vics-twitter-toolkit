# Trends

**Route:** `GET /trends.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Please let me know if you need other countries in the list.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| country | ENUM | Yes | - |

## Response Schema

```typescript
// Root: TrendsResponse
interface TrendsResponse {
  trends: TrendsResponseTrendsItem[];
}

interface TrendsResponseTrendsItem {
  context: string;  // 50/50
  description: null;  // 50/50
  name: string;  // 50/50
}

```

## Example: Full Response (synthesized)

```json
{
  "trends": [
    {
      "name": "#GHDúoGala5",
      "description": null,
      "context": "Trending"
    },
    {
      "name": "#GHDúoGala5",
      "description": null,
      "context": "Trending"
    }
  ]
}
```

## Example: Minimal Response (required fields only)

```json
{
  "trends": [
    {
      "name": "#GHDúoGala5",
      "description": null,
      "context": "Trending"
    }
  ]
}
```
