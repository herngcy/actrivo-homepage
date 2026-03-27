import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Email Marketing Automation | Actrivo",
  description: "Auto-segmented audiences, behavior-triggered campaigns, and revenue tracking that shows what actually works.",
};

export default function EmailMarketingPage() {
  return <ServicePageTemplate data={servicePages["email-marketing"]} />;
}
