# Actrivo Strategic Plan — Q2-Q4 2026
**Created:** April 2026
**Updated:** April 2026 (v4 — All-code architecture, Inngest replaces n8n, 100% vibe-codable)

---

## WHERE YOU ARE TODAY

### What You Have
- A professional website (live, multi-page, well-designed)
- 2 real clients with work in progress:
  - **Pikzern** — Excel automation (data entry)
  - **Ecolife** — Chatbot + Google Sheets automation
- Technical capability to deliver (Make.com, n8n, AI chatbots)
- Clear positioning: AI automation for Malaysian SMEs
- Team of 2-3 people
- Claude Code for vibe-coding the entire stack

### What's Missing
- Pikzern and Ecolife work not fully complete / case-study-ready
- No pricing set (RM X,XXX placeholders on website)
- No internal tools to run Actrivo efficiently — everything manual
- No case studies, social presence, or content engine
- No recurring revenue
- No visibility into workflow health (client automations run blind)
- No dashboard, no pipeline tracking, no agent infrastructure

### The Core Insight
**You can't scale a services agency by doing everything manually.** Build a command center that houses all your internal agents, monitors client workflows, and manages your pipeline. Keep everything in one codebase, one language (TypeScript), so Claude Code can vibe-code the entire system.

---

## THE VISION

### Phase A: Actrivo Command Center (Internal)
A dashboard for the Actrivo team that acts as mission control:
- See all client workflows and their health (runs, errors, status)
- Manage AI agents (lead gen, content, SEO, proposals) from one place
- Track tasks, pipeline, and revenue
- Get real-time alerts when something breaks

### Phase B: Client Dashboard (External)
Clients log in through Actrivo and see their own workflows:
- Pikzern sees: Invoice Automation (status, metrics), Order Automation (status, metrics)
- Ecolife sees: Stock Management (status, metrics), SEO Audit (status, metrics)
- Each automation shows high-level summary → drill down to detailed dashboard
- Workflows built for one client become templates deployable to new clients

### Why This Model Wins
1. **Visibility** — clients see their automations working (builds trust + reduces support requests)
2. **Scalability** — workflow templates mean new clients get 80% of the work pre-built
3. **Recurring revenue** — dashboard access justifies monthly retainer fees
4. **Competitive differentiation** — no Malaysian competitor offers a client portal for automation visibility
5. **Proof of skill** — "We use the same tools we build for you"

### Why All-Code (No n8n)
n8n workflows are JSON files designed for a visual editor. For a team using Claude Code:
- **Claude Code can't interact with n8n's visual UI** — it would be the one thing you build manually
- **n8n JSON diffs are unreadable** — no meaningful code review in PRs
- **n8n workflows can't be unit tested** — no automated testing possible
- **Self-hosted n8n costs 10-20 hrs/month in DevOps** — Docker, PostgreSQL, memory tuning, upgrades
- **Inngest runs inside your Next.js app** — same repo, same deploy, same language, 100% vibe-codable

---

## THE PLAN: 5 PHASES

---

## PHASE 1: LOCK FOUNDATIONS (Weeks 1-2)
*Goal: Set the basics so nothing is half-done. Continue Pikzern & Ecolife in parallel.*

Pikzern and Ecolife delivery runs **continuously in parallel** with all other phases — not as a blocker.

### 1.1 Set Your Pricing (Day 1-2)

| Tier | Price | Scope |
|------|-------|-------|
| **Starter** | From RM 3,500 | 1 workflow, 3 integrations |
| **Growth** | From RM 7,500 | Up to 3 workflows, 6 integrations |
| **Custom** | From RM 15,000+ | Unlimited workflows |
| **Retainer** | RM 500-2,000/month | Monitoring + optimization + dashboard access |

Update the RM X,XXX placeholders on the pricing page.

### 1.2 Basic Business Presence (Week 1)
- [ ] Professional email (hello@actrivo.com)
- [ ] WhatsApp Business account for Actrivo
- [ ] LinkedIn company page
- [ ] Facebook business page
- [ ] Update placeholder social links on website

### 1.3 Technical Setup (Week 1-2)
- [ ] Create Supabase project (database + auth for dashboard)
- [ ] Scaffold dashboard repo (separate Next.js app with Inngest)
- [ ] Set up Claude API access (Anthropic SDK)
- [ ] Domain for dashboard (e.g., app.actrivo.com)
- [ ] Set up Resend account (email sending)

### 1.4 Plan Internal Tools (Week 1)
Instead of buying SaaS tools, build them yourself. Everything is TypeScript in one codebase:
- [ ] **CRM/Pipeline** — Next.js UI + Supabase. Pure CRUD + kanban
- [ ] **Invoicing** — Next.js UI + PDF generation. Inngest for automated reminders
- [ ] **Scheduling** — Next.js UI + Google Calendar API. Inngest for confirmations
- [ ] **Project tracking** — Next.js UI + Supabase. Kanban + task lists

*Why build instead of buy: RM 0/month instead of RM 500+/month in SaaS fees. Proves your own skills. Becomes a case study ("we run our own business on automations we built"). Full control. 100% vibe-codable with Claude Code.*

**Phase 1 Deliverables:**
- [ ] Pricing live on website
- [ ] Professional email + WhatsApp + socials set up
- [ ] Supabase project created
- [ ] Dashboard repo scaffolded with Inngest configured
- [ ] Internal tool requirements mapped out

---

## PHASE 2: COMMAND CENTER MVP + FIRST AGENTS (Weeks 3-6)
*Goal: Build the internal dashboard and the first 3 high-impact agents*

This is the most important phase. Split into two parallel work streams.

