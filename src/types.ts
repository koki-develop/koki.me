import type { FunctionComponent, SVGProps } from "react";
import type { IconType } from "react-icons";

export type Config = {
  profile: Profile;
  socials: Social[];
  skills: Skill[];
  certifications: Certification[];
  workCategories: WorkCategory[];
};

export type Profile = {
  name: string;
  bio: string;
};

export type Social = {
  name: string;
  url: string;
  handle: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type Skill = {
  name: string;
  url: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type Certification = {
  name: string;
  url: string;
  imageUrl: string;
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
  icon: IconType;
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
