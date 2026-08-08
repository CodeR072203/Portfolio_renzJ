"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverLift } from "@/lib/animations";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Disable the hover lift + border-brighten interaction (useful inside modals). */
  static?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, static: isStatic, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={isStatic ? undefined : hoverLift}
      className={cn(
        "rounded-lg border border-border bg-surface transition-[border-color,box-shadow] duration-300",
        !isStatic && "hover:border-border-strong hover:shadow-elevated",
        className
      )}
      {...(props as any)}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pb-0", className)} {...props} />
);

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
