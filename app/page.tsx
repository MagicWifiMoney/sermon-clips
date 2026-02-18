'use client';

import { useState } from "react";
import {
  CheckCircle2, Upload, Wand2, Share2, Play, ArrowRight, ChevronDown,
  Sparkles, Clock, Brain, Film, Music, Palette,
  Languages, Youtube, Volume2, Type, Maximize2,
  Zap, Church, Users, Megaphone, Settings, Layers, Scissors,
  Timer, Mic, Video, LayoutGrid, CalendarClock, Sliders
} from "lucide-react";
import EmailCapturePopup from "@/components/EmailCapturePopup";

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

function SurveyForm() {
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
    };
    try {
      const res = await fetch("/api/survey", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-[#E8725A]/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#E8725A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">You&apos;re on the list!</h3>
        <p className="text-[#5c5c5c] max-w-md mx-auto">Thank you for your feedback. We&apos;ll notify you as soon as early access opens. Your input is shaping what we build.</p>
      </div>
    );
  }

  const selectClass = "w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors";
  const labelClass = "block text-sm font-medium text-[#2D2D2D] mb-2";

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
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
        <textarea name="painPoint" rows={3} className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30 resize-none" placeholder="Tell us what's holding you back..." />
      </div>

      <div>
        <label className={labelClass}>Pick your top 5 most important features</label>
        <p className="text-sm text-[#5c5c5c]/60 mb-3">{selectedFeatures.length}/5 selected</p>
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
                {checked && <span className="mr-1">✓</span>}{feature.split(" (")[0]}
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
          <label className={labelClass}>Email <span className="text-[#E8725A]">*</span></label>

          <input type="email" name="email" required placeholder="you@church.org" className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30" />
        </div>
        <div>
          <label className={labelClass}>Name <span className="text-white/30">(optional)</span></label>
          <input type="text" name="name" placeholder="Your name" className="w-full bg-white border border-[#2D2D2D]/15 rounded-xl px-4 py-3 text-[#2D2D2D] text-sm focus:outline-none focus:border-[#E8725A] transition-colors placeholder-[#2D2D2D]/30" />
        </div>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#E8725A] hover:bg-[#d4654f] disabled:opacity-50 text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
        >
          {submitting ? "Submitting..." : "Join Early Access"}
          {!submitting && <ArrowRight className="w-5 h-5" />}
        </button>
        <p className="text-sm text-[#5c5c5c]/50 mt-4">We&apos;ll never spam you. Unsubscribe anytime.</p>
      </div>
    </form>
  );
}

