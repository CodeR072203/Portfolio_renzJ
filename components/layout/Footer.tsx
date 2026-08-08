import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialLinks variant="compact" />
      </Container>
    </footer>
  );
}
