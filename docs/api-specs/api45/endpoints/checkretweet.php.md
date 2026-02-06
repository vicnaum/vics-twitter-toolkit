# Check Retweet

**Route:** `GET /checkretweet.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** This endpoint get latest tweets of the user and checks if there is a retweet of the needed tweet.  WARNING: might not be suitable for old retweets.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | - |
| screenname | STRING | Yes | - |

## Response Schema

```typescript
// Root: CheckRetweetResponse
interface CheckRetweetResponse {
  is_retweeted: boolean;
  status: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "is_retweeted": false,
  "status": "ok"
}
```
