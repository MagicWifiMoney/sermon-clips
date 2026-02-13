"use client";

import { useEffect, useState } from "react";
import { UserProfile } from "@clerk/nextjs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrandingSettings } from "@/components/dashboard/branding-settings";
import { IntegrationsSettings } from "@/components/dashboard/integrations-settings";
import { SeriesManager } from "@/components/dashboard/series-manager";
import { CampusManager } from "@/components/dashboard/campus-manager";
import { TemplateManager } from "@/components/dashboard/template-manager";
import { PlanStatusCard } from "@/components/dashboard/plan-status-card";
import { Skeleton } from "@/components/ui/skeleton";
import useSWR from "swr";
import type { BrandingConfig, YouTubeChannelConfig, PlanTier } from "@/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SettingsPage() {
  const [brandingConfig, setBrandingConfig] = useState<BrandingConfig | null>(null);
  const [youtubeConfig, setYoutubeConfig] = useState<YouTubeChannelConfig | null>(null);
  const [loaded, setLoaded] = useState(false);

  const { data: meData } = useSWR<{
    data: { plan: PlanTier; sermonsProcessed: number };
  }>("/api/me", fetcher);

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
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="series">Series</TabsTrigger>
          <TabsTrigger value="campuses">Campuses</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#E8E4DC] [&_.cl-navbar]:hidden [&_.cl-headerTitle]:hidden [&_.cl-headerSubtitle]:hidden">
              <UserProfile
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    cardBox: "shadow-none border-0 w-full max-w-none",
                    navbar: "hidden",
                    navbarMobileMenuRow: "hidden",
                    pageScrollBox: "p-4 pt-2",
                    profileSection: "gap-4",
                  },
                }}
              />
            </div>

            {meData?.data ? (
              <PlanStatusCard
                plan={meData.data.plan}
                sermonsProcessed={meData.data.sermonsProcessed}
              />
            ) : (
              <Skeleton className="h-32 rounded-2xl" />
            )}
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

        {/* Templates Tab */}
        <TabsContent value="templates">
          <TemplateManager />
        </TabsContent>

        {/* Series Tab */}
        <TabsContent value="series">
          <SeriesManager />
        </TabsContent>

        {/* Campuses Tab */}
        <TabsContent value="campuses">
          <CampusManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
