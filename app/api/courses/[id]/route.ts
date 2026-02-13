import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/courses/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const course = await prisma.course.findFirst({
    where: { id, userId: user.id },
    include: { series: true },
  });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  return NextResponse.json({ data: course });
}

// PUT /api/courses/[id] — update course (edit modules)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const course = await prisma.course.findFirst({
    where: { id, userId: user.id },
  });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  const body = await request.json();

  const updated = await prisma.course.update({
    where: { id },
    data: {
      title: body.title ?? course.title,
      description: body.description,
      modules: body.modules ?? course.modules,
    },
  });

  return NextResponse.json({ data: updated });
}
