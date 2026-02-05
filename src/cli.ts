#!/usr/bin/env node

// CLI entry point for twitter-toolkit
// Uses Commander with smart input parsing (URLs, @usernames, bare IDs)

import 'dotenv/config';
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { writeFile } from 'fs/promises';
import { join } from 'path';

import type { ConversationConfig, RawTweet, TweetNode, UserTweetsConfig, UserTweetsResult, SearchConfig, SearchResult } from './types/index.js';
import { DEFAULT_CONFIG } from './types/index.js';
import { parseTweetId, parseUsername } from './utils/input-parser.js';
import { ensureDir, sanitizeQueryForFilename } from './utils/index.js';
import { TwitterApi } from './api.js';
import { TwitterApi45 } from './api45.js';
import { buildConversationTree } from './tree.js';
import { toJson, toMarkdown, tweetsToJson, tweetsToMarkdown, searchToJson, searchToMarkdown } from './formatters.js';
import { resolveAuth, saveApiKey, loadConfig, getConfigPath } from './config.js';

const program = new Command();

program
  .name('twx')
  .description('Twitter/X data extraction toolkit')
  .version('0.1.0')
  .option('--api-key <key>', 'RapidAPI key (saved to ~/.config/twx/.env for next time)');

// ─── auth command ─────────────────────────────────────────────────────────────

program
  .command('auth')
  .description('Save your RapidAPI key or check auth status')
  .argument('[key]', 'RapidAPI key to save')
  .action(async (key?: string) => {
    if (key) {
      await saveApiKey(key);
      console.log(chalk.green(`API key saved to ${getConfigPath()}`));
    } else {
      // Show auth status
      const configPath = getConfigPath();
      const config = await loadConfig();
      const envKey = process.env.RAPIDAPI_KEY;
      const configKey = config['RAPIDAPI_KEY'];

      console.log(chalk.bold('\nAuth status\n'));

      if (envKey) {
        console.log(`  ${chalk.green('✓')} RAPIDAPI_KEY found in environment`);
        console.log(`    Key: ${envKey.slice(0, 8)}...${envKey.slice(-4)}`);
      } else {
        console.log(`  ${chalk.dim('✗')} RAPIDAPI_KEY not set in environment`);
      }

      if (configKey) {
        console.log(`  ${chalk.green('✓')} RAPIDAPI_KEY found in ${configPath}`);
        console.log(`    Key: ${configKey.slice(0, 8)}...${configKey.slice(-4)}`);
      } else {
        console.log(`  ${chalk.dim('✗')} No key in ${configPath}`);
      }

      if (!envKey && !configKey) {
        console.log();
        console.log(`  Run ${chalk.cyan('twx auth <your-rapidapi-key>')} to set up.`);
        console.log(`  Get a key at: ${chalk.underline('https://rapidapi.com/alexanderxbx/api/twitter-api45/')}`);
      }

      console.log();
    }
  });

// ─── thread command ───────────────────────────────────────────────────────────

