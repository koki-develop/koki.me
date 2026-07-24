import type { Certification } from "@/types";
import styles from "./CertificationList.module.css";
import { CertificationRow } from "./CertificationRow";

type CertificationListProps = {
  certifications: Certification[];
};

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <div className={styles.list}>
      {certifications.map((certification) => (
        <CertificationRow
          key={certification.name}
          certification={certification}
        />
      ))}
    </div>
  );
}
