# Actrivo Strategic Plan — Q2-Q4 2026
**Created:** April 2026
**Updated:** April 2026 (v2 — restructured phases with internal tooling first)

---

## WHERE YOU ARE TODAY

### What You Have
- A professional website (live, multi-page, well-designed)
- 2 real clients with work in progress:
  - **Pikzern** — Excel automation (data entry)
  - **Ecolife** — Chatbot + Google Sheets automation
- Technical capability to deliver (Make.com, n8n, AI chatbots)
- Clear positioning: AI automation for Malaysian SMEs

### What's Missing
- Pikzern and Ecolife work not fully complete / case-study-ready
- No pricing set (RM X,XXX placeholders on website)
- No internal tools to run Actrivo efficiently
- No case studies, social presence, or content engine
- No recurring revenue

### The Core Insight
**You can't sell efficiency if you're not efficient yourself.** Build your own internal agents first → prove they work → use them as case studies → then scale outward.

---

## THE PLAN: 5 PHASES

---

## PHASE 1: COMPLETE CLIENT WORK + LOCK FOUNDATIONS (Weeks 1-3)
*Goal: Finish what you started, set the basics so nothing is half-done*

### 1.1 Complete Pikzern & Ecolife Deliverables (Week 1-2)
These are your first 2 clients. Delivering excellent results here is non-negotiable — everything else depends on it.

- **Pikzern:** Finalize Excel automation, test edge cases, document the workflow, hand over
- **Ecolife:** Finalize chatbot + Google Sheets automation, test, document, hand over
- For each: collect measurable results (hours saved, error rate, speed improvement)
- Ask for a testimonial quote (even 1 sentence)

### 1.2 Set Your Pricing (Day 1-2)

| Tier | Price | Scope |
|------|-------|-------|
| **Starter** | From RM 3,500 | 1 workflow, 3 integrations |
| **Growth** | From RM 7,500 | Up to 3 workflows, 6 integrations |
| **Custom** | From RM 15,000+ | Unlimited workflows |
| **Retainer** | RM 500-2,000/month | Optional monitoring + optimization |

Update the RM X,XXX placeholders on the pricing page.

### 1.3 Basic Business Presence (Week 1)
- [ ] Professional email (hello@actrivo.com)
- [ ] WhatsApp Business account for Actrivo
- [ ] LinkedIn company page
- [ ] Facebook business page
- [ ] Update placeholder social links on website

### 1.4 Write Case Studies (Week 2-3)
Once Pikzern & Ecolife are delivered:
- Replace internal pilot projects on /work page with real case studies
- Include: problem → solution → tools used → measurable results → client quote

**Phase 1 Deliverables:**
- [ ] Pikzern project fully delivered
- [ ] Ecolife project fully delivered
- [ ] 2 testimonials collected
- [ ] Pricing live on website
- [ ] Professional email + WhatsApp + socials set up
- [ ] 2 real case studies on /work page

---

## PHASE 2: BUILD INTERNAL AGENTS (Weeks 4-8)
*Goal: Automate Actrivo's own operations — eat your own dog food*

This is the phase most agencies skip. By building internal tools first, you:
- **Prove your skills** on real problems (your own)
- **Create case studies** ("We use the same tools we build for clients")
- **Increase your capacity** so you can handle more clients without burning out
- **Demo live tools** during sales calls instead of talking theoretically

### 2.1 SEO Research & Strategy Agent
**Problem it solves:** You need to compete with The Crunch (50+ articles) but don't have time to manually research keywords, analyze competitors, and plan content.

