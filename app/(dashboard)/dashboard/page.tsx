"use client";

import { useState, useEffect, Suspense } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import { usePostHog } from "posthog-js/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SermonCard } from "@/components/dashboard/sermon-card";
import { BatchToolbar } from "@/components/dashboard/batch-toolbar";
import { OnboardingChecklist } from "@/components/onboarding/onboarding-checklist";
import { ValueRecapBanner } from "@/components/onboarding/value-recap-banner";
import { Confetti } from "@/components/onboarding/confetti";
import { Film, Mic2, Loader2, Upload, ArrowRight } from "lucide-react";
import type { Sermon, DashboardStats, SermonSeries, OnboardingData } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function DashboardPageWrapper() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto"><Skeleton className="h-96 rounded-2xl" /></div>}>
      <DashboardPageInner />
    </Suspense>
  );
}

type MeData = {
  id: string;
  plan: string;
  sermonsProcessed: number;
  onboardingStep: string | null;
  onboardingData: OnboardingData | null;
  sermonLimit: number | null;
};

function DashboardPageInner() {
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [batchMode, setBatchMode] = useState(false);
  const [showWelcomeConfetti, setShowWelcomeConfetti] = useState(false);

  const { data: meData } = useSWR<{ data: MeData }>("/api/me", fetcher);
  const me = meData?.data;

  const { data, isLoading } = useSWR<{
    sermons: (Sermon & { _count: { clips: number }; series?: SermonSeries | null })[];
    stats: DashboardStats;
  }>("/api/sermons", fetcher, { refreshInterval: 10000 });

  const sermons = data?.sermons ?? [];
  const stats = data?.stats;
  const hasSermons = sermons.length > 0;

  // Show confetti when arriving from onboarding
  useEffect(() => {
    if (searchParams.get("welcome") === "true") {
      setShowWelcomeConfetti(true);
      const timer = setTimeout(() => setShowWelcomeConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  // State A: New user → redirect to welcome wizard
  useEffect(() => {
    if (me && me.onboardingStep === null) {
      router.push("/dashboard/welcome");
    }
  }, [me, router]);

  const toggleSelect = (id: string, selected: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (selected) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  // Determine dashboard state
  const isFree = me?.plan === "free";
  const hasUsedFreeTrial = isFree && (me?.sermonsProcessed ?? 0) >= 1;
  const isNewFreeUser = isFree && (me?.sermonsProcessed ?? 0) === 0;
  const hasProcessingSermon = sermons.some(
    (s) => s.status === "PROCESSING" || s.status === "PENDING" || s.status === "UPLOADING"
  );

  // Get data for value recap
  const completedSermons = sermons.filter((s) => s.status === "COMPLETED");
  const firstSermon = completedSermons[0];
  const totalClips = stats?.totalClips ?? 0;
  const churchName = (me?.onboardingData as OnboardingData | null)?.churchName;

  // Upload button target — gate free users who've used their trial
  const uploadHref = hasUsedFreeTrial ? "/dashboard/upgrade" : "/dashboard/upload";

  // If redirecting to onboarding, show nothing
  if (me && me.onboardingStep === null) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {showWelcomeConfetti && <Confetti />}

      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">
          {churchName ? `Welcome, ${churchName}` : `Welcome back${user?.firstName ? `, ${user.firstName}` : ""}`}
        </h1>
        <p className="text-[#5c5c5c] mt-1">
          {isNewFreeUser
            ? "Your first sermon is free — let's get started!"
            : "Manage your sermons and clips"}
        </p>
      </div>

      {/* State B: Free trial active — show checklist */}
      {isNewFreeUser && me?.onboardingStep === "completed" && (
        <OnboardingChecklist
          churchName={churchName}
          hasProcessingSermon={hasProcessingSermon || hasSermons}
        />
      )}

      {/* State C: Free trial used — show value recap */}
      {hasUsedFreeTrial && totalClips > 0 && (
        <ValueRecapBanner
          churchName={churchName}
          clipCount={totalClips}
          sermonTitle={firstSermon?.title}
        />
      )}

      {/* Stats — show for paid users or after first sermon */}
      {!isNewFreeUser && (
        <>
          {isLoading ? (
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-24 rounded-2xl" />
              ))}
            </div>
          ) : stats ? (
            <div className="grid grid-cols-3 gap-4">
              <Card className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#E8725A]/10 flex items-center justify-center">
                  <Mic2 className="w-5 h-5 text-[#E8725A]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2D2D2D]">{stats.totalSermons}</p>
                  <p className="text-xs text-[#5c5c5c]">Sermons</p>
                </div>
              </Card>
              <Card className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#E8725A]/10 flex items-center justify-center">
                  <Film className="w-5 h-5 text-[#E8725A]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2D2D2D]">{stats.totalClips}</p>
                  <p className="text-xs text-[#5c5c5c]">Clips</p>
                </div>
              </Card>
              <Card className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Loader2 className={`w-5 h-5 text-amber-500 ${stats.processingCount > 0 ? "animate-spin" : ""}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2D2D2D]">{stats.processingCount}</p>
                  <p className="text-xs text-[#5c5c5c]">Processing</p>
                </div>
              </Card>
            </div>
          ) : null}
        </>
      )}

      {/* Sermon List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">Recent Sermons</h2>
          <div className="flex items-center gap-2">
            {hasSermons && (
              <>
                <Button
                  size="sm"
                  variant={batchMode ? "secondary" : "ghost"}
                  onClick={() => {
                    setBatchMode(!batchMode);
                    setSelectedIds(new Set());
                  }}
                  className="text-xs"
                >
                  {batchMode ? "Cancel Selection" : "Select"}
                </Button>
                <Link href={uploadHref}>
                  <Button size="sm">
                    <Upload className="w-4 h-4" />
                    Upload New
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 rounded-xl" />
            ))}
          </div>
        ) : hasSermons ? (
          <div className="space-y-3">
            {sermons.map((sermon) => (
              <SermonCard
                key={sermon.id}
                sermon={sermon}
                selectable={batchMode}
                selected={selectedIds.has(sermon.id)}
                onSelectChange={(selected) => toggleSelect(sermon.id, selected)}
              />
            ))}
          </div>
        ) : isNewFreeUser ? null : (
          /* Empty state for paid users */
          <Card className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-[#E8725A]" />
            </div>
            <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">
              Upload your first sermon
            </h3>
            <p className="text-[#5c5c5c] mb-6 max-w-sm mx-auto">
              Paste a YouTube link or upload a video file, and we&apos;ll create
              scroll-stopping clips in minutes.
            </p>
            <Link href="/dashboard/upload">
              <Button size="lg">
                Upload Sermon
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </Card>
        )}
      </div>

      {/* Batch Toolbar */}
      {selectedIds.size > 0 && (
        <BatchToolbar
          selectedIds={Array.from(selectedIds)}
          onClear={() => {
            setSelectedIds(new Set());
            setBatchMode(false);
          }}
        />
      )}
    </div>
  );
}
