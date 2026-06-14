/**
 * Workflow actions that can be executed in response to a belay order.
 */
export const WorkflowActions = {
  REPORT: "report",
  CANCEL: "cancel",
} as const;

/**
 * A valid workflow action value.
 */
export type WorkflowActionType =
  (typeof WorkflowActions)[keyof typeof WorkflowActions];

/**
 * Workflow control settings parsed from action inputs.
 */
export interface WorkflowControl {
  /** Action to execute when a belay order is issued. */
  onMatch: WorkflowActionType;
  /** GitHub token used to interact with the GitHub API. */
  githubToken: string;
}

/**
 * Parses a raw string input into a {@link WorkflowActionType}.
 *
 * @param value - The raw string value from the action input.
 * @returns A valid {@link WorkflowActionType}.
 * @throws Error If the value does not match any known workflow action.
 */
export function parseWorkflowAction(value: string): WorkflowActionType {
  const normalized = value.toLowerCase().trim();
  const known = Object.values(WorkflowActions) as string[];

  if (known.includes(normalized)) {
    return normalized as WorkflowActionType;
  }

  throw new Error(
    `Invalid on_match value: '${value}'. Expected one of: ${known.join(", ")}.`,
  );
}
