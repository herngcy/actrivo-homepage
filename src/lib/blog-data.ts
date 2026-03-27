import { BlogPost } from "@/components/BlogCard";

export interface BlogPostFull extends BlogPost {
  content: string;
}

export const blogPosts: BlogPostFull[] = [
  {
    slug: "ai-automation-malaysian-sme-50-hours",
    title: "How Malaysian SMEs Are Using AI to Cut Admin by 50 Hours a Month",
    excerpt:
      "Manual admin is the silent productivity killer in most SMEs. Here's how automation is changing that.",
    category: "AI Automation",
    publishedAt: "March 15, 2026",
    readTime: "5 min read",
    thumbnail: "https://placehold.co/800x500/fafafa/fca311?text=AI+Automation",
    content: `
      <p>Manual admin work is the silent productivity killer in most Malaysian SMEs. From data entry to invoice processing to customer follow-ups, repetitive tasks consume hours that could be spent growing the business.</p>

      <p>But automation is changing that picture. Here's what we're seeing across Malaysian SMEs that have implemented AI-powered workflows.</p>

      <h2>The Time Leaks in Your Business</h2>
      <p>Most SMEs don't realize how much time disappears into manual processes until they actually measure it. Common time sinks include:</p>
      <ul>
        <li>Manual data entry between systems (CRM, accounting, spreadsheets)</li>
        <li>Invoice and document processing</li>
        <li>Customer inquiry responses and follow-ups</li>
        <li>Weekly report compilation</li>
        <li>Approval workflows over WhatsApp</li>
      </ul>

      <h2>What Automation Actually Looks Like</h2>
      <p>Real automation isn't about replacing your team — it's about removing the boring, repetitive work so they can focus on what actually matters.</p>

      <p>A typical automation project might sync your CRM with your accounting software automatically, extract invoice details using AI, or auto-respond to common customer questions on WhatsApp.</p>

      <h2>Getting Started</h2>
      <p>The best starting point? Pick one high-impact, repetitive process. Most clients start with data entry or document processing and expand from there once they see results.</p>

      <p>Want to see what automation could look like in your business? Book a free workflow audit — we'll map your processes and show you exactly where you're losing time.</p>
    `,
  },
  {
    slug: "whatsapp-approval-process-automation",
    title: "WhatsApp Is Killing Your Approval Process — Here's the Fix",
    excerpt:
      "Most Malaysian businesses run approvals over WhatsApp. Here's why that breaks down — and what to do instead.",
    category: "WhatsApp Automation",
    publishedAt: "March 10, 2026",
    readTime: "4 min read",
    thumbnail: "https://placehold.co/800x500/fafafa/fca311?text=WhatsApp",
    content: `
      <p>If your business runs approvals over WhatsApp, you're not alone. It's the default communication tool for Malaysian businesses. But there's a problem: WhatsApp was never designed to be a workflow tool.</p>

      <h2>Why WhatsApp Approvals Break Down</h2>
      <p>WhatsApp groups become noisy fast. Important approval requests get buried under casual messages, memes, and unrelated conversations. There's no audit trail, no tracking, and no way to know which requests are pending.</p>
      <ul>
        <li>Messages get lost in group chats</li>
        <li>No way to track approval status</li>
        <li>No audit trail for compliance</li>
        <li>Delays when approvers are busy or away</li>
        <li>No escalation when approvals stall</li>
      </ul>

      <h2>The Better Approach</h2>
      <p>The fix isn't to stop using WhatsApp — it's to add structure around it. Automated approval workflows can send structured requests via WhatsApp, track responses, escalate delays, and log everything automatically.</p>

      <p>Your team still uses WhatsApp (because that's where they already are), but the process behind it is structured, tracked, and reliable.</p>

      <h2>What This Looks Like in Practice</h2>
      <p>A purchase order above RM5,000 triggers an automatic approval request to the finance manager via WhatsApp. They tap "Approve" or "Reject." The system logs the decision, notifies the requester, and moves to the next step — all without anyone chasing anyone in a group chat.</p>

      <p>Ready to fix your approval process? Let's talk about what automation could look like for your team.</p>
    `,
  },
  // Add more blog posts here
];

export function getBlogPostBySlug(slug: string): BlogPostFull | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
