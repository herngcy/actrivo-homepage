// Centralized content for all 9 service pages
// Source: docs/SERVICE_PAGES_CONTENT.md

export interface ServiceOverviewFeature {
  title: string;
  description: string;
}

export interface ServiceCapability {
  label: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  description: string;
}

export interface ServiceWhyCard {
  title: string;
  description: string;
}

export interface ServiceHeroStat {
  value: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  // Hero
  badge: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroImage: string;
  heroStats: [ServiceHeroStat, ServiceHeroStat];
  // Overview
  overviewDescription: string;
  overviewFeatures: ServiceOverviewFeature[];
  builtFor: string;
  // What We Build
  capabilities: ServiceCapability[];
  // How It Works
  steps: ServiceStep[];
  // The Impact
  stats: ServiceStat[];
  // Why It Matters
  whyCards: ServiceWhyCard[];
  // CTA
  ctaHeadline: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  // Tools
  tools: string[];
}

export const servicePages: Record<string, ServiceData> = {
  "data-entry-automation": {
    slug: "data-entry-automation",
    badge: "Data Entry",
    headline: "Stop Copying.",
    headlineAccent: "Start Syncing.",
    subtitle:
      "We connect your tools so data flows between them automatically. No copy-paste, no errors, no wasted hours.",
    ctaPrimary: "Book a Free Audit",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/service-data-entry.png",
    heroStats: [
      { value: "90%", label: "Processing Reduction" },
      { value: "23hrs", label: "Weekly Time Saved" },
    ],
    overviewDescription:
      "Staff copy data from Excel to accounting software, re-type details across platforms, and manually update counts — every day. We eliminate that. A sale in Shopify updates your inventory, syncs your accounting, and notifies your team — automatically.",
    overviewFeatures: [
      {
        title: "Real-Time Sync",
        description:
          "Data changes in one tool, every connected system updates instantly.",
      },
      {
        title: "Error-Proof Validation",
        description:
          "Duplicates caught, missing fields flagged, mismatches corrected automatically.",
      },
    ],
    builtFor:
      "Retail, e-commerce, accounting teams, and any SME still copy-pasting between tools.",
    capabilities: [
      {
        label: "Sync Engine",
        title: "Real-Time Sync",
        description:
          "Data changes in one tool, every connected system updates instantly.",
      },
      {
        label: "Validation",
        title: "Error-Proof Validation",
        description:
          "Duplicates caught, missing fields flagged, mismatches corrected automatically.",
      },
      {
        label: "Integration",
        title: "Works With Your Stack",
        description:
          "Excel, Xero, QuickBooks, Autocount, Shopify, HubSpot, and more. We connect what you already use.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Map every manual data touchpoint in your workflow.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Architect the flows: triggers, connections, validation rules. You approve.",
      },
      {
        number: "03",
        title: "Build & Test",
        description:
          "Integrate, run test data, verify accuracy. Nothing goes live until it's solid.",
      },
      {
        number: "04",
        title: "Go Live",
        description: "Deploy, train your team, monitor for 30 days.",
      },
    ],
    stats: [
      {
        value: "23hrs",
        label: "Weekly Time Lost",
        description:
          "Spent on manual data entry by Malaysian businesses (MDEC, 2023)",
      },
      {
        value: "90%",
        label: "Processing Reduction",
        description:
          "Reduction in processing time with automation (McKinsey)",
      },
      {
        value: "$12.6K",
        label: "Annual Cost Saved",
        description:
          "Per employee lost to data entry errors annually (Gartner)",
      },
    ],
    whyCards: [
      {
        title: "Reclaim Your Hours",
        description:
          "Every hour on data entry is an hour not spent on sales, service, or strategy.",
      },
      {
        title: "Scale Without Hiring",
        description:
          "Automation frees your team to do work that grows the business — without adding headcount.",
      },
    ],
    ctaHeadline: "Ready to stop copy-pasting?",
    ctaSubtitle:
      "Join the businesses that automated their data entry. Book your free workflow audit today.",
    ctaButtonText: "Book a Free Audit",
    tools: [
      "Excel",
      "Google Sheets",
      "SQL Database",
      "Xero",
      "QuickBooks",
      "Autocount",
      "Shopify",
      "Airtable",
      "HubSpot",
      "Notion",
    ],
  },

  "ai-document-processing": {
    slug: "ai-document-processing",
    badge: "Document AI",
    headline: "Your Inbox Shouldn't Be",
    headlineAccent: "a Filing Cabinet.",
    subtitle:
      "AI reads your invoices, POs, and receipts — extracts the data and routes it to the right system. No typing required.",
    ctaPrimary: "Let AI Handle the Paperwork",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/document processing.png",
    heroStats: [
      { value: "95%", label: "Extraction Accuracy" },
      { value: "60s", label: "Per Document" },
    ],
    overviewDescription:
      "Documents arrive via email, WhatsApp, and Drive. Staff open each one, read it, type details into another system, file it. We replace that entire process with AI that extracts, validates, and routes — in under 60 seconds.",
    overviewFeatures: [
      {
        title: "AI Extraction",
        description:
          "Reads PDFs, scanned docs, and photos. Extracts amounts, dates, names, and line items at 95%+ accuracy.",
      },
      {
        title: "Smart Routing",
        description:
          "Extracted data flows to the right system automatically — accounting, CRM, or approval channels.",
      },
    ],
    builtFor:
      "Finance teams, operations managers, procurement, and any business drowning in documents.",
    capabilities: [
      {
        label: "Extraction",
        title: "AI Extraction",
        description:
          "Reads PDFs, scanned docs, and photos. Extracts amounts, dates, names, and line items at 95%+ accuracy.",
      },
      {
        label: "Routing",
        title: "Smart Routing",
        description:
          "Extracted data flows to the right system automatically — accounting, CRM, or approval channels.",
      },
      {
        label: "Pipeline",
        title: "Zero Manual Input",
        description:
          "Receive, read, extract, validate, route, file. The full pipeline, no human touch.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Catalog every document type, source, and destination.",
      },
      {
        number: "02",
        title: "Train",
        description:
          "Configure AI for your formats. Test until accuracy exceeds 95%.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Wire the full pipeline and connect every system.",
      },
      {
        number: "04",
        title: "Go Live",
        description:
          "Deploy, monitor for 30 days, fine-tune as edge cases appear.",
      },
    ],
    stats: [
      {
        value: "60s",
        label: "Per Document",
        description:
          "Down from 15 minutes with AI processing (ABBYY)",
      },
      {
        value: "95%",
        label: "Extraction Accuracy",
        description: "At 100x the speed of manual entry (McKinsey)",
      },
      {
        value: "70%",
        label: "Time Reclaimed",
        description:
          "Of finance team time goes to manual document processing (Deloitte)",
      },
    ],
    whyCards: [
      {
        title: "Eliminate Data Entry",
        description:
          "For a 10-person team processing 200 documents weekly, that's 33+ hours of data entry eliminated entirely.",
      },
      {
        title: "Focus on Decisions",
        description:
          "AI handles the documents so your team focuses on decisions, not paperwork.",
      },
    ],
    ctaHeadline: "Ready to automate your documents?",
    ctaSubtitle:
      "Stop typing data from invoices. Let AI handle the paperwork.",
    ctaButtonText: "Let AI Handle the Paperwork",
    tools: [
      "Gmail",
      "Outlook",
      "Google Drive",
      "WhatsApp",
      "Xero",
      "QuickBooks",
      "Autocount",
      "SharePoint",
      "Notion",
      "Airtable",
    ],
  },

  "customer-workflows": {
    slug: "customer-workflows",
    badge: "Sales Automation",
    headline: "Every Lead Followed Up.",
    headlineAccent: "Every Time.",
    subtitle:
      "Instant responses, automatic qualification, relentless follow-up. Your sales team only talks to people ready to buy.",
    ctaPrimary: "Stop Losing Deals",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/customer workflows.png",
    heroStats: [
      { value: "78%", label: "First Responder Wins" },
      { value: "40%", label: "Higher Conversions" },
    ],
    overviewDescription:
      "Leads expect replies in minutes, not hours. Most SME sales teams are too busy to respond fast enough — leads go cold, deals are lost. We automate the top of your funnel: instant response, smart qualification, and follow-up until conversion.",
    overviewFeatures: [
      {
        title: "Instant Response",
        description:
          "Leads get a personalized reply within seconds via WhatsApp, email, or web.",
      },
      {
        title: "Auto Qualification",
        description:
          "System asks the right questions, scores leads, and categorizes them as hot, warm, or nurture.",
      },
    ],
    builtFor:
      "Sales teams, service businesses, agencies, and any SME where leads come in faster than the team can respond.",
    capabilities: [
      {
        label: "Response",
        title: "Instant Response",
        description:
          "Leads get a personalized reply within seconds via WhatsApp, email, or web — not a generic 'we'll get back to you.'",
      },
      {
        label: "Qualification",
        title: "Auto Qualification",
        description:
          "System asks the right questions, scores leads, and categorizes them as hot, warm, or nurture.",
      },
      {
        label: "Nurture",
        title: "Follow-Up Sequences",
        description:
          "Automated check-ins and content until they convert or opt out. No lead falls through the cracks.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Map",
        description:
          "Document every lead source and where they drop off.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Build qualification logic, templates, and sequences together.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Connect every lead source to CRM, WhatsApp, email, and calendar.",
      },
      {
        number: "04",
        title: "Optimize",
        description:
          "Monitor and refine monthly based on conversion data.",
      },
    ],
    stats: [
      {
        value: "78%",
        label: "First Responder Wins",
        description:
          "Of customers buy from the first responder (Harvard Business Review)",
      },
      {
        value: "50%",
        label: "More Sales-Ready Leads",
        description:
          "With automated nurturing sequences (Forrester)",
      },
      {
        value: "40%",
        label: "Higher Conversions",
        description:
          "Conversion rates with automated follow-ups (Salesforce)",
      },
    ],
    whyCards: [
      {
        title: "Revenue Protection",
        description:
          "Every unanswered inquiry is revenue lost. Automation gives you the responsiveness of a large sales team.",
      },
      {
        title: "Zero Additional Hires",
        description:
          "Get enterprise-level follow-up consistency without adding headcount.",
      },
    ],
    ctaHeadline: "Ready to close more deals?",
    ctaSubtitle:
      "Stop losing leads to slow follow-up. Automate your sales pipeline today.",
    ctaButtonText: "Stop Losing Deals",
    tools: [
      "HubSpot",
      "WhatsApp",
      "Gmail",
      "Google Sheets",
      "Slack",
      "Telegram",
      "Notion",
      "Airtable",
      "Excel",
    ],
  },

  "reporting-dashboards": {
    slug: "reporting-dashboards",
    badge: "Business Intelligence",
    headline: "Your Numbers,",
    headlineAccent: "Always Up to Date.",
    subtitle:
      "Live dashboards that pull from all your tools and update automatically. Decisions with today's data, not last week's.",
    ctaPrimary: "Stop Compiling. Start Deciding.",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/business-analytics-dashboard.png",
    heroStats: [
      { value: "23x", label: "Customer Acquisition" },
      { value: "5x", label: "Faster Decisions" },
    ],
    overviewDescription:
      "Sales in one spreadsheet, expenses in another, inventory in a third. Half a day compiling a report that's outdated by the time it's shared. We build dashboards that connect to your tools and update in real time — one place, always current.",
    overviewFeatures: [
      {
        title: "Live Data Feeds",
        description:
          "Dashboard pulls from Xero, Shopify, Google Sheets, HubSpot, SQL. Updates automatically.",
      },
      {
        title: "Single Source of Truth",
        description:
          "Sales, finance, ops, and marketing in one unified view.",
      },
    ],
    builtFor: "Business owners, finance teams, operations managers.",
    capabilities: [
      {
        label: "Data Feeds",
        title: "Live Data Feeds",
        description:
          "Dashboard pulls from Xero, Shopify, Google Sheets, HubSpot, SQL. Updates automatically.",
      },
      {
        label: "Unified View",
        title: "Single Source of Truth",
        description:
          "Sales, finance, ops, and marketing in one unified view.",
      },
      {
        label: "KPIs",
        title: "Custom KPIs & Alerts",
        description:
          "Metrics that matter to your business. Thresholds that notify you when numbers need attention.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "Identify data sources and the metrics that drive your decisions.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Wireframe layout, select visualizations, define KPIs. You approve.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Set up in Power BI or Looker Studio, connect sources, automate refresh.",
      },
      {
        number: "04",
        title: "Train",
        description:
          "Walk your team through it. Refine after 30 days based on actual usage.",
      },
    ],
    stats: [
      {
        value: "23x",
        label: "Customer Acquisition",
        description:
          "More likely to acquire customers with data-driven decisions (McKinsey)",
      },
      {
        value: "5x",
        label: "Faster Decisions",
        description:
          "Decision-making speed with real-time dashboards (HBR)",
      },
      {
        value: "8hrs",
        label: "Weekly Time Saved",
        description:
          "Spent compiling manual reports (Sage Research)",
      },
    ],
    whyCards: [
      {
        title: "From Reactive to Proactive",
        description:
          "Data locked in spreadsheets isn't useful. A live dashboard changes how you run your business.",
      },
      {
        title: "Unlock Hidden Data",
        description:
          "73% of business data goes unused because it's too hard to access. Dashboards fix that.",
      },
    ],
    ctaHeadline: "Ready to see your numbers in real time?",
    ctaSubtitle:
      "Stop compiling reports. Start making decisions with live data.",
    ctaButtonText: "Stop Compiling. Start Deciding.",
    tools: [
      "Power BI",
      "Google Looker Studio",
      "Excel",
      "Google Sheets",
      "Xero",
      "Shopify",
      "HubSpot",
      "SQL Database",
      "Airtable",
    ],
  },

  "invoice-payment-automation": {
    slug: "invoice-payment-automation",
    badge: "Finance Automation",
    headline: "Get Paid Faster.",
    headlineAccent: "Automatically.",
    subtitle:
      "Auto-generate invoices, send payment reminders on schedule, and reconcile bank deposits — without lifting a finger.",
    ctaPrimary: "Improve Your Cash Flow",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/invoice automation.png",
    heroStats: [
      { value: "30%", label: "Faster Collections" },
      { value: "12hrs", label: "Weekly Time Saved" },
    ],
    overviewDescription:
      "Invoices created manually, reminders sent inconsistently, reconciliation eating up hours weekly. Cash flow suffers. We automate the full cycle: invoices generate from orders, reminders send on schedule, deposits match to invoices automatically.",
    overviewFeatures: [
      {
        title: "Auto Invoice Generation",
        description:
          "Orders placed or milestones hit — invoices generate with correct line items, tax, and terms.",
      },
      {
        title: "Smart Reminders",
        description:
          "Professional reminders at 3 days before, on due date, and 7/14/30 days overdue. Paid invoices stop instantly.",
      },
    ],
    builtFor: "Finance teams, freelancers, service businesses.",
    capabilities: [
      {
        label: "Generation",
        title: "Auto Invoice Generation",
        description:
          "Orders placed or milestones hit — invoices generate with correct line items, tax, and terms.",
      },
      {
        label: "Reminders",
        title: "Smart Reminders",
        description:
          "Professional reminders at 3 days before, on due date, and 7/14/30 days overdue.",
      },
      {
        label: "Reconciliation",
        title: "Auto Reconciliation",
        description:
          "Bank deposits matched to invoices automatically. Partial payments and multi-invoice payments handled.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Review your invoicing flow: creation, reminders, reconciliation, delay points.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Define triggers, reminder schedules, escalation logic. You approve.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Connect order system, accounting, bank feeds, and communication channels.",
      },
      {
        number: "04",
        title: "Go Live",
        description:
          "Deploy, verify with live transactions, monitor 30 days.",
      },
    ],
    stats: [
      {
        value: "87%",
        label: "Late Payment Challenge",
        description:
          "Of Malaysian SMEs report late payments as a major challenge (SME Corp)",
      },
      {
        value: "30%",
        label: "Faster Collections",
        description:
          "Faster collections with payment automation (Xero)",
      },
      {
        value: "12hrs",
        label: "Weekly Time Saved",
        description:
          "Spent on manual reconciliation every week (Deloitte)",
      },
    ],
    whyCards: [
      {
        title: "Cash Flow Is Oxygen",
        description:
          "Automation shortens the gap between doing the work and getting paid for it.",
      },
      {
        title: "Professional Collections",
        description:
          "Consistent, timely reminders without the awkwardness of chasing payments manually.",
      },
    ],
    ctaHeadline: "Ready to get paid faster?",
    ctaSubtitle:
      "Automate your invoicing and stop chasing payments. Book your free audit today.",
    ctaButtonText: "Improve Your Cash Flow",
    tools: [
      "Xero",
      "QuickBooks",
      "Autocount",
      "Excel",
      "Google Sheets",
      "WhatsApp",
      "Gmail",
      "Outlook",
      "Shopify",
    ],
  },

  "whatsapp-business-automation": {
    slug: "whatsapp-business-automation",
    badge: "WhatsApp Automation",
    headline: "Turn WhatsApp Into",
    headlineAccent: "Your Sales Machine.",
    subtitle:
      "Automate replies, orders, bookings, and broadcasts — on the channel your customers already use.",
    ctaPrimary: "Automate Your WhatsApp",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/our-services-whatsapp automation.png",
    heroStats: [
      { value: "98%", label: "Open Rates" },
      { value: "40%", label: "Faster Response" },
    ],
    overviewDescription:
      "In Malaysia, WhatsApp is where business happens. But managing hundreds of conversations manually means missed messages, lost orders, and burnt-out staff. We automate FAQ replies, order processing, reminders, and broadcasts — your team handles only what needs a human touch.",
    overviewFeatures: [
      {
        title: "Smart Auto-Replies",
        description:
          "Keyword-triggered answers to pricing, availability, hours, location. Instant, 24/7.",
      },
      {
        title: "Order Pipeline",
        description:
          "WhatsApp orders flow directly into your POS/inventory. Confirmations send automatically.",
      },
    ],
    builtFor:
      "Retail, F&B, clinics, salons, and any business where WhatsApp is a primary channel.",
    capabilities: [
      {
        label: "Auto-Reply",
        title: "Smart Auto-Replies",
        description:
          "Keyword-triggered answers to pricing, availability, hours, location. Instant, 24/7.",
      },
      {
        label: "Orders",
        title: "Order Pipeline",
        description:
          "WhatsApp orders flow directly into your POS/inventory. Confirmations send automatically.",
      },
      {
        label: "Broadcasts",
        title: "Broadcasts & Reminders",
        description:
          "Targeted promos to segmented lists. Appointment and delivery reminders on schedule.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Analyze top 20 questions, order flow, and reminder needs.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Build conversation flows, auto-reply logic, and segments. You test everything.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Set up WhatsApp Business API, connect CRM/POS/inventory.",
      },
      {
        number: "04",
        title: "Launch",
        description:
          "Go live, monitor quality, refine based on real conversations.",
      },
    ],
    stats: [
      {
        value: "98%",
        label: "Malaysian Adoption",
        description:
          "Of Malaysians use WhatsApp (DataReportal 2024)",
      },
      {
        value: "40%",
        label: "Faster Response",
        description:
          "Response time improvement with automation (Meta Business)",
      },
      {
        value: "98%",
        label: "Open Rates",
        description:
          "On WhatsApp vs. 20% for email (WhatsApp Business)",
      },
    ],
    whyCards: [
      {
        title: "Meet Customers Where They Are",
        description:
          "Your customers are already messaging you on WhatsApp. Automate it for fast, consistent experience.",
      },
      {
        title: "Scale Without Burnout",
        description:
          "Handle hundreds of conversations without burning out your staff.",
      },
    ],
    ctaHeadline: "Ready to automate WhatsApp?",
    ctaSubtitle:
      "Turn your busiest channel into your most efficient one. Book a free audit.",
    ctaButtonText: "Automate Your WhatsApp",
    tools: [
      "WhatsApp",
      "HubSpot",
      "Shopify",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Slack",
      "Gmail",
    ],
  },

  "inventory-management": {
    slug: "inventory-management",
    badge: "Inventory Control",
    headline: "Never Run Out.",
    headlineAccent: "Never Overstock.",
    subtitle:
      "Real-time stock sync across every channel. Automatic alerts. Automatic reorders. No spreadsheet counts.",
    ctaPrimary: "Get Full Inventory Control",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/inventory management.png",
    heroStats: [
      { value: "50%", label: "Fewer Stockouts" },
      { value: "65%", label: "Fewer Cancellations" },
    ],
    overviewDescription:
      "Shopify says in stock, Lazada says sold out, the warehouse spreadsheet says something else. Reorders happen too late, stockouts lose sales, overstocking wastes cash. We sync your inventory across every channel in real time with automatic alerts and reorder triggers.",
    overviewFeatures: [
      {
        title: "Real-Time Sync",
        description:
          "One sale updates stock across Shopify, Lazada, POS, and your master sheet instantly.",
      },
      {
        title: "Smart Alerts",
        description:
          "WhatsApp/email/Slack notification when stock hits reorder point. Per-product thresholds.",
      },
    ],
    builtFor:
      "E-commerce, multi-channel retailers, distributors, F&B.",
    capabilities: [
      {
        label: "Sync",
        title: "Real-Time Sync",
        description:
          "One sale updates stock across Shopify, Lazada, POS, and your master sheet instantly.",
      },
      {
        label: "Alerts",
        title: "Smart Alerts",
        description:
          "WhatsApp/email/Slack notification when stock hits reorder point. Per-product thresholds.",
      },
      {
        label: "Reorder",
        title: "Auto Reorder",
        description:
          "Purchase orders generated and suppliers notified automatically when stock drops below threshold.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Map where inventory lives and identify sync gaps.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Define sync logic, thresholds, alerts, and supplier workflows.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Connect all channels and systems into one real-time pipeline.",
      },
      {
        number: "04",
        title: "Calibrate",
        description:
          "Verify accuracy, fine-tune reorder points over 30 days based on sales velocity.",
      },
    ],
    stats: [
      {
        value: "50%",
        label: "Fewer Stockouts",
        description:
          "With automated inventory management (Aberdeen Group)",
      },
      {
        value: "65%",
        label: "Fewer Cancellations",
        description:
          "Order cancellations with multi-channel sync (Shopify)",
      },
      {
        value: "$1T",
        label: "Global Lost Sales",
        description:
          "In lost sales globally from stockouts (IHL Group)",
      },
    ],
    whyCards: [
      {
        title: "Cash on Shelves",
        description:
          "Inventory is cash on shelves. Real-time visibility is the difference between growing profitably and firefighting.",
      },
      {
        title: "Multi-Channel Confidence",
        description:
          "Sell on every platform knowing your stock numbers are always accurate.",
      },
    ],
    ctaHeadline: "Ready for real-time inventory?",
    ctaSubtitle:
      "Stop counting spreadsheets. Get full inventory control across every channel.",
    ctaButtonText: "Get Full Inventory Control",
    tools: [
      "Shopify",
      "Excel",
      "Google Sheets",
      "WhatsApp",
      "Slack",
      "Airtable",
      "SQL Database",
      "Notion",
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    badge: "Email Automation",
    headline: "Send Smarter Emails.",
    headlineAccent: "Automatically.",
    subtitle:
      "Auto-segmented audiences, behavior-triggered campaigns, and revenue tracking that shows what actually works.",
    ctaPrimary: "Drive More Revenue From Email",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/service-email-marketing-v3.png",
    heroStats: [
      { value: "$36", label: "ROI Per Dollar" },
      { value: "760%", label: "More Revenue" },
    ],
    overviewDescription:
      "Same email to everyone. Low open rates. No idea what drives sales. We build systems that segment by behavior, trigger campaigns automatically (cart recovery, welcome, win-back), and track every email to revenue.",
    overviewFeatures: [
      {
        title: "Smart Segmentation",
        description:
          "Auto-grouped by purchase history, behavior, and lifecycle stage. No manual list management.",
      },
      {
        title: "Triggered Campaigns",
        description:
          "Welcome series, cart recovery, post-purchase, win-back, re-engagement. All behavior-triggered.",
      },
    ],
    builtFor:
      "E-commerce, SaaS, service providers, and any SME with an email list they're underusing.",
    capabilities: [
      {
        label: "Segmentation",
        title: "Smart Segmentation",
        description:
          "Auto-grouped by purchase history, behavior, and lifecycle stage. No manual list management.",
      },
      {
        label: "Campaigns",
        title: "Triggered Campaigns",
        description:
          "Welcome series, cart recovery, post-purchase, win-back, re-engagement. All behavior-triggered.",
      },
      {
        label: "Attribution",
        title: "Revenue Attribution",
        description:
          "See which campaigns generate revenue, which segments convert, which emails are dead weight.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "Review list quality, segmentation, campaign history, deliverability.",
      },
      {
        number: "02",
        title: "Strategy",
        description:
          "Design segments, flows, templates, and measurement. You approve.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Set up everything, connect revenue tracking, launch in phases.",
      },
      {
        number: "04",
        title: "Optimize",
        description:
          "A/B test and refine monthly based on real performance.",
      },
    ],
    stats: [
      {
        value: "$36",
        label: "ROI Per Dollar",
        description:
          "For every $1 spent — highest of any channel (Litmus)",
      },
      {
        value: "760%",
        label: "More Revenue",
        description:
          "From segmented vs. blast campaigns (Campaign Monitor)",
      },
      {
        value: "624%",
        label: "Higher Conversion",
        description:
          "From triggered vs. broadcast emails (Omnisend)",
      },
    ],
    whyCards: [
      {
        title: "Own Your Audience",
        description:
          "Your email list is a marketing asset you own. Unlike social media, no algorithm controls your reach.",
      },
      {
        title: "Repeat Buyers",
        description:
          "Automated email is the most cost-effective way to turn existing customers into repeat buyers.",
      },
    ],
    ctaHeadline: "Ready to unlock email revenue?",
    ctaSubtitle:
      "Stop blasting the same email to everyone. Start sending smarter.",
    ctaButtonText: "Drive More Revenue From Email",
    tools: [
      "Gmail",
      "HubSpot",
      "Shopify",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Slack",
    ],
  },

  "lead-management": {
    slug: "lead-management",
    badge: "Lead Management",
    headline: "Never Lose",
    headlineAccent: "a Lead Again.",
    subtitle:
      "Every inquiry captured, scored, and followed up. Scattered leads become an organized, automated pipeline.",
    ctaPrimary: "Close More Deals",
    ctaSecondary: "View Architecture",
    heroImage: "/images/acceptable/Our services/sales-pipeline-strategy.png",
    heroStats: [
      { value: "9x", label: "More Likely to Convert" },
      { value: "10%", label: "Revenue Increase" },
    ],
    overviewDescription:
      "Leads from Facebook, Google, WhatsApp, your website — scattered across inboxes, chats, and memory. Hot leads go cold, warm leads get ignored. We centralize everything into one system with scoring and automated follow-up.",
    overviewFeatures: [
      {
        title: "Universal Capture",
        description:
          "Web forms, ads, WhatsApp, email, calls — all feed into one CRM. No more lost leads.",
      },
      {
        title: "Auto Scoring",
        description:
          "Leads ranked by engagement, fit, and intent. Hottest leads at the top.",
      },
    ],
    builtFor:
      "Sales teams, agencies, professional services, real estate, education providers.",
    capabilities: [
      {
        label: "Capture",
        title: "Universal Capture",
        description:
          "Web forms, ads, WhatsApp, email, calls — all feed into one CRM. No more lost leads.",
      },
      {
        label: "Scoring",
        title: "Auto Scoring",
        description:
          "Leads ranked by engagement, fit, and intent. Hottest leads at the top.",
      },
      {
        label: "Nurture",
        title: "Nurture & Handoff",
        description:
          "Hot leads get instant team alerts. Warm leads enter sequences. Cold leads get drip campaigns.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Map",
        description:
          "Identify every lead source and where they get lost.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Build scoring model, sequences, and handoff rules together.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "Connect all sources to CRM, set up scoring and nurture flows.",
      },
      {
        number: "04",
        title: "Refine",
        description:
          "Monthly reviews adjust scoring and content based on real conversion data.",
      },
    ],
    stats: [
      {
        value: "79%",
        label: "Leads Never Convert",
        description:
          "Mainly due to lack of follow-up (MarketingSherpa)",
      },
      {
        value: "9x",
        label: "More Likely to Convert",
        description:
          "When contacted within 5 minutes (InsideSales)",
      },
      {
        value: "10%",
        label: "Revenue Increase",
        description:
          "Within 6–9 months of automating lead management (Gartner)",
      },
    ],
    whyCards: [
      {
        title: "Maximize Ad Spend",
        description:
          "You're already spending on ads and marketing. A lead management system makes sure those leads actually convert.",
      },
      {
        title: "Highest-ROI Investment",
        description:
          "The highest-ROI investment in your sales process — turning existing leads into closed deals.",
      },
    ],
    ctaHeadline: "Ready to close more deals?",
    ctaSubtitle:
      "Stop losing leads to disorganization. Build your automated pipeline today.",
    ctaButtonText: "Close More Deals",
    tools: [
      "HubSpot",
      "WhatsApp",
      "Gmail",
      "Google Sheets",
      "Slack",
      "Telegram",
      "Notion",
      "Airtable",
      "Excel",
    ],
  },
};
