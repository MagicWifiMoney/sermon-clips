"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Loader2, Unplug, ExternalLink } from "lucide-react";
import { ProcessingOptionsPanel, DEFAULT_PROCESSING_OPTIONS } from "@/components/dashboard/processing-options";
import { usePostHog } from "posthog-js/react";
import type { YouTubeChannelConfig, SocialPlatform, ProcessingOptions, PublishMode } from "@/types";

const SOCIAL_PLATFORMS: { platform: SocialPlatform; label: string; color: string }[] = [
  { platform: "instagram", label: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { platform: "facebook", label: "Facebook", color: "bg-blue-600" },
  { platform: "tiktok", label: "TikTok", color: "bg-black" },
  { platform: "youtube", label: "YouTube", color: "bg-red-600" },
  { platform: "x", label: "X (Twitter)", color: "bg-black" },
  { platform: "linkedin", label: "LinkedIn", color: "bg-blue-700" },
];

interface IntegrationsSettingsProps {
  initialYoutubeConfig: YouTubeChannelConfig | null;
}

export function IntegrationsSettings({ initialYoutubeConfig }: IntegrationsSettingsProps) {
  const [ytChannelUrl, setYtChannelUrl] = useState("");
  const [ytConfig, setYtConfig] = useState<YouTubeChannelConfig | null>(initialYoutubeConfig);
  const [ytAutoProcess, setYtAutoProcess] = useState(initialYoutubeConfig?.autoProcess ?? false);
  const [ytDefaultOptions, setYtDefaultOptions] = useState<ProcessingOptions>(
    initialYoutubeConfig?.defaultProcessingOptions ?? DEFAULT_PROCESSING_OPTIONS
  );
  const [ytPublishMode, setYtPublishMode] = useState<PublishMode>("review");
  const [connecting, setConnecting] = useState(false);
  const [savingYt, setSavingYt] = useState(false);

  const posthog = usePostHog();

  const handleYoutubeConnect = async () => {
    if (!ytChannelUrl.trim()) return;
    setConnecting(true);
    try {
      const res = await fetch("/api/integrations/youtube/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelUrl: ytChannelUrl.trim() }),
      });
      if (!res.ok) throw new Error("Failed to connect channel");
      const { data } = await res.json();
      setYtConfig(data);
      posthog.capture("youtube_channel_connected", { channel_name: data.channelName });
      toast.success("YouTube channel connected!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Connection failed");
    } finally {
      setConnecting(false);
    }
  };

  const handleYoutubeDisconnect = async () => {
    setYtConfig(null);
    setYtChannelUrl("");
    toast.success("YouTube channel disconnected");
  };

  const handleYoutubeSettingsSave = async () => {
    setSavingYt(true);
    try {
      const res = await fetch("/api/integrations/youtube/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          autoProcess: ytAutoProcess,
          defaultProcessingOptions: ytDefaultOptions,
        }),
      });
      if (!res.ok) throw new Error("Failed to save settings");
      toast.success("YouTube settings saved!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    } finally {
      setSavingYt(false);
    }
  };

  const handleManageSocialAccounts = async () => {
    try {
      const res = await fetch("/api/social/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform: "all" }),
      });
      if (!res.ok) throw new Error("Failed to get portal URL");
      const { data } = await res.json();
      if (data.redirectUrl) {
        window.open(data.redirectUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not open Mosaic portal");
    }
  };

  return (
    <div className="space-y-6">
      {/* YouTube Channel */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
            <Youtube className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#2D2D2D]">YouTube Channel</h3>
            <p className="text-xs text-[#5c5c5c]">Auto-process new sermon uploads from your channel</p>
          </div>
        </div>

        {ytConfig ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#F5F1EB]/50 border border-[#E8E4DC]">
              {ytConfig.thumbnailUrl && (
                <img src={ytConfig.thumbnailUrl} alt="" className="w-10 h-10 rounded-full" />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-[#2D2D2D]">{ytConfig.channelName}</p>
                {ytConfig.subscriberCount && (
                  <p className="text-xs text-[#5c5c5c]">{ytConfig.subscriberCount.toLocaleString()} subscribers</p>
                )}
              </div>
              <Badge variant="success">Connected</Badge>
              <Button variant="ghost" size="sm" onClick={handleYoutubeDisconnect}>
                <Unplug className="w-4 h-4" />
              </Button>
            </div>

            {/* Auto-process toggle */}
            <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E8E4DC] cursor-pointer hover:bg-[#F5F1EB]/50 transition-colors">
              <input
                type="checkbox"
                checked={ytAutoProcess}
                onChange={(e) => setYtAutoProcess(e.target.checked)}
                className="rounded border-[#E8E4DC] text-[#E8725A] focus:ring-[#E8725A]/50"
              />
              <div>
                <span className="text-sm font-medium text-[#2D2D2D]">Auto-process new uploads</span>
                <span className="block text-xs text-[#5c5c5c]">When you upload a new video to YouTube, automatically create clips using Mosaic</span>
              </div>
            </label>

            {ytAutoProcess && (
              <div>
                <p className="text-xs font-medium text-[#5c5c5c] mb-2">Default Processing Options</p>
                <ProcessingOptionsPanel
                  value={ytDefaultOptions}
                  onChange={setYtDefaultOptions}
                  publishMode={ytPublishMode}
                  onPublishModeChange={setYtPublishMode}
                />
              </div>
            )}

            <Button onClick={handleYoutubeSettingsSave} disabled={savingYt}>
              {savingYt ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save YouTube Settings"}
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              type="url"
              value={ytChannelUrl}
              onChange={(e) => setYtChannelUrl(e.target.value)}
              placeholder="https://youtube.com/@YourChannel"
              className="w-full px-3 py-2.5 rounded-lg border border-[#E8E4DC] text-sm bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50"
            />
            <Button onClick={handleYoutubeConnect} disabled={connecting || !ytChannelUrl.trim()}>
              {connecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Youtube className="w-4 h-4" /> Connect YouTube Channel</>}
            </Button>
          </div>
        )}
      </Card>

      {/* Social Accounts — Managed via Mosaic */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">Social Accounts</h3>
        <p className="text-xs text-[#5c5c5c] mb-4">
          Social publishing is powered by Mosaic. Connect and manage your social accounts in the Mosaic dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {SOCIAL_PLATFORMS.map(({ platform, label, color }) => (
            <div
              key={platform}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E8E4DC] bg-[#F5F1EB]/30"
            >
              <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                <span className="text-white text-xs font-bold">{label[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#2D2D2D]">{label}</p>
                <p className="text-xs text-[#5c5c5c]">Manage in Mosaic</p>
              </div>
            </div>
          ))}
        </div>

        <Button onClick={handleManageSocialAccounts} variant="secondary" className="w-full">
          <ExternalLink className="w-4 h-4" />
          Manage Social Accounts in Mosaic
        </Button>
        <p className="text-xs text-[#5c5c5c] mt-2 text-center">
          When &quot;Auto-publish&quot; is selected during upload, clips are posted to your connected accounts automatically.
        </p>
      </Card>
    </div>
  );
}
