import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <ScrollReveal>
          <SectionHeading index="06">Contact</SectionHeading>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal>
            <ContactCard />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
