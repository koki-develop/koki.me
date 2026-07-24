import { NextFileRow } from "./NextFileRow";
import styles from "./NextFiles.module.css";

const NEXT_FILES = [
  { to: "/works", file: "works.tsx", title: "Works" },
  { to: "/notes", file: "notes.md", title: "Notes" },
] as const;

export function NextFiles() {
  return (
    <div className={styles.list}>
      {NEXT_FILES.map((next) => (
        <NextFileRow
          key={next.to}
          to={next.to}
          title={next.title}
          file={next.file}
        />
      ))}
    </div>
  );
}
