# Spaces info

**Route:** `GET /spaces.php`
**API:** `twitter-api45.p.rapidapi.com`
**Description:** Give you the basic information about the spaces.

## Parameters

| Name | Type | Required | Example |
|------|------|----------|---------|
| id | STRING | Yes | `1yoJMwpbmaXKQ` |

## Response Schema

```typescript
// Root: SpacesInfoResponse
interface SpacesInfoResponse {
  chunks_base_url: string;
  community: boolean;
  content_type: string;
  creator: SpacesInfoResponseCreator;
  ended: string;
  id: string;
  is_space_available_for_replay: boolean;
  locked: boolean;
  media_key: string;
  participants: SpacesInfoResponseParticipants;
  playlist: string;
  replay_available: boolean;
  replay_start_time: number;
  sharings: unknown[];
  started: number;
  state: string;
  total_live_listeners: number;
  total_replay_watched: number;
}

interface SpacesInfoResponseCreator {
  avatar: null;
  display_name: string;
  followers_count: number;
  is_blue_verified: boolean;
  pinned_tweet_ids_str: string[];
  rest_id: string;
  screenname: string;
}

interface SpacesInfoResponseParticipants {
  admins: SpacesInfoResponseParticipantsAdminsItem[];
  speakers: SpacesInfoResponseParticipantsSpeakersItem[];
}

interface SpacesInfoResponseParticipantsAdminsItem {
  avatar: string;
  display_name: string;
  is_blue_verified: boolean;
  is_verified: boolean;
  periscope_user_id: string;
  rest_id: string;
  screenname: string;
}

interface SpacesInfoResponseParticipantsSpeakersItem {
  avatar: string;  // 47/47
  display_name: string;  // 47/47
  is_blue_verified: boolean;  // 47/47
  is_verified: boolean;  // 47/47
  periscope_user_id: string;  // 47/47
  rest_id: string;  // 47/47
  screenname: string;  // 47/47
}

```

## Example: Full Response (synthesized)

```json
{
  "state": "Ended",
  "id": "1yoJMwpbmaXKQ",
  "ended": "1712035727255",
  "started": 1712011212266,
  "locked": false,
  "replay_start_time": 0,
  "total_live_listeners": 1284588,
  "total_replay_watched": 208,
  "content_type": "visual_audio",
  "is_space_available_for_replay": true,
  "media_key": "28_1774929779223080960",
  "replay_available": true,
  "participants": {
    "admins": [
      {
        "avatar": "https://pbs.twimg.com/profile_images/2011270841334632448/6rRFlV-a_normal.jpg",
        "display_name": "Bark",
        "is_verified": true,
        "is_blue_verified": true,
        "periscope_user_id": "1zYKbeqYpyQex",
        "screenname": "barkmeta",
        "rest_id": "336348053"
      }
    ],
    "speakers": [
      {
        "avatar": "https://pbs.twimg.com/profile_images/1971332068958158848/x-pdXq5A_normal.jpg",
        "display_name": "Alex",
        "is_verified": true,
        "periscope_user_id": "1ayjVrNWqmZjp",
        "is_blue_verified": true,
        "screenname": "Shilllin",
        "rest_id": "1064982684060057606"
      },
      {
        "avatar": "https://pbs.twimg.com/profile_images/1971332068958158848/x-pdXq5A_normal.jpg",
        "display_name": "Alex",
        "is_verified": true,
        "periscope_user_id": "1ayjVrNWqmZjp",
        "is_blue_verified": true,
        "screenname": "Shilllin",
        "rest_id": "1064982684060057606"
      }
    ]
  },
  "community": false,
  "creator": {
    "avatar": null,
    "display_name": "Bark",
    "is_blue_verified": true,
    "screenname": "barkmeta",
    "followers_count": 279581,
    "pinned_tweet_ids_str": [
      "2019540245486747695"
    ],
    "rest_id": "336348053"
  },
  "sharings": [],
  "playlist": "https://prod-fastly-us-east-1.video.pscp.tv/Transcoding/v1/hls/TuGZupq0IW3JTw2-slEt_jGrNF8Rs59Rp0HLJcqd-IDA1RsF8APHPdaJx...",
  "chunks_base_url": "https://prod-fastly-us-east-1.video.pscp.tv/Transcoding/v1/hls/TuGZupq0IW3JTw2-slEt_jGrNF8Rs59Rp0HLJcqd-IDA1RsF8APHPdaJx..."
}
```

## Example: Minimal Response (required fields only)

```json
{
  "state": "Ended",
  "id": "1yoJMwpbmaXKQ",
  "ended": "1712035727255",
  "started": 1712011212266,
  "locked": false,
  "replay_start_time": 0,
  "total_live_listeners": 1284588,
  "total_replay_watched": 208,
  "content_type": "visual_audio",
  "is_space_available_for_replay": true,
  "media_key": "28_1774929779223080960",
  "replay_available": true,
  "participants": {
    "admins": [
      {
        "avatar": "https://pbs.twimg.com/profile_images/2011270841334632448/6rRFlV-a_normal.jpg",
        "display_name": "Bark",
        "is_verified": true,
        "is_blue_verified": true,
        "periscope_user_id": "1zYKbeqYpyQex",
        "screenname": "barkmeta",
        "rest_id": "336348053"
      }
    ],
    "speakers": [
      {
        "avatar": "https://pbs.twimg.com/profile_images/1971332068958158848/x-pdXq5A_normal.jpg",
        "display_name": "Alex",
        "is_verified": true,
        "periscope_user_id": "1ayjVrNWqmZjp",
        "is_blue_verified": true,
        "screenname": "Shilllin",
        "rest_id": "1064982684060057606"
      }
    ]
  },
  "community": false,
  "creator": {
    "avatar": null,
    "display_name": "Bark",
    "is_blue_verified": true,
    "screenname": "barkmeta",
    "followers_count": 279581,
    "pinned_tweet_ids_str": [
      "2019540245486747695"
    ],
    "rest_id": "336348053"
  },
  "sharings": [],
  "playlist": "https://prod-fastly-us-east-1.video.pscp.tv/Transcoding/v1/hls/TuGZupq0IW3JTw2-slEt_jGrNF8Rs59Rp0HLJcqd-IDA1RsF8APHPdaJx...",
  "chunks_base_url": "https://prod-fastly-us-east-1.video.pscp.tv/Transcoding/v1/hls/TuGZupq0IW3JTw2-slEt_jGrNF8Rs59Rp0HLJcqd-IDA1RsF8APHPdaJx..."
}
```
