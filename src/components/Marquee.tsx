"use client";

import { motion } from "motion/react";
import { Marquee as UIMarquee } from "@/components/ui/marquee";
import {
  SiWhatsapp,
  SiGmail,
  SiSlack,
  SiGooglesheets,
  SiGoogledrive,
  SiTelegram,
  SiMysql,
} from "react-icons/si";
import {
  BsFileEarmarkExcelFill,
  BsFileEarmarkWordFill,
  BsShareFill,
  BsBarChartLineFill,
} from "react-icons/bs";

const integrations = [
  { name: "WhatsApp", Icon: SiWhatsapp },
  { name: "Excel", Icon: BsFileEarmarkExcelFill },
  { name: "SharePoint", Icon: BsShareFill },
  { name: "Word", Icon: BsFileEarmarkWordFill },
  { name: "Gmail", Icon: SiGmail },
  { name: "Slack", Icon: SiSlack },
  { name: "SQL Database", Icon: SiMysql },
  { name: "Google Sheets", Icon: SiGooglesheets },
  { name: "Google Drive", Icon: SiGoogledrive },
  { name: "Power BI", Icon: BsBarChartLineFill },
  { name: "Telegram", Icon: SiTelegram },
];

export function Marquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 overflow-hidden relative"
      style={{
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "#525252" }}
        >
          We Connect With The Tools You Already Use
        </p>
      </div>

      <UIMarquee
        duration={30}
        pauseOnHover
        fade
        fadeAmount={10}
        className="opacity-50 hover:opacity-80"
        style={{ transition: "opacity 300ms" }}
      >
        {integrations.map((item, idx) => (
          <div
            key={idx}
            className="group flex-shrink-0 flex flex-col items-center justify-center cursor-default"
            style={{
              width: 56,
              marginLeft: 48,
              marginRight: 48,
              color: "#737373",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#262626")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#737373")
            }
          >
            <item.Icon size={40} />
            <span
              className="text-[13px] font-semibold mt-2 whitespace-nowrap opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-300 ease-out"
              style={{ color: "inherit" }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </UIMarquee>
    </motion.section>
  );
}
