import { writeFileSync } from "node:fs";
import type { Note } from "../src/types";

const articles = await _fetchNotes();
writeFileSync("./data/notes.json", JSON.stringify(articles, null, 2));

// ---

type ZennArticle = {
  title: string;
  path: string;
  published_at: string;
};

async function _fetchNotes(): Promise<Note[]> {
  const endpoint =
    "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest";
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${await response.text()}`);
  }

  const { articles } = (await response.json()) as {
    articles: ZennArticle[];
  };
  return articles.map(({ title, path, published_at }) => ({
    title,
    url: new URL(path, "https://zenn.dev/").toString(),
    publishedAt: published_at,
  }));
}
