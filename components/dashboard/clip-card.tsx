"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDuration } from "@/lib/utils";
import { Download, Play, Smartphone, Monitor, Square } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import type { Clip } from "@/types";

const formatIcons: Record<string, React.ElementType> = {
  vertical: Smartphone,
  landscape: Monitor,
  square: Square,
};

interface ClipCardProps {
  clip: Clip;
  index: number;
}

export function ClipCard({ clip, index }: ClipCardProps) {
  const posthog = usePostHog();
  const FormatIcon = clip.format ? formatIcons[clip.format] ?? Square : Square;

  const handleDownload = async () => {
    if (clip.videoUrl) {
      posthog.capture("clip_downloaded", { clip_id: clip.id, format: clip.format });
      window.open(`/api/clips/${clip.id}/download`, "_blank");
    }
  };

  return (
    <div className="rounded-xl bg-white border border-[#E8E4DC] overflow-hidden hover:shadow-md transition-shadow group">
      {/* Thumbnail */}
      <div className="aspect-video bg-[#2D2D2D] relative">
        {clip.thumbnailUrl ? (
          <img
            src={clip.thumbnailUrl}
            alt={clip.title || `Clip ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a]">
            <Play className="w-8 h-8 text-white/30" />
          </div>
        )}

        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-5 h-5 text-[#2D2D2D] ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h4 className="text-sm font-medium text-[#2D2D2D] truncate mb-1">
          {clip.title || `Clip #${index + 1}`}
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {clip.durationSeconds && (
              <span className="text-xs text-[#5c5c5c]">
                {formatDuration(clip.durationSeconds)}
              </span>
            )}
            {clip.format && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                <FormatIcon className="w-3 h-3 mr-0.5" />
                {clip.format}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2"
            onClick={handleDownload}
            disabled={!clip.videoUrl}
          >
            <Download className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
