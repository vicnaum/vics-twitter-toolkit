# About profile

**Route:** `GET /about.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Returns the information about the profile's registration and usage

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| screenname | STRING | Yes | `elonmusk` |

## Response Schema

```typescript
// Root: AboutProfileResponse
interface AboutProfileResponse {
  about: AboutProfileResponseAbout;
  affiliates: AboutProfileResponseAffiliates;
  avatar: string;
  blue_verified: boolean;
  business_account: null;
  id: string;
  name: string;
  profile: string;
  protected: boolean;
  rest_id: string;
  status: string;
  verified_since: string;
}

interface AboutProfileResponseAbout {
  account_based_in: string;
  affiliate_username: string;
  learn_more_url: string;
  location_accurate: boolean;
  source: string;
  username_changes: AboutProfileResponseAboutUsernameChanges;
}

interface AboutProfileResponseAboutUsernameChanges {
  count: string;
}

interface AboutProfileResponseAffiliates {
  label: AboutProfileResponseAffiliatesLabel;
}

interface AboutProfileResponseAffiliatesLabel {
  badge: AboutProfileResponseAffiliatesLabelBadge;
  description: string;
  url: AboutProfileResponseAffiliatesLabelUrl;
  userLabelDisplayType: string;
  userLabelType: string;
}

interface AboutProfileResponseAffiliatesLabelBadge {
  url: string;
}

interface AboutProfileResponseAffiliatesLabelUrl {
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
  "blue_verified": true,
  "affiliates": {
    "label": {
      "badge": {
        "url": "https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg"
      },
      "description": "X",
      "url": {
        "url": "https://twitter.com/X",
        "urlType": "DeepLink"
      },
      "userLabelDisplayType": "Badge",
      "userLabelType": "BusinessLabel"
    }
  },
  "business_account": null,
  "verified_since": "-156836000000000",
  "avatar": "https://pbs.twimg.com/profile_images/2008546467615580160/57KcqsTA_normal.jpg",
  "name": "Elon Musk",
  "protected": false,
  "about": {
    "account_based_in": "United States",
    "location_accurate": false,
    "learn_more_url": "https://help.twitter.com/managing-your-account/about-twitter-verified-accounts",
    "affiliate_username": "X",
    "source": "United States App Store",
    "username_changes": {
      "count": "0"
    }
  },
  "id": "44196397"
}
```
