import { describe, expect, test } from "vitest";
import { extractDomain } from "./lib";

describe("extractDomain", () => {
  test.each([
    ["https://example.com/path", "example.com"],
    ["http://subdomain.example.com", "subdomain.example.com"],
    ["https://www.example.com/page?query=123", "www.example.com"],
    ["ftp://ftp.example.com/resource", "ftp.example.com"],
  ])("extractDomain(%j) -> %j", (input, expected) => {
    const result = extractDomain(input);
    expect(result).toBe(expected);
  });
});
