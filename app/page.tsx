'use client';

import {
  CheckCircle2, Upload, Wand2, Share2, Play, ArrowRight, Quote, ChevronDown,
  Sparkles, Clock, Users, TrendingUp, Brain, Film, Music, Eye, Palette,
  GitBranch, Languages, Youtube, BarChart3, Volume2, Type, Maximize2,
  Zap, Shield, Church, Megaphone, X
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
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
            <a href="#features" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">FAQ</a>
          </div>

          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Try Free
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#E8725A]" />
                <span className="text-sm text-[#2D2D2D]/70">Powered by AI. Perfected by humans.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-[1.1] tracking-tight mb-6">
                Turn sermons into
                <span className="relative">
                  <span className="relative z-10 text-[#E8725A]"> viral clips</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8725A]/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 50 0, 100 6 T 200 6" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                <span className="text-[#5c5c5c] text-3xl sm:text-4xl lg:text-5xl font-medium">—in minutes, not hours</span>
              </h1>

              <p className="text-lg text-[#5c5c5c] leading-relaxed mb-8">
                Upload your sermon once. Our AI finds the most shareable moments, adds captions, formats for every platform, and delivers 5–10 polished clips in 24 hours. Human-reviewed. Ready to post.
              </p>

              {/* CTA + Social Proof */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2 text-base">
                    Get Your First 5 Clips Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a href="#how-it-works" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    See How It Works
                  </a>
                </div>

                <div className="flex items-center gap-4">
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
              Your pastor spends hours preparing life-changing messages. But without clips, they&apos;re forgotten by Tuesday.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "No Time", desc: "Who has 4 hours every Monday to edit clips? Your team is already stretched thin." },
              { icon: Wand2, title: "No Expertise", desc: "Captions, hooks, pacing—it's a craft your volunteers don't have time to learn." },
              { icon: TrendingUp, title: "Algorithm Demands Clips", desc: "The algorithm doesn't care how good your sermon was. It wants short clips." },
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

      {/* AI + Human Solution Overview — NEW */}
      <section className="py-24 px-6 lg:px-8 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              AI speed. Human quality. The best of both worlds.
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-2xl mx-auto">
              We built on top of Mosaic&apos;s agentic video editing platform so your church gets Hollywood-grade AI with a human eye for what actually resonates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* What AI Does */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-[#E8725A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What AI Does</h3>
              <ul className="space-y-3">
                {[
                  "Transcribes your full sermon in seconds",
                  "Detects the most clip-worthy moments",
                  "Generates word-perfect captions",
                  "Formats for every platform automatically",
                  "Adds B-roll from 30,000+ assets",
                  "Composes background music to match mood",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c5c5c]">
                    <Zap className="w-4 h-4 text-[#E8725A] mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Humans Do */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#2D2D2D]/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#2D2D2D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What Humans Do</h3>
              <ul className="space-y-3">
                {[
                  "Curate the moments that actually resonate",
                  "Ensure your brand voice stays consistent",
                  "Add theological context AI can't grasp",
                  "Quality-check every clip before delivery",
                  "Fine-tune hooks and pacing for engagement",
                  "Handle revisions and special requests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5c5c5c]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D2D2D] mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Grid — NEW */}
      <section id="features" className="py-24 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/20 text-[#E8725A] text-sm font-medium mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything your media team wishes they had
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Powered by Mosaic&apos;s agentic video AI — the same technology used by professional studios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Moment Detection",
                desc: "AI watches your entire sermon and flags the most clip-worthy moments — emotional peaks, quotable lines, and key takeaways."
              },
              {
                icon: Type,
                title: "Dynamic Captions",
                desc: "Word-perfect captions with emoji support, styled to match the energy of each moment. Powered by Deepgram transcription."
              },
              {
                icon: Maximize2,
                title: "Multi-Format Export",
                desc: "One upload — vertical, landscape, and square clips. Smart reframing keeps the speaker centered on every platform."
              },
              {
                icon: Film,
                title: "AI B-Roll",
                desc: "Automatically add visuals that match your dialogue from 30,000+ stock assets. No more static talking heads."
              },
              {
                icon: Music,
                title: "Custom Soundtracks",
                desc: "AI-composed background music that fits your video's mood — from reverent to uplifting. No licensing headaches."
              },
              {
                icon: Volume2,
                title: "Crystal Clear Audio",
                desc: "AI noise removal makes even phone recordings and gym-turned-sanctuary audio sound studio-quality."
              },
              {
                icon: Eye,
                title: "AI Eye Contact",
                desc: "Corrects gaze so your pastor looks directly at viewers — even if they were reading notes during the sermon."
              },
              {
                icon: Palette,
                title: "Branded Intro/Outro",
                desc: "Auto-generated intros and outros with your church logo, colors, and social handles. Consistent branding on every clip."
              },
              {
                icon: GitBranch,
                title: "Hook Testing",
                desc: "Generate multiple versions of the same clip with different hooks and openings. See what performs best."
              },
              {
                icon: Languages,
                title: "30+ Languages",
                desc: "AI voice cloning and dubbing to reach your global congregation in their native language."
              },
              {
                icon: Youtube,
                title: "YouTube Auto-Trigger",
                desc: "Connect your YouTube channel and we auto-detect new sermon uploads. Zero manual work."
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                desc: "Track views, engagement, and growth across every platform. Know exactly what&apos;s resonating."
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8725A]/30 transition-all hover:bg-white/[0.07] group">
                <feature.icon className="w-8 h-8 text-[#E8725A] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
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
              From sermon to social-ready clips — fully automated, human-reviewed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: Upload,
                title: "Upload Your Sermon",
                desc: "Share via YouTube link, Dropbox, Google Drive, or direct upload. Or connect YouTube and we auto-detect new sermons."
              },
              {
                num: "02",
                icon: Brain,
                title: "AI + Humans Find the Gold",
                desc: "Our Curator Agent analyzes your entire message, identifies shareable moments, adds captions, formats for every platform, and adds B-roll and music. Then our team reviews every clip for quality."
              },
              {
                num: "03",
                icon: Share2,
                title: "Download & Post (or We Post for You)",
                desc: "Get 5–10 polished clips in 24 hours. Post yourself or upgrade to Auto-Pilot for automatic scheduling across all platforms."
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
              { num: "500+", label: "Churches Served" },
              { num: "15,000+", label: "AI-Edited Clips" },
              { num: "312%", label: "Avg. Engagement Lift" },
              { num: "30+", label: "Languages Supported" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-2">{stat.num}</p>
                <p className="text-sm text-[#5c5c5c]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Who It's For — NEW */}
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
              Whether you&apos;re a church plant or a multi-campus ministry, we&apos;ve got a plan that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Church,
                title: "Small Churches",
                pain: "No media team? No budget for a video editor?",
                solution: "Upload your sermon and get polished clips back in 24 hours. No expertise needed. Starting at $29/mo.",
                cta: "See Starter Plan",
              },
              {
                icon: Users,
                title: "Growing Churches",
                pain: "Multiple services, multiple pastors, one overwhelmed comms person?",
                solution: "Custom branding, 10 clips per sermon, AI B-roll, eye contact fix, and 24-hour turnaround. Scale without hiring.",
                cta: "See Growth Plan",
              },
              {
                icon: Megaphone,
                title: "Comms Directors",
                pain: "Need auto-posting, analytics, A/B testing, and a strategy partner?",
                solution: "Auto-Pilot handles everything — YouTube auto-trigger, scheduled posting, performance analytics, and monthly strategy calls.",
                cta: "See Auto-Pilot Plan",
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

      {/* Testimonials */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I used to spend 4 hours every Monday editing clips. Now I upload the sermon and have 10 polished clips by Tuesday morning. The AI picks moments I wouldn't have thought to clip — and they perform the best.",
                name: "Pastor Mike",
                church: "Grace Community Church, Ohio",
              },
              {
                quote: "I was skeptical about AI touching our pastor's message. But honestly? The clips don't feel robotic at all. The human review team gets our voice. It's like having a media team without the salary.",
                name: "Sarah T.",
                church: "Communications Director, New Life Church",
              },
              {
                quote: "The multi-format export alone is worth it. One upload and we get vertical for TikTok, landscape for YouTube, and square for Instagram — all with captions and B-roll. Game changer for a two-person comms team.",
                name: "David R.",
                church: "Executive Pastor, Cityview Church",
              },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-[#2D2D2D] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
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
                {[
                  "4 sermons/month",
                  "5 clips per sermon",
                  "Captions included",
                  "3 formats (vertical, landscape, square)",
                  "AI B-Roll",
                  "48hr turnaround",
                ].map((item, i) => (
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
                {[
                  "8 sermons/month",
                  "10 clips per sermon",
                  "All 3 formats",
                  "24hr turnaround",
                  "Custom branding",
                  "Intro/Outro",
                  "Background music",
                  "AI Eye contact fix",
                ].map((item, i) => (
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

            {/* Auto-Pilot */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">Auto-Pilot</h3>
              <p className="text-white/50 text-sm mb-6">Full automation</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$149</span>
                <span className="text-white/50">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited sermons",
                  "10+ clips per sermon",
                  "4hr express turnaround",
                  "YouTube auto-trigger",
                  "Auto-posting to all platforms",
                  "A/B hook testing",
                  "Analytics dashboard",
                  "Monthly strategy call",
                ].map((item, i) => (
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
          </div>

          {/* Add-ons */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/70 text-sm text-center">
                <span className="text-white font-semibold">Add-ons:</span>{" "}
                Voice Cloning &amp; Dubbing (+$99/mo) &bull; Multi-Campus (+$100/mo per campus) &bull; Dedicated Account Manager (+$200/mo)
              </p>
            </div>
          </div>

          <p className="text-center text-white/50 mt-10">
            First 5 clips free — no credit card required
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
              Questions? We&apos;ve got answers.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is this 100% AI or do humans actually review the clips?",
                a: "Both. AI handles the heavy lifting — transcription, moment detection, captions, formatting, B-roll, and music. But every clip is reviewed by a human editor before delivery. AI for speed, humans for soul."
              },
              {
                q: "Do the clips feel robotic or AI-generated?",
                a: "No — that's the whole point of human review. Our editors ensure every clip feels natural, has the right pacing, and captures the emotional weight of the moment. Most churches can't tell AI was involved."
              },
              {
                q: "How do you choose which moments to clip?",
                a: "Our Curator Agent analyzes the full transcript for emotional peaks, quotable lines, clear teachable points, and audience reactions. Then a human editor reviews and curates the final selection. You can also flag specific timestamps."
              },
              {
                q: "Can you reach my congregation in other languages?",
                a: "Yes! Our Voice Cloning & Dubbing add-on supports 30+ languages. The AI clones your pastor's voice and delivers natural-sounding translations — perfect for multilingual or global congregations."
              },
              {
                q: "Can you auto-post to our social media accounts?",
                a: "Yes, on the Auto-Pilot plan. We'll schedule and post clips directly to Instagram, TikTok, YouTube Shorts, Facebook, and X. Lower tiers deliver clips ready to download and post yourself."
              },
              {
                q: "What formats can I upload?",
                a: "Anything — YouTube links, Vimeo, MP4, MOV, Dropbox, Google Drive, or direct upload. If you can share it, we can clip it. Auto-Pilot subscribers can connect YouTube for automatic detection of new uploads."
              },
              {
                q: "Can I request revisions?",
                a: "Absolutely. Every plan includes one round of revisions per clip. Need a different moment, caption style, or hook? Just let us know and we'll adjust."
              },
              {
                q: "Is there a contract?",
                a: "No contracts, ever. All plans are month-to-month. Cancel anytime with one click. We also offer annual plans at a 20% discount."
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
            AI-powered editing. Human-quality results. Zero learning curve.
          </p>

          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First 5 Clips Free
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
                    <rect x="15" y="0" width="10" height="40" fill="white" />
                    <rect x="5" y="12" width="30" height="8" fill="white" />
                    <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                  </svg>
                </div>
                <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Clips</span></span>
              </div>
              <p className="text-sm">AI-powered editing. Human-quality results.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
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
