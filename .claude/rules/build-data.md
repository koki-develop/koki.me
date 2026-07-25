---
paths:
  - "scripts/**/*.ts"
  - "data/**"
---

# Build-time data

`scripts/*.ts` run under Bun as part of `prebuild`. Each one fetches from a third-party
API and writes a JSON file into `data/`, which the app imports through `@/data/*`. The
shape of every file is declared in `src/types.ts` — change the type and its writer in
the same commit.

`data/` is gitignored build output. Never hand-edit a file there, and never commit one.

## Writing a fetch script

- **Fail loudly.** Check `response.ok` (and any error field in the payload) and throw
  with the status and body. A broken upstream must break the build, not silently write a
  file with missing entries — the site would deploy with content quietly gone.
- **Write once, at the end.** Build the whole value first, then a single write. A
  partially written file is worse than no new file.
- **Respect rate limits.** Concurrent requests go through `p-limit`.
- **Never require a secret.** Credentials are optional enrichment: the GitHub script uses
  `GITHUB_TOKEN` when present and falls back to an unauthenticated source when it isn't.
  Both paths must keep working, because the build runs in environments without secrets.
- Log each endpoint before calling it. These scripts are otherwise silent and their
  failures surface as build logs.

## Conventions

- Script-private helpers are named with a leading `_` and live below a `// ---` divider,
  after the top-level code that drives them. The script reads top-down: what it does
  first, how it does it second.
- Anything the app also needs belongs in `src/lib/`, imported by relative path. The
  `@/…` aliases are Vite/tsconfig-app only and do not resolve here.
- These files are type-checked under `tsconfig.node.json` (Node types, no DOM), not the
  app config.
