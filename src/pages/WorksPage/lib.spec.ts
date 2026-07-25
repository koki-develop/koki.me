import type { RepoStats, Work, WorkCategory } from "@/types";
import { describe, expect, test } from "vitest";
import { categoryCounts, filterWorks, resolveStars } from "./lib";

const categories: WorkCategory[] = ["Web", "Tool"];

// Deliberately interleaved: the two Web works sit either side of the Tool one,
// which is the ordering the flat list exists to allow.
const works: Work[] = [
  {
    name: "Koki Sato",
    category: "Web",
    description: "This portfolio site.",
    url: "https://koki.me",
    githubUrl: "https://github.com/koki-develop/koki.me",
  },
  {
    name: "cLive",
    category: "Tool",
    description: "A CLI tool that automates terminal operations.",
    githubUrl: "https://github.com/koki-develop/clive",
  },
  {
    name: "Codize",
    category: "Web",
    description: "A programming learning service for beginners.",
    url: "https://codize.dev",
  },
];

const repos: Record<string, RepoStats> = {
  "koki-develop/koki.me": { stars: 0 },
  "koki-develop/clive": { stars: 392 },
};

describe("filterWorks", () => {
  test("returns every work for the All category", () => {
    expect(filterWorks(works, "All")).toEqual(works);
  });

  test("returns only works matching the given category", () => {
    expect(filterWorks(works, "Tool")).toEqual([works[1]]);
  });

  test("keeps the declared order within a category", () => {
    expect(filterWorks(works, "Web")).toEqual([works[0], works[2]]);
  });

  test("returns an empty array for a category no work uses", () => {
    expect(filterWorks(works, "IME")).toEqual([]);
  });
});

describe("categoryCounts", () => {
  test("includes an All entry counting every work", () => {
    expect(categoryCounts(categories, works)).toEqual([
      { name: "All", count: 3 },
      { name: "Web", count: 2 },
      { name: "Tool", count: 1 },
    ]);
  });

  test("follows the given category order, not the order works appear in", () => {
    expect(categoryCounts(["Tool", "Web"], works).map((c) => c.name)).toEqual([
      "All",
      "Tool",
      "Web",
    ]);
  });

  test("keeps a category with no works, at zero", () => {
    expect(categoryCounts(["IME"], works)).toEqual([
      { name: "All", count: 3 },
      { name: "IME", count: 0 },
    ]);
  });

  test("returns just All with a zero count for no works", () => {
    expect(categoryCounts([], [])).toEqual([{ name: "All", count: 0 }]);
  });
});

describe("resolveStars", () => {
  test("returns the repo's star count when it exists", () => {
    expect(resolveStars(works[1], repos)).toBe(392);
  });

  test("returns undefined for a work without a githubUrl", () => {
    const work: Work = {
      name: "No source",
      category: "Web",
      description: "",
      url: "https://example.com",
    };
    expect(resolveStars(work, repos)).toBeUndefined();
  });

  test("returns undefined when the repo slug is unknown", () => {
    const work: Work = {
      name: "Unknown repo",
      category: "Tool",
      description: "",
      githubUrl: "https://github.com/koki-develop/does-not-exist",
    };
    expect(resolveStars(work, repos)).toBeUndefined();
  });
});
