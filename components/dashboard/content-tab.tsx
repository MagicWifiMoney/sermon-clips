"use client";

import { useState } from "react";
import useSWR from "swr";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ContentPieceCard } from "@/components/dashboard/content-piece-card";
import { Sparkles, Loader2 } from "lucide-react";
import type { ContentPiece } from "@/types";

const CONTENT_TYPES = [
  "SUMMARY_SHORT",
  "SUMMARY_LONG",
  "YOUTUBE_DESCRIPTION",
  "DISCUSSION_GUIDE",
  "DEVOTIONAL_PLAN",
  "BLOG_POST",
  "KEY_QUOTES",
  "BIBLE_VERSES",
  "SOCIAL_POST",
] as const;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface ContentTabProps {
  sermonId: string;
  sermonTitle: string;
}

export function ContentTab({ sermonId, sermonTitle }: ContentTabProps) {
  const [generatingTypes, setGeneratingTypes] = useState<Set<string>>(new Set());
  const [generatingAll, setGeneratingAll] = useState(false);

  const { data, mutate } = useSWR<{ data: ContentPiece[] }>(
    `/api/sermons/${sermonId}/content`,
    fetcher,
    { refreshInterval: 3000 }
  );

  const pieces = data?.data ?? [];
  const pieceMap = new Map(pieces.map((p) => [p.type, p]));
  const allGenerated = CONTENT_TYPES.every((t) => pieceMap.get(t)?.status === "COMPLETED");

  const generateOne = async (type: string) => {
    setGeneratingTypes((prev) => new Set(prev).add(type));
    try {
      const res = await fetch(`/api/sermons/${sermonId}/content`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ types: [type] }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }
      toast.success("Content generation started");
      mutate();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Generation failed");
    } finally {
      setGeneratingTypes((prev) => {
        const next = new Set(prev);
        next.delete(type);
        return next;
      });
    }
  };

  const generateAll = async () => {
    setGeneratingAll(true);
    const missing = CONTENT_TYPES.filter(
      (t) => !pieceMap.has(t) || pieceMap.get(t)?.status === "FAILED"
    );
    try {
      const res = await fetch(`/api/sermons/${sermonId}/content`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ types: missing }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }
      toast.success(`Generating ${missing.length} content pieces`);
      mutate();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Generation failed");
    } finally {
      setGeneratingAll(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#2D2D2D]">AI Content</h3>
          <p className="text-xs text-[#5c5c5c]">
            Generate a full week of content from &ldquo;{sermonTitle}&rdquo;
          </p>
        </div>
        {!allGenerated && (
          <Button size="sm" onClick={generateAll} disabled={generatingAll}>
            {generatingAll ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Generate All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CONTENT_TYPES.map((type) => (
          <ContentPieceCard
            key={type}
            type={type}
            piece={pieceMap.get(type)}
            onGenerate={generateOne}
            generating={generatingTypes.has(type)}
          />
        ))}
      </div>
    </div>
  );
}
