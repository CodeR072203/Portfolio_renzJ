import type { Variants } from "framer-motion";

/** Fade + slide up on scroll reveal. Used by <ScrollReveal />. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Plain fade, no movement — used for background/atmospheric elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Scale + fade — used for cards and modals. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Slide in from the left — used for timeline items and detail panes. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/** Container that staggers its children's entrance animation. */
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Hover lift used on cards and buttons. Pass to `whileHover`. */
export const hoverLift = { y: -4, transition: { duration: 0.2, ease: "easeOut" } };
export const hoverLiftSmall = { y: -2, transition: { duration: 0.15, ease: "easeOut" } };

/** Modal backdrop + panel transitions. */
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const modalPanel: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.97, y: 8, transition: { duration: 0.15 } },
};

/** Continuous blinking cursor, used by <TypingEffect />. */
export const cursorBlink = {
  animate: { opacity: [1, 1, 0, 0] },
  transition: { duration: 1, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] },
};

/** Slow ambient rotation for the animated gradient ring behind the profile image. */
export const gradientRingSpin = {
  animate: { rotate: 360 },
  transition: { duration: 12, repeat: Infinity, ease: "linear" },
};
