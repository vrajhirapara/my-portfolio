import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Expose both prefixes so host CI (Netlify, Vercel, etc.) can set either name at build time via process.env.
export default defineConfig({
  envPrefix: ['VITE_', 'REACT_APP_'],
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
});
