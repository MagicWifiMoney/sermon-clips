'use client';

import { useState } from "react";
import { CheckCircle2, ArrowRight, Heart, Users, Sparkles } from "lucide-react";

const SURVEY_FEATURES = [
  "AI moment detection (auto-find clip-worthy moments)",
  "Dynamic captions & subtitles",
  "Multi-format output (vertical, horizontal, square)",
  "Branded intro/outro & watermark",
  "Auto-posting to social platforms",
  "YouTube auto-trigger (upload → clips auto-generated)",
  "Drip scheduling (spread clips across the week)",
  "AI B-roll & background music",
  "Silence & filler word removal",
  "Audio enhancement & mixing",
  "Dynamic zoom & color correction",
  "Sermon-to-blog post generation",
  "Audiogram creation (audio + waveform graphics)",
  "Multi-campus branding (different logos per location)",
  "30+ language translation",
  "AI voiceover & avatar overlays",
  "Analytics & ROI tracking",
  "Processing templates (save your style)",
  "Approval workflow (pastor reviews before posting)",
  "A/B testing (multiple hooks/captions per clip)",
];

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(feature)) return prev.filter((f) => f !== feature);
      if (prev.length >= 5) return prev;
      return [...prev, feature];
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      churchSize: (form.elements.namedItem("churchSize") as HTMLSelectElement).value,
      currentMethod: (form.elements.namedItem("currentMethod") as HTMLSelectElement).value,
      painPoint: (form.elements.namedItem("painPoint") as HTMLTextAreaElement).value,
      topFeatures: selectedFeatures,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      source: "feedback-page",
    };
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectClass =
    "w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors";
  const labelClass = "block text-sm font-medium text-[#2D2D2D] mb-2";

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors hidden md:inline"
            >
              ← Back to Home
            </a>
            <a
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25"
            >
              Try Free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8725A]/10 text-[#E8725A] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Heart className="w-4 h-4" />
            Your Voice Shapes What We Build
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            We&apos;re Building This
            <br />
            <span className="text-[#E8725A]">For You</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5c5c5c] leading-relaxed max-w-2xl mx-auto">
            Every sermon carries a message worth sharing. We want to build a tool truly worthy
            of the message you carry — and we can&apos;t do it without you.
            Your few minutes of feedback will directly shape what gets built next.
          </p>
        </div>
      </section>

      {/* The Why */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-4 bg-white/60 rounded-2xl p-6">
            <Users className="w-6 h-6 text-[#E8725A] mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-1">We know how hard ministry teams work</h3>
              <p className="text-[#5c5c5c] text-sm leading-relaxed">
                Between Sunday prep, midweek services, pastoral care, and everything in between —
                finding time to repurpose content can feel impossible. We see you. We respect the weight you carry.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 rounded-2xl p-6">
            <Sparkles className="w-6 h-6 text-[#E8725A] mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-1">We want to build the right tool — not just any tool</h3>
              <p className="text-[#5c5c5c] text-sm leading-relaxed">
                As iron sharpens iron, so one person sharpens another. Your real-world experience
                in ministry is exactly the wisdom we need. We&apos;re not guessing at what to build —
                we&apos;re asking the people who will use it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 rounded-2xl p-6">
            <Heart className="w-6 h-6 text-[#E8725A] mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-[#2D2D2D] mb-1">You&apos;re not a survey respondent — you&apos;re a co-builder</h3>
              <p className="text-[#5c5c5c] text-sm leading-relaxed">
                Where two or three gather with a shared purpose, something meaningful takes shape.
                Think of this as equipping the saints for the work of ministry — together,
                we&apos;re building something that helps the Word reach further than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Form */}
      <section className="pb-20 px-6 lg:px-8" id="survey">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-3">Share Your Perspective</h2>
            <p className="text-[#5c5c5c]">Takes about 3 minutes. Every answer matters.</p>
          </div>

          {submitted ? (
            <div className="text-center py-20 bg-white/60 rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-[#E8725A]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#E8725A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">
                Thank you for being part of this.
              </h3>
              <p className="text-[#5c5c5c] max-w-md mx-auto mb-2">
                We&apos;ll be in touch soon. Your feedback is already shaping what we build next.
              </p>
              <p className="text-[#5c5c5c]/70 italic max-w-md mx-auto text-sm">
                May your ministry continue to bear much fruit — and may the words you speak on Sunday
                echo far beyond the walls of your church.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/60 rounded-3xl p-8 md:p-12 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Your Role</label>
                  <select name="role" required className={selectClass}>
                    <option value="">Select your role...</option>
                    <option>Pastor</option>
                    <option>Media/Communications Director</option>
                    <option>Social Media Manager</option>
                    <option>Volunteer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Church Size</label>
                  <select name="churchSize" required className={selectClass}>
                    <option value="">Select size...</option>
                    <option>Under 100</option>
                    <option>100-500</option>
                    <option>500-1000</option>
                    <option>1000-5000</option>
                    <option>5000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>How do you currently create sermon clips?</label>
                <select name="currentMethod" required className={selectClass}>
                  <option value="">Select method...</option>
                  <option>Manual editing</option>
                  <option>Outsource to freelancer</option>
                  <option>Use a tool (which one?)</option>
                  <option>Don&apos;t create clips yet</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>What&apos;s your #1 frustration with sermon content?</label>
                <textarea
                  name="painPoint"
                  rows={3}
                  className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30 resize-none"
                  placeholder="Tell us what's holding you back..."
                />
              </div>

              <div>
                <label className={labelClass}>Pick your top 5 most important features</label>
                <p className="text-sm text-[#5c5c5c]/60 mb-3">
                  {selectedFeatures.length}/5 selected
                </p>
                <div className="flex flex-wrap gap-2">
                  {SURVEY_FEATURES.map((feature) => {
                    const checked = selectedFeatures.includes(feature);
                    const disabled = !checked && selectedFeatures.length >= 5;
                    return (
                      <button
                        key={feature}
                        type="button"
                        disabled={disabled}
                        onClick={() => toggleFeature(feature)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          checked
                            ? "bg-[#E8725A] border-[#E8725A] text-white"
                            : disabled
                            ? "border-[#2D2D2D]/10 text-[#2D2D2D]/25 cursor-not-allowed"
                            : "border-[#2D2D2D]/20 text-[#5c5c5c] hover:border-[#E8725A]/50 hover:text-[#E8725A]"
                        }`}
                      >
                        {checked && <span className="mr-1">✓</span>}
                        {feature.split(" (")[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className={labelClass}>Monthly budget for a tool like this?</label>
                <select name="budget" required className={selectClass}>
                  <option value="">Select budget...</option>
                  <option>Free only</option>
                  <option>Under $50/mo</option>
                  <option>$50-100/mo</option>
                  <option>$100-200/mo</option>
                  <option>$200+/mo</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    Email <span className="text-[#E8725A]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@church.org"
                    className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30"
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Name <span className="text-[#5c5c5c]/30">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#E8725A] hover:bg-[#d4654f] disabled:opacity-50 text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
                >
                  {submitting ? "Submitting..." : "Share My Feedback"}
                  {!submitting && <ArrowRight className="w-5 h-5" />}
                </button>
                <p className="text-sm text-[#5c5c5c]/50 mt-4">
                  We&apos;ll never spam you. Unsubscribe anytime.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Closing Benediction */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 mx-auto mb-6">
            <svg viewBox="0 0 40 40" className="w-full h-full opacity-30">
              <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
              <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
              <polygon points="18,22 26,26 18,30" fill="#E8725A" />
            </svg>
          </div>
          <p className="text-[#5c5c5c] leading-relaxed italic">
            &ldquo;Now to him who is able to do immeasurably more than all we ask or imagine,
            according to his power that is at work within us — to him be glory in the church
            and in Christ Jesus throughout all generations, for ever and ever.&rdquo;
          </p>
          <p className="text-[#5c5c5c]/60 text-sm mt-3">Ephesians 3:20–21</p>
          <p className="text-[#5c5c5c]/80 text-sm mt-6">
            Thank you for helping us build something worthy of the message you carry.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2D2D2D]/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#5c5c5c]/50">
          © {new Date().getFullYear()} Sermon Clips. Built with love for the local church.
        </div>
      </footer>
    </div>
  );
}
