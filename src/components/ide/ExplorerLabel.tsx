import { Text } from "@ps1ui/core";
import styles from "./ExplorerLabel.module.css";

type ExplorerLabelProps = {
  label: string;
};

export function ExplorerLabel({ label }: ExplorerLabelProps) {
  return (
    <Text as="div" variant="subtle" size="xs" className={styles.label}>
      {label}
    </Text>
  );
}
