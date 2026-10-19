import { Badge } from "@/components/ui/Badge";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <Badge variant="skill" className="flex-col items-start">
      <span className="flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5" />
        {skill.name}
      </span>
      {skill.level && (
        <span className="flex items-center gap-2 mt-1.5 text-text-dim">
          {skill.level && (
            <span className="flex gap-0.5" aria-label={`Skill level ${skill.level} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: i < skill.level! ? "var(--amber)" : "var(--border-strong)" }}
                />
              ))}
            </span>
          )}
        </span>
      )}
    </Badge>
  );
}
