import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/parcel-ledger/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
