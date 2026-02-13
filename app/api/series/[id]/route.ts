import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/series/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const series = await prisma.sermonSeries.findFirst({
    where: { id, userId: user.id },
    include: {
      sermons: { orderBy: { createdAt: "asc" }, include: { _count: { select: { clips: true } } } },
      _count: { select: { courses: true } },
    },
  });
  if (!series) return NextResponse.json({ error: "Series not found" }, { status: 404 });

  return NextResponse.json({ data: series });
}

// PUT /api/series/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const series = await prisma.sermonSeries.findFirst({
    where: { id, userId: user.id },
  });
  if (!series) return NextResponse.json({ error: "Series not found" }, { status: 404 });

  const body = await request.json();

  const updated = await prisma.sermonSeries.update({
    where: { id },
    data: {
      name: body.name ?? series.name,
      description: body.description,
      imageUrl: body.imageUrl,
      startDate: body.startDate ? new Date(body.startDate) : series.startDate,
      endDate: body.endDate ? new Date(body.endDate) : series.endDate,
    },
  });

  return NextResponse.json({ data: updated });
}

// DELETE /api/series/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const series = await prisma.sermonSeries.findFirst({
    where: { id, userId: user.id },
  });
  if (!series) return NextResponse.json({ error: "Series not found" }, { status: 404 });

  await prisma.sermonSeries.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
