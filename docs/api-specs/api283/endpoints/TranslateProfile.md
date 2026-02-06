# Translate Profile

**Route:** `GET /TranslateProfile`
**API:** `twitter283.p.rapidapi.com`
**Description:** Translate Profile

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| user_id | STRING | Yes | `951329744804392960` |
| language | STRING | Yes | `de` |

## Response Schema

```typescript
// Root: TranslateProfileResponse
interface TranslateProfileResponse {
  profileTranslation: TranslateProfileResponseProfileTranslation;
  profileUserId: string;
}

interface TranslateProfileResponseProfileTranslation {
  entities: TranslateProfileResponseProfileTranslationEntities;
  language: string;
  localizedSourceLanguage: string;
  sourceLanguage: string;
  translation: string;
  translationSource: string;
}

interface TranslateProfileResponseProfileTranslationEntities {
  hashtags: unknown[];
  media: unknown[];
  symbols: unknown[];
  timestamps: unknown[];
  urls: unknown[];
  user_mentions: TranslateProfileResponseProfileTranslationEntitiesUserMentionsItem[];
}

interface TranslateProfileResponseProfileTranslationEntitiesUserMentionsItem {
  indices: number[];
  screen_name: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "profileUserId": "951329744804392960",
  "profileTranslation": {
    "translation": "Solana ist eine Blockchain, die für die Masseneinführung entwickelt wurde ◎ Schnell, zusammensetzbar, umweltfreundlich u...",
    "language": "de",
    "entities": {
      "symbols": [],
      "hashtags": [],
      "user_mentions": [
        {
          "indices": [
            154,
            154
          ],
          "screen_name": "SolanaFndn"
        }
      ],
      "urls": [],
      "media": [],
      "timestamps": []
    },
    "sourceLanguage": "en",
    "localizedSourceLanguage": "Englisch",
    "translationSource": "Google"
  }
}
```

## Example: Minimal Response (required fields only)

```json
{
  "profileUserId": "951329744804392960",
  "profileTranslation": {
    "translation": "Solana ist eine Blockchain, die für die Masseneinführung entwickelt wurde ◎ Schnell, zusammensetzbar, umweltfreundlich u...",
    "language": "de",
    "entities": {
      "symbols": [],
      "hashtags": [],
      "user_mentions": [
        {
          "indices": [
            154
          ],
          "screen_name": "SolanaFndn"
        }
      ],
      "urls": [],
      "media": [],
      "timestamps": []
    },
    "sourceLanguage": "en",
    "localizedSourceLanguage": "Englisch",
    "translationSource": "Google"
  }
}
```
