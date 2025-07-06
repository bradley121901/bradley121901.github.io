import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bradley121901.github.io/',
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.jsx'],
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
