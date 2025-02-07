import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 plugins: [react()],
   server: {
    host: true,  // Allows access from external IPs
    port: 5174,  // Ensure this matches the port you want to use
  },
})
