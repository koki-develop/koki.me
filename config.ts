import type { Config } from "./src/types";

const config: Config = {
  profile: {
    name: "Koki Sato",
    bio: "Web engineer building developer tools, CLIs, and web apps.",
  },

  socials: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/koki-develop",
      handle: "koki-develop",
    },
    X: {
      name: "X",
      url: "https://x.com/koki_develop",
      handle: "koki_develop",
    },
    Bluesky: {
      name: "Bluesky",
      url: "https://bsky.app/profile/koki.me",
      handle: "koki.me",
    },
    Zenn: {
      name: "Zenn",
      url: "https://zenn.dev/kou_pg_0131",
      handle: "kou_pg_0131",
    },
  },

  skills: [
    {
      name: "Go",
      url: "https://golang.org",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    {
      name: "React",
      url: "https://reactjs.org",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
    },
    {
      name: "Terraform",
      url: "https://www.terraform.io",
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com",
    },
  ],

  certifications: [
    {
      name: "AWS Certified DevOps Engineer - Professional",
      url: "https://www.credly.com/badges/acb69e55-f79c-428c-a706-ba1e741980b4/public_url",
      issuer: "Amazon Web Services",
      year: 2025,
    },
    {
      name: "AWS Certified Solutions Architect - Professional",
      url: "https://www.credly.com/badges/77ea1b7d-d676-4b47-a099-a1152e7b0cd7/public_url",
      issuer: "Amazon Web Services",
      year: 2025,
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      url: "https://www.credly.com/badges/a6b750f7-2601-4582-8131-3974e08eee5f/public_url",
      issuer: "Amazon Web Services",
      year: 2022,
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      url: "https://www.credly.com/badges/385e90d5-3f8e-470a-bf87-51353ce88677/public_url",
      issuer: "Amazon Web Services",
      year: 2023,
    },
    {
      name: "AWS Certified Developer - Associate",
      url: "https://www.credly.com/badges/f88839f5-1909-4869-8cc5-432a2b987871/public_url",
      issuer: "Amazon Web Services",
      year: 2024,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/fbf0ac8b-fa6b-4cf2-af2c-c69aa888d3b4/public_url",
      issuer: "Amazon Web Services",
      year: 2025,
    },
  ],

  workCategories: [
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
        {
          name: "Thredot",
          description: "A thread-style memo service.",
          url: "https://thredot.org",
        },
        {
          name: "Badge Generator",
          description: "A badge generation service.",
          url: "https://badgen.org",
          githubUrl: "https://github.com/koki-develop/badge-generator",
        },
        {
          name: "Gallery",
          description:
            "A sample app whose backend, frontend, and infrastructure are all built with Terraform.",
          url: "https://tftftf.gallery",
          githubUrl: "https://github.com/koki-develop/gallery",
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
        {
          name: "gat",
          description: "A cat command written in Go.",
          githubUrl: "https://github.com/koki-develop/gat",
        },
        {
          name: "Cork",
          description: "A markdown-file-based kanban app.",
          githubUrl: "https://github.com/koki-develop/Cork",
        },
        {
          name: "Codize Sandbox",
          description: "A sandboxed code execution engine.",
          githubUrl: "https://github.com/codize-dev/sandbox",
        },
        {
          name: "ghasec",
          description:
            "A static analysis tool for GitHub Actions workflow definitions.",
          githubUrl: "https://github.com/koki-develop/ghasec",
        },
        {
          name: "ghats",
          description:
            "A tool for writing GitHub Actions workflow definitions in TypeScript.",
          githubUrl: "https://github.com/koki-develop/ghats",
        },
      ],
    },
    {
      name: "Extension",
      works: [
        {
          name: "AWS Masking",
          description:
            "A Chrome extension that automatically masks sensitive information on the AWS Management Console.",
          url: "https://chromewebstore.google.com/detail/aws-masking/nblpfncgdloilgeicnnlihegobmhjifb",
          githubUrl: "https://github.com/koki-develop/aws-masking",
        },
      ],
    },
    {
      name: "IME",
      works: [
        {
          name: "Koto",
          description: "An IME for macOS.",
          githubUrl: "https://github.com/koki-develop/Koto",
        },
        {
          name: "NyaIME",
          description: "An IME for cats.",
          githubUrl: "https://github.com/koki-develop/NyaIME",
        },
      ],
    },
  ],
};

export default config;
