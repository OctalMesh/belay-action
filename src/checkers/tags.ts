/**
 * Checks whether any of the provided signal tags appear in the given text.
 *
 * @param text - The string to search within (commit message, PR title, etc.)
 * @param tags - List of tag strings to look for.
 * @returns `true` if at least one tag is found in the text.
 */
export function hasSignalTag(text: string, tags: string[]): boolean {
  return tags.some((tag) => text.includes(tag));
}
