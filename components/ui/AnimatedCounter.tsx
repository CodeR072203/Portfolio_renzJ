"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function useCountUp(target: number, active: boolean, duration: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

export function AnimatedCounter({ value, suffix = "", label, duration = 1200 }: AnimatedCounterProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const count = useCountUp(value, visible, duration);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl md:text-5xl font-semibold text-amber">
        {count}
        {suffix}
      </div>
      <div className="font-mono text-xs text-text-muted mt-2 uppercase tracking-wide">{label}</div>
    </div>
  );
}
