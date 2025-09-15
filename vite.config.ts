import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteconfigpaths from "vite-tsconfig-paths";
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "utility",
      fileName: "index",
    },
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@utils": resolve(__dirname, "src/utils"),
      "@types": resolve(__dirname, "src/types"),
    },
  },
  plugins: [dts({ outDir: "dist" }), viteconfigpaths()],
});
