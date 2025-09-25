// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Ouakani-Portfolio/',   // 👈 use your repo name here exactly
  plugins: [react()],
})
