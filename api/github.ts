import type { IncomingMessage, ServerResponse } from 'node:http';
import { fetchGitHubPortfolioData } from '../server/githubService.ts';

interface VercelRequest extends IncomingMessage {
  query?: Record<string, string | string[] | undefined>;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed. Use GET.' });
    return;
  }

  const rawUser = req.query?.username;
  const username = Array.isArray(rawUser) ? rawUser[0] : rawUser;
  const payload = await fetchGitHubPortfolioData(username);
  res.status(200).json(payload);
}
