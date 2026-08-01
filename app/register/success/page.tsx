"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { PROGRAM_LINKS, ProgramLevel } from "@/lib/payment-links";

function RegisterSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const program = searchParams.get("program") as ProgramLevel | null;

  useEffect(() => {
    if (!program || !PROGRAM_LINKS[program]) return;
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq(
        "track",
        "Purchase",
        { value: PROGRAM_LINKS[program].priceCad, currency: "CAD" },
        { eventID: sessionId ?? undefined }
      );
    }
  }, [program, sessionId]);

  return (
    <main style={{ maxWidth: 560, margin: "80px auto", textAlign: "center", padding: "0 24px" }}>
      <h1>You&apos;re registered.</h1>
      <p>A confirmation email is on its way. We&apos;ll follow up with class details before your first session.</p>
    </main>
  );
}

export default function RegisterSuccessPage() {
  return (
    <SiteShell locale="en">
      <Suspense fallback={null}>
        <RegisterSuccess />
      </Suspense>
    </SiteShell>
  );
}
