# Trends

**Route:** `GET /Trends`
**API:** `twitter283.p.rapidapi.com`
**Description:** Trends

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| woeid | STRING | Yes | `1` |
| count | STRING | No | - |

## Response Schema

```typescript
// Root: TrendsResponse
interface TrendsResponse {
  id: number;
  metadata: TrendsResponseMetadata;
  modules: TrendsResponseModulesItem[];
}

interface TrendsResponseMetadata {
  context_mode: string;
  refresh_interval_millis: number;
  timestamp: number;
  woeid: TrendsResponseMetadataWoeid;
}

interface TrendsResponseMetadataWoeid {
  id: number;
  name: string;
}

interface TrendsResponseModulesItem {
  trend: TrendsResponseModulesItemTrend;  // 20/20
}

interface TrendsResponseModulesItemTrend {
  meta_description?: string;
  name?: string;
  rank?: number;
  target?: TrendsResponseModulesItemTrendTarget;
}

interface TrendsResponseModulesItemTrendTarget {
  query?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "metadata": {
    "timestamp": 1710810568313,
    "refresh_interval_millis": 300000,
    "woeid": {
      "name": "Worldwide",
      "id": 1
    },
    "context_mode": "full"
  },
  "modules": [
    {
      "trend": {
        "name": "#WWERaw",
        "target": {
          "query": "#WWERaw"
        },
        "rank": 1,
        "meta_description": "32.1K posts"
      }
    },
    {
      "trend": {
        "name": "#WWERaw",
        "target": {
          "query": "#WWERaw"
        },
        "rank": 1,
        "meta_description": "32.1K posts"
      }
    }
  ],
  "id": -8472744074351376000
}
```

## Example: Minimal Response (required fields only)

```json
{
  "metadata": {
    "timestamp": 1710810568313,
    "refresh_interval_millis": 300000,
    "woeid": {
      "name": "Worldwide",
      "id": 1
    },
    "context_mode": "full"
  },
  "modules": [
    {
      "trend": {}
    }
  ],
  "id": -8472744074351376000
}
```
