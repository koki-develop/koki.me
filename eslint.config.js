import js from "@eslint/js";
import astroParser from "astro-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  [
    globalIgnores(["dist", ".astro"]),
    {
      files: ["**/*.{ts,tsx}"],
      // eslint-plugin-astro's processor hands each `<script>` in an .astro file
      // to ESLint as a virtual `Foo.astro/1_1.ts`, which this glob would
      // otherwise claim — and the type-checked rules below would then demand a
      // TypeScript program for a file that is not in one. The astro configs at
      // the bottom lint those blocks instead.
      ignores: ["**/*.astro/*"],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommendedTypeChecked,
        react.configs.flat.recommended,
        react.configs.flat["jsx-runtime"],
        reactHooks.configs.flat.recommended,
        reactRefresh.configs.vite,
      ],
      // Spread rather than extending `jsxA11y.flatConfigs.recommended`: that
      // preset registers the plugin as a wrapper object, eslint-plugin-astro
      // registers the package's default export, and flat config rejects the
      // same plugin name bound to two different objects. Registering the
      // default export here is what makes the two agree.
      plugins: { "jsx-a11y": jsxA11y },
      languageOptions: {
        parserOptions: {
          project: ["./tsconfig.json", "./tsconfig.node.json"],
          tsconfigRootDir: import.meta.dirname,
          ecmaFeatures: { jsx: true },
        },
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      rules: jsxA11y.flatConfigs.recommended.rules,
    },
    // The syntax set, plus jsx-a11y over the template — which is where the
    // site's chrome markup now lives.
    astro.configs["flat/recommended"],
    astro.configs["flat/jsx-a11y-recommended"],
    // …and the same type-checked rules the .tsx files get, over the frontmatter.
    // `extraFileExtensions` is what lets typescript-eslint pull an .astro file
    // into the program; `parser` has to be restored here because extending a
    // typescript-eslint preset sets it back to the plain TS parser, which cannot
    // read an .astro file at all.
    //
    // This reaches the frontmatter only. A `<script>` block is handed to ESLint
    // as a virtual `Foo.astro/1_1.ts` that no tsconfig can include, so the
    // browser code in Gutter.astro stays on the syntax-only rules.
    {
      files: ["**/*.astro"],
      extends: [tseslint.configs.recommendedTypeChecked],
      languageOptions: {
        parser: astroParser,
        parserOptions: {
          parser: tseslint.parser,
          project: ["./tsconfig.json"],
          tsconfigRootDir: import.meta.dirname,
          extraFileExtensions: [".astro"],
        },
      },
    },
  ],
  eslintConfigPrettier,
);
