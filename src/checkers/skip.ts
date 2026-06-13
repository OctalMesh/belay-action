import { type GitContext, type SkipConfig } from "../inputs";
import { hasSkipLabel } from "./labels";
import { hasSkipTag } from "./tags";

/**
 * Determines whether the current workflow run should be skipped.
 *
 * Checks commit message, PR title, and PR labels against the configured
 * skip tags and labels. Returns `true` if any condition is met.
 *
 * @param skip - Configured skip tags and labels.
 * @param context - Current Git and PR context.
 * @returns `true` if the workflow should be skipped.
 */
export function shouldSkip(skip: SkipConfig, context: GitContext): boolean {
  return (
    hasSkipTag(context.commitMessage, skip.tags) ||
    hasSkipTag(context.prTitle, skip.tags) ||
    hasSkipLabel(context.prLabels, skip.labels)
  );
}
