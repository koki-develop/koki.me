---
paths:
  - "src/**/*.tsx"
  - "src/**/*.astro"
  - "src/**/*.css"
---

# UI and styling

The site is composed from `@ps1ui/core`. Hand-written markup and CSS are the exception,
and an exception needs a reason recorded next to it.

## `.astro` or `.tsx`

Both render to static HTML at build time, so the split is about what a file needs, not
about cost:

- **`.astro`** for anything that needs Astro itself — the current route, a `<slot />`, a
  `<script>`, a `transition:*` directive. That is the layout, the chrome components that
  are URL-aware, and the pages.
- **`.tsx`** for everything else, which is most of it. A `.tsx` file can import other
  `.tsx` files but never an `.astro` one, so a component that might end up inside a React
  tree has to be React.

Two things follow from the boundary:

- **Give a React component props, not children, when it is rendered from `.astro`.**
  Astro renders slotted content to an HTML string and hands it back wrapped in an
  `<astro-static-slot>` — which it strips again for a component that isn't hydrated, so
  this costs nothing but a detour for what is usually one string. `label` / `title`
  beats `children` at that boundary.
- **Astro can't build a React element**, so a ps1ui prop that takes a `ReactNode`
  (`leading`, `trailing`, `summary`) is unreachable from a template. A component using
  one has to stay `.tsx` and be handed plain props.

Only the Works page hydrates. Everything else is server-rendered and ships no React at
all, so an interaction elsewhere has to be reachable from CSS, a native element, or a
few lines of DOM code in an Astro `<script>` — reach for `client:load` only when the
thing genuinely needs a component runtime.

## Compose from PS1UI primitives

- Check what `@ps1ui/core` already exports before writing anything. Its props, variants,
  and gaps change between releases, so verify against the installed version rather than
  recalling an older one. Docs: https://koki-develop.github.io/ps1ui/ — source:
  https://github.com/koki-develop/ps1ui
- A plain `<div>` doing flexbox is a `Stack`. Don't add a wrapper `<div>` just to get
  one. Layout primitives are polymorphic, so a `<nav>` / `<ul>` / `<main>` that also does
  flex or grid is `Stack as="nav"` / `Grid as="ul"`, not hand-rolled CSS.
- All text goes through `Text` / `Heading`. Colors, font sizes, and weights are props on
  those components, not declarations in a CSS Module. The only exception is text that
  must inherit its parent's color — no variant expresses that.
- An icon sitting on one line with a label is `leading` / `trailing` on `Text` or
  `Anchor`, not a hand-written `inline-flex` row.
- Some things the library genuinely cannot express — an active/selected state it has no
  variant for, a color the variant set doesn't offer. Keep those as hand-written CSS and
  say in a comment which primitive fell short, so the workaround can be found and removed
  when the library catches up. A variant that fits but would need most of its own
  declarations overridden is not a fit; record that too.

## CSS Modules

Colocate `Foo.module.css` next to `Foo.tsx` or `Foo.astro`, and keep it to
**layout-only** declarations:
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
resolve against the _nearest ancestor container_. Layout primitives are not containers
by default — only `PS1Root` is — so a responsive prop falls through to `PS1Root`, i.e.
the window, unless some ancestor opts in with `queryContainer`.

That opt-in is the knob. Chrome that should track the window (Explorer, Gutter, editor
padding) needs nothing; content that should track the column it's laid out in needs a
`queryContainer` above it. The two behave very differently once the Explorer and the
gutter start eating width, so when a breakpoint depends on which box it measures, say so
in a comment and put the `queryContainer` where the comment can point at it.

Don't add `queryContainer` to a primitive that has no responsive descendants: it costs
the element its intrinsic width (it collapses to 0 in a row-flex or auto-track parent)
and makes it a stacking context and a containing block for fixed/absolute children.

## Accessibility

ESLint runs `jsx-a11y` with warnings as errors over both `.tsx` and `.astro`, so a
violation fails `bun run lint` and the CI Lint job. Two habits this codebase already has,
worth keeping:

- Decorative icons get `aria-hidden="true"`.
- Characters that exist only to sell the code-editor metaphor — the `## ` prefix on
  section headings, for instance — are wrapped in an `aria-hidden` span so they stay out
  of the element's accessible name.
