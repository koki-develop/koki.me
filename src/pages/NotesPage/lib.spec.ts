import { describe, expect, test } from "vitest";
import { formatNoteDate } from "./lib";

describe("formatNoteDate", () => {
  test.each([
    ["2026-05-14T09:00:00.000+09:00", "2026.05"],
    ["2026-01-03T00:00:09.378+09:00", "2026.01"],
    ["2025-12-25T18:00:07.842+09:00", "2025.12"],
  ])("formatNoteDate(%j) -> %j", (input, expected) => {
    const result = formatNoteDate(input);
    expect(result).toBe(expected);
  });
});
