"use client";

import { useIntersection } from "./useIntersection";

/**
 * Thin semantic wrapper around useIntersection for scroll-triggered reveal animations.
 * Kept separate from useIntersection so call sites read intent clearly.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const { ref, isIntersecting } = useIntersection<T>({ threshold, triggerOnce: true });
  return { ref, visible: isIntersecting };
}
