"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Download, Loader2, Sparkles, Check, AlertCircle } from "lucide-react";
import type { ContentPiece } from "@/types";

const TYPE_META: Record<string, { label: string; description: string; icon: string }> = {
  SUMMARY_SHORT: { label: "Short Summary", description: "2-3 sentence overview", icon: "📝" },
  SUMMARY_LONG: { label: "Long Summary", description: "Detailed sermon summary", icon: "📄" },
  YOUTUBE_DESCRIPTION: { label: "YouTube Description", description: "SEO-optimized description", icon: "▶️" },
  DISCUSSION_GUIDE: { label: "Discussion Guide", description: "Small group questions", icon: "💬" },
  DEVOTIONAL_PLAN: { label: "Devotional Plan", description: "5-day devotional series", icon: "🙏" },
  BLOG_POST: { label: "Blog Post", description: "Full blog article", icon: "✍️" },
  KEY_QUOTES: { label: "Key Quotes", description: "Notable quotes extracted", icon: "💎" },
  BIBLE_VERSES: { label: "Bible Verses", description: "Referenced scriptures", icon: "📖" },
  SOCIAL_POST: { label: "Social Posts", description: "Platform-ready posts", icon: "📱" },
};

interface ContentPieceCardProps {
  type: string;
  piece?: ContentPiece;
  onGenerate: (type: string) => void;
  generating?: boolean;
}

export function ContentPieceCard({ type, piece, onGenerate, generating }: ContentPieceCardProps) {
  const [copied, setCopied] = useState(false);
  const meta = TYPE_META[type] ?? { label: type, description: "", icon: "📄" };

  const handleCopy = () => {
    if (!piece?.content) return;
    navigator.clipboard.writeText(piece.content);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!piece?.content) return;
    const blob = new Blob([piece.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${meta.label.toLowerCase().replace(/\s+/g, "-")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const isComplete = piece?.status === "COMPLETED";
  const isFailed = piece?.status === "FAILED";
  const isGenerating = piece?.status === "GENERATING" || generating;

  return (
    <Card className="p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{meta.icon}</span>
          <div>
            <h4 className="text-sm font-semibold text-[#2D2D2D]">{meta.label}</h4>
            <p className="text-xs text-[#5c5c5c]">{meta.description}</p>
          </div>
        </div>
        {isFailed && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
      </div>

      {isComplete && piece?.content && (
        <div className="text-xs text-[#2D2D2D] bg-[#F5F1EB] rounded-lg p-3 max-h-32 overflow-y-auto whitespace-pre-wrap">
          {piece.content.slice(0, 300)}
          {piece.content.length > 300 && "..."}
        </div>
      )}

      <div className="flex items-center gap-2 mt-auto">
        {isComplete ? (
          <>
            <Button variant="ghost" size="sm" onClick={handleCopy} className="text-xs">
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleDownload} className="text-xs">
              <Download className="w-3.5 h-3.5" />
              Download
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            variant={isFailed ? "secondary" : "primary"}
            onClick={() => onGenerate(type)}
            disabled={isGenerating}
            className="text-xs w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Generating...
              </>
            ) : isFailed ? (
              "Retry"
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                Generate
              </>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
}
