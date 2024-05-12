import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    outDir: "dist",
    rollupOptions: {
      input: "./index.js", // Adjust the path as needed
    },
  },
});
