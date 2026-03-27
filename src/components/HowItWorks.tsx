"use client";

import { motion } from "motion/react";
import { MessageSquare, Sheet } from "lucide-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discover Your Workflow",
    description:
      "We sit with your team, watch how work actually gets done, and identify the repetitive tasks eating up hours every week. No generic checklist—just real observation.",
    content: (
      <div className="w-full h-full rounded-xl p-6 flex flex-col justify-center bg-[#0a0a0a] border border-[#262626]">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-actrivo" />
          <span className="text-xs font-bold uppercase tracking-widest text-actrivo">Time Wasted Per Week</span>
        </div>
        {[
          { label: "Copy-pasting between Excel & WhatsApp", hrs: "12 hrs", active: true },
          { label: "Chasing approvals via group chat", hrs: "8 hrs", active: true },
          { label: "Manually updating inventory sheets", hrs: "15 hrs", active: false },
          { label: "Sending payment reminders", hrs: "6 hrs", active: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 mb-3.5 last:mb-0">
            <div
              className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                item.active
                  ? "bg-actrivo/10 border-actrivo"
                  : "bg-[#1a1a1a] border-[#333]"
              }`}
              style={{ borderWidth: "1px" }}
            >
              {item.active && (
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1 4l2 2 4-4" stroke="#fca311" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <span className="text-xs flex-1 text-[#a3a3a3] font-light">{item.label}</span>
            <span
              className={`text-xs font-bold tabular-nums transition-colors duration-200 ${
                item.active ? "text-actrivo" : "text-[#525252]"
              }`}
            >
              {item.hrs}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Design the Automation",
    description:
      "We map out exactly how information should flow—from the WhatsApp message to the spreadsheet update to the notification. Every step planned before we write a line of code.",
    content: (
      <div className="w-full h-full rounded-xl p-6 flex flex-col justify-center bg-[#0a0a0a] border border-[#262626]">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-actrivo" />
          <span className="text-xs font-bold uppercase tracking-widest text-actrivo">Example Flow</span>
        </div>

        {/* Simple horizontal workflow - fits in card */}
        <div className="flex items-center justify-between gap-1">
          {/* Step 1 */}
          <div className="flex-1 bg-[#111] border border-[#333] rounded-lg px-2 py-2">
            <div className="text-[9px] text-[#737373] font-light mb-0.5">Receive</div>
            <div className="text-[11px] text-white font-medium leading-tight">WhatsApp</div>
          </div>

          {/* Arrow */}
          <svg className="flex-shrink-0" width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Step 2 - Highlighted */}
          <div className="flex-1 bg-actrivo/8 border border-actrivo/50 rounded-lg px-2 py-2">
            <div className="text-[9px] text-actrivo font-medium mb-0.5">Process</div>
            <div className="text-[11px] text-white font-medium leading-tight">AI Extract</div>
          </div>

          {/* Arrow */}
          <svg className="flex-shrink-0" width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="#fca311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Step 3 */}
          <div className="flex-1 bg-[#111] border border-[#333] rounded-lg px-2 py-2">
            <div className="text-[9px] text-[#737373] font-light mb-0.5">Update</div>
            <div className="text-[11px] text-white font-medium leading-tight">Sheets</div>
          </div>

          {/* Arrow */}
          <svg className="flex-shrink-0" width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Step 4 */}
          <div className="flex-1 bg-[#111] border border-[#333] rounded-lg px-2 py-2">
            <div className="text-[9px] text-[#737373] font-light mb-0.5">Notify</div>
            <div className="text-[11px] text-white font-medium leading-tight">Team</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Build & Integrate",
    description:
      "We build the automation using Make.com or n8n, connect it to your WhatsApp, Google Sheets, and existing systems. You test it first—nothing goes live until you approve.",
    content: (
      <div className="w-full h-full rounded-xl p-6 flex flex-col justify-center bg-[#0a0a0a] border border-[#262626]">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-actrivo" />
          <span className="text-xs font-bold uppercase tracking-widest text-actrivo">Integration Status</span>
        </div>
        <div className="space-y-4">
          {/* WhatsApp to Make.com */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#111] border border-[#333]">
              <MessageSquare className="w-5 h-5 text-[#a3a3a3]" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-light text-[#d4d4d4] mb-1">WhatsApp Business API</div>
              <div className="h-1.5 bg-[#262626] rounded-full overflow-hidden">
                <div className="h-full bg-actrivo rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
            <span className="text-[10px] font-bold text-actrivo">✓ Live</span>
          </div>

          {/* Sheets Integration */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#111] border border-[#333]">
              <Sheet className="w-5 h-5 text-[#a3a3a3]" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-light text-[#d4d4d4] mb-1">Google Sheets Database</div>
              <div className="h-1.5 bg-[#262626] rounded-full overflow-hidden">
                <div className="h-full bg-actrivo rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
            <span className="text-[10px] font-bold text-actrivo">✓ Live</span>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#111] border border-[#333]">
              <svg className="w-5 h-5 text-[#a3a3a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-light text-[#d4d4d4] mb-1">Email Notifications</div>
              <div className="h-1.5 bg-[#262626] rounded-full overflow-hidden">
                <div className="h-full bg-actrivo rounded-full animate-pulse" style={{ width: "67%" }} />
              </div>
            </div>
            <span className="text-[10px] font-medium text-[#737373]">Testing</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Monitor & Scale",
    description:
      "We track how the automation performs, fix issues within 24 hours, and add new features as your needs change. Monthly check-ins to keep everything running smooth.",
    content: (
      <div className="w-full h-full rounded-xl p-6 flex flex-col justify-center bg-[#0a0a0a] border border-[#262626]">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-actrivo" />
          <span className="text-xs font-bold uppercase tracking-widest text-actrivo">Last 30 Days</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#111] border border-[#262626] rounded-lg p-3">
            <div className="text-xs text-[#737373] font-light mb-1">Messages</div>
            <div className="text-lg font-bold text-white">1,247</div>
            <div className="text-[9px] text-actrivo font-medium">+23% ↑</div>
          </div>
          <div className="bg-[#111] border border-[#262626] rounded-lg p-3">
            <div className="text-xs text-[#737373] font-light mb-1">Processed</div>
            <div className="text-lg font-bold text-white">1,245</div>
            <div className="text-[9px] text-actrivo font-medium">99.8%</div>
          </div>
          <div className="bg-[#111] border border-[#262626] rounded-lg p-3">
            <div className="text-xs text-[#737373] font-light mb-1">Errors</div>
            <div className="text-lg font-bold text-white">2</div>
            <div className="text-[9px] text-[#737373] font-light">Fixed</div>
          </div>
        </div>

        {/* Uptime indicator */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#737373] font-light">Uptime</span>
          <span className="text-actrivo font-bold">99.9%</span>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 md:py-32"
      style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-7xl mx-auto">
        <StickyScroll
          content={content}
          contentClassName="bg-[#0a0a0a] border border-[#262626]"
          header={
            <div className="mb-8">
              <span
                className="text-xs uppercase tracking-[0.2em] mb-4 block"
                style={{ color: "#737373" }}
              >
                Our Process
              </span>
              <h2
                className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em]"
                style={{ color: "#0a0a0a", lineHeight: "1.1" }}
              >
                How Actrivo Works
              </h2>
            </div>
          }
        />
      </div>
    </section>
  );
}
