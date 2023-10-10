import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    rollupOptions: {
      input: {
        app: '/index.html',
      },
    },
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
});
