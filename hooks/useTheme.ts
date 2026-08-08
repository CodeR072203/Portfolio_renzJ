"use client";

// Re-exported so the rest of the app imports theme logic from `@/hooks/useTheme`
// instead of reaching into `next-themes` directly — keeps the theming
// implementation swappable in one place.
export { useTheme } from "next-themes";
