---
name: twx
description: "Fetch and analyze Twitter/X data using the twx CLI tool. Use when the user wants to: (1) Analyze a Twitter user's tweets, timeline, or posting patterns, (2) Fetch a conversation thread or replies to a tweet, (3) Search Twitter for tweets matching a query, (4) Research Twitter accounts or topics, (5) Any task involving Twitter/X data extraction. Triggers on mentions of Twitter, X, tweets, threads, timelines, tweet search, or Twitter usernames/URLs."
---

# twx — Twitter/X Data Extraction

Globally installed CLI tool that fetches tweets, threads, timelines, replies, and search results from Twitter/X via RapidAPI.

## Setup Check

Before running any command, check auth status:

```bash
twx auth
```

If `twx` is not found, tell the user to install it:

```bash
npm install -g github:vicnaum/vics-twitter-toolkit
```

If no API key is found, ask the user to provide their RapidAPI key, then run:

```bash
twx auth <key>
```

The user needs a RapidAPI subscription to one or both of:
- **twitter-api45** (https://rapidapi.com/alexanderxbx/api/twitter-api45/) — for `user-tweets`, `user-replies`, `search`
- **twitter283** (https://rapidapi.com/sociallab-sociallab-default/api/twitter283) — for `profile`, `thread`

## Running Commands

Always use `-f json` for analysis tasks (structured data). Use `-f md` for human-readable output. Use `-o /tmp/twx` or another temp dir to avoid polluting the project directory.

### Global flag: `-p` (print to terminal)

Add `-p` before the command to print output to stdout instead of writing files. Useful for quick lookups or when piping output:

```bash
twx -p profile solana
twx -p search "bitcoin" --limit 5 -f json
```

When `-p` is used with `-f both`, markdown is printed.

### Fetch User Profile

```bash
twx profile solana -f json -o /tmp/twx
twx profile @elonmusk -f json -o /tmp/twx
twx profile "https://x.com/levelsio" -f json -o /tmp/twx
```

Flags: `-f json|md|both`, `-o <dir>`, `--debug`

Returns: bio, location, website, follower/following counts, tweet/media/like counts, verification status, pinned tweet IDs, profile image shape.

JSON output structure for profiles:
```json
{"id":"...","handle":"...","name":"...","bio":"...","location":"...","website":"...","followerCount":0,"followingCount":0,"tweetCount":0,"mediaCount":0,"likeCount":0,"isVerified":false,"verifiedType":null,"pinnedTweetIds":[],"profileImageShape":"Circle"}
```

### Fetch User Timeline

```bash
twx user-tweets elonmusk --limit 50 -f json -o /tmp/twx
twx user-tweets @elonmusk --from 2024-01-01 --to 2024-06-30 -f json -o /tmp/twx
twx user-tweets "https://x.com/elonmusk" --include-replies --limit 200 -f json -o /tmp/twx
```

Flags: `-l/--limit <n>` (0=unlimited, default 100), `--from/--to <YYYY-MM-DD>`, `--include-replies`, `-f json|md|both`, `-o <dir>`

### Fetch User Replies Only

```bash
twx user-replies elonmusk --limit 50 -f json -o /tmp/twx
```

Same flags as user-tweets (minus --include-replies).

### Search Tweets

```bash
twx search "bitcoin" --limit 50 -f json -o /tmp/twx
twx search "from:elonmusk" --limit 50 --sort top -f json -o /tmp/twx
twx search "bitcoin min_faves:100 since:2024-01-01" --sort top -f json -o /tmp/twx
```

Flags: `-l/--limit <n>`, `-s/--sort top|recent`, `-f json|md|both`, `-o <dir>`

**Search operators** — combine freely in the query string:

| Operator | Example | Description |
|----------|---------|-------------|
| `"exact phrase"` | `"to the moon"` | Exact phrase match |
| `OR` | `bitcoin OR ethereum` | Match either term |
| `-word` | `bitcoin -scam` | Exclude word |
| `from:` | `from:elonmusk` | Tweets by user |
| `to:` | `to:elonmusk` | Replies to user |
| `@mention` | `@elonmusk` | Mentions of user |
| `filter:links` | `bitcoin filter:links` | Only tweets with links |
| `filter:images` | `cats filter:images` | Only tweets with images |
| `filter:videos` | `tutorial filter:videos` | Only tweets with videos |
| `-filter:replies` | `from:elonmusk -filter:replies` | Exclude replies |
| `min_faves:` | `bitcoin min_faves:100` | Minimum likes |
| `min_retweets:` | `bitcoin min_retweets:50` | Minimum retweets |
| `min_replies:` | `bitcoin min_replies:10` | Minimum replies |
| `since:` | `since:2024-01-01` | Tweets after date |
| `until:` | `until:2024-06-30` | Tweets before date |
| `lang:` | `bitcoin lang:en` | Language filter |
| `conversation_id:` | `conversation_id:123456` | Tweets in a conversation |
| `-is:retweet` | `from:elonmusk -is:retweet` | Exclude retweets |

### Fetch Conversation Thread

```bash
twx thread 2019212107020136611 -f json -o /tmp/twx
twx thread "https://x.com/user/status/2019212107020136611" -f json -o /tmp/twx
```

Flags: `--no-quotes`, `--detail-max-pages <n>`, `--search-max-pages <n>`, `--concurrency <n>`, `-f json|md|both`, `-o <dir>`

## Input Formats

All commands accept flexible input:
- **Usernames**: `elonmusk`, `@elonmusk`, `https://x.com/elonmusk`
- **Tweet IDs**: `2019212107020136611`, `https://x.com/user/status/2019212107020136611`

## Analysis Workflow

1. Fetch data with `-f json` to get structured output
2. Read the JSON output file to analyze the data
3. Present findings to the user

JSON output structure for timelines/search:
```json
{"username":"...","tweets":[{"id":"...","text":"...","createdAt":"...","author":{"handle":"...","name":"..."},"replyCount":0,"favoriteCount":0,"retweetCount":0,"viewCount":0}],"stats":{...}}
```

JSON output structure for profiles:
```json
{"id":"...","handle":"...","name":"...","bio":"...","followerCount":0,"followingCount":0,"tweetCount":0,"isVerified":false}
```

JSON output structure for threads:
```json
{"root":{"id":"...","text":"...","author":{...},"children":[...]},"stats":{"totalTweets":50,"danglingParents":1}}
```

## Error Handling

- **No API key**: Ask user for their RapidAPI key, run `twx auth <key>`
- **Rate limiting**: The tool has built-in retry with exponential backoff. If persistent 429 errors, reduce `--limit` or wait
- **Empty results**: Check username spelling, try broader search terms, verify date ranges
