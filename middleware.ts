// // export default function middleware() {}
// import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(req) {
//     const { pathname } = req.nextUrl;

//     // If user is authenticated and on login page, redirect to dashboard
//     if (req.nextauth.token && pathname === "/authentication/login") {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }

//     // If user is NOT authenticated and tries to access the dashboard, redirect to login
//     if (!req.nextauth.token && pathname === "/dashboard") {
//       return NextResponse.redirect(new URL("/authentication/login", req.url));
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token, // Check if the user is logged in
//     },
//   }
// );

// export const config = {
//   matcher: ["/login", "/dashboard"], // Apply middleware on login and dashboard pages
// };
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

  // Allow other requests to proceed
  return NextResponse.next();
}

// Specify the paths to include/exclude for middleware
export const config = {
  matcher: ["/authentication/login", "/dashboard/:path*"], // Apply to login page and all dashboard routes
};
