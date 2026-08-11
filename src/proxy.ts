import { NextResponse } from "next/server";
import { contentSecurityPolicyHeader } from "@/lib/content-security-policy";

export function proxy() {
  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", contentSecurityPolicyHeader);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
