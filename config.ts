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
import { LuChrome, LuGlobe, LuKeyboard, LuTerminal } from "react-icons/lu";
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

  workCategories: [
    {
      name: "Web Application",
      icon: LuGlobe,
      works: [
        {
          name: "Koki Sato",
          description: "ポートフォリオサイト。",
          url: "https://koki.me",
          githubUrl: "https://github.com/koki-develop/koki.me",
        },
        {
          name: "Thredot",
          description: "スレッド形式のメモサービス。",
          url: "https://thredot.org",
        },
        {
          name: "SAMARI",
          description: "技術ニュースの要約サービス。",
          url: "https://samari.news",
          githubUrl: "https://github.com/koki-develop/samari",
        },
        {
          name: "BBalloon",
          description: "Bluesky のフォロー / フォロワー管理サービス。",
          url: "https://bballoon.social",
        },
        {
          name: "Badge Generator",
          description: "バッジ生成サービス。",
          url: "https://badgen.org",
          githubUrl: "https://github.com/koki-develop/badge-generator",
        },
        {
          name: "Gallery",
          description:
            "バックエンド・フロントエンド・インフラを Terraform でつくったサンプルアプリ。",
          url: "https://tftftf.gallery",
          githubUrl: "https://github.com/koki-develop/gallery",
        },
      ],
    },
    {
      name: "Tool",
      icon: LuTerminal,
      works: [
        {
          name: "cLive",
          description: "ターミナル操作を自動化するコマンドラインツール。",
          githubUrl: "https://github.com/koki-develop/clive",
        },
        {
          name: "gat",
          description: "Go 製の cat コマンド。",
          githubUrl: "https://github.com/koki-develop/gat",
        },
        {
          name: "mmcp",
          description:
            "複数の AI エージェントツールの MCP サーバー設定を一括管理するコマンドラインツール。",
          githubUrl: "https://github.com/koki-develop/mmcp",
        },
        {
          name: "cat-code",
          description: "猫のコーディングエージェント。",
          githubUrl: "https://github.com/koki-develop/cat-code",
        },
        {
          name: "ghats",
          description:
            "TypeScript で GitHub Actions Workflow 定義を記述するツール。",
          githubUrl: "https://github.com/koki-develop/ghats",
        },
        {
          name: "git-aicommit",
          description:
            "AI でコミットメッセージを生成するコマンドラインツール。",
          githubUrl: "https://github.com/koki-develop/git-aicommit",
        },
      ],
    },
    {
      name: "Chrome Extension",
      icon: LuChrome,
      works: [
        {
          name: "AWS Masking",
          description:
            "AWS マネジメントコンソール上の秘匿情報を自動で隠す Chrome 拡張。",
          url: "https://chromewebstore.google.com/detail/aws-masking/nblpfncgdloilgeicnnlihegobmhjifb",
          githubUrl: "https://github.com/koki-develop/aws-masking",
        },
      ],
    },
    {
      name: "IME",
      icon: LuKeyboard,
      works: [
        {
          name: "Koto",
          description: "Mac 用の IME 。",
          githubUrl: "https://github.com/koki-develop/Koto",
        },
        {
          name: "NyaIME",
          description: "猫用の IME 。",
          githubUrl: "https://github.com/koki-develop/NyaIME",
        },
      ],
    },
  ],
};

export default config;
