import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      srcDir: 'src',
      filename: 'service-worker.js',
      manifest: 'public/manifest.json',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  build: {
    outDir: 'build', // keep the same output dir as CRA
  },
  server: {
    open: true,
  },
}); 