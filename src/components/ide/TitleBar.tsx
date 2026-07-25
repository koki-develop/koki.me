import { Stack, Text } from "@ps1ui/core";
import clsx from "clsx";
import { GitBranch } from "lucide-react";
import styles from "./TitleBar.module.css";

type TitleBarProps = {
  // Optional so the bar can render as bare window chrome — the OG image sets
  // its title with a heading in the content area, and repeating it here would
  // just be the same string twice. `margin-left: auto` on the branch icon
  // keeps the trailing group anchored either way.
  children?: string;
};

// Flat on purpose — no nested <Stack> groups. A Stack establishes an
// inline-size containment context, so a Stack that has to size to its own
// content inside a row flex parent resolves to 0 wide. Keeping every item a
// direct child of the bar avoids that, and `margin-left: auto` on the branch
// icon does the same job the removed wrapper did.
export function TitleBar({ children }: TitleBarProps) {
  return (
    <Stack direction="row" align="center" gap="sm" className={styles.bar}>
      <span className={clsx(styles.dot, styles.dotDanger)} aria-hidden="true" />
      <span className={clsx(styles.dot, styles.dotAccent)} aria-hidden="true" />
      <span
        className={clsx(styles.dot, styles.dotPrimary)}
        aria-hidden="true"
      />
      {children && (
        <Text as="span" size="sm" weight="bold" className={styles.title}>
          {children}
        </Text>
      )}
      <GitBranch size={13} aria-hidden="true" className={styles.branchIcon} />
      <Text as="span" variant="subtle" size="xs">
        main
      </Text>
    </Stack>
  );
}
