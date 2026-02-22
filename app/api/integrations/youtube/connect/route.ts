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
  if (!MOSAIC_AGENT_ID) {
    return NextResponse.json({ error: "MOSAIC_AGENT_ID is not configured" }, { status: 500 });
  }

  // Extract channel identifier from URL
  const channelName = channelUrl.includes("@")
    ? channelUrl.split("@").pop()?.split("/")[0] || "My Channel"
    : "My Channel";

  const channelId = channelUrl.includes("@")
    ? `@${channelName}`
    : channelUrl;

  // Register the YouTube trigger with Mosaic. If this fails, do not save local config.
  let triggerId: string;
  let triggerStatus: string;
  try {
    const triggerRes = await registerYouTubeTrigger(MOSAIC_AGENT_ID, channelId);
    triggerId = triggerRes.trigger_id;
    triggerStatus = triggerRes.status;
  } catch (error) {
    console.error("[YouTube Connect] Failed to register Mosaic trigger:", error);
    const message = error instanceof Error ? error.message : "Failed to register YouTube trigger in Mosaic";
    return NextResponse.json(
      {
        error: "Failed to connect YouTube channel with Mosaic",
        details: message,
      },
      { status: 502 }
    );
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
