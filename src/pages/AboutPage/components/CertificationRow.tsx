import type { Certification } from "@/types";
import { Anchor, Stack, Text } from "@ps1ui/core";
import styles from "./CertificationRow.module.css";

type CertificationRowProps = {
  certification: Certification;
};

export function CertificationRow({ certification }: CertificationRowProps) {
  return (
    <Stack direction="row" align="baseline" gap="md" className={styles.row}>
      <Text as="span" size="sm" className={styles.name}>
        <Anchor
          variant="subtle"
          href={certification.url}
          target="_blank"
          rel="noreferrer"
        >
          {certification.name}
        </Anchor>
      </Text>
      <Text as="span" variant="muted" size="xs">
        {certification.issuer}
      </Text>
      <Text as="span" variant="subtle" size="xs" className={styles.year}>
        {certification.year}
      </Text>
    </Stack>
  );
}
