import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Automatically detect deployment environment:
// - Vercel: process.env.VERCEL is set ("1"), so base must be "/"
// - GitHub Actions: process.env.GITHUB_ACTIONS is "true", so base is "/PORTFOLIO/"
// - Local dev or direct Vercel CLI: default to "/"
const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = Boolean(process.env.GITHUB_ACTIONS);
const basePath = process.env.VITE_BASE_PATH || (isVercel ? '/' : (isGitHubActions ? '/PORTFOLIO/' : '/'));

export default defineConfig({
  plugins: [react()],
  base: basePath,
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vendor: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
  },
  envPrefix: ['VITE_', 'REACT_APP_'],
});
