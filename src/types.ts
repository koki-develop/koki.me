export type Config = {
  profile: Profile;
  socials: Socials;
  skills: Skill[];
  certifications: Certification[];
  // Only decides the order of the category filter's buttons. Work order is
  // independent of it — see `works`.
  workCategories: WorkCategory[];
  // A single flat list, in display order, so a work can be placed anywhere
  // regardless of its category.
  works: Work[];
};

export type Profile = {
  name: string;
  // Job title, used where `bio` would be too long to read — currently the OG
  // image, which gives it a single line under the name.
  role: string;
  bio: string;
};

export type SocialName = "GitHub" | "X" | "Bluesky" | "Zenn";

export type Social = {
  name: SocialName;
  url: string;
  handle: string;
};

export type Socials = Record<SocialName, Social>;

export type Skill = {
  name: string;
  url: string;
};

export type Certification = {
  name: string;
  url: string;
  issuer: string;
  year: number;
};

// A closed union rather than a bare string: a work naming a category that
// doesn't exist would render under "All" and under no filter at all, which is
// invisible until someone clicks the right button.
export type WorkCategory = "Web" | "Tool" | "Extension" | "IME";

export type Work = {
  name: string;
  description: string;
  category: WorkCategory;
} & (
  | {
      url: string;
      githubUrl: string;
    }
  | {
      url: string;
      githubUrl?: undefined;
    }
  | {
      url?: undefined;
      githubUrl: string;
    }
);

export type Note = {
  title: string;
  url: string;
  publishedAt: string;
  topics: NoteTopic[];
};

export type NoteTopic = {
  name: string;
  imageUrl: string;
};

// GitHub build-time data (data/github.json)

export type GitHubData = {
  contributions: Contributions;
  repos: Record<string, RepoStats>;
};

export type Contributions = {
  total: number;
  days: ContributionDay[];
};

export type ContributionDay = {
  date: string; // YYYY-MM-DD
  count: number;
};

export type RepoStats = {
  stars: number;
};
