import { describe, expect, it } from "vitest";

import { WorkflowActions, parseWorkflowAction } from "./actions";

describe("parseWorkflowAction", () => {
  it("parses 'report' correctly", () => {
    expect(parseWorkflowAction("report")).toBe(WorkflowActions.REPORT);
  });

  it("parses 'cancel' correctly", () => {
    expect(parseWorkflowAction("cancel")).toBe(WorkflowActions.CANCEL);
  });

  it("is case-insensitive", () => {
    expect(parseWorkflowAction("REPORT")).toBe(WorkflowActions.REPORT);
    expect(parseWorkflowAction("Cancel")).toBe(WorkflowActions.CANCEL);
  });

  it("trims whitespace", () => {
    expect(parseWorkflowAction("  report  ")).toBe(WorkflowActions.REPORT);
  });

  it("throws on unknown value", () => {
    expect(() => parseWorkflowAction("skip")).toThrow(
      "Invalid on_match value: 'skip'. Expected one of: report, cancel.",
    );
  });

  it("throws on empty string", () => {
    expect(() => parseWorkflowAction("")).toThrow();
  });
});
