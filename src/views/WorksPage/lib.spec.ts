import type { RepoStats, Work, WorkCategory } from "@/types";
import { describe, expect, test } from "vitest";
import { groupByCategory, resolveStars } from "./lib";

const categories: WorkCategory[] = ["Web", "CLI"];

// Deliberately interleaved: the two Web works sit either side of the CLI one,
// so grouping them has to gather works that are not adjacent in the source
// list.
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
    category: "CLI",
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

describe("groupByCategory", () => {
  test("gathers every work under its own category", () => {
    expect(groupByCategory(categories, works)).toEqual([
      { category: "Web", works: [works[0], works[2]] },
      { category: "CLI", works: [works[1]] },
    ]);
  });

  test("follows the given category order, not the order works appear in", () => {
    expect(
      groupByCategory(["CLI", "Web"], works).map((g) => g.category),
    ).toEqual(["CLI", "Web"]);
  });

  test("keeps the declared order of works within a category", () => {
    expect(groupByCategory(["Web"], works)[0].works).toEqual([
      works[0],
      works[2],
    ]);
  });

  test("drops a category no work uses", () => {
    expect(groupByCategory(["IME", "Web"], works)).toEqual([
      { category: "Web", works: [works[0], works[2]] },
    ]);
  });

  test("returns an empty array when there are no works", () => {
    expect(groupByCategory(categories, [])).toEqual([]);
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
      category: "CLI",
      description: "",
      githubUrl: "https://github.com/koki-develop/does-not-exist",
    };
    expect(resolveStars(work, repos)).toBeUndefined();
  });
});