program
  .command('thread')
  .description('Fetch a tweet conversation tree')
  .argument(
    '<input>',
    'Tweet ID or URL (e.g. 1234567890 or https://x.com/user/status/1234567890)',
  )
  .option('--no-quotes', 'Exclude quote tweets')
  .option('--detail-max-pages <n>', 'Max TweetDetail pages', parseInt)
  .option('--search-max-pages <n>', 'Max Search pages', parseInt)
  .option('--search-count <n>', 'Search page size', parseInt)
  .option('--concurrency <n>', 'Missing tweet fetch concurrency', parseInt)
  .option('--debug', 'Save raw API responses')
  .option('-f, --format <fmt>', 'Output format: json, md, both', 'both')
  .option('-o, --output-dir <dir>', 'Output directory', './output')
  .action(async (input: string, opts) => {
    try {
      // Parse flexible input (URL, bare ID, etc.)
      const tweetId = parseTweetId(input);

      // Build config from CLI flags + defaults
      const config: ConversationConfig = {
        includeQuotes: opts.quotes !== false,
        detailMaxPages: opts.detailMaxPages ?? DEFAULT_CONFIG.detailMaxPages,
        searchMaxPages: opts.searchMaxPages ?? DEFAULT_CONFIG.searchMaxPages,
        searchCount: opts.searchCount ?? DEFAULT_CONFIG.searchCount,
        missingFetchConcurrency: opts.concurrency ?? DEFAULT_CONFIG.missingFetchConcurrency,
        debugMode: opts.debug ?? DEFAULT_CONFIG.debugMode,
      };

      const auth = await resolveAuth({ apiKey: program.opts().apiKey });
      const api = new TwitterApi({ apiKey: auth.apiKey, apiHost: auth.host283, config });

      console.log(chalk.bold(`\nFetching conversation for tweet ${tweetId}\n`));

      // Step 1: TweetDetail
      const spinner = ora('Fetching via TweetDetail...').start();
      const { tweets: detailTweets } = await api.fetchConversationViaTweetDetail(tweetId);
      spinner.succeed(`TweetDetail: ${detailTweets.length} tweets`);

      // Step 2: Search backfill
      spinner.start('Fetching via Search API...');
      const searchTweets = await api.fetchAllSearchTweets(tweetId);
      spinner.succeed(`Search: ${searchTweets.length} tweets`);

      // Step 3: Dedup & build tree
      spinner.start('Building conversation tree...');
      const seen = new Set<string>();
      const unique: RawTweet[] = [];
      for (const t of [...detailTweets, ...searchTweets]) {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          unique.push(t);
        }
      }
      let tree = buildConversationTree(unique, tweetId);
      spinner.succeed(`Tree: ${tree.stats.totalTweets} nodes`);

      // Step 4: Fetch missing tweets
      const missingIds: string[] = [];
      function collectMissing(node: TweetNode) {
        if (node.replyCount > node.children.length) missingIds.push(node.id);
        for (const child of node.children) collectMissing(child);
      }
      collectMissing(tree.root);

      if (missingIds.length > 0) {
        spinner.start(`Fetching ${missingIds.length} missing tweet responses...`);
        const missingTweets = await api.fetchMissingTweets(missingIds);
        for (const t of missingTweets) {
          if (!seen.has(t.id)) {
            seen.add(t.id);
            unique.push(t);
          }
        }
        tree = buildConversationTree(unique, tweetId);
        spinner.succeed(`After backfill: ${tree.stats.totalTweets} nodes`);
      }

      tree.stats.pagesFetched = Math.ceil(unique.length / 20);

      // Step 5: Write output
      await ensureDir(opts.outputDir);
      const base = join(opts.outputDir, tweetId);
      const fmt = opts.format as string;

      if (fmt === 'json' || fmt === 'both') {
        await writeFile(`${base}.json`, toJson(tree));
      }
      if (fmt === 'md' || fmt === 'both') {
        await writeFile(`${base}.md`, toMarkdown(tree));
      }

      // Summary
      console.log();
      console.log(chalk.bold('Results'));
      console.log(
        `  Root: @${tree.root.author.handle} — ${tree.root.text.substring(0, 120)}${tree.root.text.length > 120 ? '...' : ''}`,
      );
      console.log(`  Total tweets: ${tree.stats.totalTweets}`);
      console.log(`  Dangling parents: ${tree.stats.danglingParents}`);
      console.log(`  Output: ${opts.outputDir}/`);
      console.log();
    } catch (err) {
      console.error(chalk.red(err instanceof Error ? err.message : String(err)));
      process.exit(1);
    }
  });

