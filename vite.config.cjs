const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
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
    sourcemap: false,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: undefined
      }
    }
  },
  framework: 'react'
});
