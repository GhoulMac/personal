import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/personal/",
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})