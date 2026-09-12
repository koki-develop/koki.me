import type { RepoStats, Work } from "@/types";
import { Anchor, ListItem, Text } from "@ps1ui/core";
import { Star } from "lucide-react";
import { resolveStars } from "../lib";
import styles from "./WorkRow.module.css";

type WorkRowProps = {
  work: Work;
  repos: Record<string, RepoStats>;
};

export function WorkRow({ work, repos }: WorkRowProps) {
  const stars = resolveStars(work, repos);

  return (
    <ListItem className={styles.row}>
      <Anchor
        variant="subtle"
        size="md"
        href={work.url ?? work.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        {work.name}
      </Anchor>
      {/* `resolveStars` only resolves a count for a work that has a
          `githubUrl`, so the first test never fails on its own — it is what
          narrows the type for the `href` below. */}
      {work.githubUrl && typeof stars === "number" && stars > 0 && (
        <Anchor
          variant="subtle"
          size="xs"
          href={work.githubUrl}
          target="_blank"
          rel="noreferrer"
          leading={<Star size={12} aria-hidden="true" />}
          // The visible label is a bare number, which names the link after
          // nothing at all in a screen reader's list of links.
          aria-label={`${work.name} on GitHub, ${stars} stars`}
          className={styles.stars}
        >
          {stars}
        </Anchor>
      )}
      <Text as="p" variant="muted" size="sm" className={styles.description}>
        {work.description}
      </Text>
    </ListItem>
  );
}
