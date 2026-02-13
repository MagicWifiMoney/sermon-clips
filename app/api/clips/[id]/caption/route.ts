import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/clips/[id]/caption — AI-generate caption (stub)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const clip = await prisma.clip.findFirst({
    where: { id, sermon: { userId: user.id } },
    include: { sermon: true },
  });
  if (!clip) return NextResponse.json({ error: "Clip not found" }, { status: 404 });

  const { sermonTitle } = await request.json();

  // Stub: generate template caption
  // TODO: Mosaic team — call AI caption generation
  const caption = `${clip.title || "This powerful moment"} from "${sermonTitle || clip.sermon.title}" - Watch the full sermon on our channel! #sermon #faith #church #inspiration`;

  return NextResponse.json({ caption });
}
