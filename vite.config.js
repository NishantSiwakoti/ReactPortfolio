import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows the server to be accessible externally.
    port: 5173,       // Ensure this matches the port you are using.
    open: true        // Optional: Opens the browser automatically when you run the dev server.
  }
});
