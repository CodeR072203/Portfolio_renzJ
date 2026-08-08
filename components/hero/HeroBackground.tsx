"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

/**
 * Ambient background accent for the hero — a soft radial glow behind the
 * terminal card. Pure decoration, so it's aria-hidden.
 */
export function HeroBackground() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div
        className="absolute top-1/4 right-0 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--amber) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)" }}
      />
    </motion.div>
  );
}
