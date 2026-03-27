"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";

type Category = "General" | "Getting Started" | "Implementation" | "Results";

interface FAQItem {
  question: string;
  answer: string;
  categories: Category[];
}

const faqs: FAQItem[] = [
  // --- General (4) ---
  {
    question: "What kind of businesses does Actrivo work with?",
    answer:
      "Malaysian SMEs with 5–50 employees — retail, logistics, F&B, professional services, and construction. If your team does repetitive admin, we can almost certainly help.",
    categories: ["General"],
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None at all. We handle everything from build to deployment — your team just needs to show up and use it.",
    categories: ["General"],
  },
  {
    question: "How much does it cost?",
    answer:
      "Fixed-fee, no hidden costs. We'll give you a clear upfront proposal after your free audit.",
    categories: ["General"],
  },
  {
    question: "How do you handle our data and security?",
    answer:
      "We only request the access needed to run your workflows. Your data is never stored beyond what's operationally required.",
    categories: ["General"],
  },
  // --- Getting Started (4) ---
  {
    question: "How does the free workflow audit work?",
    answer:
      "It's a free 30-minute call where we map your manual processes and show you exactly where automation saves the most time — no commitment required.",
    categories: ["Getting Started"],
  },
  {
    question: "How long does it take to go live?",
    answer: "Most clients are fully live within 4 weeks of their first call.",
    categories: ["Getting Started"],
  },
  {
    question: "What tools do you integrate with?",
    answer:
      "WhatsApp, Google Workspace, Excel, Xero, QuickBooks, Shopify, Telegram, SQL, Autocount, and more. If your tool isn't listed, ask us — chances are we can still connect to it.",
    categories: ["Getting Started"],
  },
  {
    question: "What happens during onboarding?",
    answer:
      "We run a discovery call, map your workflows, build and test the automations, then deploy — your team is trained and supported throughout.",
    categories: ["Getting Started"],
  },
  // --- Implementation (4) ---
  {
    question: "Will this disrupt our current operations?",
    answer:
      "No. We build and test everything before going live — your team keeps working as normal throughout.",
    categories: ["Implementation"],
  },
  {
    question: "What happens after you build the automation?",
    answer:
      "We monitor, fix, and improve your workflows as your business grows — you're never left on your own.",
    categories: ["Implementation"],
  },
  {
    question: "Can automations scale as my business grows?",
    answer:
      "Yes — every workflow is built to scale, and adjustments are included in our managed service.",
    categories: ["Implementation"],
  },
  {
    question: "What if something breaks?",
    answer:
      "We monitor all automations and fix issues proactively — it's included, no extra cost.",
    categories: ["Implementation"],
  },
  // --- Results (4) ---
  {
    question: "What results can I realistically expect?",
    answer:
      "Clients save an average of 50+ hours of manual admin per month, with most going live within 4 weeks.",
    categories: ["Results"],
  },
  {
    question: "How soon will I see a return on investment?",
    answer:
      "Most clients see measurable time savings within the first week of going live — the ROI compounds as your team stops doing manual work.",
    categories: ["Results"],
  },
  {
    question: "Do you track and report on performance?",
    answer:
      "Yes — we provide ongoing reporting so you can see exactly how much time and effort your automations are saving.",
    categories: ["Results"],
  },
  {
    question: "Can I measure the impact on my team's productivity?",
    answer:
      "Absolutely. We set benchmarks before launch and track improvements, so the impact is clear and measurable.",
    categories: ["Results"],
  },
];

// Top questions shown under "All Questions"
const topQuestions = [
  "What kind of businesses does Actrivo work with?",
  "How much does it cost?",
  "How long does it take to go live?",
  "What results can I realistically expect?",
];

const filters: ("All" | Category)[] = [
  "All",
  "General",
  "Getting Started",
  "Implementation",
  "Results",
];

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.5"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const filtered =
    activeFilter === "All"
      ? faqs.filter((f) => topQuestions.includes(f.question))
      : faqs.filter((f) => f.categories.includes(activeFilter));

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 px-6 md:py-32"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-12"
        >
          {/* Muted section label */}
          <span
            className="text-xs uppercase tracking-[0.2em] mb-5 block"
            style={{ color: "#737373" }}
          >
            Frequently Asked Questions
          </span>

          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-tight"
            style={{ color: "#000000", lineHeight: "1.1" }}
          >
            Common Questions
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setOpenIndex(null);
                }}
                className="px-4 py-2 rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
                style={{
                  backgroundColor: isActive ? "#fca311" : "#f5f5f5",
                  color: isActive ? "#000000" : "#525252",
                  border: `1px solid ${isActive ? "#fca311" : "#d4d4d4"}`,
                  transition: "background-color 200ms, color 200ms, border-color 200ms",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "#ebebeb";
                    e.currentTarget.style.borderColor = "#a3a3a3";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                    e.currentTarget.style.borderColor = "#d4d4d4";
                  }
                }}
              >
                {filter === "All" ? "All Questions" : filter}
              </button>
            );
          })}
        </motion.div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq) => {
              const originalIndex = faqs.indexOf(faq);
              const isOpen = openIndex === originalIndex;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: `1px solid ${isOpen ? "rgba(252,163,17,0.4)" : "#d4d4d4"}`,
                    boxShadow: isOpen
                      ? "0 4px 16px rgba(252,163,17,0.08)"
                      : "none",
                    transition: "border-color 200ms, box-shadow 200ms",
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : originalIndex)
                    }
                    className="flex justify-between items-center w-full px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
                  >
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{
                        color: isOpen ? "#fca311" : "#000000",
                        transition: "color 200ms",
                      }}
                    >
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: isOpen ? "#fca311" : "#e5e5e5",
                          color: isOpen ? "#000" : "#525252",
                          transition:
                            "background-color 200ms, color 200ms",
                        }}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div
                          className="px-6 pb-6 text-base font-light leading-[1.75] border-t"
                          style={{
                            color: "#404040",
                            borderColor: "#e5e5e5",
                          }}
                        >
                          <div className="pt-4">{faq.answer}</div>
                          {/* Category tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-xs font-medium px-2.5 py-1 rounded-full"
                                style={{
                                  backgroundColor: "rgba(252,163,17,0.08)",
                                  color: "#b47a00",
                                  border: "1px solid rgba(252,163,17,0.15)",
                                }}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
