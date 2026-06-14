/**
 * Represents a GitHub pull request label.
 */
export interface Label {
  name: string;
}

/**
 * Represents the payload for a push event.
 */
export interface PushPayload {
  head_commit?: { message: string } | null;
}

/**
 * Represents the payload for a pull_request event.
 */
export interface PullRequestPayload {
  pull_request?: {
    title: string;
    labels: Label[];
  } | null;
}

/**
 * Union of all supported GitHub event payloads.
 */
export type Payload = PushPayload & PullRequestPayload;
