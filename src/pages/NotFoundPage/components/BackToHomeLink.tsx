import { Anchor } from "@ps1ui/core";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import styles from "./BackToHomeLink.module.css";

export function BackToHomeLink() {
  return (
    <Anchor as={Link} to="/" className={styles.link}>
      <ArrowLeft size={14} aria-hidden="true" />
      back to about.md
    </Anchor>
  );
}
