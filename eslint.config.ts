import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import simpleimportsort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default defineConfig([
  {
    files: ["src/**/*.{ts,tsx}"], // Solo archivos dentro de src
    plugins: { "simple-import-sort": simpleimportsort },
    languageOptions: { globals: globals.browser },
    rules: {
      // Estilo de código
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],

      // Calidad de código / errores comunes
      "no-unused-vars": ["warn"],
      "no-undef": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      // Organización de imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  tseslint.configs.recommended,
]);
