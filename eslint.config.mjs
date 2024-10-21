import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs["flat/recommended"],
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "indent": ["error", 2],
      "no-console": "warn",
      "@stylistic/js/quotes": ["warn", "double"],
      "@stylistic/js/no-multiple-empty-lines": ["warn", { "max": 1 }],
      "@stylistic/js/eol-last": ["error", "always"],
      "@stylistic/js/no-trailing-spaces": "error"
    }
  }
];