import { describe, expect, it } from "vitest";

import { hasSkipTag } from "./tags";

describe("hasSkipTag", () => {
  it("returns true when tag is present in text", () => {
    expect(hasSkipTag("fix: something [ci-skip]", ["[ci-skip]"])).toBe(true);
  });

  it("returns true when any of multiple tags matches", () => {
    expect(hasSkipTag("chore: update deps", ["[ci-skip]", "chore:"])).toBe(
      true,
    );
  });

  it("returns false when no tags match", () => {
    expect(hasSkipTag("feat: add feature", ["[ci-skip]", "[skip-ci]"])).toBe(
      false,
    );
  });

  it("returns false for empty text", () => {
    expect(hasSkipTag("", ["[ci-skip]"])).toBe(false);
  });

  it("returns false for empty tags list", () => {
    expect(hasSkipTag("feat: [ci-skip]", [])).toBe(false);
  });
});
