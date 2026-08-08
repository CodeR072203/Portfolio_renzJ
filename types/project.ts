export type ProjectCategory = "Web" | "Mobile" | "Game";
export type AccentColor = "amber" | "teal";

export interface Project {
  id: string;
  name: string;
  tag: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  features: string[];
  role: string;
  challenge: string;
  impact: string;
  color: AccentColor;
  /** First image is used as the card thumbnail; the rest populate the gallery. */
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
}
