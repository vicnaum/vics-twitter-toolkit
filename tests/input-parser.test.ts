import { describe, it, expect } from 'vitest';
import { parseInput, parseTweetId, parseUsername } from '../src/utils/input-parser.js';

describe('parseInput', () => {
  it('parses x.com tweet URL', () => {
    const result = parseInput('https://x.com/user/status/1234567890');
    expect(result).toEqual({ type: 'tweet_id', id: '1234567890' });
  });

  it('parses twitter.com tweet URL', () => {
    const result = parseInput('https://twitter.com/elonmusk/status/9876543210');
    expect(result).toEqual({ type: 'tweet_id', id: '9876543210' });
  });

  it('strips query params from tweet URL', () => {
    const result = parseInput('https://x.com/user/status/1234567890?s=20&t=abc');
    expect(result).toEqual({ type: 'tweet_id', id: '1234567890' });
  });

  it('parses profile URL', () => {
    const result = parseInput('https://x.com/elonmusk');
    expect(result).toEqual({ type: 'username', username: 'elonmusk' });
  });

  it('parses profile URL with trailing slash', () => {
    const result = parseInput('https://x.com/elonmusk/');
    expect(result).toEqual({ type: 'username', username: 'elonmusk' });
  });

  it('parses bare tweet ID', () => {
    const result = parseInput('2019212107020136611');
    expect(result).toEqual({ type: 'tweet_id', id: '2019212107020136611' });
  });

  it('parses @username', () => {
    const result = parseInput('@testuser99');
    expect(result).toEqual({ type: 'username', username: 'testuser99' });
  });

  it('parses bare username', () => {
    const result = parseInput('testuser99');
    expect(result).toEqual({ type: 'username', username: 'testuser99' });
  });

  it('trims whitespace', () => {
    const result = parseInput('  1234567890  ');
    expect(result).toEqual({ type: 'tweet_id', id: '1234567890' });
  });

  it('returns unknown for invalid input', () => {
    const result = parseInput('not a valid input!!!');
    expect(result).toEqual({ type: 'unknown', raw: 'not a valid input!!!' });
  });
});

describe('parseTweetId', () => {
  it('extracts ID from URL', () => {
    expect(parseTweetId('https://x.com/user/status/123')).toBe('123');
  });

  it('passes through bare ID', () => {
    expect(parseTweetId('123456789')).toBe('123456789');
  });

  it('throws on username input', () => {
    expect(() => parseTweetId('@elonmusk')).toThrow('Expected a tweet ID');
  });
});

describe('parseUsername', () => {
  it('extracts username from profile URL', () => {
    expect(parseUsername('https://x.com/testuser99')).toBe('testuser99');
  });

  it('strips @ prefix', () => {
    expect(parseUsername('@testuser99')).toBe('testuser99');
  });

  it('throws on tweet ID input', () => {
    expect(() => parseUsername('1234567890')).toThrow('got a tweet ID');
  });
});
