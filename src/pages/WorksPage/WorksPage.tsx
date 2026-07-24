import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import githubData from "@/data/github.json";
import type { GitHubData } from "@/types";
import { Grid, Heading, Text } from "@ps1ui/core";
import { useMemo, useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { GithubActivityCard } from "./components/GithubActivityCard";
import { WorkCard } from "./components/WorkCard";
import { categoryCounts, filterWorks, flattenWorks } from "./lib";
import styles from "./WorksPage.module.css";

const github = githubData as GitHubData;

export function WorksPage() {
  const [category, setCategory] = useState("All");

  const items = useMemo(() => flattenWorks(config.workCategories), []);
  const counts = useMemo(() => categoryCounts(config.workCategories), []);
  const filtered = useMemo(
    () => filterWorks(items, category),
    [items, category],
  );

  return (
    <div>
      <SourceComment>works.tsx</SourceComment>

      <Heading level={2} className={styles.heading}>
        Works
      </Heading>
      <Text variant="muted" className={styles.subtitle}>
        {items.length} projects
      </Text>

      <GithubActivityCard contributions={github.contributions} />

      <CategoryFilter
        categories={counts}
        active={category}
        onChange={setCategory}
      />

      <Grid columns={{ base: 1, md: 2 }} gap="lg">
        {filtered.map(({ work, category: workCategory }) => (
          <WorkCard
            key={work.name}
            work={work}
            category={workCategory}
            repos={github.repos}
          />
        ))}
      </Grid>
    </div>
  );
}
