import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/S-LOP-V-P-ARA-K-RALAMA/', // GitHub Pages alt klasör yolu eklendi
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
