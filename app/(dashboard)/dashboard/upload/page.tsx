"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { usePostHog } from "posthog-js/react";
import { UploadForm } from "@/components/dashboard/upload-form";
import { UpgradeGate } from "@/components/dashboard/upgrade-gate";
import { Skeleton } from "@/components/ui/skeleton";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function UploadPage() {
  return (
    <Suspense fallback={<div className="max-w-2xl mx-auto"><Skeleton className="h-64 rounded-2xl" /></div>}>
      <UploadPageInner />
    </Suspense>
  );
}

function UploadPageInner() {
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const isFirst = searchParams.get("first") === "true";

  const { data: quotaData, isLoading } = useSWR<{
    data: { allowed: boolean; used: number; limit: number; plan: string };
  }>("/api/usage/check", fetcher);

  const quota = quotaData?.data;

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  // Show upgrade gate if quota exceeded
  if (quota && !quota.allowed) {
    posthog.capture("upgrade_gate_shown", { trigger: "upload_page", sermonsProcessed: quota.used });
    return (
      <div className="max-w-2xl mx-auto">
        <UpgradeGate clipCount={undefined} />
      </div>
    );
  }

  const simplified = isFirst && quota?.plan === "free" && (quota?.used ?? 0) === 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">
          {simplified ? "Clip Your First Sermon" : "Upload a Sermon"}
        </h1>
        <p className="text-[#5c5c5c] mt-1">
          {simplified
            ? "Paste a YouTube link and we'll do the rest — completely free"
            : "Paste a YouTube link or upload a video file to create clips"}
        </p>
      </div>
      <UploadForm simplified={simplified} />
    </div>
  );
}
