import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/clips/[id]/download — redirect to clip video URL
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

  const clip = await prisma.clip.findFirst({
    where: { id },
    include: { sermon: { select: { userId: true } } },
  });

  if (!clip || clip.sermon.userId !== user.id) {
    return NextResponse.json({ error: "Clip not found" }, { status: 404 });
  }

  if (!clip.videoUrl) {
    return NextResponse.json(
      { error: "Clip video URL not available" },
      { status: 404 }
    );
  }

  // Increment download count
  await prisma.clip.update({
    where: { id },
    data: { downloadCount: { increment: 1 } },
  });

  return NextResponse.redirect(clip.videoUrl);
}
