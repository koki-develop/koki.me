import { Stack, Text } from "@ps1ui/core";
import clsx from "clsx";
import { GitBranch } from "lucide-react";
import styles from "./TitleBar.module.css";

type TitleBarProps = {
  // A prop rather than children: the bar is only ever rendered from an `.astro`
  // file, and anything slotted in from there arrives as an HTML string wrapped
  // in an <astro-static-slot>. A plain string has no reason to take that detour.
  //
  // Optional so the bar can render as bare window chrome — the OG image sets
  // its title with a heading in the content area, and repeating it here would
  // just be the same string twice. The bar splits into two groups either way,
  // so the branch stays pinned to the trailing edge with or without a title.
  title?: string;
};

export function TitleBar({ title }: TitleBarProps) {
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
        {title && (
          <Text as="span" size="sm" weight="bold" className={styles.title}>
            {title}
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
