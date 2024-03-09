import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
    rollupOptions: {
      input: {
        main: './src/main.tsx' // Specify the entry point for your application
      }
    }
  }
});
