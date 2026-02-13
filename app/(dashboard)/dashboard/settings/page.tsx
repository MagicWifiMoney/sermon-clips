"use client";

import { useEffect, useState } from "react";
import { UserProfile } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrandingSettings } from "@/components/dashboard/branding-settings";
import { IntegrationsSettings } from "@/components/dashboard/integrations-settings";
import { ArrowRight } from "lucide-react";
import type { BrandingConfig, YouTubeChannelConfig } from "@/types";

export default function SettingsPage() {
  const [brandingConfig, setBrandingConfig] = useState<BrandingConfig | null>(null);
  const [youtubeConfig, setYoutubeConfig] = useState<YouTubeChannelConfig | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/settings/branding")
      .then((r) => r.json())
      .then((data) => {
        if (data.brandingConfig) setBrandingConfig(data.brandingConfig);
        if (data.youtubeConfig) setYoutubeConfig(data.youtubeConfig);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Settings</h1>
        <p className="text-[#5c5c5c] mt-1">Manage your account, branding, and integrations</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">Account</h2>
              <div className="rounded-2xl overflow-hidden border border-[#E8E4DC]">
                <UserProfile
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      cardBox: "shadow-none border-0 w-full",
                      navbar: "hidden",
                      pageScrollBox: "p-0",
                    },
                  }}
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">Plan</h2>
              <Card className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#2D2D2D]">Free Trial</p>
                  <p className="text-sm text-[#5c5c5c] mt-0.5">
                    Upgrade to process more sermons and unlock premium features
                  </p>
                </div>
                <Button variant="secondary" disabled>
                  Upgrade Plan
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Branding Tab */}
        <TabsContent value="branding">
          {loaded && <BrandingSettings initialConfig={brandingConfig} />}
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations">
          {loaded && <IntegrationsSettings initialYoutubeConfig={youtubeConfig} />}
        </TabsContent>
      </Tabs>
    </div>
  );
}
