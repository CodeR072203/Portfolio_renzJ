import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <p className="font-mono text-xs text-amber tracking-widest">$ curl /this-page</p>
      <h1 className="font-display text-5xl md:text-6xl font-semibold">404</h1>
      <p className="text-text-muted max-w-sm">
        This route doesn&apos;t exist — the page you&apos;re looking for may have moved.
      </p>
      <Link href="/">
        <LinkButton href="/" variant="primary">
          Back to home
        </LinkButton>
      </Link>
    </Container>
  );
}
