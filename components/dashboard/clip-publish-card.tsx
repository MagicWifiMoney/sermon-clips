"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDuration } from "@/lib/utils";
import { Send, Sparkles, Loader2, Play, Clock } from "lucide-react";
import type { Clip, SocialPlatform, PublicationStatus } from "@/types";

const PLATFORMS: { platform: SocialPlatform; label: string }[] = [
  { platform: "instagram", label: "Instagram" },
  { platform: "facebook", label: "Facebook" },
  { platform: "tiktok", label: "TikTok" },
  { platform: "youtube", label: "YouTube" },
  { platform: "x", label: "X" },
  { platform: "linkedin", label: "LinkedIn" },
];

const STATUS_BADGES: Record<PublicationStatus, { label: string; variant: "default" | "success" | "warning" | "error" | "outline" }> = {
  draft: { label: "Draft", variant: "outline" },
  scheduled: { label: "Scheduled", variant: "warning" },
  publishing: { label: "Publishing", variant: "warning" },
  published: { label: "Published", variant: "success" },
  failed: { label: "Failed", variant: "error" },
};

interface ClipPublishCardProps {
  clip: Clip;
  index: number;
  sermonTitle: string;
  connectedPlatforms: SocialPlatform[];
  status?: PublicationStatus;
}

export function ClipPublishCard({ clip, index, sermonTitle, connectedPlatforms, status }: ClipPublishCardProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([]);
  const [caption, setCaption] = useState("");
  const [scheduleType, setScheduleType] = useState<"now" | "scheduled">("now");
  const [scheduledDate, setScheduledDate] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [generatingCaption, setGeneratingCaption] = useState(false);

  const togglePlatform = (platform: SocialPlatform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleGenerateCaption = async () => {
    setGeneratingCaption(true);
    try {
      const res = await fetch(`/api/clips/${clip.id}/caption`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sermonTitle }),
      });
      const data = await res.json();
      setCaption(data.caption || `${clip.title || `Clip #${index + 1}`} from "${sermonTitle}" - Watch the full sermon!`);
    } catch {
      setCaption(`${clip.title || `Clip #${index + 1}`} from "${sermonTitle}" - Watch the full sermon! #sermon #faith #church`);
    } finally {
      setGeneratingCaption(false);
    }
  };

  const handlePublish = async () => {
    if (selectedPlatforms.length === 0) {
      toast.error("Select at least one platform");
      return;
    }
    setPublishing(true);
    try {
      const res = await fetch(`/api/clips/${clip.id}/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platforms: selectedPlatforms,
          caption,
          scheduledAt: scheduleType === "scheduled" ? scheduledDate : null,
        }),
      });
      if (!res.ok) throw new Error("Publishing failed");
      toast.success(scheduleType === "scheduled" ? "Clip scheduled!" : "Publishing clip...");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Publish failed — integration pending");
    } finally {
      setPublishing(false);
    }
  };

  const statusBadge = status ? STATUS_BADGES[status] : null;

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="w-24 h-16 rounded-lg bg-[#2D2D2D] shrink-0 overflow-hidden">
          {clip.thumbnailUrl ? (
            <img src={clip.thumbnailUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white/30" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-[#2D2D2D] truncate">
              {clip.title || `Clip #${index + 1}`}
            </h4>
            {clip.durationSeconds && (
              <span className="text-xs text-[#5c5c5c]">{formatDuration(clip.durationSeconds)}</span>
            )}
            {statusBadge && <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>}
          </div>

          {/* Platform checkboxes */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {PLATFORMS.map(({ platform, label }) => {
              const connected = connectedPlatforms.includes(platform);
              return (
                <button
                  key={platform}
                  type="button"
                  onClick={() => connected && togglePlatform(platform)}
                  disabled={!connected}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedPlatforms.includes(platform)
                      ? "bg-[#E8725A] text-white"
                      : connected
                      ? "bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#E8E4DC]"
                      : "bg-[#F5F1EB]/50 text-[#5c5c5c]/40 cursor-not-allowed"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Caption */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption for this clip..."
                rows={2}
                className="flex-1 px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleGenerateCaption}
                disabled={generatingCaption}
              >
                {generatingCaption ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                AI Generate
              </Button>

              {/* Schedule toggle */}
              <div className="flex items-center gap-1 ml-auto">
                <button
                  type="button"
                  onClick={() => setScheduleType("now")}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    scheduleType === "now" ? "bg-[#2D2D2D] text-white" : "text-[#5c5c5c] hover:bg-[#F5F1EB]"
                  }`}
                >
                  Now
                </button>
                <button
                  type="button"
                  onClick={() => setScheduleType("scheduled")}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                    scheduleType === "scheduled" ? "bg-[#2D2D2D] text-white" : "text-[#5c5c5c] hover:bg-[#F5F1EB]"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  Schedule
                </button>
              </div>
            </div>

            {scheduleType === "scheduled" && (
              <input
                type="datetime-local"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
              />
            )}

            <Button
              size="sm"
              onClick={handlePublish}
              disabled={publishing || selectedPlatforms.length === 0}
              className="w-full"
            >
              {publishing ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  {scheduleType === "scheduled" ? "Schedule" : "Publish"} to {selectedPlatforms.length || "..."} platform{selectedPlatforms.length !== 1 ? "s" : ""}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
