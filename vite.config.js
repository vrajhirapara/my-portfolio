import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function readWeb3KeyFromSiteConfig() {
  try {
    const filePath = path.resolve(process.cwd(), 'public/site-config.json');
    if (!fs.existsSync(filePath)) return '';
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return typeof data.web3formsAccessKey === 'string' ? data.web3formsAccessKey.trim() : '';
  } catch {
    return '';
  }
}

// Merge env (CI / .env.local) with optional public/site-config.json so static hosts work without build secrets.
export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '');
  const web3Key =
    (process.env.VITE_WEB3FORMS_ACCESS_KEY || fileEnv.VITE_WEB3FORMS_ACCESS_KEY || '').trim() ||
    (process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || fileEnv.REACT_APP_WEB3FORMS_ACCESS_KEY || '').trim() ||
    readWeb3KeyFromSiteConfig();

  return {
    envPrefix: ['VITE_', 'REACT_APP_'],
    plugins: [react()],
    define: {
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(web3Key),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
    },
  };
});
