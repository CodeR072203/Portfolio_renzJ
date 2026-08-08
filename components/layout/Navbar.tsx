"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Menu, X, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LinkButton } from "@/components/ui/Button";
import { PROFILE } from "@/lib/data";

const NAV_LINKS: Array<[string, string]> = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/#home" className="font-mono text-sm font-medium flex items-center gap-2">
          <Terminal className="w-4 h-4 text-amber" strokeWidth={1.75} />
          RJM<span className="text-text-dim">.dev</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([id, label]) => (
            <Link
              key={id}
              href={`/#${id}`}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LinkButton
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={2} />
            Resume
          </LinkButton>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map(([id, label]) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-text-muted"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <ThemeToggle />
            <LinkButton
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="flex-1 justify-center"
            >
              Resume
            </LinkButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}
