import { Stack, Text } from "@ps1ui/core";
import styles from "./StatusBar.module.css";
import type { IdeFile } from "./files";

type StatusBarProps = {
  activeFile: IdeFile | undefined;
};

// Flat on purpose — see the note in TitleBar.tsx. The right-hand group is not
// a nested <Stack>; `margin-left: auto` on its first item pushes the rest of
// the row to the trailing edge, and it still works when `activeFile` is
// undefined and the leading filename is absent.
export function StatusBar({ activeFile }: StatusBarProps) {
  return (
    <Stack direction="row" align="center" gap="xl" className={styles.bar}>
      {activeFile && (
        <Text as="span" variant="subtle" size="xs">
          {activeFile.name}
        </Text>
      )}
      <Text as="span" variant="subtle" size="xs" className={styles.trailing}>
        UTF-8
      </Text>
      <Text as="span" variant="subtle" size="xs">
        LF
      </Text>
      {activeFile && (
        <Text as="span" variant="subtle" size="xs">
          {activeFile.language}
        </Text>
      )}
    </Stack>
  );
}
