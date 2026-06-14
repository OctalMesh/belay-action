import { describe, expect, it } from "vitest";

import { WorkflowActions } from "@/workflow";

import { CancelHandler } from "./cancel";
import { resolveHandler } from "./factory";
import { ReportHandler } from "./report";

describe("resolveHandler", () => {
  it("returns ReportHandler for 'report'", () => {
    expect(resolveHandler(WorkflowActions.REPORT)).toBeInstanceOf(
      ReportHandler,
    );
  });

  it("returns CancelHandler for 'cancel'", () => {
    expect(resolveHandler(WorkflowActions.CANCEL)).toBeInstanceOf(
      CancelHandler,
    );
  });
});
