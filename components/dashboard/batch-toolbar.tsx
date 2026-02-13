"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Play, X, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BatchToolbarProps {
  selectedIds: string[];
  onClear: () => void;
  onProcessComplete?: () => void;
}

export function BatchToolbar({
  selectedIds,
  onClear,
  onProcessComplete,
}: BatchToolbarProps) {
  const [processing, setProcessing] = useState(false);

  if (selectedIds.length === 0) return null;

  const handleProcess = async () => {
    setProcessing(true);
    try {
      const res = await fetch("/api/batch/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sermonIds: selectedIds }),
      });
      if (!res.ok) throw new Error("Failed to start batch processing");
      toast.success(
        `Processing started for ${selectedIds.length} sermon${selectedIds.length > 1 ? "s" : ""}`
      );
      onClear();
      onProcessComplete?.();
    } catch {
      toast.error("Failed to start batch processing");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#E8E4DC] bg-white shadow-lg shadow-black/10">
        <div className="flex items-center gap-2 text-sm font-medium text-[#2D2D2D]">
          <CheckSquare className="h-4 w-4 text-[#E8725A]" />
          <span>
            {selectedIds.length} sermon{selectedIds.length > 1 ? "s" : ""}{" "}
            selected
          </span>
        </div>

        <div className="w-px h-6 bg-[#E8E4DC]" />

        <Button
          onClick={handleProcess}
          disabled={processing}
          className="bg-[#E8725A] hover:bg-[#D4624D] text-white"
          size="sm"
        >
          <Play className="h-4 w-4 mr-1" />
          {processing ? "Starting..." : "Process Selected"}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-[#2D2D2D]/60 hover:text-[#2D2D2D]"
        >
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>
    </div>
  );
}
