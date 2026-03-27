import type { Metadata } from "next";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { OrbitalHero } from "@/components/ui/hero-orbital";
import { AboutUs } from "@/components/AboutUs";
import { HowItWorks } from "@/components/HowItWorks";
import { BentoFeatures } from "@/components/BentoFeatures";
import { TrustGrid } from "@/components/TrustGrid";
import { Accordion } from "@/components/Accordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Actrivo | AI Automation for Malaysian SMEs",
  description: "Actrivo helps Malaysian SMEs automate repetitive tasks with AI-powered workflows. Data entry, document processing, CRM automation, and more.",
};

const menuItems = [
  { name: "Services", url: "/services" },
  { name: "Work", url: "/work" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact", highlight: true },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-clip">
      {/* SECTION 1 — Tubelight Floating Navbar */}
      <NavBar
        menuItems={menuItems}
        logoSrc="/actrivo-logo.jpeg"
        brandName="Actrivo"
        tagline="AI Automation for Malaysian SMEs"
      />

      {/* SECTION 2 — Hero Minimalism (dark, full-height) */}
      <OrbitalHero />

      {/* SECTION 3 */}
      <AboutUs />

      {/* SECTION 4 — Interactive How It Works */}
      <HowItWorks />

      {/* SECTION 7 */}
      <BentoFeatures />

      {/* SECTION 8 */}
      <TrustGrid />

      {/* SECTION 9 */}
      <Accordion />

      {/* SECTION 10 */}
      <FinalCTA />

      {/* SECTION 11 */}
      <Footer />
    </main>
  );
}
