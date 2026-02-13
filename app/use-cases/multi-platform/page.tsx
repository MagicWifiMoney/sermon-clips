'use client';

import { CheckCircle2, Clock, ArrowRight, Quote, Zap, TrendingUp, Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Multi-Platform Distribution | Sermon Clips",
  description: "One sermon, every platform, every format. Stop manually reformatting clips for TikTok, Instagram, YouTube, and Facebook.",
  keywords: "multi-platform video, church social media, video formatting, TikTok, Instagram, YouTube"
};

export default function MultiPlatformPage() {
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
            <Zap className="w-4 h-4" />
            Use Case
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            One sermon, every platform, every format
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            TikTok wants vertical. YouTube wants landscape. Instagram wants square. Facebook wants... who even knows anymore. Stop reformatting the same clip five different ways.
          </p>

          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
            Get 3 Free Clips
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Before vs. After
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-3xl border-2 border-[#E8E4DC] bg-[#F5F1EB]">
              <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                Before Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">The Reformatting Nightmare</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Edit clip in 16:9 landscape for YouTube</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Re-export in 9:16 vertical for TikTok and Reels</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Re-export AGAIN in 1:1 square for Instagram feed</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Caption placement looks wrong in vertical... re-do it</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Wait 15 minutes for each export to render</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Manually upload to each platform separately</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Realize you forgot Facebook... start over</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-red-600 font-bold text-lg">Per clip: 90+ minutes</p>
                  <p className="text-[#5c5c5c] text-sm mt-2">And you need 3-5 clips per week. Do the math.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-3xl border-2 border-[#E8725A] bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10">
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                With Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Upload Once, Get Everything</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Upload your sermon once (YouTube link works)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">We edit clips + export in ALL formats automatically</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">16:9 landscape for YouTube</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">9:16 vertical for TikTok, Reels, Shorts</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">1:1 square for Instagram feed</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Captions perfectly positioned for each aspect ratio</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Download all formats or schedule directly to socials</p>
                </div>
                <div className="pt-4 border-t border-[#E8725A]/30">
                  <p className="text-green-600 font-bold text-lg">Your time: 5 minutes to approve</p>
                  <p className="text-[#2D2D2D] text-sm mt-2">Same clip, every format, zero reformatting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            How it works (stupidly simple)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Upload Once",
                desc: "One sermon. One upload. YouTube link, Vimeo, direct file—whatever you've got. That's it."
              },
              {
                num: "2",
                title: "We Handle All Formats",
                desc: "Our system automatically generates every aspect ratio: landscape, vertical, square. Captions, timing, framing—all optimized per platform."
              },
              {
                num: "3",
                title: "Download Everything",
                desc: "24 hours later, every clip in every format. Download individually or as a batch. Schedule to socials or upload manually. Your choice."
              }
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#E8725A] text-white text-2xl font-bold flex items-center justify-center mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{step.title}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Real results from real churches
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Clock, stat: "90min", label: "Saved Per Clip" },
              { icon: TrendingUp, stat: "5x", label: "More Platform Coverage" },
              { icon: Youtube, stat: "100%", label: "Format Consistency" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8725A]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#E8725A]" />
                </div>
                <p className="text-5xl font-bold text-white mb-2">{item.stat}</p>
                <p className="text-white/70">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We were only posting to Facebook because reformatting for TikTok and Instagram was too much work. Now we're on every platform, and our reach tripled. Same effort, 5x the coverage.",
                name: "Marcus Johnson",
                church: "City Light Church, Atlanta GA"
              },
              {
                quote: "I used to spend 2+ hours per clip just doing exports. Landscape, vertical, square... over and over. Now I click 'approve' and download a zip file with everything. It's unreal.",
                name: "Emily Chen",
                church: "Crossroads Church, Denver CO"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-white/90 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-white/10" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white/70">{t.church}</p>
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
            Common questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What aspect ratios do you support?",
                a: "Every clip comes in 16:9 landscape (YouTube, Facebook), 9:16 vertical (TikTok, Reels, Shorts), and 1:1 square (Instagram feed). If you need custom ratios, just ask."
              },
              {
                q: "Do captions look good in every format?",
                a: "Yes. We manually position captions for each aspect ratio so they're never cut off or awkwardly placed. Human-reviewed, not auto-generated garbage."
              },
              {
                q: "Can I choose which formats I want?",
                a: "Absolutely. If you only post to TikTok and YouTube, we can skip the square exports. Your choice—just tell us during setup."
              },
              {
                q: "How do I download all the formats?",
                a: "You get a zip file with all versions organized by platform. Or download individually. Or schedule directly to your socials via our integrations."
              },
              {
                q: "What if I want different clips for different platforms?",
                a: "We can do that too. For example: longer clips for YouTube, shorter punchy moments for TikTok. Just specify in your upload notes."
              },
              {
                q: "Do you optimize for each platform's algorithm?",
                a: "Yes. We know TikTok wants hook-first content, YouTube wants longer retention, Instagram wants visual variety. We tailor editing style per platform on request."
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

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Stop reformatting. Start reaching.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            One upload. Every platform. Every format. See how it works with your next sermon.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • All formats included</p>
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
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
        </div>
      </footer>

      <EmailCapturePopup />
    </div>
  );
}
