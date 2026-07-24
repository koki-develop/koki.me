/**
 * Extracts "owner/repo" from a GitHub repository URL, matching the key
 * format used in data/github.json's `repos` map.
 */
export function parseRepoSlug(githubUrl: string): string {
  const { pathname } = new URL(githubUrl);
  const [owner, repo] = pathname.split("/").filter(Boolean);
  if (!owner || !repo) {
    throw new Error(`Failed to parse GitHub repo slug: ${githubUrl}`);
  }
  return `${owner}/${repo}`;
}
