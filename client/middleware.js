import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export function middleware(req) {
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  if (req.nextUrl.pathname.startsWith("/add-item")) {
    if (!token) {
      const url = new URL("/login", req.url);
      url.searchParams.set("next", "/add-item");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*"],
};
