import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://codeshipacademy.com"),
  title: {
    default: "Kids Coding Classes in Canada | CODEship Academy",
    template: "%s",
  },
  description:
    "Inclusive online coding classes for kids ages 4–14 — Scratch, Python & AI in small classes across Canada. Register for the semester from CAD $175.",
  applicationName: "CODEship Academy",
  keywords: [
    "coding classes for kids",
    "kids coding classes online",
    "coding for kids Canada",
    "STEM programs for kids",
    "learn to code for kids",
    "coding camp for kids",
  ],
  openGraph: {
    type: "website",
    siteName: "CODEship Academy",
    title: "Kids Coding Classes in Canada | CODEship Academy",
    description:
      "Inclusive, project-based coding classes for kids ages 4–14. Small classes, neurodiverse-friendly, from CAD $175 per semester.",
    images: [{ url: "/codeship-logo.png", width: 512, height: 512, alt: "CODEship Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Classes in Canada | CODEship Academy",
    description:
      "Inclusive, project-based coding classes for kids ages 4–14. Small classes, from CAD $175 per semester.",
    images: ["/codeship-logo.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CODEship Academy",
  url: "https://codeshipacademy.com",
  logo: "https://codeshipacademy.com/codeship-logo.png",
  description:
    "Canada's inclusive future-skills academy for children — project-based coding, AI, and STEM classes for kids ages 4–14.",
  areaServed: { "@type": "Country", name: "Canada" },
  knowsLanguage: ["en", "fr"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
