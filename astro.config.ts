import react from "@astrojs/react";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";

/**
 * Serves the OG image frame at `/og` while developing, and never emits it into
 * a production build.
 *
 * `scripts/generate-og.ts` screenshots that route, so it has to be reachable
 * from a dev server — but a bare 600x315 preview frame is not a page a visitor
 * should be able to browse to. Keeping the component outside `src/pages/` stops
 * Astro from routing it automatically, and injecting it here only for `dev`
 * keeps the frame out of the production build.
 */
function ogPreviewRoute(): AstroIntegration {
  return {
    name: "og-preview-route",
    hooks: {
      "astro:config:setup": ({ command, injectRoute }) => {
        if (command !== "dev") return;
        injectRoute({ pattern: "/og", entrypoint: "./src/og/OgPage.astro" });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://koki.me",

  // The site shipped as an SPA under `/works` and `/notes` long before it was
  // static, and those URLs are what is linked from the outside. `file` emits
  // `works.html` instead of `works/index.html`, which — with `cleanUrls` in
  // vercel.json — Vercel serves at exactly that extensionless path.
  trailingSlash: "never",
  build: { format: "file" },

  integrations: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    ogPreviewRoute(),
  ],
});
