import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { finalizeUpload, startSermonProcessing } from "@/lib/mosaic";

// POST /api/upload/finalize — complete upload + trigger Mosaic processing
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { sermonId, videoId } = body;

  if (!sermonId || !videoId) {
    return NextResponse.json({ error: "sermonId and videoId are required" }, { status: 400 });
  }

  // Verify the sermon belongs to this user
  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const sermon = await prisma.sermon.findFirst({
    where: { id: sermonId, userId: user.id },
  });
  if (!sermon) {
    return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
  }

  try {
    // Finalize the upload to get the video URL
    const { video_url } = await finalizeUpload(videoId);

    // Trigger Mosaic processing
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
    const processingOptions = sermon.processingOptions as Record<string, unknown> | null;
    const run = await startSermonProcessing(video_url, callbackUrl, {
      processingOptions: processingOptions as never,
      publishMode: sermon.publishMode as "auto" | "review" | "draft",
    });

    // Update sermon with run ID and status
    await prisma.sermon.update({
      where: { id: sermon.id },
      data: {
        sourceUrl: video_url,
        mosaicRunId: run.run_id,
        status: "PROCESSING",
        progress: 0,
      },
    });

    return NextResponse.json({
      data: { videoUrl: video_url, runId: run.run_id },
    });
  } catch (error) {
    console.error("[Upload Finalize]", error);
    await prisma.sermon.update({
      where: { id: sermon.id },
      data: { status: "FAILED", errorMessage: "Upload finalization failed" },
    });
    return NextResponse.json(
      { error: "Failed to finalize upload" },
      { status: 500 }
    );
  }
}
