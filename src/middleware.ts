import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

// If a request is send to the /api route, check if the token exists
// and pass the token data to the 'x-user' header.

// NOTE: Further authorization needs to happen in the routes itself
// Just parse the x-user header using /utils/auth method

// TODO:
// * handle session expiry

export async function middleware() {
  const parsedCookies = await cookies();
  const token = parsedCookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.JWT_KEY);
  const res = NextResponse.next();

  try {
    if (token) {
      const { payload } = await jose.jwtVerify(token as string, secret);
      res.headers.set("x-user", JSON.stringify(payload));
      return res;
    }
  } catch (error) {
    console.log("[middleware.ts] ERROR:\n", error);
  }
  return res;
}

export const config = {
  matcher: [
    `/api/:path*`,
  ],
};
