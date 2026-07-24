import type { Note } from "@/types";
import { Anchor, Badge, Stack, Text } from "@ps1ui/core";
import { formatNoteDate } from "../lib";
import styles from "./NoteRow.module.css";

type NoteRowProps = {
  note: Note;
};

export function NoteRow({ note }: NoteRowProps) {
  return (
    <Stack direction="row" align="baseline" gap="lg" className={styles.row}>
      <Text as="span" variant="subtle" size="sm" className={styles.date}>
        {formatNoteDate(note.publishedAt)}
      </Text>
      <Stack gap="sm" className={styles.body}>
        <Text size="md" className={styles.title}>
          <Anchor
            variant="subtle"
            href={note.url}
            target="_blank"
            rel="noreferrer"
          >
            {note.title}
          </Anchor>
        </Text>
        {note.topics.length > 0 && (
          <Stack direction="row" wrap gap="xs">
            {note.topics.map((topic) => (
              <Badge key={topic.name} variant="outline" color="muted">
                #{topic.name}
              </Badge>
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
