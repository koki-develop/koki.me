import type { Skill } from "@/types";
import { Stack, Text } from "@ps1ui/core";
import { Fragment } from "react";
import styles from "./SkillList.module.css";

type SkillListProps = {
  skills: Skill[];
};

export function SkillList({ skills }: SkillListProps) {
  return (
    <Stack direction="row" wrap className={styles.list}>
      {skills.map((skill, index) => (
        <Fragment key={skill.name}>
          {index > 0 && (
            // Punctuation between two skills rather than an item of its own, so
            // it is hidden from assistive tech — a reader announcing "slash"
            // down the row would be reading the layout aloud.
            <Text as="span" variant="muted" size="sm" aria-hidden="true">
              /
            </Text>
          )}
          <Text as="span" size="sm">
            {skill.name}
          </Text>
        </Fragment>
      ))}
    </Stack>
  );
}
