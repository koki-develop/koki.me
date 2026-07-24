import type { Certification } from "@/types";
import { Stack } from "@ps1ui/core";
import { CertificationRow } from "./CertificationRow";

type CertificationListProps = {
  certifications: Certification[];
};

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <Stack gap="none">
      {certifications.map((certification) => (
        <CertificationRow
          key={certification.name}
          certification={certification}
        />
      ))}
    </Stack>
  );
}
