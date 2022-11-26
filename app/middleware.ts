import { NextRequest, NextResponse } from "next/server";
import { getVariablesByEnvironment } from "./utils/getVariablesByEnvironment";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)

  const currentHost = getVariablesByEnvironment(
    hostname?.replace(process.env.DOMAIN_PROD, "") || "",
    hostname?.replace(process.env.DOMAIN_DEV, "") || ""
  );

  // Prevent security issues – users should not be able to canonically access
  // the pages/subdomain folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page
  if (pathname.startsWith(`/_subdomain`)) {
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") && // exclude all API routes
    currentHost !== hostname
  ) {
    const url = req.nextUrl.clone();
    url.pathname = `/_subdomain/${currentHost}${pathname}`;
    // rewrite to the current hostname under the pages/subdomain folder
    // the main logic component will happen in pages/subdomain/[subdomain]/index.tsx
    return NextResponse.rewrite(url);
  }
}
