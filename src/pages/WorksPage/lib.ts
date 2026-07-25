import { parseRepoSlug } from "@/lib/github";
import type { RepoStats, Work, WorkCategory } from "@/types";

export const ALL_CATEGORY = "All";

// The filter has one more state than there are categories: the pseudo-category
// that selects everything.
export type CategoryFilterValue = WorkCategory | typeof ALL_CATEGORY;

export type CategoryCount = {
  name: CategoryFilterValue;
  count: number;
};

export function filterWorks(
  works: Work[],
  category: CategoryFilterValue,
): Work[] {
  if (category === ALL_CATEGORY) return works;
  return works.filter((work) => work.category === category);
}

export function categoryCounts(
  categories: WorkCategory[],
  works: Work[],
): CategoryCount[] {
  return [
    { name: ALL_CATEGORY, count: works.length },
    ...categories.map((category) => ({
      name: category,
      count: works.filter((work) => work.category === category).length,
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
