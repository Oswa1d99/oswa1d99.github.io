import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const pagefindRoot = join(process.cwd(), 'dist', 'pagefind');

function pagefindDevAssets() {
  return {
    name: 'pagefind-dev-assets',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.startsWith('/pagefind/')) {
            next();
            return;
          }
          if (!existsSync(pagefindRoot)) {
            next();
            return;
          }

          const pathname = new URL(req.url, 'http://localhost').pathname;
          const relativePath = decodeURIComponent(pathname.replace(/^\/pagefind\//, ''));
          const filePath = normalize(join(pagefindRoot, relativePath));
          if (!filePath.startsWith(pagefindRoot)) {
            next();
            return;
          }

          try {
            const fileStat = await stat(filePath);
            if (!fileStat.isFile()) {
              next();
              return;
            }
          } catch {
            next();
            return;
          }

          const contentTypes = {
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.wasm': 'application/wasm',
          };
          res.setHeader('Content-Type', contentTypes[extname(filePath)] || 'application/octet-stream');
          createReadStream(filePath).pipe(res);
        });
      },
    },
  };
}

export default defineConfig({
  site: 'https://jaybaek.github.io',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [sitemap(), pagefindDevAssets()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
    rehypePlugins: [
      function addImageAttrs() {
        return function(tree) {
          function visit(node) {
            if (node.tagName === 'img' && node.properties) {
              node.properties.loading = 'lazy';
              node.properties.decoding = 'async';
            }
            if (node.children) {
              for (const child of node.children) visit(child);
            }
          }
          visit(tree);
        };
      },
    ],
  },
});
