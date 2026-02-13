"use client";

import { useState } from "react";
import { Search, ChevronUp, ChevronDown, X } from "lucide-react";

interface TranscriptSearchProps {
  onSearch: (query: string) => void;
  resultCount: number;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function TranscriptSearch({
  onSearch,
  resultCount,
  currentIndex,
  onNext,
  onPrev,
}: TranscriptSearchProps) {
  const [query, setQuery] = useState("");

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E8E4DC] bg-white">
      <Search className="w-4 h-4 text-[#5c5c5c] flex-shrink-0" />
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search transcript..."
        className="flex-1 text-sm text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 bg-transparent outline-none"
      />
      {query && (
        <div className="flex items-center gap-1">
          <span className="text-xs text-[#5c5c5c] tabular-nums">
            {resultCount > 0 ? `${currentIndex + 1}/${resultCount}` : "0 results"}
          </span>
          <button
            onClick={onPrev}
            disabled={resultCount === 0}
            className="p-0.5 hover:bg-[#F5F1EB] rounded disabled:opacity-30"
          >
            <ChevronUp className="w-3.5 h-3.5 text-[#5c5c5c]" />
          </button>
          <button
            onClick={onNext}
            disabled={resultCount === 0}
            className="p-0.5 hover:bg-[#F5F1EB] rounded disabled:opacity-30"
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#5c5c5c]" />
          </button>
          <button onClick={handleClear} className="p-0.5 hover:bg-[#F5F1EB] rounded">
            <X className="w-3.5 h-3.5 text-[#5c5c5c]" />
          </button>
        </div>
      )}
    </div>
  );
}
