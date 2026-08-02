import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PROGRAM_LINKS, PROGRAM_ORDER, ageLabel } from "@/lib/payment-links";

export const metadata: Metadata = {
  title: "Register for Kids Coding Classes | CODEship Academy",
  description:
    "Register your child for CODEship Academy coding classes. Ages 4–14, small inclusive classes, from CAD $175/semester. Secure checkout — save your spot today.",
  alternates: { canonical: "/register" },
};

const included = [
  "Live, small-group classes with a dedicated instructor",
  "Weekly project-based lessons your child keeps and shares",
  "Progress updates for families every step of the way",
  "Inclusive, neurodiverse-friendly classrooms",
];

export default function RegisterPage() {
  return (
    <SiteShell locale="en">
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#2E3246", marginBottom: 8 }}>
          Register for the Semester
        </h1>
        <p style={{ fontSize: 16, color: "#3F51B5", marginBottom: 12, maxWidth: 640 }}>
          Choose your child&apos;s program below and reserve a spot in seconds. Secure
          checkout powered by Stripe — no account required.
        </p>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            listStyle: "none",
            padding: 0,
            margin: "0 0 40px",
            fontSize: 14,
            color: "#2E3246",
          }}
        >
          {included.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {PROGRAM_ORDER.map((key) => {
            const config = PROGRAM_LINKS[key];
            return (
              <div
                key={key}
                style={{
                  border: "1px solid #1A2340",
                  borderRadius: 14,
                  padding: 28,
                  background: "#2E3246",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.05em",
                      color: "#FFD740",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {ageLabel(key, false)}
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{config.label}</h2>
                  <p style={{ fontSize: 14, color: "#C7CEDB", marginBottom: 16, lineHeight: 1.5 }}>
                    {config.techEn}
                  </p>
                  <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
                    CAD ${config.priceCad}
                    <span style={{ fontSize: 14, fontWeight: 400, color: "#9AA5B1" }}> / semester</span>
                  </div>
                </div>
                <Link
                  href={`/register/${key}`}
                  style={{
                    display: "inline-block",
                    padding: "14px 22px",
                    borderRadius: 10,
                    background: "#FFD740",
                    color: "#2E3246",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  See details &amp; register →
                </Link>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: 13, color: "#6B7280", marginTop: 28 }}>
          Not sure which program fits?{" "}
          <Link href="/en/programs" style={{ color: "#3F51B5", fontWeight: 600 }}>
            Compare programs
          </Link>{" "}
          or{" "}
          <Link href="/en/contact" style={{ color: "#3F51B5", fontWeight: 600 }}>
            ask us a question
          </Link>
          .
        </p>
      </main>
    </SiteShell>
  );
}
