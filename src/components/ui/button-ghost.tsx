"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function ButtonGhost({
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
      href={href || "#"}
      className={cn(
        // Base layout
        "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full overflow-hidden cursor-pointer",
        // Brand colours — transparent with white border
        "bg-transparent text-foreground",
        "border border-white/20",
        // Hover & active states
        "transition-[border-color,background-color] duration-200 ease-out",
        "hover:border-white/40 hover:bg-white/5",
        "active:bg-white/10",
        // Focus ring (brand amber)
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-actrivo/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
