import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function resolve (uri) {
  return path.resolve(__dirname, uri)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      'components': resolve('./src/components'),
      'assets': resolve('./src/assets')
    }
  },
  // css预处理器
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/scss/index.scss' as *`
      }
    }
  }
})
