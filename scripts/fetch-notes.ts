import { writeFileSync } from "node:fs";
import pLimit from "p-limit";
import type { Note } from "../src/types";

const articles = await _fetchNotes();
writeFileSync("./data/notes.json", JSON.stringify(articles, null, 2));

// ---

type ZennArticle = {
  title: string;
  slug: string;
  path: string;
  published_at: string;
  topics: { display_name: string; image_url: string }[];
};

async function _fetchZennArticles(): Promise<ZennArticle[]> {
  const endpoint =
    "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest";
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${await response.text()}`);
  }

  const { articles } = (await response.json()) as {
    articles: ZennArticle[];
  };

  const limit = pLimit(2);

  return await Promise.all(
    articles.map((article) =>
      limit(async () => {
        const endpoint = `https://zenn.dev/api/articles/${article.slug}`;
        console.info(`Fetching article details: ${endpoint}`);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${await response.text()}`);
        }

        const { article: detailedArticle } = (await response.json()) as {
          article: ZennArticle;
        };
        return detailedArticle;
      }),
    ),
  );
}

async function _fetchNotes(): Promise<Note[]> {
  const articles = await _fetchZennArticles();

  return articles.map(({ title, path, published_at, topics }) => ({
    title,
    url: new URL(path, "https://zenn.dev/").toString(),
    publishedAt: published_at,
    topics: topics.map(({ display_name, image_url }) => ({
      name: display_name,
      imageUrl: image_url,
    })),
  }));
}
