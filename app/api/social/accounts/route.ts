import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/social/accounts — list user's connected social accounts
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const accounts = await prisma.socialAccount.findMany({
    where: { userId: user.id },
    select: { platform: true, accountName: true, connected: true },
  });

  return NextResponse.json({ data: accounts });
}
