import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_FIREBASE_API_KEY': process.env.VITE_FIREBASE_API_KEY,
    'process.env.VITE_FIREBASE_AUTH_DOMAIN': process.env.VITE_FIREBASE_AUTH_DOMAIN,
    'process.env.VITE_FIREBASE_PROJECT_ID': process.env.VITE_FIREBASE_PROJECT_ID,
    'process.env.VITE_FIREBASE_STORAGE_BUCKET': process.env.VITE_FIREBASE_STORAGE_BUCKET,
    'process.env.VITE_FIREBASE_MESSAGING_SENDER_ID': process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    'process.env.VITE_FIREBASE_APP_ID': process.env.VITE_FIREBASE_APP_ID,
    'process.env.VITE_FIREBASE_MEASUREMENT_ID': process.env.VITE_FIREBASE_ME
  }
})
