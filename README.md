# vics-twitter-toolkit

A fast, opinionated CLI for pulling data out of Twitter/X. Fetches conversation threads, user timelines, and replies — then dumps them as clean JSON and readable Markdown.

Built on top of two RapidAPI Twitter endpoints (API 283 for conversations, API 45 for timelines/replies), with Zod-validated responses, automatic pagination, rate limiting, and retry logic baked in.

## Quick start

```bash
pnpm install
cp .env.example .env
# Edit .env and add your RapidAPI key
```

You'll need a [RapidAPI](https://rapidapi.com/) account and a subscription to one or both of:
- [twitter283](https://rapidapi.com/Starter283/api/twitter283/) — for `thread` command
- [twitter-api45](https://rapidapi.com/alexanderxbx/api/twitter-api45/) — for `user-tweets` and `user-replies` commands

## Commands

### `user-tweets` — Fetch a user's timeline

```bash
# Fetch last 100 tweets (default)
pnpm dev user-tweets elonmusk

# Fetch 50 tweets, @-prefix works too
pnpm dev user-tweets @elonmusk --limit 50

# Profile URL, date range, markdown only
pnpm dev user-tweets "https://x.com/elonmusk" --from 2024-01-01 --to 2024-06-30 -f md

# Timeline + replies combined
pnpm dev user-tweets elonmusk --include-replies --limit 200

# Fetch everything available
pnpm dev user-tweets elonmusk --limit 0
```

| Flag | Default | Description |
|------|---------|-------------|
| `-l, --limit <n>` | `100` | Max tweets to fetch (0 = unlimited) |
| `--from <date>` | — | Start date (YYYY-MM-DD) |
| `--to <date>` | — | End date (YYYY-MM-DD) |
| `--include-replies` | — | Also fetch user's replies into the same output |
| `--debug` | — | Save raw API responses to `./raw_response/` |
| `-f, --format <fmt>` | `both` | `json`, `md`, or `both` |
| `-o, --output-dir <dir>` | `./output` | Output directory |

### `user-replies` — Fetch only a user's replies

```bash
pnpm dev user-replies elonmusk
pnpm dev user-replies @elonmusk --limit 50 --from 2024-01-01 -f json
```

Same options as `user-tweets` (minus `--include-replies`). Fetches from the `/replies.php` endpoint, filtered to only the target user's own tweets.

### `thread` — Fetch a full conversation tree

```bash
# By tweet ID
pnpm dev thread 2019212107020136611

# By URL
pnpm dev thread "https://x.com/elonmusk/status/2019212107020136611"

# Markdown only, custom output dir
pnpm dev thread 2019212107020136611 -f md -o ./threads

# Exclude quote tweets
pnpm dev thread 2019212107020136611 --no-quotes
```

| Flag | Default | Description |
|------|---------|-------------|
| `-f, --format <fmt>` | `both` | `json`, `md`, or `both` |
| `-o, --output-dir <dir>` | `./output` | Output directory |
| `--no-quotes` | — | Exclude quote tweets from the tree |
| `--debug` | — | Save raw API responses |
| `--detail-max-pages <n>` | `25` | Max TweetDetail pages |
| `--search-max-pages <n>` | `25` | Max Search API pages |
| `--search-count <n>` | `1000` | Search API page size |
| `--concurrency <n>` | `4` | Parallel workers for missing-tweet backfill |

**Input formats** — all commands accept flexible input:
- Usernames: `elonmusk`, `@elonmusk`, `https://x.com/elonmusk`
- Tweets: `2019212107020136611`, `https://x.com/elonmusk/status/2019212107020136611`

## How the `thread` command works

1. **TweetDetail** — fetches the root tweet and direct replies via `TweetDetailConversationv2` with cursor pagination
2. **Search backfill** — queries `conversation_id:<id> -is:retweet` to pick up tweets the detail endpoint missed
3. **Dedup & tree build** — merges both sources by tweet ID, reconstructs the parent-child tree
4. **Missing-tweet backfill** — for any node where `replyCount > children.length`, fetches those individual tweet details
5. **Output** — writes JSON and/or Markdown to the output directory

## Output formats

**JSON** — structured data with stats:

```json
{
  "root": {
    "id": "2019212107020136611",
    "text": "...",
    "author": { "handle": "elonmusk", "name": "Elon Musk" },
    "children": [ ... ]
  },
  "stats": {
    "totalTweets": 50,
    "pagesFetched": 3,
    "danglingParents": 1
  }
}
```

**Markdown** — nested bullet list, easy to read or paste into docs:

```markdown
# Conversation Thread

**Root:** https://x.com/elonmusk/status/2019212107020136611
**Tweets:** 50 | **Dangling:** 1

- **Elon Musk** (@elonmusk)
  Original tweet text here...

  - **SomeUser** (@someuser)
    Reply text...
```

## Development

```bash
pnpm dev <command>    # run via tsx (no build needed)
pnpm test             # run tests once
pnpm test:watch       # watch mode
pnpm build            # compile to dist/
pnpm lint             # type-check without emitting
```

## APIs used

| API | Endpoint | Used by |
|-----|----------|---------|
| [twitter283](https://rapidapi.com/Starter283/api/twitter283/) | `TweetDetailConversationv2` | `thread` |
| [twitter283](https://rapidapi.com/Starter283/api/twitter283/) | `Search` | `thread` (backfill) |
| [twitter-api45](https://rapidapi.com/alexanderxbx/api/twitter-api45/) | `/timeline.php` | `user-tweets` |
| [twitter-api45](https://rapidapi.com/alexanderxbx/api/twitter-api45/) | `/replies.php` | `user-tweets --include-replies`, `user-replies` |

## License

MIT
