"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Search } from "lucide-react";

/* ── Service card data ── */
const categories = [
  "All Services",
  "Data & Documents",
  "Sales & Leads",
  "Operations",
  "Communication",
] as const;

type Category = (typeof categories)[number];

interface ServiceCard {
  title: string;
  description: string;
  category: Category;
  tag: string;
  href: string;
  image: string;
}

const allServices: ServiceCard[] = [
  {
    title: "Data Entry Automation",
    description:
      "CRM, accounting, and ops tools in perfect sync — automatically, around the clock. No copy-paste, no errors, no wasted hours.",
    category: "Data & Documents",
    tag: "Data & Documents",
    href: "/services/data-entry-automation",
    image: "/images/acceptable/Our services/service-data-entry.png",
  },
  {
    title: "AI Document Processing",
    description:
      "AI reads your invoices, POs, and receipts — extracts the data and routes it to the right system. No typing required.",
    category: "Data & Documents",
    tag: "Data & Documents",
    href: "/services/ai-document-processing",
    image: "/images/acceptable/Our services/document processing.png",
  },
  {
    title: "Customer Workflows",
    description:
      "Instant responses, automatic qualification, relentless follow-up. Your sales team only talks to people ready to buy.",
    category: "Sales & Leads",
    tag: "Sales & Leads",
    href: "/services/customer-workflows",
    image: "/images/acceptable/Our services/customer workflows.png",
  },
  {
    title: "Reporting Dashboards",
    description:
      "Live dashboards that pull from all your tools and update automatically. Decisions with today's data, not last week's.",
    category: "Operations",
    tag: "Operations",
    href: "/services/reporting-dashboards",
    image: "/images/acceptable/Our services/business-analytics-dashboard.png",
  },
  {
    title: "Invoice & Payment Automation",
    description:
      "Auto-generate invoices, send payment reminders on schedule, and reconcile bank deposits — without lifting a finger.",
    category: "Operations",
    tag: "Operations",
    href: "/services/invoice-payment-automation",
    image: "/images/acceptable/Our services/invoice automation.png",
  },
  {
    title: "WhatsApp Business Automation",
    description:
      "Automate replies, orders, bookings, and broadcasts — on the channel your customers already use.",
    category: "Communication",
    tag: "Communication",
    href: "/services/whatsapp-business-automation",
    image: "/images/acceptable/Our services/our-services-whatsapp automation.png",
  },
  {
    title: "Inventory Management",
    description:
      "Real-time stock sync across every channel. Automatic alerts. Automatic reorders. No spreadsheet counts.",
    category: "Operations",
    tag: "Operations",
    href: "/services/inventory-management",
    image: "/images/acceptable/Our services/inventory management.png",
  },
  {
    title: "Email Marketing Automation",
    description:
      "Auto-segmented audiences, behavior-triggered campaigns, and revenue tracking that shows what actually works.",
    category: "Communication",
    tag: "Communication",
    href: "/services/email-marketing",
    image: "/images/acceptable/Our services/service-email-marketing-v3.png",
  },
  {
    title: "Lead Management",
    description:
      "Every inquiry captured, scored, and followed up. Scattered leads become an organized, automated pipeline.",
    category: "Sales & Leads",
    tag: "Sales & Leads",
    href: "/services/lead-management",
    image: "/images/acceptable/Our services/sales-pipeline-strategy.png",
  },
];

/* ── Featured card (large, first position) ── */
function FeaturedCard({ service }: { service: ServiceCard }) {
  return (
    <Link href={service.href} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: 420 }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        {/* Tags */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="flex gap-2 mb-3">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: "#fca311",
                color: "#000",
              }}
            >
              {service.tag}
            </span>
          </div>
          <h3
            className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2"
            style={{ color: "#fff" }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {service.description}
          </p>
        </div>
      </div>
      {/* Read more */}
      <div className="flex items-center gap-2 mt-4 group-hover:gap-3" style={{ transition: "gap 200ms" }}>
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#0a0a0a" }}>
          Read More
        </span>
        <ArrowRight size={16} style={{ color: "#0a0a0a" }} />
      </div>
    </Link>
  );
}

