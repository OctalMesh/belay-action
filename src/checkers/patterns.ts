/**
 * Checks whether any of the provided regex patterns match the given text.
 *
 * @param text - The string to test against (commit message, PR title, etc.)
 * @param patterns - List of regex pattern strings to test.
 * @returns `true` if at least one pattern matches the text.
 */
export function hasSignalPattern(text: string, patterns: string[]): boolean {
  return patterns.some((pattern) => new RegExp(pattern).test(text));
}
