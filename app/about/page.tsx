import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/about/About";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
