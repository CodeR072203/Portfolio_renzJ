import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiUnity,
  SiSharp,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { Code2, Server, Smartphone, Database, Sparkles, Wrench } from "lucide-react";
import type {
  Profile,
  Stat,
  SocialLink,
  SkillCategory,
  ExperienceItem,
  EducationInfo,
  Project,
  ProjectCategory,
} from "@/types";

/* ---------------------------------------------------------
   Profile
--------------------------------------------------------- */

export const PROFILE: Profile = {
  name: "Renz Joseph Mendoza",
  roles: ["Full Stack Developer", "React & Node Engineer", "BS Information Technology"],
  location: "Philippines",
  email: "renzjoseph132@gmail.com",
  github: "https://github.com/CodeR072203",
  linkedin: "https://www.linkedin.com/in/rj-mendoza-898307367/",
  resumeUrl: "https://drive.google.com/file/d/1lfbsMACQNDsDlyofDsm2h5ulqPdIBDd6/view?usp=drive_link",
  blurb:
    "I build full stack products end to end — from schema design to the pixel that ships. Most recently, real-time systems that connect people to AI assistants, live transcripts, nearby care, and disaster-readiness training.",
  profileImage: "/images/profilepic.png",
  avatarFallback: "/images/avatar-placeholder.svg",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: PROFILE.github, icon: "github" },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "email" },
  { label: "Resume", href: PROFILE.resumeUrl, icon: "resume" },
];

export const STATS: Stat[] = [
  { value: 4, suffix: "", label: "Shipped projects" },
  { value: 12, suffix: "+", label: "Technologies used in production" },
  { value: 1, suffix: "", label: "Internship, real users" },
];

/* ---------------------------------------------------------
   Skills
--------------------------------------------------------- */

export const SKILL_GROUPS: SkillCategory[] = [
  {
    label: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact, years: 2, level: 5 },
      { name: "Next.js", icon: SiNextdotjs, years: 1, level: 4 },
      { name: "TypeScript", icon: SiTypescript, years: 1, level: 4 },
      { name: "JavaScript", icon: SiJavascript, years: 2, level: 5 },
      { name: "Tailwind CSS", icon: SiTailwindcss, years: 1, level: 4 },
      { name: "Framer Motion", icon: SiFramer, years: 1, level: 3 },
      { name: "HTML5", icon: SiHtml5, years: 3, level: 5 },
      { name: "CSS3", icon: SiCss, years: 3, level: 4 },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, years: 2, level: 4 },
      { name: "Express.js", icon: SiExpress, years: 2, level: 4 },
      { name: "PHP", icon: SiPhp, years: 1, level: 3 },
      { name: "JWT Auth", icon: SiJsonwebtokens, years: 1, level: 4 },
      { name: "WebSockets", icon: SiSocketdotio, years: 1, level: 3 },
    ],
  },
  {
    label: "Mobile",
    icon: Smartphone,
    skills: [{ name: "Flutter", icon: SiFlutter, years: 1, level: 3 }],
  },
  {
    label: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, years: 2, level: 4 },
      { name: "MySQL", icon: SiMysql, years: 2, level: 4 },
      { name: "Firebase", icon: SiFirebase, years: 1, level: 3 },
    ],
  },
  {
    label: "AI",
    icon: Sparkles,
    skills: [{ name: "OpenAI APIs", icon: FaRobot, years: 1, level: 3 }],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, years: 2, level: 4 },
      { name: "GitHub", icon: SiGithub, years: 2, level: 4 },
    ],
  },
  {
    label: "Languages",
    icon: Code2,
    skills: [
      { name: "C#", icon: SiSharp, years: 1, level: 3 },
      { name: "Unity", icon: SiUnity, years: 1, level: 3 },
    ],
  },
];

/* ---------------------------------------------------------
   Experience & Education
--------------------------------------------------------- */

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    org: "Internal Business Systems Team",
    period: "On-the-job Training",
    points: [
      "Shipped features into a live internal business application used by non-technical staff, so every change had to be backward compatible with existing workflows.",
      "Designed and adjusted database schemas as new modules were added, keeping data integrity across releases.",
      "Worked inside a shared Git workflow — feature branches, code review, merge conflict resolution — alongside senior developers.",
      "Wrote and ran tests to catch regressions before release, and kept internal documentation current so the next developer wasn't starting from zero.",
      "Debugged production issues by tracing them from a user-reported symptom back to the exact line of code causing it.",
    ],
  },
];

export const EDUCATION: EducationInfo = {
  degree: "BS in Information Technology",
  school: "Graduate",
  detail:
    "Coursework and independent projects centered on full stack web development, database systems, and applied software engineering.",
};

/* ---------------------------------------------------------
   Projects
--------------------------------------------------------- */

