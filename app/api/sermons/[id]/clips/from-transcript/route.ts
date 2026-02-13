import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/sermons/[id]/clips/from-transcript — create clip from timestamp range
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const sermon = await prisma.sermon.findFirst({
    where: { id, userId: user.id },
  });
  if (!sermon) return NextResponse.json({ error: "Sermon not found" }, { status: 404 });

  const { startTime, endTime, title } = await request.json();

  if (typeof startTime !== "number" || typeof endTime !== "number" || endTime <= startTime) {
    return NextResponse.json({ error: "Invalid time range" }, { status: 400 });
  }

  // Create a clip record — Mosaic team will wire actual clip generation
  const clip = await prisma.clip.create({
    data: {
      sermonId: id,
      title: title || `Clip ${Math.floor(startTime / 60)}:${String(Math.floor(startTime % 60)).padStart(2, "0")} - ${Math.floor(endTime / 60)}:${String(Math.floor(endTime % 60)).padStart(2, "0")}`,
      durationSeconds: endTime - startTime,
    },
  });

  // TODO: Mosaic team — call createClipFromTimestamps()
  // import { createClipFromTimestamps } from '@/lib/mosaic';
  // await createClipFromTimestamps(sermon.mosaicRunId!, startTime, endTime, { title });

  return NextResponse.json({ data: clip }, { status: 201 });
}
