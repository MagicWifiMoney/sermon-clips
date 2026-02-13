import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/schedule — get user's publishing schedule
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const now = new Date();

  const [upcoming, recent] = await Promise.all([
    prisma.scheduledPost.findMany({
      where: {
        sermon: { userId: user.id },
        status: "pending",
        scheduledFor: { gte: now },
      },
      orderBy: { scheduledFor: "asc" },
      take: 20,
    }),
    prisma.clipPublication.findMany({
      where: {
        clip: { sermon: { userId: user.id } },
        status: { in: ["published", "failed"] },
      },
      orderBy: { updatedAt: "desc" },
      take: 20,
    }),
  ]);

  return NextResponse.json({ upcoming, recent });
}

// POST /api/schedule — create/update drip schedule
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { sermonId, slots } = await request.json();

  // Verify sermon belongs to user
  const sermon = await prisma.sermon.findFirst({
    where: { id: sermonId, userId: user.id },
  });
  if (!sermon) return NextResponse.json({ error: "Sermon not found" }, { status: 404 });

  // Delete existing pending scheduled posts for this sermon
  await prisma.scheduledPost.deleteMany({
    where: { sermonId, status: "pending" },
  });

  // Create new scheduled posts from slots
  // Map day names to next occurrence
  const dayMap: Record<string, number> = {
    Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
    Thursday: 4, Friday: 5, Saturday: 6,
  };

  const now = new Date();
  const posts = [];

  for (const slot of slots) {
    const targetDay = dayMap[slot.day];
    if (targetDay === undefined) continue;

    const [hours, minutes] = (slot.time || "09:00").split(":").map(Number);
    const date = new Date(now);
    const currentDay = date.getDay();
    let daysAhead = targetDay - currentDay;
    if (daysAhead <= 0) daysAhead += 7;
    date.setDate(date.getDate() + daysAhead);
    date.setHours(hours, minutes, 0, 0);

    posts.push({
      sermonId,
      platform: slot.platform,
      scheduledFor: date,
      status: "pending",
    });
  }

  if (posts.length > 0) {
    await prisma.scheduledPost.createMany({ data: posts });
  }

  return NextResponse.json({ success: true, count: posts.length });
}
