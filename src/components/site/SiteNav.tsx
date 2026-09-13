import { Stack } from "@ps1ui/core";
import clsx from "clsx";
import { SITE_PAGES } from "./pages";
import styles from "./SiteNav.module.css";

type SiteNavProps = {
  // A prop rather than children: the nav is only ever rendered from
  // `src/components/site/SiteHeader.astro`, and anything slotted in from there
  // arrives as an HTML string wrapped in an <astro-static-slot>. One plain
  // string has no reason to take that detour.
  currentPath: string;
};

export function SiteNav({ currentPath }: SiteNavProps) {
  return (
    // No <header> here: `nav` is already a landmark, and the banner that groups
    // these links with the theme control is the one in `SiteHeader.astro`.
    <Stack as="nav" direction="row" gap="md" wrap aria-label="Main">
      {SITE_PAGES.map((page) => {
        const active = page.path === currentPath;
        return (
          <a
            key={page.path}
            href={page.path}
            className={clsx(styles.link, active && styles.active)}
            // The active item is drawn with a colour and an underline only —
            // `aria-current` is what carries "you are here" to anything that
            // can't see either.
            aria-current={active ? "page" : undefined}
          >
            {page.label}
          </a>
        );
      })}
    </Stack>
  );
}
