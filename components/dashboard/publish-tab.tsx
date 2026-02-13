"use client";

import { useEffect, useState } from "react";
import { SocialAccountBar } from "@/components/dashboard/social-account-bar";
import { ClipPublishCard } from "@/components/dashboard/clip-publish-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import type { Clip, SocialPlatform } from "@/types";

interface PublishTabProps {
  clips: Clip[];
  sermonTitle: string;
}

export function PublishTab({ clips, sermonTitle }: PublishTabProps) {
  const [connectedPlatforms, setConnectedPlatforms] = useState<SocialPlatform[]>([]);

  useEffect(() => {
    fetch("/api/social/accounts")
      .then((r) => r.json())
      .then((data) => {
        if (data.data) {
          setConnectedPlatforms(
            data.data
              .filter((a: { connected: boolean }) => a.connected)
              .map((a: { platform: SocialPlatform }) => a.platform)
          );
        }
      })
      .catch(() => {});
  }, []);

  if (clips.length === 0) {
    return (
      <Card className="text-center py-12">
        <Send className="w-8 h-8 text-[#5c5c5c]/30 mx-auto mb-3" />
        <p className="text-sm text-[#5c5c5c]">No clips to publish yet</p>
        <p className="text-xs text-[#5c5c5c]/70 mt-1">Clips will appear here once processing is complete</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SocialAccountBar connectedPlatforms={connectedPlatforms} />
      </div>

      {connectedPlatforms.length === 0 && (
        <Card className="bg-amber-50 border-amber-200 p-4">
          <p className="text-sm text-amber-800">
            Connect social accounts in{" "}
            <a href="/dashboard/settings" className="font-medium underline">Settings &rarr; Integrations</a>
            {" "}to start publishing clips.
          </p>
        </Card>
      )}

      <div className="space-y-3">
        {clips.map((clip, i) => (
          <ClipPublishCard
            key={clip.id}
            clip={clip}
            index={i}
            sermonTitle={sermonTitle}
            connectedPlatforms={connectedPlatforms}
          />
        ))}
      </div>

      {clips.length > 1 && (
        <Button variant="secondary" className="w-full" disabled>
          <Send className="w-4 h-4" />
          Publish All Selected (coming soon)
        </Button>
      )}
    </div>
  );
}
