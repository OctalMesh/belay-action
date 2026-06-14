import { describe, expect, it } from "vitest";

import { hasSignalLabel } from "./labels";

describe("hasSignalLabel", () => {
  it("returns true when a PR label matches a signal label", () => {
    expect(hasSignalLabel(["ci-skip", "bug"], ["ci-skip"])).toBe(true);
  });

  it("returns true when any of multiple PR labels matches", () => {
    expect(
      hasSignalLabel(["skip-ci", "enhancement"], ["ci-skip", "skip-ci"]),
    ).toBe(true);
  });

  it("returns false when no PR labels match", () => {
    expect(hasSignalLabel(["bug", "enhancement"], ["ci-skip", "skip-ci"])).toBe(
      false,
    );
  });

  it("returns false for empty PR labels", () => {
    expect(hasSignalLabel([], ["ci-skip"])).toBe(false);
  });

  it("returns false for empty signal labels", () => {
    expect(hasSignalLabel(["ci-skip"], [])).toBe(false);
  });

  it("returns false when both lists are empty", () => {
    expect(hasSignalLabel([], [])).toBe(false);
  });
});
