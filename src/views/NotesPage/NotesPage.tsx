import config from "@/config";
import notes from "@/data/notes.json";
import { Anchor, List, Stack } from "@ps1ui/core";
import { ArrowUpRight } from "lucide-react";
import { NoteRow } from "./components/NoteRow";
import { NotesPageHeader } from "./components/NotesPageHeader";

export function NotesPage() {
  return (
    <Stack gap="xl">
      <NotesPageHeader />

      <List>
        {notes.map((note) => (
          <NoteRow key={note.url} note={note} />
        ))}
      </List>

      {/* `align="start"` keeps the link the size of its own text: a flex item is
          blockified, and a blockified anchor takes the whole column with its
          hover colour and click target. */}
      <Stack align="start">
        <Anchor
          variant="subtle"
          size="sm"
          href={config.socials.Zenn.url}
          target="_blank"
          rel="noreferrer"
          trailing={<ArrowUpRight size={14} aria-hidden="true" />}
        >
          View all posts on Zenn
        </Anchor>
      </Stack>
    </Stack>
  );
}
