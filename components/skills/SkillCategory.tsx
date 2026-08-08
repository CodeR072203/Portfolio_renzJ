import { Card, CardContent } from "@/components/ui/Card";
import { SkillCard } from "@/components/skills/SkillCard";
import type { SkillCategory as SkillCategoryType } from "@/types";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const Icon = category.icon;

  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-4 h-4 text-amber" />
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">{category.label}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
