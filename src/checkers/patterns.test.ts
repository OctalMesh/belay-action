import { describe, expect, it } from "vitest";

import { hasSignalPattern } from "./patterns";

describe("hasSignalPattern", () => {
  it("returns true when pattern matches text", () => {
    expect(hasSignalPattern("chore(deps): update", ["^chore\\(deps\\)"])).toBe(
      true,
    );
  });

  it("returns true when any of multiple patterns matches", () => {
    expect(hasSignalPattern("fix: typo", ["^chore", "^fix"])).toBe(true);
  });

  it("returns false when no patterns match", () => {
    expect(hasSignalPattern("feat: add feature", ["^chore", "^fix"])).toBe(
      false,
    );
  });

  it("returns false for empty text", () => {
    expect(hasSignalPattern("", ["^chore"])).toBe(false);
  });

  it("returns false for empty patterns list", () => {
    expect(hasSignalPattern("chore: update", [])).toBe(false);
  });
});
