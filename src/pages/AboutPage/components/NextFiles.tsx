import { Anchor } from "@ps1ui/core";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import styles from "./NextFiles.module.css";

const NEXT_FILES = [
  { to: "/works", file: "works.tsx", title: "Works" },
  { to: "/notes", file: "notes.md", title: "Notes" },
] as const;

export function NextFiles() {
  return (
    <div className={styles.list}>
      {NEXT_FILES.map((next) => (
        <div key={next.to} className={styles.row}>
          <Anchor
            as={Link}
            to={next.to}
            variant="subtle"
            className={styles.title}
          >
            {next.title}
          </Anchor>
          <span className={styles.file}>{next.file}</span>
          <ArrowRight size={16} aria-hidden="true" className={styles.arrow} />
        </div>
      ))}
    </div>
  );
}
