"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { ButtonBorder } from "@/components/ui/button-border";
import { SplitText } from "@/components/ui/split-text";
import "./hero-minimalism.css";

interface FloatingIconData {
  id: number;
  src: string;
  label: string;
  top: string;
  left: string;
}

const ICONS: FloatingIconData[] = [
  { id: 1, src: "/icons/whatsapp.svg", label: "WhatsApp", top: "8%", left: "12%" },
  { id: 2, src: "/icons/microsoft-excel.svg", label: "Excel", top: "18%", left: "28%" },
  { id: 3, src: "/icons/google drive.svg", label: "Google Drive", top: "6%", left: "48%" },
  { id: 4, src: "/icons/ms-sharepoint.svg", label: "SharePoint", top: "12%", left: "72%" },
  { id: 5, src: "/icons/telegram.svg", label: "Telegram", top: "22%", left: "88%" },
  { id: 6, src: "/icons/microsoft-word.svg", label: "Word", top: "52%", left: "6%" },
  { id: 7, src: "/icons/power-bi.svg", label: "Power BI", top: "48%", left: "90%" },
  { id: 8, src: "/icons/github.svg", label: "GitHub", top: "72%", left: "14%" },
  { id: 9, src: "/icons/postgresql.svg", label: "PostgreSQL", top: "76%", left: "32%" },
  { id: 10, src: "/icons/gmail.svg", label: "Gmail", top: "70%", left: "58%" },
  { id: 11, src: "/icons/linkedin.svg", label: "LinkedIn", top: "74%", left: "82%" },
];

function FloatingIcon({
  iconData,
  index,
  mouseX,
  mouseY,
}: {
  iconData: FloatingIconData;
  index: number;
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    let rafId: number;

    const update = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX.current - cx;
        const dy = mouseY.current - cy;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / 150) * 60;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [x, y, mouseX, mouseY]);

  const floatDuration = 5 + (iconData.id * 1.3) % 5;

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        position: "absolute",
        top: iconData.top,
        left: iconData.left,
      }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="floating-icon-card"
        animate={{
          y: [0, -10, 0, 10, 0],
          x: [0, 8, 0, -8, 0],
          rotate: [0, 4, 0, -4, 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        title={iconData.label}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconData.src}
          alt={iconData.label}
          className="floating-icon-svg"
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroMinimalism() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="minimal-root font-sans"
      onMouseMove={handleMouseMove}
      style={{ opacity: heroOpacity, y: heroY }}
    >
      {/* Accent Lines */}
      <div className="accent-lines" aria-hidden="true">
        <div className="hline" />
        <div className="hline" />
        <div className="hline" />
        <div className="vline" />
        <div className="vline" />
        <div className="vline" />
      </div>

      {/* Floating Icons */}
      <div className="floating-icons-layer">
        {ICONS.map((iconData, index) => (
          <FloatingIcon
            key={iconData.id}
            iconData={iconData}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      {/* Hero Text */}
      <main className="minimal-hero">
        <div>
          <div className="minimal-title font-display" aria-label="Built for Businesses Too Busy to Stay Manual.">
            <SplitText as="span" className="block" stagger={0.04}>
              Built for Businesses
            </SplitText>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.4))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <SplitText as="span" stagger={0.04}>
                Too Busy to Stay Manual.
              </SplitText>
            </span>
          </div>
          <p className="minimal-subtitle">
            The right automation, in the right place, changes everything.
            <br />
            We show you where to start.
          </p>
          <div className="minimal-cta">
            <ButtonBorder href="/contact">Find My Time Leaks — Free →</ButtonBorder>
          </div>
        </div>
      </main>
    </motion.section>
  );
}

export default HeroMinimalism;
