import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import type { Metadata } from "next";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://codeshipacademy.com"),
  title: "CODEship Academy",
  description: "Canada's Inclusive Future Skills Academy for Children.",
  openGraph: {
    title: "CODEship Academy",
    description: "Inclusive future-skills learning for children, families, schools, and communities."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
