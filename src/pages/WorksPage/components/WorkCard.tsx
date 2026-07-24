import type { RepoStats, Work } from "@/types";
import { Anchor, Badge, Card, Text } from "@ps1ui/core";
import { ArrowUpRight, Star } from "lucide-react";
import { resolveStars } from "../lib";
import styles from "./WorkCard.module.css";

type WorkCardProps = {
  work: Work;
  category: string;
  repos: Record<string, RepoStats>;
};

export function WorkCard({ work, category, repos }: WorkCardProps) {
  const stars = resolveStars(work, repos);
  const hasLinks = Boolean(work.url || work.githubUrl);

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Anchor
          variant="subtle"
          href={work.url ?? work.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.title}
        >
          {work.name}
        </Anchor>
        {typeof stars === "number" && stars > 0 && (
          <Text as="span" variant="muted" size="xs" className={styles.stars}>
            <Star size={12} aria-hidden="true" className={styles.starIcon} />
            {stars}
          </Text>
        )}
      </div>

      <Badge variant="outline" color="muted" className={styles.category}>
        {category}
      </Badge>

      <Text as="p" variant="muted" size="sm" className={styles.description}>
        {work.description}
      </Text>

      <div className={styles.footer}>
        {hasLinks && (
          <span className={styles.links}>
            {work.url && (
              <Anchor
                href={work.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                live
                <ArrowUpRight size={12} aria-hidden="true" />
              </Anchor>
            )}
            {work.githubUrl && (
              <Anchor
                href={work.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                source
                <ArrowUpRight size={12} aria-hidden="true" />
              </Anchor>
            )}
          </span>
        )}
      </div>
    </Card>
  );
}
