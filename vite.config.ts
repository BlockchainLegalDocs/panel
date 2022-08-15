import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import nodePolyfills from 'rollup-plugin-polyfill-node';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({include: null})],
  define: {
    global: "window",
  },
  resolve:{
    alias:{
      '@@' : path.resolve(__dirname, './src/components'),
      '@' : path.resolve(__dirname, './src'),
    },
  }
})
