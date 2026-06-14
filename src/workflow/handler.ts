/**
 * Contract for all workflow action handlers.
 */
export interface ActionHandler {
  /**
   * Executes the workflow action.
   *
   * @param token  - GitHub token used to interact with the GitHub API.
   * @param issued - Whether a belay order was issued.
   */
  execute(token: string, issued: boolean): Promise<void>;
}
