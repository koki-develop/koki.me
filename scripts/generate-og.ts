/// <reference lib="dom" />
// The callback handed to page.evaluate() below runs in the browser and touches
// document.fonts, but TypeScript checks it against this project — which is
// Node-only. Pulled in per-file rather than through tsconfig.node.json's `lib`
// so the rest of scripts/ still fails on an accidental `document`.

import { chromium } from "playwright";
import { createServer } from "vite";

// Half the 1200x630 OG frame, captured at 2x — see src/og/OgImage.module.css
// for why the image is scaled up rather than laid out at full size.
const VIEWPORT = { width: 600, height: 315 };
const DEVICE_SCALE_FACTOR = 2;

// ps1ui's font stack, checked by name: document.fonts.ready resolves happily
// even when the webfont never arrived and the text quietly fell back to the
// OS monospace, which would bake the wrong glyphs into the image.
const FONT = '16px "JetBrains Mono Variable"';

const OUTPUT_PATH = "./public/og.png";

// The dev server rather than a build: `prebuild` hits the Zenn and GitHub
// APIs, and the OG image needs none of that data. It also resolves the `@/…`
// aliases from vite.config.ts for free.
const server = await createServer();
await server.listen();

const url = server.resolvedUrls?.local[0];
if (!url) {
  throw new Error("vite dev server started without reporting a local url");
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
  });
  await page.goto(new URL("og.html", url).href, { waitUntil: "networkidle" });

  await page.evaluate(async (font) => {
    await document.fonts.load(font);
    await document.fonts.ready;
    if (!document.fonts.check(font)) {
      throw new Error(`${font} is not loadable — refusing to capture`);
    }
  }, FONT);

  await page.screenshot({ path: OUTPUT_PATH });
} finally {
  await browser.close();
  await server.close();
}

console.log(
  `${OUTPUT_PATH} (${VIEWPORT.width * DEVICE_SCALE_FACTOR}x${VIEWPORT.height * DEVICE_SCALE_FACTOR})`,
);
