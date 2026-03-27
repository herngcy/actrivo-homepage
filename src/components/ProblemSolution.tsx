"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const before = [
  "Manually copying data between Excel sheets",
  "Approvals trapped in WhatsApp threads",
  "Highly-paid staff doing low-value admin",
];

const after = [
  "Data syncs instantly across all systems",
  "Automated approval flows, routed securely",
  "Team focuses on high-value growth work",
];

export function ProblemSolution() {
  return (
    <section className="py-20 px-6 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="font-display text-4xl md:text-5xl font-extrabold text-center tracking-[-0.03em] mb-12"
          style={{ color: "#000000", lineHeight: "1.1" }}
        >
          Sound familiar?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Left — Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <Spotlight
              size={300}
              className="from-red-500/20 via-red-500/10 to-transparent"
            />
            <p
              className="text-xs font-bold uppercase tracking-widest mb-7 relative z-10"
              style={{ color: "#525252" }}
            >
              Before Actrivo
            </p>
            <ul className="space-y-6 relative z-10">
              {before.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(239,68,68,0.15)" }}
                  >
                    <X className="w-3.5 h-3.5" style={{ color: "#ef4444" }} />
                  </div>
                  <span className="font-light leading-[1.6]" style={{ color: "#404040" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.08 }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid rgba(252,163,17,0.25)",
            }}
          >
            <Spotlight
              size={300}
              className="from-emerald-500/20 via-emerald-500/10 to-transparent"
            />
            <p
              className="text-xs font-bold uppercase tracking-widest mb-7 relative z-10"
              style={{ color: "#fca311" }}
            >
              With Actrivo
            </p>
            <ul className="space-y-6 relative z-10">
              {after.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(252,163,17,0.15)" }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: "#fca311" }} />
                  </div>
                  <span className="font-light leading-[1.6]" style={{ color: "#404040" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
