# CLAUDE.md

Personal portfolio site for Koki Sato. A statically built Astro site, deployed to
https://koki.me on Vercel. Every route is a real HTML document; `@astrojs/react`
renders the components server-side at build time, and only the Works page ships any
JavaScript for its content.

The UI is an **IDE / code-editor metaphor** — window chrome, Explorer sidebar, file
tabs, line-number gutter, status bar — and each route is presented as a "file" the
visitor is viewing. It is built on [`@ps1ui/core`](https://koki-develop.github.io/ps1ui/),
a monospace React component library. See `.claude/rules/ui.md` before touching anything
under `src/`.

## Commands

| Command                                        | Notes                                               |
| ---------------------------------------------- | --------------------------------------------------- |
| `bun run dev`                                  | Astro dev server; opens a browser                   |
| `bun run build`                                | Runs `prebuild` first — **this hits the network**   |
| `bun run typecheck`                            | `astro check` for `src/`, `tsc` for `scripts/`      |
| `bun run test`                                 | Vitest; a single run, not watch mode, outside a TTY |
| `bun run lint`                                 | ESLint; warnings are errors                         |
| `bun run fmt` / `bun run fmt:check`            | Prettier                                            |
| `bun run fetch:notes` / `bun run fetch:github` | Regenerate `data/` on their own                     |
| `bun run generate:og`                          | Rescreenshot `public/og.png` — commit the result    |

`astro dev` backgrounds itself rather than holding the terminal; `astro dev stop`,
`status` and `logs` are how you reach it afterwards.

`prebuild` calls the Zenn and GitHub APIs. To compile without network access, run
`bunx astro build` directly against whatever is already in `data/`.

`generate:og` boots a dev server and drives Playwright at `/og`, a route
`astro.config.ts` injects for `dev` only so the preview frame never ships. Unlike
`data/`, `public/og.png` **is** committed — nothing in the build regenerates it.

Toolchain versions (bun, node, gitleaks) are pinned in `mise.toml`; `mise run bootstrap`
installs dependencies.

## Content vs. code

- **`config.ts` is the single source of truth for everything the site says.** Profile,
  socials, skills, certifications, works. A content change belongs there — never
  hardcoded into a component.
- **`data/*.json` is generated, gitignored build output.** Produced by `scripts/`, never
  hand-edited, never committed.
- Types for both live in `src/types.ts`.

The deploy workflow runs on a daily schedule as well as on push, so the generated data
refreshes without a commit. Keep the fetch scripts able to run unattended.

## Layout

- **`src/pages/` is Astro's router and holds nothing else.** Each `.astro` file there is
  a few lines: it sets the page's `title` and `description`, and renders one view inside
  `src/layouts/IdeShell.astro`. Anything that is not a route — even a `.ts` file — turns
  into one if it is put here.
- A view is a directory under `src/views/` exporting through `index.ts`: the React
  component a route renders, view-only `components/`, pure helpers in `lib.ts`, tests in
  `lib.spec.ts`.
- Components used by more than one view go in `src/components/`; the IDE chrome is
  `src/components/ide/`.
- Non-React helpers shared between the app and `scripts/` go in `src/lib/`.
- **A page is declared twice, by design**: once as a file in `src/pages/`, and once in
  the IDE file list (`src/components/ide/files.ts`) that feeds the Explorer, the tabs,
  and the status bar. Register it in only one and it is reachable by URL but invisible in
  the chrome.
- Import through the `@/…` aliases, declared once in `tsconfig.json` — Astro turns on
  Vite's native tsconfig-path resolution, so there is no second list to keep in sync.
  They do not apply to `scripts/`, which uses relative paths.

## Routing

- `build.format: "file"` emits `works.html`, and `cleanUrls` in `vercel.json` serves it
  at `/works` — the URLs the site had as an SPA. Because of that, `Astro.url.pathname` is
  the _emitted file_ at build time. **Use `Astro.routePattern`** for anything that needs
  the route: it is `/`, `/works`, `/notes` on every page.
- `<ClientRouter />` in the layout keeps navigation client-side, and turns hover-prefetch
  on by itself — a `prefetch` config key would only restate the default.
- **A client-side navigation does not re-run a bundled `<script>`.** Anything set up
  imperatively has to be re-bound: `Gutter.astro` listens for `astro:after-swap`,
  `Explorer.astro` uses `is:inline` + `data-astro-rerun` because it also has to run
  before the first paint. Those two are the shapes to copy.

## Testing

Vitest runs in the default Node environment; there is no jsdom or browser setup. Tests
cover pure functions only — `lib.ts` files and `src/lib/`. Components are verified by
building and looking at the result, not by rendering in a test. Don't add a component
test without first adding a test environment.

`vitest.config.ts` is Astro's own resolved Vite config, so a module resolves in a test
exactly the way it does in a build.

## Git

- Conventional Commits. English, imperative mood, lowercase after the colon, no trailing
  period. Types in use: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `ci`.
- Dependencies are pinned to exact versions (`bunfig.toml` sets `install.exact`) and
  updated by Renovate. Don't widen a pin into a range.
- **`vite` is a direct devDependency even though nothing imports it.** Astro bundles its
  own copy; `vite-plugin-svgr` resolves `vite` from the project root and calls APIs that
  only exist in the major Astro is on. Keep the two majors together — a `vite` bump that
  runs ahead of Astro's breaks `astro build` at the SVG imports.
- Two pre-commit hook managers are installed and both run: Husky → lint-staged
  (Prettier, then ESLint), and Lefthook → gitleaks. Adding a hook means picking the
  right one.

## Comments vs. documentation

This codebase carries a lot of "why" in its comments, deliberately. Anything tied to a
specific line — which library default a declaration works around, what breaks without
it, why a value was chosen — goes in a code comment next to that line, where it dies
with the code. Documentation files carry only what stays true across refactors:
conventions, boundaries, and decisions. Don't restate here what a comment already says
at the source.
