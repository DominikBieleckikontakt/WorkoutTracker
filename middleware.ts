// export default function middleware() {}
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    // If user is authenticated and on login page, redirect to dashboard
    if (req.nextauth.token && pathname === "/authentication/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // If user is NOT authenticated and tries to access the dashboard, redirect to login
    if (!req.nextauth.token && pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/authentication/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Check if the user is logged in
    },
  }
);

export const config = {
  matcher: ["/login", "/dashboard"], // Apply middleware on login and dashboard pages
};
