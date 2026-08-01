import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.includes(".")) return NextResponse.next();

  const segment = pathname.split("/")[1];
  if (!isLocale(segment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  // `register` is intentionally excluded from locale redirects: the register and
  // post-payment success pages live at /register and /register/success
  // (non-localized) so Stripe Payment Links and ad campaigns can point at single
  // stable URLs.
  matcher: ["/((?!api|register).*)"]
};
