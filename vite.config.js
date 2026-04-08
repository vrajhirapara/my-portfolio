import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '');
  const web3FormsKey =
    fileEnv.VITE_WEB3FORMS_ACCESS_KEY ||
    fileEnv.REACT_APP_WEB3FORMS_ACCESS_KEY ||
    '';

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(web3FormsKey),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
    },
  };
});
