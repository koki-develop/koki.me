import notes from "@/data/notes.json";
import { LuExternalLink } from "react-icons/lu";
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

      <div className="flex justify-center">
        <a
          className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800 px-4 py-2 text-base"
          href="https://zenn.dev/kou_pg_0131"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
          <LuExternalLink className="text-slate-400" />
        </a>
      </div>
    </div>
  );
}
