import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/analytics/roi — calculated ROI metrics
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const [sermonCount, clipCount, contentCount, publishedCount] = await Promise.all([
    prisma.sermon.count({ where: { userId: user.id, status: "COMPLETED" } }),
    prisma.clip.count({ where: { sermon: { userId: user.id } } }),
    prisma.contentPiece.count({ where: { sermon: { userId: user.id }, status: "COMPLETED" } }),
    prisma.clipPublication.count({
      where: { clip: { sermon: { userId: user.id } }, status: "published" },
    }),
  ]);

  // ROI calculations (estimates based on industry averages)
  const avgMinutesPerClipManual = 45; // 45 min to manually create a clip
  const avgMinutesPerContentManual = 30; // 30 min to manually write a content piece
  const timeSavedMinutes = clipCount * avgMinutesPerClipManual + contentCount * avgMinutesPerContentManual;
  const platformCount = publishedCount > 0 ? Math.min(6, Math.ceil(publishedCount / clipCount || 1)) : 0;
  const costPerClip = sermonCount > 0 ? 0 : 0; // Will be calculated from plan price
  const freelancerCostPerClip = 150; // Avg freelancer cost per clip
  const estimatedManualCost = clipCount * freelancerCostPerClip + contentCount * 50;

  return NextResponse.json({
    data: {
      timeSavedMinutes,
      contentPiecesGenerated: contentCount,
      platformReachMultiplier: platformCount,
      costPerClip,
      estimatedManualCost,
    },
  });
}
