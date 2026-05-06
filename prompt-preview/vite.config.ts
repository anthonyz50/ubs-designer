import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

/**
 * Vite plugin: server-side URL fetch proxy.
 * Handles GET /api/fetch-page?url=<encoded-url> and returns the page HTML.
 * This avoids CORS issues when the Critique panel needs to fetch external pages.
 */
function fetchPageProxy(): Plugin {
  return {
    name: 'fetch-page-proxy',
    configureServer(server) {
      server.middlewares.use('/api/fetch-page', async (req, res) => {
        const url = new URL(req.url || '', 'http://localhost').searchParams.get('url');
        if (!url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing url parameter' }));
          return;
        }

        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 15000);

          const response = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
              Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'Accept-Language': 'en-GB,en;q=0.9',
            },
            redirect: 'follow',
            signal: controller.signal,
          });

          clearTimeout(timeout);

          if (!response.ok) {
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `Upstream returned ${response.status}` }));
            return;
          }

          const html = await response.text();
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
          });
          res.end(html);
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : 'Fetch failed';
          res.writeHead(502, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: message }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), fetchPageProxy()],
})
