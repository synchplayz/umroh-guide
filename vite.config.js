import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/umroh-guide/', // ganti sesuai nama repo GitHub kamu
})
