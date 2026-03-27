"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/SmoothScrollProvider";

export interface MenuItem {
  name: string;
  url: string;
  highlight?: boolean;
}

interface NavBarProps {
  menuItems?: MenuItem[];
  logoSrc?: string;
  brandName?: string;
  tagline?: string;
  className?: string;
  forceDarkBg?: boolean;
}

export function NavBar({
  menuItems = [],
  logoSrc,
  brandName,
  tagline,
  className,
  forceDarkBg = false,
}: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("Services");
  const lastScrollY = useRef(0);
  const lenis = useLenis();

  const menuImages: Record<string, { src: string; label: string; subtitle: string }> = {
    "Services": { src: "/images/glass-wall-workflow.png", label: "Our Services", subtitle: "AI-powered automation solutions" },
    "Work": { src: "/images/acceptable/mobile-menu-work.png", label: "Our Work", subtitle: "See what we've built" },
    "Blog": { src: "/images/acceptable/mobile-menu-blog.png", label: "Actrivo Insights", subtitle: "Latest articles & insights" },
    "Contact": { src: "/images/mobile-menu-contact-notext.png", label: "Get in Touch", subtitle: "Let's bridge the gap together" },
  };

  // Lock scroll when menu is open (via Lenis + fallback)
  useEffect(() => {
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [menuOpen, lenis]);

  // Scroll-hide behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY < 50) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          className
        )}
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          backgroundColor: scrolled || menuOpen || forceDarkBg ? "rgba(10, 10, 10, 0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen || forceDarkBg ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen || forceDarkBg ? "blur(24px)" : "none",
          borderBottom: scrolled && !menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms, backdrop-filter 300ms, border-bottom 300ms",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Left: Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 relative z-[60]"
          >
            {logoSrc && (
              <Image
                src={logoSrc}
                alt={brandName || "Logo"}
                width={28}
                height={28}
                className="rounded object-contain"
              />
            )}
            {brandName && (
              <span className="text-[15px] font-semibold text-white tracking-tight">
                {brandName}
              </span>
            )}
          </Link>

          {/* Center: Tagline */}
          {tagline && !menuOpen && (
            <span className="hidden md:block text-sm font-semibold text-white/80 tracking-tight">
              {tagline}
            </span>
          )}

          {/* Right: Hamburger */}
          {menuItems.length > 0 && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer relative z-[60]",
                "hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] active:scale-95",
                "text-white"
              )}
              style={{ transition: "transform 150ms" }}
            >
              {menuOpen ? (
                <X size={20} strokeWidth={2} />
              ) : (
                <Menu size={20} strokeWidth={2} />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: "#0a0a0a",
            }}
          >
            {/* Content area — starts below the navbar */}
            <div className="h-full pt-20 pb-8 px-6 md:px-10 max-w-7xl mx-auto flex flex-col">
              {/* Main content: Links + Image */}
              <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 min-h-0">
                {/* Left: Navigation links */}
                <div className="flex flex-col justify-center md:w-1/2">
                  <div className="space-y-1">
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.url}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.url}
                          onClick={() => { setMenuOpen(false); setHoveredItem("Services"); }}
                          onMouseEnter={() => setHoveredItem(item.name)}
                          className={cn(
                            "group flex items-center gap-4 py-3 md:py-4",
                            "focus-visible:outline-none"
                          )}
                        >
                          <span
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                            style={{
                              color: item.highlight ? "#fca311" : "#ffffff",
                              fontFamily: "'Space Grotesk', sans-serif",
                              transition: "color 200ms",
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.color = "#fca311";
                            }}
                            onMouseLeave={(e) => {
                              if (!item.highlight) {
                                (e.target as HTMLElement).style.color = "#ffffff";
                              }
                            }}
                          >
                            {item.name}
                          </span>
                          {item.highlight && (
                            <ArrowRight
                              size={28}
                              className="text-[#fca311] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                              style={{ transition: "opacity 200ms, transform 200ms" }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Dynamic hover image */}
                <motion.div
                  className="hidden md:flex md:w-1/2 items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: "0 20px 60px rgba(252, 163, 17, 0.08), 0 8px 24px rgba(0,0,0,0.4)",
                      background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredItem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={menuImages[hoveredItem]?.src || menuImages["Services"].src}
                          alt={menuImages[hoveredItem]?.label || "Services"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 0vw, 50vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                      }}
                    />
                    {/* Text overlay on image */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {menuImages[hoveredItem]?.label || "Our Services"}
                      </p>
                      <p
                        className="text-xl md:text-2xl font-bold tracking-tight leading-tight"
                        style={{
                          color: "#ffffff",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {menuImages[hoveredItem]?.subtitle || "AI-powered automation solutions"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom: Contact info */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-6 mt-auto"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <a
                  href="mailto:actrivo@gmail.com"
                  className="text-sm hover:text-[#fca311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] rounded"
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms" }}
                >
                  actrivo@gmail.com
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 hover:text-[#fca311] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] rounded"
                  style={{ color: "rgba(255,255,255,0.6)", transition: "color 200ms" }}
                >
                  LinkedIn
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
