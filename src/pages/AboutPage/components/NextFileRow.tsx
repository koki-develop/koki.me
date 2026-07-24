import { Anchor } from "@ps1ui/core";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import styles from "./NextFileRow.module.css";

type NextFileRowProps = {
  to: string;
  title: string;
  file: string;
};

export function NextFileRow({ to, title, file }: NextFileRowProps) {
  return (
    <div className={styles.row}>
      <Anchor as={Link} to={to} variant="subtle" className={styles.title}>
        {title}
      </Anchor>
      <span className={styles.file}>{file}</span>
      <ArrowRight size={16} aria-hidden="true" className={styles.arrow} />
    </div>
  );
}
