"use client";

import useSWR from "swr";
import { Card } from "@/components/ui/card";
import { MontageBuilder } from "@/components/dashboard/montage-builder";
import { Clapperboard, Download, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Montage } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MontagePage() {
  const { data } = useSWR<{ data: Montage[] }>("/api/montage", fetcher, { refreshInterval: 5000 });
  const montages = data?.data ?? [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Montage Builder</h1>
        <p className="text-[#5c5c5c] mt-1">Combine clips into highlight reels and compilations</p>
      </div>

      <MontageBuilder />

      {/* Existing montages */}
      {montages.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">Your Montages</h2>
          {montages.map((m) => (
            <Card key={m.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5F1EB] flex items-center justify-center">
                  <Clapperboard className="w-5 h-5 text-[#E8725A]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D]">{m.title}</p>
                  <p className="text-xs text-[#5c5c5c]">
                    {m.clipIds.length} clips &middot; {m.transitionStyle}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {m.status === "PENDING" && (
                  <span className="flex items-center gap-1 text-xs text-amber-500">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Processing
                  </span>
                )}
                {m.status === "COMPLETED" && m.videoUrl && (
                  <Button variant="ghost" size="sm" onClick={() => window.open(m.videoUrl!, "_blank")}>
                    <Download className="w-4 h-4" />
                  </Button>
                )}
                {m.status === "FAILED" && (
                  <span className="flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="w-3 h-3" />
                    Failed
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
