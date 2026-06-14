import * as core from "@actions/core";
import * as github from "@actions/github";

import { type ActionHandler } from "./handler";

/** Milliseconds to wait after requesting cancellation for the API to process. */
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
 * Handles workflow cancellation when a belay order is issued.
 */
export class CancelHandler implements ActionHandler {
  async execute(token: string, issued: boolean): Promise<void> {
    if (!issued) {
      core.info("No belay signals detected - workflow continues.");
      return;
    }

    const octokit = github.getOctokit(token);

    await octokit.rest.actions.cancelWorkflowRun(
      buildCancelParams(github.context),
    );

    core.info(
      "Workflow cancellation requested - run will be marked as cancelled.",
    );

    await new Promise((resolve) => setTimeout(resolve, CANCELLATION_DELAY));
  }
}
