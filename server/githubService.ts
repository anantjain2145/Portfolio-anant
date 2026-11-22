export interface GitHubProfileData {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export interface GitHubRepoData {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export interface GitHubActivityItem {
  id: string;
  type: string;
  repoName: string;
  createdAt: string;
}

export interface GitHubIntegrationPayload {
  source: 'live' | 'fallback';
  rateLimited?: boolean;
  fetchedAt: string;
  profile: GitHubProfileData;
  repos: GitHubRepoData[];
  activity: GitHubActivityItem[];
  languageSummary: { language: string; count: number }[];
}

const DEFAULT_GITHUB_USERNAME = 'anantjain2145';
const CACHE_TTL_MS = 5 * 60 * 1000;

interface CacheEntry {
  expiresAt: number;
  payload: GitHubIntegrationPayload;
}

const cache = new Map<string, CacheEntry>();

function buildFallbackPayload(rateLimited = false): GitHubIntegrationPayload {
  return {
    source: 'fallback',
    rateLimited,
    fetchedAt: new Date().toISOString(),
    profile: {
      login: DEFAULT_GITHUB_USERNAME,
      name: 'Anant Jain',
      bio: 'B.Tech CSE-AIML Student @ GLA University | Exploring AI, ML & Software Development',
      avatarUrl: '',
      htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}`,
      publicRepos: 4,
      followers: 0,
      following: 0,
    },
    repos: [
      {
        id: 1,
        name: 'Portfolio-anant',
        description: 'Interactive developer portfolio built with React, TypeScript, Tailwind CSS, and Gemini AI.',
        htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}/Portfolio-anant`,
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: 'google-ai',
        description: 'Exploratory repository for AI experiments and learning projects.',
        htmlUrl: `https://github.com/${DEFAULT_GITHUB_USERNAME}/google-ai`,
        language: null,
        stars: 0,
        forks: 0,
        updatedAt: new Date().toISOString(),
      },
    ],
    activity: [],
    languageSummary: [{ language: 'TypeScript', count: 1 }],
  };
}

export function sanitizeGithubUsername(raw: unknown): string {
  if (typeof raw === 'string' && /^[a-zA-Z0-9-]{1,39}$/.test(raw.trim())) {
    return raw.trim();
  }
  return DEFAULT_GITHUB_USERNAME;
}

export async function fetchGitHubPortfolioData(
  requestedUsername?: unknown
): Promise<GitHubIntegrationPayload> {
  const username = sanitizeGithubUsername(requestedUsername);
  const now = Date.now();
  const cached = cache.get(username);
  if (cached && cached.expiresAt > now) {
    return cached.payload;
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'anant-jain-portfolio',
  };

  try {
    const encodedUser = encodeURIComponent(username);
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodedUser}`, {
        headers,
        signal: AbortSignal.timeout(5000),
      }),
      fetch(`https://api.github.com/users/${encodedUser}/repos?sort=updated&per_page=6`, {
        headers,
        signal: AbortSignal.timeout(5000),
      }),
      fetch(`https://api.github.com/users/${encodedUser}/events/public?per_page=8`, {
        headers,
        signal: AbortSignal.timeout(5000),
      }),
    ]);

    if (userRes.status === 403 || userRes.status === 429 || !userRes.ok) {
      return buildFallbackPayload(userRes.status === 403 || userRes.status === 429);
    }

    const userJson = (await userRes.json()) as Record<string, unknown>;
    const reposJson = reposRes.ok ? ((await reposRes.json()) as unknown) : [];
    const eventsJson = eventsRes.ok ? ((await eventsRes.json()) as unknown) : [];

    const repos: GitHubRepoData[] = Array.isArray(reposJson)
      ? reposJson
          .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
          .slice(0, 6)
          .map((repo, idx) => ({
            id: typeof repo.id === 'number' ? repo.id : idx + 1,
            name: typeof repo.name === 'string' ? repo.name : 'repository',
            description:
              typeof repo.description === 'string' && repo.description.trim()
                ? repo.description.trim()
                : 'Repository hosted on GitHub.',
            htmlUrl:
              typeof repo.html_url === 'string' && repo.html_url.startsWith('https://github.com/')
                ? repo.html_url
                : `https://github.com/${username}`,
            language: typeof repo.language === 'string' ? repo.language : null,
            stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
            forks: typeof repo.forks_count === 'number' ? repo.forks_count : 0,
            updatedAt:
              typeof repo.updated_at === 'string' ? repo.updated_at : new Date().toISOString(),
          }))
      : [];

    const langCounts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.language) {
        langCounts.set(repo.language, (langCounts.get(repo.language) ?? 0) + 1);
      }
    }

    const activity: GitHubActivityItem[] = Array.isArray(eventsJson)
      ? eventsJson
          .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
          .slice(0, 5)
          .map((evt, idx) => {
            const repoObj =
              evt.repo && typeof evt.repo === 'object'
                ? (evt.repo as Record<string, unknown>)
                : null;
            return {
              id: typeof evt.id === 'string' ? evt.id : `evt-${idx}`,
              type: typeof evt.type === 'string' ? evt.type : 'ActivityEvent',
              repoName:
                repoObj && typeof repoObj.name === 'string'
                  ? repoObj.name
                  : `${username}/repo`,
              createdAt:
                typeof evt.created_at === 'string'
                  ? evt.created_at
                  : new Date().toISOString(),
            };
          })
      : [];

    const payload: GitHubIntegrationPayload = {
      source: 'live',
      fetchedAt: new Date().toISOString(),
      profile: {
        login: typeof userJson.login === 'string' ? userJson.login : username,
        name: typeof userJson.name === 'string' && userJson.name ? userJson.name : 'Anant Jain',
        bio:
          typeof userJson.bio === 'string' && userJson.bio
            ? userJson.bio
            : 'B.Tech CSE-AIML Student @ GLA University | Exploring AI, ML & Software Development',
        avatarUrl:
          typeof userJson.avatar_url === 'string' &&
          userJson.avatar_url.startsWith('https://')
            ? userJson.avatar_url
            : '',
        htmlUrl:
          typeof userJson.html_url === 'string' &&
          userJson.html_url.startsWith('https://github.com/')
            ? userJson.html_url
            : `https://github.com/${username}`,
        publicRepos:
          typeof userJson.public_repos === 'number' ? userJson.public_repos : repos.length,
        followers: typeof userJson.followers === 'number' ? userJson.followers : 0,
        following: typeof userJson.following === 'number' ? userJson.following : 0,
      },
      repos,
      activity,
      languageSummary: Array.from(langCounts.entries()).map(([language, count]) => ({
        language,
        count,
      })),
    };

    cache.set(username, {
      expiresAt: now + CACHE_TTL_MS,
      payload,
    });

    return payload;
  } catch {
    return buildFallbackPayload(false);
  }
}
