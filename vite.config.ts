import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src/') }
  },
  server: {
    port: 3000
  }
});
