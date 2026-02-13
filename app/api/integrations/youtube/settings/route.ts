import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/integrations/youtube/settings — update auto-process + default options
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const currentConfig = user.connectedYoutubeChannel as Record<string, unknown> | null;
  if (!currentConfig) {
    return NextResponse.json({ error: "No YouTube channel connected" }, { status: 400 });
  }

  const { autoProcess, defaultProcessingOptions } = await request.json();

  const updatedConfig = {
    ...currentConfig,
    autoProcess: autoProcess ?? currentConfig.autoProcess,
    defaultProcessingOptions: defaultProcessingOptions ?? currentConfig.defaultProcessingOptions,
  };

  await prisma.user.update({
    where: { id: user.id },
    data: { connectedYoutubeChannel: updatedConfig },
  });

  return NextResponse.json({ success: true });
}
