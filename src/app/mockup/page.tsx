"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/*
 * Mockup: Scroll-driven workflow transitions between sections.
 *
 * Each section is a "node" in the workflow. Scrolling transitions the camera
 * from one node to the next with zoom, fade, and connector-line animations.
 *
 * Visit /mockup to preview.
 */

/* ------------------------------------------------------------------ */
/*  Animated SVG connector between sections                           */
/* ------------------------------------------------------------------ */
function WorkflowConnector({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const dotY = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.5], [0, 1, 1, 0]);

  return (
    <div ref={scrollRef} className="relative h-32 flex items-center justify-center overflow-visible">
      <svg
        width="2"
        height="120"
        viewBox="0 0 2 120"
        className="absolute"
      >
        {/* Background track */}
        <line x1="1" y1="0" x2="1" y2="120" stroke="#262626" strokeWidth="2" />
        {/* Animated draw */}
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="120"
          stroke="#fca311"
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>
      {/* Flowing dot */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full"
        style={{
          backgroundColor: "#fca311",
          boxShadow: "0 0 10px #fca311, 0 0 20px rgba(252,163,17,0.3)",
          y: dotY,
          opacity: dotOpacity,
          top: 0,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper with scroll-driven entrance                       */
/* ------------------------------------------------------------------ */
function WorkflowSection({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  // Zoom-in: starts slightly scaled down & transparent, arrives at full size
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mock sections (representing Hero, About, HowItWorks, Services)    */
/* ------------------------------------------------------------------ */
function MockHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #fca311, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <span className="text-xs uppercase tracking-[0.3em] text-[#737373] mb-4 relative z-10">
        AI Automation Agency
      </span>
      <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-center relative z-10">
        Automate Your
        <br />
        <span style={{ color: "#fca311" }}>Business</span>
      </h1>
      <p className="mt-6 text-[#a3a3a3] text-lg text-center max-w-xl relative z-10">
        Stop wasting hours on repetitive tasks. We build automations that work.
      </p>
      <div className="mt-6 text-xs text-[#525252] animate-pulse relative z-10">
        Scroll down
      </div>
    </section>
  );
}

function MockAbout() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-3 block">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Built for <span style={{ color: "#fca311" }}>Malaysian SMEs</span>
            </h2>
            <p className="text-[#a3a3a3] leading-relaxed">
              We&apos;ve spent years inside corporations watching manual work slow everything down.
              Now we bring that automation expertise to SMEs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Hrs/Month Saved" },
              { value: "4 wks", label: "To Go Live" },
              { value: "100%", label: "Managed" },
              { value: "24hr", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-4"
              >
                <div className="text-2xl font-bold" style={{ color: "#fca311" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#737373] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MockHowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-3 block text-center">
          Our Process
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discover", desc: "We observe your real workflows" },
            { step: "02", title: "Design", desc: "Map out the automation flow" },
            { step: "03", title: "Build", desc: "Connect your tools & go live" },
            { step: "04", title: "Monitor", desc: "Ongoing support & scaling" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-6 text-center"
            >
              <div
                className="text-3xl font-bold mb-2 font-display"
                style={{ color: "#fca311" }}
              >
                {item.step}
              </div>
              <div className="font-semibold mb-1">{item.title}</div>
              <div className="text-xs text-[#737373]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockServices() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#737373] mb-3 block">
          What We Automate
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Data Entry",
            "AI Documents",
            "WhatsApp Bots",
            "Invoicing",
            "Dashboards",
            "Lead Mgmt",
          ].map((s) => (
            <div
              key={s}
              className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-6 hover:border-[#fca311]/30 transition-colors duration-200"
            >
              <div className="text-sm font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
        Ready to <span style={{ color: "#fca311" }}>Automate</span>?
      </h2>
      <p className="text-[#a3a3a3] mb-8">
        Let&apos;s talk about what we can build for your business.
      </p>
      <button
        className="px-8 py-3 rounded-full font-semibold text-black"
        style={{ backgroundColor: "#fca311" }}
      >
        Get Started
      </button>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main mockup page                                                  */
/* ------------------------------------------------------------------ */
export default function MockupPage() {
  const conn1Ref = useRef<HTMLDivElement>(null);
  const conn2Ref = useRef<HTMLDivElement>(null);
  const conn3Ref = useRef<HTMLDivElement>(null);
  const conn4Ref = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-clip">
      {/* Hero — no transition, it's the starting point */}
      <MockHero />

      {/* Connector: Hero → About */}
      <WorkflowConnector scrollRef={conn1Ref} />

      {/* About — zooms in as you scroll to it */}
      <WorkflowSection index={1}>
        <MockAbout />
      </WorkflowSection>

      {/* Connector: About → How It Works */}
      <WorkflowConnector scrollRef={conn2Ref} />

      {/* How It Works */}
      <WorkflowSection index={2}>
        <MockHowItWorks />
      </WorkflowSection>

      {/* Connector: How It Works → Services */}
      <WorkflowConnector scrollRef={conn3Ref} />

      {/* Services */}
      <WorkflowSection index={3}>
        <MockServices />
      </WorkflowSection>

      {/* Connector: Services → CTA */}
      <WorkflowConnector scrollRef={conn4Ref} />

      {/* CTA */}
      <WorkflowSection index={4}>
        <MockCTA />
      </WorkflowSection>
    </main>
  );
}
