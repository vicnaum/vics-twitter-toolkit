import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { readFile, writeFile, rm, rename, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname } from 'path';

import { getConfigPath, loadConfig, saveApiKey, resolveAuth } from '../src/config.js';

// We need to isolate tests from the real ~/.config/twx/.env.
// Strategy: back up the real file before all tests, restore after all tests.
const configPath = getConfigPath();
const backupPath = configPath + '.test-backup';

describe('config', () => {
  let origEnv: NodeJS.ProcessEnv;
  let hadRealConfig = false;

  beforeAll(async () => {
    // Back up real config if it exists
    if (existsSync(configPath)) {
      hadRealConfig = true;
      await rename(configPath, backupPath);
    }
  });

  afterAll(async () => {
    // Restore real config
    try { await rm(configPath, { force: true }); } catch {}
    if (hadRealConfig) {
      await rename(backupPath, configPath);
    }
  });

  beforeEach(async () => {
    origEnv = { ...process.env };
    delete process.env.RAPIDAPI_KEY;
    delete process.env.RAPIDAPI_HOST_45;
    delete process.env.RAPIDAPI_HOST_283;
    // Remove config file before each test for clean state
    try { await rm(configPath, { force: true }); } catch {}
  });

  afterEach(() => {
    process.env = origEnv;
  });

  describe('getConfigPath', () => {
    it('returns a path ending with .config/twx/.env', () => {
      expect(configPath).toMatch(/\.config\/twx\/\.env$/);
    });
  });

  describe('saveApiKey + loadConfig round-trip', () => {
    it('saveApiKey writes and loadConfig reads', async () => {
      await saveApiKey('round-trip-test-key');
      const config = await loadConfig();
      expect(config['RAPIDAPI_KEY']).toBe('round-trip-test-key');
    });

    it('saveApiKey updates existing key without duplicating', async () => {
      await saveApiKey('first-key');
      await saveApiKey('second-key');
      const config = await loadConfig();
      expect(config['RAPIDAPI_KEY']).toBe('second-key');

      // Verify no duplicate lines
      const content = await readFile(configPath, 'utf-8');
      const keyLines = content.split('\n').filter(l => l.startsWith('RAPIDAPI_KEY='));
      expect(keyLines.length).toBe(1);
    });

    it('preserves other lines in config', async () => {
      await mkdir(dirname(configPath), { recursive: true });
      await writeFile(configPath, '# My comment\nOTHER_VAR=hello\n');
      await saveApiKey('new-key');
      const content = await readFile(configPath, 'utf-8');
      expect(content).toContain('# My comment');
      expect(content).toContain('OTHER_VAR=hello');
      expect(content).toContain('RAPIDAPI_KEY=new-key');
    });
  });

  describe('loadConfig', () => {
    it('returns empty record when file does not exist', async () => {
      const config = await loadConfig();
      expect(config).toEqual({});
    });

    it('parses key=value lines', async () => {
      await mkdir(dirname(configPath), { recursive: true });
      await writeFile(configPath, 'FOO=bar\nBAZ=qux\n');
      const config = await loadConfig();
      expect(config['FOO']).toBe('bar');
      expect(config['BAZ']).toBe('qux');
    });

    it('skips comments and blank lines', async () => {
      await mkdir(dirname(configPath), { recursive: true });
      await writeFile(configPath, '# comment\n\nKEY=val\n');
      const config = await loadConfig();
      expect(config).toEqual({ KEY: 'val' });
    });
  });

  describe('resolveAuth', () => {
    it('priority 1: uses CLI flag', async () => {
      const result = await resolveAuth({ apiKey: 'flag-key-abc' });
      expect(result.apiKey).toBe('flag-key-abc');
    });

    it('priority 2: uses env var when no CLI flag', async () => {
      process.env.RAPIDAPI_KEY = 'env-key-xyz';
      const result = await resolveAuth({});
      expect(result.apiKey).toBe('env-key-xyz');
    });

    it('priority 1 beats priority 2: flag over env var', async () => {
      process.env.RAPIDAPI_KEY = 'env-key-xyz';
      const result = await resolveAuth({ apiKey: 'flag-key-abc' });
      expect(result.apiKey).toBe('flag-key-abc');
    });

    it('priority 3: reads from config file when no flag or env', async () => {
      await saveApiKey('config-key-789');
      const result = await resolveAuth({});
      expect(result.apiKey).toBe('config-key-789');
    });

    it('priority 2 beats priority 3: env over config file', async () => {
      await saveApiKey('config-key-789');
      process.env.RAPIDAPI_KEY = 'env-key-xyz';
      const result = await resolveAuth({});
      expect(result.apiKey).toBe('env-key-xyz');
    });

    it('throws descriptive error when no key found (priority 4)', async () => {
      await expect(resolveAuth({})).rejects.toThrow('No API key found');
    });

    it('error message includes twx auth instructions', async () => {
      await expect(resolveAuth({})).rejects.toThrow('twx auth');
    });

    it('error message includes --api-key hint', async () => {
      await expect(resolveAuth({})).rejects.toThrow('--api-key');
    });

    it('error message includes RapidAPI URL', async () => {
      await expect(resolveAuth({})).rejects.toThrow('rapidapi.com');
    });

    it('saves key to config when provided via CLI flag', async () => {
      await resolveAuth({ apiKey: 'auto-saved-key' });
      const config = await loadConfig();
      expect(config['RAPIDAPI_KEY']).toBe('auto-saved-key');
    });

    it('returns default host45', async () => {
      process.env.RAPIDAPI_KEY = 'test';
      const result = await resolveAuth({});
      expect(result.host45).toBe('twitter-api45.p.rapidapi.com');
    });

    it('returns default host283', async () => {
      process.env.RAPIDAPI_KEY = 'test';
      const result = await resolveAuth({});
      expect(result.host283).toBe('twitter283.p.rapidapi.com');
    });

    it('respects RAPIDAPI_HOST_45 env override', async () => {
      process.env.RAPIDAPI_KEY = 'test';
      process.env.RAPIDAPI_HOST_45 = 'custom-host-45.example.com';
      const result = await resolveAuth({});
      expect(result.host45).toBe('custom-host-45.example.com');
    });

    it('respects RAPIDAPI_HOST_283 env override', async () => {
      process.env.RAPIDAPI_KEY = 'test';
      process.env.RAPIDAPI_HOST_283 = 'custom-host-283.example.com';
      const result = await resolveAuth({});
      expect(result.host283).toBe('custom-host-283.example.com');
    });
  });
});
