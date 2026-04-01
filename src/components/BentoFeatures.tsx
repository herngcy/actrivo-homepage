"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { SplitText } from "@/components/ui/split-text";

type Service = {
  name: string;
  description: string;
  href: string;
  image?: string;
  diagram?: "sync" | "chart" | "invoice" | "email";
  gradient: string;
  accentPos: string;
};

const services: Service[] = [
  // Diagram → Photo → Diagram → Photo → Diagram → Photo → Diagram → Photo → Photo
  {
    name: "Data Entry",
    description:
      "CRM, accounting, and ops tools in perfect sync — automatically, around the clock.",
    href: "/services/data-entry-automation",
    diagram: "sync",
    gradient:
      "linear-gradient(135deg, #1a1207 0%, #2d1f0a 30%, #0a0a0a 100%)",
    accentPos: "50% 35%",
  },
  {
    name: "AI Document Processing",
    description:
      "Extract, summarize, and route PDFs and invoices — zero human touch.",
    href: "/services/ai-document-processing",
    image: "/images/acceptable/Our services/document processing.png",
    gradient:
      "linear-gradient(160deg, #0f0d1a 0%, #1a1025 40%, #0a0a0a 100%)",
    accentPos: "70% 30%",
  },
  {
    name: "Reporting Dashboards",
    description:
      "Live automated dashboards that replace your manual weekly reports.",
    href: "/services/reporting-dashboards",
    diagram: "chart",
    gradient:
      "linear-gradient(155deg, #0d0f1a 0%, #101525 40%, #0a0a0a 100%)",
    accentPos: "50% 40%",
  },
  {
    name: "Customer Workflows",
    description:
      "Auto-respond, qualify, and follow up with every lead 24/7.",
    href: "/services/customer-workflows",
    image: "/images/acceptable/Our services/customer workflows.png",
    gradient:
      "linear-gradient(145deg, #0a1210 0%, #0d1a16 35%, #0a0a0a 100%)",
    accentPos: "50% 60%",
  },
  {
    name: "Email Marketing",
    description:
      "Smart segmentation, triggered campaigns, and revenue tracking — all on autopilot.",
    href: "/services/email-marketing",
    diagram: "email",
    gradient:
      "linear-gradient(135deg, #0d0f1a 0%, #12152a 35%, #0a0a0a 100%)",
    accentPos: "50% 35%",
  },
  {
    name: "WhatsApp Business",
    description:
      "Turn WhatsApp into your sales engine with auto-replies, order processing, and broadcasts.",
    href: "/services/whatsapp-business-automation",
    image: "/images/acceptable/Our services/our-services-whatsapp automation.png",
    gradient:
      "linear-gradient(125deg, #0a1a14 0%, #0d1f16 35%, #0a0a0a 100%)",
    accentPos: "55% 35%",
  },
  {
    name: "Invoice & Payment",
    description:
      "Get paid faster with auto-generated invoices, smart reminders, and instant reconciliation.",
    href: "/services/invoice-payment-automation",
    diagram: "invoice",
    gradient:
      "linear-gradient(140deg, #1a1510 0%, #1f180a 30%, #0a0a0a 100%)",
    accentPos: "50% 40%",
  },
  {
    name: "Inventory Management",
    description:
      "Real-time stock sync, low-stock alerts, and auto-reorder triggers across all locations.",
    href: "/services/inventory-management",
    image: "/images/acceptable/Our services/inventory management.png",
    gradient:
      "linear-gradient(150deg, #1a0f12 0%, #1f1015 40%, #0a0a0a 100%)",
    accentPos: "45% 55%",
  },
  {
    name: "Lead Management",
    description:
      "Auto-capture, score, and nurture every lead — never lose another opportunity.",
    href: "/services/lead-management",
    image: "/images/acceptable/Our services/sales-pipeline-strategy.png",
    gradient:
      "linear-gradient(165deg, #1a1207 0%, #2a1f0a 30%, #0a0a0a 100%)",
    accentPos: "40% 30%",
  },
];

/* ── SVG Diagram Components ─────────────────────────── */

