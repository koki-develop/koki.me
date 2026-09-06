import { Container, Stack, Text } from "@ps1ui/core";
import clsx from "clsx";
import { SITE_PAGES } from "./pages";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  // Props rather than children: the header is only ever rendered from
  // `src/layouts/BaseLayout.astro`, and anything slotted in from there arrives
  // as an HTML string wrapped in an <astro-static-slot>. Two plain strings have
  // no reason to take that detour.
  siteName: string;
  currentPath: string;
};

export function SiteHeader({ siteName, currentPath }: SiteHeaderProps) {
  return (
    // A plain <header> rather than a Stack: the element exists to paint a rule
    // and a surface across the full viewport width, and the Container inside it
    // is what pulls the content back to the page's measure.
    <header className={styles.header}>
      {/* `size` and `px` match the content Container in
          `src/layouts/BaseLayout.astro`: the wordmark has to sit directly above
          the first line of the page, not inset from it. */}
      <Container size="lg" px={{ base: "lg", sm: "xl" }}>
        <Stack
          direction="row"
          align="center"
          justify="between"
          gap="lg"
          wrap
          className={styles.row}
        >
          {/* Wrapped in a Text because the wordmark is the one link in the
              chrome that has to be bold, and Text is where weight lives. */}
          <Text as="span" size="md" weight="bold">
            {/* A plain <a> rather than an `Anchor`: every Anchor paints an
                underline — variant picks its colour, never whether it is drawn
                — and an underlined wordmark sitting beside the nav reads as a
                second current-page marker. */}
            <a href="/" className={styles.name}>
              {siteName}
            </a>
          </Text>
          <Stack as="nav" direction="row" gap="lg" aria-label="Main">
            {SITE_PAGES.map((page) => {
              const active = page.path === currentPath;
              return (
                <a
                  key={page.path}
                  href={page.path}
                  className={clsx(styles.link, active && styles.active)}
                  // The active row is drawn with a colour and an underline only
                  // — `aria-current` is what carries "you are here" to anything
                  // that can't see either.
                  aria-current={active ? "page" : undefined}
                >
                  {page.label}
                </a>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </header>
  );
}
