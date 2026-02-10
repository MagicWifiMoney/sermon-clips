'use client';

import { CheckCircle2, Upload, Wand2, Share2, Play, ArrowRight, Quote, ChevronDown, Sparkles, Clock, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              {/* Christian Cross */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Vertical beam - full height */}
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                {/* Horizontal beam - positioned higher */}
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                {/* Play triangle */}
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">FAQ</a>
          </div>

          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Try Free
          </button>
        </nav>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="pt-28 lg:pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#E8725A]" />
                <span className="text-sm text-[#2D2D2D]/70">Every message, multiplied.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-[1.1] tracking-tight mb-6">
                Turn sermons into
                <span className="relative">
                  <span className="relative z-10 text-[#E8725A]"> viral clips</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8725A]/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 50 0, 100 6 T 200 6" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-[#5c5c5c] leading-relaxed mb-8">
                We transform your weekly messages into scroll-stopping social content. Professional clips, ready to post—in 24 hours.
              </p>

              {/* CTA + Social Proof */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2 text-base">
                    Get Your First Clips Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    See Examples
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Avatar stack */}
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/20 border-2 border-[#F5F1EB] flex items-center justify-center">
                        <span className="text-xs font-medium text-[#2D2D2D]/60">{String.fromCharCode(64+i)}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-[#E8725A]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-[#5c5c5c]">Trusted by <span className="font-semibold text-[#2D2D2D]">500+</span> churches</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="relative">
              {/* Main video card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2D2D2D]/10 bg-[#2D2D2D] aspect-[9/16] max-w-[320px] mx-auto lg:ml-auto">
                {/* Video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]">
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#E8725A] flex items-center justify-center shadow-lg shadow-[#E8725A]/40 cursor-pointer hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Caption preview */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs">
                        Sample Clip
                      </div>
                      <p className="text-white text-lg font-medium leading-tight">
                        "God's grace isn't a reward—it's a gift."
                      </p>
                      <p className="text-white/60 text-sm">Pastor John • Grace Church</p>
                    </div>
                  </div>
                </div>

                {/* Phone frame details */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/50 rounded-full" />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-4 lg:-left-16 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A]/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#E8725A]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">312%</p>
                    <p className="text-xs text-[#5c5c5c]">Avg. engagement boost</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D2D2D]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">24hr</p>
                    <p className="text-xs text-[#5c5c5c]">Turnaround time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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
              Your pastor spends hours preparing life-changing messages. But without clips, they're forgotten by Tuesday.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "No Time", desc: "Your team is stretched thin. Who has 4 hours to edit videos?" },
              { icon: Wand2, title: "No Expertise", desc: "What makes a clip shareable? Timing, hooks, captions—it's a craft." },
              { icon: Share2, title: "Platform Chaos", desc: "TikTok wants vertical. YouTube wants landscape. It's exhausting." },
              { icon: Users, title: "Lost Reach", desc: "The algorithm doesn't care how good your sermon was. It wants clips." },
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
              We handle everything. You just share the content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: Upload,
                title: "Upload Your Sermon",
                desc: "Send us your video any way you like—YouTube link, Vimeo, Dropbox, Google Drive. We're flexible."
              },
              {
                num: "02",
                icon: Wand2,
                title: "We Find the Gold",
                desc: "Our team identifies the most impactful moments, adds captions, formats for each platform, and makes it scroll-stopping."
              },
              {
                num: "03",
                icon: Share2,
                title: "You Post & Grow",
                desc: "Receive 3-5 polished clips in 24-48 hours. Download and share—your message reaches further than ever."
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

      {/* Social Proof / Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Churches Served" },
              { num: "15,000+", label: "Clips Delivered" },
              { num: "312%", label: "Avg. Engagement Lift" },
              { num: "4.9★", label: "Customer Rating" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2">{stat.num}</p>
                <p className="text-sm text-[#5c5c5c]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              Churches love us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We went from 200 views per post to 3,000+. Our members are actually sharing clips now. It's changing how we reach our community.",
                name: "Pastor Mike",
                church: "Grace Community Church, Ohio",
              },
              {
                quote: "I used to spend 4 hours every Monday editing clips. Now I spend 10 minutes downloading and scheduling. Complete game-changer.",
                name: "Sarah T.",
                church: "Communications Director, New Life Church",
              },
              {
                quote: "The quality is consistent, the turnaround is fast, and they actually understand what makes a moment shareable. Highly recommend.",
                name: "David R.",
                church: "Executive Pastor, Cityview Church",
              },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-[#2D2D2D] leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/10" />
                  <div>
                    <p className="font-semibold text-[#2D2D2D]">{t.name}</p>
                    <p className="text-sm text-[#5c5c5c]">{t.church}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#2D2D2D] px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/20 text-[#E8725A] text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              No contracts. No surprises. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">Starter</h3>
              <p className="text-white/50 text-sm mb-6">For small churches</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["2 sermons/month", "3 clips per sermon", "Captions included", "2 formats", "48hr turnaround"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-medium">
                Start Free Trial
              </button>
            </div>

            {/* Growth - Featured */}
            <div className="p-8 rounded-3xl bg-[#E8725A] relative scale-105 shadow-2xl shadow-[#E8725A]/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#E8725A] text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Growth</h3>
              <p className="text-white/70 text-sm mb-6">For growing churches</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$59</span>
                <span className="text-white/70">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["4 sermons/month", "5 clips per sermon", "All 3 formats", "24hr turnaround", "Full branding", "Custom intro/outro", "Analytics dashboard"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-white text-[#E8725A] hover:bg-white/90 transition-colors font-bold">
                Start Free Trial
              </button>
            </div>

            {/* Ministry Pro */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">Ministry Pro</h3>
              <p className="text-white/50 text-sm mb-6">For multi-campus churches</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["Unlimited sermons", "7+ clips per sermon", "Same-day turnaround", "Quote graphics", "Audiograms", "Monthly strategy call", "Dedicated manager"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-medium">
                Contact Us
              </button>
            </div>
          </div>

          <p className="text-center text-white/50 mt-10">
            🎁 <span className="text-white">First sermon free</span> — no credit card required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              Questions? We've got answers.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "What format should I upload my sermon in?", a: "We accept MP4, MOV, YouTube links, Vimeo links, Dropbox, or Google Drive. If you can share it, we can clip it." },
              { q: "How do you choose which moments to clip?", a: "We use AI transcription combined with human review. Our team looks for emotionally resonant moments, clear teachable points, and quotable one-liners. You can also flag specific timestamps." },
              { q: "Can I request revisions?", a: "Absolutely. Every plan includes one round of revisions per clip. Need a different moment or caption style? Just let us know." },
              { q: "Do you post the clips for us?", a: "Our Pro plan includes social media scheduling integration. For other plans, we deliver clips ready to download. Posting can be added as an add-on." },
              { q: "Is there a contract?", a: "No contracts, ever. All plans are month-to-month. Cancel anytime. We also offer annual plans with a 20% discount." },
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
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Christian Cross */}
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            Every message, multiplied.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Your pastor's words are too powerful to stay on the shelf. Let's spread them further—together.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required. Results in 24 hours.</p>
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
                    {/* Christian Cross */}
                    <rect x="15" y="0" width="10" height="40" fill="white" />
                    <rect x="5" y="12" width="30" height="8" fill="white" />
                    <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                  </svg>
                </div>
                <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Clips</span></span>
              </div>
              <p className="text-sm">Every message, multiplied.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
    </div>
  );
}
