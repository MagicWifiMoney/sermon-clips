

import { CheckCircle2, Clock, ArrowRight, Quote, Zap, TrendingUp, Youtube, Calendar, Play } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "YouTube Automation for Churches | Sermon Clips",
  description: "Connect your YouTube channel and we handle the rest. Automatic sermon clipping, uploads, and scheduling—zero-touch workflow.",
  keywords: "youtube automation, church youtube, sermon uploads, youtube clips, automatic video posting"
};

export default function YouTubeAutomationPage() {
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
            Connect YouTube, we handle the rest
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop remembering to upload and clip every week. Connect your YouTube channel once. We auto-detect new sermons, create clips, and publish them back to your channel. Zero-touch workflow.
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
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">The Manual Upload Grind</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Download full sermon from Sunday</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Watch the whole thing to find clip-worthy moments</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Edit clips, add captions, export</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Log into YouTube, upload clip 1</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Wait for upload... write description... add tags...</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Repeat for clips 2, 3, 4...</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Forget to do it one week... then two... then give up</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-red-600 font-bold text-lg">Result: Inconsistent uploads</p>
                  <p className="text-[#5c5c5c] text-sm mt-2">Your YouTube channel looks abandoned. Subscribers stop checking.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-3xl border-2 border-[#E8725A] bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10">
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                With Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Set It and Forget It</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>One-time:</strong> Connect your YouTube channel</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">We auto-detect when new sermon is uploaded</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">AI + human team finds best moments and creates clips</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Clips sent to you for review (or auto-published if you prefer)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Approve with one click</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">We publish back to your YouTube channel (Shorts + regular)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Happens every week, automatically, forever</p>
                </div>
                <div className="pt-4 border-t border-[#E8725A]/30">
                  <p className="text-green-600 font-bold text-lg">Result: Consistent, automated growth</p>
                  <p className="text-[#2D2D2D] text-sm mt-2">Your channel stays active. Subscribers stick around. New viewers discover you.</p>
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
            How automation works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Connect Your Channel",
                desc: "One-click OAuth connection. We get permission to monitor for new uploads and publish clips back. Takes 60 seconds."
              },
              {
                num: "2",
                title: "We Monitor & Process",
                desc: "When you upload a new sermon, we're notified automatically. Our system pulls it, finds best moments, creates clips—all in 24 hours."
              },
              {
                num: "3",
                title: "Review & Auto-Publish",
                desc: "You get email when clips are ready. Review and approve (or set auto-approve). We publish to your channel as YouTube Shorts + regular videos. Done."
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
            Real results from automated channels
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Youtube, stat: "52x", label: "More Videos Per Year" },
              { icon: TrendingUp, stat: "340%", label: "Subscriber Growth" },
              { icon: Calendar, stat: "100%", label: "Posting Consistency" }
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
                quote: "We went from uploading 1 sermon per week (52 videos/year) to uploading 1 sermon + 4 clips per week (260 videos/year). Our channel exploded. Subscribers up 340% in 6 months.",
                name: "Pastor Jason Miller",
                church: "The Crossing Church, Tampa FL"
              },
              {
                quote: "I used to manually upload clips... when I remembered. Maybe twice a month. Now it happens automatically every single week. YouTube's algorithm loves the consistency. Our reach tripled.",
                name: "Amanda Rodriguez",
                church: "Mosaic Church, San Diego CA"
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
                q: "Is this safe? Will you have full control of my channel?",
                a: "We request minimal permissions via YouTube's official OAuth system: permission to read new uploads and publish videos. We can't delete videos, change settings, or access analytics. You remain the owner and can revoke access anytime."
              },
              {
                q: "Do I have to approve clips before they're published?",
                a: "Your choice. Default is manual approval—you get email when clips are ready, review, then approve. On Pro plan, you can enable auto-publish if you trust us to post without review."
              },
              {
                q: "What if I don't upload sermons to YouTube?",
                a: "No problem. You can manually upload sermon links (Vimeo, Dropbox, etc.) and we'll create clips. But if you DO use YouTube, automation makes it even easier."
              },
              {
                q: "Can you publish to YouTube Shorts AND regular videos?",
                a: "Yes. We can publish the same clip as both a Short (vertical, under 60 sec) and a regular video (landscape, any length). Double the reach, zero extra work."
              },
              {
                q: "What if I want to customize titles and descriptions?",
                a: "We auto-generate titles and descriptions based on sermon content. You can customize during review, or set templates for us to follow (e.g., always include your church name, specific hashtags, etc.)."
              },
              {
                q: "Can I pause automation when I'm on vacation?",
                a: "Absolutely. You can pause automation anytime from your dashboard. When you're ready to resume, flip it back on. No sermons processed while paused."
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
            Let your YouTube channel run itself
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Connect once. Clips auto-publish forever. Consistent growth on autopilot.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • YouTube automation on Pro plan</p>
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
