"use client";

import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { FinalCTA } from "@/components/FinalCTA";

const sections = [
  {
    number: "01",
    title: "Data We Collect",
    content: [
      "We collect the following types of data when you engage with our services:",
    ],
    items: [
      {
        label: "Contact Information",
        detail: "Name, email address, phone number, and business details provided through our forms or during consultations.",
      },
      {
        label: "Business Data",
        detail: "Workflow data, documents, and system access you share with us to build and deploy automation solutions.",
      },
      {
        label: "Technical Data",
        detail: "Browser type, IP address, and usage analytics collected through our website to improve performance and user experience.",
      },
    ],
  },
  {
    number: "02",
    title: "How We Use Your Data",
    content: ["Your data is used strictly to:"],
    items: [
      { detail: "Build and deliver your customised automation solutions." },
      { detail: "Communicate project updates, support, and relevant service information." },
      { detail: "Improve our services based on aggregated, anonymised usage patterns." },
    ],
    footer: "We will never use your data for purposes outside the scope of our engagement without your explicit consent.",
  },
  {
    number: "03",
    title: "Data Sharing and Third Parties",
    content: [
      "We do not sell, rent, or trade your data.",
      "In order to deliver our services, your data may be processed through trusted third-party platforms such as Google Cloud, OpenAI, or other API providers required for your automation solution. These platforms operate under their own privacy policies, and we select partners that maintain industry-standard data protection practices.",
    ],
  },
  {
    number: "04",
    title: "Data Security",
    content: [
      "We implement reasonable security measures — including encryption, access controls, and secure infrastructure — to protect your data from unauthorised access, loss, or misuse.",
      "While no system is 100% secure, we are committed to maintaining the highest practical standard of data protection.",
    ],
  },
  {
    number: "05",
    title: "Your Rights",
    content: [
      "Under the Personal Data Protection Act 2010 (PDPA) of Malaysia, you have the right to:",
    ],
    items: [
      { detail: "Access the personal data we hold about you." },
      { detail: "Request correction of inaccurate or incomplete data." },
      { detail: "Withdraw consent for data processing, subject to contractual or legal obligations." },
    ],
    footer: "To exercise any of these rights, please contact us at actrivo@gmail.com.",
  },
  {
    number: "06",
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or how we handle your data, reach out to us:",
    ],
    contactInfo: {
      email: "actrivo@gmail.com",
      location: "Kuala Lumpur, Malaysia",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper pageName="Privacy Policy">
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
            Privacy Policy
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
            At Actrivo, we respect your privacy and are committed to protecting
            the personal data you share with us. This Privacy Policy explains
            how we collect, use, and safeguard your information when you engage
            with our services.
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
                        {"label" in item && item.label && (
                          <strong style={{ color: "#1a1a1a" }}>
                            {item.label}:{" "}
                          </strong>
                        )}
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
