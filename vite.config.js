import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/ieee-smart-cities/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.jpg'], // Add this line
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  }
})

