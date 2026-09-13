import type { PS1RootTheme } from "@ps1ui/core";

/** The two themes the site switches between. */
export type Theme = Exclude<PS1RootTheme, "system">;

/**
 * Where a visitor's theme choice is kept. `src/layouts/BaseLayout.astro`'s
 * inline head script needs the same key and cannot import, so it receives this
 * value as a literal through `define:vars`.
 */
export const THEME_STORAGE_KEY = "theme";

/** What a visitor with no stored choice gets. */
export const DEFAULT_THEME: Theme = "dark";

export const THEMES: readonly Theme[] = ["dark", "light"];

export function isTheme(value: string | undefined): value is Theme {
  // The cast is what lets a `readonly Theme[]` be asked about an arbitrary
  // string — `includes` otherwise narrows its argument to the element type,
  // which is the question being asked.
  return value !== undefined && (THEMES as readonly string[]).includes(value);
}

/** Where one press of the toggle lands. */
export function nextTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

/**
 * The toggle's accessible name, and it does not move: a toggle button's name
 * has to stay put while `aria-pressed` carries the state (APG's button
 * pattern), and a name that changes instead is announced inconsistently across
 * screen readers where a state change is not.
 */
export const THEME_TOGGLE_LABEL = "Dark theme";

/**
 * `aria-pressed` for the toggle, which is named for the dark theme above and so
 * reads as pressed exactly when it is in effect. A string rather than a boolean
 * so the attribute the build writes and the one the script sets come out of the
 * same call.
 */
export function themeTogglePressed(theme: Theme): "true" | "false" {
  return theme === "dark" ? "true" : "false";
}
