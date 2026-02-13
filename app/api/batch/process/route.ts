import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/batch/process — batch process multiple sermons
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { sermonIds, processingOptions } = await request.json();

  if (!Array.isArray(sermonIds) || sermonIds.length === 0) {
    return NextResponse.json({ error: "sermonIds array required" }, { status: 400 });
  }

  // Verify all sermons belong to user
  const sermons = await prisma.sermon.findMany({
    where: { id: { in: sermonIds }, userId: user.id },
  });

  if (sermons.length !== sermonIds.length) {
    return NextResponse.json({ error: "Some sermons not found" }, { status: 404 });
  }

  // Update all to PENDING status with processing options
  await prisma.sermon.updateMany({
    where: { id: { in: sermonIds }, userId: user.id },
    data: {
      status: "PENDING",
      progress: 0,
      processingOptions: processingOptions ?? undefined,
    },
  });

  // TODO: Mosaic team — batch trigger processing for each sermon

  return NextResponse.json({
    data: sermonIds.map((id: string) => ({ sermonId: id, status: "PENDING", progress: 0 })),
  });
}
