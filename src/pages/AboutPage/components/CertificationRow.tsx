import type { Certification } from "@/types";
import { Anchor } from "@ps1ui/core";
import styles from "./CertificationRow.module.css";

type CertificationRowProps = {
  certification: Certification;
};

export function CertificationRow({ certification }: CertificationRowProps) {
  return (
    <div className={styles.row}>
      <Anchor
        variant="subtle"
        href={certification.url}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {certification.name}
      </Anchor>
      <span className={styles.issuer}>{certification.issuer}</span>
      <span className={styles.year}>{certification.year}</span>
    </div>
  );
}
