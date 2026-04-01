"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Start with navbar visible — sticky bar offset = 64px
    document.documentElement.style.setProperty("--nav-offset", "64px");

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Only auto-hide on mobile (< 768px)
      if (window.innerWidth < 768) {
        if (y > lastScrollY.current && y > 80) {
          setHidden(true);
          document.documentElement.style.setProperty("--nav-offset", "0px");
          window.dispatchEvent(new CustomEvent("navbar-visibility", { detail: { visible: false } }));
        } else {
          setHidden(false);
          document.documentElement.style.setProperty("--nav-offset", "64px");
          window.dispatchEvent(new CustomEvent("navbar-visibility", { detail: { visible: true } }));
        }
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.removeProperty("--nav-offset");
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "background-color 300ms, border-color 300ms, transform 300ms ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-2.5 tracking-tight flex-shrink-0"
          style={{ color: "#262626" }}
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded font-black text-sm"
            style={{ backgroundColor: "#f59e0b", color: "#000" }}
          >
            A
          </div>
          Actrivo
        </Link>

        {/* Center nav links — desktop only */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium rounded-md"
              style={{
                color: "#6b7280",
                transitionProperty: "color",
                transition: "color 150ms",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#262626")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="px-4 py-2 rounded font-bold text-sm hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            style={{
              backgroundColor: "#f59e0b",
              color: "#000",
              boxShadow: "0 2px 12px rgba(245,158,11,0.25)",
              transitionProperty: "transform, box-shadow",
              transition: "transform 150ms, box-shadow 150ms",
            }}
          >
            Book a Call
          </a>

          <div ref={menuRef} className="relative md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] active:scale-95"
              style={{ color: "#262626", transition: "transform 150ms" }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="fixed right-4 w-56 rounded-2xl overflow-hidden"
                style={{
                  top: "30vh",
                  backgroundColor: "#111111",
                  border: "1px solid #2a2a2a",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMenuOpen(false);
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-3 px-5 py-4 text-base font-semibold focus-visible:outline-none focus-visible:bg-white/5"
                    style={{
                      color: "#a3a3a3",
                      borderLeft: "3px solid transparent",
                      transition: "color 150ms, background-color 150ms, border-color 150ms",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#ffffff";
                      el.style.backgroundColor = "rgba(255,255,255,0.06)";
                      el.style.borderLeftColor = "#f59e0b";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#a3a3a3";
                      el.style.backgroundColor = "transparent";
                      el.style.borderLeftColor = "transparent";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-[#2a2a2a] mx-4 my-1" />
                <a
                  href="/contact"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-5 py-4 text-base font-bold focus-visible:outline-none"
                  style={{
                    color: "#f59e0b",
                    borderLeft: "3px solid transparent",
                    transition: "color 150ms, background-color 150ms, border-color 150ms",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "rgba(245,158,11,0.1)";
                    el.style.borderLeftColor = "#f59e0b";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.borderLeftColor = "transparent";
                  }}
                >
                  Book a Call →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
