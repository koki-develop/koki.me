import { Text } from "@ps1ui/core";
import type { ReactNode } from "react";
import styles from "./ExplorerLabel.module.css";

type ExplorerLabelProps = {
  children: ReactNode;
};

export function ExplorerLabel({ children }: ExplorerLabelProps) {
  return (
    <Text as="div" variant="subtle" size="xs" className={styles.label}>
      {children}
    </Text>
  );
}
