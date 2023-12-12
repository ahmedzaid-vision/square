import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  plugins: [react()],
})
