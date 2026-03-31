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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Observe which card is most visible in the viewport
  useEffect(() => {
    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          ratios.set(index, entry.intersectionRatio);
        });

        // Find the card with the highest visibility ratio
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
        // Observe within a band around the center of the viewport
        rootMargin: "-10% 0px -15% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [content.length]);

  // Handle step click - scroll to the corresponding card
  const handleStepClick = useCallback((index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 w-full items-start">
        {/* LEFT - Sticky header and step indicators */}
        <div className="md:sticky md:top-20 self-start">
          {/* Header Section */}
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
                      Step {String(index + 1).padStart(2, '0')}
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
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={cn(
                  "bg-[#0a0a0a] rounded-2xl p-6 md:p-8 lg:p-12 transition-[opacity,border-color,box-shadow] duration-500 border",
                  isActive
                    ? "opacity-100 border-[#262626] shadow-xl"
                    : "opacity-50 border-[#1a1a1a]"
                )}
              >
                {/* Step label */}
                <div className={cn(
                  "text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300",
                  isActive ? "text-[#fca311]" : "text-[#737373]"
                )}>
                  STEP {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h2 className={cn(
                  "text-xl md:text-2xl lg:text-3xl font-bold font-display mb-4 transition-colors duration-300",
                  "tracking-[-0.02em]",
                  isActive ? "text-white" : "text-[#a3a3a3]"
                )}
                style={{ lineHeight: "1.2" }}
                >
                  {item.title}
                </h2>

                {/* Description */}
                <p className={cn(
                  "text-base mb-8 max-w-xl font-light transition-colors duration-300",
                  isActive ? "text-[#d4d4d4]" : "text-[#737373]"
                )}
                style={{ lineHeight: "1.7" }}
                >
                  {item.description}
                </p>

                {/* Content card */}
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
