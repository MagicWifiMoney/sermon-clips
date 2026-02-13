

import { CheckCircle2, Clock, ArrowRight, Quote, Zap, TrendingUp, MessageSquare, Volume2 } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Perfect Captions & Subtitles | Sermon Clips",
  description: "Stop spending hours manually captioning sermon clips. Get perfect, human-reviewed captions on every video automatically.",
  keywords: "video captions, sermon subtitles, auto captions, church video editing, caption editing"
};

export default function CaptionsAndSubtitlesPage() {
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
            Perfect captions without tedious editing
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            Manual captioning takes forever. Auto-captions are trash—wrong words, awkward line breaks, cut-off text. You need captions that actually work. We deliver them.
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
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">The Caption Nightmare</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>Option 1:</strong> Use auto-captions and cringe</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">"Good mourning" instead of "Good morning"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">"Jesus" transcribed as "cheeses"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Line breaks mid-word, cut-off text, total mess</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>Option 2:</strong> Fix every caption manually</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Scrub through video, timestamp by timestamp</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Adjust line breaks, fix typos, reposition text</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-red-600 font-bold text-lg">Per clip: 45-60 minutes</p>
                  <p className="text-[#5c5c5c] text-sm mt-2">Or you post with typos and look unprofessional.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-3xl border-2 border-[#E8725A] bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10">
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                With Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Perfect Captions, Zero Effort</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">AI generates captions from your sermon audio</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Human editor reviews and corrects every word</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Biblical terms spelled correctly (always)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Line breaks placed intelligently (not mid-word)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Text positioned perfectly for each aspect ratio</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Brand colors and fonts applied (on Growth/Pro plans)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Delivered with every clip, no extra charge</p>
                </div>
                <div className="pt-4 border-t border-[#E8725A]/30">
                  <p className="text-green-600 font-bold text-lg">Your time: 0 minutes</p>
                  <p className="text-[#2D2D2D] text-sm mt-2">Captions just work. Every clip. Every time.</p>
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
            How we make captions perfect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "AI Transcription",
                desc: "Advanced speech-to-text captures every word from your sermon. It's fast and 95% accurate—but not perfect yet."
              },
              {
                num: "2",
                title: "Human Review",
                desc: "Our editors fix every mistake: biblical terms, names, line breaks, punctuation. They know the difference between 'altar' and 'alter.'"
              },
              {
                num: "3",
                title: "Style & Placement",
                desc: "Captions styled to match your brand (or our clean defaults). Positioned perfectly for each platform. Never cut off, never awkward."
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
            Why captions matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Volume2, stat: "85%", label: "Watch Videos Muted" },
              { icon: TrendingUp, stat: "40%", label: "Higher Engagement" },
              { icon: MessageSquare, stat: "100%", label: "Accuracy Guaranteed" }
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
                quote: "We used to skip captions because it took too long. Engagement was terrible. Now every clip has perfect captions, and watch time is up 60%. People actually finish the videos now.",
                name: "Rachel Thompson",
                church: "Harvest Church, Portland OR"
              },
              {
                quote: "Auto-captions kept misspelling 'Corinthians' and 'Deuteronomy.' It was embarrassing. Now captions are flawless every time. Our people notice and appreciate the quality.",
                name: "Pastor Tom Wilson",
                church: "First Baptist, Memphis TN"
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
                q: "Are captions included or an add-on?",
                a: "Included. Every clip comes with professionally edited captions at no extra charge. It's part of the service."
              },
              {
                q: "Can I customize caption style (colors, fonts, position)?",
                a: "Yes, on Growth and Pro plans. We apply your brand colors, fonts, and preferred positioning. On Starter, you get our clean default style."
              },
              {
                q: "What if the transcription gets something wrong?",
                a: "Our human editors catch and fix errors before delivery. But if something slips through, just flag it and we'll correct it same-day."
              },
              {
                q: "Do you handle biblical terms and church-specific language?",
                a: "Absolutely. Our editors know the difference between 'altar' and 'alter,' 'pray' and 'prey,' 'holy' and 'wholly.' Biblical names, books, and theological terms are always correct."
              },
              {
                q: "Can I get caption files (SRT) for my own editing?",
                a: "Yes. We can provide SRT or VTT files on request so you can use captions in your own video editor or upload separately to platforms."
              },
              {
                q: "Do captions work in multiple languages?",
                a: "Currently we support English. If you preach in Spanish, Portuguese, or other languages, contact us—we're building multi-language support."
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
            Never worry about captions again
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Perfect captions. Every clip. Every time. See the quality yourself.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • Captions included</p>
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