const A = "#fca311"; // amber accent
const glowStyle = { filter: "drop-shadow(0 0 6px rgba(252,163,17,0.5)) drop-shadow(0 0 3px rgba(252,163,17,0.3))" };

function SyncDiagram() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-52">
      {/* Left app window */}
      <rect x="10" y="20" width="70" height="95" rx="6" stroke={A} strokeWidth="1.2" opacity={0.6} />
      <rect x="10" y="20" width="70" height="95" rx="6" fill={A} opacity={0.04} />
      <circle cx="22" cy="31" r="2" fill={A} opacity={0.45} />
      <circle cx="30" cy="31" r="2" fill={A} opacity={0.3} />
      <circle cx="38" cy="31" r="2" fill={A} opacity={0.18} />
      <line x1="16" y1="39" x2="74" y2="39" stroke={A} strokeWidth="0.5" opacity={0.12} />
      {[48, 57, 66, 75, 84].map((y, i) => (
        <rect key={y} x="18" y={y} width={44 - i * 5} height="2" rx="1" fill={A} opacity={0.16 - i * 0.025} />
      ))}

      {/* Right app window */}
      <rect x="120" y="20" width="70" height="95" rx="6" stroke={A} strokeWidth="1.2" opacity={0.6} />
      <rect x="120" y="20" width="70" height="95" rx="6" fill={A} opacity={0.04} />
      <circle cx="132" cy="31" r="2" fill={A} opacity={0.45} />
      <circle cx="140" cy="31" r="2" fill={A} opacity={0.3} />
      <circle cx="148" cy="31" r="2" fill={A} opacity={0.18} />
      <line x1="126" y1="39" x2="184" y2="39" stroke={A} strokeWidth="0.5" opacity={0.12} />
      {[48, 57, 66, 75, 84].map((y, i) => (
        <rect key={y} x="128" y={y} width={44 - i * 5} height="2" rx="1" fill={A} opacity={0.16 - i * 0.025} />
      ))}

      {/* Sync arrow → */}
      <line x1="86" y1="55" x2="112" y2="55" stroke={A} strokeWidth="1.2" opacity={0.45} strokeDasharray="3 2" />
      <polyline points="108,51 114,55 108,59" stroke={A} strokeWidth="1.2" fill="none" opacity={0.5} />
      {/* Sync arrow ← */}
      <line x1="114" y1="78" x2="88" y2="78" stroke={A} strokeWidth="1.2" opacity={0.45} strokeDasharray="3 2" />
      <polyline points="92,74 86,78 92,82" stroke={A} strokeWidth="1.2" fill="none" opacity={0.5} />

      {/* Center glow dot */}
      <circle cx="100" cy="66" r="3" fill={A} opacity={0.8} style={glowStyle} />
    </svg>
  );
}

function ChartDiagram() {
  const bars = [
    { x: 32, h: 38 },
    { x: 62, h: 58 },
    { x: 92, h: 46 },
    { x: 122, h: 72 },
    { x: 152, h: 88 },
  ];
  const base = 130;

  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-52">
      {/* Horizontal grid lines */}
      {[42, 65, 88, 111].map((y) => (
        <line key={y} x1="18" y1={y} x2="178" y2={y} stroke={A} strokeWidth="0.3" opacity={0.08} />
      ))}
      {/* Baseline */}
      <line x1="18" y1={base} x2="178" y2={base} stroke={A} strokeWidth="0.5" opacity={0.15} />

      {/* Bars */}
      {bars.map(({ x, h }) => (
        <g key={x}>
          <rect x={x - 10} y={base - h} width="20" height={h} rx="3" fill={A} opacity={0.12} />
          <rect x={x - 10} y={base - h} width="20" height={h} rx="3" stroke={A} strokeWidth="0.8" opacity={0.4} fill="none" />
        </g>
      ))}

      {/* Trend line */}
      <path
        d={`M32 ${base - 38 - 6} Q47 ${base - 58 - 12}, 62 ${base - 58 - 6} T92 ${base - 46 - 6} Q107 ${base - 72 - 8}, 122 ${base - 72 - 6} T152 ${base - 88 - 6}`}
        stroke={A}
        strokeWidth="1.5"
        opacity={0.55}
        strokeLinecap="round"
        fill="none"
      />

      {/* Data dots on trend line */}
      {bars.map(({ x, h }, i) => (
        <circle key={x} cx={x} cy={base - h - 6} r={i === bars.length - 1 ? 3.5 : 2} fill={A} opacity={i === bars.length - 1 ? 0.8 : 0.4} style={i === bars.length - 1 ? glowStyle : undefined} />
      ))}
    </svg>
  );
}

