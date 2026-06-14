import * as core from "@actions/core";

import { type ActionHandler } from "../handler";

/**
 * Handles reporting when a belay order is issued.
 *
 * Logs the result without taking any further action on the workflow run.
 */
export class ReportHandler implements ActionHandler {
  execute(_token: string): Promise<void> {
    core.info("Belay order issued - reporting result via output.");

    return Promise.resolve();
  }
}
