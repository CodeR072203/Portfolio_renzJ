import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import type { ExperienceItem as ExperienceItemType } from "@/types";

interface TimelineItemProps {
  item: ExperienceItemType;
  delay?: number;
  isLast?: boolean;
}

export function TimelineItem({ item, delay = 0, isLast }: TimelineItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`relative ${isLast ? "" : "mb-10"}`}>
        <span className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_0_4px_var(--amber-soft)]" />
        <ExperienceCard item={item} />
      </div>
    </ScrollReveal>
  );
}