### Stream A: Dashboard (2 people, 4 weeks)

**Tech Stack:**
- Next.js 15+ App Router (separate repo from landing page)
- shadcn/ui + Tailwind v4 + Recharts for charts
- Supabase (PostgreSQL + real-time + auth)
- Inngest (background jobs, scheduled tasks, durable workflows)
- Deploy to Cloudflare Pages (app.actrivo.com)

**Week 3-4: Core Shell**
- Team auth (Supabase Auth — email/password)
- Layout: sidebar navigation + main content area
- Agent Health widget:
  - Execution success/failure rates (per agent, per client)
  - Recent errors with context
  - 7-day execution history chart
  - Auto-refresh via Supabase real-time
  - Color-coded health indicators (green/amber/red)

**Week 5: Task & Agent Management**
- Tasks Requiring Attention widget:
  - Urgent client issues (auto-created from Inngest function failures)
  - Follow-ups due today/overdue
  - Manual task input
  - Priority tagging (critical/high/medium/low)
- Agent Status Board:
  - Each agent: status (running/idle/error)
  - Last run timestamp
  - Runs today/this week
  - Quick trigger button to run agent manually (calls Inngest event)

**Week 6: Pipeline**
- Lead Pipeline kanban:
  - Stages: Contact → Discovery → Proposal → Negotiation → Closed Won/Lost
  - Drag-and-drop cards
  - Days in current stage indicator
  - Deal value on each card
  - Click to expand: contact info, notes, next action

### Stream B: First 3 Agents (1 person, 4 weeks)

All agents are Inngest functions in `src/lib/inngest/`. Claude Code vibe-codes each one.

#### Agent #1: Workflow Error Monitor (Week 3 — 2 days)
**Problem:** Client automations fail silently. You only find out when the client complains.

**What it does:**
- Inngest function runs on `cron: "*/5 * * * *"` (every 5 min)
- Checks Supabase `agent_runs` table for recent failures
- Sends immediate WhatsApp/Slack alert for critical failures
- Auto-creates a "task requiring attention" in the `tasks` table
- Daily summary function aggregates errors → Claude analyzes patterns → stores report

**Tech:** Inngest cron function → Supabase query → Slack SDK / WhatsApp API → Supabase insert
**File:** `src/lib/inngest/error-monitor.ts`

#### Agent #2: Proposal Generator (Week 3-4 — 5 days)
**Problem:** Writing proposals takes 2-4 hours each. You send 2-3 per week.

**What it does:**
- Dashboard form: client name, brief, requirements
- Next.js API route calls Claude API with structured output
- Generates: executive summary, scope, timeline, pricing (RM 3,500 / 7,500 / 15,000+), expected ROI
- Renders branded PDF via @react-pdf/renderer → Supabase Storage
- Inngest function handles delivery — email/WhatsApp the final PDF

**Tech:** Next.js API route + Anthropic SDK (streaming) + @react-pdf/renderer + Inngest for delivery
**Files:** `src/app/api/proposals/generate/route.ts`, `src/lib/inngest/proposal-delivery.ts`
**Impact:** 4-6 hours saved/week. Faster proposals = higher close rate.

#### Agent #3: Content Generator (Week 5-6 — 5 days)
**Problem:** You need 2 blog articles/month + 2-3 LinkedIn posts/week to compete with The Crunch (50+ articles).

**What it does:**
- **Interactive mode:** Dashboard input → Claude API with streaming → real-time blog draft → user edits → save
- **Batch mode:** Inngest function takes a blog post → Claude generates 5-10 social variants (LinkedIn, WhatsApp, Twitter) → saves all to `content_posts`

**Tech:** Next.js API route + Anthropic SDK (streaming) for interactive. Inngest function + Claude API for batch.
**Files:** `src/app/api/content/generate/route.ts`, `src/lib/inngest/content-batch.ts`
**Important:** AI content is a starting point — always review and add personal insights before publishing.

**Phase 2 Deliverables:**
- [ ] Dashboard live at app.actrivo.com with team auth
- [ ] Agent Health widget working (real-time monitoring)
- [ ] Tasks Requiring Attention widget working
- [ ] Agent Status Board showing all 3 agents
- [ ] Lead Pipeline kanban functional
- [ ] Error Monitor Inngest function deployed + alerting
- [ ] Proposal Generator deployed + tested
- [ ] Content Generator deployed + tested

---

## PHASE 3: GROWTH AGENTS + CLIENT ACQUISITION (Weeks 7-10)
*Goal: Build agents that feed your pipeline, then use them to get 3-5 new clients*

### 3.1 Build Growth Agents

#### Agent #4: Lead Research & Outreach Agent (Week 7-8 — 7 days)
**Problem:** Manually searching for prospects is slow. You need a pipeline of Malaysian SMEs who need automation.

**What it does:**
- Inngest function runs weekly → calls Python scraper (or Firecrawl API)
- Scrapes Malaysian business directories, LinkedIn, Facebook groups
- Claude API scores/enriches leads by automation readiness
- Saves to Supabase `leads` table → WhatsApp notification of top prospects
- Dashboard UI: review scored leads, approve for outreach, compose messages

**Tech:** Inngest scheduled function → Python Playwright scraper (or Firecrawl API) → Anthropic SDK for scoring → Supabase → Slack/WhatsApp notification
**Files:** `src/lib/inngest/lead-research.ts`, `scripts/scraper/` (Python)
**Malaysia-specific:** WhatsApp outreach variant alongside email. Domain warm-up for email should start in Phase 1.

#### Agent #5: SEO Research Agent (Week 9-10 — 5 days)
**Problem:** Competing with The Crunch (50+ articles) requires data-driven content strategy, not guesswork.

