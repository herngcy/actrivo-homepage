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
      "Instant auto-replies to enquiries, automated order confirmations, and scheduled promo broadcasts — all through WhatsApp Business API. Customers get responses in seconds, not hours.",
    accentColor: "#25D366",
    serviceLink: "/services/whatsapp-business-automation",
  },
  {
    id: "excel",
    src: "/icons/microsoft-excel.svg",
    label: "Excel",
    popupTitle: "Spreadsheet Sync",
    popupBody:
      "Two-way sync between Excel/Google Sheets and your CRM, invoicing, or inventory system. New rows trigger workflows, formulas stay intact, and copy-paste errors disappear overnight.",
    accentColor: "#217346",
    serviceLink: "/services/data-entry-automation",
  },
  {
    id: "gmail",
    src: "/icons/gmail.svg",
    label: "Gmail",
    popupTitle: "Email Automation",
    popupBody:
      "Behaviour-based segmentation, drip campaigns triggered by sign-ups or purchases, and timed follow-ups that re-engage cold leads — all running on autopilot inside Gmail.",
    accentColor: "#EA4335",
    serviceLink: "/services/email-marketing",
  },
  {
    id: "google-drive",
    src: "/icons/google drive.svg",
    label: "Google Drive",
    popupTitle: "Document Workflows",
    popupBody:
      "AI reads incoming PDFs, invoices, and forms — extracts key fields, sorts files into the right Drive folders, and kicks off approval or data-entry workflows automatically.",
    accentColor: "#4285F4",
    serviceLink: "/services/ai-document-processing",
  },
  {
    id: "power-bi",
    src: "/icons/power-bi.svg",
    label: "Power BI",
    popupTitle: "Live Dashboards",
    popupBody:
      "Real-time Power BI dashboards fed by your sales, inventory, and finance data. No more compiling weekly reports — KPIs update themselves and alert you when numbers drift.",
    accentColor: "#F2C811",
    serviceLink: "/services/reporting-dashboards",
  },
  {
    id: "postgresql",
    src: "/icons/postgresql.svg",
    label: "PostgreSQL",
    popupTitle: "Database Automation",
    popupBody:
      "Automated data validation, deduplication, and cross-system sync between your database and business tools. Records stay clean and consistent without anyone touching a query.",
    accentColor: "#336791",
    serviceLink: "/services/data-entry-automation",
  },
  {
    id: "sharepoint",
    src: "/icons/ms-sharepoint.svg",
    label: "SharePoint",
    popupTitle: "Enterprise Documents",
    popupBody:
      "AI scans SharePoint uploads — extracts text, tags metadata, and routes documents to the right team or approval chain. Filing that used to take hours happens in seconds.",
    accentColor: "#0078D4",
    serviceLink: "/services/ai-document-processing",
  },
];
