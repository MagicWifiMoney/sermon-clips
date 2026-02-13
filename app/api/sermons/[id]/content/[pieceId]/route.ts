import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/sermons/[id]/content/[pieceId]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; pieceId: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id, pieceId } = await params;

  const piece = await prisma.contentPiece.findFirst({
    where: { id: pieceId, sermonId: id, sermon: { userId: user.id } },
  });
  if (!piece) return NextResponse.json({ error: "Content piece not found" }, { status: 404 });

  return NextResponse.json({ data: piece });
}

// DELETE /api/sermons/[id]/content/[pieceId]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; pieceId: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id, pieceId } = await params;

  const piece = await prisma.contentPiece.findFirst({
    where: { id: pieceId, sermonId: id, sermon: { userId: user.id } },
  });
  if (!piece) return NextResponse.json({ error: "Content piece not found" }, { status: 404 });

  await prisma.contentPiece.delete({ where: { id: pieceId } });

  return NextResponse.json({ success: true });
}
