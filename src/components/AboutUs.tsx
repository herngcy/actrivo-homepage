"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import NumberFlow from "@number-flow/react";
import { SplitText } from "@/components/ui/split-text";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "HRS/MONTH SAVED",
    description: "on average per client, freed from manual admin work",
  },
  {
    value: 4,
    suffix: " wks",
    label: "TO GO LIVE",
    description: "from kickoff to your first automated workflow running",
  },
  {
    value: 100,
    suffix: "%",
    label: "MANAGED END-TO-END",
    description: "we build, maintain, and improve — you just use it",
  },
];

function AnimatedStat({
  value,
  suffix,
  triggered,
  delay = 200,
}: {
  value: number;
  suffix: string;
  triggered: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (triggered) {
      const timer = setTimeout(() => setDisplay(value), delay);
      return () => clearTimeout(timer);
    }
  }, [triggered, value, delay]);

  return (
    <NumberFlow
      value={display}
      suffix={suffix}
      style={{ color: "#fca311" }}
      className="text-4xl font-black tracking-tight"
    />
  );
}

export function AboutUs() {
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.1, 1], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section ref={sectionRef} id="about-us" className="py-20 px-6 md:py-32" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: About Us Hero Image */}
          <motion.div
            style={{ x: imageX, opacity: imageOpacity }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ height: 460 }}
            >
              <Image
                src="/images/acceptable/about-us-hero-v2.png"
                alt="Actrivo team working on automation workflows in a KL office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Copy + Stats */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
          >
            {/* Muted section label (replaces amber pill badge) */}
            <span
              className="text-xs uppercase tracking-[0.2em] mb-5 block"
              style={{ color: "#737373" }}
            >
              About Us
            </span>

            <SplitText
              as="h2"
              className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em] mb-6 text-black leading-[1.1]"
              stagger={0.03}
            >
              Built for SMEs Tired of Busy Work.
            </SplitText>

            <p className="font-light leading-[1.7] mb-4" style={{ color: "#404040" }}>
              Your team is stuck copying data, chasing approvals on WhatsApp, and updating reports manually. We design and deploy custom AI workflows that plug into your existing tools — so your team focuses on growth, not admin.
            </p>

            {/* Divider */}
            <div className="my-6" style={{ borderTop: "1px solid #e5e5e5" }} />

            {/* CTA Link */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium group"
              style={{ color: "#000000" }}
            >
              Book a free consultation
              <span
                className="inline-block transition-transform duration-200"
                style={{ transform: "translateX(0)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
              >
                &rarr;
              </span>
            </a>

            {/* Stats (moved below text) */}
            <div
              ref={statsRef}
              className="mt-10"
              style={{ borderTop: "1px solid #e5e5e5" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="py-5"
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <AnimatedStat
                      value={stat.value}
                      suffix={stat.suffix}
                      triggered={isInView}
                      delay={i * 300 + 200}
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#000000" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#525252" }}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
