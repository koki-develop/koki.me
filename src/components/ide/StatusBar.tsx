import { Stack, Text } from "@ps1ui/core";
import styles from "./StatusBar.module.css";
import type { IdeFile } from "./files";

type StatusBarProps = {
  activeFile: IdeFile | undefined;
};

export function StatusBar({ activeFile }: StatusBarProps) {
  return (
    <Stack direction="row" align="center" gap="xl" className={styles.bar}>
      {activeFile && (
        <Text as="span" variant="subtle" size="xs">
          {activeFile.name}
        </Text>
      )}
      <Stack
        direction="row"
        align="center"
        gap="xl"
        className={styles.trailing}
      >
        <Text as="span" variant="subtle" size="xs">
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
    </Stack>
  );
}
