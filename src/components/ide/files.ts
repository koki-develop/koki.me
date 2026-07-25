export type IdeFile = {
  path: string;
  name: string;
  language: string;
  /**
   * One-line summary of what the file holds, annotating the links the About
   * page's Next section builds out of this list.
   */
  description: string;
};

export const IDE_FILES: IdeFile[] = [
  {
    path: "/",
    name: "about.md",
    language: "Markdown",
    description: "Who I am",
  },
  {
    path: "/works",
    name: "works.tsx",
    language: "TSX",
    description: "Projects I've built",
  },
  {
    path: "/notes",
    name: "notes.md",
    language: "Markdown",
    description: "Articles published on Zenn",
  },
];

export function findIdeFile(pathname: string): IdeFile | undefined {
  return IDE_FILES.find((file) => file.path === pathname);
}
