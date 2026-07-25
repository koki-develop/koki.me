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
      {/* A plain block box, not a Stack: a flex column blockifies the title,
          and a blockified link stretches the whole column — its hover color and
          click target would cover the empty space to the right of a short
          title. Left in normal flow the anchor stays the inline box it looks
          like, so its target is exactly the line boxes the title occupies. */}
      <div className={styles.body}>
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
      </div>
      <Text as="span" variant="subtle" size="sm" className={styles.date}>
        {formatNoteDate(note.publishedAt)}
      </Text>
    </ListItem>
  );
}
