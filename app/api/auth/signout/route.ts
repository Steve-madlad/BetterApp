import { NextResponse } from "next/server";

export async function POST() {
  // Clear the cookie by setting it to empty and expired
  const response = NextResponse.json({ success: true });
  response.cookies.set("better-auth.session_token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}