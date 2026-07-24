import { Button } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import styles from "./ZennLinkButton.module.css";

type ZennLinkButtonProps = {
  href: string;
};

export function ZennLinkButton({ href }: ZennLinkButtonProps) {
  return (
    <Button
      variant="secondary"
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.button}
    >
      View all posts on Zenn
      <ArrowUpRight size={14} aria-hidden="true" />
    </Button>
  );
}
