import { Briefcase } from "lucide-react";
import type { ExperienceItem as ExperienceItemType } from "@/types";

interface ExperienceCardProps {
  item: ExperienceItemType;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <Briefcase className="w-4 h-4 text-amber inline" strokeWidth={1.75} />
        <h3 className="font-display text-lg font-semibold">{item.role}</h3>
        <span className="font-mono text-xs text-text-dim">— {item.org}</span>
      </div>
      <p className="font-mono text-xs text-teal mb-4">{item.period}</p>
      <ul className="space-y-2">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
            <span className="text-amber mt-1.5">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
