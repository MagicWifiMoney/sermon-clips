"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Loader2, Unplug, ExternalLink } from "lucide-react";
import { ProcessingOptionsPanel, DEFAULT_PROCESSING_OPTIONS } from "@/components/dashboard/processing-options";
import type { YouTubeChannelConfig, SocialPlatform, ProcessingOptions, PublishMode } from "@/types";

const SOCIAL_PLATFORMS: { platform: SocialPlatform; label: string; color: string }[] = [
  { platform: "instagram", label: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { platform: "facebook", label: "Facebook", color: "bg-blue-600" },
  { platform: "tiktok", label: "TikTok", color: "bg-black" },
  { platform: "youtube", label: "YouTube", color: "bg-red-600" },
  { platform: "x", label: "X (Twitter)", color: "bg-black" },
  { platform: "linkedin", label: "LinkedIn", color: "bg-blue-700" },
];

interface ConnectedAccount {
  platform: SocialPlatform;
  accountName: string | null;
  connected: boolean;
}

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

  const [socialAccounts, setSocialAccounts] = useState<ConnectedAccount[]>([]);
  const [connectingPlatform, setConnectingPlatform] = useState<SocialPlatform | null>(null);

  useEffect(() => {
    fetch("/api/social/accounts")
      .then((r) => r.json())
      .then((data) => {
        if (data.data) setSocialAccounts(data.data);
      })
      .catch(() => {});
  }, []);

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

  const handleSocialConnect = async (platform: SocialPlatform) => {
    setConnectingPlatform(platform);
    try {
      const res = await fetch("/api/social/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform }),
      });
      if (!res.ok) throw new Error("Connection failed");
      const { data } = await res.json();
      setSocialAccounts((prev) => {
        const filtered = prev.filter((a) => a.platform !== platform);
        return [...filtered, { platform, accountName: data.accountName, connected: true }];
      });
      toast.success(`${platform} connected!`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Connection failed — OAuth integration pending");
    } finally {
      setConnectingPlatform(null);
    }
  };

  const handleSocialDisconnect = async (platform: SocialPlatform) => {
    try {
      const res = await fetch(`/api/social/${platform}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Disconnect failed");
      setSocialAccounts((prev) => prev.filter((a) => a.platform !== platform));
      toast.success(`${platform} disconnected`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Disconnect failed");
    }
  };

  const isConnected = (platform: SocialPlatform) =>
    socialAccounts.find((a) => a.platform === platform && a.connected);

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

      {/* Social Accounts */}
      <Card>
        <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">Social Accounts</h3>
        <p className="text-xs text-[#5c5c5c] mb-4">Connect your social media accounts to publish clips directly</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SOCIAL_PLATFORMS.map(({ platform, label, color }) => {
            const account = isConnected(platform);
            return (
              <div
                key={platform}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E8E4DC] hover:bg-[#F5F1EB]/30 transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{label[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#2D2D2D]">{label}</p>
                  {account && (
                    <p className="text-xs text-[#5c5c5c] truncate">{account.accountName || "Connected"}</p>
                  )}
                </div>
                {account ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSocialDisconnect(platform)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Unplug className="w-3.5 h-3.5" />
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleSocialConnect(platform)}
                    disabled={connectingPlatform === platform}
                  >
                    {connectingPlatform === platform ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <><ExternalLink className="w-3.5 h-3.5" /> Connect</>
                    )}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
