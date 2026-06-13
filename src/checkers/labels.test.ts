import { describe, expect, it } from "vitest";

import { hasSkipLabel } from "./labels";

describe("hasSkipLabel", () => {
  it("returns true when a PR label matches a skip label", () => {
    expect(hasSkipLabel(["ci-skip", "bug"], ["ci-skip"])).toBe(true);
  });

  it("returns true when any of multiple PR labels matches", () => {
    expect(
      hasSkipLabel(["skip-ci", "enhancement"], ["ci-skip", "skip-ci"]),
    ).toBe(true);
  });

  it("returns false when no PR labels match", () => {
    expect(hasSkipLabel(["bug", "enhancement"], ["ci-skip", "skip-ci"])).toBe(
      false,
    );
  });

  it("returns false for empty PR labels", () => {
    expect(hasSkipLabel([], ["ci-skip"])).toBe(false);
  });

  it("returns false for empty skip labels", () => {
    expect(hasSkipLabel(["ci-skip"], [])).toBe(false);
  });

  it("returns false when both lists are empty", () => {
    expect(hasSkipLabel([], [])).toBe(false);
  });
});
