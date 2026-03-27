import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "WhatsApp Business Automation | Actrivo",
  description: "Automate replies, orders, bookings, and broadcasts on WhatsApp — the channel your Malaysian customers already use.",
};

export default function WhatsAppBusinessAutomationPage() {
  return <ServicePageTemplate data={servicePages["whatsapp-business-automation"]} />;
}
