import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { getUploadUrl } from "@/lib/mosaic";

// POST /api/upload/start — get a signed upload URL from Mosaic
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { sermonId } = body;

  if (!sermonId) {
    return NextResponse.json({ error: "sermonId is required" }, { status: 400 });
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
    const { upload_url, upload_fields, video_id, size_limit } = await getUploadUrl();

    return NextResponse.json({
      uploadUrl: upload_url,
      uploadFields: upload_fields,
      videoId: video_id,
      sizeLimit: size_limit,
    });
  } catch (error) {
    console.error("[Upload Start]", error);
    return NextResponse.json(
      { error: "Failed to get upload URL" },
      { status: 500 }
    );
  }
}
