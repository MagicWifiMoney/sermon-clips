import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getMosaicSocialPortalUrl } from "@/lib/mosaic";

// POST /api/social/connect — redirect to Mosaic's social management portal
// Social account connections are managed directly in Mosaic's dashboard.
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { platform } = await request.json();
  if (!platform) return NextResponse.json({ error: "Platform required" }, { status: 400 });

  const portalUrl = getMosaicSocialPortalUrl();

  return NextResponse.json({
    data: {
      redirectUrl: portalUrl,
      message: `Connect your ${platform} account in the Mosaic dashboard`,
    },
  });
}
