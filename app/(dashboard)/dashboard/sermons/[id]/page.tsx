"use client";

import { use } from "react";
import Link from "next/link";
import useSWR from "swr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ClipCard } from "@/components/dashboard/clip-card";
import { ProcessingStatus } from "@/components/dashboard/processing-status";
import { formatDate, formatDurationLong } from "@/lib/utils";
import { ArrowLeft, Download, Youtube, Upload } from "lucide-react";
import type { SermonWithClips } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const statusConfig = {
  UPLOADING: { label: "Uploading", variant: "warning" as const },
  PENDING: { label: "Pending", variant: "outline" as const },
  PROCESSING: { label: "Processing", variant: "warning" as const },
  COMPLETED: { label: "Completed", variant: "success" as const },
  FAILED: { label: "Failed", variant: "error" as const },
};

export default function SermonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { data, isLoading } = useSWR<{ data: SermonWithClips }>(
    `/api/sermons/${id}`,
    fetcher,
    { refreshInterval: 5000 }
  );

  const sermon = data?.data;
  const isProcessing = sermon && ["UPLOADING", "PENDING", "PROCESSING"].includes(sermon.status);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-72" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  if (!sermon) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <p className="text-[#5c5c5c]">Sermon not found</p>
        <Link href="/dashboard" className="text-[#E8725A] hover:underline mt-2 inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const status = statusConfig[sermon.status];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-[#2D2D2D]">{sermon.title}</h1>
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#5c5c5c]">
            <span className="flex items-center gap-1">
              {sermon.sourceType === "youtube" ? (
                <Youtube className="w-4 h-4" />
              ) : (
                <Upload className="w-4 h-4" />
              )}
              {sermon.sourceType === "youtube" ? "YouTube" : "Upload"}
            </span>
            {sermon.status === "COMPLETED" && (
              <span>{sermon.clips.length} clips</span>
            )}
            {sermon.durationSeconds && (
              <span>{formatDurationLong(sermon.durationSeconds)} sermon</span>
            )}
            <span>Uploaded {formatDate(sermon.createdAt)}</span>
          </div>
        </div>

        {sermon.status === "COMPLETED" && sermon.clips.length > 0 && (
          <Button variant="secondary">
            <Download className="w-4 h-4" />
            Download All
          </Button>
        )}
      </div>

      {/* Content based on status */}
      {isProcessing ? (
        <ProcessingStatus
          status={sermon.status}
          progress={sermon.progress}
          errorMessage={sermon.errorMessage}
        />
      ) : sermon.status === "FAILED" ? (
        <ProcessingStatus
          status={sermon.status}
          progress={0}
          errorMessage={sermon.errorMessage}
        />
      ) : sermon.status === "COMPLETED" ? (
        sermon.clips.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sermon.clips.map((clip, i) => (
              <ClipCard key={clip.id} clip={clip} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#5c5c5c]">
            <p>Processing completed but no clips were generated.</p>
          </div>
        )
      ) : null}
    </div>
  );
}
