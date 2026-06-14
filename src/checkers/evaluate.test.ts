import { describe, expect, it } from "vitest";

import { type GitContext, type SignalConfig } from "@/config";

import { evaluate } from "./evaluate";

const signals: SignalConfig = {
  tags: ["[ci-skip]", "[skip-ci]"],
  patterns: [],
  labels: ["ci-skip", "skip-ci"],
};

const context: GitContext = {
  commitMessage: "",
  prTitle: "",
  prLabels: [],
};

describe("evaluate", () => {
  it("returns false when nothing matches", () => {
    expect(evaluate(signals, context)).toBe(false);
  });

  it("returns true when commit message contains a signal tag", () => {
    expect(
      evaluate(signals, {
        ...context,
        commitMessage: "chore: update [ci-skip]",
      }),
    ).toBe(true);
  });

  it("returns true when PR title contains a signal tag", () => {
    expect(
      evaluate(signals, { ...context, prTitle: "[skip-ci] bump deps" }),
    ).toBe(true);
  });

  it("returns true when commit message matches a signal pattern", () => {
    expect(
      evaluate(
        { ...signals, patterns: ["^chore\\(deps\\)"] },
        { ...context, commitMessage: "chore(deps): update lockfile" },
      ),
    ).toBe(true);
  });

  it("returns true when PR title matches a signal pattern", () => {
    expect(
      evaluate(
        { ...signals, patterns: ["^chore\\(deps\\)"] },
        { ...context, prTitle: "chore(deps): bump vitest" },
      ),
    ).toBe(true);
  });

  it("returns true when PR has a signal label", () => {
    expect(evaluate(signals, { ...context, prLabels: ["ci-skip"] })).toBe(true);
  });

  it("returns true when multiple conditions match simultaneously", () => {
    expect(
      evaluate(signals, {
        ...context,
        commitMessage: "[ci-skip] fix typo",
        prLabels: ["skip-ci"],
      }),
    ).toBe(true);
  });

  it("returns false when all signal lists are empty", () => {
    expect(
      evaluate(
        { tags: [], patterns: [], labels: [] },
        { ...context, commitMessage: "[ci-skip] this should not match" },
      ),
    ).toBe(false);
  });
});
