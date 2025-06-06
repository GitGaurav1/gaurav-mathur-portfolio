import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // using the plugin you already have

export default defineConfig({
  base: '/gaurav-mathur-portfolio/', // set this to your GitHub repo name
  plugins: [react()],
})
