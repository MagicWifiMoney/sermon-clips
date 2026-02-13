"use client";

import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { CheckCircle2, ArrowLeft, Sparkles, Shield } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const TIERS = [
  {
    key: "starter",
    name: "Starter",
    subtitle: "For small churches",
    monthly: 29,
    yearly: 278,
    sermonsPerMonth: 4,
    clipsPerSermon: 5,
    features: [
      "4 sermons/month",
      "5 clips per sermon",
      "Captions included",
      "3 formats (vertical, landscape, square)",
      "AI B-Roll",
      "48hr turnaround",
    ],
    highlight: false,
  },
  {
    key: "growth",
    name: "Growth",
    subtitle: "For growing churches",
    monthly: 59,
    yearly: 566,
    sermonsPerMonth: 8,
    clipsPerSermon: 10,
    features: [
      "8 sermons/month",
      "10 clips per sermon",
      "All 3 formats",
      "24hr turnaround",
      "Custom branding",
      "Intro/Outro",
      "Background music",
      "AI Eye contact fix",
    ],
    highlight: true,
  },
  {
    key: "automation",
    name: "Auto-Pilot",
    subtitle: "Full automation",
    monthly: 149,
    yearly: 1430,
    sermonsPerMonth: -1,
    clipsPerSermon: 10,
    features: [
      "Unlimited sermons",
      "10+ clips per sermon",
      "4hr express turnaround",
      "YouTube auto-trigger",
      "Auto-posting to all platforms",
      "A/B hook testing",
      "Analytics dashboard",
      "Monthly strategy call",
    ],
    highlight: false,
  },
] as const;

export default function UpgradePage() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");
  const posthog = usePostHog();

  const { data: meData } = useSWR<{ data: { sermonsProcessed: number; plan: string } }>("/api/me", fetcher);
  const clipCount = (meData?.data?.sermonsProcessed ?? 0) * 5; // rough estimate

  posthog.capture("upgrade_page_viewed", { fromGate: true, plan: meData?.data?.plan });

  const handleSelectPlan = (tierKey: string) => {
    const tier = TIERS.find((t) => t.key === tierKey);
    if (!tier) return;

    posthog.capture("upgrade_plan_selected", {
      tier: tierKey,
      billing,
      price: billing === "yearly" ? tier.yearly : tier.monthly,
    });

    toast("Coming soon! We'll email you when billing is live.", {
      description: `You selected ${tier.name} (${billing}). We're finalizing Stripe integration.`,
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-[#2D2D2D]">Choose Your Plan</h1>
        {clipCount > 0 && (
          <p className="text-[#5c5c5c]">
            You got {clipCount} clips from your free sermon. Here&apos;s what you&apos;d get on a plan:
          </p>
        )}
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            billing === "monthly"
              ? "bg-[#2D2D2D] text-white"
              : "text-[#5c5c5c] hover:text-[#2D2D2D]"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            billing === "yearly"
              ? "bg-[#2D2D2D] text-white"
              : "text-[#5c5c5c] hover:text-[#2D2D2D]"
          }`}
        >
          Yearly
          <span className="ml-1.5 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {TIERS.map((tier) => {
          const price = billing === "yearly" ? Math.round(tier.yearly / 12) : tier.monthly;
          const totalYearly = tier.yearly;

          return (
            <div
              key={tier.key}
              className={`relative rounded-2xl p-6 flex flex-col ${
                tier.highlight
                  ? "bg-[#E8725A] text-white scale-[1.02] shadow-xl shadow-[#E8725A]/20"
                  : "bg-white border border-[#E8E4DC]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-[#E8725A] text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${tier.highlight ? "text-white" : "text-[#2D2D2D]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlight ? "text-white/70" : "text-[#5c5c5c]"}`}>
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-[#2D2D2D]"}`}>
                    ${price}
                  </span>
                  <span className={tier.highlight ? "text-white/70" : "text-[#5c5c5c]"}>/mo</span>
                </div>
                {billing === "yearly" && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-sm line-through ${tier.highlight ? "text-white/50" : "text-[#5c5c5c]/50"}`}>
                      ${tier.monthly}/mo
                    </span>
                    <span className={`text-xs ${tier.highlight ? "text-white/80" : "text-green-600"}`}>
                      ${totalYearly}/yr
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-white" : "text-[#E8725A]"
                      }`}
                    />
                    <span className={`text-sm ${tier.highlight ? "text-white" : "text-[#5c5c5c]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Value projection */}
              {clipCount > 0 && (
                <p className={`text-xs mb-4 ${tier.highlight ? "text-white/70" : "text-[#5c5c5c]"}`}>
                  ~{tier.sermonsPerMonth === -1 ? "unlimited" : tier.sermonsPerMonth * tier.clipsPerSermon} clips/month
                  {tier.sermonsPerMonth !== -1 ? `, ${tier.sermonsPerMonth} sermons` : ""}
                </p>
              )}

              <button
                onClick={() => handleSelectPlan(tier.key)}
                className={`w-full py-3 rounded-xl font-medium text-center transition-all ${
                  tier.highlight
                    ? "bg-white text-[#E8725A] hover:bg-white/90"
                    : "border border-[#E8E4DC] text-[#2D2D2D] hover:bg-[#F5F1EB]"
                }`}
              >
                Start {tier.name} Plan
              </button>
            </div>
          );
        })}
      </div>

      {/* Trust Signals */}
      <div className="text-center space-y-4 py-6">
        <div className="flex items-center justify-center gap-6 text-sm text-[#5c5c5c]">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-green-600" />
            No contracts. Cancel anytime.
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#E8725A]" />
            30-day money-back guarantee
          </span>
        </div>
        <p className="text-sm text-[#5c5c5c]">
          500+ churches trust Sermon Clips
        </p>
      </div>
    </div>
  );
}
