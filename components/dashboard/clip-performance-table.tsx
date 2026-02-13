"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Download } from "lucide-react";
import type { ClipPerformanceRow } from "@/types";

interface ClipPerformanceTableProps {
  rows: ClipPerformanceRow[];
}

type SortKey = "views" | "likes" | "shares" | "comments";

export function ClipPerformanceTable({ rows }: ClipPerformanceTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("views");
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...rows].sort((a, b) =>
    sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]
  );

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  const SortHeader = ({ label, sortKeyName }: { label: string; sortKeyName: SortKey }) => (
    <button
      onClick={() => toggleSort(sortKeyName)}
      className="flex items-center gap-1 text-xs font-medium text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
    >
      {label}
      <ArrowUpDown className="w-3 h-3" />
    </button>
  );

  if (rows.length === 0) {
    return (
      <Card className="text-center py-12">
        <p className="text-[#5c5c5c] text-sm">No published clips yet</p>
        <p className="text-xs text-[#5c5c5c]/70 mt-1">Publish clips to see performance data here</p>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E4DC]">
        <h3 className="text-sm font-semibold text-[#2D2D2D]">Clip Performance</h3>
        <Button variant="ghost" size="sm" disabled>
          <Download className="w-3.5 h-3.5" />
          Export
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E8E4DC] bg-[#F5F1EB]/30">
              <th className="text-left px-5 py-2.5 text-xs font-medium text-[#5c5c5c]">Clip</th>
              <th className="text-left px-3 py-2.5 text-xs font-medium text-[#5c5c5c]">Sermon</th>
              <th className="text-left px-3 py-2.5 text-xs font-medium text-[#5c5c5c]">Platforms</th>
              <th className="text-right px-3 py-2.5"><SortHeader label="Views" sortKeyName="views" /></th>
              <th className="text-right px-3 py-2.5"><SortHeader label="Likes" sortKeyName="likes" /></th>
              <th className="text-right px-3 py-2.5"><SortHeader label="Shares" sortKeyName="shares" /></th>
              <th className="text-right px-5 py-2.5"><SortHeader label="Comments" sortKeyName="comments" /></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.clipId} className="border-b border-[#E8E4DC] last:border-0 hover:bg-[#F5F1EB]/20">
                <td className="px-5 py-3 font-medium text-[#2D2D2D] max-w-[200px] truncate">{row.clipTitle}</td>
                <td className="px-3 py-3 text-[#5c5c5c] max-w-[150px] truncate">{row.sermonTitle}</td>
                <td className="px-3 py-3">
                  <div className="flex gap-1">
                    {row.platforms.map((p) => (
                      <Badge key={p} variant="outline" className="text-[10px] px-1.5 py-0">
                        {p}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="px-3 py-3 text-right text-[#2D2D2D] tabular-nums">{row.views.toLocaleString()}</td>
                <td className="px-3 py-3 text-right text-[#2D2D2D] tabular-nums">{row.likes.toLocaleString()}</td>
                <td className="px-3 py-3 text-right text-[#2D2D2D] tabular-nums">{row.shares.toLocaleString()}</td>
                <td className="px-5 py-3 text-right text-[#2D2D2D] tabular-nums">{row.comments.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
