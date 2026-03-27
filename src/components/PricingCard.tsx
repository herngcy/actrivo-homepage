"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 18,
        delay: index * 0.1
      }}
      whileHover={{ scale: 1.02 }}
      className="relative p-8 rounded-2xl h-full flex flex-col"
      style={{
        backgroundColor: "#0a0a0a",
        border: tier.highlighted
          ? "2px solid #fca311"
          : "1px solid #262626",
        boxShadow: tier.highlighted
          ? "0 0 30px rgba(252,163,17,0.3)"
          : "none",
        transition: "box-shadow 300ms, border-color 300ms",
      }}
      onMouseEnter={(e) => {
        if (!tier.highlighted) {
          e.currentTarget.style.borderColor = "rgba(252,163,17,0.5)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(252,163,17,0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (!tier.highlighted) {
          e.currentTarget.style.borderColor = "#262626";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
    >
      {/* Highlighted Badge */}
      {tier.highlighted && (
        <div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{
            backgroundColor: "#fca311",
            color: "#000000",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3
          className="font-display text-2xl font-bold mb-2"
          style={{ color: "#ffffff" }}
        >
          {tier.name}
        </h3>
        <p
          className="text-sm"
          style={{ color: "#a3a3a3", lineHeight: "1.6" }}
        >
          {tier.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div
          className="font-display text-4xl font-extrabold tracking-tight"
          style={{
            color: tier.highlighted ? "#fca311" : "#ffffff",
          }}
        >
          {tier.price}
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-8">
        <ul className="space-y-3">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#fca311" }}
              />
              <span
                className="text-sm"
                style={{ color: "#d4d4d4", lineHeight: "1.6" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Link
        href={tier.ctaHref}
        className={cn(
          "block w-full px-6 py-3 rounded-xl text-center font-semibold cursor-pointer relative overflow-hidden",
          "border-2 border-actrivo",
          "transition-[transform,background-color,color] duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-actrivo/50 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
          tier.highlighted
            ? "bg-actrivo text-primary-foreground hover:scale-105 active:scale-[0.98] btn-shine"
            : "bg-transparent text-actrivo hover:bg-actrivo hover:text-primary-foreground active:scale-[0.98] btn-shine"
        )}
      >
        <span className="relative z-10">{tier.ctaText}</span>
      </Link>
    </motion.div>
  );
}
