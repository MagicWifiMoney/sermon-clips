import { CheckCircle2, Clock, Users, Zap, ArrowRight, Quote, MessageSquare, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "For Church Communications Directors | Sermon Clips",
  description: "Stop spending 4 hours every Monday editing clips. Get professional sermon clips in 24 hours — so you can focus on strategy, not software.",
  keywords: "church communications, sermon clips, church social media, communications director, church media"
};

export default function CommunicationsDirectorsPage() {
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
            <Users className="w-4 h-4" />
            For Communications Directors
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Stop spending 4 hours every Monday editing clips
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            You manage live streams, recordings, uploads, social media, announcements, volunteers—and somehow you're supposed to find time to edit sermon clips too. We get it. Let us handle the clips.
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
            Sound familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "I'm responsible for the live stream, recording uploads, managing volunteers, posting announcements, and creating social content. How can I possibly keep this schedule up without it controlling my life?",
                pain: "Overwhelming scope — you're expected to do everything"
              },
              {
                quote: "Every Monday I spend 1.5-2 hours editing clips. Then I have to resize them for TikTok, Instagram, Facebook, and YouTube. By the time I'm done it's Tuesday afternoon.",
                pain: "Manual editing eats your entire Monday (and Tuesday)"
              },
              {
                quote: "I edit in one program. Then hop over to another to design graphics. Then log into three different social accounts to post everything. It's exhausting just thinking about it.",
                pain: "Fragmented workflow across 5+ tools"
              },
              {
                quote: "I can't even ask for new tools because it looks like we're failing to use what we already have. But the truth is, I'm drowning and need help.",
                pain: "Can't justify investment when overwhelmed"
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
            Here's how we fix it
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: Clock,
                problem: "No time for 4-hour editing sessions",
                solution: "Upload once, get clips in 24 hours",
                details: "You send us your sermon (YouTube link, Vimeo, Dropbox—whatever's easiest). We identify the best moments, add captions, format for every platform, and deliver 3-5 polished clips ready to post. Your Monday is yours again."
              },
              {
                icon: Zap,
                problem: "Managing 5+ tools for one workflow",
                solution: "One platform. All your content.",
                details: "No more jumping between video editor, graphic designer, scheduling tool, and social platforms. We deliver everything in one place: clips, captions, thumbnails—ready to download or schedule."
              },
              {
                icon: Users,
                problem: "Training volunteers with inconsistent skills",
                solution: "Professional quality, every single week",
                details: "Your output quality no longer depends on which volunteer showed up. Our team (AI + human review) ensures every clip meets broadcast standards. Consistent branding. Perfect captions. Every time."
              },
              {
                icon: TrendingUp,
                problem: "Hard to prove ROI when buried in busywork",
                solution: "Analytics that show your impact",
                details: "Stop guessing. We track which clips perform best, optimal posting times, and engagement trends. You can finally show leadership that your work is driving real results."
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
            From directors like you
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I went from spending my entire Monday editing to spending 10 minutes downloading clips. I didn't realize how burned out I was until I got my time back. This tool saved my sanity.",
                name: "Sarah Martinez",
                role: "Communications Director",
                church: "New Hope Church, Austin TX",
                size: "850 members"
              },
              {
                quote: "The consistency is what shocked me. Every week, broadcast-quality clips. I'm not scrambling because a volunteer didn't show up. It just works, and our engagement is up 240%.",
                name: "David Kim",
                role: "Director of Communications",
                church: "Grace Point Church, Seattle WA",
                size: "1,200 members"
              },
              {
                quote: "I can finally focus on strategy instead of scrambling to keep up. I use the time I save to actually engage with our community online. My pastor noticed the difference immediately.",
                name: "Jessica Reynolds",
                role: "Communications Manager",
                church: "Cornerstone Community, Nashville TN",
                size: "600 members"
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
            Questions we hear from directors
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I upload from YouTube or do I need to send files?",
                a: "Both! We accept YouTube links, Vimeo links, Dropbox, Google Drive, or direct file uploads. Whatever's easiest for your workflow."
              },
              {
                q: "What if I need changes to a clip?",
                a: "Every plan includes one round of revisions per clip. Just let us know what needs adjusting (different timestamp, caption edit, etc.) and we'll fix it same-day."
              },
              {
                q: "Do you handle our branding (logo, colors, fonts)?",
                a: "Yes. On Growth and Pro plans, we apply your church's logo, colors, and fonts to every clip. You send us your brand assets once during onboarding, and we handle the rest."
              },
              {
                q: "Can I approve clips before they're posted?",
                a: "Absolutely. We send you a review link when clips are ready. You can approve with one click or request changes. We never post without your permission."
              },
              {
                q: "What if our volunteer quits or we lose our editor?",
                a: "That's exactly why churches switch to us. Your output quality doesn't depend on finding and training new volunteers. We're your consistent, reliable team every single week."
              },
              {
                q: "How do I show my pastor this is worth the investment?",
                a: "We provide analytics showing engagement lift, reach expansion, and time saved. Most churches see 200-400% engagement increases in the first month. Plus, your first sermon is free—prove the ROI before spending a dollar."
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
              { icon: Users, stat: "500+", label: "Churches Trust Us" },
              { icon: Clock, stat: "24hr", label: "Turnaround Time" },
              { icon: Shield, stat: "100%", label: "Human-Reviewed" },
              { icon: CheckCircle2, stat: "4.9★", label: "Average Rating" }
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
            Get your Mondays back
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Upload your next sermon. We'll deliver 3 professional clips in 24 hours. No credit card required.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">Used by directors at churches from 100 to 10,000 members</p>
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
