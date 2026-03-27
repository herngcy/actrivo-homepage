export interface OrbitalIcon {
  id: string;
  src: string;
  label: string;
  popupTitle: string;
  popupBody: string;
  accentColor: string;
  serviceLink: string;
}

export const ORBITAL_ICONS: OrbitalIcon[] = [
  {
    id: "whatsapp",
    src: "/icons/whatsapp.svg",
    label: "WhatsApp",
    popupTitle: "WhatsApp Automation",
    popupBody:
      "Auto-reply to customers, process orders, and broadcast promos — through the chat app your customers already use daily.",
    accentColor: "#25D366",
    serviceLink: "/services/whatsapp-business-automation",
  },
  {
    id: "excel",
    src: "/icons/microsoft-excel.svg",
    label: "Excel",
    popupTitle: "Spreadsheet Sync",
    popupBody:
      "We connect your spreadsheets to CRMs, invoicing, and inventory tools. Data flows automatically — no more copy-paste errors.",
    accentColor: "#217346",
    serviceLink: "/services/data-entry-automation",
  },
  {
    id: "gmail",
    src: "/icons/gmail.svg",
    label: "Gmail",
    popupTitle: "Email Automation",
    popupBody:
      "Smart segmentation, triggered campaigns, and auto-follow-ups that nurture leads while you sleep.",
    accentColor: "#EA4335",
    serviceLink: "/services/email-marketing",
  },
  {
    id: "google-drive",
    src: "/icons/google drive.svg",
    label: "Google Drive",
    popupTitle: "Document Workflows",
    popupBody:
      "Extract data from uploaded PDFs, route files to the right folders, and trigger actions when documents arrive.",
    accentColor: "#4285F4",
    serviceLink: "/services/ai-document-processing",
  },
  {
    id: "power-bi",
    src: "/icons/power-bi.svg",
    label: "Power BI",
    popupTitle: "Live Dashboards",
    popupBody:
      "Replace manual weekly reports with real-time dashboards that pull from all your data sources automatically.",
    accentColor: "#F2C811",
    serviceLink: "/services/reporting-dashboards",
  },
  {
    id: "postgresql",
    src: "/icons/postgresql.svg",
    label: "PostgreSQL",
    popupTitle: "Database Automation",
    popupBody:
      "Your business data synced, validated, and updated across systems without manual intervention.",
    accentColor: "#336791",
    serviceLink: "/services/data-entry-automation",
  },
  {
    id: "sharepoint",
    src: "/icons/ms-sharepoint.svg",
    label: "SharePoint",
    popupTitle: "Enterprise Documents",
    popupBody:
      "AI-powered document processing that extracts, classifies, and routes your business files automatically.",
    accentColor: "#0078D4",
    serviceLink: "/services/ai-document-processing",
  },
];
