import type { Skill } from "@/types";
import { Button, Stack } from "@ps1ui/core";

type SkillListProps = {
  skills: Skill[];
};

export function SkillList({ skills }: SkillListProps) {
  return (
    <Stack direction="row" wrap gap="sm">
      {skills.map((skill) => (
        <Button
          key={skill.name}
          as="a"
          variant="secondary"
          href={skill.url}
          target="_blank"
          rel="noreferrer"
        >
          {skill.name}
        </Button>
      ))}
    </Stack>
  );
}
