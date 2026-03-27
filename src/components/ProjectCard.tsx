"use client";

import { motion } from "motion/react";

export interface Project {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: { metric: string; value: string }[];
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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
      className="group relative p-8 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        border: "1px solid #262626",
        transition: "border-color 300ms, box-shadow 300ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(252,163,17,0.5)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(252,163,17,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#262626";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Internal Build Badge */}
      <div
        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
        style={{
          border: "1px solid rgba(252,163,17,0.35)",
          color: "#fca311",
          backgroundColor: "rgba(252,163,17,0.08)",
        }}
      >
        Internal Build
      </div>

      {/* Header */}
      <div className="mb-6">
        <h3
          className="font-display text-2xl font-bold mb-2"
          style={{ color: "#ffffff" }}
        >
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-sm" style={{ color: "#737373" }}>
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.industry}</span>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-sm mb-6"
        style={{ color: "#a3a3a3", lineHeight: "1.7" }}
      >
        {project.description}
      </p>

      {/* Results */}
      <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(252,163,17,0.05)", border: "1px solid rgba(252,163,17,0.15)" }}>
        <h4
          className="text-xs uppercase tracking-widest font-bold mb-3"
          style={{ color: "#737373" }}
        >
          Results
        </h4>
        <div className="space-y-2">
          {project.results.map((result, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span
                className="font-display text-lg font-bold"
                style={{ color: "#fca311" }}
              >
                {result.value}
              </span>
              <span className="text-sm" style={{ color: "#a3a3a3" }}>
                {result.metric}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4
          className="text-xs uppercase tracking-widest font-bold mb-3"
          style={{ color: "#737373" }}
        >
          Tools Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid #262626",
                color: "#a3a3a3",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252,163,17,0.4) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
