import notes from "@/data/notes.json";
import NoteCard from "./components/NoteCard";

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="mb-2 text-3xl">Notes</h1>
        <p className="text-slate-400">最近書いた技術ブログ。</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <NoteCard key={note.url} note={note} />
        ))}
      </div>
    </div>
  );
}
