"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PLAN_LIMITS } from "@/types";
import type { PlanTier } from "@/types";

export function PlanStatusCard({
  plan,
  sermonsProcessed,
}: {
  plan: PlanTier;
  sermonsProcessed: number;
}) {
  const limits = PLAN_LIMITS[plan];
  const isUnlimited = limits.sermonsPerMonth === -1;
  const limit = isUnlimited ? Infinity : limits.sermonsPerMonth;
  const usagePercent = isUnlimited ? 0 : Math.min(100, Math.round((sermonsProcessed / limit) * 100));
  const isFree = plan === "free";
  const isPaid = !isFree;
  const isOverLimit = !isUnlimited && sermonsProcessed >= limit;

  const planLabel = plan === "free" ? "Free" : plan.charAt(0).toUpperCase() + plan.slice(1);
  const priceLabel = limits.monthlyPrice > 0 ? ` ($${limits.monthlyPrice}/mo)` : "";

  return (
    <Card className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-medium text-[#2D2D2D]">
            Current Plan: {planLabel}{priceLabel}
          </p>
          <p className="text-sm text-[#5c5c5c] mt-0.5">
            {isUnlimited
              ? `${sermonsProcessed} sermons processed — unlimited plan`
              : `${sermonsProcessed} of ${limit} sermons used`}
          </p>
        </div>
        <Link href={isFree ? "/dashboard/upgrade" : "/dashboard/settings"}>
          <Button variant="secondary" size="sm">
            {isFree ? "Upgrade Plan" : "Manage Plan"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Progress bar */}
      {!isUnlimited && (
        <div className="space-y-1">
          <div className="h-2.5 rounded-full bg-[#E8E4DC] overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isOverLimit ? "bg-red-500" : usagePercent > 80 ? "bg-amber-500" : "bg-[#E8725A]"
              }`}
              style={{ width: `${usagePercent}%` }}
            />
          </div>
          <p className="text-xs text-right text-[#5c5c5c]">{usagePercent}%</p>
        </div>
      )}

      {/* Status lines */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-[#5c5c5c]">View and download your clips anytime</span>
        </div>
        {isFree && isOverLimit && (
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-[#5c5c5c]">Process new sermons (upgrade required)</span>
          </div>
        )}
        {isPaid && !isUnlimited && !isOverLimit && (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-[#5c5c5c]">
              {limit - sermonsProcessed} sermon{limit - sermonsProcessed !== 1 ? "s" : ""} remaining this month
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
