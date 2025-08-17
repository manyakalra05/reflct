import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { NextResponse } from "next/server";

// Protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/journal(.*)",
  "/collection(.*)",
]);

// Create Arcjet middleware
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  // characteristics: ["userId"], // Track based on Clerk userId
  rules: [
    // Shield protection for content and security
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // See the full list at https://arcjet.com/bot-list
      ],
    }),
  ],
});

// Create base Clerk middleware
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Chain middlewares - ArcJet runs first, then Clerk
export default createMiddleware(aj, clerk);

// Keep your existing matcher config for consistency
export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
<!-- Update 2024-11-17T07:04:13+05:30 -->
<!-- Update 2024-12-22T14:29:22+05:30 -->
<!-- Update 2024-12-25T13:57:23+05:30 -->
<!-- Update 2025-05-10T18:37:52+05:30 -->
<!-- Update 2025-09-27T08:08:21+05:30 -->
<!-- Update 2024-11-19T18:22:15+05:30 -->
<!-- Update 2024-12-12T08:33:20+05:30 -->
<!-- Update 2025-01-24T05:43:55+05:30 -->
<!-- Update 2025-02-21T16:00:08+05:30 -->
<!-- Update 2025-05-16T09:30:52+05:30 -->
<!-- Update 2025-06-19T18:28:08+05:30 -->
<!-- Update 2025-06-30T17:52:19+05:30 -->
<!-- Update 2025-08-17T13:43:45+05:30 -->