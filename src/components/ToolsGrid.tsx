"use client";

import { motion } from "motion/react";
import { IconType } from "react-icons";
import {
  SiGooglesheets,
  SiMysql,
  SiWhatsapp,
  SiGmail,
  SiGoogledrive,
  SiSlack,
  SiTelegram,
  SiNotion,
  SiAirtable,
  SiShopify,
} from "react-icons/si";
import { Database, FileSpreadsheet, BarChart3, Mail, FolderOpen } from "lucide-react";

// Tool icon mapping - using Lucide icons for tools without react-icons equivalents
const toolIcons: Record<string, IconType | React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  "Excel": FileSpreadsheet,
  "Google Sheets": SiGooglesheets,
  "SQL": SiMysql,
  "SQL Database": Database,
  "WhatsApp": SiWhatsapp,
  "WhatsApp Business API": SiWhatsapp,
  "Gmail": SiGmail,
  "Google Drive": SiGoogledrive,
  "Slack": SiSlack,
  "Telegram": SiTelegram,
  "Notion": SiNotion,
  "Airtable": SiAirtable,
  "Shopify": SiShopify,
  "Outlook": Mail,
  "SharePoint": FolderOpen,
  "Power BI": BarChart3,
  "Google Looker Studio": BarChart3,
  "Xero": FileSpreadsheet,
  "QuickBooks": FileSpreadsheet,
  "Autocount": FileSpreadsheet,
  "HubSpot": Database,
};

interface ToolsGridProps {
  tools: string[];
  title?: string;
  subtitle?: string;
}

export function ToolsGrid({
  tools,
  title = "Tools We Connect",
  subtitle = "Don't see your tool? Ask us — we can almost certainly connect to it."
}: ToolsGridProps) {
  return (
    <section
      className="py-16 px-6 md:py-24"
      style={{ backgroundColor: "#fafafa", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="text-center mb-12"
        >
          <h2
            className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mb-4"
            style={{ color: "#000000" }}
          >
            {title}
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#737373" }}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => {
            const Icon = toolIcons[tool] || Database;
            return (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: index * 0.05
                }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e5",
                  transition: "border-color 200ms, box-shadow 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252,163,17,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(252,163,17,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e5e5";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={24} style={{ color: "#737373", flexShrink: 0 }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#000000" }}
                >
                  {tool}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
