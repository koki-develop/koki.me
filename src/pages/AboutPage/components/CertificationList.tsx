import type { Certification } from "@/types";
import { List } from "@ps1ui/core";
import { CertificationRow } from "./CertificationRow";

type CertificationListProps = {
  certifications: Certification[];
};

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <List>
      {certifications.map((certification) => (
        <CertificationRow
          key={certification.name}
          certification={certification}
        />
      ))}
    </List>
  );
}
