"use client";

import { PROJECT_FILTERS } from "@/lib/data";
import type { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  active: ProjectCategory | "All";
  onChange: (filter: ProjectCategory | "All") => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by category">
      {PROJECT_FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-border-strong transition-colors"
            style={{
              backgroundColor: isActive ? "var(--amber)" : "transparent",
              color: isActive ? "#16130A" : "var(--text-muted)",
            }}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
