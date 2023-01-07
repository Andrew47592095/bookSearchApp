import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  define : {
    VITE_API_KEY : JSON.stringify('KEY :1054692824595627335'),
    VITE_BASE_URL : JSON.stringify('URL : https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json')
  }
})
