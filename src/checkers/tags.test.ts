import { describe, expect, it } from "vitest";

import { hasSignalTag } from "./tags";

describe("hasSignalTag", () => {
  it("returns true when tag is present in text", () => {
    expect(hasSignalTag("fix: something [ci-skip]", ["[ci-skip]"])).toBe(true);
  });

  it("returns true when any of multiple tags matches", () => {
    expect(hasSignalTag("chore: update deps", ["[ci-skip]", "chore:"])).toBe(
      true,
    );
  });

  it("returns false when no tags match", () => {
    expect(hasSignalTag("feat: add feature", ["[ci-skip]", "[skip-ci]"])).toBe(
      false,
    );
  });

  it("returns false for empty text", () => {
    expect(hasSignalTag("", ["[ci-skip]"])).toBe(false);
  });

  it("returns false for empty tags list", () => {
    expect(hasSignalTag("feat: [ci-skip]", [])).toBe(false);
  });
});
