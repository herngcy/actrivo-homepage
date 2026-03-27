"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { ButtonBorder } from "@/components/ui/button-border";
import { SplitText } from "@/components/ui/split-text";
import { ORBITAL_ICONS, type OrbitalIcon } from "./orbital-icon-data";
import "./hero-orbital.css";

/* ── Constants ── */
const ICON_COUNT = ORBITAL_ICONS.length;
const ROTATION_SPEED = 0.08; // degrees per frame at 60fps (~75s per revolution)
const DESKTOP_RADIUS = 380;
const TABLET_RADIUS = 300;
const ANGLE_OFFSET_START = -90; // start from top

/* ── Helpers ── */

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function getIconTransform(index: number, rotationAngle: number, radius: number) {
  const angleOffset = (index / ICON_COUNT) * 360 + ANGLE_OFFSET_START;
  const currentAngle = angleOffset + rotationAngle;
  const rad = degToRad(currentAngle);

  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  // Depth: sin gives us -1 (top/back) to 1 (bottom/front)
  // We want top to be dim, bottom to be bright
  const depthFactor = (1 + Math.sin(rad)) / 2; // 0 = back, 1 = front
  const opacity = 0.35 + 0.65 * depthFactor;
  const scale = 0.85 + 0.15 * depthFactor;
  const zIndex = Math.round(50 + 50 * depthFactor);

  return { x, y, opacity, scale, zIndex, angle: currentAngle };
}

/* ── Main Component ── */

