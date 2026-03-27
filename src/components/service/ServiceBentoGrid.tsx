"use client";

import { motion } from "motion/react";
import type { ServiceCapability } from "@/lib/service-data";

interface ServiceBentoGridProps {
  capabilities: ServiceCapability[];
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceBentoGrid({ capabilities }: ServiceBentoGridProps) {
  return (
    <section
      className="py-20 md:py-32 px-6"
      style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
          >
            What We Build
          </h2>
          <p style={{ color: "#737373" }}>
            Custom-forged solutions that redefine the standard of excellence.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className={`rounded-2xl p-8 cursor-pointer ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "border-color 300ms ease, box-shadow 300ms ease",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(252,163,17,0.4)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(252,163,17,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
              }}
            >
              <span
                className="text-xs font-bold uppercase block mb-3"
                style={{
                  color: "#fca311",
                  letterSpacing: "0.15em",
                }}
              >
                {cap.label}
              </span>
              <h3
                className="font-display text-xl md:text-2xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "#737373",
                  lineHeight: "1.7",
                  maxWidth: i === 0 ? "600px" : undefined,
                }}
              >
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
