import type { Certification } from "@/types";
import { Anchor, ListItem, Text } from "@ps1ui/core";
import styles from "./CertificationRow.module.css";

type CertificationRowProps = {
  certification: Certification;
};

export function CertificationRow({ certification }: CertificationRowProps) {
  return (
    <ListItem className={styles.row}>
      {/* The flex item is this span, not the Anchor. A flex item is blockified,
          and a blockified link claims the whole column it is given — the target
          would run to the issuer on a short name, and past the end of the last
          line on a name that wraps. Inside a plain box the link is the inline
          box it looks like, so its target is exactly the lines it paints. */}
      <span className={styles.name}>
        <Anchor
          variant="subtle"
          size="sm"
          href={certification.url}
          target="_blank"
          rel="noreferrer"
        >
          {certification.name}
        </Anchor>
      </span>
      <Text as="span" variant="muted" size="xs" className={styles.issuer}>
        {certification.issuer}
      </Text>
      <Text as="span" variant="subtle" size="xs" className={styles.year}>
        {certification.year}
      </Text>
    </ListItem>
  );
}
