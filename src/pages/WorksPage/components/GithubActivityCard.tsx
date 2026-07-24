import type { Contributions } from "@/types";
import { Card, ContributionGraph, Text } from "@ps1ui/core";
import styles from "./GithubActivityCard.module.css";

type GithubActivityCardProps = {
  contributions: Contributions;
};

export function GithubActivityCard({ contributions }: GithubActivityCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Text as="span" variant="body" size="sm" weight="bold">
          GitHub activity
        </Text>
        <Text as="span" variant="subtle" size="xs">
          {contributions.total.toLocaleString("en-US")} contributions in the
          last year
        </Text>
      </div>
      <div className={styles.graph}>
        <ContributionGraph data={contributions.days} />
      </div>
    </Card>
  );
}
