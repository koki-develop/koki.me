import type { Skill } from "@/types";

type Props = {
  skill: Skill;
};

export default function SkillBadge({ skill }: Props) {
  return (
    <a
      className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1"
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <skill.icon className="size-5" />
      <span className="text-base">{skill.name}</span>
    </a>
  );
}
