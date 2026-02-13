"use client";

import Link from "next/link";
import { Sparkles, Clock, Film, Mic2, ArrowRight } from "lucide-react";

export function ValueRecapBanner({
  churchName,
  clipCount,
  sermonTitle,
}: {
  churchName?: string;
  clipCount: number;
  sermonTitle?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-[#E8725A]/5 via-white to-[#E8725A]/5 rounded-2xl border border-[#E8725A]/20 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-[#E8725A]" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#2D2D2D]">
            Great start{churchName ? `, ${churchName}` : ""}!
          </h2>
          <p className="text-sm text-[#5c5c5c] mt-0.5">
            You created {clipCount} clip{clipCount !== 1 ? "s" : ""}{sermonTitle ? ` from "${sermonTitle}"` : ""}.
            That would take ~4 hours to do manually.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 text-center border border-[#E8E4DC]">
          <Film className="w-5 h-5 text-[#E8725A] mx-auto mb-1" />
          <p className="text-2xl font-bold text-[#2D2D2D]">{clipCount}</p>
          <p className="text-xs text-[#5c5c5c]">clips created</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-[#E8E4DC]">
          <Clock className="w-5 h-5 text-[#E8725A] mx-auto mb-1" />
          <p className="text-2xl font-bold text-[#2D2D2D]">~4 hrs</p>
          <p className="text-xs text-[#5c5c5c]">saved</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-[#E8E4DC]">
          <Mic2 className="w-5 h-5 text-[#E8725A] mx-auto mb-1" />
          <p className="text-2xl font-bold text-[#2D2D2D]">1</p>
          <p className="text-xs text-[#5c5c5c]">sermon processed</p>
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-[#2D2D2D]">Ready to clip every sermon?</p>
        <Link
          href="/dashboard/upgrade"
          className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/20"
        >
          Upgrade — Plans start at $29/mo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
