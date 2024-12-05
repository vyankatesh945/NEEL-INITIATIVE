import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  logLevel: 'debug',
  base: "./",
  server: {
    port: 5173,  // Explicitly set the port to 5173
  },
  resolve: {
    alias: {
      '@OngoingProjects': '/src/components/OngoingProjects',
    },
  },
})