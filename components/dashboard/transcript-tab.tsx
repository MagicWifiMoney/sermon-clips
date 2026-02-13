"use client";

import { useState, useCallback, useMemo, useRef } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { TranscriptSearch } from "@/components/dashboard/transcript-search";
import { Loader2, Scissors, FileText } from "lucide-react";
import { formatDuration } from "@/lib/utils";
import type { TranscriptSegment } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface TranscriptTabProps {
  sermonId: string;
  mosaicRunId?: string | null;
}

export function TranscriptTab({ sermonId }: TranscriptTabProps) {
  const { data, isLoading } = useSWR<{ data: { segments: TranscriptSegment[] } | null }>(
    `/api/sermons/${sermonId}/transcript`,
    fetcher
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [selection, setSelection] = useState<{ start: number; end: number } | null>(null);
  const [clipTitle, setClipTitle] = useState("");
  const [creating, setCreating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const transcript = data?.data;
  const segments = transcript?.segments ?? [];

  const matchingIndices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return segments
      .map((seg, i) => (seg.text.toLowerCase().includes(q) ? i : -1))
      .filter((i) => i !== -1);
  }, [segments, searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentMatchIndex(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentMatchIndex((prev) => (prev + 1) % matchingIndices.length);
  }, [matchingIndices.length]);

  const handlePrev = useCallback(() => {
    setCurrentMatchIndex((prev) => (prev - 1 + matchingIndices.length) % matchingIndices.length);
  }, [matchingIndices.length]);

  const handleSegmentClick = (seg: TranscriptSegment) => {
    if (selection && selection.start === seg.start) {
      setSelection(null);
    } else if (selection) {
      const start = Math.min(selection.start, seg.start);
      const end = Math.max(selection.end, seg.end);
      setSelection({ start, end });
    } else {
      setSelection({ start: seg.start, end: seg.end });
    }
  };

  const handleCreateClip = async () => {
    if (!selection) return;
    setCreating(true);
    try {
      const res = await fetch(`/api/sermons/${sermonId}/clips/from-transcript`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startTime: selection.start,
          endTime: selection.end,
          title: clipTitle || undefined,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create clip");
      }
      toast.success("Clip creation started!");
      setSelection(null);
      setClipTitle("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create clip");
    } finally {
      setCreating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-[#E8725A]" />
      </div>
    );
  }

  if (!transcript || segments.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-3">
          <FileText className="w-6 h-6 text-[#E8725A]" />
        </div>
        <p className="text-sm text-[#5c5c5c]">Transcript powered by Mosaic</p>
        <p className="text-xs text-[#5c5c5c]/70 mt-1">
          Transcript appears after processing completes
        </p>
      </div>
    );
  }

  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="space-y-3">
      <TranscriptSearch
        onSearch={handleSearch}
        resultCount={matchingIndices.length}
        currentIndex={currentMatchIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {selection && (
        <div className="flex items-center gap-3 p-3 rounded-lg border border-[#E8725A] bg-[#E8725A]/5">
          <Scissors className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#5c5c5c]">
              Selected: {formatDuration(selection.start)} — {formatDuration(selection.end)} ({formatDuration(selection.end - selection.start)})
            </p>
            <input
              type="text"
              value={clipTitle}
              onChange={(e) => setClipTitle(e.target.value)}
              placeholder="Clip title (optional)"
              className="mt-1 w-full text-sm px-2 py-1 rounded border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 outline-none focus:ring-1 focus:ring-[#E8725A]/50"
            />
          </div>
          <Button size="sm" onClick={handleCreateClip} disabled={creating}>
            {creating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Create Clip"}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => { setSelection(null); setClipTitle(""); }}>
            Cancel
          </Button>
        </div>
      )}

      <div ref={containerRef} className="max-h-[500px] overflow-y-auto rounded-lg border border-[#E8E4DC] bg-white divide-y divide-[#E8E4DC]">
        {segments.map((seg, i) => {
          const isMatch = matchingIndices.includes(i);
          const isCurrentMatch = matchingIndices[currentMatchIndex] === i;
          const isSelected =
            selection &&
            seg.start >= selection.start &&
            seg.end <= selection.end;

          return (
            <button
              key={i}
              onClick={() => handleSegmentClick(seg)}
              className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[#F5F1EB]/50 ${
                isSelected
                  ? "bg-[#E8725A]/5"
                  : isCurrentMatch
                  ? "bg-yellow-50"
                  : isMatch
                  ? "bg-yellow-50/50"
                  : ""
              }`}
            >
              <span className="text-[10px] text-[#5c5c5c] tabular-nums pt-0.5 flex-shrink-0 w-12">
                {formatDuration(seg.start)}
              </span>
              {seg.speaker && (
                <span className="text-[10px] font-medium text-[#E8725A] bg-[#E8725A]/10 rounded px-1.5 py-0.5 flex-shrink-0">
                  {seg.speaker}
                </span>
              )}
              <span className="text-sm text-[#2D2D2D] leading-relaxed">
                {highlightText(seg.text)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-[#5c5c5c] text-center">
        Click segments to select a range, then create a clip from the selection
      </p>
    </div>
  );
}
