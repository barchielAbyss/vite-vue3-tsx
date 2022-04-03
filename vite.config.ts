/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'

const pathResolve = (pathStr: string) => {
  return resolve(__dirname, pathStr)
}

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  envPrefix: 'VITE_',
  plugins: [vue(), vueJsx(), dts()],
  build: {
    lib: {
      entry: pathResolve('./src/main.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
