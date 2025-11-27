import type { Social } from "@/types";
import { LuExternalLink } from "react-icons/lu";

type Props = {
  social: Social;
};

export default function SocialCard({ social }: Props) {
  return (
    <a
      className="flex items-center justify-between rounded border border-slate-700 bg-slate-800 p-4"
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-4">
        <social.icon className="h-8 w-8" />
        <div className="flex flex-col">
          <span className="text-base">{social.name}</span>
          <span className="text-sm text-slate-400">@{social.handle}</span>
        </div>
      </div>

      <span>
        <LuExternalLink className="text-slate-400" />
      </span>
    </a>
  );
}
