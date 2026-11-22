import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ExternalLink,
  FolderGit2,
  GitFork,
  Github,
  RefreshCw,
  Star,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface GitHubProfileData {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

interface GitHubRepoData {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

interface GitHubActivityItem {
  id: string;
  type: string;
  repoName: string;
  createdAt: string;
}

interface GitHubIntegrationPayload {
  source: 'live' | 'fallback';
  rateLimited?: boolean;
  fetchedAt: string;
  profile: GitHubProfileData;
  repos: GitHubRepoData[];
  activity: GitHubActivityItem[];
  languageSummary: { language: string; count: number }[];
}

function formatEventLabel(eventType: string): string {
  switch (eventType) {
    case 'PushEvent':
      return 'Pushed commits to';
    case 'CreateEvent':
      return 'Created branch/repo';
    case 'PublicEvent':
      return 'Made public';
    case 'WatchEvent':
      return 'Starred';
    case 'ForkEvent':
      return 'Forked';
    default:
      return eventType.replace(/Event$/, '') + ' on';
  }
}

export function GitHubSection() {
  const [data, setData] = useState<GitHubIntegrationPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadGitHub = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `/api/github?username=${encodeURIComponent(PROFILE.githubUsername)}`
      );
      if (!response.ok) {
        throw new Error('GitHub proxy returned non-200');
      }
      const payload = (await response.json()) as GitHubIntegrationPayload;
      setData(payload);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadGitHub();
  }, []);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-secondary)]">
            Open Source &amp; Repositories
          </p>
          <h2
            id="github-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            GitHub Activity &amp; Repositories
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Live integration with GitHub showing public repositories, detected languages, and
            recent engineering activity.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => void loadGitHub()}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`}
              aria-hidden="true"
            />
            <span>Refresh</span>
          </button>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold hover:brightness-110 transition-all whitespace-nowrap"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
            <span>@{PROFILE.githubUsername}</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {loading && !data ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] animate-pulse" />
          <div className="lg:col-span-8 h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] animate-pulse" />
        </div>
      ) : error || !data ? (
        <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 text-center space-y-3">
          <Github className="w-8 h-8 text-[var(--accent)] mx-auto" aria-hidden="true" />
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            GitHub API temporarily unavailable
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Unable to load live repository data right now. You can visit the profile directly on
            GitHub.
          </p>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold"
          >
            <span>Open github.com/{PROFILE.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Profile & Activity Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 space-y-5 shadow-[var(--shadow-card)] theme-surface"
          >
            <div className="flex items-center gap-3.5">
              {data.profile.avatarUrl ? (
                <img
                  src={data.profile.avatarUrl}
                  alt={`${data.profile.name} GitHub avatar`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full border border-[var(--border-strong)] object-cover bg-[var(--bg-secondary)]"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-[var(--accent-soft)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)]">
                  <Github className="w-6 h-6" aria-hidden="true" />
                </div>
              )}

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] truncate">
                  {data.profile.name}
                </h3>
                <p className="font-mono text-xs text-[var(--accent)] truncate">
                  @{data.profile.login}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {data.profile.bio}
            </p>

            {/* Clean Tabular Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[var(--border-subtle)] text-center">
              <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <p className="font-mono text-base font-semibold tabular-nums text-[var(--text-primary)]">
                  {data.profile.publicRepos}
                </p>
                <p className="font-mono text-[11px] text-[var(--text-muted)]">Repos</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <p className="font-mono text-base font-semibold tabular-nums text-[var(--text-primary)]">
                  {data.profile.followers}
                </p>
                <p className="font-mono text-[11px] text-[var(--text-muted)]">Followers</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <p className="font-mono text-base font-semibold tabular-nums text-[var(--text-primary)]">
                  {data.profile.following}
                </p>
                <p className="font-mono text-[11px] text-[var(--text-muted)]">Following</p>
              </div>
            </div>

            {/* Languages Summary */}
            {data.languageSummary.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Detected Languages
                </p>
                <p className="font-mono text-xs text-[var(--text-secondary)]">
                  {data.languageSummary.map((l) => `${l.language} (${l.count})`).join(' · ')}
                </p>
              </div>
            )}

            {/* Recent Contribution Activity */}
            <div className="space-y-2.5 pt-2 border-t border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  <span>Recent Activity</span>
                </p>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {data.source === 'live' ? 'Live API' : 'Cached'}
                </span>
              </div>

              {data.activity.length > 0 ? (
                <ul className="space-y-2">
                  {data.activity.slice(0, 3).map((evt) => (
                    <li
                      key={evt.id}
                      className="text-xs text-[var(--text-secondary)] flex items-baseline justify-between gap-2"
                    >
                      <span className="truncate">
                        {formatEventLabel(evt.type)}{' '}
                        <span className="font-mono text-[var(--accent)]">
                          {evt.repoName.replace(`${PROFILE.githubUsername}/`, '')}
                        </span>
                      </span>
                      <span className="font-mono text-[11px] text-[var(--text-muted)] shrink-0">
                        {new Date(evt.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-[var(--text-muted)]">
                  {data.rateLimited
                    ? 'GitHub API rate limit reached; showing repository snapshot.'
                    : 'No recent public events recorded.'}
                </p>
              )}
            </div>
          </motion.div>

          {/* Featured Repositories Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.34,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] p-5 flex flex-col justify-between gap-4 shadow-[var(--shadow-card)] transition-colors theme-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <FolderGit2
                        className="w-4 h-4 text-[var(--accent)] shrink-0"
                        aria-hidden="true"
                      />
                      <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink
                      className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)]">
                  <span>{repo.language || 'Documentation / Lab'}</span>

                  <div className="flex items-center gap-3 tabular-nums">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" aria-hidden="true" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
