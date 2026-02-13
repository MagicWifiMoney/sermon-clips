"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ClipCard } from "@/components/dashboard/clip-card";
import { ProcessingStatus } from "@/components/dashboard/processing-status";
import { PublishTab } from "@/components/dashboard/publish-tab";
import { DripSchedule } from "@/components/dashboard/drip-schedule";
import { ContentTab } from "@/components/dashboard/content-tab";
import { TranscriptTab } from "@/components/dashboard/transcript-tab";
import { SuggestedClipsPanel } from "@/components/dashboard/suggested-clips";
import { GraphicsSection } from "@/components/dashboard/graphics-section";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { formatDate, formatDurationLong } from "@/lib/utils";
import { ArrowLeft, Download, Youtube, Upload, Trash2 } from "lucide-react";
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
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { data, isLoading } = useSWR<{ data: SermonWithClips }>(
    `/api/sermons/${id}`,
    fetcher,
    { refreshInterval: 5000 }
  );

  const sermon = data?.data;
  const isProcessing = sermon && ["UPLOADING", "PENDING", "PROCESSING"].includes(sermon.status);

  const handleDownloadAll = () => {
    if (!sermon?.clips?.length) {
      toast.error("No clips to download");
      return;
    }
    for (const clip of sermon.clips) {
      if (clip.videoUrl) {
        window.open(`/api/clips/${clip.id}/download`, "_blank");
      }
    }
    toast.success(`Downloading ${sermon.clips.length} clips`);
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/sermons/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Sermon deleted");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed");
    } finally {
      setDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  const handleRetry = async () => {
    try {
      const res = await fetch(`/api/sermons/${id}/retry`, { method: "POST" });
      if (!res.ok) throw new Error("Retry failed");
      toast.success("Re-processing queued!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Retry failed");
    }
  };

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
              {sermon.sourceType === "youtube" ? "YouTube" : sermon.sourceType === "url" ? "URL" : "Upload"}
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

        <div className="flex items-center gap-2">
          {sermon.status === "COMPLETED" && sermon.clips.length > 0 && (
            <Button variant="secondary" onClick={handleDownloadAll}>
              <Download className="w-4 h-4" />
              Download All
            </Button>
          )}
          <Button variant="ghost" onClick={() => setShowDeleteDialog(true)} className="text-red-500 hover:text-red-600">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content based on status */}
      {isProcessing || sermon.status === "FAILED" ? (
        <ProcessingStatus
          status={sermon.status}
          progress={sermon.progress}
          errorMessage={sermon.errorMessage}
          onRetry={handleRetry}
        />
      ) : sermon.status === "COMPLETED" ? (
        <Tabs defaultValue="clips" className="space-y-4">
          <TabsList>
            <TabsTrigger value="clips">Clips</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="publish">Publish</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="clips">
            <SuggestedClipsPanel sermonId={id} />
            {sermon.clips.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sermon.clips.map((clip, i) => (
                  <ClipCard key={clip.id} clip={clip} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-[#5c5c5c]">
                <p>Processing completed but no clips were generated.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="content">
            <ContentTab sermonId={id} sermonTitle={sermon.title} />
            <div className="mt-6">
              <GraphicsSection sermonId={id} />
            </div>
          </TabsContent>

          <TabsContent value="transcript">
            <TranscriptTab sermonId={id} mosaicRunId={sermon.mosaicRunId} />
          </TabsContent>

          <TabsContent value="publish">
            <PublishTab clips={sermon.clips} sermonTitle={sermon.title} />
          </TabsContent>

          <TabsContent value="schedule">
            <DripSchedule sermonId={sermon.id} />
          </TabsContent>
        </Tabs>
      ) : null}

      {/* Delete confirmation */}
      <ConfirmDialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
        title="Delete Sermon"
        message={`Are you sure you want to delete "${sermon.title}"? This will also delete all clips and publications. This action cannot be undone.`}
        confirmLabel={deleting ? "Deleting..." : "Delete Sermon"}
        danger
      />
    </div>
  );
}
