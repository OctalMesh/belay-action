/**
 * GitHub Action input parameter names.
 */
export const Inputs = {
  SIGNAL_TAGS: "signal_tags",
  SIGNAL_PATTERNS: "signal_patterns",
  SIGNAL_LABELS: "signal_labels",
  ON_MATCH: "on_match",
  GITHUB_TOKEN: "github_token",
} as const;

/**
 * GitHub Action output parameter names.
 */
export const Outputs = {
  ISSUED: "issued",
} as const;
