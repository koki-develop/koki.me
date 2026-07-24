import { parseRepoSlug } from "@/lib/github";
import type { RepoStats, Work, WorkCategory } from "@/types";

export type FlattenedWork = {
  work: Work;
  category: string;
};

export type CategoryCount = {
  name: string;
  count: number;
};

const ALL_CATEGORY = "All";

export function flattenWorks(categories: WorkCategory[]): FlattenedWork[] {
  return categories.flatMap((category) =>
    category.works.map((work) => ({ work, category: category.name })),
  );
}

export function filterWorks(
  items: FlattenedWork[],
  category: string,
): FlattenedWork[] {
  if (category === ALL_CATEGORY) return items;
  return items.filter((item) => item.category === category);
}

export function categoryCounts(categories: WorkCategory[]): CategoryCount[] {
  const total = categories.reduce(
    (sum, category) => sum + category.works.length,
    0,
  );
  return [
    { name: ALL_CATEGORY, count: total },
    ...categories.map((category) => ({
      name: category.name,
      count: category.works.length,
    })),
  ];
}

export function resolveStars(
  work: Work,
  repos: Record<string, RepoStats>,
): number | undefined {
  if (!work.githubUrl) return undefined;
  return repos[parseRepoSlug(work.githubUrl)]?.stars;
}
