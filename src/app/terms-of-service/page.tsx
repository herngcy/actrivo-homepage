"use client";

import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { FinalCTA } from "@/components/FinalCTA";

const sections = [
  {
    number: "01",
    title: "Services Provided",
    content: [
      "Actrivo provides customised automation solutions for businesses, including but not limited to:",
    ],
    items: [
      { detail: "Workflow automation (data entry, document processing, reporting)" },
      { detail: "API integrations between business tools and platforms" },
      { detail: "AI-powered process implementation" },
    ],
    footer:
      "All deliverables, timelines, and scope will be outlined in a separate project proposal or agreement specific to each engagement.",
  },
  {
    number: "02",
    title: "Client Responsibilities",
    content: ["By engaging Actrivo, you agree to:"],
    items: [
      { detail: "Provide accurate and complete information required for project delivery." },
      { detail: "Grant necessary access to relevant systems, platforms, and data in a timely manner." },
      { detail: "Maintain the security of any credentials or access shared with Actrivo." },
      { detail: "Comply with all applicable Malaysian laws and regulations relevant to your business operations." },
    ],
  },
  {
    number: "03",
    title: "Fees and Payment",
    content: [
      "Project fees will be outlined in the proposal or quotation provided before work begins. Payment terms will be specified in the project agreement.",
      "Unless otherwise stated, all fees are quoted in Malaysian Ringgit (MYR).",
      "Late payments may result in suspension of services or project delays until outstanding balances are settled.",
    ],
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: [
      "All pre-existing tools, frameworks, and code developed by Actrivo remain the intellectual property of Actrivo.",
      "Upon full payment, the client receives a non-exclusive, non-transferable license to use the delivered automation solution for their internal business operations.",
      "Custom code or configurations built specifically for the client may be transferred upon mutual agreement and will be outlined in the project proposal.",
    ],
  },
  {
    number: "05",
    title: "Limitation of Liability",
    content: [
      "Actrivo's automation solutions may depend on third-party APIs and platforms (e.g., Google Workspace, WhatsApp Business API, OpenAI). Actrivo is not liable for outages, changes, or discontinuation of third-party services beyond our control.",
      "Actrivo will not be held responsible for indirect, incidental, or consequential damages arising from the use of our services.",
    ],
  },
  {
    number: "06",
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of Malaysia. Any disputes arising from this agreement will be resolved under the jurisdiction of the Malaysian courts.",
    ],
    contactInfo: {
      text: "For any questions about these Terms of Service, please contact us:",
      email: "actrivo@gmail.com",
      location: "Kuala Lumpur, Malaysia",
    },
  },
];

export default function TermsOfServicePage() {
  return (
    <PageWrapper pageName="Terms of Service">
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
              Legal
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms of Service
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last Updated: 22 March 2026
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-base md:text-lg"
            style={{ color: "#404040", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
          >
            These Terms of Service (&quot;Terms&quot;) govern your engagement
            with Actrivo and the automation services we provide. By using our
            services, you agree to be bound by these Terms.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 pb-16" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-3xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                delay: index * 0.05,
              }}
            >
              {/* Section number + title */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-sm font-bold font-display"
                  style={{ color: "#fca311" }}
                >
                  {section.number}
                </span>
                <h2
                  className="font-display text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#000000", letterSpacing: "-0.02em" }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Content paragraphs */}
              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm md:text-base mb-4"
                  style={{ color: "#404040", lineHeight: "1.7" }}
                >
                  {paragraph}
                </p>
              ))}

              {/* List items */}
              {section.items && (
                <ul className="space-y-3 mt-4">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#fca311" }}
                      />
                      <span
                        className="text-sm md:text-base"
                        style={{ color: "#404040", lineHeight: "1.7" }}
                      >
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer text */}
              {section.footer && (
                <p
                  className="text-sm md:text-base mt-6"
                  style={{ color: "#404040", lineHeight: "1.7" }}
                >
                  {section.footer}
                </p>
              )}

              {/* Contact info */}
              {section.contactInfo && (
                <div
                  className="mt-6 p-6 rounded-xl"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  <p
                    className="text-sm mb-4"
                    style={{ color: "#404040", lineHeight: "1.7" }}
                  >
                    {section.contactInfo.text}
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#404040" }}>
                    <strong style={{ color: "#1a1a1a" }}>Email: </strong>
                    <a
                      href={`mailto:${section.contactInfo.email}`}
                      className="underline"
                      style={{ color: "#fca311" }}
                    >
                      {section.contactInfo.email}
                    </a>
                  </p>
                  <p className="text-sm" style={{ color: "#404040" }}>
                    <strong style={{ color: "#1a1a1a" }}>Location: </strong>
                    {section.contactInfo.location}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </PageWrapper>
  );
}
