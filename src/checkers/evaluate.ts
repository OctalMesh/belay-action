import { type GitContext, type SignalConfig } from "../config";
import { hasSignalLabel } from "./labels";
import { hasSignalPattern } from "./patterns";
import { hasSignalTag } from "./tags";

/**
 * Evaluates whether a belay order should be issued.
 *
 * Checks commit message, PR title, and PR labels against the configured
 * signals. Returns `true` if any condition is met.
 *
 * @param signals - Configured signal tags, patterns, and labels.
 * @param context - Current Git and PR context.
 * @returns `true` if a belay order should be issued.
 */
export function evaluate(signals: SignalConfig, context: GitContext): boolean {
  return (
    hasSignalTag(context.commitMessage, signals.tags) ||
    hasSignalTag(context.prTitle, signals.tags) ||
    hasSignalPattern(context.commitMessage, signals.patterns) ||
    hasSignalPattern(context.prTitle, signals.patterns) ||
    hasSignalLabel(context.prLabels, signals.labels)
  );
}
