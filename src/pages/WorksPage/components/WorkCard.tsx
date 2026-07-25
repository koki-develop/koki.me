import type { RepoStats, Work } from "@/types";
import { Anchor, Badge, Card, Stack, Text } from "@ps1ui/core";
import { ArrowUpRight, Star } from "lucide-react";
import { resolveStars } from "../lib";
import styles from "./WorkCard.module.css";

type WorkCardProps = {
  work: Work;
  repos: Record<string, RepoStats>;
};

export function WorkCard({ work, repos }: WorkCardProps) {
  const stars = resolveStars(work, repos);
  const hasLinks = Boolean(work.url || work.githubUrl);

  return (
    <Card>
      <Stack gap="sm" className={styles.content}>
        <Stack direction="row" align="center" justify="between" gap="sm">
          {/* Still wrapped in a Text: Anchor carries `size` but no `weight`,
              and the card title is the one link on the page that needs to be
              bold. */}
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
            <Text
              as="span"
              variant="muted"
              size="xs"
              leading={<Star size={12} aria-hidden="true" />}
              className={styles.stars}
            >
              {stars}
            </Text>
          )}
        </Stack>

        <Badge variant="outline" color="muted" className={styles.category}>
          {work.category}
        </Badge>

        <Text variant="muted" size="sm" className={styles.description}>
          {work.description}
        </Text>

        {hasLinks && (
          <Stack direction="row" align="center" justify="end" gap="md">
            {work.url && (
              <Anchor
                size="xs"
                trailing={<ArrowUpRight size={12} aria-hidden="true" />}
                href={work.url}
                target="_blank"
                rel="noreferrer"
              >
                live
              </Anchor>
            )}
            {work.githubUrl && (
              <Anchor
                size="xs"
                trailing={<ArrowUpRight size={12} aria-hidden="true" />}
                href={work.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                source
              </Anchor>
            )}
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
