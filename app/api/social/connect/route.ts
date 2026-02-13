import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// POST /api/social/connect — stub for social account OAuth initiation
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { platform } = await request.json();
  if (!platform) return NextResponse.json({ error: "Platform required" }, { status: 400 });

  // Stub: create a social account record
  // In production, this would redirect to OAuth flow via Mosaic
  const account = await prisma.socialAccount.upsert({
    where: { userId_platform: { userId: user.id, platform } },
    update: { connected: true, accountName: `${platform}_user` },
    create: {
      userId: user.id,
      platform,
      accountName: `${platform}_user`,
      connected: true,
    },
  });

  return NextResponse.json({ data: { accountName: account.accountName, connected: true } });
}
