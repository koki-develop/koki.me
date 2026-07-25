# CLAUDE.md

Personal portfolio site for Koki Sato. A React + TypeScript + Vite SPA, deployed to
https://koki.me on Vercel.

The UI is an **IDE / code-editor metaphor** — window chrome, Explorer sidebar, file
tabs, line-number gutter, status bar — and each route is presented as a "file" the
visitor is viewing. It is built on [`@ps1ui/core`](https://koki-develop.github.io/ps1ui/),
a monospace React component library. See `.claude/rules/ui.md` before touching anything
under `src/`.

## Commands

| Command                                        | Notes                                               |
| ---------------------------------------------- | --------------------------------------------------- |
| `bun run dev`                                  | Vite dev server; opens a browser                    |
| `bun run build`                                | Runs `prebuild` first — **this hits the network**   |
| `bun run test`                                 | Vitest; a single run, not watch mode, outside a TTY |
| `bun run lint`                                 | ESLint; warnings are errors                         |
| `bun run fmt` / `bun run fmt:check`            | Prettier                                            |
| `bun run fetch:notes` / `bun run fetch:github` | Regenerate `data/` on their own                     |

`prebuild` calls the Zenn and GitHub APIs. To compile without network access, run
`bunx tsc -b && bunx vite build` directly against whatever is already in `data/`.

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

- A page is a directory under `src/pages/` exporting through `index.ts`: the page
  component, page-only `components/`, pure helpers in `lib.ts`, tests in `lib.spec.ts`.
- Components used by more than one page go in `src/components/`; the IDE chrome is
  `src/components/ide/`.
- Non-React helpers shared between the app and `scripts/` go in `src/lib/`.
- **A page is declared twice, by design**: once as a route, and once in the IDE file list
  (`src/components/ide/files.ts`) that feeds the Explorer, the tabs, and the status bar.
  Register it in only one and it is reachable by URL but invisible in the chrome.
- Import through the `@/…` aliases. They are declared in **both** `vite.config.ts` and
  `tsconfig.app.json` — a new alias has to be added to both, and neither applies to
  `scripts/`, which uses relative paths.

## Testing

Vitest runs in the default Node environment; there is no jsdom or browser setup. Tests
cover pure functions only — `lib.ts` files and `src/lib/`. Components are verified by
building and looking at the result, not by rendering in a test. Don't add a component
test without first adding a test environment.

## Git

- Conventional Commits. English, imperative mood, lowercase after the colon, no trailing
  period. Types in use: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `ci`.
- Dependencies are pinned to exact versions (`bunfig.toml` sets `install.exact`) and
  updated by Renovate. Don't widen a pin into a range.
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