export const PROJECTS: Project[] = [
  {
    id: "ai-reservation",
    name: "AI Reservation System",
    tag: "Web · AI",
    category: "Web",
    summary:
      "A booking platform where an AI assistant helps customers reserve a slot in conversation, instead of clicking through a rigid calendar form.",
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    features: [
      "Conversational AI assistant for booking",
      "Real-time availability engine",
      "Reservation management dashboard",
      "Payment integration",
      "Modern admin dashboard",
    ],
    role: "Built the system end to end — schema, API, real-time logic, and UI.",
    challenge:
      "The AI assistant is generative, but a booking can't be. I built a validation layer between the assistant's suggestions and the database so every reservation is checked against live availability before it's confirmed — no double-bookings, no reserved-but-taken slots.",
    impact:
      "Customers can book in a sentence instead of a form, and the business gets a dashboard where every reservation, payment, and time slot stays in sync.",
    color: "amber",
    images: [
      "/images/projects/ai-reservation-01.png",
      "/images/projects/ai-reservation-02.png",
      "/images/projects/ai-reservation-03.png",
      "/images/projects/ai-reservation-04.png",
      "/images/projects/ai-reservation-05.png",
      "/images/projects/ai-reservation-06.png",
      "/images/projects/ai-reservation-07.png",
      "/images/projects/ai-reservation-08.png",
      "/images/projects/ai-reservation-09.png",
    ],
    githubUrl: "https://github.com/herobaceles/OPEN-AI-Powered-Booking-System.git",
    demoUrl: undefined, // TODO: add live demo URL if available
  },
  {
    id: "equinotes",
    name: "EquiNotes",
    tag: "Web · Real-time",
    category: "Web",
    summary:
      "Live transcription for meetings and lectures — speech becomes searchable text on screen as people are still talking.",
    stack: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "OpenAI Whisper"],
    features: [
      "Real-time speech-to-text",
      "Live transcription for multiple listeners",
      "JWT authentication",
      "Role-based access (host vs. viewer)",
      "Transcript history and management",
    ],
    role: "Designed the streaming architecture and access-control model.",
    challenge:
      "Audio has to move in small chunks over WebSockets to Whisper and come back as text fast enough to feel live, while every connected client's transcript stays identical. I built the sync layer so a host and every viewer see the same words appear at the same time, gated by role.",
    impact:
      "Turns a spoken session into a permanent, searchable record without anyone taking manual notes.",
    color: "teal",
    images: ["/images/projects/equinotes.svg"],
    githubUrl: "https://github.com/CodeR072203/EquinotesV2.git",
    demoUrl: undefined,
  },
  {
    id: "pcc-finder",
    name: "PCC Finder",
    tag: "Mobile",
    category: "Mobile",
    summary:
      "A mobile app that shows a user the closest primary care clinics based on where they actually are, not a static directory.",
    stack: ["Flutter", "Firebase", "Mapbox"],
    features: [
      "Nearby clinic search",
      "Live location tracking",
      "Interactive map view",
      "Firebase-backed clinic data",
    ],
    role: "Built the mobile app and the geolocation queries behind it.",
    challenge:
      "Querying Firebase by proximity isn't built in, so I structured the clinic data and queries to make live nearby-search fast, and kept map rendering smooth even with many markers on screen on a mid-range phone.",
    impact: "Cuts 'where's the nearest clinic' down to opening an app and looking at a map.",
    color: "amber",
    images: ["/images/projects/pcc-finder.svg"],
    githubUrl: "https://github.com/herobaceles/pccv3.git",
    demoUrl: undefined,
  },
  {
    id: "bahanda",
    name: "BaHanda",
    tag: "Game · AR",
    category: "Game",
    summary:
      "An augmented-reality game that teaches disaster preparedness by putting the player inside the scenario instead of a slideshow.",
    stack: ["Unity", "C#", "AR Foundation"],
    features: [
      "AR-based learning scenarios",
      "Disaster preparedness curriculum",
      "Interactive gameplay",
      "Built for classroom use",
    ],
    role: "Developed the AR interactions and game logic in Unity.",
    challenge:
      "Turning a safety curriculum into gameplay meant every mechanic had to teach something real — I worked with AR Foundation to keep object tracking stable across devices so the lesson didn't break because the AR did.",
    impact: "Makes disaster-readiness training something players remember, instead of something they sat through.",
    color: "teal",
    images: ["/images/projects/bahanda.svg"],
    githubUrl: "https://github.com/herobaceles/CapsB.git",
    demoUrl: undefined,
  },
];

export const PROJECT_FILTERS: Array<ProjectCategory | "All"> = ["All", "Web", "Mobile", "Game"];

/* ---------------------------------------------------------
   Tech badge icon lookup — maps a stack label (as used in
   PROJECTS[].stack) to its official logo. Falls back to a
   generic icon in <TechBadge /> when a name isn't listed here.
--------------------------------------------------------- */

export const TECH_ICON_MAP: Record<string, (typeof SiReact)> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  PHP: SiPhp,
  WebSockets: SiSocketdotio,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Flutter: SiFlutter,
  "OpenAI API": FaRobot,
  "OpenAI Whisper API": FaRobot,
  "OpenAI APIs": FaRobot,
  Unity: SiUnity,
  "C#": SiSharp,
  Git: SiGit,
  GitHub: SiGithub,
};
