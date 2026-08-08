"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Fraction of the element that must be visible before it animates in. */
  amount?: number;
}

export function ScrollReveal({ children, delay = 0, className, amount = 0.15 }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ delay: delay / 1000 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
