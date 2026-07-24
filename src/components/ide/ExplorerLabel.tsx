import type { ReactNode } from "react";
import styles from "./ExplorerLabel.module.css";

type ExplorerLabelProps = {
  children: ReactNode;
};

export function ExplorerLabel({ children }: ExplorerLabelProps) {
  return <div className={styles.label}>{children}</div>;
}
