"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { TechBadge } from "@/components/projects/TechBadge";
import { Modal } from "@/components/ui/Modal";
import type { Project } from "@/types";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const accent = project.color === "amber" ? "text-amber" : "text-teal";

  return (
    <Card static className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-display text-lg font-semibold">{project.name}</h4>
        <span className={`font-mono text-xs ${accent}`}>{project.tag}</span>
      </div>

      {/* Image gallery */}
      <div className="mt-5 mb-6">
        <button
          onClick={() => {
            setActiveImage(0);
            setGalleryOpen(true);
          }}
          className="relative w-full aspect-video rounded-md overflow-hidden border border-border group"
        >
          <Image
            src={project.images[0]}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 w-8 h-8 rounded-md bg-bg/80 backdrop-blur flex items-center justify-center">
            <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.75} />
          </span>
        </button>

        {project.images.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-2 overflow-hidden">
            {project.images.map((img, i) => (
              <button
                key={img}
                onClick={() => {
                  setActiveImage(i);
                  setGalleryOpen(true);
                }}
                className="relative w-16 h-12 rounded border border-border overflow-hidden shrink-0"
              >
                <Image src={img} alt={`${project.name} screenshot ${i + 1}`} fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-2">Problem &amp; role</p>
          <p className="text-text-muted text-sm leading-relaxed mb-4">{project.summary}</p>
          <p className="text-text-muted text-sm leading-relaxed">{project.role}</p>
        </div>
        <div>
          <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-2">Key features</p>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accent}`} strokeWidth={1.5} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
        <div>
          <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-2">Challenge</p>
          <p className="text-text-muted text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <p className="font-mono text-xs text-text-dim uppercase tracking-widest mb-2">Impact</p>
          <p className="text-text-muted text-sm leading-relaxed">{project.impact}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <Modal open={galleryOpen} onClose={() => setGalleryOpen(false)} ariaLabel={`${project.name} gallery`}>
        <div className="relative w-full aspect-video">
          <Image
            src={project.images[activeImage]}
            alt={`${project.name} screenshot ${activeImage + 1}`}
            fill
            sizes="800px"
            className="object-contain"
          />
        </div>
        {project.images.length > 1 && (
          <div className="flex gap-2 p-4 border-t border-border">
            {project.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className="relative w-16 h-12 rounded border overflow-hidden shrink-0"
                style={{ borderColor: i === activeImage ? "var(--amber)" : "var(--border)" }}
              >
                <Image src={img} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </Modal>
    </Card>
  );
}
