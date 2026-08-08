"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, type LucideIcon } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileText,
};

interface SocialLinksProps {
  variant?: "compact" | "list";
  className?: string;
}

const EMAIL_LABEL = "Email";

export function SocialLinks({ variant = "compact", className }: SocialLinksProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy email to clipboard:", error);
    }
  };

  const renderEmailButton = (link: typeof SOCIAL_LINKS[number], Icon: LucideIcon) => {
    const email = link.href.replace(/^mailto:/i, "");

    if (variant === "list") {
      return (
        <button
          key={link.label}
          type="button"
          onClick={() => copyEmail(email)}
          className="flex items-center gap-3 text-sm text-text-muted hover:text-amber transition-colors w-fit"
        >
          <Icon className="w-4 h-4 text-amber" strokeWidth={1.75} />
          {link.label}
          {copied && <span className="text-xs text-amber/90">Email copied!</span>}
        </button>
      );
    }

    return (
      <div key={link.label} className="flex items-center gap-2">
        <Button
          type="button"
          onClick={() => copyEmail(email)}
          variant="icon"
          size="icon"
          aria-label={link.label}
        >
          <Icon className="w-4 h-4" strokeWidth={1.75} />
        </Button>
        {copied && <span className="text-[11px] text-amber/90">Email copied!</span>}
      </div>
    );
  };

  if (variant === "list") {
    return (
      <div className={cn("space-y-3", className)}>
        {SOCIAL_LINKS.map((link) => {
          const Icon = ICONS[link.icon];
          if (link.label === EMAIL_LABEL) {
            return renderEmailButton(link, Icon);
          }

          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-text-muted hover:text-amber transition-colors w-fit"
            >
              <Icon className="w-4 h-4 text-amber" strokeWidth={1.75} />
              {link.label}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.icon];
        if (link.label === EMAIL_LABEL) {
          return renderEmailButton(link, Icon);
        }

        return (
          <LinkButton
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            size="icon"
            aria-label={link.label}
          >
            <Icon className="w-4 h-4" strokeWidth={1.75} />
          </LinkButton>
        );
      })}
    </div>
  );
}
