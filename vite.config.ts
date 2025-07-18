import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/elevanto-ai/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@mocks': '/src/mocks',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@interfaces': '/src/interfaces',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@shared': '/src/shared',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@api': '/src/api',
      '@app-types': '/src/app-types',
    },
  },
  server: {
    port: 3000,
  },
});
