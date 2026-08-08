"use client";

import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { TechBadge } from "@/components/projects/TechBadge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (id: string) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const accentVariant = project.color === "amber" ? "accentAmber" : "accentTeal";

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative w-full aspect-video bg-bg-elevated">
        <Image
          src={project.images[0]}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <Badge variant={accentVariant}>{project.tag}</Badge>
          <Layers className={project.color === "amber" ? "w-4 h-4 text-amber" : "w-4 h-4 text-teal"} strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.stack.length > 4 && (
            <span className="font-mono text-xs px-2 py-1 rounded border border-border-strong bg-bg-elevated text-text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          {project.githubUrl && (
            <LinkButton
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              aria-label={`${project.name} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.75} />
              Code
            </LinkButton>
          )}
          {project.demoUrl && (
            <LinkButton
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
              Live demo
            </LinkButton>
          )}
          <button
            onClick={() => onOpen(project.id)}
            className="inline-flex items-center gap-1.5 text-sm font-medium ml-auto text-amber hover:opacity-80 transition-opacity"
          >
            Read more
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </Card>
  );
}
