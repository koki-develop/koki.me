import { parseRepoSlug } from "@/lib/github";
import type { RepoStats, Work, WorkCategory } from "@/types";

export type CategoryGroup = {
  category: WorkCategory;
  works: Work[];
};

export function groupByCategory(
  categories: WorkCategory[],
  works: Work[],
): CategoryGroup[] {
  return (
    categories
      .map((category) => ({
        category,
        works: works.filter((work) => work.category === category),
      }))
      // A category nothing is listed under would render as a heading with no
      // list beneath it, so it is dropped rather than shown empty.
      .filter((group) => group.works.length > 0)
  );
}

export function resolveStars(
  work: Work,
  repos: Record<string, RepoStats>,
): number | undefined {
  if (!work.githubUrl) return undefined;
  return repos[parseRepoSlug(work.githubUrl)]?.stars;
}
