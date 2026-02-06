# User info

**Route:** `GET /screenname.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Using this method you can get information about user by the screenname.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| rest_id | STRING | No | `44196397` |
| screenname | STRING | Yes | `elonmusk` |

## Response Schema

```typescript
// Root: UserInfoResponse
interface UserInfoResponse {
  affiliates: UserInfoResponseAffiliates;
  avatar: string;
  blue_verified: null;
  business_account: null;
  created_at: string;
  desc: string;
  friends: number;
  header_image: string;
  id: string;
  location: string;
  media_count: number;
  name: string;
  pinned_tweet_ids_str: string[];
  profile: string;
  protected: boolean;
  rest_id: string;
  status: string;
  statuses_count: number;
  sub_count: number;
}

interface UserInfoResponseAffiliates {
  label: UserInfoResponseAffiliatesLabel;
}

interface UserInfoResponseAffiliatesLabel {
  badge: UserInfoResponseAffiliatesLabelBadge;
  description: string;
  url: UserInfoResponseAffiliatesLabelUrl;
  userLabelType: string;
}

interface UserInfoResponseAffiliatesLabelBadge {
  url: string;
}

interface UserInfoResponseAffiliatesLabelUrl {
  url: string;
  urlType: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "status": "active",
  "profile": "elonmusk",
  "rest_id": "44196397",
  "blue_verified": null,
  "affiliates": {
    "label": {
      "url": {
        "urlType": "DeepLink",
        "url": "https://twitter.com/X"
      },
      "badge": {
        "url": "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg"
      },
      "description": "X",
      "userLabelType": "BusinessLabel"
    }
  },
  "business_account": null,
  "avatar": "https://pbs.twimg.com/profile_images/1874558173962481664/8HSTqIlD_normal.jpg",
  "header_image": "https://pbs.twimg.com/profile_banners/44196397/1726163678",
  "desc": "",
  "name": "Elon Musk",
  "protected": false,
  "location": "",
  "friends": 930,
  "sub_count": 211713820,
  "statuses_count": 66120,
  "media_count": 3065,
  "pinned_tweet_ids_str": [
    "1877402081340043512"
  ],
  "created_at": "Tue Jun 02 20:12:29 +0000 2009",
  "id": "44196397"
}
```
