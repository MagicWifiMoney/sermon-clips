import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/series/[id]/course — list courses for a series
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
  });
  if (!series) return NextResponse.json({ error: "Series not found" }, { status: 404 });

  const courses = await prisma.course.findMany({
    where: { seriesId: id, userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: courses });
}

// POST /api/series/[id]/course — generate course from series
export async function POST(
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
    include: { sermons: true },
  });
  if (!series) return NextResponse.json({ error: "Series not found" }, { status: 404 });

  const { title } = await request.json();

  const course = await prisma.course.create({
    data: {
      userId: user.id,
      seriesId: id,
      title: title || `${series.name} Course`,
      modules: [],
      status: "generating",
    },
  });

  // TODO: Mosaic team — call generateCourse() with sermon IDs

  return NextResponse.json({ data: course }, { status: 201 });
}
