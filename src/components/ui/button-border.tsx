"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function ButtonBorder({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href || "#contact"}
      className={cn(
        // Base layout
        "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full overflow-hidden cursor-pointer",
        // Brand colours
        "bg-actrivo text-primary-foreground border-none",
        // Hover & active states
        "transition-[transform,box-shadow] duration-200 ease-out",
        "hover:scale-105 hover:shadow-[0_6px_24px_rgba(252,163,17,0.35)]",
        "active:scale-[0.98]",
        // Focus ring (brand amber)
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-actrivo/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Shine sweep on hover (defined in globals.css)
        "btn-shine",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
