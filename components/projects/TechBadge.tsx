import { Code2 } from "lucide-react";
import { TECH_ICON_MAP } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  const Icon = TECH_ICON_MAP[name] ?? Code2;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs px-2 py-1 rounded border border-border-strong bg-bg-elevated text-text-muted transition-colors hover:border-teal hover:text-teal",
        className
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {name}
    </span>
  );
}
