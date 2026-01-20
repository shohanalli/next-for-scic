import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const ok =
    email === process.env.MOCK_EMAIL &&
    password === process.env.MOCK_PASSWORD;

  if (!ok) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = process.env.MOCK_TOKEN || "mock-token-123";

  // ✅ Next.js 16: cookies() can be async
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ ok: true });
}
