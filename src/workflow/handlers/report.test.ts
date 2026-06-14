import * as core from "@actions/core";

import { describe, expect, it, vi } from "vitest";

import { ReportHandler } from "./report";

vi.mock("@actions/core", () => ({
  info: vi.fn(),
  setOutput: vi.fn(),
}));

describe("ReportHandler", () => {
  it("executes without throwing", async () => {
    await expect(new ReportHandler().execute("token")).resolves.toBeUndefined();
  });

  it("logs issued message on execute", async () => {
    vi.mocked(core.info).mockClear();

    await new ReportHandler().execute("token");

    expect(core.info).toHaveBeenCalledWith(
      "Belay order issued - reporting result via output.",
    );
  });
});
