import { Text } from "@ps1ui/core";
import type { ReactNode } from "react";
import styles from "./Bio.module.css";

type BioProps = {
  children: ReactNode;
};

export function Bio({ children }: BioProps) {
  return (
    <Text size="md" className={styles.bio}>
      {children}
    </Text>
  );
}
