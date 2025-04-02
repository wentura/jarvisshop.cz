import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the route starts with /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Get the authentication status from cookies or headers
    const isAuthenticated =
      request.cookies.get("isAdminAuthenticated")?.value === "true";

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
