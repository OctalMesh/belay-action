/**
 * Checks whether any of the pull request labels match the signal labels list.
 *
 * @param prLabels     - Labels currently applied to the pull request.
 * @param signalLabels - List of label names that should trigger a belay order.
 * @returns `true` if at least one PR label is in the signal list.
 */
export function hasSignalLabel(
  prLabels: string[],
  signalLabels: string[],
): boolean {
  return prLabels.some((label) => signalLabels.includes(label));
}
