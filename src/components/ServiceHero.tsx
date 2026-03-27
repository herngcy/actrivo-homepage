"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ButtonBorder } from "@/components/ui/button-border";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  Icon?: LucideIcon;
}

export function ServiceHero({
  badge,
  title,
  subtitle,
  ctaText = "Book Free Audit →",
  ctaHref = "/contact",
  Icon,
}: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center px-6 py-32"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Accent lines (similar to HeroMinimalism) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-[1px] opacity-75"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(252,163,17,0.4) 50%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 bottom-0 w-[1px] opacity-75"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(252,163,17,0.4) 50%, transparent 100%)",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              border: "1px solid rgba(252,163,17,0.35)",
              color: "#fca311",
              backgroundColor: "rgba(252,163,17,0.08)",
            }}
          >
            {badge}
          </span>
        </motion.div>

        {Icon && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Icon size={64} className="text-[#fca311]" strokeWidth={1.5} />
          </motion.div>
        )}

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
          style={{
            color: "#ffffff",
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: "1.7",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ButtonBorder href={ctaHref}>{ctaText}</ButtonBorder>
        </motion.div>
      </div>
    </section>
  );
}
