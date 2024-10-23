"use server";

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authUser } from "./actions/userAction";

const loggedInRoutes = ["/profile", "/edit-profile"];
const loggedOutRoutes = ["/sign-in", "/sign-up"];
const loggedInAsAdminPath = [
  "/create/event",
  "/edit/event",
  "/events/dashboard",
];
const loggedOutPath = ["/"];

const isPathMatching = (path: string, routes: string[]) =>
  routes.some((route) => path.startsWith(route));

const redirectIfNeeded = (
  req: NextRequest,
  isLoggedIn: boolean,
  isLoggedInRoute: boolean,
  isAdminRoute: boolean,
  isLoggedOutRoute: boolean,
) => {
  const { searchParams } = new URL(req.url);

  return null;
};

export default async function AuthMiddleware(
  req: NextRequest,
): Promise<NextResponse> {
  const myCookie = cookies();
  const token = myCookie.get("token")?.value || null;
  const user = token ? await authUser(token) : null;
  const roles: string[] = Array.isArray(user?.role)
    ? (user?.role as string[])
    : [];

  const isLoggedIn = false;
  const isAdminRoute = isPathMatching(
    req.nextUrl.pathname,
    loggedInAsAdminPath,
  );
  const isLoggedInRoute = isPathMatching(req.nextUrl.pathname, loggedInRoutes);
  const isLoggedOutRoute = isPathMatching(
    req.nextUrl.pathname,
    loggedOutRoutes,
  );

  if (!isLoggedInRoute && !isLoggedOutRoute) {
    return NextResponse.next();
  }

  if (isAdminRoute && !roles.includes("admin")) {
    const url = new URL("/sign-in", req.url);
    url.searchParams.set("redirected", "true");
    return NextResponse.redirect(url);
  }

  const redirectResponse = redirectIfNeeded(
    req,
    isLoggedIn,
    isLoggedInRoute,
    isAdminRoute,
    isLoggedOutRoute,
  );

  if (redirectResponse) {
    return redirectResponse;
  }

  return NextResponse.next();
}
