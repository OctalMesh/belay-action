import * as core from "@actions/core";

import { cancelWorkflowRun, shouldSkip } from "./checkers";
import { getInputs } from "./inputs";

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const inputs = getInputs();
    const result = shouldSkip(inputs.skip, inputs.context);

    core.debug(`Skip tags: ${inputs.skip.tags.join(", ")}`);
    core.debug(`Skip labels: ${inputs.skip.labels.join(", ")}`);
    core.debug(`Commit message: ${inputs.context.commitMessage}`);
    core.debug(`PR title: ${inputs.context.prTitle}`);
    core.debug(`PR labels: ${inputs.context.prLabels.join(", ")}`);
    core.debug(`Should skip: ${result}`);
    core.debug(`Cancel workflow: ${inputs.control.cancel}`);

    core.setOutput("should_skip", String(result));

    if (result && inputs.control.cancel) {
      core.info("Skip condition met - cancelling workflow run.");
      await cancelWorkflowRun(inputs.control.githubToken);
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}
