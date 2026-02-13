import type { PlanTier } from "@/types";
import { PLAN_LIMITS } from "@/types";

const TIER_ORDER: PlanTier[] = ["free", "starter", "growth", "automation", "professional", "suite"];

export function getPlanTier(plan: string): PlanTier {
  if (TIER_ORDER.includes(plan as PlanTier)) return plan as PlanTier;
  return "free";
}

export function hasFeature(plan: string, feature: string): boolean {
  const tier = getPlanTier(plan);
  return PLAN_LIMITS[tier].features.includes(feature);
}

export function getTierIndex(plan: string): number {
  return TIER_ORDER.indexOf(getPlanTier(plan));
}

export function isAtLeastTier(plan: string, minTier: PlanTier): boolean {
  return getTierIndex(plan) >= TIER_ORDER.indexOf(minTier);
}

export function getMinTierForFeature(feature: string): PlanTier | null {
  for (const tier of TIER_ORDER) {
    if (PLAN_LIMITS[tier].features.includes(feature)) return tier;
  }
  return null;
}

export function getSermonLimit(plan: string): number {
  const tier = getPlanTier(plan);
  return PLAN_LIMITS[tier].sermonsPerMonth;
}

export function canProcessSermon(plan: string, sermonsProcessed: number): boolean {
  const limit = getSermonLimit(plan);
  if (limit === -1) return true; // unlimited
  return sermonsProcessed < limit;
}
