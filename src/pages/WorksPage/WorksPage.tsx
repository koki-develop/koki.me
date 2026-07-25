import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import githubData from "@/data/github.json";
import type { GitHubData } from "@/types";
import { Grid, Stack } from "@ps1ui/core";
import { useMemo, useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { GithubActivityCard } from "./components/GithubActivityCard";
import { WorkCard } from "./components/WorkCard";
import { WorksPageHeader } from "./components/WorksPageHeader";
import {
  ALL_CATEGORY,
  type CategoryFilterValue,
  categoryCounts,
  filterWorks,
} from "./lib";

const github = githubData as GitHubData;

export function WorksPage() {
  const [category, setCategory] = useState<CategoryFilterValue>(ALL_CATEGORY);

  const counts = useMemo(
    () => categoryCounts(config.workCategories, config.works),
    [],
  );
  const filtered = useMemo(
    () => filterWorks(config.works, category),
    [category],
  );

  return (
    <Stack gap="xl">
      <Stack gap="md">
        <SourceComment>works.tsx</SourceComment>
        <WorksPageHeader count={config.works.length} />
      </Stack>

      <GithubActivityCard contributions={github.contributions} />

      <CategoryFilter
        categories={counts}
        active={category}
        onChange={setCategory}
      />

      {/* Breakpoints resolve against the nearest container, which is this
          page's own Stack — i.e. the editor content column, not the window.
          `sm` (40rem) keeps every card at 312px or wider. */}
      <Grid columns={{ base: 1, sm: 2 }} gap="lg">
        {filtered.map((work) => (
          <WorkCard key={work.name} work={work} repos={github.repos} />
        ))}
      </Grid>
    </Stack>
  );
}
