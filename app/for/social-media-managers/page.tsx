import { CheckCircle2, Heart, Sparkles, Repeat, ArrowRight, Quote, Clock, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "For Church Social Media Managers | Sermon Clips",
  description: "Stop the burnout. One sermon upload = clips for every platform. No more manual resizing, caption rewrites, or Sunday night scrambles.",
  keywords: "church social media, social media manager, church content, instagram reels, tiktok church, burnout prevention"
};

export default function SocialMediaManagersPage() {
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
          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            See Pricing
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            For Social Media Managers
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            One upload = clips for every platform
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            No more manual resizing. No more caption rewrites. No more Sunday night scrambles. Upload once, get perfect clips for Instagram, TikTok, Facebook, and YouTube—ready to schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
              Get 3 Free Clips
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/#how-it-works" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            We know the feeling...
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Every Sunday night I'm scrambling to get content ready for Monday. Weekly clips, captions, thumbnails, posting across Instagram, Facebook, TikTok, YouTube. I can feel the burnout creeping in.",
                pain: "The Sunday night scramble never ends"
              },
              {
                quote: "TikTok wants vertical. YouTube wants landscape. Instagram wants square AND vertical. I'm spending more time resizing than actually creating.",
                pain: "Platform chaos = 3x the work"
              },
              {
                quote: "How do I make content when there's nothing going on worth posting about? I need a consistent source of quality content and sermons are sitting right there.",
                pain: "Running out of ideas (while sermons sit unused)"
              },
              {
                quote: "I spend so much time creating content that I have no time left to actually engage with our community. I'm a content factory, not a community builder.",
                pain: "All creation, no engagement"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border-2 border-[#E8E4DC] hover:border-[#E8725A]/30 transition-colors bg-[#F5F1EB]">
                <Quote className="w-8 h-8 text-[#E8725A]/20 mb-4" />
                <p className="text-[#2D2D2D] leading-relaxed mb-4 italic">"{item.quote}"</p>
                <p className="text-sm text-[#E8725A] font-medium">→ {item.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Here's How We Fix It */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Here's your burnout prevention plan
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: Repeat,
                problem: "Manually resizing for 4+ platforms",
                solution: "Auto-formatted for every platform",
                details: "Upload once. Get vertical (9:16) for TikTok/Reels, square (1:1) for Instagram Feed, and horizontal (16:9) for YouTube. All with perfect framing and captions. Zero manual work."
              },
              {
                icon: Sparkles,
                problem: "Writing different captions for each platform",
                solution: "Platform-optimized captions included",
                details: "We don't just resize—we rewrite. TikTok gets trendy, casual captions. LinkedIn gets professional, thoughtful copy. Instagram gets emoji-rich engagement bait. All included."
              },
              {
                icon: Clock,
                problem: "Sunday scramble to get Monday content ready",
                solution: "24-hour turnaround, every week",
                details: "Submit your sermon Sunday night (or Monday morning). Get clips back by Monday evening. Schedule them for the week. Your Sunday nights are yours again."
              },
              {
                icon: TrendingUp,
                problem: "Not enough time to engage, just create",
                solution: "Reclaim 10+ hours/week for community",
                details: "Stop being a content factory. Spend 10 minutes scheduling our clips instead of 10 hours editing them. Use the time you save to reply to comments, build relationships, and actually grow your community."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#E8725A]" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-[#5c5c5c] line-through mb-1">{item.problem}</p>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{item.solution}</h3>
                  </div>
                  <p className="text-[#5c5c5c] leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            From managers who got their life back
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I was about to quit. Every week felt unsustainable. Now I spend 10 minutes scheduling clips instead of 10 hours editing them. I actually have time to engage with our community now. This literally saved my job.",
                name: "Emma Chen",
                role: "Social Media Manager",
                church: "Catalyst Church, Portland OR",
                size: "450 members"
              },
              {
                quote: "The platform-specific formatting is what sold me. I was spending 2 hours just resizing and repositioning for different aspect ratios. Now it's automatic. I can't believe I did that manually for two years.",
                name: "Marcus Johnson",
                role: "Digital Content Manager",
                church: "Renewal Church, Atlanta GA",
                size: "780 members"
              },
              {
                quote: "Our engagement went up 340% in the first month. Not because the clips are magic, but because I finally had TIME to post consistently, reply to comments, and build relationships. Burnout prevention is growth strategy.",
                name: "Alicia Rodriguez",
                role: "Social Media Coordinator",
                church: "Harbor Church, Miami FL",
                size: "320 members"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-white/90 leading-relaxed mb-6 text-lg">"{t.quote}"</p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/10 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white/70">{t.role}</p>
                    <p className="text-sm text-white/50">{t.church} • {t.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Questions we hear from social managers
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do you actually write different captions for each platform?",
                a: "Yes! TikTok gets casual, trend-aligned captions. Instagram gets emoji-rich engagement hooks. LinkedIn gets professional, thoughtful copy. YouTube gets SEO-optimized descriptions. All automatically."
              },
              {
                q: "Can I use these clips with my scheduling tool (Later, Hootsuite, Buffer)?",
                a: "Absolutely. We deliver clips as downloadable files. Import them into whatever scheduler you use. Or upgrade to our Pro plan and we'll handle scheduling too."
              },
              {
                q: "What if I need to post something time-sensitive (breaking news, event change)?",
                a: "Rush delivery available on Pro plan (same-day turnaround). For urgent needs, you can always flag specific timestamps and we'll prioritize those clips first."
              },
              {
                q: "Do I get to approve before anything goes live?",
                a: "Always. We send you a review link. You can approve with one click or request edits. We NEVER auto-post without your explicit approval (unless you enable it on Pro plan)."
              },
              {
                q: "What makes your captions better than AI tools I could use myself?",
                a: "We combine AI with human review. AI generates platform-specific captions, then our team edits for authenticity, theological accuracy, and engagement. You get speed + quality, not just speed."
              },
              {
                q: "How do I convince my pastor to invest in this?",
                a: "Show them your schedule. Ask: 'How can I keep this up without burning out?' Then show them our pricing (cheaper than losing you to burnout). Your first sermon is free—prove the ROI before asking for budget."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{faq.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Heart, stat: "10hrs", label: "Saved Per Week" },
              { icon: Repeat, stat: "4+", label: "Platforms Covered" },
              { icon: Shield, stat: "100%", label: "Approval Control" },
              { icon: CheckCircle2, stat: "340%", label: "Avg Engagement Lift" }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#E8725A]" />
                </div>
                <p className="text-4xl font-bold text-[#2D2D2D] mb-2">{item.stat}</p>
                <p className="text-sm text-[#5c5c5c]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Prevent burnout. Multiply impact.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Upload your next sermon. Get clips for every platform in 24 hours. Reclaim your Sunday nights.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • Results in 24 hours • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="white" />
                <rect x="5" y="12" width="30" height="8" fill="white" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Clips</span></span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/for" className="hover:text-white transition-colors">Who It's For</Link>
          </div>
          <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
        </div>
      </footer>

      <EmailCapturePopup />
    </div>
  );
}
