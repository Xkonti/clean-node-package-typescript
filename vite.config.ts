/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'clean-node-package-typescript',
      fileName: 'clean-node-package-typescript',
    },
  },
  plugins: [dts(), eslint()],
  test: {
    include: ['src/**/*.test.ts'],
  },
});