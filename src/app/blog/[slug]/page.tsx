"use client";

import { motion } from "motion/react";
import { PageWrapper } from "@/components/PageWrapper";
import { ButtonBorder } from "@/components/ui/button-border";
import { Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import DOMPurify from "dompurify";
import { getBlogPostBySlug } from "@/lib/blog-data";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = getBlogPostBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <PageWrapper pageName="Blog">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                backgroundColor: "rgba(252,163,17,0.15)",
                color: "#fca311",
              }}
            >
              {article.category}
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-8"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="flex items-center gap-6 text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="blog-content prose prose-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: "#404040",
              lineHeight: "1.8",
            }}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section
        className="py-16 px-6 md:py-24"
        style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
          >
            <h2
              className="font-display text-3xl md:text-4xl font-extrabold mb-6"
              style={{ color: "#000000", letterSpacing: "-0.02em" }}
            >
              Ready to Automate Your Workflows?
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "#737373", lineHeight: "1.7" }}
            >
              Book a free 30-minute workflow audit and we&apos;ll show you exactly where automation can save your team the most time.
            </p>
            <ButtonBorder href="/contact">Book My Free Audit →</ButtonBorder>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
