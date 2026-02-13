import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/clips/[id]/publish — publish clip to selected platforms
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  // Verify clip belongs to user
  const clip = await prisma.clip.findFirst({
    where: { id, sermon: { userId: user.id } },
  });
  if (!clip) return NextResponse.json({ error: "Clip not found" }, { status: 404 });

  const { platforms, caption, scheduledAt } = await request.json();

  // Create publication records for each platform
  const publications = await Promise.all(
    (platforms as string[]).map((platform) =>
      prisma.clipPublication.create({
        data: {
          clipId: id,
          platform,
          caption,
          scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
          status: scheduledAt ? "scheduled" : "publishing",
        },
      })
    )
  );

  // TODO: Mosaic team — call publishClip() for each platform
  // import { publishClip } from '@/lib/mosaic';

  return NextResponse.json({ data: publications });
}
