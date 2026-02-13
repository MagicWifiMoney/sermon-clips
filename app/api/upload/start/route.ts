import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// POST /api/upload/start — begin direct upload to Mosaic
// STUB: Mosaic team implements this
export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { sermonId } = body;

  if (!sermonId) {
    return NextResponse.json({ error: "sermonId is required" }, { status: 400 });
  }

  // TODO: Mosaic team — implement:
  // 1. Call getUploadUrl() from lib/mosaic.ts
  // 2. Return the upload URL for the client to PUT the file to
  // 3. Store the video_id for finalization

  return NextResponse.json(
    { error: "Upload not implemented — Mosaic team integration pending" },
    { status: 501 }
  );
}
