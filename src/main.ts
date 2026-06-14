import * as core from "@actions/core";

import { evaluate } from "@/checkers";
import { Outputs, resolveConfig } from "@/config";
import { resolveHandler } from "@/workflow";

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const config = resolveConfig();
    const issued = evaluate(config.signals, config.context);

    core.debug(`Signal tags: ${config.signals.tags.join(", ")}`);
    core.debug(`Signal patterns: ${config.signals.patterns.join(", ")}`);
    core.debug(`Signal labels: ${config.signals.labels.join(", ")}`);
    core.debug(`Commit message: ${config.context.commitMessage}`);
    core.debug(`PR title: ${config.context.prTitle}`);
    core.debug(`PR labels: ${config.context.prLabels.join(", ")}`);
    core.debug(`Belay order issued: ${issued}`);
    core.debug(`On match: ${config.control.onMatch}`);

    core.setOutput(Outputs.ISSUED, String(issued));

    if (issued) {
      const handler = resolveHandler(config.control.onMatch);
      await handler.execute(config.control.githubToken);
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}
