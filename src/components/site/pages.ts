export type SitePage = {
  path: string;
  label: string;
  /**
   * One-line summary of what the page holds, annotating the links the About
   * page's Explore section builds out of this list.
   */
  description: string;
};

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    label: "About",
    description: "Who I am",
  },
  {
    path: "/works",
    label: "Works",
    description: "Projects I've built",
  },
  {
    path: "/notes",
    label: "Notes",
    description: "Articles published on Zenn",
  },
];
