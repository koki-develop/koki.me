import { LinkChip } from "@/components/LinkChip";
import type { Skill } from "@/types";
import styles from "./SkillList.module.css";

type SkillListProps = {
  skills: Skill[];
};

export function SkillList({ skills }: SkillListProps) {
  return (
    <div className={styles.skills}>
      {skills.map((skill) => (
        <LinkChip key={skill.name} href={skill.url}>
          {skill.name}
        </LinkChip>
      ))}
    </div>
  );
}
