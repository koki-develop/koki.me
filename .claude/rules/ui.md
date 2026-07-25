---
paths:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# UI and styling

The site is composed from `@ps1ui/core`. Hand-written markup and CSS are the exception,
and an exception needs a reason recorded next to it.

## Compose from PS1UI primitives

- Check what `@ps1ui/core` already exports before writing anything. Its props, variants,
  and gaps change between releases, so verify against the installed version rather than
  recalling an older one. Docs: https://koki-develop.github.io/ps1ui/ — source:
  https://github.com/koki-develop/ps1ui
- A plain `<div>` doing flexbox is a `Stack`. Don't add a wrapper `<div>` just to get
  one.
- All text goes through `Text` / `Heading`. Colors, font sizes, and weights are props on
  those components, not declarations in a CSS Module. The only exception is text that
  must inherit its parent's color.
- Some things the library genuinely cannot express — a semantic element it has no `as`
  prop for, an active/selected state it has no variant for. Keep those as hand-written
  CSS and say in a comment which primitive fell short, so the workaround can be found
  and removed when the library catches up.

## CSS Modules

Colocate `Foo.module.css` next to `Foo.tsx`, and keep it to **layout-only** declarations:
`flex`, `min-width`, `padding`, `border`, `align-self`, `margin: auto`, `overflow`.

Use `--ps1ui-*` tokens for every value that has one — spacing, colors, font sizes,
radii. Raw pixel and color values are for things the token set doesn't cover, and those
deserve a comment.

Every declaration whose purpose isn't obvious from reading it gets a comment explaining
_why_: which inherited default it counteracts, what visually breaks without it. The
existing modules follow this closely — match them.

## Responsiveness

Breakpoints are **container queries**, not viewport media queries:
`@container ps1ui-root (min-width: …)`.

PS1UI's own responsive props (`Grid columns={{ base, sm }}`, `Stack direction={{ … }}`)
also resolve against the _nearest_ container, which is usually the surrounding layout
primitive rather than the window. When a breakpoint choice depends on which container it
resolves against, say so in a comment — the intent is invisible otherwise, and moving
the component changes its behavior.

## Accessibility

ESLint runs `jsx-a11y` with warnings as errors, so a violation fails `bun run lint` and
the CI Lint job. Two habits this codebase already has, worth keeping:

- Decorative icons get `aria-hidden="true"`.
- Characters that exist only to sell the code-editor metaphor — the `## ` prefix on
  section headings, for instance — are wrapped in an `aria-hidden` span so they stay out
  of the element's accessible name.
