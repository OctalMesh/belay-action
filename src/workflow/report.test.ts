import * as core from "@actions/core";

import { describe, expect, it, vi } from "vitest";

import { ReportHandler } from "./report";

vi.mock("@actions/core", () => ({
  info: vi.fn(),
  setOutput: vi.fn(),
}));

describe("ReportHandler", () => {
  it("executes without throwing when issued is true", async () => {
    await expect(
      new ReportHandler().execute("token", true),
    ).resolves.toBeUndefined();
  });

  it("executes without throwing when issued is false", async () => {
    await expect(
      new ReportHandler().execute("token", false),
    ).resolves.toBeUndefined();
  });

  it("logs issued message when issued is true", async () => {
    vi.mocked(core.info).mockClear();

    await new ReportHandler().execute("token", true);

    expect(core.info).toHaveBeenCalledWith(
      "Belay order issued - reporting result via output.",
    );
  });

  it("logs no signals message when issued is false", async () => {
    vi.mocked(core.info).mockClear();

    await new ReportHandler().execute("token", false);

    expect(core.info).toHaveBeenCalledWith(
      "No belay signals detected - workflow continues.",
    );
  });

  it("sets output with issued value", async () => {
    vi.mocked(core.setOutput).mockClear();

    await new ReportHandler().execute("token", true);

    expect(core.setOutput).toHaveBeenCalledWith("issued", "true");
  });
});
