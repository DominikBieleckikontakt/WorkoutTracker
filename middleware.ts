import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Define paths
  const loginPath = "/authentication/login";
  const dashboardPath = "/dashboard";

  // If user is authenticated and tries to access the login page, redirect to dashboard
  if (token && pathname === loginPath) {
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  // If user is not authenticated and tries to access the dashboard, redirect to login
  if (!token && pathname.startsWith(dashboardPath)) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // If user is not authenticated and tries to access the onboarding page, redirect to login
  if (!token && pathname === "/onboarding") {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // Allow other requests to proceed
  return NextResponse.next();
}

// Specify the paths to include/exclude for middleware
export const config = {
  matcher: ["/authentication/login", "/dashboard/:path*", "/onboarding"], // Apply to login page and all dashboard routes
};
