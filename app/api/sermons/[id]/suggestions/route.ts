import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/sermons/[id]/suggestions — list AI-detected moments
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

  const suggestions = await prisma.suggestedClip.findMany({
    where: { sermonId: id },
    orderBy: { hookScore: "desc" },
  });

  return NextResponse.json({ data: suggestions });
}

// POST /api/sermons/[id]/suggestions/accept — accept suggestions and trigger generation
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

  const { suggestionIds } = await request.json();

  if (!Array.isArray(suggestionIds) || suggestionIds.length === 0) {
    return NextResponse.json({ error: "suggestionIds array required" }, { status: 400 });
  }

  // Mark suggestions as accepted
  await prisma.suggestedClip.updateMany({
    where: { id: { in: suggestionIds }, sermonId: id },
    data: { accepted: true },
  });

  // Create clip records for accepted suggestions
  const suggestions = await prisma.suggestedClip.findMany({
    where: { id: { in: suggestionIds }, sermonId: id },
  });

  const clips = await Promise.all(
    suggestions.map((s) =>
      prisma.clip.create({
        data: {
          sermonId: id,
          title: s.summary || `${s.topic} moment`,
          durationSeconds: s.endTime - s.startTime,
        },
      })
    )
  );

  // Link clips back to suggestions
  await Promise.all(
    suggestions.map((s, i) =>
      prisma.suggestedClip.update({
        where: { id: s.id },
        data: { clipId: clips[i].id },
      })
    )
  );

  // TODO: Mosaic team — trigger clip generation for each accepted suggestion

  return NextResponse.json({ data: clips }, { status: 201 });
}
