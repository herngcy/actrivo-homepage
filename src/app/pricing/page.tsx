"use client";

import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { PricingCard, PricingTier } from "@/components/PricingCard";
import { FinalCTA } from "@/components/FinalCTA";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "From RM X,XXX", // Placeholder for actual pricing
    description: "Teams with one clear manual process to eliminate",
    features: [
      "1 custom automation workflow",
      "Integration with up to 3 tools",
      "4-week build & deployment",
      "30-day post-launch support",
      "Free workflow audit included",
    ],
    ctaText: "Book Free Audit →",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    price: "From RM X,XXX", // Placeholder for actual pricing
    description: "Teams with multiple manual processes across departments",
    features: [
      "Up to 3 connected automation workflows",
      "Integration with up to 6 tools",
      "4–6 week build & deployment",
      "Ongoing monitoring & maintenance",
      "Monthly performance reporting",
      "Free workflow audit included",
    ],
    ctaText: "Book Free Audit →",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    name: "Custom / Enterprise",
    price: "Let's Talk",
    description: "Larger teams or complex multi-department automation",
    features: [
      "Unlimited workflows",
      "Full system audit & mapping",
      "Custom integrations (ERP, SQL, APIs)",
      "Dedicated support & SLA",
      "Quarterly optimization reviews",
    ],
    ctaText: "Contact Us →",
    ctaHref: "/contact",
  },
];

const faqs = [
  {
    question: "Is there a monthly fee?",
    answer:
      "No. Our pricing is fixed-fee per project. Ongoing managed service (monitoring, fixes, improvements) is available as an optional add-on.",
  },
  {
    question: "What's included in the free audit?",
    answer:
      "A free 30-minute call where we map your manual processes and give you a clear recommendation — no commitment required.",
  },
  {
    question: "Can I start with one workflow and add more later?",
    answer:
      "Absolutely. Most clients start with their highest-impact process and expand once they see results.",
  },
];

export default function PricingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <PageWrapper pageName="Pricing">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto text-center">
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
              Pricing
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple, Fixed-Fee Pricing.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No retainers. No hourly billing. One clear price, one dedicated team — we build, maintain, and improve your automation.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            className="mb-12"
          >
            <h2
              className="font-display text-3xl md:text-4xl font-extrabold text-center mb-4"
              style={{ color: "#000000", letterSpacing: "-0.02em" }}
            >
              Pricing FAQ
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: index * 0.1,
                }}
                role="button"
                tabIndex={0}
                className="rounded-xl p-6 cursor-pointer"
                style={{
                  backgroundColor: "#ffffff",
                  border:
                    expandedFaq === index
                      ? "1px solid rgba(252,163,17,0.4)"
                      : "1px solid #e5e5e5",
                  boxShadow:
                    expandedFaq === index
                      ? "0 4px 16px rgba(252,163,17,0.08)"
                      : "none",
                  transition: "border-color 300ms, box-shadow 300ms",
                }}
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedFaq(expandedFaq === index ? null : index);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="font-bold text-lg"
                    style={{
                      color: expandedFaq === index ? "#fca311" : "#000000",
                      transition: "color 200ms",
                    }}
                  >
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} style={{ color: "#fca311" }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: "#737373" }} />
                  )}
                </div>
                {expandedFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 text-sm"
                    style={{ color: "#404040", lineHeight: "1.7" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageWrapper>
  );
}
