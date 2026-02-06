# List Search

**Route:** `GET /ListSearch`
**API:** `twitter283.p.rapidapi.com`
**Description:** GET ListSearch

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| cursor | STRING | No | - |
| q | STRING | Yes | `bitcoin` |

## Response Schema

```typescript
// Root: ListSearchResponse
interface ListSearchResponse {
  completed_in: number;
  events: unknown[];
  hashtags: unknown[];
  lists: ListSearchResponseListsItem[];
  num_results: number;
  oneclick: unknown[];
  ordered_sections: unknown[];
  query: string;
  topics: unknown[];
  users: unknown[];
}

interface ListSearchResponseListsItem {
  facepile_urls: ListSearchResponseListsItemFacepileUrlsItem[];  // 14/14
  object_id: string;  // 14/14
  primary_image: ListSearchResponseListsItemPrimaryImage;  // 14/14
  result_contexts: ListSearchResponseListsItemResultContextsItem[];  // 14/14
  topic: string;  // 14/14
  url: string;  // 14/14
  supporting_text?: string;  // 8/14
}

interface ListSearchResponseListsItemFacepileUrlsItem {
  profile_image_url_https?: string;  // 42/3
}

interface ListSearchResponseListsItemPrimaryImage {
  original_info?: ListSearchResponseListsItemPrimaryImageOriginalInfo;
}

interface ListSearchResponseListsItemPrimaryImageOriginalInfo {
  focus_rect?: ListSearchResponseListsItemPrimaryImageOriginalInfoFocusRect;
  height?: number;
  url?: string;
  width?: number;
}

interface ListSearchResponseListsItemPrimaryImageOriginalInfoFocusRect {
  h?: number;
  w?: number;
  x?: number;
  y?: number;
}

interface ListSearchResponseListsItemResultContextsItem {
  result_context?: ListSearchResponseListsItemResultContextsItemResultContext;  // 28/2
}

interface ListSearchResponseListsItemResultContextsItemResultContext {
  display_string?: string;
  types?: ListSearchResponseListsItemResultContextsItemResultContextTypesItem[];
}

interface ListSearchResponseListsItemResultContextsItemResultContextTypesItem {
  type?: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "num_results": 14,
  "users": [],
  "topics": [],
  "events": [],
  "lists": [
    {
      "object_id": "1446054017499480064",
      "topic": "Bitcoin",
      "url": "twitter.com/i/lists/1446054017499480064",
      "primary_image": {
        "original_info": {
          "url": "https://pbs.twimg.com/media/EXZ22fjU8AAau2G.png",
          "height": 375,
          "width": 1125,
          "focus_rect": {
            "h": 1,
            "w": 1,
            "x": 200,
            "y": 200
          }
        }
      },
      "facepile_urls": [
        {
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1714603152459055104/P89TiypZ_mini.jpg"
        },
        {
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1714603152459055104/P89TiypZ_mini.jpg"
        }
      ],
      "result_contexts": [
        {
          "result_context": {
            "display_string": "4.2K followers including @thomaspower",
            "types": [
              {
                "type": "followers_context"
              },
              {
                "type": "followers_context"
              }
            ]
          }
        },
        {
          "result_context": {
            "display_string": "4.2K followers including @thomaspower",
            "types": [
              {
                "type": "followers_context"
              },
              {
                "type": "followers_context"
              }
            ]
          }
        }
      ],
      "supporting_text": "Contenido bitcoin en español"
    },
    {
      "object_id": "1446054017499480064",
      "topic": "Bitcoin",
      "url": "twitter.com/i/lists/1446054017499480064",
      "primary_image": {
        "original_info": {
          "url": "https://pbs.twimg.com/media/EXZ22fjU8AAau2G.png",
          "height": 375,
          "width": 1125,
          "focus_rect": {
            "h": 1,
            "w": 1,
            "x": 200,
            "y": 200
          }
        }
      },
      "facepile_urls": [
        {
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1714603152459055104/P89TiypZ_mini.jpg"
        },
        {
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1714603152459055104/P89TiypZ_mini.jpg"
        }
      ],
      "result_contexts": [
        {
          "result_context": {
            "display_string": "4.2K followers including @thomaspower",
            "types": [
              {
                "type": "followers_context"
              },
              {
                "type": "followers_context"
              }
            ]
          }
        },
        {
          "result_context": {
            "display_string": "4.2K followers including @thomaspower",
            "types": [
              {
                "type": "followers_context"
              },
              {
                "type": "followers_context"
              }
            ]
          }
        }
      ],
      "supporting_text": "Contenido bitcoin en español"
    }
  ],
  "ordered_sections": [],
  "oneclick": [],
  "hashtags": [],
  "completed_in": 0,
  "query": "bitcoin"
}
```

## Example: Minimal Response (required fields only)

```json
{
  "num_results": 14,
  "users": [],
  "topics": [],
  "events": [],
  "lists": [
    {
      "object_id": "1446054017499480064",
      "topic": "Bitcoin",
      "url": "twitter.com/i/lists/1446054017499480064",
      "primary_image": {},
      "facepile_urls": [
        {}
      ],
      "result_contexts": [
        {}
      ]
    }
  ],
  "ordered_sections": [],
  "oneclick": [],
  "hashtags": [],
  "completed_in": 0,
  "query": "bitcoin"
}
```

## Notes

- Pagination: uses cursor parameter