**What it does:**
- Inngest daily function → Google Search Console API → stores rankings in Supabase
- Inngest weekly function → fetches competitor RSS feeds → Claude analyzes keyword gaps → stores report
- Dashboard: keyword ranking charts, competitor comparison, topic suggestions

**Tech:** Inngest cron functions → googleapis + fetch → Anthropic SDK → Supabase
**Files:** `src/lib/inngest/seo-daily.ts`, `src/lib/inngest/seo-weekly.ts`

### 3.2 Add Dashboard Widgets

- **Revenue Snapshot:** MRR, project revenue this month, outstanding invoices, pipeline value forecast
- **Content Calendar:** Scheduled blog posts, LinkedIn posts, WhatsApp broadcasts with status

### 3.3 Collect & Publish Case Studies

Once Pikzern & Ecolife are delivered (or at major milestones):
- Collect measurable results (hours saved, error rate, speed improvement)
- Ask for testimonial quotes
- Replace internal pilot projects on /work page with real case studies
- Include: problem → solution → tools used → measurable results → client quote

### 3.4 Start Client Acquisition

Now you have real tools to accelerate:
- **Lead Gen Agent** feeds qualified prospects weekly
- **Proposal Generator** sends professional proposals same-day
- **Dashboard demo** — show prospects the Command Center during sales calls

### 3.5 Pilot Pricing for Case Studies
- First 3-5 new clients: RM 2,000 (normally RM 3,500) in exchange for testimonial + case study permission
- Stop discounting after 5 case studies total

### 3.6 Pick ONE Vertical Niche

| Vertical | Why | Entry Offer |
|----------|-----|-------------|
| **E-commerce / Online sellers** | Huge in MY, clear pain points | Order processing + inventory sync |
| **Clinics / Salons** | WhatsApp-heavy, hate admin | Booking + reminders + follow-ups |
| **F&B** | Growing in MY, inventory pain | POS → inventory → supplier ordering |
| **Accounting firms** | Excel automation skill applies | Data entry + invoice processing |
| **Property agents** | Lead management pain | Lead capture → qualification → follow-up |

**Recommendation:** Start with whatever vertical Pikzern or Ecolife belongs to.

**Phase 3 Deliverables:**
- [ ] Lead Research & Outreach Agent deployed
- [ ] SEO Research Agent deployed
- [ ] Revenue + Content Calendar widgets on dashboard
- [ ] 2 real case studies on /work page
- [ ] Lead Gen Agent producing weekly prospect lists
- [ ] 3-5 new clients acquired
- [ ] ONE vertical chosen

---

## PHASE 4: CLIENT DASHBOARD + LANDING PAGE (Weeks 11-16)
*Goal: Give clients their own view, and level up the landing page*

### 4.1 Client-Facing Dashboard

Using the same dashboard app (app.actrivo.com), add a client role:

**Client Auth:**
- Separate login for clients (Supabase Auth with role-based access)
- Each client only sees their own data

**Client Dashboard View:**
- List of their automations with status badges (active/paused/error)
- High-level summary per automation: runs today, success rate, last run time
- Click into any automation → low-level detail dashboard:
  - Execution history chart (7/30 day)
  - Recent runs with status
  - Error log (if any)
  - Key metrics specific to that workflow (e.g., invoices processed, data entries synced)

**Template System:**
- Workflows built for Pikzern/Ecolife become templates
- New client needs similar workflow → deploy from template → customize config
- Template library visible to admin: "Invoice Automation," "Order Processing," "Stock Management," etc.
- Each template has: description, typical setup time, tools required, estimated savings

### 4.2 Landing Page Enhancements

Separate from the dashboard — this is the actrivo.com marketing site.

**Workflow Animation Background:**
- Animated workflow diagram in the hero section
- Light/energy animation flowing through workflow nodes and connections
- Nodes light up as "data" passes through them
- Subtle, not distracting — think Stripe-level polish

**Scroll Animations:**
- Zoom out → zoom back in transitions between sections
- Parallax depth effects
- Reference-driven design from Awwwards/Dribbble

**Implementation Notes:**
- Canvas/WebGL or SVG + CSS animations for workflow viz
- Framer Motion for scroll-triggered zoom/parallax
- Research: collect 5-10 references from Awwwards/Dribbble before building
- This is NOT top priority — invest time only after Phase 3 is solid

### 4.3 Content Engine (Ongoing)

By now your Content Generator + SEO Research agents should be feeding content:

- 2 blog articles/month (AI-drafted, human-reviewed)
- 2-3 LinkedIn posts/week
- Monthly WhatsApp broadcast (tips + case study highlights)
- Target keywords:
  - "automate data entry Malaysia SME"
  - "WhatsApp business automation Malaysia"
  - "invoice automation Malaysia"
  - "SME Digitalisation Grant automation"
  - "n8n automation Malaysia"

**Phase 4 Deliverables:**
- [ ] Client login working (role-based auth)
- [ ] Client dashboard: automation list + detail views
- [ ] Workflow template system functional
- [ ] At least 3 workflow templates in library
- [ ] Landing page hero with workflow animation (if bandwidth allows)
- [ ] 4-8 blog articles published
- [ ] LinkedIn posting cadence established (2-3/week)

---

## PHASE 5: SCALE + PRODUCTIZE (Months 5-8)
*Goal: Move from "getting clients" to "choosing clients"*

### 5.1 Recurring Revenue — "Automation Care Plan"

