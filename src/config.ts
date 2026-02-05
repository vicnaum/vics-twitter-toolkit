// Central config module for twx CLI
// Manages API key resolution, config file persistence, and default host values.

import { homedir } from 'os';
import { join } from 'path';
import { readFile, writeFile, mkdir } from 'fs/promises';

const CONFIG_DIR = join(homedir(), '.config', 'twx');
const CONFIG_FILE = join(CONFIG_DIR, '.env');

const DEFAULT_HOSTS = {
  api45: 'twitter-api45.p.rapidapi.com',
  api283: 'twitter283.p.rapidapi.com',
};

export function getConfigPath(): string {
  return CONFIG_FILE;
}

/** Parse key=value lines from the config file. Returns empty record if file doesn't exist. */
export async function loadConfig(): Promise<Record<string, string>> {
  try {
    const content = await readFile(CONFIG_FILE, 'utf-8');
    const result: Record<string, string> = {};
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (key) result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}

/** Write or update RAPIDAPI_KEY in the config file, preserving other lines. */
export async function saveApiKey(key: string): Promise<void> {
  await mkdir(CONFIG_DIR, { recursive: true });

  let lines: string[] = [];
  try {
    const content = await readFile(CONFIG_FILE, 'utf-8');
    lines = content.split('\n');
  } catch {
    // File doesn't exist yet — start fresh
  }

  let found = false;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i]!.trim();
    if (trimmed.startsWith('RAPIDAPI_KEY=')) {
      lines[i] = `RAPIDAPI_KEY=${key}`;
      found = true;
      break;
    }
  }

  if (!found) {
    // Remove trailing empty lines, add the key, then add a final newline
    while (lines.length > 0 && lines[lines.length - 1]!.trim() === '') {
      lines.pop();
    }
    lines.push(`RAPIDAPI_KEY=${key}`);
  }

  await writeFile(CONFIG_FILE, lines.join('\n') + '\n');
}

export interface ResolvedAuth {
  apiKey: string;
  host45: string;
  host283: string;
}

/**
 * Resolve API key and hosts. Priority:
 * 1. --api-key CLI flag (also saves to config)
 * 2. RAPIDAPI_KEY env var (or local .env via dotenv)
 * 3. ~/.config/twx/.env config file
 * 4. Error with instructions
 */
export async function resolveAuth(opts: { apiKey?: string }): Promise<ResolvedAuth> {
  let apiKey: string | undefined;

  // 1. CLI flag
  if (opts.apiKey) {
    apiKey = opts.apiKey;
    // Save for next time
    await saveApiKey(apiKey);
  }

  // 2. Environment variable (includes local .env loaded by dotenv)
  if (!apiKey) {
    apiKey = process.env.RAPIDAPI_KEY || undefined;
  }

  // 3. Global config file
  if (!apiKey) {
    const config = await loadConfig();
    apiKey = config['RAPIDAPI_KEY'] || undefined;
  }

  // 4. Error
  if (!apiKey) {
    throw new Error(
      `No API key found. Set it up with:\n\n` +
        `  twx auth <your-rapidapi-key>\n\n` +
        `Or provide it directly:\n\n` +
        `  twx search --api-key <key> "query"\n\n` +
        `Get a key at: https://rapidapi.com/alexanderxbx/api/twitter-api45/`,
    );
  }

  // Resolve hosts with defaults (env overrides are still possible)
  const host45 = process.env.RAPIDAPI_HOST_45 || DEFAULT_HOSTS.api45;
  const host283 = process.env.RAPIDAPI_HOST_283 || DEFAULT_HOSTS.api283;

  return { apiKey, host45, host283 };
}
