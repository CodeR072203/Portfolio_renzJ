import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Experience } from "@/components/experience/Experience";
import { Education } from "@/components/education/Education";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Experience — ${siteConfig.name}`,
  description: "Internship experience and education for " + siteConfig.name + ".",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