/* ── Regular card (smaller, 2-column grid) ── */
function RegularCard({ service }: { service: ServiceCard }) {
  return (
    <Link href={service.href} className="group block">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: 260 }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <span
            className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-2"
            style={{
              backgroundColor: "#fca311",
              color: "#000",
            }}
          >
            {service.tag}
          </span>
        </div>
      </div>
      <h3
        className="font-display text-lg font-bold tracking-tight mt-4 mb-1.5"
        style={{ color: "#0a0a0a" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed line-clamp-2"
        style={{ color: "#525252" }}
      >
        {service.description}
      </p>
      <div className="flex items-center gap-2 mt-3 group-hover:gap-3" style={{ transition: "gap 200ms" }}>
        <span className="text-sm font-medium" style={{ color: "#0a0a0a" }}>
          Read more
        </span>
        <ArrowRight size={14} style={{ color: "#0a0a0a" }} />
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Services");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allServices.filter((s) => {
    const matchesCategory =
      activeCategory === "All Services" || s.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <PageWrapper pageName="Services">
      {/* ── HERO SECTION ── */}
      <section
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(252,163,17,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
            {/* Left: Text */}
            <div className="flex-1 max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
                style={{
                  border: "1px solid rgba(252,163,17,0.3)",
                  color: "#fca311",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#fca311" }}
                />
                Explore our capabilities
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
                style={{ color: "#ffffff" }}
              >
                Precision{" "}
                <span style={{ color: "#fca311" }}>automation</span>{" "}
                for the modern SME.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
              >
                We deliver high-impact AI automation solutions designed to
                eliminate manual work, reduce errors, and drive sustainable
                growth for Malaysian businesses.
              </motion.p>

              {/* Search bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div
                  className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Search size={18} style={{ color: "rgba(255,255,255,0.4)" }} />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                  />
                </div>
                <button
                  className="btn-shine flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold cursor-pointer"
                  style={{
                    backgroundColor: "#fca311",
                    color: "#000",
                    transition: "opacity 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  onClick={() => {/* search is already live */}}
                >
                  Search
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* Right: Hero image with overlapping stat cards in grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 w-full max-w-lg hidden md:block"
            >
              {/* Container with background image */}
              <motion.div
                className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center p-8"
                style={{
                  aspectRatio: "1 / 1",
                  background:
                    "linear-gradient(135deg, rgba(252,163,17,0.2) 0%, rgba(0,0,0,1) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Background image layer */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/glass-wall-workflow.png"
                    alt="AI automation workflow on glass wall"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>

                {/* Grid of overlapping stat cards */}
                <div className="grid grid-cols-2 gap-4 w-full h-full z-10 relative">
                  {/* Card 1 — Left column, shifted down */}
                  <motion.div
                    className="rounded-xl p-6 flex flex-col justify-between transform translate-y-8"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {/* Icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ color: "#fca311" }}
                    >
                      <path
                        d="M3 18L9 6L15 13.5L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Stats */}
                    <div>
                      <div
                        className="text-2xl font-display font-bold"
                        style={{ color: "#ffffff" }}
                      >
                        9+
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        Automation Solutions
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2 — Right column, default position */}
                  <motion.div
                    className="rounded-xl p-6 flex flex-col justify-between"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ color: "#fca311" }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 7v5l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Stats */}
                    <div>
                      <div
                        className="text-2xl font-display font-bold"
                        style={{ color: "#ffffff" }}
                      >
                        90%
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        Time Saved
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE LISTING ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left sidebar: Categories */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-56 flex-shrink-0"
            >
              <span
                className="text-xs uppercase tracking-[0.2em] mb-5 block font-medium"
                style={{ color: "#737373" }}
              >
                Service Categories
              </span>
              <div className="flex flex-row md:flex-col gap-1 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-left text-sm py-2 px-3 md:px-0 rounded-lg md:rounded-none cursor-pointer"
                    style={{
                      fontWeight: activeCategory === cat ? 700 : 400,
                      color: activeCategory === cat ? "#0a0a0a" : "#737373",
                      borderLeft:
                        activeCategory === cat
                          ? "2px solid #fca311"
                          : "2px solid transparent",
                      backgroundColor:
                        activeCategory === cat
                          ? "transparent"
                          : "transparent",
                      transition: "all 200ms",
                      paddingLeft: "12px",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* CTA box */}
              <div
                className="mt-8 p-5 rounded-2xl hidden md:block"
                style={{
                  backgroundColor: "rgba(252,163,17,0.06)",
                  border: "1px solid rgba(252,163,17,0.15)",
                }}
              >
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ color: "#0a0a0a" }}
                >
                  Need a custom solution?
                </h4>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "#737373" }}
                >
                  Talk to our team to design a tailored automation strategy for
                  your specific needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "#fca311", transition: "gap 200ms" }}
                >
                  Schedule a consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.aside>

            {/* Right: Service cards */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {filtered.length === 0 ? (
                    <div className="text-center py-20">
                      <p className="text-lg font-medium" style={{ color: "#737373" }}>
                        No services found matching your criteria.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-10">
                      {/* Featured (first) card — full width */}
                      {featured && <FeaturedCard service={featured} />}

                      {/* Rest in 2-column grid */}
                      {rest.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {rest.map((service) => (
                            <RegularCard key={service.href} service={service} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA (mobile only duplicate) ── */}
      <section
        className="md:hidden py-12 px-6"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div
          className="p-6 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(252,163,17,0.06)",
            border: "1px solid rgba(252,163,17,0.15)",
          }}
        >
          <h4
            className="text-lg font-bold mb-2"
            style={{ color: "#0a0a0a" }}
          >
            Need a custom solution?
          </h4>
          <p className="text-sm mb-4" style={{ color: "#737373" }}>
            Talk to our team to design a tailored automation strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: "#fca311", color: "#000" }}
          >
            Schedule a consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
