import type { ReactNode } from "react";
import styles from "./NoteList.module.css";

type NoteListProps = {
  children: ReactNode;
};

export function NoteList({ children }: NoteListProps) {
  return <div className={styles.list}>{children}</div>;
}
