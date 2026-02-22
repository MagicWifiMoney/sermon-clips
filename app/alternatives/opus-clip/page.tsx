import { CheckCircle2, XCircle, ArrowRight, Zap, Church, Globe, Users, Clock, Star, Play } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Opus Clip Alternative for Churches | Sermon Clips",
  description: "Looking for an Opus Clip alternative built for churches? Sermon Clips auto-generates sermon highlights, adds captions, and publishes directly to your church's social channels — no editing skills needed.",
  keywords: "opus clip alternative, opus clip alternative for churches, church video clip maker, sermon clip software, ai sermon clips, church social media tool, opus pro alternative",
  openGraph: {
    title: "Sermon Clips — The Opus Clip Alternative Built for Churches",
    description: "Opus Clip is built for creators. Sermon Clips is built for churches. AI-powered sermon highlights, captions, and multi-platform publishing — starting free.",
    type: "website",
  },
};

const comparisonRows = [
  {
    feature: "Built for churches",
    us: true,
    them: false,
    note: "Sermon-specific clip detection, church publishing workflows",
  },
  {
    feature: "Auto-detect sermon highlights",
    us: true,
    them: false,
    note: "We understand sermon structure: intro, key points, altar call",
  },
  {
    feature: "Sermon transcript generation",
    us: true,
    them: false,
    note: "Full transcript → clips, captions, blog posts, study guides",
  },
  {
    feature: "Translation / multilingual captions",
    us: true,
    them: true,
    note: "We support 30+ languages, including right-to-left scripts",
  },
  {
    feature: "AI captions",
    us: true,
    them: true,
    note: "Both offer auto-captions; ours are tuned for spoken-word sermons",
  },
  {
    feature: "Vertical reframing (9:16)",
    us: true,
    them: true,
    note: "Auto-crop for Reels, TikTok, YouTube Shorts",
  },
  {
    feature: "B-roll overlay",
    us: true,
    them: true,
    note: "Add visuals over sermon footage",
  },
  {
    feature: "Publish to church social channels",
    us: true,
    them: false,
    note: "Direct publish to Instagram, TikTok, YouTube, Facebook",
  },
  {
    feature: "Free plan available",
    us: true,
    them: false,
    note: "Process 1 sermon free — no credit card required",
  },
  {
    feature: "Church-tier pricing",
    us: true,
    them: false,
    note: "Starter $29/mo — built for volunteer-run media teams",
  },
  {
    feature: "Podcast/creator workflow",
    us: false,
    them: true,
    note: "Opus Clip is purpose-built for podcasters and individual creators",
  },
];

const testimonials = [
  {
    quote: "We tried Opus Clip but it wasn't built for church content. The clip detection kept missing the key sermon moments. Sermon Clips actually understands what we're trying to highlight.",
    name: "Marcus T.",
    role: "Media Director, Crossroads Church",
  },
  {
    quote: "The pricing was a dealbreaker with Opus Clip for a small church like ours. Sermon Clips gives us everything we need for $29/month — and the clips actually look like they were edited by a pro.",
    name: "Diane R.",
    role: "Communications Volunteer, Grace Fellowship",
  },
  {
    quote: "Our Spanish-speaking members can now watch sermon clips with captions in their language. That alone made the switch worth it.",
    name: "Pastor James L.",
    role: "Lead Pastor, Vida Nueva Community Church",
  },
];

