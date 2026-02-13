"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Church, Mic2, Users, Sparkles } from "lucide-react";
import { WizardStep } from "./wizard-step";
import { CelebrationScreen } from "./celebration-screen";

const ROLES = [
  { value: "pastor", label: "Pastor / Lead Pastor", icon: Mic2 },
  { value: "comms-director", label: "Communications Director", icon: Users },
  { value: "volunteer", label: "Volunteer / Media Team", icon: Sparkles },
  { value: "other", label: "Other", icon: Church },
] as const;

const GOALS = [
  { value: "grow-social", label: "Grow our social media", description: "Build a bigger online presence" },
  { value: "save-time", label: "Save time on editing", description: "Stop spending hours on clip creation" },
  { value: "reach-more-people", label: "Reach more people", description: "Extend sermons beyond Sunday" },
  { value: "repurpose-content", label: "Repurpose content", description: "Get more mileage from each sermon" },
] as const;

export function OnboardingWizard() {
  const posthog = usePostHog();
  const [step, setStep] = useState(1);
  const [churchName, setChurchName] = useState("");
  const [role, setRole] = useState<string>("");
  const [primaryGoal, setPrimaryGoal] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const startTime = useState(() => Date.now())[0];

  const handleNext = () => {
    posthog.capture("onboarding_step_completed", { step, value: step === 1 ? churchName : step === 2 ? role : primaryGoal });
    setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ churchName, role, primaryGoal }),
      });
      if (!res.ok) throw new Error("Failed to save");

      posthog.capture("onboarding_completed", {
        churchName,
        role,
        primaryGoal,
        durationMs: Date.now() - startTime,
      });
      setCompleted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (completed) {
    return <CelebrationScreen churchName={churchName} />;
  }

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder:text-[#5c5c5c]/50 focus:outline-none focus:ring-2 focus:ring-[#E8725A]/50 focus:border-[#E8725A] text-lg";

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative w-12 h-12 mx-auto mb-4">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
            <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
            <polygon points="18,22 26,26 18,30" fill="#E8725A" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Welcome to Sermon Clips</h1>
        <p className="text-[#5c5c5c] mt-1">Your first sermon is completely free. No credit card needed.</p>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === step ? "w-8 bg-[#E8725A]" : s < step ? "w-2 bg-[#E8725A]" : "w-2 bg-[#E8E4DC]"
            }`}
          />
        ))}
      </div>

      {/* Steps */}
      <div className="bg-white rounded-2xl border border-[#E8E4DC] p-8 relative min-h-[320px]">
        {/* Step 1: Church name */}
        <WizardStep active={step === 1}>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#2D2D2D]">What&apos;s your church called?</h2>
              <p className="text-sm text-[#5c5c5c] mt-1">We&apos;ll personalize everything for your church.</p>
            </div>
            <input
              type="text"
              value={churchName}
              onChange={(e) => setChurchName(e.target.value)}
              placeholder="e.g. Grace Community Church"
              className={inputClasses}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter" && churchName.trim()) handleNext();
              }}
            />
            <button
              onClick={handleNext}
              disabled={!churchName.trim()}
              className="w-full flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </WizardStep>

        {/* Step 2: Role */}
        <WizardStep active={step === 2}>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#2D2D2D]">What&apos;s your role?</h2>
              <p className="text-sm text-[#5c5c5c] mt-1">This helps us pick the best defaults.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {ROLES.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setRole(r.value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    role === r.value
                      ? "border-[#E8725A] bg-[#E8725A]/5"
                      : "border-[#E8E4DC] hover:border-[#E8725A]/30"
                  }`}
                >
                  <r.icon className={`w-5 h-5 mb-2 ${role === r.value ? "text-[#E8725A]" : "text-[#5c5c5c]"}`} />
                  <p className="text-sm font-medium text-[#2D2D2D]">{r.label}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 px-4 py-3 rounded-xl border border-[#E8E4DC] text-[#5c5c5c] hover:bg-[#F5F1EB] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!role}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </WizardStep>

        {/* Step 3: Goal */}
        <WizardStep active={step === 3}>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-[#2D2D2D]">What&apos;s your #1 goal?</h2>
              <p className="text-sm text-[#5c5c5c] mt-1">We&apos;ll tailor your experience.</p>
            </div>
            <div className="space-y-2">
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setPrimaryGoal(g.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    primaryGoal === g.value
                      ? "border-[#E8725A] bg-[#E8725A]/5"
                      : "border-[#E8E4DC] hover:border-[#E8725A]/30"
                  }`}
                >
                  <p className="font-medium text-[#2D2D2D]">{g.label}</p>
                  <p className="text-xs text-[#5c5c5c] mt-0.5">{g.description}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-1 px-4 py-3 rounded-xl border border-[#E8E4DC] text-[#5c5c5c] hover:bg-[#F5F1EB] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!primaryGoal || submitting}
                className="flex-1 flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                {submitting ? "Saving..." : "Let's Go!"}
                {!submitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </WizardStep>
      </div>

      {/* Skip link */}
      <p className="text-center mt-4">
        <button
          onClick={() => {
            posthog.capture("onboarding_skipped", { lastStep: step });
            handleSubmit();
          }}
          className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] underline underline-offset-2"
        >
          Skip for now
        </button>
      </p>
    </div>
  );
}
