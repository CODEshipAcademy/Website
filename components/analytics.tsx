"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, hasAnalyticsConsent } from "@/lib/consent";

/**
 * Loads Meta Pixel and Google Analytics 4 only when BOTH are true:
 *   1. the ID is configured via env var, and
 *   2. the visitor has accepted analytics cookies (Law 25 / PIPEDA / CASL).
 *
 * Scripts are injected the moment consent is granted — no page reload needed —
 * because we listen for the in-tab consent event and cross-tab storage changes.
 *
 * Set in the deployment environment (both optional):
 *   NEXT_PUBLIC_FB_PIXEL_ID=xxxxxxxxxxxxxxx
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */
export function Analytics() {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => setAllowed(hasAnalyticsConsent());
    update();
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  if (!allowed) return null;

  return (
    <>
      {pixelId && (
        <>
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
