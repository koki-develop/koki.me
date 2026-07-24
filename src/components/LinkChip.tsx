import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./LinkChip.module.css";

type LinkChipProps = {
  icon?: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export function LinkChip({
  icon,
  className,
  children,
  ...props
}: LinkChipProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      {...props}
      className={clsx(styles.chip, className)}
    >
      {icon}
      {children}
    </a>
  );
}
