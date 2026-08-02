import { Stack } from "@ps1ui/core";
import { IdeFileLink } from "./IdeFileLink";
import styles from "./TabBar.module.css";
import { IDE_FILES } from "./files";

type TabBarProps = {
  currentPath: string;
};

export function TabBar({ currentPath }: TabBarProps) {
  return (
    <Stack
      as="nav"
      direction="row"
      gap="none"
      className={styles.bar}
      aria-label="Files"
    >
      {IDE_FILES.map((file) => (
        <IdeFileLink
          key={file.path}
          href={file.path}
          label={file.name}
          active={file.path === currentPath}
          className={styles.tab}
          activeClassName={styles.active}
        />
      ))}
    </Stack>
  );
}
