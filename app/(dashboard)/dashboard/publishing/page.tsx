"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Send, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function PublishingPage() {
  const { data: scheduleData, isLoading: loadingSchedule } = useSWR("/api/schedule", fetcher);

  const upcoming = scheduleData?.upcoming ?? [];
  const recent = scheduleData?.recent ?? [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Publishing</h1>
        <p className="text-[#5c5c5c] mt-1">Manage scheduled and recent publications</p>
      </div>

      {/* Upcoming */}
      <div>
        <h2 className="text-sm font-semibold text-[#2D2D2D] mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#E8725A]" />
          Upcoming
        </h2>
        {loadingSchedule ? (
          <div className="space-y-2">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
          </div>
        ) : upcoming.length === 0 ? (
          <Card className="text-center py-10">
            <Send className="w-8 h-8 text-[#5c5c5c]/30 mx-auto mb-3" />
            <p className="text-sm text-[#5c5c5c]">No upcoming publications</p>
            <p className="text-xs text-[#5c5c5c]/70 mt-1">
              Schedule clips from any sermon&apos;s Publish tab
            </p>
          </Card>
        ) : (
          <div className="space-y-2">
            {upcoming.map((post: { id: string; platform: string; caption: string; scheduledFor: string; status: string }) => (
              <Card key={post.id} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8725A]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#E8725A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#2D2D2D] truncate">
                    {post.caption || "Untitled post"}
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    {post.platform} &middot; {new Date(post.scheduledFor).toLocaleString()}
                  </p>
                </div>
                <Badge variant={post.status === "pending" ? "warning" : "success"}>
                  {post.status}
                </Badge>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Recent */}
      <div>
        <h2 className="text-sm font-semibold text-[#2D2D2D] mb-3 flex items-center gap-2">
          <Send className="w-4 h-4 text-[#5c5c5c]" />
          Recent Publications
        </h2>
        {loadingSchedule ? (
          <div className="space-y-2">
            <Skeleton className="h-16 rounded-xl" />
          </div>
        ) : recent.length === 0 ? (
          <Card className="text-center py-10">
            <p className="text-sm text-[#5c5c5c]">No recent publications</p>
            <p className="text-xs text-[#5c5c5c]/70 mt-1">Published clips will appear here</p>
          </Card>
        ) : (
          <div className="space-y-2">
            {recent.map((pub: { id: string; platform: string; caption: string; publishedAt: string; status: string; externalUrl?: string }) => (
              <Card key={pub.id} className="flex items-center gap-4 p-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#2D2D2D] truncate">
                    {pub.caption || "Untitled"}
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    {pub.platform} &middot; {formatDate(pub.publishedAt)}
                  </p>
                </div>
                <Badge variant={pub.status === "published" ? "success" : pub.status === "failed" ? "error" : "outline"}>
                  {pub.status}
                </Badge>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
