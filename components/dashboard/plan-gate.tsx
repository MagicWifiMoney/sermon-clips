"use client";

import { Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasFeature, getMinTierForFeature } from "@/lib/plan-gate";

interface PlanGateProps {
  plan: string;
  feature: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PlanGate({ plan, feature, children, fallback }: PlanGateProps) {
  if (hasFeature(plan, feature)) {
    return <>{children}</>;
  }

  if (fallback) return <>{fallback}</>;

  const minTier = getMinTierForFeature(feature);

  return (
    <div className="relative rounded-xl border border-[#E8E4DC] bg-[#F5F1EB]/50 p-6 text-center">
      <div className="w-10 h-10 rounded-full bg-[#E8E4DC] flex items-center justify-center mx-auto mb-3">
        <Lock className="w-5 h-5 text-[#5c5c5c]" />
      </div>
      <p className="text-sm font-medium text-[#2D2D2D] mb-1">
        {minTier ? `Available on ${minTier.charAt(0).toUpperCase() + minTier.slice(1)}+` : "Premium Feature"}
      </p>
      <p className="text-xs text-[#5c5c5c] mb-4">Upgrade your plan to unlock this feature</p>
      <Button variant="secondary" size="sm" disabled>
        Upgrade Plan
        <ArrowRight className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}

export function TierBadge({ feature, plan }: { feature: string; plan?: string }) {
  if (plan && hasFeature(plan, feature)) return null;
  const minTier = getMinTierForFeature(feature);
  if (!minTier) return null;

  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#5c5c5c] bg-[#E8E4DC] rounded px-1.5 py-0.5">
      <Lock className="w-2.5 h-2.5" />
      {minTier.charAt(0).toUpperCase() + minTier.slice(1)}+
    </span>
  );
}
