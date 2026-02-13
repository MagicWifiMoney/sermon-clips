"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Film, Youtube, Upload, Clock, Layers } from "lucide-react";
import type { Sermon, SermonSeries } from "@/types";

const statusConfig = {
  UPLOADING: { label: "Uploading", variant: "warning" as const, dot: "bg-amber-500" },
  PENDING: { label: "Pending", variant: "outline" as const, dot: "bg-gray-400" },
  PROCESSING: { label: "Processing", variant: "warning" as const, dot: "bg-amber-500 animate-pulse" },
  COMPLETED: { label: "Completed", variant: "success" as const, dot: "bg-green-500" },
  FAILED: { label: "Failed", variant: "error" as const, dot: "bg-red-500" },
};

interface SermonCardProps {
  sermon: Sermon & { _count?: { clips: number }; series?: SermonSeries | null };
  selectable?: boolean;
  selected?: boolean;
  onSelectChange?: (selected: boolean) => void;
}

export function SermonCard({ sermon, selectable, selected, onSelectChange }: SermonCardProps) {
  const status = statusConfig[sermon.status];
  const clipCount = sermon._count?.clips ?? 0;

  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-md transition-all cursor-pointer">
      {selectable && (
        <input
          type="checkbox"
          checked={selected ?? false}
          onChange={(e) => {
            e.stopPropagation();
            onSelectChange?.(e.target.checked);
          }}
          onClick={(e) => e.stopPropagation()}
          className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50 flex-shrink-0"
        />
      )}

      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-[#F5F1EB] flex items-center justify-center flex-shrink-0">
        {sermon.sourceType === "youtube" ? (
          <Youtube className="w-5 h-5 text-[#E8725A]" />
        ) : (
          <Upload className="w-5 h-5 text-[#5c5c5c]" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-[#2D2D2D] truncate">
            {sermon.title}
          </h3>
          <Badge variant={status.variant}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </Badge>
          {sermon.series && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#5c5c5c] bg-[#F5F1EB] rounded px-1.5 py-0.5">
              <Layers className="w-2.5 h-2.5" />
              {sermon.series.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-[#5c5c5c]">
          {sermon.status === "PROCESSING" ? (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Processing... {sermon.progress}%
            </span>
          ) : sermon.status === "COMPLETED" ? (
            <span className="flex items-center gap-1">
              <Film className="w-3 h-3" />
              {clipCount} clips
            </span>
          ) : null}
          <span>Uploaded {formatDate(sermon.createdAt)}</span>
        </div>
      </div>
    </div>
  );

  if (selectable) return content;

  return <Link href={`/dashboard/sermons/${sermon.id}`}>{content}</Link>;
}
