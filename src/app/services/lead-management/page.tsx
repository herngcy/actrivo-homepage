import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Lead Management Automation | Actrivo",
  description: "Every inquiry captured, scored, and followed up automatically. Scattered leads become an organized, automated pipeline.",
};

export default function LeadManagementPage() {
  return <ServicePageTemplate data={servicePages["lead-management"]} />;
}
