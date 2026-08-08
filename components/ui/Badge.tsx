import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center transition-colors", {
  variants: {
    variant: {
      chip: "font-mono text-xs px-2 py-1 rounded border border-border-strong bg-bg-elevated text-text-muted",
      skill:
        "border border-border bg-bg-elevated rounded-md px-2.5 py-1.5 text-xs gap-1.5 hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-transform",
      accentAmber: "font-mono text-xs px-2 py-1 rounded bg-amber-soft text-amber",
      accentTeal: "font-mono text-xs px-2 py-1 rounded bg-teal-soft text-teal",
      filter: "font-mono text-xs px-3 py-1.5 rounded-full border border-border-strong",
    },
  },
  defaultVariants: {
    variant: "chip",
  },
});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
