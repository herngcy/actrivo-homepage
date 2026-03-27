"use client";

import { motion } from "motion/react";
import type { ServiceStep } from "@/lib/service-data";

interface ServiceMethodologyProps {
  steps: ServiceStep[];
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceMethodology({ steps }: ServiceMethodologyProps) {
  return (
    <section
      className="py-20 md:py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      {/* PROCESS watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-extrabold uppercase"
          style={{
            fontSize: "clamp(120px, 20vw, 300px)",
            color: "rgba(0,0,0,0.03)",
            letterSpacing: "0.05em",
          }}
        >
          PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold mb-3"
            style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
          >
            How It Works
          </h2>
          <p style={{ color: "#737373" }}>
            Precision is our only variable.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <span
                className="font-display text-6xl md:text-7xl font-extrabold block leading-none"
                style={{ color: "#fca311" }}
              >
                {step.number}
              </span>
              <h3
                className="font-display text-lg font-bold mt-4 mb-2"
                style={{ color: "#0a0a0a" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "#737373",
                  lineHeight: "1.7",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
