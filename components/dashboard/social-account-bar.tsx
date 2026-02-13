"use client";

import Link from "next/link";
import type { SocialPlatform } from "@/types";

const PLATFORMS: { platform: SocialPlatform; label: string; color: string }[] = [
  { platform: "instagram", label: "IG", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { platform: "facebook", label: "FB", color: "bg-blue-600" },
  { platform: "tiktok", label: "TT", color: "bg-black" },
  { platform: "youtube", label: "YT", color: "bg-red-600" },
  { platform: "x", label: "X", color: "bg-black" },
  { platform: "linkedin", label: "LI", color: "bg-blue-700" },
];

interface SocialAccountBarProps {
  connectedPlatforms: SocialPlatform[];
}

export function SocialAccountBar({ connectedPlatforms }: SocialAccountBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1.5">
        {PLATFORMS.map(({ platform, label, color }) => {
          const connected = connectedPlatforms.includes(platform);
          return (
            <div
              key={platform}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                connected
                  ? `${color} text-white`
                  : "bg-[#E8E4DC]/50 text-[#5c5c5c]/50"
              }`}
              title={`${platform}${connected ? " (connected)" : " (not connected)"}`}
            >
              {label}
            </div>
          );
        })}
      </div>
      <Link
        href="/dashboard/settings"
        className="text-xs text-[#E8725A] hover:underline"
      >
        Manage accounts
      </Link>
    </div>
  );
}
