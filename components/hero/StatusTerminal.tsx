"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

const LINES: Array<[string, string, "muted" | "teal"]> = [
  ["role", "Associate Software Engineer candidate", "muted"],
  ["stack", "React · Node · TypeScript · MongoDB", "teal"],
  ["shipped", "4 full products, solo and internship", "muted"],
];

export function StatusTerminal() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="rounded-lg overflow-hidden border border-border bg-surface shadow-elevated"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal" />
        <span className="font-mono text-xs text-text-dim ml-2">status.sh</span>
      </div>
      <div className="font-mono text-xs md:text-sm p-5 space-y-2.5 leading-relaxed">
        {LINES.map(([command, output, tone]) => (
          <div key={command}>
            <p>
              <span className="text-amber">$</span> <span className="text-text-muted">{command}</span>
            </p>
            <p className={`pl-4 ${tone === "teal" ? "text-teal" : ""}`}>{output}</p>
          </div>
        ))}
        <div>
          <p>
            <span className="text-amber">$</span> <span className="text-text-muted">status</span>
          </p>
          <p className="pl-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            open to opportunities
          </p>
        </div>
      </div>
    </motion.div>
  );
}
