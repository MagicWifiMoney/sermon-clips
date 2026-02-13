'use client';

import { CheckCircle2, Clock, ArrowRight, Quote, Zap, TrendingUp, Users, Target, Heart } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Church Growth Through Social Media | Sermon Clips",
  description: "Turn your online presence into real church growth. Strategic sermon clips that reach seekers and bring new families through the door.",
  keywords: "church growth, social media strategy, church marketing, sermon marketing, grow your church"
};

export default function ChurchGrowthPage() {
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
            Turn your online presence into real church growth
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            You're posting, but are you growing? Strategic sermon clips reach seekers where they are—scrolling on their phones—and turn online engagement into Sunday morning guests.
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
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Posting But Not Growing</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Post event announcements: "Join us Sunday at 10am!"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Only current members engage (if that)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Reach: 200 people (all already attend your church)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Algorithm doesn't promote promotional content</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Zero new visitors from social media</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Attendance plateaus or declines</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]">Board asks: "Why aren't we growing online?"</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-red-600 font-bold text-lg">Result: Busy, not effective</p>
                  <p className="text-[#5c5c5c] text-sm mt-2">You're posting. But posting ≠ growth strategy.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-3xl border-2 border-[#E8725A] bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10">
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                With Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">Strategic Content That Converts</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Post sermon clips: real teaching, real value</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Clips reach seekers scrolling at 11pm on Tuesday</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Reach: 2,000-5,000+ (mostly NEW people in your area)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Algorithm promotes valuable content (not ads)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Comments: "Where is this church? Can I visit?"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">New visitors say: "I found you on Instagram"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]">Attendance grows 15-30% year over year</p>
                </div>
                <div className="pt-4 border-t border-[#E8725A]/30">
                  <p className="text-green-600 font-bold text-lg">Result: Measurable Kingdom growth</p>
                  <p className="text-[#2D2D2D] text-sm mt-2">Content that spreads the Gospel AND fills seats.</p>
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
            The growth strategy (not just content)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Value-First Content",
                desc: "We identify moments from your sermon that answer real questions seekers are asking. Not promotional. Not salesy. Just truth that resonates."
              },
              {
                num: "2",
                title: "Algorithm-Optimized",
                desc: "Short-form clips perform 10x better than event announcements. Captions, hooks, pacing—all optimized for social algorithms to amplify your reach."
              },
              {
                num: "3",
                title: "Consistent Presence",
                desc: "Posting 4-5x per week keeps your church top-of-mind. When someone's ready to visit, you're the church they already 'know' from social media."
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
            Real growth from real churches
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, stat: "+127", label: "New Families in 1 Year" },
              { icon: TrendingUp, stat: "450%", label: "Online Reach Increase" },
              { icon: Heart, stat: "82%", label: "Visitors Found Us on Social" }
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
                quote: "We were stuck at 180 people for 3 years. Started posting sermon clips consistently. Within 12 months we averaged 307. People specifically say 'I saw your pastor on Instagram and had to check it out.'",
                name: "Pastor Chris Anderson",
                church: "Roots Church, Nashville TN"
              },
              {
                quote: "82% of our first-time visitors in the past 6 months said they found us on social media. Not our website. Not Google. Social media. Sermon clips are the only thing we changed.",
                name: "Lauren Hayes",
                church: "City Hope Church, Charlotte NC"
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
                q: "How do sermon clips actually lead to church growth?",
                a: "Value-first content (teaching, not promotion) builds trust and familiarity. When seekers are ready to visit a church, they pick one they already 'know'—the one whose pastor they've been listening to on Instagram for 3 months."
              },
              {
                q: "What if our church is in a small town?",
                a: "Even better. Social media platforms geo-target content to people near you. Your clips will be shown to people in your zip code who engage with faith content. You're not competing with megachurches—you're reaching your neighbors."
              },
              {
                q: "How long before we see growth results?",
                a: "Most churches report first-time visitors mentioning social media within 4-6 weeks. Measurable attendance growth typically shows up in 3-6 months. Consistency is key—posting once won't do it."
              },
              {
                q: "Do you help us track which clips drive visitors?",
                a: "Yes. We provide analytics showing which clips perform best. You can also ask first-time visitors 'How did you hear about us?' and track responses. Many churches add a 'Found us on social media' option to their connect cards."
              },
              {
                q: "What if we're not trying to grow—just serve our current congregation?",
                a: "That works too! Sermon clips help your current members share faith with friends. 'Check out this clip from my pastor' is way easier than 'Want to come to church with me?' You're equipping your people for digital evangelism."
              },
              {
                q: "Can you help us with a launch strategy for big sermon series?",
                a: "Absolutely. For major series (Easter, Christmas, big topical series), we can create teaser content, design a posting calendar, and coordinate with your in-house promotion. Pro plan includes strategic planning."
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
            Turn scrollers into seekers into family
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Strategic sermon clips reach your community where they are. Start growing today.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • See the strategy in action</p>
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
