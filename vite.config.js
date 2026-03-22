import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  envPrefix: ['VITE_', 'REACT_APP_'],
});
