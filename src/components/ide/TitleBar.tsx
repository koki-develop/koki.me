import { Stack, Text } from "@ps1ui/core";
import clsx from "clsx";
import { GitBranch } from "lucide-react";
import styles from "./TitleBar.module.css";

type TitleBarProps = {
  // Optional so the bar can render as bare window chrome — the OG image sets
  // its title with a heading in the content area, and repeating it here would
  // just be the same string twice. The bar splits into two groups either way,
  // so the branch stays pinned to the trailing edge with or without a title.
  children?: string;
};

export function TitleBar({ children }: TitleBarProps) {
  return (
    <Stack
      direction="row"
      align="center"
      justify="between"
      gap="sm"
      className={styles.bar}
    >
      <Stack direction="row" align="center" gap="sm">
        <span
          className={clsx(styles.dot, styles.dotDanger)}
          aria-hidden="true"
        />
        <span
          className={clsx(styles.dot, styles.dotAccent)}
          aria-hidden="true"
        />
        <span
          className={clsx(styles.dot, styles.dotPrimary)}
          aria-hidden="true"
        />
        {children && (
          <Text as="span" size="sm" weight="bold" className={styles.title}>
            {children}
          </Text>
        )}
      </Stack>
      <Text
        as="span"
        variant="subtle"
        size="xs"
        leading={<GitBranch size={13} aria-hidden="true" />}
      >
        main
      </Text>
    </Stack>
  );
}
