import { NextResponse } from "next/server";

export function middleware(request: Request) {
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};

// https://nextjs.org/docs/app/building-your-application/routing/middleware