export type Config = {
  profile: Profile;
  socials: Socials;
  skills: Skill[];
  certifications: Certification[];
  workCategories: WorkCategory[];
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

export type Work = {
  name: string;
  description: string;
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

export type WorkCategory = {
  name: string;
  works: Work[];
};

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
