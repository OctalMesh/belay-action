/**
 * Contract for all workflow action handlers.
 */
export interface ActionHandler {
  /**
   * Executes the workflow action.
   *
   * @param token - GitHub token used to interact with the GitHub API.
   */
  execute(token: string): Promise<void>;
}
