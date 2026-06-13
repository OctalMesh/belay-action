import * as core from "@actions/core";
import * as github from "@actions/github";

/** Milliseconds to wait after requesting cancellation for the API to process */
const CANCELLATION_DELAY = 3 * 1000;

/**
 * Builds the parameters required to cancel the current workflow run.
 *
 * @param context - The GitHub Actions context containing repository and run
 *                  information.
 * @returns An object with `owner`, `repo`, and `run_id` fields.
 */
export function buildCancelParams(context: typeof github.context): {
  owner: string;
  repo: string;
  run_id: number;
} {
  return {
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: context.runId,
  };
}

/**
 * Cancels the current workflow run via the GitHub REST API.
 *
 * Sets the workflow status to "canceled" rather than "failed" or "success",
 * which is the expected status for a skipped workflow.
 *
 * @param token - GitHub token with `actions: write` permission.
 */
export async function cancelWorkflowRun(token: string): Promise<void> {
  const octokit = github.getOctokit(token);

  await octokit.rest.actions.cancelWorkflowRun(
    buildCancelParams(github.context),
  );

  core.info(
    "Workflow cancellation requested — run will be marked as cancelled.",
  );

  await new Promise((resolve) => setTimeout(resolve, CANCELLATION_DELAY));
}
