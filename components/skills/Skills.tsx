import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillCategory } from "@/components/skills/SkillCategory";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="02">Skills</SectionHeading>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((category, i) => (
            <ScrollReveal key={category.label} delay={i * 90}>
              <SkillCategory category={category} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
