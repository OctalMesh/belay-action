/**
 * Checks whether any of the pull request labels match the skip labels list.
 *
 * @param prLabels - Labels currently applied to the pull request.
 * @param skipLabels - List of label names that should trigger a skip.
 * @returns `true` if at least one PR label is in the skip list.
 */
export function hasSkipLabel(
  prLabels: string[],
  skipLabels: string[],
): boolean {
  return prLabels.some((label) => skipLabels.includes(label));
}
