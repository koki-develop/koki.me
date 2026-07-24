import type { Certification } from "@/types";
import { Anchor } from "@ps1ui/core";
import styles from "./CertificationList.module.css";

type CertificationListProps = {
  certifications: Certification[];
};

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <div className={styles.certifications}>
      {certifications.map((certification) => (
        <div key={certification.name} className={styles.certification}>
          <Anchor
            variant="subtle"
            href={certification.url}
            target="_blank"
            rel="noreferrer"
            className={styles.certificationLink}
          >
            {certification.name}
          </Anchor>
          <span className={styles.certificationIssuer}>
            {certification.issuer}
          </span>
          <span className={styles.certificationYear}>{certification.year}</span>
        </div>
      ))}
    </div>
  );
}
