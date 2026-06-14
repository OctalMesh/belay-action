import * as core from "@actions/core";

import { Outputs } from "@/config";

import { type ActionHandler } from "./handler";

/**
 * Handles reporting when a belay order is issued.
 *
 * Logs the result without taking any further action on the workflow run.
 */
export class ReportHandler implements ActionHandler {
  execute(_token: string, issued: boolean): Promise<void> {
    core.setOutput(Outputs.ISSUED, String(issued));
    core.info(
      issued
        ? "Belay order issued - reporting result via output."
        : "No belay signals detected - workflow continues.",
    );

    return Promise.resolve();
  }
}
