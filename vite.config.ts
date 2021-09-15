import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (str: string):string => path.resolve(__dirname, str)

// https://cn.vitejs.dev/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // https://rollupjs.org/guide/en/#outputmanualchunks
        manualChunks: {
          vele: ['element-plus'],
          vlib: ['vue', 'vue-router', 'vuex']
        }
      }
    }
  },
  server: {
    // port: 4000,
    // open: true,
    proxy: {
      '/api': 'http://123.56.85.24:5000'
    },
    cors: true
  }
})
