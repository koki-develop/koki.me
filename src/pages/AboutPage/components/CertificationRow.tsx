import type { Certification } from "@/types";
import { Anchor, ListItem, Text } from "@ps1ui/core";
import styles from "./CertificationRow.module.css";

type CertificationRowProps = {
  certification: Certification;
};

export function CertificationRow({ certification }: CertificationRowProps) {
  return (
    <ListItem className={styles.row}>
      <Anchor
        variant="subtle"
        size="sm"
        href={certification.url}
        target="_blank"
        rel="noreferrer"
        className={styles.name}
      >
        {certification.name}
      </Anchor>
      <Text as="span" variant="muted" size="xs" className={styles.issuer}>
        {certification.issuer}
      </Text>
      <Text as="span" variant="subtle" size="xs" className={styles.year}>
        {certification.year}
      </Text>
    </ListItem>
  );
}