program
  .command('user-tweets')
  .description('Fetch tweets from a user timeline')
  .argument(
    '<input>',
    'Username, @username, or profile URL (e.g. elonmusk, @elonmusk, https://x.com/elonmusk)',
  )
  .option('-l, --limit <n>', 'Max tweets to fetch (0 = unlimited)', parseInt, 100)
  .option('--from <date>', 'Start date (YYYY-MM-DD)')
  .option('--to <date>', 'End date (YYYY-MM-DD)')
  .option('--include-replies', 'Also fetch user replies')
  .option('--debug', 'Save raw API responses')
  .option('-f, --format <fmt>', 'Output format: json, md, both', 'both')
  .option('-o, --output-dir <dir>', 'Output directory', './output')
  .action(async (input: string, opts) => {
    try {
      const username = parseUsername(input);

      const auth = await resolveAuth({ apiKey: program.opts().apiKey });

      const config: UserTweetsConfig = {
        limit: opts.limit ?? 100,
        fromDate: opts.from ? new Date(opts.from + 'T00:00:00Z') : undefined,
        toDate: opts.to ? new Date(opts.to + 'T23:59:59Z') : undefined,
        includeReplies: opts.includeReplies ?? false,
        debugMode: opts.debug ?? false,
      };

      const api = new TwitterApi45({ apiKey: auth.apiKey, apiHost: auth.host45, config });

      console.log(chalk.bold(`\nFetching tweets for @${username}\n`));
      if (config.fromDate) console.log(`  From: ${opts.from}`);
      if (config.toDate) console.log(`  To: ${opts.to}`);
      console.log(`  Limit: ${config.limit === 0 ? 'unlimited' : config.limit}`);
      console.log(`  Include replies: ${config.includeReplies}`);
      console.log();

      const spinner = ora('Fetching timeline...').start();
      const { tweets, pagesFetched } = await api.fetchAllUserTweets(username);
      spinner.succeed(`Fetched ${tweets.length} tweets from ${pagesFetched} pages`);

      // Sort by date descending (newest first)
      tweets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      // Build stats
      const replyTweets = tweets.filter(t => t.parentId != null).length;
      const result: UserTweetsResult = {
        username,
        tweets,
        stats: {
          totalTweets: tweets.length,
          originalTweets: tweets.length - replyTweets,
          replyTweets,
          pagesFetched,
          dateRange: {
            from: tweets.length > 0 ? tweets[tweets.length - 1]!.createdAt : null,
            to: tweets.length > 0 ? tweets[0]!.createdAt : null,
          },
        },
      };

      // Write output
      await ensureDir(opts.outputDir);
      const base = join(opts.outputDir, `${username}_tweets`);
      const fmt = opts.format as string;

      if (fmt === 'json' || fmt === 'both') {
        await writeFile(`${base}.json`, tweetsToJson(result));
      }
      if (fmt === 'md' || fmt === 'both') {
        await writeFile(`${base}.md`, tweetsToMarkdown(result));
      }

      // Summary
      console.log();
      console.log(chalk.bold('Results'));
      console.log(`  User: @${username}`);
      console.log(`  Total tweets: ${result.stats.totalTweets}`);
      console.log(`  Original: ${result.stats.originalTweets} | Replies: ${result.stats.replyTweets}`);
      console.log(`  Pages fetched: ${pagesFetched}`);
      if (result.stats.dateRange.from) {
        console.log(`  Date range: ${new Date(result.stats.dateRange.from).toLocaleDateString()} — ${new Date(result.stats.dateRange.to!).toLocaleDateString()}`);
      }
      console.log(`  Output: ${opts.outputDir}/`);
      console.log();
    } catch (err) {
      console.error(chalk.red(err instanceof Error ? err.message : String(err)));
      process.exit(1);
    }
  });

program
  .command('user-replies')
  .description('Fetch only a user\'s replies')
  .argument(
    '<input>',
    'Username, @username, or profile URL (e.g. elonmusk, @elonmusk, https://x.com/elonmusk)',
  )
  .option('-l, --limit <n>', 'Max replies to fetch (0 = unlimited)', parseInt, 100)
  .option('--from <date>', 'Start date (YYYY-MM-DD)')
  .option('--to <date>', 'End date (YYYY-MM-DD)')
  .option('--debug', 'Save raw API responses')
  .option('-f, --format <fmt>', 'Output format: json, md, both', 'both')
  .option('-o, --output-dir <dir>', 'Output directory', './output')
  .action(async (input: string, opts) => {
    try {
      const username = parseUsername(input);

      const auth = await resolveAuth({ apiKey: program.opts().apiKey });

      const config: UserTweetsConfig = {
        limit: opts.limit ?? 100,
        fromDate: opts.from ? new Date(opts.from + 'T00:00:00Z') : undefined,
        toDate: opts.to ? new Date(opts.to + 'T23:59:59Z') : undefined,
        includeReplies: false, // not used by fetchAllUserReplies
        debugMode: opts.debug ?? false,
      };

      const api = new TwitterApi45({ apiKey: auth.apiKey, apiHost: auth.host45, config });

      console.log(chalk.bold(`\nFetching replies for @${username}\n`));
      if (config.fromDate) console.log(`  From: ${opts.from}`);
      if (config.toDate) console.log(`  To: ${opts.to}`);
      console.log(`  Limit: ${config.limit === 0 ? 'unlimited' : config.limit}`);
      console.log();

      const spinner = ora('Fetching replies...').start();
      const { tweets, pagesFetched } = await api.fetchAllUserReplies(username);
      spinner.succeed(`Fetched ${tweets.length} replies from ${pagesFetched} pages`);

      // Sort by date descending (newest first)
      tweets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const result: UserTweetsResult = {
        username,
        tweets,
        stats: {
          totalTweets: tweets.length,
          originalTweets: 0,
          replyTweets: tweets.length,
          pagesFetched,
          dateRange: {
            from: tweets.length > 0 ? tweets[tweets.length - 1]!.createdAt : null,
            to: tweets.length > 0 ? tweets[0]!.createdAt : null,
          },
        },
      };

      // Write output
      await ensureDir(opts.outputDir);
      const base = join(opts.outputDir, `${username}_replies`);
      const fmt = opts.format as string;

      if (fmt === 'json' || fmt === 'both') {
        await writeFile(`${base}.json`, tweetsToJson(result));
      }
      if (fmt === 'md' || fmt === 'both') {
        await writeFile(`${base}.md`, tweetsToMarkdown(result));
      }

      // Summary
      console.log();
      console.log(chalk.bold('Results'));
      console.log(`  User: @${username}`);
      console.log(`  Replies: ${tweets.length}`);
      console.log(`  Pages fetched: ${pagesFetched}`);
      if (result.stats.dateRange.from) {
        console.log(`  Date range: ${new Date(result.stats.dateRange.from).toLocaleDateString()} — ${new Date(result.stats.dateRange.to!).toLocaleDateString()}`);
      }
      console.log(`  Output: ${opts.outputDir}/`);
      console.log();
    } catch (err) {
      console.error(chalk.red(err instanceof Error ? err.message : String(err)));
      process.exit(1);
    }
  });

