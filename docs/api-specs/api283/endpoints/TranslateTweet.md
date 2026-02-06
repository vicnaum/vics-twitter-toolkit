# TranslateTweet

**Route:** `GET /TranslateTweet`
**API:** `twitter283.p.rapidapi.com`
**Description:** Translate Tweet

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| tweet_id | STRING | Yes | `1768778186186195177` |
| language | STRING | Yes | `en` |

## Response Schema

```typescript
// Root: TranslateTweetResponse
interface TranslateTweetResponse {
  data: TranslateTweetResponseData;
}

interface TranslateTweetResponseData {
  tweet_results: TranslateTweetResponseDataTweetResults;
}

interface TranslateTweetResponseDataTweetResults {
  rest_id: string;
  result: Tweet;
}

interface Tweet {
  __typename: string;
  rest_id: string;
  translate_tweet: TweetTranslateTweet;
}

interface TweetTranslateTweet {
  destination_language: string;
  entities: {};
  localized_source_language: string;
  source_language: string;
  translation: string;
  translation_source: string;
  translation_state: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "data": {
    "tweet_results": {
      "rest_id": "1768778186186195177",
      "result": {
        "__typename": "Tweet",
        "rest_id": "1768778186186195177",
        "translate_tweet": {
          "destination_language": "en",
          "entities": {},
          "localized_source_language": "English",
          "source_language": "en",
          "translation": "To the stars",
          "translation_source": "Google",
          "translation_state": "Success"
        }
      }
    }
  }
}
```
