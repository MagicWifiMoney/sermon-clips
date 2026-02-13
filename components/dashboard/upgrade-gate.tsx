"use client";

import Link from "next/link";
import { Lock, ArrowRight, Quote } from "lucide-react";

export function UpgradeGate({
  clipCount,
}: {
  clipCount?: number;
}) {
  return (
    <div className="max-w-lg mx-auto text-center space-y-6 py-12">
      <div className="w-16 h-16 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mx-auto">
        <Lock className="w-8 h-8 text-[#E8725A]" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#2D2D2D]">
          You&apos;ve used your free sermon!
        </h2>
        <p className="text-[#5c5c5c] max-w-sm mx-auto">
          {clipCount
            ? `You created ${clipCount} clips and saved ~4 hours. Imagine doing that every single week.`
            : "Upgrade to keep clipping sermons every week."}
        </p>
      </div>

      {/* Testimonial */}
      <div className="bg-[#F5F1EB] rounded-xl p-5 max-w-md mx-auto text-left">
        <Quote className="w-6 h-6 text-[#E8725A]/30 mb-2" />
        <p className="text-sm text-[#2D2D2D] italic leading-relaxed">
          &ldquo;We saved 6 hours/week since switching. The AI finds moments I wouldn&apos;t have thought to clip.&rdquo;
        </p>
        <p className="text-xs text-[#5c5c5c] mt-2">
          — Pastor Mike, Grace Community Church
        </p>
      </div>

      <div className="space-y-3">
        <Link
          href="/dashboard/upgrade"
          className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium text-base transition-all hover:shadow-xl hover:shadow-[#E8725A]/30"
        >
          See Plans & Pricing
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div>
          <Link
            href="/dashboard"
            className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] underline underline-offset-2"
          >
            Continue with your existing clips
          </Link>
        </div>
      </div>
    </div>
  );
}