**What it does:**
- Monitors competitor blog content (The Crunch, Flow Digital) for new articles
- Identifies keyword gaps and opportunities (what they rank for, what they don't)
- Generates monthly SEO reports: suggested topics, keyword difficulty, search volume
- Tracks Actrivo's own ranking progress over time

**Tech:** n8n + Google Search Console API + SEMrush/Ahrefs API (or free alternatives) + Claude API for analysis

### 2.2 Content Generator Agent
**Problem it solves:** You need 2 blog articles/month + 2-3 LinkedIn posts/week but writing takes hours.

**What it does:**
- Takes a topic/keyword → generates a full blog draft tailored to Malaysian SME audience
- Includes ringgit amounts, WhatsApp references, local examples automatically
- Generates LinkedIn post variations from blog content
- Creates WhatsApp broadcast message versions
- Maintains brand voice consistency (references Actrivo's tone and positioning)

**Tech:** n8n/Make + Claude API + blog-data.ts integration (auto-populate blog entries)

**Important:** AI-generated content is a starting point — always review and add personal insights before publishing.

### 2.3 Workflow Audit / Identifier Agent
**Problem it solves:** During free audit calls, you manually map out client processes. This takes time and the output is inconsistent.

**What it does:**
- Client describes their pain point (text/voice input)
- AI identifies the manual steps, bottlenecks, and inefficiencies
- Generates a visual before/after workflow diagram (Mermaid.js or similar)
- Suggests which Actrivo service package fits
- Estimates time/cost savings
- Outputs a professional PDF audit report

**Tech:** n8n + Claude API + Mermaid.js for diagrams + PDF generation

**Dual use:** Internal sales tool NOW → productize as client-facing tool LATER (Phase 5+)

### 2.4 Lead Generation Agent
**Problem it solves:** Manually searching for potential clients is slow. You need a pipeline of Malaysian SMEs who might need automation.

**What it does:**
- Scrapes/monitors Malaysian business directories, LinkedIn, Facebook groups for SMEs expressing pain points (manual work, hiring admin staff, complaints about repetitive tasks)
- Identifies businesses in your target vertical that show automation readiness signals
- Enriches leads with company info, contact details, estimated size
- Scores leads by likelihood to need automation
- Delivers a weekly shortlist of top prospects to your WhatsApp/email

**Tech:** n8n + LinkedIn API / web scraping + Claude API for scoring + WhatsApp notification

### 2.5 Proposal & Invoice Generator
**Problem it solves:** Writing custom proposals for each client is time-consuming. Invoicing is manual.

**What it does:**
- Takes audit results → generates a professional proposal with scope, timeline, pricing, and expected ROI
- Auto-populates from Actrivo's service packages and pricing
- Generates invoices and tracks payment status
- Sends automated payment reminders via WhatsApp/email

**Tech:** n8n/Make + Google Docs API (or PDF templates) + Xero/accounting integration + WhatsApp API

### 2.6 Competitor Monitor Agent
**Problem it solves:** You need to know what competitors are doing but don't have time to check their websites weekly.

**What it does:**
- Monitors competitor websites (The Crunch, Flow Digital, Brew Interactive, etc.) for changes
- Alerts you when competitors publish new content, change pricing, or launch new services
- Monthly summary report: what competitors did, what keywords they targeted, any market shifts

**Tech:** n8n + web scraping/change detection + Claude API for analysis + email/WhatsApp alerts

### Priority Order for Building

| Priority | Agent | Time to Build | Impact |
|----------|-------|--------------|--------|
| 1 | **Workflow Audit Agent** | 1-2 weeks | HIGH — immediately useful in sales calls, most impressive to demo |
| 2 | **Content Generator** | 1 week | HIGH — unblocks your entire content strategy |
| 3 | **Proposal Generator** | 3-5 days | MEDIUM — saves time per client, looks professional |
| 4 | **Lead Generation Agent** | 1-2 weeks | HIGH — feeds your client pipeline |
| 5 | **SEO Research Agent** | 1 week | MEDIUM — informs content strategy |
| 6 | **Competitor Monitor** | 3-5 days | LOW-MEDIUM — nice to have, not urgent |

**Phase 2 Deliverables:**
- [ ] Workflow Audit Agent built and tested
- [ ] Content Generator Agent built and tested
- [ ] Proposal Generator built and tested
- [ ] Lead Generation Agent built and tested
- [ ] SEO Research Agent built and tested
- [ ] Competitor Monitor Agent built and tested
- [ ] All agents documented as internal case studies ("we use what we sell")

---

## PHASE 3: GET YOUR NEXT 3-5 CLIENTS (Weeks 9-13)
*Goal: Use your internal agents to efficiently acquire and deliver for new clients*

Now you have real tools to accelerate client acquisition. This phase should be faster than if you'd tried it without internal agents.

### 3.1 Referrals from Pikzern & Ecolife
- Ask for referrals with incentive (10% off next project or free workflow addition)
- Personal referrals convert 3-5x better than cold outreach

### 3.2 Outreach Using Lead Generation Agent
- Your lead gen agent feeds you qualified prospects weekly
- Send personal WhatsApp/LinkedIn messages to top prospects
- Use the Workflow Audit Agent during free audit calls to impress
- Use the Proposal Generator to send professional proposals same-day

### 3.3 Pick ONE Vertical Niche

| Vertical | Why | Entry Offer |
|----------|-----|-------------|
| **E-commerce / Online sellers** | Huge in MY, clear pain points | Order processing + inventory sync |
| **Clinics / Salons** | WhatsApp-heavy, hate admin | Booking + reminders + follow-ups |
| **F&B** | Growing in MY, inventory pain | POS → inventory → supplier ordering |
| **Accounting firms** | Excel automation skill applies directly | Data entry + invoice processing |
| **Property agents** | Lead management pain | Lead capture → qualification → follow-up |

**Recommendation:** Start with whatever vertical Pikzern or Ecolife belongs to.

### 3.4 Pilot Pricing for Case Studies
- Offer first 3-5 new clients: RM 2,000 (normally RM 3,500) in exchange for testimonial + case study permission
- Stop discounting after 5 case studies total

### 3.5 Government Grant Angle
- Research SME Digitalisation Grant application process
- Market: "Your automation could be 50% subsidized by the government"
- Align Starter tier with the RM5K grant threshold

**Phase 3 Deliverables:**
- [ ] Referrals requested from Pikzern & Ecolife
- [ ] Lead Gen Agent producing weekly prospect lists
- [ ] Workflow Audit Agent used in 5+ audit calls
- [ ] ONE vertical chosen
- [ ] 3-5 new clients acquired
- [ ] 5 total case studies on website

---

## PHASE 4: BUILD YOUR CONTENT ENGINE (Weeks 14-20)
*Goal: Start generating inbound leads so you're not dependent on outreach*

**Only start this after you have 5+ case studies.** Content without proof is noise.

### 4.1 SEO Blog Strategy (2 articles/month)
Use your Content Generator Agent + SEO Research Agent to produce and optimize.

| Priority | Keyword Target | Article Idea |
|----------|---------------|--------------|
| 1 | "automate data entry Malaysia SME" | How We Saved [Client] 8 Hours/Week on Data Entry |
| 2 | "WhatsApp business automation Malaysia" | 5 WhatsApp Automations Every Malaysian SME Needs |
| 3 | "invoice automation Malaysia" | Stop Chasing Payments: Automated Invoicing for SMEs |
| 4 | "SME Digitalisation Grant automation" | How to Use the Government Grant for AI Automation |
| 5 | "n8n automation Malaysia" | Why We Use n8n for Malaysian Businesses |
| 6 | "Excel automation Malaysia business" | Still Copy-Pasting from Excel? Here's a Better Way |

### 4.2 LinkedIn Content (2-3 posts/week)
- Content Generator produces drafts → you add personal insights
- Share real automation stories from clients
- Before/after screenshots (redacted if needed)
- Malaysian business context — not generic AI hype

### 4.3 WhatsApp Broadcast List
- Collect contacts from every lead/prospect/audit call
- Monthly automation tips + case study highlights
- 98% open rate in Malaysia — more effective than email

### 4.4 Promote Free Audit with Workflow Audit Agent
- "Send 'AUDIT' to [WhatsApp number] to book your free automation audit"
- Use the Workflow Audit Agent to deliver a premium experience
- The audit IS your sales process

**Phase 4 Deliverables:**
- [ ] 4-8 blog articles published (using Content Generator)
- [ ] LinkedIn posting cadence established (2-3/week)
- [ ] WhatsApp broadcast list started (50+ contacts)
- [ ] Inbound leads starting to come in (target: 2-3/month)

---

## PHASE 5: SCALE & DIFFERENTIATE (Months 6-8)
*Goal: Move from "getting clients" to "choosing clients"*

### 5.1 Launch Recurring Revenue — "Automation Care Plan"

| Plan | Price | Includes |
|------|-------|---------|
| Basic | RM 500/month | Monitoring, bug fixes, email support |
| Standard | RM 1,000/month | + monthly optimization, 1 workflow tweak/month |
| Premium | RM 2,000/month | + quarterly review, priority support, new additions |

Target: 10 clients on RM1K/month = RM10K/month guaranteed income.

### 5.2 Productized Vertical Packages
- "The [Vertical] Automation Kit" — fixed scope, fixed price, repeatable delivery
- Example: "E-commerce Automation Kit — RM 5,000" (order processing + inventory + shipping + WhatsApp)

### 5.3 Explore ONE New Service Line

| Option | Investment | First Mover in MY? |
|--------|-----------|-------------------|
| **AI Voice Agents** (Vapi/Retell) | Medium | Yes — nobody offers this |
| **AI Employee positioning** | Low (rebranding) | Yes — untapped framing |
| **Client-facing Workflow Audit Tool** | Medium | Yes — productize your internal tool |

### 5.4 Partnership Strategy
- **n8n training providers** (thelead.io, KursusAI) → they train, you implement
- **Accounting firms** → they see clients drowning in manual work daily
- **Web developers** → they build websites but can't do automation

**Phase 5 Deliverables:**
- [ ] Recurring revenue model launched
- [ ] 1 productized vertical package created
- [ ] 1 new service line explored/piloted
- [ ] 2-3 referral partnerships established
- [ ] Monthly recurring revenue: RM 8,000+

---

## PRIORITY MATRIX

If you're overwhelmed, follow this exact order:

### THIS WEEK
1. Complete Pikzern deliverables
2. Complete Ecolife deliverables
3. Set pricing on website
4. Set up professional email + WhatsApp Business

### NEXT 2 WEEKS
5. Collect testimonials from Pikzern & Ecolife
6. Write 2 case studies → update /work page
7. Create LinkedIn + Facebook pages
8. Start building Workflow Audit Agent

### NEXT MONTH
9. Build Content Generator Agent
10. Build Lead Generation Agent
11. Build Proposal Generator

### MONTH 2-3
12. Start outreach using your agents
13. Get 3-5 new clients
14. Begin content publishing

### Everything else waits.

---

## INTERNAL AGENTS SUMMARY

| # | Agent | What It Does | Priority |
|---|-------|-------------|----------|
| 1 | **Workflow Audit Agent** | Client describes pain → generates visual before/after workflow + savings estimate + PDF report | Build first |
| 2 | **Content Generator** | Topic → blog draft + LinkedIn posts + WhatsApp broadcast, all in Actrivo's voice | Build second |
| 3 | **Proposal Generator** | Audit results → professional proposal with scope, timeline, pricing, ROI | Build third |
| 4 | **Lead Generation Agent** | Monitors directories/LinkedIn/groups → weekly qualified prospect shortlist | Build fourth |
| 5 | **SEO Research Agent** | Monitors competitors, identifies keyword gaps, suggests topics | Build fifth |
| 6 | **Competitor Monitor** | Tracks competitor website changes, new content, pricing shifts | Build sixth |

---

## METRICS TO TRACK

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Active clients | 2 (delivered) | 7 | 15 |
| Case studies on website | 2 | 5 | 8+ |
| Internal agents built | 2 | 5 | 6 |
| Monthly recurring revenue | RM 0 | RM 2,000 | RM 8,000 |
| Blog articles published | 0 | 4 | 10+ |
| Inbound leads/month | 0 | 2 | 5+ |
| LinkedIn followers | 50 | 200 | 500 |

---

## WHAT NOT TO SPEND TIME ON RIGHT NOW

- Paid ads (need case studies first)
- Chasing enterprise/government clients
- Building a proprietary SaaS platform
- Hiring staff
- Redesigning the website (it's already good)
- Video content (too time-consuming at this stage)
- Competing with The Crunch on chatbot SEO volume

---

## ONE-LINE SUMMARY

**Finish your current clients, build internal agents to prove your skills and boost your efficiency, then use those tools to acquire and serve the next wave of clients.**
