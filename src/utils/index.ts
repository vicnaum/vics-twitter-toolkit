// Utility functions for the Twitter toolkit

const MAX_RETRIES = 5;
const REQUEST_TIMEOUT_MS: number = Number(process.env.REQUEST_TIMEOUT_MS ?? 30000);

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function parseRetryAfter(value: string | null): number | undefined {
  if (!value) return undefined;
  if (/^\d+$/.test(value)) {
    return Number(value) * 1000;
  }
  const date = new Date(value);
  const diff = date.getTime() - Date.now();
  return isNaN(diff) ? undefined : Math.max(0, diff);
}

export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = REQUEST_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

export async function retry<T>(
  fn: () => Promise<T>,
  attempt = 1,
  context = 'API',
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (attempt > MAX_RETRIES) {
      log(`[${context}] Final attempt failed. Error: ${error}`, 'error');
      throw error;
    }
    const retryAfterMs = (error as any)?.retryAfterMs as number | undefined;
    const delay = typeof retryAfterMs === 'number' ? retryAfterMs : Math.pow(2, attempt) * 100;
    log(`[${context}] Attempt ${attempt} failed. Retrying in ${delay}ms...`);
    await sleep(delay);
    return retry(fn, attempt + 1, context);
  }
}

export function log(message: string, level: 'info' | 'warn' | 'error' = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
  switch (level) {
    case 'error':
      console.error(`${prefix} ${message}`);
      break;
    case 'warn':
      console.warn(`${prefix} ${message}`);
      break;
    default:
      console.log(`${prefix} ${message}`);
  }
}

export function parseTwitterDate(dateStr: string): string {
  return new Date(dateStr).toISOString();
}

export function isoToEpochMs(isoString: string): number {
  return new Date(isoString).getTime();
}

export async function ensureDir(dirPath: string): Promise<void> {
  const fs = await import('fs/promises');
  await fs.mkdir(dirPath, { recursive: true });
}

/** Remove null bytes that break PostgreSQL and other systems */
export function sanitizeString(str: string | null | undefined): string {
  if (!str) return '';
  return str.replace(/\x00/g, '');
}

/** Sanitize a query string for use as a filename */
export function sanitizeQueryForFilename(query: string): string {
  return query.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 60);
}

/** Parse comma-separated view count string: "1,234,567" -> 1234567 */
export function parseViewCount(views: string | undefined): number | undefined {
  if (!views) return undefined;
  const parsed = parseInt(views.replace(/,/g, ''), 10);
  return isNaN(parsed) ? undefined : parsed;
}
