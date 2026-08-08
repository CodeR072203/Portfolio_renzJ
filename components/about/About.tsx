import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProfileImage } from "@/components/about/ProfileImage";
import { Stats } from "@/components/about/Stats";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="01">About</SectionHeading>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          <ScrollReveal className="md:col-span-2">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-start mb-2">
              <ProfileImage />
              <div>
                <p className="text-lg md:text-xl leading-relaxed mb-5">
                  I&apos;m a BS Information Technology graduate who specializes in full stack web development. I like
                  software that does something real — books an appointment, transcribes a room in real time, finds
                  the nearest clinic, or teaches a disaster drill through a phone camera.
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              During my Software Developer internship, I worked inside an existing internal business system rather
              than a greenfield project — debugging live issues, adjusting the database as requirements changed,
              writing tests, keeping documentation honest, and shipping through a shared Git workflow with senior
              engineers reviewing my code. That&apos;s where I learned that the hard part of software isn&apos;t
              writing it — it&apos;s writing it so the next person, and your future self, can trust it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Stats />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
