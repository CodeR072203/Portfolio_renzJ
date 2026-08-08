"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TypingEffect } from "@/components/hero/TypingEffect";
import { StatusTerminal } from "@/components/hero/StatusTerminal";
import { PROFILE } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 scroll-mt-20">
      <HeroBackground />
      <Container>
        <motion.div
          className="grid md:grid-cols-5 gap-10 md:gap-16 items-center w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
        >
          <div className="md:col-span-3">
            <motion.p variants={fadeUp} className="font-mono text-xs text-amber tracking-widest mb-5">
              $ whoami
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] mb-6"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.div variants={fadeUp}>
              <TypingEffect words={PROFILE.roles} className="font-mono text-base md:text-lg text-teal mb-6 h-7" />
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mb-9">
              {PROFILE.blurb}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <LinkButton href="#projects" variant="primary">
                View my work
              </LinkButton>
              <LinkButton href="#contact" variant="ghost">
                Get in touch
              </LinkButton>
              <div className="flex items-center gap-2 ml-1">
                <LinkButton
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="icon"
                  size="icon"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" strokeWidth={1.75} />
                </LinkButton>
                <LinkButton
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="icon"
                  size="icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                </LinkButton>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="md:col-span-2">
            <StatusTerminal />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
