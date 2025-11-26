import type { FunctionComponent, SVGProps } from "react";

export type Config = {
  profile: Profile;
  socials: Social[];
  skills: Skill[];
  certifications: Certification[];
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
