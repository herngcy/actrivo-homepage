"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { ServiceOverviewFeature } from "@/lib/service-data";

interface ServiceOverviewProps {
  description: string;
  features: ServiceOverviewFeature[];
  builtFor: string;
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceOverview({
  description,
  features,
  builtFor,
}: ServiceOverviewProps) {
  return (
    <section
      id="overview"
      className="py-20 md:py-32 px-6"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Image placeholder */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "4/3",
            backgroundColor: "#f5f5f5",
            border: "1px solid #e5e5e5",
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(252,163,17,0.06) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,0.04) 0%, transparent 50%)",
            }}
          />
          {/* Built for tag */}
          <div className="absolute bottom-6 left-6 right-6">
            <span
              className="text-xs font-bold uppercase"
              style={{ color: "#fca311", letterSpacing: "0.15em" }}
            >
              Built for
            </span>
            <p
              className="text-sm mt-1"
              style={{ color: "#525252", lineHeight: "1.6" }}
            >
              {builtFor}
            </p>
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
        >
          {/* Heading with amber left border */}
          <div
            className="pl-4 mb-6"
            style={{ borderLeft: "4px solid #fca311" }}
          >
            <h2
              className="font-display text-2xl font-bold uppercase"
              style={{
                color: "#0a0a0a",
                letterSpacing: "0.1em",
              }}
            >
              The Overview
            </h2>
          </div>

          <p
            className="text-base mb-8"
            style={{
              color: "#525252",
              lineHeight: "1.7",
            }}
          >
            {description}
          </p>

          {/* Feature points */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.2 + i * 0.1 }}
              >
                <Sparkles
                  size={20}
                  className="shrink-0 mt-1"
                  style={{ color: "#fca311" }}
                />
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#0a0a0a" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#737373",
                      lineHeight: "1.6",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