| Plan | Price | Includes |
|------|-------|---------|
| **Basic** | RM 500/month | Dashboard access, monitoring, bug fixes, email support |
| **Standard** | RM 1,000/month | + monthly optimization, 1 workflow tweak/month |
| **Premium** | RM 2,000/month | + quarterly review, priority support, new additions |

Target: 10 clients on RM 1K/month = RM 10K/month guaranteed income.
Dashboard access is the **key differentiator** that justifies the retainer.

### 5.2 Productized Vertical Packages
- "The [Vertical] Automation Kit" — fixed scope, fixed price, repeatable delivery
- Pre-built from your template library
- Example: "E-commerce Automation Kit — RM 5,000" (order processing + inventory + shipping + WhatsApp)
- Each kit includes dashboard access

### 5.3 Template Marketplace
- Browsable library of automation templates
- Prospects can see what's available before committing
- "Pick 3 automations from our library → get a custom dashboard"

### 5.4 Explore ONE New Service Line

| Option | Investment | First Mover in MY? |
|--------|-----------|-------------------|
| **AI Voice Agents** (Vapi/Retell) | Medium | Yes — nobody offers this |
| **AI Employee positioning** | Low (rebranding) | Yes — untapped framing |
| **Self-serve Audit Tool** | Medium | Yes — productize Workflow Audit Agent |

### 5.5 Partnership Strategy
- **n8n training providers** (thelead.io, KursusAI) → they train, you implement
- **Accounting firms** → they see clients drowning in manual work daily
- **Web developers** → they build websites but can't do automation

### 5.6 Additional Agents (Build When Needed)

| Agent | When to Build | What It Does | Inngest File |
|-------|--------------|-------------|-------------|
| **Client Onboarding** | At 5+ clients | Durable sequence: welcome email → wait 2hrs → docs → wait 1 day → check-in | `onboarding-sequence.ts` |
| **Meeting Notes** | At 5+ clients | Webhook → Deepgram transcription → Claude summary → auto-create tasks | `meeting-notes.ts` |
| **Client Reporting** | At 5+ clients | Monthly aggregation → Claude narrative → PDF generation → email delivery | `client-reporting.ts` |
| **Invoice Agent** | At 10+ clients | Cron checks overdue → sends reminders → generates recurring invoices | `invoice-reminders.ts` |
| **Knowledge Base** | When team grows | RAG agent over internal docs for team Q&A | `knowledge-base.ts` |

**Phase 5 Deliverables:**
- [ ] Recurring revenue model launched (dashboard access as value prop)
- [ ] 1 productized vertical package created
- [ ] Template library with 5+ templates
- [ ] 1 new service line explored/piloted
- [ ] 2-3 referral partnerships established
- [ ] Monthly recurring revenue: RM 8,000+

---

## INTERNAL AGENTS SUMMARY

| # | Agent | What It Does | Build Phase | File |
|---|-------|-------------|-------------|------|
| 1 | **Error Monitor** | Cron checks for failures → alerts WhatsApp/Slack → creates tasks | Phase 2 | `error-monitor.ts` |
| 2 | **Proposal Generator** | Brief → Claude structured output → branded PDF → delivery | Phase 2 | `proposal-delivery.ts` + API route |
| 3 | **Content Generator** | Topic → streaming blog draft + batch social variants | Phase 2 | `content-batch.ts` + API route |
| 4 | **Lead Research** | Weekly scrape → Claude scoring → Supabase → WhatsApp alert | Phase 3 | `lead-research.ts` |
| 5 | **SEO Research** | Daily rankings + weekly competitor analysis → reports | Phase 3 | `seo-daily.ts`, `seo-weekly.ts` |
| 6 | **Client Onboarding** | Durable sequence: emails + waits + docs + check-ins | Phase 5 | `onboarding-sequence.ts` |
| 7 | **Meeting Notes** | Transcription → Claude summary → action items → tasks | Phase 5 | `meeting-notes.ts` |
| 8 | **Client Reporting** | Monthly data aggregation → Claude narrative → PDF → email | Phase 5 | `client-reporting.ts` |

**Estimated total time saved after Agents 1-5: ~20-28 hours/week** — effectively doubles a 2-3 person team's capacity.

---

## DASHBOARD ARCHITECTURE

### Admin Dashboard (Actrivo Team)

```
+-----------------------------------------------------------+
| ACTRIVO COMMAND CENTER              [alerts] [settings]    |
+-----------------------------------------------------------+
|          |                                                 |
| SIDEBAR  | AGENT HEALTH                                    |
|          | [=== 98.2% success ===]                         |
| Home     | Pikzern: 145 runs / 2 errors (7d)              |
| Agents   | Ecolife: 89 runs / 0 errors (7d)               |
| Pipeline | [View All Errors →]                             |
| Tasks    |                                                 |
| Content  +-------------------------------------------------+
| Revenue  | AGENT STATUS              | TASKS               |
| Settings | Error Monitor: Running    | ! Pikzern error     |
|          |   Last: 2m ago, 12 today  |   fix invoice parse |
|          | Proposal Gen: Idle        | Follow up Ecolife   |
|          |   Last: 3h ago, 2 today   |   re: stock data    |
|          | Content Gen: Idle         | Send proposal to    |
|          |   Last: 1d ago, 1 today   |   ABC Sdn Bhd       |
|          |                           |                     |
|          +-------------------------------------------------+
|          | LEAD PIPELINE (Kanban)                           |
|          | Contact | Discovery | Proposal | Won | Lost     |
|          | [cards] | [cards]   | [cards]  | ... | ...      |
+-----------------------------------------------------------+
```

### Client Dashboard

