import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { getPlanTier, getSermonLimit } from "@/lib/plan-gate";

// GET /api/me — returns current user info including plan, onboarding, and usage
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { clerkId },
    select: {
      id: true,
      email: true,
      name: true,
      plan: true,
      imageUrl: true,
      sermonsProcessed: true,
      onboardingStep: true,
      onboardingData: true,
      onboardingCompletedAt: true,
      _count: { select: { sermons: true } },
    },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Backfill: if user has sermons but onboardingStep is null, they're an existing user
  if (user.onboardingStep === null && user._count.sermons > 0) {
    const completedSermons = await prisma.sermon.count({
      where: { userId: user.id, status: "COMPLETED" },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        onboardingStep: "completed",
        sermonsProcessed: completedSermons,
        // Don't downgrade existing users from starter to free
        plan: user.plan === "free" && completedSermons > 0 ? "starter" : undefined,
      },
    });

    user.onboardingStep = "completed";
    user.sermonsProcessed = completedSermons;
  }

  const plan = getPlanTier(user.plan);
  const sermonLimit = getSermonLimit(plan);

  return NextResponse.json({
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
      plan,
      imageUrl: user.imageUrl,
      sermonsProcessed: user.sermonsProcessed,
      onboardingStep: user.onboardingStep,
      onboardingData: user.onboardingData,
      sermonLimit: sermonLimit === -1 ? null : sermonLimit,
    },
  });
}
