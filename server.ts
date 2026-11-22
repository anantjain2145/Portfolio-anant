import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import {
  handleChatRequest,
  isGeminiConfigured,
  validateChatPayload,
} from './server/portfolioKnowledge.ts';
import { fetchGitHubPortfolioData } from './server/githubService.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 3000);
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '16kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      ok: true,
      geminiConfigured: isGeminiConfigured(),
    });
  });

  app.get('/api/github', async (req: Request, res: Response) => {
    const payload = await fetchGitHubPortfolioData(req.query.username);
    res.json(payload);
  });

  app.post('/api/chat', async (req: Request, res: Response) => {
    const validation = validateChatPayload(req.body);
    if (!validation.valid || !validation.message) {
      res.status(400).json({ error: validation.error || 'Invalid request payload.' });
      return;
    }

    try {
      const result = await handleChatRequest(validation.message, validation.history);
      res.json(result);
    } catch (error: unknown) {
      const status =
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        typeof (error as { status?: unknown }).status === 'number'
          ? (error as { status: number }).status
          : 502;

      console.error('Gemini API request failed:', error);
      res.status(status >= 400 && status < 600 ? status : 502).json({
        error: 'Unable to reach Gemini AI right now. You can continue using Demo Mode.',
      });
    }
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('/{*path}', (_req: Request, res: Response) => {
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
