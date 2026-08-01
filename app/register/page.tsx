import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PROGRAM_LINKS } from "@/lib/payment-links";
import { EnrollButton } from "@/components/EnrollButton";

export const metadata: Metadata = {
  title: "Register Now | CODEship Academy",
  description: "Register your child for a CODEship Academy program for the semester.",
};

export default function RegisterPage() {
  return (
    <SiteShell locale="en">
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: "#0D1B2A", marginBottom: 8 }}>
          Register Now
        </h1>
        <p style={{ fontSize: 16, color: "#3A5B9E", marginBottom: 40 }}>
          Choose a program to enroll for the semester.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {(Object.entries(PROGRAM_LINKS) as [keyof typeof PROGRAM_LINKS, typeof PROGRAM_LINKS[keyof typeof PROGRAM_LINKS]][]).map(
            ([key, config]) => (
              <div
                key={key}
                style={{
                  border: "1px solid #1A2340",
                  borderRadius: 14,
                  padding: 28,
                  background: "#0D1B2A",
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
                      color: "#F5C518",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {config.ageRange}
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{config.label}</h2>
                  <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
                    CAD ${config.priceCad}
                    <span style={{ fontSize: 14, fontWeight: 400, color: "#9AA5B1" }}> / semester</span>
                  </div>
                </div>
                <EnrollButton program={key} />
              </div>
            )
          )}
        </div>
      </main>
    </SiteShell>
  );
}
