import { describe, it, expect } from 'vitest';
import { parseUserProfile } from '../src/api.js';
import { profileToJson, profileToMarkdown } from '../src/formatters.js';
import type { UserProfile } from '../src/types/index.js';

// ─── Fixture: full API 283 /UserResultByScreenName response ─────────────────

const solanaResponse = {
  data: {
    user_results: {
      rest_id: '951329744804392960',
      result: {
        __typename: 'User',
        rest_id: '951329744804392960',
        core: {
          created_at: 'Thu Jan 11 05:47:40 +0000 2018',
          name: 'Solana',
          screen_name: 'solana',
        },
        avatar: {
          image_url: 'https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_normal.jpg',
        },
        banner: {
          image_url: 'https://pbs.twimg.com/profile_banners/951329744804392960/1709050744',
        },
        action_counts: {
          favorites_count: 10402,
        },
        relationship_counts: {
          followers: 2513624,
          following: 1063,
        },
        tweet_counts: {
          media_tweets: 727,
          tweets: 8008,
        },
        verification: {
          is_blue_verified: true,
          verified_type: 'Business',
        },
        profile_image_shape: 'Square',
        location: {
          location: 'Switzerland',
        },
        profile_bio: {
          description: 'Solana is a blockchain built for mass adoption',
          entities: {
            description: {
              user_mentions: [],
            },
            url: {
              urls: [
                {
                  display_url: 'solana.com',
                  expanded_url: 'http://solana.com',
                  indices: [0, 0],
                  url: 'https://t.co/uk5hidtSx5',
                },
              ],
            },
          },
        },
        website: {
          url: 'https://t.co/uk5hidtSx5',
        },
        pinned_items: {
          tweet_ids_str: ['1762509355637719261'],
        },
      },
    },
  },
};

