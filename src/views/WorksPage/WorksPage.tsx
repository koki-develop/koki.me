import { SectionHeading } from "@/components/SectionHeading";
import config from "@/config";
import githubData from "@/data/github.json";
import type { GitHubData } from "@/types";
import { List, Stack } from "@ps1ui/core";
import { GithubActivityCard } from "./components/GithubActivityCard";
import { WorkRow } from "./components/WorkRow";
import { WorksPageHeader } from "./components/WorksPageHeader";
import { groupByCategory } from "./lib";

const github = githubData as GitHubData;

const groups = groupByCategory(config.workCategories, config.works);

export function WorksPage() {
  return (
    <Stack gap="xl">
      <WorksPageHeader count={config.works.length} />

      <GithubActivityCard contributions={github.contributions} />

      {groups.map((group) => (
        <Stack key={group.category} gap="md">
          <SectionHeading>{group.category}</SectionHeading>
          <List>
            {group.works.map((work) => (
              <WorkRow key={work.name} work={work} repos={github.repos} />
            ))}
          </List>
        </Stack>
      ))}
    </Stack>
  );
}
