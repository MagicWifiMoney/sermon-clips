"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview";
import { ClipPerformanceTable } from "@/components/dashboard/clip-performance-table";
import { BarChart3 } from "lucide-react";
import type { AnalyticsSummary, ClipPerformanceRow, DateRange, SocialPlatform } from "@/types";

// Empty state data — will be replaced by real Mosaic analytics
const EMPTY_SUMMARY: AnalyticsSummary = {
  totalViews: 0,
  engagementRate: 0,
  topPlatform: null,
  bestClipId: null,
  bestClipTitle: null,
};

const EMPTY_ROWS: ClipPerformanceRow[] = [];

const PLATFORMS: SocialPlatform[] = ["instagram", "tiktok", "youtube", "facebook", "x", "linkedin"];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange>("30d");

  // TODO: replace with SWR fetch from /api/analytics?range={dateRange}
  const summary = EMPTY_SUMMARY;
  const rows = EMPTY_ROWS;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Analytics</h1>
        <p className="text-[#5c5c5c] mt-1">Track your clip performance across platforms</p>
      </div>

      <AnalyticsOverview
        summary={summary}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      <ClipPerformanceTable rows={rows} />

      {/* Platform Breakdown */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-4">Platform Breakdown</h3>
        {rows.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-[#E8725A]" />
            </div>
            <p className="text-sm text-[#5c5c5c]">Analytics powered by Mosaic</p>
            <p className="text-xs text-[#5c5c5c]/70 mt-1">Data appears after your first published clips</p>
          </div>
        ) : (
          <div className="space-y-3">
            {PLATFORMS.map((platform) => {
              const platformRows = rows.filter((r) => r.platforms.includes(platform));
              const totalViews = platformRows.reduce((sum, r) => sum + r.views, 0);
              const maxViews = Math.max(...PLATFORMS.map((p) =>
                rows.filter((r) => r.platforms.includes(p)).reduce((s, r) => s + r.views, 0)
              ), 1);

              return (
                <div key={platform} className="flex items-center gap-3">
                  <span className="text-xs text-[#5c5c5c] w-20 capitalize">{platform}</span>
                  <div className="flex-1 h-6 bg-[#F5F1EB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E8725A] rounded-full transition-all"
                      style={{ width: `${(totalViews / maxViews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#2D2D2D] tabular-nums w-16 text-right">
                    {totalViews.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
