import GitHubIcon from "@/assets/social/github.svg?react";
import type { Work } from "@/types";
import { LuExternalLink } from "react-icons/lu";
import { extractDomain } from "../lib";

type Props = {
  work: Work;
};

export default function WorkCard({ work }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded border border-slate-700 bg-slate-800 p-4">
      <div className="flex flex-1 flex-col gap-2">
        <a
          className="flex w-fit flex-col"
          href={work.url ?? work.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl">{work.name}</span>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>{extractDomain(work.url ?? work.githubUrl)}</span>
            <LuExternalLink />
          </div>
        </a>

        <span className="text-base">{work.description}</span>
      </div>

      {work.githubUrl && (
        <a
          className="flex w-fit items-center gap-2 rounded border border-slate-600 bg-slate-700 px-4 py-2 text-sm"
          href={work.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="size-5" />
          <span>Source</span>
          <LuExternalLink className="text-slate-400" />
        </a>
      )}
    </div>
  );
}
