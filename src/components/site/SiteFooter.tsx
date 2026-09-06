import { SocialIcon } from "@/components/SocialIcon";
import type { Socials } from "@/types";
import { Anchor, Container, Stack } from "@ps1ui/core";
import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  socials: Socials;
};

export function SiteFooter({ socials }: SiteFooterProps) {
  return (
    // A plain <footer> for the same reason the header is a plain element: the
    // rule and the padding run the full viewport width, the Container inside
    // holds the links to the page's measure.
    <footer className={styles.footer}>
      {/* Same measure as the content Container in
          `src/layouts/BaseLayout.astro`, so the row wraps where the page does. */}
      <Container size="lg" px={{ base: "lg", sm: "xl" }}>
        <Stack direction="row" align="center" justify="center" wrap gap="lg">
          {Object.values(socials).map((social) => (
            <Anchor
              key={social.name}
              variant="subtle"
              size="sm"
              className={styles.link}
              leading={
                <SocialIcon
                  name={social.name}
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
              }
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </Anchor>
          ))}
        </Stack>
      </Container>
    </footer>
  );
}
