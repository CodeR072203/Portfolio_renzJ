"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cursorBlink } from "@/lib/animations";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-amber tracking-widest inline-flex items-center">
            $ booting_portfolio
            <motion.span
              className="inline-block w-2 h-4 ml-1 bg-amber"
              animate={cursorBlink.animate}
              transition={cursorBlink.transition}
            />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
