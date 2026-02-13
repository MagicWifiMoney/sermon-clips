import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import type { ContentType } from "@prisma/client";

// GET /api/sermons/[id]/content — list content pieces
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

  const pieces = await prisma.contentPiece.findMany({
    where: { sermonId: id },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json({ data: pieces });
}

// POST /api/sermons/[id]/content — generate content pieces
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

  const { types } = await request.json();
  if (!Array.isArray(types) || types.length === 0) {
    return NextResponse.json({ error: "types array required" }, { status: 400 });
  }

  // Create content piece records in GENERATING status
  // Mosaic team will wire actual generation + webhook callback
  const pieces = await Promise.all(
    (types as ContentType[]).map((type) =>
      prisma.contentPiece.upsert({
        where: { sermonId_type: undefined } as never, // fallback to create
        create: {
          sermonId: id,
          type,
          content: "",
          status: "GENERATING",
        },
        update: {
          status: "GENERATING",
          content: "",
        },
      }).catch(() =>
        // upsert with compound key not available — use create or update
        prisma.contentPiece.create({
          data: {
            sermonId: id,
            type,
            content: "",
            status: "GENERATING",
          },
        })
      )
    )
  );

  // TODO: Mosaic team — call generateSermonContent() for each type
  // import { generateSermonContent } from '@/lib/mosaic';

  return NextResponse.json({ data: pieces }, { status: 201 });
}
