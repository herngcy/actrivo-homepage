"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
}

function WordReveal({
  word,
  index,
  scrollProgress,
  stagger,
}: {
  word: string;
  index: number;
  scrollProgress: MotionValue<number>;
  stagger: number;
}) {
  const start = index * stagger;
  const end = Math.min(start + 0.4, 1);

  const y = useTransform(scrollProgress, [start, end], ["110%", "0%"]);
  const opacity = useTransform(scrollProgress, [start, end], [0, 1]);

  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        style={{ y, opacity }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function SplitText({
  children,
  className,
  as: Tag = "h2",
  stagger = 0.03,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = children.split(/\s+/);

  return (
    // @ts-expect-error - ref type mismatch between generic HTMLElement and specific tag
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={i}>
          <WordReveal
            word={word}
            index={i}
            scrollProgress={scrollYProgress}
            stagger={stagger}
          />
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
