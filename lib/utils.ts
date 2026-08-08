import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely, resolving conflicting utility classes. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Filter a list of projects by category. "All" returns every project. */
export function matchesCategory<T extends { category: string }>(
  item: T,
  filter: string
): boolean {
  if (filter === "All") return true;
  return item.category === filter;
}

/** Clamp a number between a min and max, used by skill-level indicators. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
