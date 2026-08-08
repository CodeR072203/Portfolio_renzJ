import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  children: ReactNode;
}

export function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-amber tracking-widest">{'//'} {index}</span>
      <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">{children}</span>
      <span className="h-px flex-1 border-t border-border" />
    </div>
  );
}
