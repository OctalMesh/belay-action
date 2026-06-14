import { WorkflowActionType } from "@/workflow";

/**
 * Workflow control settings parsed from action inputs.
 */
export interface WorkflowControl {
  /** Action to execute when a belay order is issued. */
  onMatch: WorkflowActionType;
  /** GitHub token used to interact with the GitHub API. */
  githubToken: string;
}
