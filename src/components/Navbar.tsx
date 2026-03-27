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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        transition: "background-color 300ms, border-color 300ms",
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
                className="absolute right-0 top-[calc(100%+8px)] w-52 rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
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
                    className="block px-5 py-3 text-sm font-medium hover:bg-black/5 focus-visible:outline-none"
                    style={{ color: "#4b5563", transition: "background-color 150ms" }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-[#e5e7eb] mx-3" />
                <a
                  href="/contact"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-sm font-bold focus-visible:outline-none"
                  style={{ color: "#f59e0b", transition: "background-color 150ms" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,158,11,0.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
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
