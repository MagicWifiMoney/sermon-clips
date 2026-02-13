import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/campuses/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const campus = await prisma.campus.findFirst({
    where: { id, userId: user.id },
  });
  if (!campus) return NextResponse.json({ error: "Campus not found" }, { status: 404 });

  return NextResponse.json({ data: campus });
}

// PUT /api/campuses/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const campus = await prisma.campus.findFirst({
    where: { id, userId: user.id },
  });
  if (!campus) return NextResponse.json({ error: "Campus not found" }, { status: 404 });

  const body = await request.json();

  const updated = await prisma.campus.update({
    where: { id },
    data: {
      name: body.name ?? campus.name,
      brandingConfig: body.brandingConfig,
      isDefault: body.isDefault,
    },
  });

  return NextResponse.json({ data: updated });
}

// DELETE /api/campuses/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const campus = await prisma.campus.findFirst({
    where: { id, userId: user.id },
  });
  if (!campus) return NextResponse.json({ error: "Campus not found" }, { status: 404 });

  await prisma.campus.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
