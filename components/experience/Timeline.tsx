import { TimelineItem } from "@/components/experience/TimelineItem";
import { EXPERIENCE } from "@/lib/data";

export function Timeline() {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border-strong" />
      {EXPERIENCE.map((item, i) => (
        <TimelineItem key={item.role} item={item} delay={i * 100} isLast={i === EXPERIENCE.length - 1} />
      ))}
    </div>
  );
}
