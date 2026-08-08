import type { ComponentType } from "react";

/** Shape shared by react-icons and lucide-react components, so either can be used interchangeably. */
export type IconComponent = ComponentType<{ className?: string; size?: number | string }>;

export interface Skill {
  name: string;
  icon: IconComponent;
  /** Years of hands-on experience. Optional — omit if not meaningful yet. */
  years?: number;
  /** Skill level from 1-5, rendered as a subtle indicator. Optional. */
  level?: number;
}

export interface SkillCategory {
  label: string;
  icon: IconComponent;
  skills: Skill[];
}
