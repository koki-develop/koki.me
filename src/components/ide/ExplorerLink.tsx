import { Anchor } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import styles from "./ExplorerLink.module.css";

type ExplorerLinkProps = {
  href: string;
  children: string;
};

export function ExplorerLink({ href, children }: ExplorerLinkProps) {
  return (
    <Anchor
      variant="subtle"
      className={styles.link}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <ArrowUpRight size={13} aria-hidden="true" className={styles.icon} />
      {children}
    </Anchor>
  );
}
