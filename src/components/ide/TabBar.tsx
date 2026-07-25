import { Stack } from "@ps1ui/core";
import styles from "./TabBar.module.css";
import { TabBarItem } from "./TabBarItem";
import { IDE_FILES } from "./files";

export function TabBar() {
  return (
    <Stack
      as="nav"
      direction="row"
      gap="none"
      className={styles.bar}
      aria-label="Files"
    >
      {IDE_FILES.map((file) => (
        <TabBarItem key={file.path} to={file.path} end={file.path === "/"}>
          {file.name}
        </TabBarItem>
      ))}
    </Stack>
  );
}
