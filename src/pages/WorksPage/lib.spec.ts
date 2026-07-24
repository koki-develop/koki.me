import type { RepoStats, Work, WorkCategory } from "@/types";
import { describe, expect, test } from "vitest";
import { categoryCounts, filterWorks, flattenWorks, resolveStars } from "./lib";

const categories: WorkCategory[] = [
  {
    name: "Web",
    works: [
      {
        name: "Koki Sato",
        description: "This portfolio site.",
        url: "https://koki.me",
        githubUrl: "https://github.com/koki-develop/koki.me",
      },
      {
        name: "Codize",
        description: "A programming learning service for beginners.",
        url: "https://codize.dev",
      },
    ],
  },
  {
    name: "Tool",
    works: [
      {
        name: "cLive",
        description: "A CLI tool that automates terminal operations.",
        githubUrl: "https://github.com/koki-develop/clive",
      },
    ],
  },
];

const repos: Record<string, RepoStats> = {
  "koki-develop/koki.me": { stars: 0 },
  "koki-develop/clive": { stars: 392 },
};

describe("flattenWorks", () => {
  test("attaches each work to its category name", () => {
    const result = flattenWorks(categories);
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      work: categories[0].works[0],
      category: "Web",
    });
    expect(result[2]).toEqual({
      work: categories[1].works[0],
      category: "Tool",
    });
  });

  test("returns an empty array for no categories", () => {
    expect(flattenWorks([])).toEqual([]);
  });
});

describe("filterWorks", () => {
  const items = flattenWorks(categories);

  test("returns every item for the All category", () => {
    expect(filterWorks(items, "All")).toEqual(items);
  });

  test("returns only items matching the given category", () => {
    const result = filterWorks(items, "Tool");
    expect(result).toEqual([
      { work: categories[1].works[0], category: "Tool" },
    ]);
  });

  test("returns an empty array for an unknown category", () => {
    expect(filterWorks(items, "Nonexistent")).toEqual([]);
  });
});

describe("categoryCounts", () => {
  test("includes an All entry summing every category", () => {
    expect(categoryCounts(categories)).toEqual([
      { name: "All", count: 3 },
      { name: "Web", count: 2 },
      { name: "Tool", count: 1 },
    ]);
  });

  test("returns just All with a zero count for no categories", () => {
    expect(categoryCounts([])).toEqual([{ name: "All", count: 0 }]);
  });
});

describe("resolveStars", () => {
  test("returns the repo's star count when it exists", () => {
    const work: Work = categories[1].works[0];
    expect(resolveStars(work, repos)).toBe(392);
  });

  test("returns undefined for a work without a githubUrl", () => {
    const work: Work = {
      name: "No source",
      description: "",
      url: "https://example.com",
    };
    expect(resolveStars(work, repos)).toBeUndefined();
  });

  test("returns undefined when the repo slug is unknown", () => {
    const work: Work = {
      name: "Unknown repo",
      description: "",
      githubUrl: "https://github.com/koki-develop/does-not-exist",
    };
    expect(resolveStars(work, repos)).toBeUndefined();
  });
});
