import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'axios': ['axios'],
          'apollo': ['@apollo/client'],
          'i18n': ['i18next', 'react-i18next'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['axios', '@apollo/client', 'i18next', 'react-i18next'],
    exclude: ['@apollo/client/core']
  },
  server: {
    proxy: {
      '/api/cj': {
        target: 'https://commission-detail.api.cj.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cj/, ''),
      },
    },
  },
})