```
+-----------------------------------------------------------+
| ACTRIVO — Welcome, Pikzern          [support] [logout]     |
+-----------------------------------------------------------+
|                                                            |
| YOUR AUTOMATIONS                                           |
|                                                            |
| +-------------------------+  +-------------------------+   |
| | Invoice Automation      |  | Order Processing        |   |
| | Status: Active          |  | Status: Active          |   |
| | 45 runs today           |  | 12 runs today           |   |
| | Success: 100%           |  | Success: 91.7%          |   |
| | [View Details →]        |  | [View Details →]        |   |
| +-------------------------+  +-------------------------+   |
|                                                            |
+-----------------------------------------------------------+
| DETAIL VIEW (click into automation)                        |
| Invoice Automation — Last 7 Days                           |
| [========= execution chart =========]                      |
| Total Runs: 312  |  Errors: 1  |  Avg Time: 2.3s         |
| Recent: OK OK OK OK ERR OK OK OK OK OK                    |
| Error Log: "Parse error on invoice #4521 — resolved"       |
+-----------------------------------------------------------+
```

### Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15+ App Router | Consistent with team skills, SSR for dashboard |
| UI Components | shadcn/ui + Tailwind v4 | Professional, customizable, Tailwind-native |
| Charts | Recharts | React-native, good for time-series |
| Database | Supabase (PostgreSQL) | Free tier sufficient, real-time subscriptions, built-in auth |
| Auth | Supabase Auth | Team + client roles, email/password, row-level security |
| Real-time | Supabase Realtime | WebSocket updates for agent status, task alerts |
| Background Jobs | Inngest | Durable workflows, cron, retries — runs inside the Next.js app |
| AI | Claude API (Anthropic SDK) | Direct API calls for full control over prompts, streaming, structured output |
| Email | Resend | Transactional + marketing emails, simple SDK |
| Hosting | Cloudflare Pages | Consistent with landing page, free tier |

---

## BUILD EVERYTHING — EAT YOUR OWN DOG FOOD

You're an automation agency. Every internal tool you build is a case study, a demo, and proof of your skills. RM 0/month SaaS fees.

### The Architecture: One Repo, One Language, 100% Vibe-Codable

Everything is TypeScript. Everything lives in one Next.js repo. Claude Code can build, test, and iterate on every file.

```
actrivo-dashboard/
├── src/
│   ├── app/                        # Next.js pages (dashboard UI)
│   │   ├── (auth)/                 # Login, register
│   │   ├── (dashboard)/            # Admin dashboard pages
│   │   │   ├── page.tsx            # Home — agent health, tasks, pipeline summary
│   │   │   ├── agents/             # Agent status board, run history, manual triggers
│   │   │   ├── pipeline/           # CRM kanban, lead details
│   │   │   ├── tasks/              # Task board, project tracking
│   │   │   ├── invoices/           # Invoice list, create, PDF preview
│   │   │   ├── content/            # Content calendar, generator, editor
│   │   │   ├── revenue/            # Revenue snapshot, forecasts
│   │   │   └── settings/           # n8n connection, notifications, team
│   │   ├── (client)/               # Client-facing dashboard (Phase 4)
│   │   ├── api/
│   │   │   ├── inngest/route.ts    # Inngest API handler
│   │   │   ├── proposals/          # Proposal generation endpoint
│   │   │   └── content/            # Content generation endpoint
│   │   └── layout.tsx
│   ├── components/                 # shadcn/ui + custom components
│   │   ├── ui/                     # shadcn primitives
│   │   ├── dashboard/              # Dashboard widgets
│   │   ├── pipeline/               # CRM components
│   │   └── agents/                 # Agent-specific UI
│   ├── lib/
│   │   ├── supabase/               # Supabase client, queries, types
│   │   ├── inngest/                # All background functions
│   │   │   ├── client.ts           # Inngest client setup
│   │   │   ├── error-monitor.ts    # Cron: check failures, alert, create tasks
│   │   │   ├── invoice-reminders.ts # Cron: overdue checks, send reminders
│   │   │   ├── email-sender.ts     # Cron: process outreach sequences
│   │   │   ├── content-publisher.ts # Cron: publish scheduled content
│   │   │   ├── content-batch.ts    # Event: blog → social media variants
│   │   │   ├── lead-research.ts    # Cron: weekly lead scraping + scoring
│   │   │   ├── seo-daily.ts       # Cron: daily ranking collection
│   │   │   ├── seo-weekly.ts      # Cron: weekly competitor analysis
│   │   │   ├── proposal-delivery.ts # Event: email/WhatsApp PDF to client
│   │   │   ├── onboarding-sequence.ts # Durable: multi-step client onboarding
│   │   │   └── client-reporting.ts # Cron: monthly report generation
│   │   ├── ai/                     # Claude API integrations
│   │   │   ├── proposal.ts         # Proposal generation prompts + parsing
│   │   │   ├── content.ts          # Content generation prompts
│   │   │   ├── lead-scoring.ts     # Lead scoring prompts
│   │   │   └── seo-analysis.ts     # SEO analysis prompts
│   │   └── pdf/                    # PDF generation templates
│   │       ├── invoice.tsx         # Invoice PDF template
│   │       └── proposal.tsx        # Proposal PDF template
├── scripts/
│   └── scraper/                    # Python Playwright scraper (separate)
│       ├── main.py
│       └── requirements.txt
├── supabase/
│   └── migrations/                 # SQL schema migrations
│       ├── 001_core.sql
│       ├── 002_crm.sql
│       ├── 003_invoicing.sql
│       ├── 004_projects.sql
│       ├── 005_outreach.sql
│       ├── 006_content.sql
│       └── 007_monitoring.sql
├── package.json
└── tsconfig.json
```

**Every file in this tree is vibe-codable with Claude Code.**

