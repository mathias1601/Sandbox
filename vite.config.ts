import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sandbox/',
  server: {
    proxy: {
      "/randomwords": {
        target: "https://random-word-api.herokuapp.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/randomwords/, ""),  // Remove "/randomwords" prefix
      },
      "/trivia": {
        target: "https://the-trivia-api.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/trivia/, ""),  // Remove "/trivia" prefix
      },
    },
  },
  plugins: [react()],
});

