"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import {
  Film,
  ArrowUp,
  ArrowDown,
  Scissors,
  Blend,
  Square,
  MoveHorizontal,
  ZoomIn,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TransitionStyle = "crossfade" | "fade-to-black" | "cut" | "slide" | "zoom";

interface ClipItem {
  id: string;
  title: string;
  duration?: number;
  sermonTitle?: string;
}

interface MontageBuilderProps {
  clips?: ClipItem[];
}

const transitionOptions: {
  value: TransitionStyle;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "crossfade",
    label: "Crossfade",
    icon: <Blend className="h-4 w-4" />,
  },
  {
    value: "fade-to-black",
    label: "Fade to Black",
    icon: <Square className="h-4 w-4" />,
  },
  {
    value: "cut",
    label: "Cut",
    icon: <Scissors className="h-4 w-4" />,
  },
  {
    value: "slide",
    label: "Slide",
    icon: <MoveHorizontal className="h-4 w-4" />,
  },
  {
    value: "zoom",
    label: "Zoom",
    icon: <ZoomIn className="h-4 w-4" />,
  },
];

export function MontageBuilder({ clips: initialClips = [] }: MontageBuilderProps) {
  const [orderedClips, setOrderedClips] = useState<ClipItem[]>(initialClips);
  const [transition, setTransition] = useState<TransitionStyle>("crossfade");
  const [title, setTitle] = useState("");
  const [creating, setCreating] = useState(false);

  const moveClip = useCallback((index: number, direction: "up" | "down") => {
    setOrderedClips((prev) => {
      const next = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= next.length) return prev;
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  }, []);

  const handleCreate = async () => {
    if (!title.trim()) {
      toast.error("Please enter a montage title");
      return;
    }
    if (orderedClips.length < 2) {
      toast.error("Select at least 2 clips for a montage");
      return;
    }

    setCreating(true);
    try {
      const res = await fetch("/api/montage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          clipIds: orderedClips.map((c) => c.id),
          transition,
        }),
      });
      if (!res.ok) throw new Error("Failed to create montage");
      toast.success("Montage creation started");
      setTitle("");
    } catch {
      toast.error("Failed to create montage");
    } finally {
      setCreating(false);
    }
  };

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return "--:--";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <Film className="h-5 w-5 text-[#E8725A]" />
          Montage Builder
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Arrange clips and choose transitions to create a montage
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Title input */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#2D2D2D]">
            Montage Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Best of January Series"
            className="w-full px-3 py-2 text-sm rounded-md border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/30 focus:border-[#E8725A]"
          />
        </div>

        {/* Transition picker */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2D2D2D]">
            Transition Style
          </label>
          <div className="flex flex-wrap gap-2">
            {transitionOptions.map((opt) => (
              <Button
                key={opt.value}
                variant={transition === opt.value ? "primary" : "secondary"}
                size="sm"
                onClick={() => setTransition(opt.value)}
                className={
                  transition === opt.value
                    ? "bg-[#E8725A] hover:bg-[#D4624D] text-white border-[#E8725A]"
                    : "border-[#E8E4DC] text-[#2D2D2D]/70 hover:border-[#E8725A] hover:text-[#E8725A]"
                }
              >
                {opt.icon}
                <span className="ml-1.5">{opt.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Clip list */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#2D2D2D]">
            Clip Order ({orderedClips.length} clips)
          </label>
          {orderedClips.length === 0 ? (
            <div className="text-center py-6 text-[#2D2D2D]/50 border border-dashed border-[#E8E4DC] rounded-lg">
              <Film className="h-8 w-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">No clips selected</p>
              <p className="text-xs mt-1">
                Use the clip selector to add clips
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {orderedClips.map((clip, index) => (
                <div
                  key={clip.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#E8E4DC] bg-white"
                >
                  <span className="text-xs font-mono text-[#2D2D2D]/40 w-5 text-center shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#2D2D2D] truncate">
                      {clip.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {clip.sermonTitle && (
                        <span className="text-xs text-[#2D2D2D]/50 truncate">
                          {clip.sermonTitle}
                        </span>
                      )}
                      <span className="text-xs text-[#2D2D2D]/40">
                        {formatDuration(clip.duration)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 text-[#2D2D2D]/40 hover:text-[#E8725A]"
                      onClick={() => moveClip(index, "up")}
                      disabled={index === 0}
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 text-[#2D2D2D]/40 hover:text-[#E8725A]"
                      onClick={() => moveClip(index, "down")}
                      disabled={index === orderedClips.length - 1}
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Create button */}
        <Button
          onClick={handleCreate}
          disabled={creating || orderedClips.length < 2 || !title.trim()}
          className="w-full bg-[#E8725A] hover:bg-[#D4624D] text-white"
        >
          {creating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Creating Montage...
            </>
          ) : (
            <>
              <Film className="h-4 w-4 mr-2" />
              Create Montage
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
