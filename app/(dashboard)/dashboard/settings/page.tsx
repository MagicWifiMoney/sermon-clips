"use client";

import { UserProfile } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Settings</h1>
        <p className="text-[#5c5c5c] mt-1">Manage your account and preferences</p>
      </div>

      {/* Account */}
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

      {/* Plan */}
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
  );
}
