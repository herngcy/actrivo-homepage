# Tech Stack Decision Framework: n8n vs Custom Code for 14 Internal Agency Tools

**Context**: 2-3 person AI automation agency (Actrivo), building internal tools.
**Existing stack**: Next.js App Router, Supabase (Postgres + Auth + Edge Functions), n8n self-hosted, Python available.
**Date**: April 2026

---

## Part 1: Platform Capabilities & Limitations

### n8n — Strengths

- **Integration speed**: 500+ pre-built nodes. Connecting two SaaS tools takes minutes, not hours.
- **Visual debugging**: Execution history with step-by-step data inspection. Non-trivial for a 2-person team where one person may not be a developer.
- **Error handling built-in**: Retries, error triggers, execution logs — production-grade without writing retry logic.
- **Webhook receiver**: Instant HTTP endpoints for any external event (Stripe, form submissions, etc.).
- **Background worker**: Scheduled/cron workflows run independently of your dashboard app.
- **AI nodes (2026)**: LangChain-powered agent node, Claude/OpenAI integration, memory nodes, tool nodes. Supports up to 220 executions/sec on a single instance.

### n8n — Hard Limitations

| Limitation | Detail | Impact |
|---|---|---|
| **No persistent agent memory** | Context is lost between workflow executions. No autonomous planning or dynamic decision-making. | AI agents that need multi-session memory must store/retrieve from external DB. |
| **Serialization overhead** | Every node hop serializes/deserializes JSON. Long chains with large payloads get slow and memory-hungry. | Avoid n8n for processing large datasets (>10MB per execution). |
| **No native UI** | Cannot build dashboards, forms, or user-facing interfaces. | Any tool with a UI must have its frontend in Next.js. |
| **Self-hosted ops burden** | Requires PostgreSQL (not SQLite), 8GB+ RAM, 4+ CPU cores for production. Frequent breaking updates. 10-20 hrs/month DevOps overhead. | Real cost for a 2-person team. Budget ~$500-1000/mo in time. |
| **SQLite bottleneck** | "SQLITE_BUSY" errors above 5,000-10,000 daily runs or 10-15 concurrent workflows. | Must use PostgreSQL + queue mode for anything production. |
| **Web scraping** | Native HTTP node has no proxy rotation, no anti-bot bypass, no JS rendering. Default user-agent gets blocked. | Must use Firecrawl/ScrapeNinja community node or external Python scraper. |
| **Complex branching** | Every scenario requires explicit workflow branches. Gets unwieldy for complex conditional logic. | Move complex logic to Code nodes or external services. |
| **Dashboard/analytics** | No native reporting UI. Logs executions but no visibility layer. | Build monitoring externally. |

### When n8n Becomes a Bottleneck

1. **You keep adding Code nodes** — If >40% of your workflow is Code nodes, just write a service.
2. **You need a UI** — n8n cannot render interfaces. Period.
3. **You need real-time** — n8n is event-driven but not real-time (WebSocket, SSE).
4. **You need complex AI reasoning** — Multi-step agent chains with memory, planning, and tool use are better orchestrated in code.
5. **You need to process large data** — CSV files, database exports, bulk operations over 10MB.

---

### Supabase Edge Functions — When to Use

**Strengths:**
- Globally distributed, low-latency (<50ms cold start)
- TypeScript/Deno runtime
- Direct access to Supabase DB via service role key
- Perfect for webhooks, lightweight API endpoints, and coordinating external API calls
- 400-second wall clock limit, 150-second request timeout

