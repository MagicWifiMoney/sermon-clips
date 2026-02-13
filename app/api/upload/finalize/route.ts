import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// POST /api/upload/finalize — complete direct upload + trigger processing
// STUB: Mosaic team implements this
export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { sermonId, videoId } = body;

  if (!sermonId || !videoId) {
    return NextResponse.json({ error: "sermonId and videoId are required" }, { status: 400 });
  }

  // TODO: Mosaic team — implement:
  // 1. Call finalizeUpload(videoId) from lib/mosaic.ts
  // 2. Get the video URL back
  // 3. Call startSermonProcessing(videoUrl, callbackUrl)
  // 4. Update sermon status to PROCESSING with mosaicRunId

  return NextResponse.json(
    { error: "Upload finalization not implemented — Mosaic team integration pending" },
    { status: 501 }
  );
}
