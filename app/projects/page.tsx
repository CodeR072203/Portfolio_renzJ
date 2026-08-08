import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/projects/Projects";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "Featured full stack, mobile, and AR projects built by " + siteConfig.name + ".",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
