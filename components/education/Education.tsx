import { GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardContent } from "@/components/ui/Card";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="05">Education</SectionHeading>
        </ScrollReveal>
        <ScrollReveal>
          <Card static>
            <CardContent className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-amber-soft flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-amber" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{EDUCATION.degree}</h3>
                <p className="text-text-muted text-sm mt-1">{EDUCATION.detail}</p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}
