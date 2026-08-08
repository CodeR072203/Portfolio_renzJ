"use client";

import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { cursorBlink } from "@/lib/animations";

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export function TypingEffect({ words, className }: TypingEffectProps) {
  const typed = useTypingEffect(words);

  return (
    <p className={className}>
      {typed}
      <motion.span
        className="inline-block w-0.5 h-[1em] ml-1 bg-amber align-middle"
        animate={cursorBlink.animate}
        transition={cursorBlink.transition}
      />
    </p>
  );
}
