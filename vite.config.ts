import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   ENV_API_KEY: JSON.stringify('KEY : 1054692824595627335'),
  // },
  // server : {
  //   port: 4022,
  // }
})
