import * as core from "@actions/core";

import { type SkipConfig, type WorkflowControl } from "./types";

/**
 * Parsed action-level configuration derived from workflow inputs.
 */
export interface Config {
  skip: SkipConfig;
  control: WorkflowControl;
}

/**
 * Reads and parses the action's declared inputs into a structured
 * {@link Config} object.
 *
 * @returns A {@link Config} object with skip criteria and workflow control.
 */
export function getConfig(): Config {
  const skip: SkipConfig = {
    tags: core
      .getInput("skip_tags")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    labels: core
      .getInput("skip_labels")
      .split(",")
      .map((l) => l.trim())
      .filter(Boolean),
  };

  const control: WorkflowControl = {
    cancel: core.getInput("cancel_workflow") === "true",
    githubToken: core.getInput("github_token"),
  };

  return { skip, control };
}
