import react from '@vitejs/plugin-react-swc';
import { defineConfig as _defineConfig, loadEnv as _loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export const defineConfig = _defineConfig;
export const loadEnv = _loadEnv;
export default {
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  resolve: {
    alias: {},
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
  ],
};
