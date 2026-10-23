import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project URL: https://<owner>.github.io/<repository>/
  base: '/ing-irregularverbs/',
});
