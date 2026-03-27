import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Reporting Dashboards | Actrivo",
  description: "Live dashboards that pull from all your tools and update automatically. Make decisions with today's data, not last week's.",
};

export default function ReportingDashboardsPage() {
  return <ServicePageTemplate data={servicePages["reporting-dashboards"]} />;
}
