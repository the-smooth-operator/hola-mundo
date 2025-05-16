import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://the-smooth-operator.github.io/hola-mundo/',
  build: {
    sourcemap: false, // Disable source maps to avoid source map errors
  },
})
