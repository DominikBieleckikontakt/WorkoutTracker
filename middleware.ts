import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Define paths that require auth
const protectedPaths = ["/dashboard"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  if (token?.isNewUser && !req.nextUrl.pathname.startsWith("/onboarding")) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  // Check if the requested path is protected
  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !token) {
    // If the user is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/authentication/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to specific routes (for production only)
export const config = { matcher: ["/dashboard/:path*"] };
