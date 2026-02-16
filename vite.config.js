import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'Hooks': path.resolve(__dirname, './src/Hooks'),
      'utils': path.resolve(__dirname, './src/utils'),
      'routes': path.resolve(__dirname, './src/routes'),
      'pages': path.resolve(__dirname, './src/pages'),
      'contexts': path.resolve(__dirname, './src/contexts'),
      'store': path.resolve(__dirname, './src/store'),
      'assets': path.resolve(__dirname, './src/assets'),
      'configuration': path.resolve(__dirname, './src/configuration'),
      'constants': path.resolve(__dirname, './src/constants'),
      'i18n': path.resolve(__dirname, './src/i18n'),
      'layouts': path.resolve(__dirname, './src/layouts'),
    },
  },
  server: {
    port: 3001,
  },
})
