import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/sermons/[id]/graphics — list graphics for a sermon
export async function GET(
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

  const graphics = await prisma.graphic.findMany({
    where: { sermonId: id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: graphics });
}

// POST /api/sermons/[id]/graphics — generate a graphic
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

  const { type, text, style } = await request.json();

  if (!type) {
    return NextResponse.json({ error: "type required (quote_card, thumbnail, carousel)" }, { status: 400 });
  }

  const graphic = await prisma.graphic.create({
    data: {
      sermonId: id,
      type,
      text,
      style,
      status: "generating",
    },
  });

  // TODO: Mosaic team — call generateGraphic()

  return NextResponse.json({ data: graphic }, { status: 201 });
}
