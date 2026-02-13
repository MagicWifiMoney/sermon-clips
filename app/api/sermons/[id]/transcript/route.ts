import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/sermons/[id]/transcript
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
    select: { transcript: true },
  });
  if (!sermon) return NextResponse.json({ error: "Sermon not found" }, { status: 404 });

  return NextResponse.json({ data: sermon.transcript });
}
