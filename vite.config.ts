import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/starting-react/",
  build: {
    chunkSizeWarningLimit: 1600
  }
})
