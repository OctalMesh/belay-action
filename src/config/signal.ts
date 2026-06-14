/**
 * Configured signal criteria parsed from action inputs.
 */
export interface SignalConfig {
  /** Substrings to match against commit message or PR title. */
  tags: string[];
  /** Regex patterns to match against commit message or PR title. */
  patterns: string[];
  /** Pull request label names that trigger a belay order. */
  labels: string[];
}
