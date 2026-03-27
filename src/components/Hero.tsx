"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 16, delay },
  }),
};

export function Hero() {
  return (
    <section className="relative px-6 pt-36 pb-24 md:pt-48 md:pb-36 flex flex-col items-center justify-center text-center overflow-hidden min-h-[85vh]" style={{ backgroundColor: "#ffffff" }}>
      {/* Subtle amber radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* H1 — heading only */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-10"
          style={{ color: "#262626" }}
        >
          Built for Businesses Too Busy to Stay Manual.
        </motion.h1>

        {/* Buttons */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded font-bold text-base hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            style={{
              backgroundColor: "#f59e0b",
              color: "#000",
              boxShadow: "0 4px 24px rgba(245,158,11,0.3), 0 1px 4px rgba(245,158,11,0.15)",
              transitionProperty: "transform, box-shadow",
              transition: "transform 150ms, box-shadow 150ms",
            }}
          >
            Find My Time Leaks — Free →
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded font-bold text-base hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            style={{
              border: "1px solid #e5e7eb",
              color: "#262626",
              backgroundColor: "transparent",
              transitionProperty: "transform, border-color, background-color",
              transition: "transform 150ms, border-color 150ms, background-color 150ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#f59e0b";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,158,11,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            See How It Works →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
