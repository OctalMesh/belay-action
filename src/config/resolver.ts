import * as core from "@actions/core";

import { WorkflowControl } from "@/config";
import { parseWorkflowAction } from "@/workflow";

import { Inputs } from "./constants";
import { type GitContext, getGitContext } from "./context";
import { type SignalConfig } from "./signal";

/**
 * Fully resolved action configuration, combining signal criteria,
 * workflow control settings, and the current Git context.
 */
export interface ResolvedConfig {
  signals: SignalConfig;
  control: WorkflowControl;
  context: GitContext;
}

/**
 * Reads and assembles all action inputs and GitHub context into a single
 * resolved configuration object.
 *
 * @returns A {@link ResolvedConfig} object ready for use in the action's logic.
 */
export function resolveConfig(): ResolvedConfig {
  const signals: SignalConfig = {
    tags: parseList(core.getInput(Inputs.SIGNAL_TAGS)),
    patterns: parseList(core.getInput(Inputs.SIGNAL_PATTERNS)),
    labels: parseList(core.getInput(Inputs.SIGNAL_LABELS)),
  };

  const control: WorkflowControl = {
    onMatch: parseWorkflowAction(core.getInput(Inputs.ON_MATCH)),
    githubToken: core.getInput(Inputs.GITHUB_TOKEN),
  };

  const context = getGitContext();

  return { signals, control, context };
}

function parseList(input: string): string[] {
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
