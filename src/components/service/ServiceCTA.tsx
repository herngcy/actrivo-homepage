"use client";

import { motion } from "motion/react";
import { ButtonBorder } from "@/components/ui/button-border";

interface ServiceCTAProps {
  headline: string;
  subtitle: string;
  buttonText: string;
}

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function ServiceCTA({ headline, subtitle, buttonText }: ServiceCTAProps) {
  return (
    <section
      className="py-20 md:py-32 px-6"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-extrabold mb-4"
          style={{ color: "#0a0a0a", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="text-lg mb-8"
          style={{ color: "#525252", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
        >
          <ButtonBorder href="/contact">{buttonText}</ButtonBorder>
        </motion.div>

        <motion.p
          className="text-sm mt-6"
          style={{ color: "#a3a3a3" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.3 }}
        >
          Free 30-minute call · No commitment · No technical knowledge required
        </motion.p>
      </div>
    </section>
  );
}
