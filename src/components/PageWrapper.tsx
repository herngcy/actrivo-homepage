"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/Footer";

const globalMenuItems = [
  { name: "Services", url: "/services" },
  { name: "Pricing", url: "/pricing" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
  { name: "Book a Call", url: "/contact", highlight: true },
];

interface PageWrapperProps {
  children: React.ReactNode;
  forceDarkNav?: boolean;
  pageName?: string;
}

export function PageWrapper({ children, forceDarkNav = false, pageName }: PageWrapperProps) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000000", color: "#ffffff", overflowX: "clip" }}>
      <NavBar
        menuItems={globalMenuItems}
        logoSrc="/actrivo-logo.jpeg"
        brandName="Actrivo"
        tagline={pageName}
        forceDarkBg={forceDarkNav}
      />
      {children}
      <Footer />
    </main>
  );
}
