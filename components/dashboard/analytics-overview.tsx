"use client";

import { Card } from "@/components/ui/card";
import { Eye, TrendingUp, Globe, Award } from "lucide-react";
import type { AnalyticsSummary, DateRange } from "@/types";

interface AnalyticsOverviewProps {
  summary: AnalyticsSummary;
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

const DATE_RANGES: { value: DateRange; label: string }[] = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
];

export function AnalyticsOverview({ summary, dateRange, onDateRangeChange }: AnalyticsOverviewProps) {
  const stats = [
    {
      label: "Total Views",
      value: summary.totalViews.toLocaleString(),
      icon: Eye,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Engagement Rate",
      value: `${summary.engagementRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "Top Platform",
      value: summary.topPlatform ? summary.topPlatform.charAt(0).toUpperCase() + summary.topPlatform.slice(1) : "—",
      icon: Globe,
      color: "text-purple-600 bg-purple-50",
    },
    {
      label: "Best Clip",
      value: summary.bestClipTitle || "—",
      icon: Award,
      color: "text-[#E8725A] bg-[#E8725A]/10",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Date Range */}
      <div className="flex justify-end">
        <div className="inline-flex bg-[#E8E4DC]/50 rounded-lg p-1 gap-1">
          {DATE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => onDateRangeChange(range.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                dateRange === range.value
                  ? "bg-white text-[#2D2D2D] shadow-sm"
                  : "text-[#5c5c5c] hover:text-[#2D2D2D]"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-[#2D2D2D] truncate">{stat.value}</p>
            <p className="text-xs text-[#5c5c5c] mt-0.5">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
