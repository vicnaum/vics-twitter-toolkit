# Jobs Search

**Route:** `GET /jobs.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Search for the jobs on x.com/jobs

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| query | STRING | Yes | `developer` |

## Response Schema

```typescript
// Root: JobsSearchResponse
interface JobsSearchResponse {
  jobs: unknown[];
}

```

## Example: Full Response (synthesized)

```json
{
  "jobs": []
}
```
