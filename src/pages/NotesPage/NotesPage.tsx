import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import notes from "@/data/notes.json";
import { NoteList } from "./components/NoteList";
import { NoteRow } from "./components/NoteRow";
import { NotesPageHeader } from "./components/NotesPageHeader";
import { ZennLinkButton } from "./components/ZennLinkButton";

export function NotesPage() {
  return (
    <div>
      <SourceComment>notes.md</SourceComment>

      <NotesPageHeader />

      <NoteList>
        {notes.map((note) => (
          <NoteRow key={note.url} note={note} />
        ))}
      </NoteList>

      <ZennLinkButton href={config.socials.Zenn.url} />
    </div>
  );
}
