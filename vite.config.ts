// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mouakani_portfolio/',   // 👈 use your repo name here exactly
  plugins: [react()],
})
