"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { PROJECTS } from "@/lib/data";
import { matchesCategory } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [openProjectId, setOpenProjectId] = useState(PROJECTS[0].id);

  const filteredProjects = PROJECTS.filter((project) => matchesCategory(project, filter));
  const activeProject = PROJECTS.find((project) => project.id === openProjectId) ?? PROJECTS[0];

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="04">Featured Projects</SectionHeading>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFilter active={filter} onChange={setFilter} />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onOpen={setOpenProjectId} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ProjectDetails project={activeProject} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