---

### OPERATIONS WORKFLOWS — Architecture per Tool

#### 1. CRM / Pipeline
**Build in: Next.js (dashboard code)**
CRM is fundamentally CRUD + UI — interactive data management, not background automation.

- **UI:** Kanban board (drag-drop with @hello-pangea/dnd), deal cards, lead forms
- **Data:** Supabase tables — `leads`, `deals`, `activities` with real-time subscriptions
- **Logic:** Next.js Server Actions for all mutations (create lead, move stage, add note)
- **Inngest role:** Side-effects only — WhatsApp notification when deal stage changes, auto follow-up reminder after 7 days idle
- **Key tech:** React Hook Form + Zod validation, Tanstack Table for list views, Supabase real-time for live updates

#### 2. Invoicing
**Build in: Next.js (UI + PDF) + Inngest (reminders + recurring)**
Invoice creation and viewing is a UI task. Reminders and recurring generation are background jobs.

- **UI (Next.js):** Create/edit invoice form, invoice list, payment status tracking
- **PDF generation (Next.js API route):** @react-pdf/renderer generates PDF → Supabase Storage
- **Background (Inngest):** `invoice-reminders.ts` — cron every 15 min, checks overdue invoices, sends WhatsApp/email reminders. Monthly cron generates recurring invoices.
- **Data:** Supabase tables — `invoices`, `invoice_line_items` (denormalize client data for immutable records)
- **Key tech:** @react-pdf/renderer, Supabase Storage for PDFs, Resend SDK for email

#### 3. Scheduling / Booking
**Build in: Next.js (dashboard code)**
Booking is a stateful UI problem. Google Calendar API is straightforward from Next.js API routes.

- **UI:** Booking form (available slots), upcoming appointments list, calendar view
- **Logic (Next.js API route):** googleapis npm package → check Calendar availability → create event → confirm via email
- **Data:** Supabase `calendar_events` table + Google Calendar as source of truth
- **Inngest role:** Post-booking automation — send confirmation WhatsApp, reminder 24hrs before
- **Key tech:** googleapis npm package, FullCalendar component for display

#### 4. Project Tracking
**Build in: Next.js (dashboard code)**
Task management is pure CRUD + UI. Kanban boards, task lists, assignments.

- **UI:** Kanban board (drag-drop), task detail view, project overview
- **Data:** Supabase tables — `projects`, `tasks`, `task_comments` with real-time subscriptions
- **Logic:** Server Actions for all CRUD
- **Inngest role:** Auto-creation — when a new client is onboarded, creates default project + starter tasks
- **Key tech:** @hello-pangea/dnd, Supabase Realtime for live updates across team

#### 5. Email Outreach
**Build in: Next.js (UI + sequence builder) + Inngest (sending engine)**
UI for composing sequences in the dashboard. Inngest is the sending engine.

- **UI (Next.js):** Sequence builder (steps, delays, templates), analytics (open/click rates), lead enrollment
- **Sending engine (Inngest):** `email-sender.ts` — cron every 15 min → fetch due emails from Supabase → Claude API personalizes message → Resend sends → logs events back to Supabase
- **Data:** Supabase tables — `email_sequences`, `email_sequence_steps`, `email_sends`
- **Key tech:** Inngest cron, Anthropic SDK for AI personalization, Resend SDK, webhook endpoints for open/click tracking

#### 6. Content Calendar
**Build in: Next.js (calendar UI) + Inngest (scheduled publishing)**
Calendar interface and content drafting are UI-heavy. Automated publishing is an Inngest cron.

- **UI (Next.js):** Calendar view (drag to schedule), content editor, platform selector, status tracking
- **Publishing (Inngest):** `content-publisher.ts` — cron every 5 min → check for content due to publish → post to LinkedIn/Twitter/Facebook APIs → update status in Supabase
- **Data:** Supabase `content_posts` table
- **Key tech:** FullCalendar or custom calendar, social platform APIs (fetch calls), Supabase real-time for status updates

---

### AI AGENTS — Architecture per Agent

#### 1. Workflow Error Monitor
**Build in: Inngest cron function**
Runs on schedule, checks for failures, alerts the team, creates tasks.

```typescript
// src/lib/inngest/error-monitor.ts
export const errorMonitor = inngest.createFunction(
  { id: "error-monitor" },
  { cron: "*/5 * * * *" },
  async ({ step }) => {
    const failures = await step.run("check-failures", async () => {
      return supabase.from("agent_runs")
        .select("*").eq("status", "failed")
        .gte("started_at", fiveMinutesAgo());
    });
    for (const failure of failures.data) {
      await step.run(`alert-${failure.id}`, async () => {
        await slack.send(`Agent ${failure.agent_name} failed: ${failure.error_message}`);
        await supabase.from("tasks").insert({
          title: `Fix: ${failure.agent_name} failure`,
          priority: "urgent", status: "todo"
        });
      });
    }
  }
);
```

#### 2. Proposal Generator
**Build in: Next.js API route + Anthropic SDK (streaming) + Inngest (delivery)**
Direct Claude API for prompt engineering, structured output, and streaming preview.

- **UI (Next.js):** Input form → streaming preview → edit → download PDF
- **AI (API route):** Anthropic SDK → Claude generates sections with structured output
- **PDF (API route):** @react-pdf/renderer → Supabase Storage
- **Delivery (Inngest):** `proposal-delivery.ts` — event-triggered, emails/WhatsApps the PDF
- **Key tech:** Anthropic SDK (direct), @react-pdf/renderer, Supabase Storage

#### 3. Content Generator
**Build in: Next.js API route (interactive streaming) + Inngest (batch variants)**

