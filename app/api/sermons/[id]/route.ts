import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/sermons/[id] — sermon detail with clips
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const sermon = await prisma.sermon.findFirst({
    where: { id, userId: user.id },
    include: {
      clips: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!sermon) {
    return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
  }

  return NextResponse.json({ data: sermon });
}

// DELETE /api/sermons/[id] — delete sermon and cascade clips
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const sermon = await prisma.sermon.findFirst({
    where: { id, userId: user.id },
  });
  if (!sermon) {
    return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
  }

  // Cascade delete is handled by Prisma onDelete: Cascade
  await prisma.sermon.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
