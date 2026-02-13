import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/montage/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const montage = await prisma.montage.findFirst({
    where: { id, userId: user.id },
  });
  if (!montage) return NextResponse.json({ error: "Montage not found" }, { status: 404 });

  return NextResponse.json({ data: montage });
}

// DELETE /api/montage/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const montage = await prisma.montage.findFirst({
    where: { id, userId: user.id },
  });
  if (!montage) return NextResponse.json({ error: "Montage not found" }, { status: 404 });

  await prisma.montage.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
