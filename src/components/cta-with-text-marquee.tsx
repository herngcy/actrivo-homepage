"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function CTAWithVerticalMarquee() {
  return (
    <div className="relative min-h-[520px] md:min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/acceptable/kl_office_sunset_empty_hires.jpg"
        alt="Modern office at golden hour with Kuala Lumpur skyline through glass windows"
        fill
        className="object-cover scale-110"
        style={{ objectPosition: "center 35%" }}
        sizes="100vw"
        priority={false}
      />

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[520px] md:min-h-[600px] px-6 md:px-12 lg:px-20 pb-16 md:pb-20 pt-16">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="mb-auto"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border cursor-default"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
            }}
          >
            <MessageCircle className="w-4 h-4" style={{ color: "#fca311" }} />
            Contact Us
          </span>
        </motion.div>

        {/* Large display heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 16, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-[-0.02em] max-w-2xl mb-10"
          style={{ color: "#ffffff", lineHeight: "1.2", textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)" }}
        >
          Turning manual chaos into{" "}
          <span className="italic font-normal" style={{ color: "rgba(255,255,255,0.9)" }}>
            structure,
          </span>
          <br />
          and structure into{" "}
          <span className="italic font-normal" style={{ color: "rgba(255,255,255,0.9)" }}>
            growth
          </span>
        </motion.h2>

        {/* Dark CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 16, delay: 0.2 }}
        >
          <a
            href="/contact"
            className="btn-shine group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{
              backgroundColor: "#fca311",
              color: "#000000",
              transition: "transform 150ms, background-color 150ms, box-shadow 150ms",
              boxShadow: "0 4px 20px rgba(252,163,17,0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-1px)";
              el.style.backgroundColor = "#e5940f";
              el.style.boxShadow = "0 6px 28px rgba(252,163,17,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.backgroundColor = "#fca311";
              el.style.boxShadow = "0 4px 20px rgba(252,163,17,0.3)";
            }}
            onMouseDown={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(0.98)")
            }
            onMouseUp={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "translateY(-1px)")
            }
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
