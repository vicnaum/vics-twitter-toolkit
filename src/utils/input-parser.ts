// Smart input parsing for URLs, usernames, and tweet IDs

import type { ParsedInput } from '../types/index.js';

const TWITTER_URL_PATTERNS = [
  // https://x.com/username/status/1234567890?s=20
  // https://twitter.com/username/status/1234567890
  /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/([^/]+)\/status\/(\d+)/,
  // https://x.com/username (profile URL)
  /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/([^/?#]+)\/?$/,
];

/**
 * Parse flexible input into a structured type.
 * Accepts:
 * - Tweet URLs: https://x.com/user/status/123, https://twitter.com/user/status/123
 * - Profile URLs: https://x.com/user
 * - Bare tweet IDs: 1234567890 (numeric string)
 * - Usernames: @elonmusk, elonmusk
 */
export function parseInput(input: string): ParsedInput {
  const trimmed = input.trim();

  // Try URL patterns first
  for (const pattern of TWITTER_URL_PATTERNS) {
    const match = trimmed.match(pattern);
    if (match) {
      // If it matched the status URL pattern (has tweet ID in group 2)
      if (match[2]) {
        return { type: 'tweet_id', id: match[2] };
      }
      // Profile URL (only username in group 1)
      if (match[1]) {
        return { type: 'username', username: match[1] };
      }
    }
  }

  // Bare numeric string = tweet ID
  if (/^\d+$/.test(trimmed)) {
    return { type: 'tweet_id', id: trimmed };
  }

  // Username (with or without @)
  if (/^@?[A-Za-z0-9_]{1,15}$/.test(trimmed)) {
    return { type: 'username', username: trimmed.replace(/^@/, '') };
  }

  return { type: 'unknown', raw: trimmed };
}

/** Extract tweet ID from flexible input, or throw */
export function parseTweetId(input: string): string {
  const parsed = parseInput(input);
  if (parsed.type === 'tweet_id') {
    return parsed.id;
  }
  throw new Error(
    `Expected a tweet ID or tweet URL, got: "${input}"\n` +
      'Accepted formats:\n' +
      '  - Tweet ID: 1234567890\n' +
      '  - Tweet URL: https://x.com/user/status/1234567890\n' +
      '  - Tweet URL: https://twitter.com/user/status/1234567890',
  );
}

/** Extract username from flexible input, or throw */
export function parseUsername(input: string): string {
  const parsed = parseInput(input);
  if (parsed.type === 'username') {
    return parsed.username;
  }
  if (parsed.type === 'tweet_id') {
    throw new Error(`Expected a username or profile URL, got a tweet ID: "${input}"`);
  }
  throw new Error(
    `Expected a username or profile URL, got: "${input}"\n` +
      'Accepted formats:\n' +
      '  - Username: elonmusk or @elonmusk\n' +
      '  - Profile URL: https://x.com/elonmusk',
  );
}
