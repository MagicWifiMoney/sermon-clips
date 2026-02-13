import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/analytics — returns analytics data (empty/mock until Mosaic is wired)
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Aggregate any ClipAnalytics records that exist
  const analytics = await prisma.clipAnalytics.findMany({
    where: { clip: { sermon: { userId: user.id } } },
    include: { clip: { include: { sermon: true } } },
  });

  const totalViews = analytics.reduce((sum, a) => sum + a.views, 0);
  const totalEngagements = analytics.reduce((sum, a) => sum + a.likes + a.shares + a.comments, 0);
  const engagementRate = totalViews > 0 ? (totalEngagements / totalViews) * 100 : 0;

  // Find top platform
  const platformViews: Record<string, number> = {};
  for (const a of analytics) {
    platformViews[a.platform] = (platformViews[a.platform] || 0) + a.views;
  }
  const topPlatform = Object.entries(platformViews).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

  // Find best clip
  const clipViews: Record<string, { views: number; title: string }> = {};
  for (const a of analytics) {
    const key = a.clipId;
    if (!clipViews[key]) clipViews[key] = { views: 0, title: a.clip.title || "Untitled" };
    clipViews[key].views += a.views;
  }
  const bestClip = Object.entries(clipViews).sort((a, b) => b[1].views - a[1].views)[0];

  return NextResponse.json({
    summary: {
      totalViews,
      engagementRate,
      topPlatform,
      bestClipId: bestClip?.[0] || null,
      bestClipTitle: bestClip?.[1].title || null,
    },
    rows: analytics.map((a) => ({
      clipId: a.clipId,
      clipTitle: a.clip.title || "Untitled",
      sermonTitle: a.clip.sermon.title,
      platforms: [a.platform],
      views: a.views,
      likes: a.likes,
      shares: a.shares,
      comments: a.comments,
      publishedAt: a.date.toISOString(),
    })),
  });
}
