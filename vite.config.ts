import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'photo-upload-handler',
          configureServer(server) {
            server.middlewares.use('/api/upload-photo', (req, res) => {
              if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                  try {
                    const data = JSON.parse(body);
                    if (data.image) {
                      const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');
                      const buffer = Buffer.from(base64Data, 'base64');
                      const publicDir = path.resolve(__dirname, 'public');
                      if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
                      fs.writeFileSync(path.resolve(publicDir, 'image.png'), buffer);
                      fs.writeFileSync(path.resolve(publicDir, 'kishor_photo.png'), buffer);
                      
                      const distDir = path.resolve(__dirname, 'dist');
                      if (fs.existsSync(distDir)) {
                        fs.writeFileSync(path.resolve(distDir, 'image.png'), buffer);
                        fs.writeFileSync(path.resolve(distDir, 'kishor_photo.png'), buffer);
                      }
                      
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true, url: '/image.png' }));
                      return;
                    }
                  } catch (e) {
                    console.error('Photo save error:', e);
                  }
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Failed to upload photo' }));
                });
              }
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
        'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
        'import.meta.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || '')
      },
      build: {
        target: 'esnext'
      },
      optimizeDeps: {
        esbuildOptions: {
          target: 'esnext'
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
