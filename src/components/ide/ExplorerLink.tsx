import { Anchor } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import styles from "./ExplorerLink.module.css";

type ExplorerLinkProps = {
  href: string;
  label: string;
};

export function ExplorerLink({ href, label }: ExplorerLinkProps) {
  return (
    <Anchor
      variant="subtle"
      size="sm"
      trailing={<ArrowUpRight size={13} aria-hidden="true" />}
      className={styles.link}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </Anchor>
  );
}
