/**
 * Configured skip criteria parsed from action inputs.
 */
export interface SkipConfig {
  /** Commit message or PR title patterns that trigger a skip. */
  tags: string[];
  /** Pull request label names that trigger a skip. */
  labels: string[];
}

/**
 * Workflow control settings parsed from action inputs.
 */
export interface WorkflowControl {
  /** Whether to cancel the workflow run when skip is detected. */
  cancel: boolean;
  /** GitHub token used to cancel the workflow run. */
  githubToken: string;
}

/**
 * Current Git and pull request context read from the GitHub event payload.
 */
export interface GitContext {
  /** The commit message of the most recent push event. */
  commitMessage: string;
  /** The title of the pull request, if applicable. */
  prTitle: string;
  /** Labels currently applied to the pull request, if applicable. */
  prLabels: string[];
}

/**
 * Aggregated inputs for the action, combining skip configuration,
 * workflow control settings, and the current Git context.
 */
export interface Inputs {
  skip: SkipConfig;
  control: WorkflowControl;
  context: GitContext;
}
