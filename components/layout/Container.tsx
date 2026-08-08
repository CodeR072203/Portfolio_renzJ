import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("max-w-6xl mx-auto px-6 md:px-10", className)} {...props} />;
}
