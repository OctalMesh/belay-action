import { describe, expect, it } from "vitest";

import { WorkflowActions } from "./actions";
import { resolveHandler } from "./factory";
import { CancelHandler, ReportHandler } from "./handlers";

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