**Limitations:**
- 2-second CPU time limit (async I/O doesn't count, but computation does)
- 20MB max function size
- No long-running processes
- No browser automation (Puppeteer/Playwright)
- Rate limits on function-to-function calls

**Best use cases:** Webhook receivers, auth-adjacent logic, lightweight data transformations, API proxy/coordination, scheduled database maintenance.

**Worst use cases:** PDF generation, web scraping, heavy computation, AI inference (CPU limit kills it), anything needing >2s of computation.

---

### Next.js API Routes / Server Actions — When to Use

**Server Actions** (preferred for dashboard mutations):
- Form submissions, CRUD operations tied to UI
- Database mutations tightly coupled to components
- 63% of Next.js developers use them in production (Vercel 2025 survey)
- Cannot be called externally (no webhook endpoint)

**API Routes** (preferred for external integrations):
- Reusable endpoints called by multiple clients
- Webhook receivers from external services
- Endpoints that n8n or other tools call into
- Complex backend logic that needs a clear contract

**General rule:** If the logic serves the dashboard UI only, use Server Actions. If it serves multiple consumers or external services, use API Routes.

---

### Python — When to Use

- **Web scraping with Playwright/Puppeteer** — Full browser control, proxy rotation, anti-bot bypass
- **Data processing** — pandas, numpy for heavy data manipulation
- **AI orchestration** — Direct Claude API calls with full control over prompts, streaming, tool use
- **PDF generation** — reportlab, weasyprint, or Puppeteer via Python
- **Anything needing complex algorithmic logic** that would be unwieldy in n8n Code nodes

---

## Part 2: Decision Framework

```
                    Does it need a UI?
                   /                   \
                 YES                    NO
                  |                      |
          Next.js dashboard        Does it connect 2+ SaaS tools
          (Server Actions           with simple logic?
           for mutations,          /                    \
           API Routes for        YES                    NO
           external calls)        |                      |
                              n8n workflow          Is it heavy computation,
                              (visual, fast          scraping, or complex AI?
                               to build)            /                    \
                                                  YES                    NO
                                                   |                      |
                                              Python service         Supabase Edge Function
                                              (full control)         (lightweight, fast)
```

---

## Part 3: Architecture Recommendations for All 14 Tools

### OPERATIONS WORKFLOWS

---

#### a. CRM / Pipeline

**BUILD IN:** Next.js (dashboard code)
**WHY:** A CRM is fundamentally CRUD + UI. It's a database with a pretty interface for managing contacts, deals, and pipeline stages. n8n adds zero value here — there's nothing to "automate" in the core CRM; it's interactive data management.
**KEY TECH:**
- Supabase tables: `contacts`, `deals`, `pipeline_stages`, `activities`, `notes`
- Supabase RLS for row-level security
- Server Actions for all mutations (create contact, move deal, log activity)
- React Hook Form + Zod for validation
- Tanstack Table for data grids
- Optional: reference Atomic CRM (open-source Next.js + Supabase CRM template)

**DATA FLOW:**
```
User interacts with dashboard UI
  -> Server Action mutates Supabase
  -> Supabase real-time pushes updates to other open tabs
  -> (Optional) Supabase webhook triggers n8n for notifications (e.g., deal closed -> Slack alert)
```

**n8n role:** Only for side-effects (Slack notifications when deal stage changes, weekly pipeline digest email). Not for core logic.

---

#### b. Invoicing

**BUILD IN:** Hybrid — Next.js (UI + data) + n8n (automation + email delivery)
**WHY:** Invoice creation and viewing is CRUD in the dashboard. But sending invoices, payment reminders, recurring invoice generation, and email delivery are classic automation workflows that n8n handles well.
**KEY TECH:**
- Supabase tables: `invoices`, `invoice_items`, `payments`, `clients`
- Next.js Server Actions: create/edit invoice, record payment
- PDF generation: `@react-pdf/renderer` for invoice PDFs (runs server-side in Next.js API route) — simpler than Puppeteer for structured documents
- n8n workflows: scheduled payment reminders, overdue notifications, recurring invoice generation
- n8n nodes: Email (SMTP/Resend), Schedule Trigger, Supabase node

**DATA FLOW:**
```
Dashboard: User creates invoice -> Server Action saves to Supabase -> API Route generates PDF -> stores in Supabase Storage
Automation: n8n Schedule Trigger -> checks overdue invoices via Supabase -> sends reminder email with PDF attachment
Automation: n8n Schedule Trigger -> generates recurring invoices monthly -> saves to Supabase -> sends via email
```

---

#### c. Scheduling / Booking

**BUILD IN:** Next.js (dashboard code) + Google Calendar API
**WHY:** Booking is a stateful UI problem — availability checking, time slot selection, conflict resolution. These require real-time UI feedback that n8n cannot provide. The Google Calendar API integration is straightforward in Next.js API routes.
**KEY TECH:**
- Google Calendar API via service account (googleapis npm package)
- Supabase tables: `bookings`, `availability_rules`
- Next.js API Routes: check availability, create booking, cancel booking
- Server Actions for internal scheduling UI mutations
- Optional: Calendly embed for client-facing booking (already used on contact page)

**DATA FLOW:**
```
Client clicks booking link -> Next.js page fetches available slots from Google Calendar API
  -> Client selects slot -> API Route creates Google Calendar event + Supabase booking record
  -> (Optional) n8n sends confirmation email + pre-meeting questionnaire
```

**n8n role:** Only for post-booking automations (confirmation emails, reminder sequences, pre-meeting prep).

---

#### d. Project Tracking

**BUILD IN:** Next.js (dashboard code)
**WHY:** Task management is pure CRUD + UI — kanban boards, task lists, status updates, assignments. This is a Trello/Linear clone, not an automation problem. n8n has no role in the core functionality.
**KEY TECH:**
- Supabase tables: `projects`, `tasks`, `task_comments`, `time_entries`
- Supabase real-time subscriptions for live kanban updates
- Server Actions for all mutations
- @hello-pangea/dnd for drag-and-drop kanban
- Tanstack Table for list views

**DATA FLOW:**
```
User interacts with kanban/list UI -> Server Action mutates Supabase -> Real-time updates all connected clients
(Optional) n8n: task overdue -> Slack/email notification
(Optional) n8n: weekly project summary digest
```

**n8n role:** Notifications only. Not for core logic.

---

#### e. Email Outreach

**BUILD IN:** Hybrid — Next.js (UI + sequence management) + n8n (email sending + scheduling + tracking)
**WHY:** The outreach UI (compose sequences, manage contacts, view analytics) must be in the dashboard. But the actual sending engine — timed sequences, follow-ups, bounce handling, SMTP rotation — is a background automation that n8n excels at.
**KEY TECH:**
- Supabase tables: `sequences`, `sequence_steps`, `sequence_contacts`, `email_events` (opens/clicks/bounces)
- Next.js dashboard: compose sequences, select contacts, view analytics
- n8n workflows:
  - Schedule Trigger -> fetch due emails from Supabase -> personalize with AI (Claude node) -> send via SMTP/Resend
  - Webhook receiver for tracking pixel (opens) and click tracking
  - Bounce handler webhook
- n8n nodes: Supabase, Claude (for AI personalization), SMTP/Resend, Schedule Trigger, Webhook

**DATA FLOW:**
```
Dashboard: User creates sequence + adds contacts -> Supabase
n8n (every 15 min): fetch contacts due for next step -> Claude personalizes email -> SMTP sends -> log to Supabase
n8n (webhook): tracking pixel fires -> log open event to Supabase
n8n (webhook): bounce notification -> update contact status in Supabase
Dashboard: User views open rates, click rates, reply rates from Supabase
```

---

#### f. Content Calendar

**BUILD IN:** Hybrid — Next.js (calendar UI + content management) + n8n (scheduled publishing)
**WHY:** The calendar interface, content drafting, and approval workflow are UI-heavy and belong in the dashboard. Automated publishing to social platforms at scheduled times is a perfect n8n cron job.
**KEY TECH:**
- Supabase tables: `content_items`, `content_calendar`, `social_accounts`, `publish_log`
- Next.js dashboard: calendar view (FullCalendar or custom), content editor, approval workflow
- n8n workflows:
  - Schedule Trigger (every 5 min) -> check for content due to publish -> post to social APIs
  - Social platform nodes: Twitter/X, LinkedIn, Facebook
- Server Actions: create/edit content, schedule, approve

**DATA FLOW:**
```
Dashboard: User creates content item -> sets publish date/time -> saves to Supabase
n8n (every 5 min): query Supabase for items due -> post to social platform APIs -> update publish status
Dashboard: User views publish status, engagement metrics
```

---

### AI AGENTS

---

#### g. Workflow Error Monitor

**BUILD IN:** n8n (primary) + Supabase Edge Function (webhook receiver)
**WHY:** This is the most natural n8n use case — it IS n8n monitoring itself. n8n has built-in Error Trigger nodes that fire when any workflow fails. The entire alerting pipeline stays within n8n.
**KEY TECH:**
- n8n Error Trigger workflow (catches all workflow failures)
- n8n nodes: Error Trigger, Code (format error), Slack/Email, Supabase (log error)
- Supabase table: `workflow_errors` (for historical tracking and dashboard display)
- Optional: Supabase Edge Function as external health check ping

**DATA FLOW:**
```
Any n8n workflow fails -> Error Trigger fires -> Code node formats error details
  -> Slack notification (immediate)
  -> Email notification (for critical workflows)
  -> Save to Supabase `workflow_errors` table (for dashboard)
  -> (Optional) Claude node analyzes error pattern and suggests fix
```

---

#### h. Proposal Generator

**BUILD IN:** Hybrid — Next.js (UI + PDF rendering) + Python or direct Claude API (AI generation)
**WHY:** Proposal generation needs (1) a UI to input client details and select templates, (2) heavy AI generation with Claude's full 200K context window, and (3) PDF output. n8n's AI nodes lose context between executions and can't do multi-turn generation well. Direct API calls give full control over prompts, streaming, and iteration.
**KEY TECH:**
- Supabase tables: `proposals`, `proposal_templates`, `clients`
- Next.js dashboard: proposal builder UI, template selection, client info input
- Next.js API Route: calls Claude API directly (Anthropic SDK) with full prompt engineering
  - System prompt with agency positioning, past case studies, pricing tiers
  - Structured output for proposal sections
- PDF generation: `@react-pdf/renderer` or Puppeteer for pixel-perfect proposals
- Supabase Storage: store generated PDFs

**DATA FLOW:**
```
Dashboard: User fills in client details + selects template -> API Route
  -> Claude API generates proposal sections (executive summary, scope, timeline, pricing)
  -> Server renders proposal as PDF
  -> Stores PDF in Supabase Storage
  -> Returns preview to dashboard
  -> User edits/approves -> sends via email (n8n or Resend)
```

**Why not n8n for AI here:** Proposal generation requires iterative prompt engineering, structured output parsing, and potentially multi-turn conversations. The Claude API gives full control. n8n's AI node is a black box with limited prompt engineering surface.

---

#### i. Content Generator

**BUILD IN:** Hybrid — Next.js (UI + content management) + n8n (batch generation pipeline) + Claude API
**WHY:** Content generation has two modes: (1) interactive single-piece generation (user writes a brief, AI generates, user edits) which belongs in the dashboard, and (2) batch generation (generate 20 social posts from one blog article) which is a pipeline n8n handles well.
**KEY TECH:**
- Next.js dashboard: content brief input, AI generation with streaming response, editing interface
- Next.js API Route: direct Claude API call for interactive generation (needs streaming)
- n8n workflow: batch generation pipeline
  - Trigger: webhook from dashboard or schedule
  - Claude node: generate multiple content pieces from source material
  - n8n nodes: Split In Batches, Claude, Supabase (save outputs)
- Supabase tables: `content_briefs`, `generated_content`, `content_templates`

**DATA FLOW:**
```
Interactive: Dashboard brief -> API Route -> Claude API (streaming) -> user edits -> save to Supabase
Batch: Dashboard triggers n8n webhook with source content -> n8n splits into platform formats
  -> Claude generates each variant -> saves all to Supabase -> dashboard shows results for review
```

---

#### j. Lead Research & Outreach

**BUILD IN:** Hybrid — Python (web scraping) + n8n (orchestration + enrichment) + Next.js (UI)
**WHY:** Lead research requires web scraping (anti-bot bypass, JS rendering, proxy rotation) that n8n cannot do natively. Python with Playwright or Firecrawl handles the scraping. n8n orchestrates the pipeline: scrape -> enrich -> score -> outreach. The dashboard displays and manages leads.
**KEY TECH:**
- Python script: Playwright or Firecrawl API for scraping company websites, LinkedIn profiles, directories
- n8n orchestration workflow:
  - Schedule Trigger or webhook
  - HTTP Request to Python scraper API (or Firecrawl community node)
  - Claude node: analyze scraped data, extract key info, score lead
  - Supabase node: save enriched lead
  - (Optional) trigger email outreach sequence
- Supabase tables: `leads`, `lead_scores`, `scrape_jobs`
- Next.js dashboard: lead list, scoring dashboard, trigger outreach

**DATA FLOW:**
```
n8n Schedule Trigger -> calls Python scraper with target criteria
  -> Python scrapes websites, returns structured data
  -> n8n passes to Claude for analysis + scoring
  -> n8n saves enriched lead to Supabase
  -> Dashboard: user reviews leads, triggers outreach sequence
  -> n8n sends personalized outreach emails
```

**Why Python for scraping:** n8n's HTTP node has no proxy rotation, no anti-bot bypass, gets blocked by default user-agent. Python with Playwright + stealth plugins or Firecrawl API handles this properly.

---

#### k. SEO Research Agent

**BUILD IN:** Hybrid — n8n (data collection + scheduling) + Python (analysis) + Next.js (dashboard)
**WHY:** SEO monitoring is periodic data collection (rankings, backlinks, traffic) from APIs, followed by analysis and reporting. n8n excels at scheduled API calls and data routing. Python handles heavier data analysis. The dashboard displays reports.
**KEY TECH:**
- SEO APIs: Google Search Console API, DataForSEO or SE Ranking API, Ahrefs/SEMrush API
- n8n workflows:
  - Daily Schedule Trigger -> call SEO APIs -> store raw data in Supabase
  - Weekly: aggregate data -> Claude node analyzes trends -> generate insights -> save report
- Python (optional): heavier analysis if needed (pandas for trend analysis, anomaly detection)
- Supabase tables: `seo_rankings`, `seo_reports`, `keywords`, `backlinks`
- Next.js dashboard: ranking trends, keyword performance, report viewer

**DATA FLOW:**
```
n8n (daily): Schedule Trigger -> Google Search Console API + SEO tool APIs
  -> save raw data to Supabase
n8n (weekly): aggregate week's data -> Claude analyzes trends + anomalies
  -> generate report -> save to Supabase
Dashboard: user views ranking charts, reads AI-generated insights
```

---

#### l. Client Onboarding

**BUILD IN:** Hybrid — Next.js (onboarding UI/forms) + n8n (multi-step automation sequence)
**WHY:** Client onboarding has two parts: (1) data collection forms and status tracking (dashboard UI), and (2) automated multi-step sequences (welcome email, document requests, account setup, check-ins). n8n is purpose-built for this kind of timed, multi-step automation with branching logic.
**KEY TECH:**
- Next.js dashboard: onboarding checklist, client portal, document upload
- Supabase tables: `onboarding_flows`, `onboarding_steps`, `client_documents`, `onboarding_status`
- n8n workflows:
  - New client webhook -> welcome email -> wait 2hrs -> onboarding docs email
  - Wait 1 day -> check-in email -> wait 3 days -> week 1 guide
  - Conditional branches based on client tier
  - Slack notification to team at key milestones
- n8n nodes: Webhook, Wait, Email, Slack, Supabase, IF (branching)

**DATA FLOW:**
```
Dashboard: sales marks deal as "won" -> webhook to n8n
n8n: sends welcome email -> waits -> sends onboarding questionnaire
  -> Client fills form (webhook back to n8n) -> n8n creates accounts, sends docs
  -> Wait nodes space out check-in emails over 2 weeks
  -> Each step updates onboarding_status in Supabase
Dashboard: user tracks onboarding progress in real-time
```

---

#### m. Meeting Notes

**BUILD IN:** Hybrid — External transcription service + n8n (orchestration) + Claude API (summarization) + Next.js (UI)
**WHY:** Meeting transcription requires specialized ASR (Automatic Speech Recognition) that neither n8n, Next.js, nor Python should build from scratch. Use a transcription service (Deepgram, AssemblyAI, or Otter.ai API). n8n orchestrates the pipeline. Claude summarizes. Dashboard displays.
**KEY TECH:**
- Transcription: Deepgram API or AssemblyAI API (async transcription)
- n8n orchestration:
  - Webhook: receives meeting recording URL (from Zoom/Google Meet webhook)
  - HTTP Request: sends recording to Deepgram/AssemblyAI
  - Wait/polling: check transcription status
  - Claude node: summarize transcript, extract action items, key decisions
  - Supabase node: save transcript + summary + action items
  - Email/Slack: distribute summary to attendees
- Supabase tables: `meetings`, `transcripts`, `action_items`, `meeting_summaries`
- Next.js dashboard: meeting list, transcript viewer, action item tracker

**DATA FLOW:**
```
Zoom/Meet webhook -> n8n receives recording URL
  -> n8n sends to Deepgram for transcription (async)
  -> n8n polls for completion -> receives transcript
  -> Claude summarizes: key points, decisions, action items
  -> Save all to Supabase
  -> Send summary to attendees via email/Slack
Dashboard: browse meetings, search transcripts, track action items
```

---

#### n. Client Reporting

**BUILD IN:** Hybrid — n8n (data aggregation + scheduling) + Next.js (report UI + PDF) + Claude API (analysis)
**WHY:** Client reporting aggregates data from multiple sources (analytics, CRM, project tracker, invoices), then generates formatted reports. n8n handles the multi-source data collection on a schedule. The dashboard renders beautiful report templates. Claude adds narrative analysis.
**KEY TECH:**
- n8n workflows:
  - Monthly Schedule Trigger -> collect data from:
    - Google Analytics API (website metrics)
    - Supabase (project status, hours logged, invoice status)
    - Social media APIs (if managing client social)
  - Claude node: generate executive summary, analyze trends, make recommendations
  - Supabase node: save aggregated report data
- Next.js: report template renderer + PDF generation (Puppeteer for pixel-perfect branded reports)
- Supabase tables: `client_reports`, `report_data`, `report_templates`
- n8n: after report generation, email PDF to client

**DATA FLOW:**
```
n8n (monthly): Schedule Trigger -> pull data from all sources
  -> Claude generates narrative analysis
  -> Save structured report data to Supabase
  -> Trigger Next.js API Route to render report template -> generate PDF
  -> Store PDF in Supabase Storage
  -> Email PDF to client
Dashboard: user can preview, edit, and manually trigger reports
```

---

## Part 4: Summary Matrix

| # | Tool | Primary Platform | n8n Role | Python Role | Supabase EF Role |
|---|------|-----------------|----------|-------------|-----------------|
| a | CRM/Pipeline | **Next.js** | Notifications only | None | None |
| b | Invoicing | **Next.js** + n8n | Reminders, recurring gen | None | None |
| c | Scheduling | **Next.js** | Post-booking emails | None | None |
| d | Project Tracking | **Next.js** | Notifications only | None | None |
| e | Email Outreach | Next.js + **n8n** | Core sending engine | None | None |
| f | Content Calendar | Next.js + **n8n** | Scheduled publishing | None | None |
| g | Error Monitor | **n8n** | Core logic | None | Health check ping |
| h | Proposal Generator | **Next.js** + Claude API | Email delivery | None | None |
| i | Content Generator | Next.js + **n8n** + Claude API | Batch generation | None | None |
| j | Lead Research | Next.js + n8n + **Python** | Orchestration | Web scraping | None |
| k | SEO Research | Next.js + **n8n** | Data collection | Heavy analysis (optional) | None |
| l | Client Onboarding | Next.js + **n8n** | Multi-step sequences | None | None |
| m | Meeting Notes | Next.js + **n8n** + Claude API | Pipeline orchestration | None | None |
| n | Client Reporting | Next.js + **n8n** + Claude API | Data aggregation | None | None |

**Bold** = where the primary/heaviest logic lives.

---

## Part 5: Key Architectural Decisions

### 1. Supabase as the Single Source of Truth

Every tool reads from and writes to Supabase. n8n reads/writes via the Supabase node or Postgres node. Next.js reads/writes via @supabase/ssr. This means:
- One database schema serves all tools
- Real-time subscriptions work across the dashboard
- RLS policies secure data consistently

### 2. n8n as the Background Worker, Never the UI

n8n never faces users. It runs scheduled jobs, processes webhooks, and orchestrates multi-step automations. The Next.js dashboard is the only user-facing layer.

### 3. Direct Claude API for Complex AI Tasks

For tasks requiring prompt engineering, structured output, streaming, or multi-turn conversations (proposals, interactive content generation), call the Claude API directly from Next.js API routes. For simpler AI tasks (email personalization, data analysis, summarization as one step in a pipeline), n8n's Claude node is fine.

### 4. Python Only for Web Scraping

The only justified Python service is web scraping (lead research). Everything else can be handled by Next.js + n8n + Supabase. Don't introduce Python complexity where TypeScript suffices.

### 5. Supabase Edge Functions: Skip for Now

For a 2-3 person team, Edge Functions add another deployment surface with strict CPU limits. Next.js API routes or n8n cover every use case. Revisit if you need globally distributed, low-latency webhook receivers.

---

## Part 6: Implementation Priority

Given a 2-3 person team, build in this order (highest ROI first):

1. **CRM/Pipeline** (Week 1-2) — Foundation for all client data. Pure Next.js.
2. **Project Tracking** (Week 2-3) — Track your own work. Pure Next.js.
3. **Workflow Error Monitor** (Week 3) — Must-have before relying on n8n. Pure n8n, 2-3 hours.
4. **Client Onboarding** (Week 3-4) — Immediate client value. n8n + minimal dashboard UI.
5. **Invoicing** (Week 4-5) — Revenue tracking. Next.js + n8n.
6. **Email Outreach** (Week 5-7) — Lead generation. Next.js + n8n.
7. **Content Generator** (Week 7-8) — Content velocity. Next.js + n8n + Claude.
8. **Proposal Generator** (Week 8-9) — Sales velocity. Next.js + Claude API.
9. **Content Calendar** (Week 9-10) — Publishing automation. Next.js + n8n.
10. **Scheduling** (Week 10-11) — Booking automation. Next.js.
11. **Meeting Notes** (Week 11-12) — Productivity. n8n + Deepgram + Claude.
12. **Client Reporting** (Week 12-14) — Client retention. n8n + Next.js + Claude.
13. **SEO Research** (Week 14-16) — Growth. n8n + APIs.
14. **Lead Research** (Week 16-18) — Advanced. Python + n8n + Next.js.

---

## Sources

- [n8n vs custom code for SaaS builders](https://pixeljets.com/blog/n8n-vs-code/)
- [n8n Review 2026: Is It Worth It?](https://softailed.com/blog/n8n-review)
- [n8n in 2026: Latest Updates](https://medium.com/@angelosorte1/n8n-in-2026-latest-updates-practical-use-cases-ethical-automation-11af4cb4b455)
- [Custom Coding vs n8n Comparative Analysis](https://dev.to/amirrk2025/the-art-of-automation-custom-coding-vs-n8n-a-comprehensive-comparative-analysis-39mg)
- [n8n vs Make: Hidden Limits 2026](https://hatchworks.com/blog/ai-agents/n8n-vs-make/)
- [n8n: 7 Things to Know Before Starting (2026)](https://www.fahimai.com/n8n)
- [N8N AI Agents 2025: Capabilities Review](https://latenode.com/blog/low-code-no-code-platforms/n8n-setup-workflows-self-hosting-templates/n8n-ai-agents-2025-complete-capabilities-review-implementation-reality-check)
- [n8n 3 Tiers of Setup: Beginner to Scale](https://www.joshsorenson.com/blog/the-3-tiers-of-n8n-setup-from-beginner-to-scale)
- [n8n Concurrency Control Docs](https://docs.n8n.io/hosting/scaling/concurrency-control/)
- [n8n Self-Hosting Production Architecture on Render](https://render.com/articles/self-hosting-n8n-a-production-ready-architecture-on-render)
- [n8n System Requirements 2025](https://latenode.com/blog/low-code-no-code-platforms/n8n-setup-workflows-self-hosting-templates/n8n-system-requirements-2025-complete-hardware-specs-real-world-resource-analysis)
- [Self-Hosting n8n Enterprise Guide 2026](https://finbyz.tech/n8n/insights/self-hosting-n8n-enterprise-guide)
- [n8n vs Supabase: Automation or Backend](https://www.lowcode.agency/blog/n8n-vs-supabase)
- [Supabase Edge Functions Limits](https://supabase.com/docs/guides/functions/limits)
- [Supabase Edge Functions Architecture](https://supabase.com/docs/guides/functions/architecture)
- [Next.js Server Actions vs API Routes](https://dev.to/myogeshchavan97/nextjs-server-actions-vs-api-routes-dont-build-your-app-until-you-read-this-4kb9)
- [Next.js Building APIs](https://nextjs.org/blog/building-apis-with-nextjs)
- [n8n Web Scraping Complete Guide 2026](https://scrapegraphai.com/blog/n8n-web-scraper)
- [Playwright vs Puppeteer 2026](https://www.browserstack.com/guide/playwright-vs-puppeteer)
- [Firecrawl + n8n Web Automation](https://www.firecrawl.dev/blog/firecrawl-n8n-web-automation)
- [n8n LangChain Concepts](https://docs.n8n.io/advanced-ai/langchain/langchain-n8n/)
- [Build AI Agents with n8n: 2026 Guide](https://strapi.io/blog/build-ai-agents-n8n)
- [Claude Code vs n8n for Agentic Workflows](https://www.mindstudio.ai/blog/claude-code-vs-n8n-agentic-workflows-comparison)
- [n8n vs LangChain: When Each Wins](https://www.sakshamsolanki.com/blog/n8n-vs-langchain-ai-workflow-automation)
- [n8n Review 2026: 8 Months Building AI Agents](https://dev.to/nova_gg/n8n-review-2026-i-used-it-for-8-months-to-build-ai-agents-honest-verdict-2aib)
- [Atomic CRM (Supabase)](https://supabase.com/partners/integrations/atomic_crm)
- [Building a CRM with Next.js and Supabase](https://medium.com/@xvuong/building-a-practical-crm-with-next-js-supabse-chapter-1-a703987ce822)
- [n8n Invoice Processing Workflows](https://n8n.io/workflows/categories/invoice-processing/)
- [PDF Generation with n8n](https://www.customjs.space/blog/n8n-pdf-generation/)
- [n8n Cold Email Outreach Sequence](https://n8n.io/workflows/2833-smart-email-outreach-sequence-ai-powered-and-customizable/)
- [n8n Lead Generation Workflows](https://n8n.io/workflows/categories/lead-generation/)
- [n8n Client Onboarding Automation](https://n8nlab.io/n8n-for-onboarding-automation)
- [n8n Best Practices: 10 Rules for Production](https://till-freitag.com/en/blog/n8n-best-practices-guide-en)
- [Meeting Automation Workflows 2026](https://summarizemeeting.com/en/blog/meeting-automation-workflows)
- [Automated Client Reporting with AI](https://improvado.io/blog/automated-client-reporting)
- [6 PDF Libraries for React 2025](https://dev.to/ansonch/6-open-source-pdf-generation-and-modification-libraries-every-react-dev-should-know-in-2025-13g0)
- [Claude Code + n8n Self-Building Agents](https://www.ability.ai/blog/claude-code-n8n-workflows)
