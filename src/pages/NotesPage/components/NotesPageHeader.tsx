import { Heading, Text } from "@ps1ui/core";
import styles from "./NotesPageHeader.module.css";

export function NotesPageHeader() {
  return (
    <>
      <Heading level={2} className={styles.heading}>
        Notes
      </Heading>
      <Text variant="muted" className={styles.subtitle}>
        Tech articles published on Zenn.
      </Text>
    </>
  );
}
