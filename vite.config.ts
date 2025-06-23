import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data'
    }
  },
  base: '/',
  build: {
    outDir: 'build',
    sourcemap: true
  }
});
