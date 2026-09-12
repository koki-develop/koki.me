import type { Socials } from "@/types";
import { Anchor, Stack, Text } from "@ps1ui/core";
import { Fragment } from "react";
import styles from "./ContactLinks.module.css";

type ContactLinksProps = {
  socials: Socials;
};

export function ContactLinks({ socials }: ContactLinksProps) {
  return (
    <Stack direction="row" wrap className={styles.list}>
      {Object.values(socials).map((social, index) => (
        <Fragment key={social.name}>
          {index > 0 && (
            // Punctuation between two links rather than an item of its own, so
            // it is hidden from assistive tech — a reader announcing "slash"
            // down the row would be reading the layout aloud.
            <Text as="span" variant="muted" size="sm" aria-hidden="true">
              /
            </Text>
          )}
          <Anchor
            variant="subtle"
            size="sm"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.name}
          </Anchor>
        </Fragment>
      ))}
    </Stack>
  );
}
