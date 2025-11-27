import type { Note } from "@/types";
import { LuExternalLink } from "react-icons/lu";
import { relativeTimeFromNow } from "../lib";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded border border-slate-700 bg-slate-800 p-4">
      <div>
        <a
          className="text-base"
          href={note.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {note.title}
          <LuExternalLink className="ml-1 inline text-xs text-slate-400" />
        </a>
      </div>

      <span className="text-sm text-slate-400">
        {relativeTimeFromNow(note.publishedAt)}
      </span>
    </div>
  );
}
