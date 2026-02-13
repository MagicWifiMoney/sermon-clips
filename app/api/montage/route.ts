import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/montage — list user's montages
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const montages = await prisma.montage.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: montages });
}

// POST /api/montage — create a montage
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { title, clipIds, transitionStyle } = await request.json();

  if (!title || !Array.isArray(clipIds) || clipIds.length < 2) {
    return NextResponse.json({ error: "title and at least 2 clipIds required" }, { status: 400 });
  }

  const montage = await prisma.montage.create({
    data: {
      userId: user.id,
      title,
      clipIds,
      transitionStyle: transitionStyle ?? "crossfade",
      status: "PENDING",
    },
  });

  // TODO: Mosaic team — call createMontage() with clip URLs

  return NextResponse.json({ data: montage }, { status: 201 });
}
