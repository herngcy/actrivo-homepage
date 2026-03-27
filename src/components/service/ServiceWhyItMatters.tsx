"use client";

import { motion } from "motion/react";
import type { ServiceWhyCard } from "@/lib/service-data";

interface ServiceWhyItMattersProps {
  cards: ServiceWhyCard[];
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceWhyItMatters({ cards }: ServiceWhyItMattersProps) {
  return (
    <section
      className="py-20 md:py-32 px-6"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold"
            style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
          >
            Why It Matters
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: "#0a0a0a" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base"
                style={{
                  color: "#525252",
                  lineHeight: "1.7",
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
