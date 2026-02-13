import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/integrations/youtube/connect — stub for YouTube channel connection
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { channelUrl } = await request.json();
  if (!channelUrl) return NextResponse.json({ error: "Channel URL required" }, { status: 400 });

  // Stub: extract channel name from URL, save config
  // In production, Mosaic would validate the channel and set up triggers
  const channelName = channelUrl.includes("@")
    ? channelUrl.split("@").pop()?.split("/")[0] || "My Channel"
    : "My Channel";

  const config = {
    channelId: `stub_${Date.now()}`,
    channelUrl,
    channelName,
    autoProcess: false,
  };

  await prisma.user.update({
    where: { id: user.id },
    data: { connectedYoutubeChannel: config },
  });

  return NextResponse.json({ data: config });
}
