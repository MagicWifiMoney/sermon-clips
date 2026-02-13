import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/sermons/[id]/retry — re-trigger processing
export async function POST(
  _request: NextRequest,
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

  // Reset status to PENDING and clear error
  await prisma.sermon.update({
    where: { id },
    data: {
      status: "PENDING",
      progress: 0,
      errorMessage: null,
      mosaicRunId: null,
    },
  });

  // TODO: Mosaic team — re-trigger startSermonProcessing()

  return NextResponse.json({ success: true });
}
