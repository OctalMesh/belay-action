import * as github from "@actions/github";

import { type GitContext } from "./types.js";

interface Label {
  name: string;
}

interface PushPayload {
  head_commit?: { message: string } | null;
}

interface PullRequestPayload {
  pull_request?: {
    title: string;
    labels: Label[];
  } | null;
}

type Payload = PushPayload & PullRequestPayload;

/**
 * Reads the current Git and pull request context from the GitHub event
 * payload.
 *
 * @returns A {@link GitContext} object with commit message, PR title, and
 *          PR labels.
 */
export function getGitContext(): GitContext {
  const payload = github.context.payload as Payload;

  return {
    commitMessage: payload.head_commit?.message ?? "",
    prTitle: payload.pull_request?.title ?? "",
    prLabels: (payload.pull_request?.labels ?? []).map((l) => l.name),
  };
}
