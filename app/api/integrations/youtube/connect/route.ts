import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { registerYouTubeTrigger } from "@/lib/mosaic";

const MOSAIC_AGENT_ID = process.env.MOSAIC_AGENT_ID ?? "";

// POST /api/integrations/youtube/connect — connect a YouTube channel + register Mosaic trigger
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { channelUrl } = await request.json();
  if (!channelUrl) return NextResponse.json({ error: "Channel URL required" }, { status: 400 });

  // Extract channel identifier from URL
  const channelName = channelUrl.includes("@")
    ? channelUrl.split("@").pop()?.split("/")[0] || "My Channel"
    : "My Channel";

  const channelId = channelUrl.includes("@")
    ? `@${channelName}`
    : channelUrl;

  // Register the YouTube trigger with Mosaic
  let triggerId: string | undefined;
  let triggerStatus = "pending";
  try {
    const triggerRes = await registerYouTubeTrigger(MOSAIC_AGENT_ID, channelId);
    triggerId = triggerRes.trigger_id;
    triggerStatus = triggerRes.status;
  } catch (error) {
    console.error("[YouTube Connect] Failed to register Mosaic trigger:", error);
    // Still save the config — trigger can be retried
  }

  const config = {
    channelId,
    channelUrl,
    channelName,
    triggerId,
    triggerStatus,
    autoProcess: false,
  };

  await prisma.user.update({
    where: { id: user.id },
    data: { connectedYoutubeChannel: config },
  });

  return NextResponse.json({ data: config });
}
