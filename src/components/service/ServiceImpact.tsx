"use client";

import { motion } from "motion/react";
import type { ServiceStat } from "@/lib/service-data";

interface ServiceImpactProps {
  stats: ServiceStat[];
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceImpact({ stats }: ServiceImpactProps) {
  return (
    <section
      className="py-20 md:py-32 px-6 relative"
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold mb-3"
            style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
          >
            The Impact
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          className={`grid gap-12 text-center ${
            stats.length === 4
              ? "sm:grid-cols-2 md:grid-cols-4"
              : "sm:grid-cols-3"
          }`}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <span
                className="text-xs font-bold uppercase block mb-2"
                style={{
                  color: "#737373",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </span>
              <span
                className="font-display text-5xl md:text-6xl font-extrabold block"
                style={{
                  color: "#fca311",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>
              <p
                className="text-sm mt-2 max-w-[250px] mx-auto"
                style={{
                  color: "#737373",
                  lineHeight: "1.6",
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
