import { writeFileSync } from "node:fs";
import pLimit from "p-limit";
import config from "../config";
import { parseRepoSlug } from "../src/lib/github";
import type { Contributions, GitHubData, RepoStats } from "../src/types";

const GITHUB_USER = "koki-develop";

const data: GitHubData = {
  contributions: await _fetchContributions(),
  repos: await _fetchRepoStats(),
};
writeFileSync("./data/github.json", JSON.stringify(data, null, 2));

// ---

function _githubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

function _repoSlugs(): string[] {
  const slugs = new Set<string>();

  for (const work of config.works) {
    if (!work.githubUrl) continue;
    slugs.add(parseRepoSlug(work.githubUrl));
  }

  return [...slugs];
}

async function _fetchRepoStats(): Promise<Record<string, RepoStats>> {
  const slugs = _repoSlugs();
  const limit = pLimit(2);

  const entries = await Promise.all(
    slugs.map((slug) =>
      limit(async (): Promise<[string, RepoStats]> => {
        const endpoint = `https://api.github.com/repos/${slug}`;
        console.info(`Fetching repo stats: ${endpoint}`);
        const response = await fetch(endpoint, { headers: _githubHeaders() });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch repo stats for ${slug}: ${response.status} ${await response.text()}`,
          );
        }

        const repo = (await response.json()) as {
          stargazers_count: number;
        };

        return [slug, { stars: repo.stargazers_count }];
      }),
    ),
  );

  return Object.fromEntries(entries);
}

async function _fetchContributions(): Promise<Contributions> {
  if (process.env.GITHUB_TOKEN) {
    return await _fetchContributionsFromGraphQL();
  }
  return await _fetchContributionsFromFallback();
}

async function _fetchContributionsFromGraphQL(): Promise<Contributions> {
  const endpoint = "https://api.github.com/graphql";
  console.info(`Fetching contributions: ${endpoint}`);

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      ..._githubHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch contributions: ${response.status} ${await response.text()}`,
    );
  }

  const json = (await response.json()) as {
    errors?: { message: string }[];
    data?: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: { date: string; contributionCount: number }[];
            }[];
          };
        };
      };
    };
  };
  if (json.errors?.length) {
    throw new Error(
      `Failed to fetch contributions: ${json.errors.map((e) => e.message).join(", ")}`,
    );
  }
  if (!json.data) {
    throw new Error("Failed to fetch contributions: no data returned");
  }

  const calendar = json.data.user.contributionsCollection.contributionCalendar;

  return {
    total: calendar.totalContributions,
    days: calendar.weeks
      .flatMap((week) => week.contributionDays)
      .map(({ date, contributionCount }) => ({
        date,
        count: contributionCount,
      }))
      .sort((a, b) => a.date.localeCompare(b.date)),
  };
}

async function _fetchContributionsFromFallback(): Promise<Contributions> {
  const endpoint = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;
  console.info(`Fetching contributions: ${endpoint}`);

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch contributions: ${response.status} ${await response.text()}`,
    );
  }

  const json = (await response.json()) as {
    total: Record<string, number>;
    contributions: { date: string; count: number; level: number }[];
  };

  const total = Object.values(json.total).reduce((sum, n) => sum + n, 0);

  return {
    total,
    days: json.contributions
      .map(({ date, count }) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date)),
  };
}
