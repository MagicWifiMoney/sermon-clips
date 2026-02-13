"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, className, showLabel = true }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      <div className="h-3 bg-[#E8E4DC] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E8725A] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-[#5c5c5c] mt-1.5 text-right font-medium">{clamped}%</p>
      )}
    </div>
  );
}
