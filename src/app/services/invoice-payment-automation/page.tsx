import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Invoice & Payment Automation | Actrivo",
  description: "Auto-generate invoices, send payment reminders on schedule, and reconcile bank deposits — without lifting a finger.",
};

export default function InvoicePaymentAutomationPage() {
  return <ServicePageTemplate data={servicePages["invoice-payment-automation"]} />;
}
