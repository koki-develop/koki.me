import "@ps1ui/core/styles.css";

import { PS1Root } from "@ps1ui/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OgImage } from "./OgImage";

// Not a page: no route, and deliberately absent from the IDE file list in
// src/components/ide/files.ts — this renders the social preview image, not
// something a visitor navigates to. `scripts/generate-og.ts` screenshots it,
// and `og.html` is left out of Vite's build inputs so it never ships to
// production.
//
// index.css is skipped on purpose: it only styles scrollbars, and nothing in
// a fixed-size 600x315 frame scrolls.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PS1Root>
      <OgImage />
    </PS1Root>
  </StrictMode>,
);
