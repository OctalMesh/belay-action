import * as github from "@actions/github";

import { describe, expect, it } from "vitest";

import { buildCancelParams } from "./cancel";

/** A constant run ID used for testing purposes. */
const FAKE_RUN_ID = 13;

describe("buildCancelParams", () => {
  const fakeContext = {
    repo: { owner: "OctalMesh", repo: "belay-action" },
    runId: FAKE_RUN_ID,
  } as typeof github.context;

  it("returns correct owner from context", () => {
    expect(buildCancelParams(fakeContext).owner).toBe("OctalMesh");
  });

  it("returns correct repo from context", () => {
    expect(buildCancelParams(fakeContext).repo).toBe("belay-action");
  });

  it("returns correct run_id from context", () => {
    expect(buildCancelParams(fakeContext).run_id).toBe(FAKE_RUN_ID);
  });

  it("returns all required fields", () => {
    expect(buildCancelParams(fakeContext)).toEqual({
      owner: "OctalMesh",
      repo: "belay-action",
      run_id: FAKE_RUN_ID,
    });
  });
});
