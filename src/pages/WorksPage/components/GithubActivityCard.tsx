import type { Contributions } from "@/types";
import { ContributionGraph, Stack, Text } from "@ps1ui/core";

type GithubActivityCardProps = {
  contributions: Contributions;
};

export function GithubActivityCard({ contributions }: GithubActivityCardProps) {
  return (
    <Stack gap="lg">
      <Text variant="subtle" size="xs">
        {contributions.total.toLocaleString("en-US")} contributions in the last
        year
      </Text>
      <ContributionGraph data={contributions.days} />
    </Stack>
  );
}
