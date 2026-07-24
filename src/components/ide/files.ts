export type IdeFile = {
  path: string;
  name: string;
  language: string;
};

export const IDE_FILES: IdeFile[] = [
  { path: "/", name: "about.md", language: "Markdown" },
  { path: "/works", name: "works.tsx", language: "TSX" },
  { path: "/notes", name: "notes.md", language: "Markdown" },
];

export function findIdeFile(pathname: string): IdeFile | undefined {
  return IDE_FILES.find((file) => file.path === pathname);
}
