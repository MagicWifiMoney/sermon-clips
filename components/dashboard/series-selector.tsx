"use client";

import useSWR from "swr";
import { Layers } from "lucide-react";
import type { SermonSeries } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface SeriesSelectorProps {
  value: string | null;
  onChange: (seriesId: string | null) => void;
}

export function SeriesSelector({ value, onChange }: SeriesSelectorProps) {
  const { data } = useSWR<{ data: SermonSeries[] }>("/api/series", fetcher);
  const seriesList = data?.data ?? [];

  if (seriesList.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <Layers className="w-4 h-4 text-[#5c5c5c]" />
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
        className="text-sm px-3 py-1.5 rounded-lg border border-[#E8E4DC] bg-white text-[#2D2D2D] outline-none focus:ring-1 focus:ring-[#E8725A]/50"
      >
        <option value="">No series</option>
        {seriesList.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
}
