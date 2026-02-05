---
name: twx
description: "Fetch and analyze Twitter/X data using the twx CLI tool. Use when the user wants to: (1) Analyze a Twitter user's tweets, timeline, or posting patterns, (2) Fetch a conversation thread or replies to a tweet, (3) Search Twitter for tweets matching a query, (4) Research Twitter accounts or topics, (5) Any task involving Twitter/X data extraction. Triggers on mentions of Twitter, X, tweets, threads, timelines, tweet search, or Twitter usernames/URLs."
---

# twx — Twitter/X Data Extraction

CLI tool at `/Users/vicnaum/github/twitter-tools/twitter-toolkit/` that fetches tweets, threads, timelines, replies, and search results from Twitter/X via RapidAPI.

## Setup Check

Before running any command, verify twx is ready:

```bash
# Check if dependencies are installed
ls /Users/vicnaum/github/twitter-tools/twitter-toolkit/node_modules/.package-lock.json 2>/dev/null || (cd /Users/vicnaum/github/twitter-tools/twitter-toolkit && pnpm install)

# Check auth status
cd /Users/vicnaum/github/twitter-tools/twitter-toolkit && npx tsx src/cli.ts auth
```

If no API key is found, ask the user to provide their RapidAPI key, then run:

```bash
cd /Users/vicnaum/github/twitter-tools/twitter-toolkit && npx tsx src/cli.ts auth <key>
```

The user needs a RapidAPI subscription to one or both of:
- **twitter-api45** (https://rapidapi.com/alexanderxbx/api/twitter-api45/) — for `user-tweets`, `user-replies`, `search`
- **twitter283** (https://rapidapi.com/sociallab-sociallab-default/api/twitter283) — for `thread`

## Running Commands

All commands use: `cd /Users/vicnaum/github/twitter-tools/twitter-toolkit && npx tsx src/cli.ts <command> [args]`

Always use `-f json` for analysis tasks (structured data). Use `-f md` for human-readable output. Use `-o /tmp/twx` or another temp dir to avoid polluting the project directory.

### Fetch User Timeline

```bash
npx tsx src/cli.ts user-tweets elonmusk --limit 50 -f json -o /tmp/twx
npx tsx src/cli.ts user-tweets @elonmusk --from 2024-01-01 --to 2024-06-30 -f json -o /tmp/twx
npx tsx src/cli.ts user-tweets "https://x.com/elonmusk" --include-replies --limit 200 -f json -o /tmp/twx
```

Flags: `-l/--limit <n>` (0=unlimited, default 100), `--from/--to <YYYY-MM-DD>`, `--include-replies`, `-f json|md|both`, `-o <dir>`

### Fetch User Replies Only

```bash
npx tsx src/cli.ts user-replies elonmusk --limit 50 -f json -o /tmp/twx
```

Same flags as user-tweets (minus --include-replies).

### Search Tweets

```bash
npx tsx src/cli.ts search "bitcoin" --limit 50 -f json -o /tmp/twx
npx tsx src/cli.ts search "from:elonmusk" --limit 50 --sort top -f json -o /tmp/twx
npx tsx src/cli.ts search "bitcoin min_faves:100 since:2024-01-01" --sort top -f json -o /tmp/twx
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
npx tsx src/cli.ts thread 2019212107020136611 -f json -o /tmp/twx
npx tsx src/cli.ts thread "https://x.com/user/status/2019212107020136611" -f json -o /tmp/twx
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

JSON output structure for threads:
```json
{"root":{"id":"...","text":"...","author":{...},"children":[...]},"stats":{"totalTweets":50,"danglingParents":1}}
```

## Error Handling

- **No API key**: Ask user for their RapidAPI key, run `twx auth <key>`
- **Rate limiting**: The tool has built-in retry with exponential backoff. If persistent 429 errors, reduce `--limit` or wait
- **Empty results**: Check username spelling, try broader search terms, verify date ranges
