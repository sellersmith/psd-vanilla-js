import { defineConfig } from "vite";
import terser from '@rollup/plugin-terser';

export default defineConfig({
  build: {
    target: "esnext",
    minify: "esbuild",
    esbuild: {
      minifyIdentifiers: false, // Do not minify variable names
      minifySyntax: true, // Minify syntax only
      minifyWhitespace: true // Minify whitespace only
    },
    sourcemap: true,
    outDir: "dist",
    server: {
      mimeTypes: {
        "application/wasm": ["wasm"],
      },
    },

    rollupOptions: {
      input: "./index.js", // Adjust the path as needed
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "index.js",
        assetFileNames: "index.[ext]",
      },

    },

  },
});
