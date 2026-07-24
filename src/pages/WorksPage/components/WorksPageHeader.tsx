import { Heading, Text } from "@ps1ui/core";
import styles from "./WorksPageHeader.module.css";

type WorksPageHeaderProps = {
  count: number;
};

export function WorksPageHeader({ count }: WorksPageHeaderProps) {
  return (
    <>
      <Heading level={2} className={styles.heading}>
        Works
      </Heading>
      <Text variant="muted" className={styles.subtitle}>
        {count} projects
      </Text>
    </>
  );
}
