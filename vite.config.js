import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://the-smooth-operator.github.io/hola-mundo/',
  plugins: [react()],
})
