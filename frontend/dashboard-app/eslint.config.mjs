import { defineConfig } from "eslint/config";
import nextConfig from "eslint-config-next";

export default defineConfig([
  nextConfig, // ← NO ES UNA FUNCIÓN, se usa como OBJETO
  {
    ignores: [
      ".next/**",
      "build/**",
      "out/**",
      "node_modules/**",
    ],

    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);