function InvoiceDiagram() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-52">
      {/* Document body with folded corner */}
      <path
        d="M50 8 L128 8 L150 30 L150 147 C150 150 148 152 145 152 L55 152 C52 152 50 150 50 147 Z"
        stroke={A}
        strokeWidth="1.2"
        opacity={0.55}
        fill={A}
        fillOpacity={0.03}
      />
      {/* Folded corner */}
      <path d="M128 8 L128 30 L150 30" stroke={A} strokeWidth="1" opacity={0.25} fill={A} fillOpacity={0.05} />

      {/* Header placeholder */}
      <rect x="62" y="36" width="48" height="3" rx="1.5" fill={A} opacity={0.25} />
      <line x1="62" y1="48" x2="138" y2="48" stroke={A} strokeWidth="0.5" opacity={0.12} />

      {/* Item rows — label + amount */}
      {[56, 68, 80, 92].map((y, i) => (
        <g key={y}>
          <rect x="62" y={y} width={36 + (i % 2) * 8} height="2" rx="1" fill={A} opacity={0.14} />
          <rect x="118" y={y} width="20" height="2" rx="1" fill={A} opacity={0.1} />
        </g>
      ))}

      {/* Total separator */}
      <line x1="62" y1="108" x2="138" y2="108" stroke={A} strokeWidth="0.8" opacity={0.2} />
      {/* Total amount */}
      <rect x="104" y="114" width="34" height="3" rx="1.5" fill={A} opacity={0.3} />

      {/* Checkmark circle */}
      <circle cx="142" cy="135" r="14" stroke={A} strokeWidth="1.3" opacity={0.55} fill={A} fillOpacity={0.06} />
      <polyline
        points="134,135 140,141 152,129"
        stroke={A}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
        fill="none"
        style={glowStyle}
      />
    </svg>
  );
}

function EmailDiagram() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-52">
      {/* Envelope body */}
      <rect x="30" y="38" width="76" height="56" rx="4" stroke={A} strokeWidth="1.2" opacity={0.55} fill={A} fillOpacity={0.04} />
      {/* Envelope flap */}
      <path d="M30 42 L68 70 L106 42" stroke={A} strokeWidth="1.2" opacity={0.35} fill="none" />
      {/* Bottom creases */}
      <path d="M30 90 L52 72" stroke={A} strokeWidth="0.6" opacity={0.12} />
      <path d="M106 90 L84 72" stroke={A} strokeWidth="0.6" opacity={0.12} />

      {/* Branching lines to audience segments */}
      <line x1="106" y1="52" x2="142" y2="32" stroke={A} strokeWidth="1" opacity={0.3} strokeDasharray="3 2" />
      <line x1="106" y1="66" x2="148" y2="66" stroke={A} strokeWidth="1" opacity={0.3} strokeDasharray="3 2" />
      <line x1="106" y1="80" x2="142" y2="100" stroke={A} strokeWidth="1" opacity={0.3} strokeDasharray="3 2" />

      {/* Segment circles */}
      <circle cx="152" cy="28" r="10" stroke={A} strokeWidth="1" opacity={0.45} fill={A} fillOpacity={0.05} />
      <circle cx="158" cy="66" r="13" stroke={A} strokeWidth="1" opacity={0.55} fill={A} fillOpacity={0.06} />
      <circle cx="152" cy="104" r="8" stroke={A} strokeWidth="1" opacity={0.35} fill={A} fillOpacity={0.04} />

      {/* User dots inside segments */}
      <circle cx="149" cy="26" r="1.5" fill={A} opacity={0.45} />
      <circle cx="155" cy="30" r="1.5" fill={A} opacity={0.35} />
      <circle cx="155" cy="63" r="1.5" fill={A} opacity={0.45} />
      <circle cx="161" cy="68" r="1.5" fill={A} opacity={0.45} />
      <circle cx="155" cy="69" r="1.5" fill={A} opacity={0.35} />
      <circle cx="150" cy="103" r="1.5" fill={A} opacity={0.35} />
      <circle cx="155" cy="105" r="1.5" fill={A} opacity={0.28} />

      {/* Send point glow */}
      <circle cx="106" cy="66" r="3" fill={A} opacity={0.7} style={glowStyle} />
    </svg>
  );
}

