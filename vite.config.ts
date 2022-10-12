/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    env: {
      CUSTOM_ENV: "true",
    },
    environment: "jsdom",
    setupFiles: "./src/testSetup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      all: true,
      clean: true,
      src: ["src"],
      exclude: ["src/testSetup.ts", "src/**/*.test.tsx", "*.d.ts", "src/main.tsx"],
      reporter: ["text", "html"],
      extension: [".ts", ".tsx"],
      functions: 100,
      statements: 100,
      lines: 100,
      branches: 100,
    },
    cache: false,
  },
});
