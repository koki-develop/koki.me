import type { Note } from "@/types";
import { Anchor, ListItem, Stack, Text } from "@ps1ui/core";
import { formatNoteDate } from "../lib";
import styles from "./NoteRow.module.css";

type NoteRowProps = {
  note: Note;
};

export function NoteRow({ note }: NoteRowProps) {
  return (
    <ListItem className={styles.row}>
      <Stack gap="xs" className={styles.body}>
        <Anchor
          variant="subtle"
          size="md"
          href={note.url}
          target="_blank"
          rel="noreferrer"
          className={styles.title}
        >
          {note.title}
        </Anchor>
        {note.topics.length > 0 && (
          <Stack direction="row" wrap className={styles.topics}>
            {note.topics.map((topic) => (
              <Text key={topic.name} as="span" variant="muted" size="xs">
                #{topic.name}
              </Text>
            ))}
          </Stack>
        )}
      </Stack>
      <Text as="span" variant="subtle" size="sm" className={styles.date}>
        {formatNoteDate(note.publishedAt)}
      </Text>
    </ListItem>
  );
}
