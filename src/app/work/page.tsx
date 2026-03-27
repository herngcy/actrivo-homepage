"use client";

import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ToolsGrid } from "@/components/ToolsGrid";
import { ButtonBorder } from "@/components/ui/button-border";

const projects: Project[] = [
  {
    title: "Data Entry Automation",
    client: "Internal Build",
    industry: "Pilot Project",
    description:
      "Eliminated manual copy-paste between Excel and a CRM system. Data now syncs automatically on trigger — zero human input required after setup.",
    results: [
      { metric: "hours/week saved", value: "~8" },
      { metric: "data accuracy", value: "100%" },
    ],
    tools: ["Excel", "Google Sheets", "n8n"],
  },
  {
    title: "AI Invoice Processing",
    client: "Internal Build",
    industry: "Pilot Project",
    description:
      "Built an AI pipeline that extracts key fields from PDF invoices (vendor, amount, due date) and routes them to the correct approval channel automatically.",
    results: [
      { metric: "processing time", value: "<30 sec" },
      { metric: "vs manual time", value: "10-15 min" },
    ],
    tools: ["n8n", "Gmail", "WhatsApp", "Google Drive"],
  },
  // Add more project cards here as new builds are completed
];

const tools = [
  "Excel",
  "Google Sheets",
  "n8n",
  "Gmail",
  "WhatsApp",
  "Google Drive",
  "Xero",
  "QuickBooks",
  "Slack",
  "Notion",
];

export default function WorkPage() {
  return (
    <PageWrapper pageName="Portfolio">
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
              What We've Built
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real Automations. Real Results.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just talk about automation — we build it. Here's a look at the workflows we've designed, deployed, and tested.
          </motion.p>

          <motion.p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            All projects below are internal builds and pilot automations built to production standard.
          </motion.p>
        </div>
      </section>

      {/* Project Cards */}
      <section
        className="py-16 md:py-24 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#737373" }}
            >
              Our Portfolio
            </span>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Left padding spacer */}
            <div className="flex-shrink-0" style={{ width: 'max(24px, calc((100vw - 1280px) / 2))' }} />

            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] md:w-[600px] snap-start">
                <ProjectCard project={project} index={index} />
              </div>
            ))}

            {/* Right padding spacer */}
            <div className="flex-shrink-0" style={{ width: 'max(24px, calc((100vw - 1280px) / 2))' }} />
          </div>

          {/* Fade edges */}
          <div
            className="absolute top-0 left-0 h-full w-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)',
            }}
          />
          <div
            className="absolute top-0 right-0 h-full w-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)',
            }}
          />
        </div>
      </section>

      {/* Tools We Work With */}
      <ToolsGrid
        tools={tools}
        title="Every Automation Built Around Your Tools"
        subtitle="We integrate with the platforms your team already uses — no switching required."
      />

      {/* Final CTA */}
      <section
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
          >
            <h2
              className="font-display text-3xl md:text-4xl font-extrabold mb-6"
              style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Want to See What We'd Build for You?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            >
              Book a free 30-minute workflow audit — we'll map your manual processes and show you exactly what's possible.
            </p>
            <ButtonBorder href="/contact">Book My Free Audit →</ButtonBorder>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