- **Interactive:** API route → Claude streaming → real-time editor → user edits → save
- **Batch:** Inngest `content-batch.ts` — event-triggered from dashboard → Claude generates variants for each platform → saves to `content_posts`
- **Key tech:** Anthropic SDK with streaming, Inngest event functions

#### 4. Lead Research & Outreach
**Build in: Inngest (orchestration) + Python (scraping) + Next.js (UI)**
Web scraping needs Playwright for anti-bot bypass. Inngest orchestrates the full pipeline.

```typescript
// src/lib/inngest/lead-research.ts
export const leadResearch = inngest.createFunction(
  { id: "lead-research" },
  { cron: "0 9 * * 1" }, // every Monday 9am
  async ({ step }) => {
    const rawLeads = await step.run("scrape", async () => {
      const res = await fetch("http://scraper-service/scrape", { method: "POST" });
      return res.json();
    });
    const scoredLeads = await step.run("score", async () => {
      return Promise.all(rawLeads.map(lead => scoreWithClaude(lead)));
    });
    await step.run("save", async () => {
      await supabase.from("leads").insert(scoredLeads);
    });
    await step.run("notify", async () => {
      const topLeads = scoredLeads.filter(l => l.score > 70);
      await slack.send(`${topLeads.length} new high-score leads this week`);
    });
  }
);
```

#### 5. SEO Research Agent
**Build in: Inngest cron functions + Anthropic SDK**

- **Daily (Inngest):** `seo-daily.ts` — Google Search Console API → store rankings
- **Weekly (Inngest):** `seo-weekly.ts` — fetch competitor RSS → Claude analyzes gaps → store report
- **UI (Next.js):** Charts, competitor comparison, topic suggestions

#### 6. Client Onboarding *(Phase 5)*
**Build in: Inngest durable function**
Inngest's `step.sleep()` handles multi-step sequences with waits natively.

```typescript
// src/lib/inngest/onboarding-sequence.ts
export const onboardClient = inngest.createFunction(
  { id: "onboard-client" },
  { event: "client/onboarded" },
  async ({ event, step }) => {
    await step.run("welcome-email", () => sendWelcomeEmail(event.data.client));
    await step.sleep("wait-2-hours", "2h");
    await step.run("send-docs", () => sendOnboardingDocs(event.data.client));
    await step.sleep("wait-1-day", "1d");
    await step.run("check-in", () => sendCheckInEmail(event.data.client));
    await step.run("create-project", () => createDefaultProject(event.data.client));
  }
);
```

#### 7. Meeting Notes *(Phase 5)*
**Build in: Inngest event function + Deepgram + Anthropic SDK**

- **Trigger:** Zoom/Meet webhook → Inngest event
- **Pipeline:** `step.run("transcribe")` → Deepgram API → `step.run("summarize")` → Claude → `step.run("create-tasks")` → Supabase
- **Key tech:** Deepgram API ($0.0043/min), Anthropic SDK

#### 8. Client Reporting *(Phase 5)*
**Build in: Inngest monthly cron + Anthropic SDK + PDF**

- **Aggregation:** Monthly cron → pull metrics from Supabase → Claude generates narrative
- **Report:** @react-pdf/renderer → Supabase Storage → Resend email to client

---

### SUMMARY: Where Each Tool Lives

| Tool | Next.js (UI + API) | Inngest (background) | Python | Claude API |
|------|-------------------|---------------------|--------|-----------|
| **CRM / Pipeline** | UI + all CRUD | Notifications only | — | — |
| **Invoicing** | UI + PDF generation | Reminders, recurring | — | — |
| **Scheduling** | UI + Calendar API | Confirmations, reminders | — | — |
| **Project Tracking** | UI + all CRUD | Auto-create on onboarding | — | — |
| **Email Outreach** | UI + sequence builder | Sending engine (core) | — | Personalization |
| **Content Calendar** | Calendar UI + editor | Scheduled publishing | — | — |
| **Error Monitor** | Display only | Core logic (cron) | — | Pattern analysis |
| **Proposal Generator** | UI + PDF + streaming AI | Email delivery | — | Direct API (structured output) |
| **Content Generator** | Interactive streaming | Batch variant pipeline | — | Direct API (streaming) + batch |
| **Lead Research** | Review + approve UI | Orchestration + scoring | Scraping (Playwright) | Scoring |
| **SEO Research** | Dashboard + reports | Data collection (cron) | — | Analysis |
| **Client Onboarding** | Progress tracker UI | Durable sequence (core) | — | — |
| **Meeting Notes** | Transcript viewer UI | Pipeline (core) | — | Summarization |
| **Client Reporting** | Report template + PDF | Aggregation (core) | — | Narrative |

### Key Architectural Decisions

1. **One repo, one language** — everything is TypeScript in a single Next.js app. Claude Code can vibe-code the entire system.

2. **Supabase is the single source of truth** — every tool reads from and writes to the same Supabase instance. Next.js uses @supabase/ssr. Inngest functions use the Supabase client.

3. **Inngest replaces n8n** — cron jobs, event-driven functions, durable workflows with `step.sleep()`. Runs inside the Next.js app. 100K free runs/month. No separate infrastructure.

4. **Direct Claude API everywhere** — Anthropic SDK for full control over prompts, streaming, structured output. No abstraction layer.

5. **Python only for web scraping** — the sole non-TypeScript service. Playwright + stealth plugins for anti-bot bypass. Deployed separately as a lightweight API.

6. **Resend for all email** — transactional emails, sequence emails, invoice reminders, report delivery. Simple SDK, no SMTP management.

### Database: 19 Supabase Tables

