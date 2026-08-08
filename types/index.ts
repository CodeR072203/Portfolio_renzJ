export * from "./project";
export * from "./experience";
export * from "./skill";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "resume";
}

export interface Profile {
  name: string;
  roles: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  blurb: string;
  profileImage: string;
  avatarFallback: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
