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

      <div className="flex flex-wrap gap-1">
        {note.topics.map((topic) => (
          <div
            key={topic.name}
            className="flex gap-1 rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200"
          >
            <img className="size-4 rounded-full" src={topic.imageUrl} alt="" />
            {topic.name}
          </div>
        ))}
      </div>

      <span className="text-sm text-slate-400">
        {relativeTimeFromNow(note.publishedAt)}
      </span>
    </div>
  );
}
