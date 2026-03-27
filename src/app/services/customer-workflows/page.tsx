import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Customer Workflow Automation | Actrivo",
  description: "Instant responses, automatic qualification, relentless follow-up. Your sales team only talks to people ready to buy.",
};

export default function CustomerWorkflowsPage() {
  return <ServicePageTemplate data={servicePages["customer-workflows"]} />;
}
