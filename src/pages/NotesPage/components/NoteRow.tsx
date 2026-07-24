import type { Note } from "@/types";
import { Anchor, Badge } from "@ps1ui/core";
import { ArrowRight } from "lucide-react";
import { formatNoteDate } from "../lib";
import styles from "./NoteRow.module.css";

type NoteRowProps = {
  note: Note;
};

export function NoteRow({ note }: NoteRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.date}>{formatNoteDate(note.publishedAt)}</span>
      <div className={styles.body}>
        <Anchor
          variant="subtle"
          href={note.url}
          target="_blank"
          rel="noreferrer"
          className={styles.title}
        >
          {note.title}
        </Anchor>
        {note.topics.length > 0 && (
          <div className={styles.topics}>
            {note.topics.map((topic) => (
              <Badge
                key={topic.name}
                variant="outline"
                color="muted"
                className={styles.badge}
              >
                #{topic.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <ArrowRight size={16} aria-hidden="true" className={styles.arrow} />
    </div>
  );
}
