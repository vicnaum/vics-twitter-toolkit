# List members

**Route:** `GET /list_members.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Get the members of the list on Twitter / X

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| list_id | STRING | Yes | `1177128103228989440` |
| cursor | STRING | No | - |

## Response Schema

```typescript
// Root: ListMembersResponse
interface ListMembersResponse {
  members: ListMembersResponseMembersItem[];
  more_users: boolean;
  next_cursor: string;
  status: string;
}

interface ListMembersResponseMembersItem {
  affiliates: unknown[] | ListMembersResponseMembersItemAffiliates;  // 20/20
  blue_verified: boolean;  // 20/20
  business_account: null;  // 20/20
  created_at: string;  // 20/20
  description: string;  // 20/20
  followers_count: number;  // 20/20
  friends_count: number;  // 20/20
  location: string;  // 20/20
  media_count: number;  // 20/20
  name: string;  // 20/20
  profile_image: null;  // 20/20
  screen_name: string;  // 20/20
  statuses_count: number;  // 20/20
  user_id: string;  // 20/20
  verified: boolean;  // 20/20
  website: null | string;  // 20/20
}

interface ListMembersResponseMembersItemAffiliates {
  label: ListMembersResponseMembersItemAffiliatesLabel;
}

interface ListMembersResponseMembersItemAffiliatesLabel {
  badge: ListMembersResponseMembersItemAffiliatesLabelBadge;
  description: string;
  url: ListMembersResponseMembersItemAffiliatesLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface ListMembersResponseMembersItemAffiliatesLabelBadge {
  url: string;
}

interface ListMembersResponseMembersItemAffiliatesLabelUrl {
  url: string;
  urlType: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "members": [
    {
      "user_id": "1985065796511633408",
      "screen_name": "JDisselh",
      "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
      "profile_image": null,
      "statuses_count": 77,
      "followers_count": 101,
      "friends_count": 45,
      "media_count": 6,
      "created_at": "Sun Nov 02 19:25:54 +0000 2025",
      "location": "",
      "blue_verified": false,
      "verified": false,
      "website": "",
      "name": "Jan Disselhoff",
      "affiliates": {
        "label": {
          "url": {
            "url": "https://twitter.com/PrimeIntellect",
            "urlType": "DeepLink"
          },
          "badge": {
            "url": "https://pbs.twimg.com/profile_images/1837605403359633411/Stj4eLIH_bigger.jpg"
          },
          "description": "Prime Intellect",
          "userLabelType": "BusinessLabel",
          "userLabelDisplayType": "Badge"
        }
      },
      "business_account": null
    },
    {
      "user_id": "1985065796511633408",
      "screen_name": "JDisselh",
      "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
      "profile_image": null,
      "statuses_count": 77,
      "followers_count": 101,
      "friends_count": 45,
      "media_count": 6,
      "created_at": "Sun Nov 02 19:25:54 +0000 2025",
      "location": "",
      "blue_verified": false,
      "verified": false,
      "website": "",
      "name": "Jan Disselhoff",
      "affiliates": {
        "label": {
          "url": {
            "url": "https://twitter.com/PrimeIntellect",
            "urlType": "DeepLink"
          },
          "badge": {
            "url": "https://pbs.twimg.com/profile_images/1837605403359633411/Stj4eLIH_bigger.jpg"
          },
          "description": "Prime Intellect",
          "userLabelType": "BusinessLabel",
          "userLabelDisplayType": "Badge"
        }
      },
      "business_account": null
    }
  ],
  "next_cursor": "6108034049922207746|2019764479985713130",
  "status": "ok",
  "more_users": true
}
```

## Example: Minimal Response (required fields only)

```json
{
  "members": [
    {
      "user_id": "1985065796511633408",
      "screen_name": "JDisselh",
      "description": "Deep Learning Scientist | The ARChitects Kaggle Team | ARC-AGI 2024 Winner",
      "profile_image": null,
      "statuses_count": 77,
      "followers_count": 101,
      "friends_count": 45,
      "media_count": 6,
      "created_at": "Sun Nov 02 19:25:54 +0000 2025",
      "location": "",
      "blue_verified": false,
      "verified": false,
      "website": "",
      "name": "Jan Disselhoff",
      "affiliates": {
        "label": {
          "url": {
            "url": "https://twitter.com/PrimeIntellect",
            "urlType": "DeepLink"
          },
          "badge": {
            "url": "https://pbs.twimg.com/profile_images/1837605403359633411/Stj4eLIH_bigger.jpg"
          },
          "description": "Prime Intellect",
          "userLabelType": "BusinessLabel",
          "userLabelDisplayType": "Badge"
        }
      },
      "business_account": null
    }
  ],
  "next_cursor": "6108034049922207746|2019764479985713130",
  "status": "ok",
  "more_users": true
}
```

## Notes

- Pagination: uses next_cursor
