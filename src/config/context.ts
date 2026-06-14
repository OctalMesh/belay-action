import * as github from "@actions/github";

import { type Payload } from "./payload";

/**
 * Current Git and pull request context read from the GitHub event payload.
 */
export interface GitContext {
  /** The commit message of the most recent push event. */
  commitMessage: string;
  /** The title of the pull request, if applicable. */
  prTitle: string;
  /** Labels currently applied to the pull request, if applicable. */
  prLabels: string[];
}

/**
 * Reads the current Git and pull request context from the GitHub event
 * payload.
 *
 * @returns A {@link GitContext} object with commit message, PR title, and
 *          PR labels.
 */
export function getGitContext(): GitContext {
  const payload = github.context.payload as Payload;
  return buildContext(payload);
}

/**
 * Builds a {@link GitContext} from a raw GitHub event payload.
 *
 * Extracted for testability - accepts a payload directly rather than
 * reading from the global GitHub context.
 *
 * @param payload - The GitHub event payload to read from.
 * @returns A {@link GitContext} object.
 */
export function buildContext(payload: Payload): GitContext {
  return {
    commitMessage: payload.head_commit?.message ?? "",
    prTitle: payload.pull_request?.title ?? "",
    prLabels: (payload.pull_request?.labels ?? []).map((l) => l.name),
  };
}
