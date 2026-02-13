"use client";

import { use } from "react";
import Link from "next/link";
import useSWR from "swr";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CourseBuilder } from "@/components/dashboard/course-builder";
import { ArrowLeft, Film, Layers } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { SermonSeries, Sermon } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type SeriesDetail = SermonSeries & {
  sermons: (Sermon & { _count: { clips: number } })[];
  _count: { courses: number };
};

export default function SeriesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { data, isLoading } = useSWR<{ data: SeriesDetail }>(
    `/api/series/${id}`,
    fetcher
  );

  const series = data?.data;

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  if (!series) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <p className="text-[#5c5c5c]">Series not found</p>
        <Link href="/dashboard/settings" className="text-[#E8725A] hover:underline mt-2 inline-block">
          Back to Settings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link
        href="/dashboard/settings"
        className="inline-flex items-center gap-1.5 text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Settings
      </Link>

      <div>
        <div className="flex items-center gap-3 mb-1">
          <Layers className="w-6 h-6 text-[#E8725A]" />
          <h1 className="text-2xl font-bold text-[#2D2D2D]">{series.name}</h1>
        </div>
        {series.description && (
          <p className="text-[#5c5c5c] mt-1">{series.description}</p>
        )}
        <p className="text-xs text-[#5c5c5c] mt-2">
          {series.sermons.length} sermons &middot; Created {formatDate(series.createdAt)}
        </p>
      </div>

      {/* Sermons in series */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-[#2D2D2D]">Sermons</h2>
        {series.sermons.length === 0 ? (
          <p className="text-sm text-[#5c5c5c]">No sermons assigned to this series yet.</p>
        ) : (
          series.sermons.map((sermon) => (
            <Link key={sermon.id} href={`/dashboard/sermons/${sermon.id}`}>
              <Card className="flex items-center justify-between hover:border-[#E8725A]/30 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D]">{sermon.title}</p>
                  <p className="text-xs text-[#5c5c5c] mt-0.5">
                    <Film className="w-3 h-3 inline mr-1" />
                    {sermon._count.clips} clips &middot; {formatDate(sermon.createdAt)}
                  </p>
                </div>
              </Card>
            </Link>
          ))
        )}
      </div>

      {/* Course Builder */}
      <CourseBuilder seriesId={id} />
    </div>
  );
}
