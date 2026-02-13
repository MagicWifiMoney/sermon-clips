"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import {
  Sparkles,
  Play,
  Loader2,
  Zap,
  Clock,
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

interface Suggestion {
  id: string;
  startTime: number;
  endTime: number;
  topic: string;
  hookScore: number;
  summary: string;
}

interface SuggestedClipsPanelProps {
  sermonId: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const topicColors: Record<string, { bg: string; text: string; border: string }> = {
  grace: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  faith: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  love: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  hope: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  prayer: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  salvation: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  worship: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  community: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
};

const getTopicColor = (topic: string) => {
  const key = topic.toLowerCase();
  return (
    topicColors[key] ?? {
      bg: "bg-[#E8725A]/5",
      text: "text-[#E8725A]",
      border: "border-[#E8725A]/20",
    }
  );
};

const formatTimestamp = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
};

export function SuggestedClipsPanel({
  sermonId,
}: SuggestedClipsPanelProps) {
  const { data, error, isLoading, mutate } = useSWR<Suggestion[]>(
    `/api/sermons/${sermonId}/suggestions`,
    fetcher
  );
  const [generatingId, setGeneratingId] = useState<string | null>(null);
  const [generatingAll, setGeneratingAll] = useState(false);

  const handleGenerateClip = async (suggestion: Suggestion) => {
    setGeneratingId(suggestion.id);
    try {
      const res = await fetch(`/api/sermons/${sermonId}/suggestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suggestionId: suggestion.id }),
      });
      if (!res.ok) throw new Error("Failed to generate clip");
      toast.success("Clip generation started");
      mutate();
    } catch {
      toast.error("Failed to generate clip");
    } finally {
      setGeneratingId(null);
    }
  };

  const handleGenerateAll = async () => {
    if (!suggestions.length) return;
    setGeneratingAll(true);
    try {
      const res = await fetch(`/api/sermons/${sermonId}/suggestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          suggestionIds: suggestions.map((s) => s.id),
        }),
      });
      if (!res.ok) throw new Error("Failed to generate clips");
      toast.success(`Generating ${suggestions.length} clips`);
      mutate();
    } catch {
      toast.error("Failed to generate clips");
    } finally {
      setGeneratingAll(false);
    }
  };

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading suggestions...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-red-500">
            Failed to load suggestions
          </div>
        </CardContent>
      </Card>
    );
  }

  const suggestions = data ?? [];

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#E8725A]" />
              Suggested Clips
            </CardTitle>
            <CardDescription className="text-[#2D2D2D]/60">
              AI-detected clip-worthy moments
            </CardDescription>
          </div>
          <Button
            onClick={handleGenerateAll}
            disabled={generatingAll || generatingId !== null}
            className="bg-[#E8725A] hover:bg-[#D4624D] text-white"
            size="sm"
          >
            {generatingAll ? (
              <>
                <Loader2 className="h-4 w-4 mr-1.5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-1.5" />
                Generate All ({suggestions.length})
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.map((suggestion) => {
            const topicColor = getTopicColor(suggestion.topic);
            const hookPercent = Math.round(suggestion.hookScore * 100);
            const duration = suggestion.endTime - suggestion.startTime;

            return (
              <div
                key={suggestion.id}
                className="p-4 rounded-lg border border-[#E8E4DC] bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0 space-y-2">
                    {/* Timestamp and topic */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1 text-xs text-[#2D2D2D]/60">
                        <Clock className="h-3 w-3" />
                        <span className="font-mono">
                          {formatTimestamp(suggestion.startTime)} -{" "}
                          {formatTimestamp(suggestion.endTime)}
                        </span>
                        <span className="text-[#2D2D2D]/40">
                          ({Math.round(duration)}s)
                        </span>
                      </div>
                      <Badge
                        className={`text-xs ${topicColor.bg} ${topicColor.text} ${topicColor.border}`}
                      >
                        {suggestion.topic}
                      </Badge>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#2D2D2D]/80 line-clamp-2">
                      {suggestion.summary}
                    </p>

                    {/* Hook score bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#2D2D2D]/50 shrink-0">
                        Hook score
                      </span>
                      <div className="flex-1 h-1.5 rounded-full bg-[#E8E4DC] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${hookPercent}%`,
                            backgroundColor:
                              hookPercent >= 80
                                ? "#E8725A"
                                : hookPercent >= 50
                                  ? "#F59E0B"
                                  : "#94A3B8",
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#2D2D2D]/60 shrink-0">
                        {hookPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Generate button */}
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleGenerateClip(suggestion)}
                    disabled={
                      generatingId === suggestion.id || generatingAll
                    }
                    className="border-[#E8E4DC] text-[#2D2D2D]/70 hover:border-[#E8725A] hover:text-[#E8725A] shrink-0"
                  >
                    {generatingId === suggestion.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
