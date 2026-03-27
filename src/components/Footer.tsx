"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";

const services = [
  { href: "/services/data-entry-automation", label: "Data Entry Automation" },
  { href: "/services/ai-document-processing", label: "AI Document Processing" },
  { href: "/services/whatsapp-business-automation", label: "WhatsApp Automation" },
  { href: "/services/invoice-payment-automation", label: "Invoice Automation" },
  { href: "/services/customer-workflows", label: "Customer Workflows" },
];

const company = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <LinkedinIcon className="w-4 h-4" />,
    href: "https://www.linkedin.com/company/actrivo/posts/?feedView=all",
    label: "LinkedIn",
  },
  {
    icon: <InstagramIcon className="w-4 h-4" />,
    href: "https://www.instagram.com/_actrivo/",
    label: "Instagram",
  },
];

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkStyles = {
    color: "#737373",
    transition: "color 150ms",
  };

  const className =
    "block py-1 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] rounded";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={linkStyles}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.color = "#ffffff")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.color = "#737373")
        }
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        style={linkStyles}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.color = "#ffffff")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.color = "#737373")
        }
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      style={linkStyles}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "#ffffff")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "#737373")
      }
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative" style={{ backgroundColor: "#000000" }}>
      {/* Top border accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, #262626, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand — wide column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 w-max mb-5">
              <Image
                src="/actrivo-logo.jpeg"
                alt="Actrivo"
                width={32}
                height={32}
                className="rounded"
              />
              <span
                className="text-xl font-bold tracking-wide"
                style={{ color: "#ffffff" }}
              >
                Actrivo
              </span>
            </Link>
            <p
              className="max-w-xs text-sm leading-relaxed mb-6"
              style={{ color: "#525252" }}
            >
              We help Malaysian SMEs automate repetitive workflows — from data
              entry to invoicing — so your team can focus on growth, not admin.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:actrivo@gmail.com"
                className="flex items-center gap-2.5 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311] rounded"
                style={{ color: "#737373", transition: "color 150ms" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fca311")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#737373")
                }
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                actrivo@gmail.com
              </a>
              <div
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "#525252" }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Kuala Lumpur, Malaysia
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="rounded-lg border p-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                  aria-label={item.label}
                  style={{
                    borderColor: "#262626",
                    color: "#737373",
                    transition:
                      "border-color 150ms, background-color 150ms, color 150ms, transform 150ms",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#fca311";
                    el.style.backgroundColor = "rgba(252,163,17,0.1)";
                    el.style.color = "#fca311";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#262626";
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#737373";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-1 lg:col-span-3">
            <span
              className="mb-4 block text-xs font-bold uppercase tracking-widest"
              style={{ color: "#525252" }}
            >
              Services
            </span>
            <div className="flex flex-col">
              {services.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div className="col-span-1 lg:col-span-2">
            <span
              className="mb-4 block text-xs font-bold uppercase tracking-widest"
              style={{ color: "#525252" }}
            >
              Company
            </span>
            <div className="flex flex-col">
              {company.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* CTA mini column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <span
              className="mb-4 block text-xs font-bold uppercase tracking-widest"
              style={{ color: "#525252" }}
            >
              Get Started
            </span>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#737373" }}
            >
              Book a free 30-minute workflow audit. No commitment required.
            </p>
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fca311]"
              style={{
                backgroundColor: "rgba(252,163,17,0.1)",
                color: "#fca311",
                border: "1px solid rgba(252,163,17,0.25)",
                transition:
                  "background-color 150ms, border-color 150ms, transform 150ms",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(252,163,17,0.15)";
                el.style.borderColor = "rgba(252,163,17,0.4)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(252,163,17,0.1)";
                el.style.borderColor = "rgba(252,163,17,0.25)";
                el.style.transform = "translateY(0)";
              }}
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <p className="text-xs" style={{ color: "#404040" }}>
            &copy; {year} Actrivo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </div>
          <p className="text-xs" style={{ color: "#333333" }}>
            Automating Malaysian SMEs, One Workflow at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
}
