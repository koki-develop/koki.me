import { writeFileSync } from "node:fs";

const articles = await _fetchArticles();
writeFileSync("./data/articles.json", JSON.stringify(articles, null, 2));

// ---

type Article = {
  title: string;
  path: string;
  published_at: string;
};

async function _fetchArticles(): Promise<Article[]> {
  const endpoint =
    "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest";
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${await response.text()}`);
  }

  const { articles } = (await response.json()) as {
    articles: { title: string; path: string; published_at: string }[];
  };
  return articles.map(({ title, path, published_at }) => ({
    title,
    path,
    published_at,
  }));
}
