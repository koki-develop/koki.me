import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import notes from "@/data/notes.json";
import { Button, Heading, Text } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import { NoteRow } from "./components/NoteRow";
import styles from "./NotesPage.module.css";

export function NotesPage() {
  const zennUrl = config.socials.find((social) => social.name === "Zenn")?.url;

  return (
    <div>
      <SourceComment>notes.md</SourceComment>
      <Heading level={2} className={styles.heading}>
        Notes
      </Heading>
      <Text variant="muted" className={styles.subtitle}>
        Tech articles published on Zenn.
      </Text>

      <div className={styles.list}>
        {notes.map((note) => (
          <NoteRow key={note.url} note={note} />
        ))}
      </div>

      <Button
        variant="secondary"
        as="a"
        href={zennUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.zennButton}
      >
        View all posts on Zenn
        <ArrowUpRight size={14} aria-hidden="true" />
      </Button>
    </div>
  );
}
