import { describe, expect, test } from "vitest";
import { parseRepoSlug } from "./github";

describe("parseRepoSlug", () => {
  test.each([
    ["https://github.com/koki-develop/koki.me", "koki-develop/koki.me"],
    ["https://github.com/codize-dev/sandbox", "codize-dev/sandbox"],
    ["https://github.com/koki-develop/gat/", "koki-develop/gat"],
  ])("parseRepoSlug(%j) -> %j", (input, expected) => {
    expect(parseRepoSlug(input)).toBe(expected);
  });

  test("throws when the URL has no repo segment", () => {
    expect(() => parseRepoSlug("https://github.com/koki-develop")).toThrow(
      "Failed to parse GitHub repo slug: https://github.com/koki-develop",
    );
  });
});
