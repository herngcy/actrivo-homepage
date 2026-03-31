"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const PARTICLE_CONFIGS = [
  { width: 3, height: 3, left: 15, top: 42, duration: 4.2, delay: 0.7 },
  { width: 4, height: 4, left: 67, top: 18, duration: 3.8, delay: 1.3 },
  { width: 2, height: 2, left: 83, top: 71, duration: 4.6, delay: 0.2 },
  { width: 5, height: 5, left: 31, top: 89, duration: 3.3, delay: 1.8 },
  { width: 3, height: 3, left: 55, top: 35, duration: 4.9, delay: 0.5 },
  { width: 4, height: 4, left: 8, top: 63, duration: 3.6, delay: 1.1 },
];

const cards = [
  {
    title: "We've Lived the Problem",
    desc: "Built by engineers who spent years inside corporations watching manual work slow everything down.",
    image: "/images/acceptable/trust-grid-ai-specialists-v2.png",
    span: "md:col-span-3 md:row-span-2", // Top-left large
  },
  {
    title: "Built for Malaysia",
    desc: "WhatsApp approval chains to Google Sheets trackers — we build automations that fit how your team already works.",
    image: "/images/acceptable/Our services/built_for_malaysia.jpg",
    span: "md:col-span-2 md:row-span-1", // Top-right thin
  },
  {
    title: "Zero Effort on Your End",
    desc: "No IT department needed. We scope, build, test, and deploy everything.",
    gradient: true,
    span: "md:col-span-2 md:row-span-1", // Mid-right thin (stacked below card 1)
  },
  {
    title: "We Don't Just Build and Leave",
    desc: "We monitor, fix, and improve as you grow. Your dedicated automation team.",
    gradient: true,
    span: "md:col-span-2 md:row-span-1", // Bottom-left thin
  },
  {
    title: "Malaysian SME Focus",
    desc: "We understand local workflows, tools, and business culture.",
    image: "/images/trust-grid-team-photo-v3.png",
    span: "md:col-span-3 md:row-span-1", // Bottom-right large
  },
];

function TrustCard({
  card,
  idx,
  scrollProgress,
}: {
  card: (typeof cards)[number];
  idx: number;
  scrollProgress: MotionValue<number>;
}) {
  const start = idx * 0.08;
  const end = Math.min(start + 0.5, 1);
  const cardY = useTransform(scrollProgress, [start, end], [30, 0]);
  const cardOpacity = useTransform(scrollProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ y: cardY, opacity: cardOpacity }}
      className={`trust-card rounded-2xl overflow-hidden relative cursor-default ${card.span}`}
    >
      {/* Background: Image or Gradient */}
      {card.gradient ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(252,163,17,0.18), transparent 50%), radial-gradient(circle at 80% 80%, rgba(252,163,17,0.12), transparent 60%), radial-gradient(circle at 50% 50%, rgba(252,163,17,0.08), transparent 70%), linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
            }}
          />

          {/* SVG Noise Texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Decorative Background Text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span
              className="font-display font-black text-[120px] md:text-[160px] select-none"
              style={{
                color: "rgba(255,255,255,0.02)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              {idx === 2 ? "24/7" : "SME"}
            </span>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLE_CONFIGS.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.width + "px",
                  height: p.height + "px",
                  backgroundColor: "rgba(252,163,17,0.3)",
                  left: p.left + "%",
                  top: p.top + "%",
                  filter: "blur(1px)",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Dot Pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
              opacity: 0.5,
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${card.image}')` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="absolute inset-0 px-6 pb-6 pt-6 flex flex-col justify-end overflow-hidden">
        <h3
          className={`trust-card__title font-bold ${card.gradient ? "text-2xl" : "text-xl"}`}
          style={{ color: "#ffffff" }}
        >
          {card.title}
        </h3>

        <div className="trust-card__desc-wrap">
          <p
            className="trust-card__desc font-light leading-[1.6] text-sm pt-2"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {card.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TrustGrid() {
  return (
    <>
      <style>{`
        .trust-card {
          transition: transform 400ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        .trust-card:hover {
          transform: translateY(-4px);
        }
        .trust-card__title {
          transition: transform 500ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        .trust-card:hover .trust-card__title {
          transform: translateY(-4px);
        }
        .trust-card__desc-wrap {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition:
            max-height 600ms cubic-bezier(0.33, 1, 0.68, 1),
            opacity 500ms cubic-bezier(0.33, 1, 0.68, 1) 80ms;
        }
        .trust-card:hover .trust-card__desc-wrap {
          max-height: 120px;
          opacity: 1;
        }
        .trust-card__desc {
          transform: translateY(10px);
          transition: transform 500ms cubic-bezier(0.33, 1, 0.68, 1) 80ms;
        }
        .trust-card:hover .trust-card__desc {
          transform: translateY(0);
        }
        /* Responsive grid rows — only fixed heights on tablet+ */
        @media (min-width: 768px) {
          .trust-grid {
            grid-template-rows: 200px 200px 240px;
          }
        }
        /* Mobile: cards need explicit min-height since content is absolutely positioned */
        @media (max-width: 767px) {
          .trust-card {
            min-height: 180px;
          }
        }
      `}</style>
      <TrustGridSection />
    </>
  );
}

function TrustGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headingProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.5"],
  });

  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "start 0.2"],
  });

  const headingY = useTransform(headingProgress, [0, 1], [40, 0]);
  const headingOpacity = useTransform(headingProgress, [0, 0.8], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-20 px-6 md:py-32"
      style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mb-12"
        >
          <span
            className="text-xs uppercase tracking-widest mb-4 block"
            style={{ color: "#737373" }}
          >
            Why Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em]"
            style={{ color: "#262626", lineHeight: "1.1" }}
          >
            Built Different. Built for You.
          </h2>
        </motion.div>

        <div ref={gridRef} className="trust-grid grid md:grid-cols-5 gap-4">
          {cards.map((card, idx) => (
            <TrustCard key={idx} card={card} idx={idx} scrollProgress={gridProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
