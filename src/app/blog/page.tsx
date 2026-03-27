"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

const categories = ["All", "AI Automation", "WhatsApp Automation", "Case Studies", "Industry Trends"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <PageWrapper pageName="Blog">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                border: "1px solid rgba(252,163,17,0.35)",
                color: "#fca311",
                backgroundColor: "rgba(252,163,17,0.08)",
              }}
            >
              Blog
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automation Insights for Malaysian SMEs.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Practical guides, real use cases, and industry trends — helping Malaysian business owners understand where AI saves the most time.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div
              className="flex flex-wrap gap-3 justify-center"
              role="tablist"
              aria-label="Filter blog posts by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="blog-posts-grid"
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: selectedCategory === category
                      ? "#fca311"
                      : "rgba(255,255,255,0.05)",
                    color: selectedCategory === category
                      ? "#000000"
                      : "#a3a3a3",
                    border: selectedCategory === category
                      ? "1px solid #fca311"
                      : "1px solid #262626",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = "rgba(252,163,17,0.1)";
                      e.currentTarget.style.borderColor = "rgba(252,163,17,0.3)";
                      e.currentTarget.style.color = "#fca311";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = "#262626";
                      e.currentTarget.style.color = "#a3a3a3";
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Cards Grid */}
          <div
            id="blog-posts-grid"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="tabpanel"
            aria-live="polite"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p style={{ color: "#737373" }}>
                No articles found in this category yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
