import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Data Entry Automation | Actrivo",
  description: "Eliminate manual data entry with AI-powered automation. Actrivo syncs your data automatically across systems — no copy-paste, no errors, no wasted hours.",
};

export default function DataEntryAutomationPage() {
  return <ServicePageTemplate data={servicePages["data-entry-automation"]} />;
}
