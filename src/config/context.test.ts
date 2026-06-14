import { describe, expect, it } from "vitest";

import { buildContext } from "./context";
import { type Payload } from "./payload";

const emptyPayload: Payload = {};

describe("buildContext", () => {
  it("returns empty strings and array when payload is empty", () => {
    expect(buildContext(emptyPayload)).toEqual({
      commitMessage: "",
      prTitle: "",
      prLabels: [],
    });
  });

  it("reads commit message from head_commit", () => {
    const payload: Payload = {
      head_commit: { message: "feat: add belay action" },
    };
    expect(buildContext(payload).commitMessage).toBe("feat: add belay action");
  });

  it("returns empty commit message when head_commit is null", () => {
    const payload: Payload = { head_commit: null };
    expect(buildContext(payload).commitMessage).toBe("");
  });

  it("reads PR title from pull_request", () => {
    const payload: Payload = {
      pull_request: { title: "[ci-skip] bump deps", labels: [] },
    };
    expect(buildContext(payload).prTitle).toBe("[ci-skip] bump deps");
  });

  it("reads PR labels from pull_request", () => {
    const payload: Payload = {
      pull_request: {
        title: "chore: update",
        labels: [{ name: "ci-skip" }, { name: "bug" }],
      },
    };
    expect(buildContext(payload).prLabels).toEqual(["ci-skip", "bug"]);
  });

  it("returns empty PR labels when pull_request is null", () => {
    const payload: Payload = { pull_request: null };
    expect(buildContext(payload).prLabels).toEqual([]);
  });

  it("returns empty prTitle and prLabels when pull_request is absent", () => {
    const payload: Payload = {
      head_commit: { message: "fix: something" },
    };
    expect(buildContext(payload).prTitle).toBe("");
    expect(buildContext(payload).prLabels).toEqual([]);
  });
});
