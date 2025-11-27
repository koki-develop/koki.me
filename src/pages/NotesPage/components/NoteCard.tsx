import type { Note } from "@/types";
import { LuExternalLink } from "react-icons/lu";
import { relativeTimeFromNow } from "../lib";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <a
      className="rounded border border-slate-700 bg-slate-800 p-4"
      href={note.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col gap-2">
        <span className="text-base">
          {note.title}
          <LuExternalLink className="ml-1 inline text-xs text-slate-400" />
        </span>
        <span className="text-sm text-slate-400">
          {relativeTimeFromNow(note.publishedAt)}
        </span>
      </div>
    </a>
  );
}
