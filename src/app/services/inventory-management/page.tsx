import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Inventory Management Automation | Actrivo",
  description: "Real-time stock sync across every channel. Automatic alerts and reorders — no spreadsheet counts, no stockouts.",
};

export default function InventoryManagementPage() {
  return <ServicePageTemplate data={servicePages["inventory-management"]} />;
}
