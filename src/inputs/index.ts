import { getConfig } from "./config";
import { getGitContext } from "./context";
import { type Inputs } from "./types";

export type { GitContext, Inputs, SkipConfig, WorkflowControl } from "./types";

/**
 * Reads and assembles all action inputs and GitHub context into a single
 * structured {@link Inputs} object.
 *
 * @returns An {@link Inputs} object ready for use in the action's logic.
 */
export function getInputs(): Inputs {
  const { skip, control } = getConfig();
  const context = getGitContext();

  return { skip, control, context };
}