**Core (4):** `organizations`, `users`, `clients`, `client_workflows`
**CRM (3):** `leads`, `deals`, `activities`
**Invoicing (2):** `invoices`, `invoice_line_items`
**Projects (3):** `projects`, `tasks`, `task_comments`
**Scheduling (1):** `calendar_events`
**Outreach (3):** `email_sequences`, `email_sequence_steps`, `email_sends`
**Content (1):** `content_posts`
**Monitoring (2):** `agent_runs`, `workflow_execution_logs`

Real-time subscriptions on: `agent_runs`, `workflow_execution_logs`, `tasks`, `email_sends`, `content_posts`, `activities`

RLS: Admin sees all, client sees only their tenant's data.

**The only things worth paying for:**
- Claude API (~RM 100/month) — powers all AI agents
- Inngest (free tier: 100K runs/month) — background jobs infrastructure
- Domain + hosting (~RM 50/month) — Cloudflare, custom domain
- Google Workspace (~RM 25/month) — email, calendar, docs
- Resend (~RM 0-80/month) — email sending (free tier: 3K emails/month)
- WhatsApp Business API — client communication channel
- Deepgram/AssemblyAI (~RM 20/month) — meeting transcription (Phase 5 only)

---

## LANDING PAGE ENHANCEMENT IDEAS

*Not a priority until Phase 4, but worth collecting references now.*

### Workflow Animation Concept
- Animated workflow diagram in hero section background
- Light/energy flows through lines connecting workflow nodes
- Nodes pulse/glow as "data" passes through them
- Similar to: Stripe's hero animations, Linear's visual effects
- Tech options: Canvas/WebGL, SVG + CSS keyframes, or Rive

### Scroll Animation Concept
- Zoom out from current section → see overview → zoom into next section
- Creates a feeling of "diving deeper" into Actrivo's world
- Framer Motion + scroll-linked animations
- Reference: Apple product pages, Vercel ship pages

### Action Items
- [ ] Collect 5-10 references from Awwwards/Dribbble
- [ ] Create a mood board before building
- [ ] Prototype one scroll section before committing to full redesign

---

## METRICS TO TRACK

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Active clients | 2 (in progress) | 7 | 15 |
| Case studies on website | 0 | 3 | 6+ |
| Internal agents built | 3 | 5 | 8 |
| Dashboard widgets live | 4 | 6 | 8+ |
| Workflow templates | 0 | 3 | 8+ |
| Monthly recurring revenue | RM 0 | RM 3,000 | RM 10,000 |
| Blog articles published | 0 | 4 | 10+ |
| Inbound leads/month | 0 | 2 | 5+ |
| Proposals sent/month | 2 | 8 | 15+ |
| Inngest function success rate | - | 98%+ | 99%+ |
| Agent runs/day | 5 | 20 | 50+ |

---

## PRIORITY MATRIX

### THIS WEEK
1. Set pricing on website (replace RM X,XXX placeholders)
2. Set up professional email + WhatsApp Business
3. Continue Pikzern & Ecolife deliverables
4. Create Supabase project
5. Scaffold dashboard repo (Next.js + shadcn/ui + Tailwind v4 + Inngest)

### NEXT 2 WEEKS
6. Build dashboard auth + layout shell
7. Build Agent Health widget
8. Build Error Monitor Inngest function
9. Start Proposal Generator (API route + Claude)
10. Set up LinkedIn + Facebook pages

### NEXT MONTH
11. Complete all Phase 2 dashboard widgets
12. Complete Content Generator (streaming + batch)
13. Collect testimonials from Pikzern & Ecolife (if ready)
14. Write first case study

### MONTH 2-3
15. Build Lead Research agent (Inngest + Python scraper)
16. Build SEO Research agent (Inngest crons)
17. Start outreach using your agents
18. Get 3-5 new clients
19. Begin content publishing

### Everything else waits.

---

## WORK STREAM ALLOCATION

For a 2-3 person team (all using Claude Code):

| Person | Phase 2 Focus | Phase 3 Focus |
|--------|--------------|---------------|
| **Person 1** | Dashboard frontend (widgets, UI) | Client dashboard + templates |
| **Person 2** | Dashboard backend (Supabase, Inngest) | Growth agents (Lead Gen, SEO) |
| **Person 3** (or shared) | AI agents (Error Monitor, Proposal, Content) | Client acquisition + content |

If only 2 people:
- **Person 1:** Dashboard (full-stack) — frontend + backend + deployment
- **Person 2:** Inngest agents + Claude API integrations + Pikzern/Ecolife delivery

**Vibe-coding workflow per person:**
1. Open Claude Code
2. Describe the feature: "Build the CRM pipeline kanban with drag-drop, Supabase real-time, lead detail cards"
3. Claude Code writes the code, you review
4. `pnpm build` to verify
5. Iterate until satisfied
6. Commit + deploy

---

## WHAT NOT TO SPEND TIME ON RIGHT NOW

- Paid ads (need case studies first)
- Chasing enterprise/government clients
- Building a proprietary SaaS platform (the dashboard is for YOUR agency, not a product yet)
- Hiring staff (optimize with agents first)
- Video content (too time-consuming at this stage)
- Landing page redesign (Phase 4 — after you have clients and revenue)
- Complex client portal features (Phase 4 — start simple)
- Over-engineering the template system (start with manual templates, automate later)
- **n8n** — all automations live in code now. No separate infrastructure needed.

---

## ONE-LINE SUMMARY

**One repo. One language. Every automation vibe-coded with Claude Code. Build your command center, deploy agents that multiply your team's output, then give clients their own dashboard — turning a services agency into a scalable platform.**
