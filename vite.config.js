import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Puerto propio para no chocar con nivel-3d (5180) ni sociedad (5173).
  server: { port: 5181, strictPort: false },
})
