import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Timeline } from "@/components/experience/Timeline";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="03">Experience</SectionHeading>
        </ScrollReveal>
        <Timeline />
      </Container>
    </section>
  );
}