export default function Home() {
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

          <div className="hidden md:flex items-center gap-10">
            <a href="/for" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">For</a>
            <a href="/use-cases" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Early Access</a>
            <a href="/about" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">About</a>
            <a href="/mission" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Mission</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/sign-in" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors hidden md:inline">
              Sign In
            </a>
            <a href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
              Try Free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#E8725A]" />
                <span className="text-sm text-[#2D2D2D]/70">Your AI media team — ready in minutes</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-[1.1] tracking-tight mb-6">
                Turn sermons into
                <span className="relative">
                  <span className="relative z-10 text-[#E8725A]"> scroll-stopping clips</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8725A]/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 50 0, 100 6 T 200 6" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                <span className="text-[#5c5c5c] text-3xl sm:text-4xl lg:text-5xl font-medium">—no editor required</span>
              </h1>

              <p className="text-lg text-[#5c5c5c] leading-relaxed mb-8">
                Upload your sermon. AI finds the best moments, adds captions, B-roll, music, and formats for every platform. Download or auto-post — all in under 10 minutes.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2 text-base">
                    Try Free — No Card Required
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#how-it-works" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    See How It Works
                  </a>
                </div>

                <p className="text-sm text-[#5c5c5c]">First sermon free &bull; 5 clips included &bull; No credit card</p>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2D2D2D]/10 bg-[#2D2D2D] aspect-[9/16] max-w-[320px] mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#E8725A] flex items-center justify-center shadow-lg shadow-[#E8725A]/40 cursor-pointer hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs">
                        Sample Clip
                      </div>
                      <p className="text-white text-lg font-medium leading-tight">
                        &ldquo;God&apos;s grace isn&apos;t a reward—it&apos;s a gift.&rdquo;
                      </p>
                      <p className="text-white/60 text-sm">Pastor John &bull; Grace Church</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/50 rounded-full" />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-4 lg:-left-16 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A]/10 flex items-center justify-center">
                    <Languages className="w-5 h-5 text-[#E8725A]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">30+</p>
                    <p className="text-xs text-[#5c5c5c]">Languages supported</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D2D2D]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">&lt;10 min</p>
                    <p className="text-xs text-[#5c5c5c]">Processing time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#problem" className="flex flex-col items-center gap-2 text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">
            <span className="text-xs uppercase tracking-wider">Learn More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Great sermons deserve more than one Sunday
            </h2>
            <p className="text-lg text-white/60">
              Your pastor spends hours preparing life-changing messages. But without clips, they&apos;re forgotten by Tuesday.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "No Time", desc: "Who has 4 hours every Monday to edit clips? Your team is already stretched thin." },
              { icon: Wand2, title: "No Expertise", desc: "Captions, hooks, pacing—it's a craft your volunteers don't have time to learn." },
              { icon: Sparkles, title: "Algorithm Demands Clips", desc: "The algorithm doesn't care how good your sermon was. It wants short clips." },
              { icon: Share2, title: "Platform Chaos", desc: "TikTok wants vertical. YouTube wants landscape. Instagram wants square. It's exhausting." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8725A]/30 transition-colors">
                <item.icon className="w-8 h-8 text-[#E8725A] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Survey Section */}
      <section id="pricing" className="py-24 bg-[#F5F1EB] px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              Early Access
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Help us build the perfect tool for your church
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
              Tell us what matters most. Early access members get priority — plus a founding member discount.
            </p>
          </div>

          <SurveyForm />
        </div>
      </section>

      {/* AI Platform Overview */}
      <section className="py-24 px-6 lg:px-8 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              The Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              An entire media team — powered by AI
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-2xl mx-auto">
              Everything a full-time video editor, social media manager, and translator would do — automated, consistent, and ready in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-[#E8725A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Finds the Gold</h3>
              <ul className="space-y-3">
                {[
                  "Detects the most clip-worthy moments",
                  "Prompt-guided rough cut editing",
                  "Quick-pick chips to guide AI focus",
                  "Silence & filler word removal",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c5c5c]">
                    <Zap className="w-4 h-4 text-[#E8725A] mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                <Film className="w-7 h-7 text-[#E8725A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Produces the Clip</h3>
              <ul className="space-y-3">
                {[
                  "Dynamic captions with custom styles",
                  "AI B-roll from 30,000+ assets",
                  "Dynamic zoom & speaker tracking",
                  "Color correction & motion graphics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c5c5c]">
                    <Zap className="w-4 h-4 text-[#E8725A] mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                <Share2 className="w-7 h-7 text-[#E8725A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Distributes Everywhere</h3>
              <ul className="space-y-3">
                {[
                  "Auto-post to 6 platforms",
                  "Drip scheduling across days",
                  "Review or auto-publish modes",
                  "YouTube auto-trigger on upload",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c5c5c]">
                    <Zap className="w-4 h-4 text-[#E8725A] mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Three steps. Zero headaches.
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
              From sermon to social-ready clips — fully automated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: Upload,
                title: "Upload Your Sermon",
                desc: "Share via YouTube link, Dropbox, Google Drive, or direct upload. Or connect YouTube and clips generate automatically when you upload."
              },
              {
                num: "02",
                icon: Brain,
                title: "AI Processes Everything",
                desc: "The AI finds the best moments, adds captions, B-roll, music, and formats for every platform. Use prompts and quick-pick chips to guide what it looks for."
              },
              {
                num: "03",
                icon: Share2,
                title: "Download or Auto-Post",
                desc: "Review your clips and download, or turn on auto-publish to schedule across TikTok, Instagram, YouTube, Facebook, X, and LinkedIn."
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all hover:shadow-xl hover:shadow-[#E8725A]/5">
                  <span className="absolute -top-4 left-8 bg-[#F5F1EB] px-4 py-1 font-mono text-[#E8725A] text-sm font-bold">
                    {step.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-[#E8725A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{step.title}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-[#E8E4DC]">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "30+", label: "Languages Supported" },
              { num: "30,000+", label: "B-Roll Assets" },
              { num: "5", label: "Export Formats" },
              { num: "6", label: "Social Platforms" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2">{stat.num}</p>
                <p className="text-sm text-[#5c5c5c]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Who It's For */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Built for churches of every size
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
              Whether you&apos;re a church plant or a multi-campus ministry, there&apos;s a plan that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Church,
                title: "Small Churches",
                pain: "No media team? No budget for a video editor?",
                solution: "Upload your sermon and get polished clips in minutes. No expertise needed.",
                cta: "Join Early Access",
              },
              {
                icon: Users,
                title: "Growing Churches",
                pain: "Multiple services, multiple pastors, one overwhelmed comms person?",
                solution: "Dynamic zoom, color correction, branded intros, and 5 clips per sermon across 3 formats. Scale without hiring.",
                cta: "Join Early Access",
              },
              {
                icon: Megaphone,
                title: "Comms Directors",
                pain: "Need auto-posting, scheduling, and full automation?",
                solution: "Auto-Pilot handles everything — YouTube auto-trigger, drip scheduling, auto-posting to 6 platforms, and 10+ clips per sermon.",
                cta: "Join Early Access",
              },
            ].map((useCase, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-xl transition-all flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-[#E8725A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{useCase.title}</h3>
                <p className="text-[#5c5c5c] text-sm mb-3 italic">{useCase.pain}</p>
                <p className="text-[#5c5c5c] text-sm leading-relaxed mb-6 flex-1">{useCase.solution}</p>
                <a href="#pricing" className="text-[#E8725A] font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  {useCase.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Testimonials — replace with real testimonials when available */}
      {/*
      <section className="py-24 px-6 lg:px-8 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              Churches love us
            </h2>
          </div>
          <!-- Add real testimonials here -->
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              Questions? We&apos;ve got answers.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How does the AI choose which moments to clip?",
                a: "The AI analyzes your full sermon transcript for emotional peaks, quotable lines, clear teachable points, and audience reactions. You can also guide it with clip prompts and quick-pick chips — like 'find the most encouraging moment' or 'focus on the main illustration.'"
              },
              {
                q: "Do the clips look professional or AI-generated?",
                a: "They look professional. Dynamic captions, B-roll, color correction, background music, and branded intros all work together. Most viewers can't tell AI was involved — they just see polished, engaging content."
              },
              {
                q: "How fast is processing?",
                a: "Most sermons are fully processed in under 10 minutes. You'll get all your clips ready to review, download, or auto-post."
              },
              {
                q: "Can I reach my congregation in other languages?",
                a: "Yes! On the Auto-Pilot plan, AI dubbing and translation supports 30+ languages. You can also use AI voiceover with different voice selections for multilingual or global congregations."
              },
              {
                q: "Can it auto-post to our social media accounts?",
                a: "Yes, on the Auto-Pilot plan. Clips post directly to TikTok, Instagram, YouTube, Facebook, X, and LinkedIn. Use drip scheduling to space them across the week. Lower tiers let you review and download clips to post yourself."
              },
              {
                q: "What formats can I upload?",
                a: "YouTube links, Vimeo, MP4, MOV, Dropbox, Google Drive, or direct upload. Auto-Pilot subscribers can connect YouTube for automatic detection of new uploads."
              },
              {
                q: "Can I control what the AI does?",
                a: "Absolutely. Use clip prompts to guide moment selection, choose from color correction presets, set target duration and mood for rough cuts, and save processing templates to reuse your preferred settings every week."
              },
              {
                q: "Is there a contract?",
                a: "No contracts, ever. All plans are month-to-month. Cancel anytime with one click."
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{faq.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            Your message is too powerful to stay on the shelf.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            AI-powered editing. Professional results. Under 10 minutes.
          </p>

          <a href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Try Free — No Card Required
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-[#5c5c5c] mt-6">First sermon free &bull; 5 clips included &bull; No credit card</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <rect x="15" y="0" width="10" height="40" fill="white" />
                    <rect x="5" y="12" width="30" height="8" fill="white" />
                    <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                  </svg>
                </div>
                <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Clips</span></span>
              </div>
              <p className="text-sm">Your AI media team.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Early Access</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="mailto:hello@sermonclips.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm">
            <p>&copy; 2026 Sermon Clips. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>

      {/* Email Capture Popup */}
      <EmailCapturePopup />
    </div>
  );
}
