"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { hoverLiftSmall } from "@/lib/animations";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-amber text-[#16130A] hover:opacity-90",
        ghost: "border border-border-strong text-text hover:border-amber hover:bg-amber-soft",
        icon: "border border-border-strong text-text hover:border-amber hover:bg-amber-soft rounded-md",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2",
        icon: "w-9 h-9 p-0",
        iconLg: "w-11 h-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={hoverLiftSmall}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(props as any)}
    />
  )
);
Button.displayName = "Button";

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

/** Anchor-tag counterpart to <Button /> for external links (GitHub, resume, demo). */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <motion.a
      ref={ref}
      whileHover={hoverLiftSmall}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(props as any)}
    />
  )
);
LinkButton.displayName = "LinkButton";

export { buttonVariants };
