import { getViteConfig } from "astro/config";

// Astro's own resolved Vite config rather than a hand-written one: the `@/…`
// specifiers the tests pull in come from tsconfig `paths`, and going through
// Astro is what guarantees a module resolves in a test exactly the way it does
// in a build.
export default getViteConfig({});
