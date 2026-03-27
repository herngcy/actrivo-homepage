"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  thumbnail?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
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
      className="group relative rounded-2xl overflow-hidden"
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
      {/* Thumbnail */}
      <div
        className="relative w-full h-48 overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {post.thumbnail ? (
          <>
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, rgba(252,163,17,0.1) 0%, rgba(252,163,17,0.05) 100%)",
            }}
          >
            <div
              className="w-32 h-32 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(252,163,17,0.6) 0%, transparent 70%)",
              }}
            />
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              }}
            />
          </div>
        )}

        {/* Category Badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-10"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "#fca311",
            backdropFilter: "blur(8px)",
          }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "#737373" }}>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-display text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#fca311] transition-colors duration-200"
          style={{
            color: "#ffffff",
            lineHeight: "1.3",
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm mb-4 line-clamp-3"
          style={{ color: "#a3a3a3", lineHeight: "1.7" }}
        >
          {post.excerpt}
        </p>

        {/* CTA */}
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold group/cta"
          style={{ color: "#fca311" }}
        >
          Read Article
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
