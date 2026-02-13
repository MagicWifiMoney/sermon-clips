"use client";

import Link from "next/link";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export function OnboardingChecklist({
  churchName,
  hasProcessingSermon,
}: {
  churchName?: string;
  hasProcessingSermon?: boolean;
}) {
  const steps = [
    { label: "Create your account", done: true },
    { label: "Tell us about your church", done: true },
    {
      label: "Upload your first sermon — it's free!",
      done: hasProcessingSermon ?? false,
      cta: !hasProcessingSermon ? { label: "Clip Now", href: "/dashboard/upload?first=true" } : undefined,
    },
    {
      label: "Review your clips",
      done: false,
      locked: !hasProcessingSermon,
    },
  ];

  const completedCount = steps.filter((s) => s.done).length;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#2D2D2D]">
            {churchName ? `Welcome, ${churchName}!` : "Getting Started"}
          </h2>
          <p className="text-sm text-[#5c5c5c] mt-0.5">
            Your first sermon is free — {completedCount} of {steps.length} complete
          </p>
        </div>
        <div className="text-sm font-medium text-[#E8725A]">
          {completedCount}/{steps.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-[#E8E4DC] overflow-hidden">
        <div
          className="h-full bg-[#E8725A] rounded-full transition-all duration-500"
          style={{ width: `${(completedCount / steps.length) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
              step.done ? "bg-green-50" : step.locked ? "opacity-50" : "bg-[#F5F1EB]"
            }`}
          >
            <div className="flex items-center gap-3">
              {step.done ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-[#E8E4DC] flex-shrink-0" />
              )}
              <span className={`text-sm ${step.done ? "text-green-700" : "text-[#2D2D2D]"}`}>
                {step.label}
              </span>
            </div>
            {step.cta && (
              <Link
                href={step.cta.href}
                className="flex items-center gap-1 text-sm font-medium text-[#E8725A] hover:text-[#d4654f] transition-colors"
              >
                {step.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {step.locked && (
              <span className="text-xs text-[#5c5c5c]">Unlocks after processing</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
