"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  header,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  header?: React.ReactNode;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);
  const stickyBarRef = useRef<HTMLDivElement>(null);
  // Separate refs for mobile and desktop to avoid the hidden layout overwriting the visible one
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track layout breakpoint
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobileLayout(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobileLayout(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Listen for navbar visibility changes and update sticky bar top directly
  useEffect(() => {
    const bar = stickyBarRef.current;
    if (!bar) return;

    // Start with navbar visible
    bar.style.top = "64px";
    bar.style.transition = "top 300ms ease";

    const handleNavVisibility = (e: Event) => {
      const visible = (e as CustomEvent<{ visible: boolean }>).detail.visible;
      bar.style.top = visible ? "64px" : "0px";
    };

    window.addEventListener("navbar-visibility", handleNavVisibility);
    return () => window.removeEventListener("navbar-visibility", handleNavVisibility);
  }, []);

  // Observe which card is most visible in the viewport (only observe the visible layout)
  useEffect(() => {
    const activeRefs = isMobileLayout ? mobileCardRefs.current : desktopCardRefs.current;
    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          ratios.set(index, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let maxIndex = 0;
        ratios.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxIndex = index;
          }
        });

        if (maxRatio > 0) {
          setActiveCard(maxIndex);
        }
      },
      {
        // 120px accounts for fixed navbar (64px) + mobile sticky step bar (~56px)
        rootMargin: "-120px 0px -10% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    activeRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [content.length, isMobileLayout]);

  const handleStepClick = useCallback((index: number) => {
    const activeRefs = isMobileLayout ? mobileCardRefs.current : desktopCardRefs.current;
    const card = activeRefs[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isMobileLayout]);

  return (
    <div className="relative">

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden">
        {/* Note: mobile header is rendered by the parent (HowItWorks) above StickyScroll,
            so it sits outside the sticky context and can't push the sticky bar down. */}

        {/* Sticky step indicator bar — top driven directly via ref from navbar-visibility event */}
        <div ref={stickyBarRef} className="sticky z-40 -mx-4 mb-6">
          <div className="bg-[#fafafa]/95 backdrop-blur-sm border-b border-[#e5e5e5] px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#fca311] uppercase tracking-widest mb-0.5">
                Step {String(activeCard + 1).padStart(2, "0")} / {content.length}
              </div>
              <div className="font-bold text-gray-900 text-base leading-tight">
                {content[activeCard].title}
              </div>
            </div>
            {/* Progress dots */}
            <div className="flex gap-2">
              {content.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleStepClick(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                    i === activeCard ? "bg-[#fca311]" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Content cards — all full opacity, step label inside each */}
        <div className="space-y-5">
          {content.map((item, index) => {
            const isActive = index === activeCard;
            return (
              <div
                key={index}
                ref={(el) => { mobileCardRefs.current[index] = el; }}
                data-index={index}
                className={cn(
                  "bg-[#0a0a0a] rounded-2xl p-5 transition-[border-color,box-shadow] duration-500 border",
                  isActive ? "border-[#262626] shadow-xl" : "border-[#1a1a1a]"
                )}
              >
                <div className={cn(
                  "text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300",
                  isActive ? "text-[#fca311]" : "text-[#737373]"
                )}>
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <h2
                  className={cn(
                    "text-xl font-bold font-display mb-3 tracking-[-0.02em] transition-colors duration-300",
                    isActive ? "text-white" : "text-[#a3a3a3]"
                  )}
                  style={{ lineHeight: "1.2" }}
                >
                  {item.title}
                </h2>
                <p
                  className={cn(
                    "text-sm mb-6 font-light transition-colors duration-300",
                    isActive ? "text-[#d4d4d4]" : "text-[#737373]"
                  )}
                  style={{ lineHeight: "1.7" }}
                >
                  {item.description}
                </p>
                <div className={cn("rounded-xl overflow-hidden", contentClassName)}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:grid md:grid-cols-2 gap-14 lg:gap-20 w-full items-start">
        {/* LEFT - Sticky header and step indicators */}
        <div className="md:sticky md:top-20 self-start">
          {header && <div className="mb-12">{header}</div>}

          <div className="max-w-lg space-y-2">
            {content.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-xl p-5 transition-[background-color,border-color,box-shadow] duration-300 cursor-pointer group",
                  activeCard === index
                    ? "bg-[#fef9ec] border border-[#fca311]/20 shadow-sm"
                    : "bg-transparent border border-transparent hover:bg-gray-50/50"
                )}
                onClick={() => handleStepClick(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className={cn(
                      "text-xs font-bold uppercase tracking-widest mb-1.5 transition-colors duration-200",
                      activeCard === index ? "text-[#fca311]" : "text-gray-400 group-hover:text-gray-500"
                    )}>
                      Step {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className={cn(
                      "font-bold transition-[font-size,color] duration-200",
                      activeCard === index
                        ? "text-xl text-gray-900"
                        : "text-lg text-gray-400 group-hover:text-gray-600"
                    )}>
                      {item.title}
                    </h3>
                  </div>
                  {activeCard === index && (
                    <svg className="w-5 h-5 text-[#fca311] flex-shrink-0 ml-4 animate-in slide-in-from-left-2 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Scrolling content cards */}
        <div className="space-y-8">
          {content.map((item, index) => {
            const isActive = index === activeCard;
            return (
              <div
                key={index}
                ref={(el) => { desktopCardRefs.current[index] = el; }}
                data-index={index}
                className={cn(
                  "bg-[#0a0a0a] rounded-2xl p-6 md:p-8 lg:p-12 transition-[opacity,border-color,box-shadow] duration-500 border",
                  isActive
                    ? "opacity-100 border-[#262626] shadow-xl"
                    : "opacity-50 border-[#1a1a1a]"
                )}
              >
                <div className={cn(
                  "text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300",
                  isActive ? "text-[#fca311]" : "text-[#737373]"
                )}>
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <h2
                  className={cn(
                    "text-xl md:text-2xl lg:text-3xl font-bold font-display mb-4 tracking-[-0.02em] transition-colors duration-300",
                  )}
                  style={{ lineHeight: "1.2", color: isActive ? "#ffffff" : "#a3a3a3" }}
                >
                  {item.title}
                </h2>
                <p
                  className={cn(
                    "text-base mb-8 max-w-xl font-light transition-colors duration-300",
                    isActive ? "text-[#d4d4d4]" : "text-[#737373]"
                  )}
                  style={{ lineHeight: "1.7" }}
                >
                  {item.description}
                </p>
                <div className={cn("rounded-xl overflow-hidden", contentClassName)}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
