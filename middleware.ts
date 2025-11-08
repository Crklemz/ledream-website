import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Rate limiting configuration placeholder
  // For production rate limiting, consider using:
  // - Vercel's built-in rate limiting (automatic)
  // - Upstash Redis for distributed rate limiting
  // - Custom implementation with in-memory store for simple cases
  //
  // Example implementation with Upstash Redis:
  // const rateLimit = await checkRateLimit(request);
  // if (!rateLimit.allowed) {
  //   return NextResponse.json(
  //     { error: "Too many requests" },
  //     { status: 429 }
  //   );
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