program
  .command('search')
  .description('Search tweets (supports Twitter advanced operators)')
  .argument('<query>', 'Search query string (e.g. "from:elonmusk", "bitcoin min_faves:100")')
  .option('-l, --limit <n>', 'Max tweets to fetch (0 = unlimited)', parseInt, 100)
  .option('-s, --sort <order>', 'Sort order: top, recent', 'recent')
  .option('--debug', 'Save raw API responses')
  .option('-f, --format <fmt>', 'Output format: json, md, both', 'both')
  .option('-o, --output-dir <dir>', 'Output directory', './output')
  .action(async (query: string, opts) => {
    try {
      const auth = await resolveAuth({ apiKey: program.opts().apiKey });

      const searchConfig: SearchConfig = {
        limit: opts.limit ?? 100,
        sort: opts.sort === 'top' ? 'top' : 'recent',
        debugMode: opts.debug ?? false,
      };

      // Construct API instance — debugMode comes from the UserTweetsConfig on the instance
      const api = new TwitterApi45({
        apiKey: auth.apiKey,
        apiHost: auth.host45,
        config: {
          limit: searchConfig.limit,
          includeReplies: false,
          debugMode: searchConfig.debugMode,
        },
      });

      console.log(chalk.bold(`\nSearching: "${query}"\n`));
      console.log(`  Sort: ${searchConfig.sort}`);
      console.log(`  Limit: ${searchConfig.limit === 0 ? 'unlimited' : searchConfig.limit}`);
      console.log();

      const spinner = ora('Searching tweets...').start();
      const { tweets, pagesFetched } = await api.searchTweets(query, searchConfig);
      spinner.succeed(`Found ${tweets.length} tweets from ${pagesFetched} pages`);

      // Sort by date descending (newest first)
      tweets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const result: SearchResult = {
        query,
        tweets,
        stats: {
          totalTweets: tweets.length,
          pagesFetched,
          dateRange: {
            from: tweets.length > 0 ? tweets[tweets.length - 1]!.createdAt : null,
            to: tweets.length > 0 ? tweets[0]!.createdAt : null,
          },
        },
      };

      // Write output
      await ensureDir(opts.outputDir);
      const base = join(opts.outputDir, `search_${sanitizeQueryForFilename(query)}`);
      const fmt = opts.format as string;

      if (fmt === 'json' || fmt === 'both') {
        await writeFile(`${base}.json`, searchToJson(result));
      }
      if (fmt === 'md' || fmt === 'both') {
        await writeFile(`${base}.md`, searchToMarkdown(result));
      }

      // Summary
      console.log();
      console.log(chalk.bold('Results'));
      console.log(`  Query: "${query}"`);
      console.log(`  Total tweets: ${result.stats.totalTweets}`);
      console.log(`  Pages fetched: ${pagesFetched}`);
      if (result.stats.dateRange.from) {
        console.log(`  Date range: ${new Date(result.stats.dateRange.from).toLocaleDateString()} — ${new Date(result.stats.dateRange.to!).toLocaleDateString()}`);
      }
      console.log(`  Output: ${opts.outputDir}/`);
      console.log();
    } catch (err) {
      console.error(chalk.red(err instanceof Error ? err.message : String(err)));
      process.exit(1);
    }
  });

program.parse();
