import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { servicePages } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "AI Document Processing | Actrivo",
  description: "AI reads your invoices, POs, and receipts — extracts the data and routes it to the right system. No typing required.",
};

export default function AIDocumentProcessingPage() {
  return <ServicePageTemplate data={servicePages["ai-document-processing"]} />;
}