function ServiceDiagram({ type }: { type: string }) {
  switch (type) {
    case "sync":
      return <SyncDiagram />;
    case "chart":
      return <ChartDiagram />;
    case "invoice":
      return <InvoiceDiagram />;
    case "email":
      return <EmailDiagram />;
    default:
      return null;
  }
}

/* ── Card & Section ──────────────────────────────────── */

function ServiceCard({
  name,
  description,
  href,
  image,
  diagram,
  gradient,
  accentPos,
}: Service) {
  return (
    <Link
      href={href}
      className="group relative flex-shrink-0 block rounded-2xl overflow-hidden w-full md:w-[320px]"
      style={{
        height: 400,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />

      {/* Service image */}
      {image && (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* SVG diagram */}
      {diagram && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ paddingBottom: 80 }}
        >
          <ServiceDiagram type={diagram} />
        </div>
      )}

      {/* Dot grid for diagram cards */}
      {diagram && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(252,163,17,0.04) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      )}

      {/* Dark overlay — lighter for diagrams, heavier for photos */}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.15) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Amber accent glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${accentPos}, rgba(252,163,17,0.25) 0%, transparent 60%)`,
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(252,163,17,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="font-display text-lg font-bold tracking-[-0.01em] mb-2"
          style={{ color: "#ffffff" }}
        >
          {name}
        </h3>
        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

export function BentoFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.5"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    // Scroll so card center aligns with track center
    const scrollLeft = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  const prev = () => goTo(Math.max(0, activeIndex - 1));
  const next = () => goTo(Math.min(services.length - 1, activeIndex + 1));

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Header */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="max-w-7xl mx-auto px-6 mb-14"
      >
        <span
          className="text-xs uppercase tracking-[0.2em] mb-4 block"
          style={{ color: "#737373" }}
        >
          Our Services
        </span>
        <SplitText
          as="h2"
          className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-black leading-[1.1]"
          stagger={0.03}
        >
          What We Automate For You
        </SplitText>
      </motion.div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        {/* Card track — scroll-snap for smooth native scrolling */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{
            gap: 24,
            paddingLeft: 24,
            paddingRight: 24,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {services.map((service) => (
            <div
              key={service.href}
              className="flex-shrink-0"
              style={{
                width: "calc(100vw - 48px)",
                scrollSnapAlign: "center",
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Progress bar + nav buttons */}
        <div className="flex items-center justify-between px-6 mt-6">
          {/* Progress bar */}
          <div
            className="flex-1 mr-6 h-[2px] rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${((activeIndex + 1) / services.length) * 100}%`,
                backgroundColor: "#fca311",
                transition: "width 400ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full flex items-center justify-center border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
              style={{
                borderColor: activeIndex === 0 ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.25)",
                color: activeIndex === 0 ? "rgba(0,0,0,0.2)" : "#000000",
                backgroundColor: "transparent",
                transition: "border-color 200ms, color 200ms",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === services.length - 1}
              aria-label="Next service"
              className="w-10 h-10 rounded-full flex items-center justify-center border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
              style={{
                borderColor: activeIndex === services.length - 1 ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.25)",
                color: activeIndex === services.length - 1 ? "rgba(0,0,0,0.2)" : "#000000",
                backgroundColor: "transparent",
                transition: "border-color 200ms, color 200ms",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop marquee */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Marquee
          duration={110}
          pauseOnHover
          fade
          fadeAmount={6}
        >
          {[...services, ...services, ...services].map((service, idx) => (
            <div key={`${service.href}-${idx}`} style={{ marginLeft: 12, marginRight: 12, width: 320, flexShrink: 0 }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
