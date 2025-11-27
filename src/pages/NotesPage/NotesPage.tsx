import notes from "@/data/notes.json";
import NoteCard from "./components/NoteCard";

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Notes</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <NoteCard key={note.url} note={note} />
        ))}
      </div>
    </div>
  );
}
