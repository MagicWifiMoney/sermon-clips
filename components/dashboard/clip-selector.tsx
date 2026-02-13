"use client";

import { useState } from "react";
import useSWR from "swr";
import {
  ChevronDown,
  ChevronRight,
  Film,
  CheckSquare,
  Square,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Clip {
  id: string;
  title: string;
  duration?: number;
  status?: string;
}

interface Sermon {
  id: string;
  title: string;
  date?: string;
  clips: Clip[];
  _count?: { clips: number };
}

interface ClipSelectorProps {
  onChange: (selectedClipIds: string[]) => void;
  selectedClipIds?: string[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ClipSelector({
  onChange,
  selectedClipIds = [],
}: ClipSelectorProps) {
  const { data, error, isLoading } = useSWR<Sermon[]>("/api/sermons", fetcher);
  const [expandedSermons, setExpandedSermons] = useState<Set<string>>(
    new Set()
  );
  const [search, setSearch] = useState("");

  const toggleExpanded = (sermonId: string) => {
    setExpandedSermons((prev) => {
      const next = new Set(prev);
      if (next.has(sermonId)) {
        next.delete(sermonId);
      } else {
        next.add(sermonId);
      }
      return next;
    });
  };

  const toggleClip = (clipId: string) => {
    const next = selectedClipIds.includes(clipId)
      ? selectedClipIds.filter((id) => id !== clipId)
      : [...selectedClipIds, clipId];
    onChange(next);
  };

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return "--:--";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  const sermons = data ?? [];
  const filteredSermons = search.trim()
    ? sermons.filter(
        (s) =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.clips?.some((c) =>
            c.title.toLowerCase().includes(search.toLowerCase())
          )
      )
    : sermons;

  if (isLoading) {
    return (
      <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
        <CardContent className="p-6">
          <div className="flex items-center justify-center py-8 text-[#2D2D2D]/50">
            Loading clips...
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
            Failed to load sermons
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-[#E8E4DC] bg-[#F5F1EB]">
      <CardHeader>
        <CardTitle className="text-[#2D2D2D] flex items-center gap-2">
          <Film className="h-5 w-5 text-[#E8725A]" />
          Select Clips
        </CardTitle>
        <CardDescription className="text-[#2D2D2D]/60">
          Browse sermons and select clips
          {selectedClipIds.length > 0 && (
            <Badge className="ml-2 bg-[#E8725A]/10 text-[#E8725A] border-[#E8725A]/20">
              {selectedClipIds.length} selected
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2D2D2D]/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sermons or clips..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/30 focus:border-[#E8725A]"
          />
        </div>

        {/* Sermon accordion */}
        {filteredSermons.length === 0 ? (
          <div className="text-center py-6 text-[#2D2D2D]/50">
            <Film className="h-8 w-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm">
              {search.trim() ? "No matching sermons" : "No sermons found"}
            </p>
          </div>
        ) : (
          <div className="space-y-1.5 max-h-96 overflow-y-auto">
            {filteredSermons.map((sermon) => {
              const isExpanded = expandedSermons.has(sermon.id);
              const clipCount = sermon.clips?.length ?? sermon._count?.clips ?? 0;
              const selectedInSermon =
                sermon.clips?.filter((c) => selectedClipIds.includes(c.id))
                  .length ?? 0;

              return (
                <div
                  key={sermon.id}
                  className="border border-[#E8E4DC] rounded-lg overflow-hidden"
                >
                  {/* Sermon header */}
                  <button
                    onClick={() => toggleExpanded(sermon.id)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-[#F5F1EB]/50 transition-colors text-left"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-[#2D2D2D]/40 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-[#2D2D2D]/40 shrink-0" />
                    )}
                    <span className="flex-1 text-sm font-medium text-[#2D2D2D] truncate">
                      {sermon.title}
                    </span>
                    <span className="text-xs text-[#2D2D2D]/40 shrink-0">
                      {clipCount} clip{clipCount !== 1 ? "s" : ""}
                    </span>
                    {selectedInSermon > 0 && (
                      <Badge className="bg-[#E8725A]/10 text-[#E8725A] border-[#E8725A]/20 text-xs shrink-0">
                        {selectedInSermon}
                      </Badge>
                    )}
                  </button>

                  {/* Clips list */}
                  {isExpanded && sermon.clips && (
                    <div className="border-t border-[#E8E4DC] bg-[#F5F1EB]/30">
                      {sermon.clips.length === 0 ? (
                        <p className="px-4 py-3 text-xs text-[#2D2D2D]/40">
                          No clips available
                        </p>
                      ) : (
                        sermon.clips.map((clip) => {
                          const isSelected = selectedClipIds.includes(clip.id);
                          return (
                            <button
                              key={clip.id}
                              onClick={() => toggleClip(clip.id)}
                              className={`w-full flex items-center gap-2.5 px-4 py-2 text-left transition-colors ${
                                isSelected
                                  ? "bg-[#E8725A]/5"
                                  : "hover:bg-white/50"
                              }`}
                            >
                              {isSelected ? (
                                <CheckSquare className="h-4 w-4 text-[#E8725A] shrink-0" />
                              ) : (
                                <Square className="h-4 w-4 text-[#2D2D2D]/30 shrink-0" />
                              )}
                              <span className="flex-1 text-sm text-[#2D2D2D] truncate">
                                {clip.title}
                              </span>
                              <span className="text-xs text-[#2D2D2D]/40 shrink-0">
                                {formatDuration(clip.duration)}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
