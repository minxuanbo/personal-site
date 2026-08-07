import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base路径必须写仓库名字！末尾带斜杠
  base: '/personal-site/',
  plugins: [react()],
})
