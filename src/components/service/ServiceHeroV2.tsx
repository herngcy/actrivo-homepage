"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ButtonBorder } from "@/components/ui/button-border";
import { ButtonGhost } from "@/components/ui/button-ghost";
import type { ServiceHeroStat } from "@/lib/service-data";

interface ServiceHeroV2Props {
  badge: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroImage: string;
  heroStats: [ServiceHeroStat, ServiceHeroStat];
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceHeroV2({
  badge,
  headline,
  headlineAccent,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  heroImage,
  heroStats,
}: ServiceHeroV2Props) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center px-6 py-32 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Diagonal background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 55%, rgba(252,163,17,0.03) 70%, rgba(252,163,17,0.06) 100%)",
        }}
      />

      {/* Subtle accent line */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-[1px] opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(252,163,17,0.3) 50%, transparent 100%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side — Text content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
              style={{
                border: "1px solid rgba(252,163,17,0.3)",
                color: "#fca311",
                backgroundColor: "rgba(252,163,17,0.08)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#fca311" }}
              />
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-extrabold leading-[1.08] mb-6"
            style={{ letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <span style={{ color: "#ffffff" }}>{headline}</span>{" "}
            <span style={{ color: "#fca311" }}>{headlineAccent}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl max-w-xl mb-10"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
          >
            <ButtonBorder href="/contact">{ctaPrimary}</ButtonBorder>
            <ButtonGhost href="#overview">{ctaSecondary}</ButtonGhost>
          </motion.div>
        </div>

        {/* Right side — Image with overlapping stat cards in grid */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: 0.2 }}
        >
          {/* Container with background image */}
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center p-8"
            style={{
              aspectRatio: "1 / 1",
              background: "linear-gradient(135deg, rgba(252,163,17,0.2) 0%, rgba(0,0,0,1) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.3 }}
          >
            {/* Background image layer */}
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover opacity-40 mix-blend-luminosity"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Grid of overlapping stat cards */}
            <div className="grid grid-cols-2 gap-4 w-full h-full z-10 relative">
              {/* Card 1 — Left column, shifted down */}
              <motion.div
                className="rounded-xl p-6 flex flex-col justify-between transform translate-y-8"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.5 }}
              >
                {/* Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "#fca311" }}
                >
                  <path
                    d="M3 18L9 6L15 13.5L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Stats */}
                <div>
                  <div
                    className="text-2xl font-display font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    +{heroStats[0].value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {heroStats[0].label}
                  </div>
                </div>
              </motion.div>

              {/* Card 2 — Right column, default position */}
              <motion.div
                className="rounded-xl p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.6 }}
              >
                {/* Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "#fca311" }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Stats */}
                <div>
                  <div
                    className="text-2xl font-display font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    {heroStats[1].value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {heroStats[1].label}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
