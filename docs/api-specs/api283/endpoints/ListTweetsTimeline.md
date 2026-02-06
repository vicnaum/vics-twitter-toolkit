# List Tweets

**Route:** `GET /ListTweetsTimeline`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET ListTweetsTimeline

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| list_id | STRING | Yes | `1870100616174870703` |

## Response Schema

```typescript
// Root: ListTweetsResponse
interface ListTweetsResponse {
  data: ListTweetsResponseData;
}

interface ListTweetsResponseData {
  list_by_rest_id: ListTweetsResponseDataListByRestId;
}

interface ListTweetsResponseDataListByRestId {
  rest_id: string;
  tweets_timeline: ListTweetsResponseDataListByRestIdTweetsTimeline;
}

interface ListTweetsResponseDataListByRestIdTweetsTimeline {
  id: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "list_by_rest_id": {
      "rest_id": "1870100616174870703",
      "tweets_timeline": {
        "id": "VGltZWxpbmU6CgAhGfPumilXoK8A"
      }
    }
  }
}
```

## Notes

- Pagination: uses cursor parameter