export default function OpusClipAlternativePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>
          <Link
            href="/#pricing"
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Try Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Church className="w-4 h-4" />
            Built specifically for churches
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            The Opus Clip alternative{" "}
            <span className="text-[#E8725A]">built for churches</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-2xl mx-auto">
            Opus Clip is built for podcasters and content creators. Sermon Clips is built for church media teams — with AI that understands sermon structure, church publishing workflows, and congregation-friendly pricing.
          </p>

          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Upload your sermon. Get 5 ready-to-post clips in minutes. Free to start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2"
            >
              Get 3 Free Clips
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#how-it-works"
              className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </Link>
          </div>

          <p className="text-sm text-[#5c5c5c] mt-4">
            No credit card required. Process your first sermon free.
          </p>
        </div>
      </section>

      {/* Why churches switch */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Why church media teams switch from Opus Clip
          </h2>
          <p className="text-center text-[#5c5c5c] text-lg mb-14 max-w-2xl mx-auto">
            Opus Clip is a great tool — for podcasters. Churches have different needs, different budgets, and different workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Church className="w-6 h-6 text-[#E8725A]" />,
                title: "Sermon-aware AI",
                body: "Opus Clip's clip detection is trained on podcasts and YouTube content. Our AI understands sermon structure — introductions, key teaching moments, illustrations, and altar calls. It finds the clips that matter to your congregation.",
              },
              {
                icon: <Users className="w-6 h-6 text-[#E8725A]" />,
                title: "Church-sized pricing",
                body: "Most church media teams are run by volunteers with tiny budgets. Opus Clip's pricing starts at $15/month for 150 mins — a single hour-long sermon blows past that. Sermon Clips starts at $29/month with no hard minute caps.",
              },
              {
                icon: <Globe className="w-6 h-6 text-[#E8725A]" />,
                title: "Multilingual from day one",
                body: "30% of US churches have non-English speaking members. We generate sermon transcripts and captions in 30+ languages automatically — including Spanish, Korean, Mandarin, and Portuguese. No extra setup required.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F5F1EB]">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Sermon Clips vs. Opus Clip
          </h2>
          <p className="text-center text-[#5c5c5c] mb-12">
            A direct comparison — no fluff.
          </p>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#2D2D2D]/10">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#2D2D2D] text-white p-4">
              <div className="text-sm font-medium">Feature</div>
              <div className="text-sm font-medium text-center">
                <span className="text-[#E8725A]">Sermon Clips</span>
                <span className="text-xs text-white/60 ml-1">(us)</span>
              </div>
              <div className="text-sm font-medium text-center text-white/70">Opus Clip</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 p-4 border-b border-[#2D2D2D]/8 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/50"
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-[#2D2D2D]">{row.feature}</p>
                  {row.note && (
                    <p className="text-xs text-[#5c5c5c] mt-0.5">{row.note}</p>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {row.us ? (
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#2D2D2D]/20" />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {row.them ? (
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2D]/60" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#2D2D2D]/20" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#5c5c5c] mt-4">
            Comparison based on published features as of February 2026. Opus Clip is a trademark of its respective owner.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            How Sermon Clips works
          </h2>
          <p className="text-center text-[#5c5c5c] mb-14 max-w-xl mx-auto">
            Three steps. No editing software. No design skills. No video production experience needed.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload your sermon",
                body: "Drop in your video file, YouTube link, or connect your church's media platform. We handle the rest.",
              },
              {
                step: "02",
                title: "AI finds your best moments",
                body: "Our AI transcribes the sermon, identifies key teaching moments, emotional peaks, and quotable lines — then generates 5–10 ready-to-post clips.",
              },
              {
                step: "03",
                title: "Publish everywhere",
                body: "Clips come with captions, reframed for vertical, and ready to post to Instagram Reels, TikTok, YouTube Shorts, and Facebook — all from one dashboard.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#E8725A]/10 text-[#E8725A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-14">
            What church media teams say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#2D2D2D]/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#E8725A] text-[#E8725A]" />
                  ))}
                </div>
                <p className="text-[#2D2D2D] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#2D2D2D]">{t.name}</p>
                  <p className="text-xs text-[#5c5c5c]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-12 h-12 text-[#E8725A] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start free. No credit card.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Process your first sermon free and see 3 clips. No commitment, no credit card, no upload limits during your trial.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { plan: "Free", price: "$0", desc: "1 sermon · 3 clips · Try it out" },
              { plan: "Starter", price: "$29/mo", desc: "4 sermons/mo · Unlimited clips" },
              { plan: "Growth", price: "$59/mo", desc: "12 sermons/mo · Multi-platform" },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${
                  i === 1
                    ? "border-[#E8725A] bg-[#E8725A]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                  {p.plan}
                </p>
                <p className="text-white font-bold text-2xl mb-1">{p.price}</p>
                <p className="text-white/60 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#pricing"
              className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is Sermon Clips really free?",
                a: "Yes — process your first full sermon for free and receive 3 clips. No credit card required. When you're ready to process more sermons, plans start at $29/month.",
              },
              {
                q: "How is Sermon Clips different from Opus Clip for churches?",
                a: "Opus Clip is excellent for podcasters and content creators, but its clip detection isn't trained on sermon content. Sermon Clips understands sermon structure — key teaching moments, illustrations, emotional peaks, altar calls. We also include features churches actually need: multilingual captions, transcript generation for blogs/study guides, and church-tier pricing.",
              },
              {
                q: "What video formats do you support?",
                a: "We accept MP4, MOV, AVI, and most common video formats. You can also paste a YouTube or Vimeo link directly. If your church streams to Facebook Live or YouTube, we can pull from there.",
              },
              {
                q: "Can I get captions in Spanish (or other languages)?",
                a: "Yes — we support 30+ languages for caption translation. Upload your English-language sermon and we'll generate captions in Spanish, French, Korean, Mandarin, Portuguese, and more.",
              },
              {
                q: "Do I need video editing experience?",
                a: "No. Sermon Clips is built for church media teams and volunteer communicators — not video editors. The AI does the work. You review, approve, and publish.",
              },
              {
                q: "How many clips do I get per sermon?",
                a: "Typically 5–10 clips per sermon, depending on length and plan. Each clip is 30–90 seconds, trimmed at natural breakpoints, reframed for vertical video, and captioned.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#2D2D2D]/10 pb-6">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F1EB] border-t border-[#2D2D2D]/10 py-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="text-sm text-[#5c5c5c]">
              © 2026 Sermon Clips. All rights reserved.
            </span>
          </Link>
          <div className="flex gap-6 text-sm text-[#5c5c5c]">
            <Link href="/blog" className="hover:text-[#2D2D2D] transition-colors">Blog</Link>
            <Link href="/#pricing" className="hover:text-[#2D2D2D] transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-[#2D2D2D] transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
