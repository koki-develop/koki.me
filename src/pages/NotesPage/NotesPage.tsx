import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import notes from "@/data/notes.json";
import { Button, Stack } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import { NoteRow } from "./components/NoteRow";
import { NotesPageHeader } from "./components/NotesPageHeader";

export function NotesPage() {
  return (
    <Stack gap="xl">
      <Stack gap="md">
        <SourceComment>notes.md</SourceComment>
        <NotesPageHeader />
      </Stack>

      <Stack gap="none">
        {notes.map((note) => (
          <NoteRow key={note.url} note={note} />
        ))}
      </Stack>

      <Stack align="start">
        <Button
          as="a"
          variant="secondary"
          href={config.socials.Zenn.url}
          target="_blank"
          rel="noreferrer"
        >
          View all posts on Zenn
          <ArrowUpRight size={14} aria-hidden="true" />
        </Button>
      </Stack>
    </Stack>
  );
}
