import { prisma } from "@/lib/prisma";
import { getPlanTier, canProcessSermon, getSermonLimit } from "@/lib/plan-gate";
import type { PlanTier } from "@/types";

export async function checkSermonQuota(userId: string): Promise<{
  allowed: boolean;
  used: number;
  limit: number;
  plan: PlanTier;
}> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { plan: true, sermonsProcessed: true },
  });

  if (!user) {
    return { allowed: false, used: 0, limit: 0, plan: "free" };
  }

  const plan = getPlanTier(user.plan);
  const limit = getSermonLimit(plan);
  const allowed = canProcessSermon(plan, user.sermonsProcessed);

  return {
    allowed,
    used: user.sermonsProcessed,
    limit: limit === -1 ? Infinity : limit,
    plan,
  };
}
