import type { RepoStats, Work } from "@/types";
import { Anchor, Badge, Card, Stack, Text } from "@ps1ui/core";
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
    <Card>
      <Stack gap="sm" className={styles.content}>
        <Stack direction="row" align="center" justify="between" gap="sm">
          <Text as="span" size="md" weight="bold">
            <Anchor
              variant="subtle"
              href={work.url ?? work.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {work.name}
            </Anchor>
          </Text>
          {typeof stars === "number" && stars > 0 && (
            <Text as="span" variant="muted" size="xs" className={styles.stars}>
              <Star size={12} aria-hidden="true" />
              {stars}
            </Text>
          )}
        </Stack>

        <Badge variant="outline" color="muted" className={styles.category}>
          {category}
        </Badge>

        <Text variant="muted" size="sm" className={styles.description}>
          {work.description}
        </Text>

        {hasLinks && (
          <Stack direction="row" align="center" justify="end" gap="md">
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
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
