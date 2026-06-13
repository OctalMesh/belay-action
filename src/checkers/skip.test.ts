import { describe, expect, it } from "vitest";

import { type GitContext, type SkipConfig } from "../inputs";
import { shouldSkip } from "./skip";

const skip: SkipConfig = {
  tags: ["[ci-skip]", "[skip-ci]"],
  labels: ["ci-skip", "skip-ci"],
};

const context: GitContext = {
  commitMessage: "",
  prTitle: "",
  prLabels: [],
};

describe("shouldSkip", () => {
  it("returns false when nothing matches", () => {
    expect(shouldSkip(skip, context)).toBe(false);
  });

  it("returns true when commit message contains a skip tag", () => {
    expect(
      shouldSkip(skip, {
        ...context,
        commitMessage: "chore: update [ci-skip]",
      }),
    ).toBe(true);
  });

  it("returns true when PR title contains a skip tag", () => {
    expect(
      shouldSkip(skip, { ...context, prTitle: "[skip-ci] bump deps" }),
    ).toBe(true);
  });

  it("returns true when PR has a skip label", () => {
    expect(shouldSkip(skip, { ...context, prLabels: ["ci-skip"] })).toBe(true);
  });

  it("returns true when multiple conditions match simultaneously", () => {
    expect(
      shouldSkip(skip, {
        ...context,
        commitMessage: "[ci-skip] fix typo",
        prLabels: ["skip-ci"],
      }),
    ).toBe(true);
  });

  it("returns false when tags list is empty", () => {
    expect(
      shouldSkip(
        { ...skip, tags: [] },
        { ...context, commitMessage: "[ci-skip] this should not match" },
      ),
    ).toBe(false);
  });

  it("returns false when labels list is empty", () => {
    expect(
      shouldSkip(
        { ...skip, labels: [] },
        { ...context, prLabels: ["ci-skip"] },
      ),
    ).toBe(false);
  });
});
