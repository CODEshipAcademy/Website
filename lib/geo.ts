import { headers } from "next/headers";

/**
 * Visitor location from Cloudflare's edge geo headers.
 *
 * `cf-ipcountry` is added by Cloudflare automatically; the city/region headers
 * (`cf-ipcity`, `cf-region`) require the Cloudflare "Add visitor location
 * headers" managed transform to be enabled on the zone. When the headers are
 * absent (local dev, non-Cloudflare host, or transform disabled) we fall back
 * to a Canada-wide default so the page still renders correctly.
 *
 * Classes are online, so we localize to the visitor's own city — but only
 * within Canada.
 */
export interface VisitorGeo {
  city: string | null;
  region: string | null;
  inCanada: boolean;
}

function clean(value: string | null): string | null {
  if (!value) return null;
  let v = value.trim();
  try {
    v = decodeURIComponent(v);
  } catch {
    /* value wasn't percent-encoded */
  }
  return v.length ? v : null;
}

export async function getVisitorGeo(): Promise<VisitorGeo> {
  const h = await headers();
  const country = (h.get("cf-ipcountry") || "").toUpperCase();
  const inCanada = country === "CA";
  return {
    city: inCanada ? clean(h.get("cf-ipcity")) : null,
    region: inCanada ? clean(h.get("cf-region")) : null,
    inCanada,
  };
}