export function OrbitalHero() {
  const heroRef = useRef<HTMLElement>(null);
  const rafIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const angleRef = useRef<number>(0);
  const isLockedRef = useRef(false);
  const targetAngleRef = useRef<number | null>(null);
  const animStartAngleRef = useRef(0);
  const animStartTimeRef = useRef(0);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeIconId, setActiveIconId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Detect mobile & reduced motion
  useEffect(() => {
    setMounted(true);

    const mql = window.matchMedia("(max-width: 767px)");
    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsMobile(mql.matches);
    setReducedMotion(motionMql.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const handleMotion = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);

    mql.addEventListener("change", handleResize);
    motionMql.addEventListener("change", handleMotion);

    return () => {
      mql.removeEventListener("change", handleResize);
      motionMql.removeEventListener("change", handleMotion);
    };
  }, []);

  // Orbital animation loop
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const SNAP_DURATION = 600;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      if (targetAngleRef.current !== null) {
        // Snapping to target position
        const elapsed = timestamp - animStartTimeRef.current;
        const progress = Math.min(elapsed / SNAP_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        angleRef.current =
          animStartAngleRef.current +
          (targetAngleRef.current - animStartAngleRef.current) * eased;
        setRotationAngle(angleRef.current);

        if (progress >= 1) {
          angleRef.current = targetAngleRef.current;
          targetAngleRef.current = null;
          isLockedRef.current = true;
        }
      } else if (!isLockedRef.current) {
        // Free rotation
        const delta = timestamp - lastTimeRef.current;
        const normalizedDelta = delta / (1000 / 60);
        angleRef.current =
          (angleRef.current + ROTATION_SPEED * normalizedDelta) % 360;
        setRotationAngle(angleRef.current);
      }

      lastTimeRef.current = timestamp;
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafIdRef.current);
  }, [isMobile, reducedMotion]);

  // Get orbit radius based on viewport
  const orbitRadius = useMemo(() => {
    if (typeof window === "undefined") return DESKTOP_RADIUS;
    return window.innerWidth >= 1024 ? DESKTOP_RADIUS : TABLET_RADIUS;
  }, [mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle icon click — snap clicked icon to top of orbit
  const handleIconClick = useCallback(
    (icon: OrbitalIcon, index: number) => {
      if (activeIconId === icon.id) {
        // Deselect — resume free rotation
        setActiveIconId(null);
        isLockedRef.current = false;
        lastTimeRef.current = 0;
      } else {
        // Select — snap this icon to top position
        setActiveIconId(icon.id);

        // Calculate rotation angle that places this icon at the top (-90°)
        const rawTarget = -(index / ICON_COUNT) * 360;
        const current = angleRef.current;
        const currentNorm = ((current % 360) + 360) % 360;
        const targetNorm = ((rawTarget % 360) + 360) % 360;
        let diff = targetNorm - currentNorm;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        targetAngleRef.current = current + diff;
        animStartAngleRef.current = current;
        animStartTimeRef.current = performance.now();
        isLockedRef.current = false;
      }
    },
    [activeIconId]
  );

  // Handle click-away
  const handleClickAway = useCallback(() => {
    setActiveIconId(null);
    isLockedRef.current = false;
    lastTimeRef.current = 0;
  }, []);

  // Find active icon data
  const activeIcon = activeIconId
    ? ORBITAL_ICONS.find((i) => i.id === activeIconId)
    : null;

  // Compute all icon transforms
  const iconTransforms = useMemo(
    () =>
      ORBITAL_ICONS.map((_, i) =>
        getIconTransform(i, reducedMotion ? 0 : rotationAngle, orbitRadius)
      ),
    [rotationAngle, orbitRadius, reducedMotion]
  );


  return (
    <motion.section
      ref={heroRef}
      className="orbital-root font-sans"
      style={{ opacity: heroOpacity, y: heroY }}
    >

      {/* Click-Away Overlay (only when popup is open) */}
      {activeIconId && !isMobile && (
        <div className="orbital-overlay" onClick={handleClickAway} />
      )}

      {/* Desktop Orbital System */}
      {!isMobile && (
        <div
          className="orbit-container"
          style={{
            width: orbitRadius * 2 + 100,
            height: orbitRadius * 2 + 100,
          }}
        >
          {/* Orbit Ring */}
          <svg
            width={orbitRadius * 2 + 100}
            height={orbitRadius * 2 + 100}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <circle
              cx={orbitRadius + 50}
              cy={orbitRadius + 50}
              r={orbitRadius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth={1}
              strokeDasharray="4 6"
              style={{ opacity: activeIconId ? 0.3 : 1, transition: "opacity 400ms ease" }}
            />

            {/* Connecting Lines */}
            {ORBITAL_ICONS.map((_, i) => {
              const nextIndex = (i + 1) % ICON_COUNT;
              const t1 = iconTransforms[i];
              const t2 = iconTransforms[nextIndex];
              const avgOpacity = (t1.opacity + t2.opacity) / 2;

              return (
                <line
                  key={`line-${i}`}
                  x1={t1.x + orbitRadius + 50}
                  y1={t1.y + orbitRadius + 50}
                  x2={t2.x + orbitRadius + 50}
                  y2={t2.y + orbitRadius + 50}
                  stroke="rgba(252, 163, 17, 0.2)"
                  strokeWidth={1}
                  strokeDasharray="4 8"
                  opacity={activeIconId ? 0 : avgOpacity * 0.5}
                  style={{ transition: "opacity 400ms ease" }}
                />
              );
            })}
          </svg>

          {/* Orbiting Icons */}
          {ORBITAL_ICONS.map((icon, i) => {
            const t = iconTransforms[i];
            const isActive = activeIconId === icon.id;
            const hasActiveIcon = activeIconId !== null;
            const co = orbitRadius + 50;
            const halfSize = typeof window !== "undefined" && window.innerWidth >= 1024 ? 40 : typeof window !== "undefined" && window.innerWidth >= 768 ? 36 : 28;

            // When active: highlight at orbital position (now snapped to top)
            const finalOpacity = isActive ? 1 : hasActiveIcon ? 0.2 : t.opacity;
            const finalScale = isActive ? 1.25 : hasActiveIcon ? t.scale * 0.9 : t.scale;
            const transformStr = `scale(${finalScale})`;

            return (
              <div
                key={icon.id}
                style={{
                  position: "absolute",
                  left: co + t.x - halfSize,
                  top: co + t.y - halfSize,
                  opacity: finalOpacity,
                  zIndex: isActive ? 200 : t.zIndex,
                  transform: transformStr,
                  transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className={`orbit-node ${isActive ? "active" : ""}`}
                  onClick={() => handleIconClick(icon, i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn about ${icon.label} automation`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleIconClick(icon, i);
                    }
                    if (e.key === "Escape" && activeIconId) {
                      handleClickAway();
                    }
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.label} />
                </div>
              </div>
            );
          })}

          {/* Popup Card — centered below active icon */}
          <AnimatePresence mode="wait">
            {activeIcon && (
              <motion.div
                key={activeIcon.id}
                className="orbital-popup"
                style={{
                  left: orbitRadius + 50 - 140,
                  top: orbitRadius + 50 + 20,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <div
                  className="orbital-popup-accent"
                  style={{ backgroundColor: activeIcon.accentColor }}
                />
                <div className="orbital-popup-header">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activeIcon.src} alt="" />
                  <span className="orbital-popup-title font-display">
                    {activeIcon.popupTitle}
                  </span>
                </div>
                <p className="orbital-popup-body">{activeIcon.popupBody}</p>
                <a href={activeIcon.serviceLink} className="orbital-popup-link">
                  Learn more &rarr;
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && mounted && (
        <>
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              left: 0,
              right: 0,
              zIndex: 5,
            }}
          >
            <div className="mobile-icon-strip">
              {ORBITAL_ICONS.map((icon, i) => (
                <button
                  key={icon.id}
                  className={`mobile-icon-btn ${activeIconId === icon.id ? "active" : ""}`}
                  onClick={() => handleIconClick(icon, i)}
                  aria-label={`Learn about ${icon.label} automation`}
                >
                  <div className="mobile-icon-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon.src} alt={icon.label} />
                  </div>
                  <span className="mobile-icon-label">{icon.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Sheet */}
          <AnimatePresence>
            {activeIcon && (
              <>
                <motion.div
                  className="mobile-sheet-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleClickAway}
                />
                <motion.div
                  className="mobile-bottom-sheet"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                  }}
                >
                  <div className="mobile-sheet-handle" />
                  <div className="orbital-popup-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={activeIcon.src} alt="" />
                    <span className="orbital-popup-title font-display">
                      {activeIcon.popupTitle}
                    </span>
                  </div>
                  <p className="orbital-popup-body">{activeIcon.popupBody}</p>
                  <a
                    href={activeIcon.serviceLink}
                    className="orbital-popup-link"
                  >
                    Learn more &rarr;
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Center Glow */}
      <div
        className="orbit-center-glow"
        style={{
          opacity: activeIconId ? 0 : 1,
          transition: "opacity 400ms ease",
        }}
      />

      {/* Hero Text */}
      <main
        className="orbital-hero-content"
        style={{
          opacity: activeIconId ? 0 : 1,
          transform: activeIconId ? "translateY(-30px)" : "translateY(0)",
          transition: "opacity 400ms ease, transform 400ms ease",
        }}
      >
        <div>
          <div
            className="orbital-title font-display"
            aria-label="Built for Businesses Too Busy to Stay Manual."
          >
            <SplitText as="span" className="block" stagger={0.04}>
              Built for Businesses
            </SplitText>
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.4))",
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
          <p className="orbital-subtitle">
            The right automation, in the right place, changes everything.
            <br />
            We show you where to start.
          </p>
          <div className="orbital-cta">
            <ButtonBorder href="/contact">
              Find My Time Leaks — Free &rarr;
            </ButtonBorder>
          </div>
        </div>
      </main>
    </motion.section>
  );
}

export default OrbitalHero;
