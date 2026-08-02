import { dev } from "astro";
import { chromium } from "playwright";

// The callback handed to page.evaluate() below runs in the browser and touches
// document.fonts, but TypeScript checks it against this project — which is
// Node-only.
//
// Declared rather than pulled in with `/// <reference lib="dom" />`: that
// directive adds the DOM to the *whole* tsconfig.node.json program, not to the
// file it sits in, so it would quietly let an accidental `document` through
// anywhere in scripts/. This binding is module-scoped, which is what keeps that
// guard real, and narrowing it to the one API in use documents the dependency.
declare const document: {
  fonts: {
    load(font: string): Promise<unknown>;
    readonly ready: Promise<unknown>;
    check(font: string): boolean;
  };
};

// Half the 1200x630 OG frame, captured at 2x — see src/og/OgPage.module.css
// for why the image is scaled up rather than laid out at full size.
const VIEWPORT = { width: 600, height: 315 };
const DEVICE_SCALE_FACTOR = 2;

// ps1ui's font stack, checked by name: document.fonts.ready resolves happily
// even when the webfont never arrived and the text quietly fell back to the
// OS monospace, which would bake the wrong glyphs into the image.
const FONT = '16px "JetBrains Mono Variable"';

const OUTPUT_PATH = "./public/og.png";

// The dev server rather than a build: `prebuild` hits the Zenn and GitHub APIs,
// and the OG image needs none of that data. `/og` only exists on a dev server —
// astro.config.ts injects the route there and nowhere else.
const server = await dev({ logLevel: "warn" });

const url = server.resolvedUrls.local[0];
if (!url) {
  throw new Error("astro dev server started without reporting a local url");
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
  });
  await page.goto(new URL("og", url).href, { waitUntil: "networkidle" });

  // The dev server draws its toolbar as a floating bar across the bottom of the
  // page, which lands inside a 600x315 frame. Hidden from the page rather than
  // switched off through `dev()`'s inline config: that route silently does
  // nothing under Bun — which is what runs this script — while working under
  // Node, and whether the toolbar makes it into the capture is a race with its
  // own script, so a run that comes out clean proves nothing. A stylesheet
  // added to the loaded document applies whenever the element turns up, however
  // late that is.
  await page.addStyleTag({
    content: "astro-dev-toolbar { display: none !important; }",
  });

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
  await server.stop();
}

console.log(
  `${OUTPUT_PATH} (${VIEWPORT.width * DEVICE_SCALE_FACTOR}x${VIEWPORT.height * DEVICE_SCALE_FACTOR})`,
);
