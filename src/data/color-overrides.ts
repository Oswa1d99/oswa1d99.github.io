// Map tag/series names to color values.
// Values can be palette keyword names (e.g., "coral") or hex codes (e.g., "#FF6B6B").
// Priority: this file > frontmatter tagColors/seriesColor > hash-based default.
// Tags and series share the same namespace: same name = same color.
export const colorOverrides: Record<string, string> = {
  // "astro": "coral",
  // "개발": "sapphire",
};