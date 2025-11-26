import AWSCLFBadge from "@/assets/certification/aws-clf.png";
import AWSDOPBadge from "@/assets/certification/aws-dop.png";
import AWSDVABadge from "@/assets/certification/aws-dva.png";
import AWSSAABadge from "@/assets/certification/aws-saa.png";
import AWSSOABadge from "@/assets/certification/aws-soa.png";
import AWSIcon from "@/assets/skill/aws.svg?react";
import GoIcon from "@/assets/skill/go.svg?react";
import JavaScriptIcon from "@/assets/skill/javascript.svg?react";
import NextJSIcon from "@/assets/skill/nextjs.svg?react";
import ReactIcon from "@/assets/skill/react.svg?react";
import TerraformIcon from "@/assets/skill/terraform.svg?react";
import TypeScriptIcon from "@/assets/skill/typescript.svg?react";
import BlueskyIcon from "@/assets/social/bluesky.svg?react";
import GitHubIcon from "@/assets/social/github.svg?react";
import XIcon from "@/assets/social/x.svg?react";
import ZennIcon from "@/assets/social/zenn.svg?react";
import type { Config } from "./src/types";

const config: Config = {
  profile: {
    name: "Koki Sato",
    bio: "埼玉県在住の 27 歳。のんびり生きています。",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/koki-develop",
      handle: "koki-develop",
      icon: GitHubIcon,
    },
    {
      name: "X",
      url: "https://x.com/koki_develop",
      handle: "koki_develop",
      icon: XIcon,
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/koki.me",
      handle: "koki.me",
      icon: BlueskyIcon,
    },
    {
      name: "Zenn",
      url: "https://zenn.dev/kou_pg_0131",
      handle: "kou_pg_0131",
      icon: ZennIcon,
    },
  ],

  skills: [
    {
      name: "Go",
      url: "https://golang.org",
      icon: GoIcon,
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org",
      icon: TypeScriptIcon,
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/docs/Web/JavaScript",
      icon: JavaScriptIcon,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      icon: ReactIcon,
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      icon: NextJSIcon,
    },
    {
      name: "Terraform",
      url: "https://www.terraform.io",
      icon: TerraformIcon,
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com",
      icon: AWSIcon,
    },
  ],

  certifications: [
    {
      name: "AWS Certified DevOps Engineer - Professional",
      url: "https://www.credly.com/badges/acb69e55-f79c-428c-a706-ba1e741980b4/public_url",
      imageUrl: AWSDOPBadge,
    },
    {
      name: "AWS Certified Solutions Architect - Professional",
      imageUrl: AWSSAABadge,
      url: "https://www.credly.com/badges/77ea1b7d-d676-4b47-a099-a1152e7b0cd7/public_url",
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      url: "https://www.credly.com/badges/a6b750f7-2601-4582-8131-3974e08eee5f/public_url",
      imageUrl: AWSSAABadge,
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      url: "https://www.credly.com/badges/385e90d5-3f8e-470a-bf87-51353ce88677/public_url",
      imageUrl: AWSSOABadge,
    },
    {
      name: "AWS Certified Developer - Associate",
      url: "https://www.credly.com/badges/f88839f5-1909-4869-8cc5-432a2b987871/public_url",
      imageUrl: AWSDVABadge,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/fbf0ac8b-fa6b-4cf2-af2c-c69aa888d3b4/public_url",
      imageUrl: AWSCLFBadge,
    },
  ],
};

export default config;