describe('parseUserProfile', () => {
  it('parses a full profile response', () => {
    const profile = parseUserProfile(solanaResponse, 'solana');
    expect(profile.id).toBe('951329744804392960');
    expect(profile.handle).toBe('solana');
    expect(profile.name).toBe('Solana');
    expect(profile.bio).toBe('Solana is a blockchain built for mass adoption');
    expect(profile.location).toBe('Switzerland');
    expect(profile.website).toBe('http://solana.com');
    expect(profile.avatarUrl).toContain('_400x400');
    expect(profile.avatarUrl).not.toContain('_normal');
    expect(profile.bannerUrl).toBeTruthy();
    expect(profile.createdAt).toBe('2018-01-11T05:47:40.000Z');
    expect(profile.followerCount).toBe(2513624);
    expect(profile.followingCount).toBe(1063);
    expect(profile.tweetCount).toBe(8008);
    expect(profile.mediaCount).toBe(727);
    expect(profile.likeCount).toBe(10402);
    expect(profile.isVerified).toBe(true);
    expect(profile.verifiedType).toBe('Business');
    expect(profile.pinnedTweetIds).toEqual(['1762509355637719261']);
    expect(profile.profileImageShape).toBe('Square');
  });

  it('throws for user not found', () => {
    const emptyResponse = { data: { user_results: { result: null } } };
    expect(() => parseUserProfile(emptyResponse, 'nobody')).toThrow('User not found: @nobody');
  });

  it('throws for non-User typename', () => {
    const suspended = {
      data: {
        user_results: {
          result: { __typename: 'UserUnavailable', reason: 'Suspended' },
        },
      },
    };
    expect(() => parseUserProfile(suspended, 'baduser')).toThrow('User not found: @baduser');
  });

  it('handles missing optional fields', () => {
    const minimal = {
      data: {
        user_results: {
          result: {
            __typename: 'User',
            rest_id: '111',
            core: {
              created_at: 'Mon Jan 01 00:00:00 +0000 2024',
              name: 'Minimal',
              screen_name: 'minimal',
            },
            // No avatar, banner, bio, location, website, verification, etc.
          },
        },
      },
    };
    const profile = parseUserProfile(minimal, 'minimal');
    expect(profile.id).toBe('111');
    expect(profile.handle).toBe('minimal');
    expect(profile.name).toBe('Minimal');
    expect(profile.bio).toBe('');
    expect(profile.location).toBe('');
    expect(profile.website).toBeNull();
    expect(profile.bannerUrl).toBeNull();
    expect(profile.followerCount).toBe(0);
    expect(profile.followingCount).toBe(0);
    expect(profile.tweetCount).toBe(0);
    expect(profile.mediaCount).toBe(0);
    expect(profile.likeCount).toBe(0);
    expect(profile.isVerified).toBe(false);
    expect(profile.verifiedType).toBeNull();
    expect(profile.pinnedTweetIds).toEqual([]);
    expect(profile.profileImageShape).toBe('Circle');
  });

  it('sanitizes null bytes in bio', () => {
    const response = {
      data: {
        user_results: {
          result: {
            __typename: 'User',
            rest_id: '222',
            core: {
              created_at: 'Mon Jan 01 00:00:00 +0000 2024',
              name: 'NullByte',
              screen_name: 'nullbyte',
            },
            profile_bio: {
              description: 'Hello\x00World',
              entities: {},
            },
          },
        },
      },
    };
    const profile = parseUserProfile(response, 'nullbyte');
    expect(profile.bio).toBe('HelloWorld');
  });

  it('extracts website from bio entities', () => {
    const response = {
      data: {
        user_results: {
          result: {
            __typename: 'User',
            rest_id: '333',
            core: {
              created_at: 'Mon Jan 01 00:00:00 +0000 2024',
              name: 'WithSite',
              screen_name: 'withsite',
            },
            profile_bio: {
              description: 'Check my site',
              entities: {
                url: {
                  urls: [
                    {
                      display_url: 'example.com',
                      expanded_url: 'https://example.com/path',
                      url: 'https://t.co/abc123',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    };
    const profile = parseUserProfile(response, 'withsite');
    expect(profile.website).toBe('https://example.com/path');
  });

  it('returns null website when no URL entities exist', () => {
    const response = {
      data: {
        user_results: {
          result: {
            __typename: 'User',
            rest_id: '444',
            core: {
              created_at: 'Mon Jan 01 00:00:00 +0000 2024',
              name: 'NoSite',
              screen_name: 'nosite',
            },
            profile_bio: {
              description: 'No website here',
              entities: {
                url: { urls: [] },
              },
            },
          },
        },
      },
    };
    const profile = parseUserProfile(response, 'nosite');
    expect(profile.website).toBeNull();
  });
});

describe('profileToJson', () => {
  const profile: UserProfile = {
    id: '123',
    handle: 'testuser',
    name: 'Test User',
    bio: 'A test bio',
    location: 'Earth',
    website: 'https://example.com',
    avatarUrl: 'https://pbs.twimg.com/avatar_400x400.jpg',
    bannerUrl: 'https://pbs.twimg.com/banner.jpg',
    createdAt: '2020-01-01T00:00:00.000Z',
    followerCount: 1000,
    followingCount: 500,
    tweetCount: 2000,
    mediaCount: 100,
    likeCount: 5000,
    isVerified: true,
    verifiedType: 'Business',
    pinnedTweetIds: ['999'],
    profileImageShape: 'Circle',
  };

  it('roundtrips through JSON', () => {
    const json = profileToJson(profile);
    const parsed = JSON.parse(json);
    expect(parsed.id).toBe('123');
    expect(parsed.handle).toBe('testuser');
    expect(parsed.followerCount).toBe(1000);
    expect(parsed.pinnedTweetIds).toEqual(['999']);
  });
});

describe('profileToMarkdown', () => {
  const profile: UserProfile = {
    id: '123',
    handle: 'solana',
    name: 'Solana',
    bio: 'Blockchain for mass adoption',
    location: 'Switzerland',
    website: 'http://solana.com',
    avatarUrl: 'https://pbs.twimg.com/avatar_400x400.jpg',
    bannerUrl: 'https://pbs.twimg.com/banner.jpg',
    createdAt: '2018-01-11T05:47:40.000Z',
    followerCount: 2513624,
    followingCount: 1063,
    tweetCount: 8008,
    mediaCount: 727,
    likeCount: 10402,
    isVerified: true,
    verifiedType: 'Business',
    pinnedTweetIds: ['1762509355637719261'],
    profileImageShape: 'Square',
  };

  it('contains header with name and handle', () => {
    const md = profileToMarkdown(profile);
    expect(md).toContain('# Solana (@solana)');
  });

  it('contains verified badge with type', () => {
    const md = profileToMarkdown(profile);
    expect(md).toContain('**Verified:** ✓ Business');
  });

  it('contains bio, location, website', () => {
    const md = profileToMarkdown(profile);
    expect(md).toContain('**Bio:** Blockchain for mass adoption');
    expect(md).toContain('**Location:** Switzerland');
    expect(md).toContain('**Website:** http://solana.com');
  });

  it('contains stats table', () => {
    const md = profileToMarkdown(profile);
    expect(md).toContain('| Followers | Following | Tweets | Media | Likes |');
    expect(md).toContain('2,513,624');
    expect(md).toContain('1,063');
    expect(md).toContain('8,008');
  });

  it('contains profile link', () => {
    const md = profileToMarkdown(profile);
    expect(md).toContain('https://x.com/solana');
  });

  it('omits verified line when not verified', () => {
    const unverified = { ...profile, isVerified: false, verifiedType: null };
    const md = profileToMarkdown(unverified);
    expect(md).not.toContain('Verified');
  });

  it('omits website when null', () => {
    const noSite = { ...profile, website: null };
    const md = profileToMarkdown(noSite);
    expect(md).not.toContain('**Website:**');
  });

  it('shows verified without type when type is null', () => {
    const blueOnly = { ...profile, verifiedType: null };
    const md = profileToMarkdown(blueOnly);
    expect(md).toContain('**Verified:** ✓');
    expect(md).not.toContain('Business');
  });
});
