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
  base: '/gd-front/dist/',
  build: {
    target: 'es2015',
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
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    reportCompressedSize: false,
    emptyOutDir: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['axios', '@apollo/client', 'i18next', 'react-i18next'],
    exclude: ['@apollo/client/core']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://167.99.49.225',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      '/api/cj': {
        target: 'https://commission-detail.api.cj.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cj/, ''),
      },
    },
  },
})
