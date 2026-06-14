import { type WorkflowActionType, WorkflowActions } from "./actions";
import { CancelHandler } from "./cancel";
import { type ActionHandler } from "./handler";
import { ReportHandler } from "./report";

/**
 * Resolves the appropriate {@link ActionHandler} for the given workflow action.
 *
 * @param onMatch - The workflow action to resolve.
 * @returns An {@link ActionHandler} instance for the given action.
 */
export function resolveHandler(onMatch: WorkflowActionType): ActionHandler {
  switch (onMatch) {
    case WorkflowActions.REPORT:
      return new ReportHandler();
    case WorkflowActions.CANCEL:
      return new CancelHandler();
  }
}
