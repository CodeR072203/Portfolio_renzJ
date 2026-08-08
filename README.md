# Renz Joseph Mendoza — Portfolio

Production-ready Next.js 14 (App Router) rebuild of the portfolio. Same design, animations,
copy, and functionality as the original single-file version — refactored into a maintainable,
typed, component-based architecture.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** — design tokens driven by CSS variables (`app/globals.css`) for dark/light theming
- **Framer Motion** — all animation (scroll reveal, typing effect, hover states, modal transitions)
- **shadcn/ui-style primitives** — `Button`, `Card`, `Badge`, `Modal` built with `class-variance-authority`
- **Lucide Icons** + **react-icons/si** (Simple Icons) for official technology logos

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create a `.env.local` file at the project root with the following values:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=renzjoseph132@gmail.com
CONTACT_FROM_EMAIL=your-verified-sender@example.com
```

Do not commit `.env.local` to source control. The repository already ignores `.env*.local`.

## Project structure

```
app/                    Route segments (App Router)
  layout.tsx            Fonts, metadata, theme provider, loading screen, back-to-top
  page.tsx              Composes all sections for the home page
  globals.css           CSS variable design tokens (dark/light) + base styles
  loading.tsx           Route-level loading UI
  not-found.tsx          404 page
  about/, projects/,
  experience/, contact/ Standalone routes for direct linking + SEO (render the same
                         section components used on the home page)
  api/contact/route.ts  Contact form submission endpoint (stubbed — see TODO inside)

components/
  layout/                Navbar, Footer, ThemeToggle, Container
  hero/                  Hero, TypingEffect, StatusTerminal, HeroBackground
  about/                 About, Stats, ProfileImage
  skills/                Skills, SkillCategory, SkillCard
  projects/              Projects, ProjectCard, ProjectFilter, ProjectDetails, TechBadge
  experience/            Experience, Timeline, TimelineItem, ExperienceCard
  education/             Education
  contact/               Contact, ContactForm, ContactCard, SocialLinks
  ui/                    Button, Card, Badge, Modal, SectionHeading, AnimatedCounter,
                         LoadingScreen, ScrollReveal, BackToTop

lib/
  data.ts                ALL content lives here: profile, skills, experience, education,
                         projects, stats, tech-icon lookup. Edit this file to update the site.
  animations.ts          Every Framer Motion variant used across the app
  utils.ts                cn() class merge helper + small pure helpers
  config.ts               Site metadata (title, description, OG image, keywords)

hooks/
  useTypingEffect.ts, useScrollReveal.ts, useIntersection.ts, useTheme.ts

types/
  project.ts, experience.ts, skill.ts, index.ts
```

## Before you deploy — asset checklist

Search the codebase for `TODO` to find every placeholder. In short:

- `public/images/profile.jpg` — your real photo (falls back to `avatar-placeholder.svg` automatically if missing)
- `public/images/projects/*.png` — real screenshots for each project (SVG placeholders are wired up and working today)
- `public/resume.pdf` — your actual resume (linked from the navbar and hero)
- `lib/data.ts` — replace the placeholder GitHub/LinkedIn URLs, email, and per-project `githubUrl` / `demoUrl`
- `lib/config.ts` — set your real deployed domain for `siteConfig.url` and add a real Open Graph image
- `app/api/contact/route.ts` — wire up an email provider (Resend/SendGrid/Postmark) or a webhook; it currently validates and logs submissions only

## Notes

- Every project supports multiple screenshots — add more paths to a project's `images` array in
  `lib/data.ts` and the gallery modal in `ProjectDetails` will pick them up automatically.
- Dark mode is the default; the toggle persists via `next-themes`.
- If `npm install` reports a missing icon export from `react-icons/si` (icon slugs occasionally get
  renamed upstream), check https://react-icons.github.io/react-icons/icons/si for the current name
  and update the import in `lib/data.ts`.
