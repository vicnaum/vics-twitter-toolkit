# Profiles By RestIds

**Route:** `GET /screennames.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Returns an array of users by their rest_ids.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| rest_ids | STRING | Yes | `44196397,34743251` |

## Response Schema

```typescript
// Root: ProfilesByRestIdsResponse
interface ProfilesByRestIdsResponse {
  users: ProfilesByRestIdsResponseUsersItem[];
}

interface ProfilesByRestIdsResponseUsersItem {
  affiliates: ProfilesByRestIdsResponseUsersItemAffiliates;
  avatar: string;
  blue_verified: boolean;
  business_account: null;
  can_dm: boolean;
  created_at: string;
  desc: string;
  favourites: number;
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

interface ProfilesByRestIdsResponseUsersItemAffiliates {
  label: ProfilesByRestIdsResponseUsersItemAffiliatesLabel;
}

interface ProfilesByRestIdsResponseUsersItemAffiliatesLabel {
  badge: ProfilesByRestIdsResponseUsersItemAffiliatesLabelBadge;
  description: string;
  url: ProfilesByRestIdsResponseUsersItemAffiliatesLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface ProfilesByRestIdsResponseUsersItemAffiliatesLabelBadge {
  url: string;
}

interface ProfilesByRestIdsResponseUsersItemAffiliatesLabelUrl {
  url: string;
  urlType: string;
}

```

## Example: Full Response (synthesized)

```json
{
  "users": [
    {
      "status": "active",
      "profile": "elonmusk",
      "rest_id": "44196397",
      "blue_verified": true,
      "affiliates": {
        "label": {
          "url": {
            "url": "https://twitter.com/X",
            "urlType": "DeepLink"
          },
          "badge": {
            "url": "https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg"
          },
          "description": "X",
          "userLabelType": "BusinessLabel",
          "userLabelDisplayType": "Badge"
        }
      },
      "business_account": null,
      "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
      "header_image": "https://pbs.twimg.com/profile_banners/44196397/1739948056",
      "desc": "",
      "can_dm": false,
      "name": "Elon Musk",
      "protected": false,
      "location": "",
      "friends": 1283,
      "sub_count": 234041605,
      "favourites": 206560,
      "statuses_count": 96267,
      "media_count": 4346,
      "pinned_tweet_ids_str": [
        "2018784828129243614"
      ],
      "created_at": "Tue Jun 02 20:12:29 +0000 2009",
      "id": "44196397"
    }
  ]
}
```
