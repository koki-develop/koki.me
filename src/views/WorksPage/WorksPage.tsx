import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import githubData from "@/data/github.json";
import type { GitHubData } from "@/types";
import { Grid, GridItem, Stack } from "@ps1ui/core";
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
import styles from "./WorksPage.module.css";

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
    // `queryContainer` makes this Stack the query context the Grid below
    // resolves its `columns` breakpoints against. Without it they fall through
    // to PS1Root — i.e. the window — which counts the Explorer and the gutter
    // as usable width and flips to two columns while the content column is
    // still narrow (194px cards at a 800px window).
    <Stack gap="xl" queryContainer>
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

      {/* A <ul>, so the cards announce as "list, N items". Breakpoints resolve
          against the page Stack above, i.e. the editor content column: `sm`
          (40rem) is the width at which two cards still measure 312px each. */}
      <Grid as="ul" columns={{ base: 1, sm: 2 }} gap="lg">
        {filtered.map((work) => (
          <GridItem as="li" key={work.name} className={styles.item}>
            <WorkCard work={work} repos={github.repos} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
