import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Clock, Zap, Globe, Star, Calendar, Play, Users, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Easter 2026 Sermon Clips: AI Content Plan for Churches | Sermon Clips',
  description: 'Easter 2026 is April 5. Get your church\'s biggest Sunday on social media in minutes — AI-powered sermon clips, captions, and multi-platform publishing for Easter Sunday.',
  keywords: 'easter sermon, easter sermon clips, easter 2026 church, easter church social media, easter sermon ideas 2026, easter sunday clips, church easter content',
  openGraph: {
    title: 'Easter 2026 Sermon Clips: Your AI Content Plan',
    description: 'Easter April 5 is your biggest Sunday of the year. Turn it into your biggest social media moment too — in under 30 minutes.',
    type: 'website',
    url: 'https://sermonclips.com/easter-2026',
  },
  alternates: {
    canonical: 'https://sermonclips.com/easter-2026',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Easter 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easter Sunday 2026 falls on April 5. That gives churches approximately 6 weeks from mid-February to prepare their Easter content strategy, including sermon clips, social media posts, and invitation videos."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create Easter sermon clips for social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your Easter sermon video to Sermon Clips, and AI will automatically identify the most impactful moments — the resurrection declaration, the emotional appeal, the key illustration. Within minutes you'll have vertical-format clips with captions, ready for Instagram Reels, TikTok, YouTube Shorts, and Facebook. No editing experience needed."
      }
    },
    {
      "@type": "Question",
      "name": "Should I post Easter sermon clips before or after Easter Sunday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. In the 5 weeks before Easter, post weekly 'anticipation' clips — Easter series teasers, Good Friday previews, behind-the-scenes prep. On Easter Sunday, post a same-day clip within 2 hours of the service. In the 2 weeks after, post the resurrection message clip and invite people to watch the full sermon online."
      }
    },
    {
      "@type": "Question",
      "name": "What types of Easter content perform best on social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For churches, the top-performing Easter content is: (1) Resurrection message clips with emotional moments, (2) short invitation videos under 60 seconds, (3) vertical-format clips with bold captions, (4) multilingual clips for multicultural congregations, and (5) behind-the-scenes prep content showing the heart behind the service."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create Easter sermon clips in Spanish or other languages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sermon Clips supports translation and dubbing in 30+ languages. Upload your English Easter sermon and we'll generate Spanish, Mandarin, Portuguese, Korean, or any other language version — complete with captions and lip-synced audio. Ideal for multicultural churches and Easter outreach to non-English-speaking visitors."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to create Easter sermon clips with AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sermon Clips starts free — process your first Easter sermon at no cost. Paid plans start at $29/month (Starter) with unlimited sermons. Compare this to video editing services that charge $150–$300 per sermon. For your Easter Sunday, the ROI is immediate."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Easter 2026 Sermon Clips: AI Content Plan for Churches",
  "description": "Complete guide to creating Easter 2026 sermon clips and social media content for churches using AI.",
  "url": "https://sermonclips.com/easter-2026",
  "dateModified": "2026-02-21",
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://sermonclips.com/sign-up"
  }
};

const weeklyPlan = [
  {
    week: "Now → Mar 8",
    label: "Week 1–2: Announce",
    color: "bg-[#4CAF50]/10 border-[#4CAF50]/30",
    accent: "text-[#4CAF50]",
    items: [
      "Post \"Easter is coming\" teaser clip from a past resurrection message",
      "Introduce your Easter series title on social",
      "Repost your most-watched clip from last year's Easter Sunday",
      "Launch invitation video: \"Bring someone this Easter\"",
    ]
  },
  {
    week: "Mar 9–22",
    label: "Week 3–4: Build",
    color: "bg-[#2196F3]/10 border-[#2196F3]/30",
    accent: "text-[#2196F3]",
    items: [
      "Post weekly clip from your Easter series messages",
      "Behind-the-scenes: worship rehearsal, stage setup, team prep",
      "\"Why Easter matters\" clip — your pastor's personal take",
      "Mid-series clip: the cross moment, the doubt moment, the turning point",
    ]
  },
  {
    week: "Mar 23–Apr 4",
    label: "Week 5–6: Invite",
    color: "bg-[#FF9800]/10 border-[#FF9800]/30",
    accent: "text-[#FF9800]",
    items: [
      "Palm Sunday clip — powerful opening to Holy Week",
      "Daily Holy Week countdown clips (Mon–Sat)",
      "Good Friday message clip (high emotion, high shares)",
      "\"See you Sunday\" Easter invitation — your strongest CTA clip",
    ]
  },
  {
    week: "Apr 5",
    label: "Easter Sunday: Go Live",
    color: "bg-[#9C27B0]/10 border-[#9C27B0]/30",
    accent: "text-[#9C27B0]",
    items: [
      "Upload Easter sermon immediately after service",
      "AI clips ready within 20 minutes",
      "Post resurrection declaration clip same afternoon",
      "Capture first-time guest energy while it's fresh",
    ]
  },
];

const stats = [
  { value: "2.4×", label: "More reach on Easter Sunday vs. typical week" },
  { value: "<30 min", label: "From service end to clips published" },
  { value: "30+", label: "Languages for multilingual Easter outreach" },
  { value: "5 clips", label: "Average output from one Easter sermon" },
];

export default function Easter2026Page() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E] to-[#8B7355] rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-[#2D2D2D]">Sermon Clips</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="text-sm text-[#2D2D2D]/70 hover:text-[#2D2D2D] hidden md:block">
              Pricing
            </Link>
            <Link href="/sign-up" className="bg-[#2D2D2D] text-[#F5F1EB] px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#2D2D2D]/80 transition-colors">
              Start Free
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-[#C8A97E] to-[#8B7355] text-white py-3 text-center">
          <p className="text-sm font-medium">
            🐣 Easter Sunday is <strong>April 5, 2026</strong> — 6 weeks away. Start building your content pipeline today.
          </p>
        </div>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 rounded-full px-4 py-2 text-sm text-[#2D2D2D]/70 mb-8">
            <Calendar className="w-4 h-4" />
            Easter 2026 Content Guide for Churches
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            Turn Your Easter Sermon<br />
            <span className="bg-gradient-to-r from-[#C8A97E] to-[#8B7355] bg-clip-text text-transparent">
              Into Your Biggest Social Moment
            </span>
          </h1>

          <p className="text-xl text-[#2D2D2D]/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Easter Sunday is your highest-attended service of the year — and the highest-reach opportunity on social media. 
            AI-powered sermon clips get you from service to published in under 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] text-[#F5F1EB] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2D2D2D]/80 transition-colors"
            >
              Start Free — First Sermon On Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 border-2 border-[#2D2D2D]/20 text-[#2D2D2D] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#2D2D2D]/40 transition-colors"
            >
              See the Workflow
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10">
                <div className="text-3xl font-bold text-[#2D2D2D] mb-1">{stat.value}</div>
                <div className="text-sm text-[#2D2D2D]/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Easter is Different */}
        <section className="bg-[#2D2D2D] text-[#F5F1EB] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Easter Is Your Highest-Stakes Sunday</h2>
              <p className="text-[#F5F1EB]/70 text-lg max-w-2xl mx-auto">
                Easter isn&apos;t just a service. It&apos;s the most-searched, most-shared, most-attended Sunday in the church calendar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F5F1EB]/5 rounded-2xl p-8 border border-[#F5F1EB]/10">
                <Users className="w-8 h-8 text-[#C8A97E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Largest Attendance</h3>
                <p className="text-[#F5F1EB]/70">
                  Easter Sunday draws 2–3× your average Sunday attendance. First-time visitors are looking for a reason to come back — your social media content is that reason.
                </p>
              </div>
              <div className="bg-[#F5F1EB]/5 rounded-2xl p-8 border border-[#F5F1EB]/10">
                <TrendingUp className="w-8 h-8 text-[#C8A97E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Highest Social Reach</h3>
                <p className="text-[#F5F1EB]/70">
                  Easter-tagged church content gets 2.4× more organic reach than typical weeks. People share faith content on Easter who never share it otherwise.
                </p>
              </div>
              <div className="bg-[#F5F1EB]/5 rounded-2xl p-8 border border-[#F5F1EB]/10">
                <Globe className="w-8 h-8 text-[#C8A97E] mb-4" />
                <h3 className="text-xl font-bold mb-3">Longest Clip Life</h3>
                <p className="text-[#F5F1EB]/70">
                  Easter sermon clips get reshared year after year. A great resurrection message clip posted today will still be driving views in 2027.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">From Easter Service to Published in 30 Minutes</h2>
            <p className="text-[#2D2D2D]/70 text-lg">No editing team. No waiting days. Just upload and let AI do the work.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { step: "1", title: "Upload Your Easter Sermon", desc: "Drag and drop your Easter Sunday video — any format, any length. We handle the rest.", icon: "📤" },
                { step: "2", title: "AI Finds the Best Moments", desc: "Our AI identifies the resurrection declaration, the emotional peak, the key illustration, and the strongest invitation moment.", icon: "🧠" },
                { step: "3", title: "Clips Are Auto-Formatted", desc: "Each clip is converted to vertical format with bold captions, branded colors, and motion graphics — ready for every platform.", icon: "✂️" },
                { step: "4", title: "Publish Directly to Social", desc: "Post to Instagram, TikTok, YouTube Shorts, and Facebook from one dashboard. Schedule the whole week in minutes.", icon: "🚀" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2D2D2D] text-[#F5F1EB] rounded-xl flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-1">{item.icon} {item.title}</h3>
                    <p className="text-[#2D2D2D]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#2D2D2D] rounded-3xl p-8 text-[#F5F1EB]">
              <h3 className="text-2xl font-bold mb-6">What You Get From One Easter Sermon</h3>
              <div className="space-y-4">
                {[
                  "3–5 vertical clips (60-90 sec) for Reels & TikTok",
                  "1 extended highlight (3 min) for YouTube Shorts",
                  "Auto-captions in your church's style",
                  "B-roll suggestions and motion graphics",
                  "Translation into 30+ languages (optional)",
                  "Direct publishing to all social platforms",
                  "Full transcript for blog post and study guide",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#F5F1EB]/90">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#F5F1EB]/10">
                <p className="text-[#F5F1EB]/60 text-sm">Compare: Video editor charges $150–300 per sermon. We&apos;re $29/month unlimited.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6-Week Calendar */}
        <section className="bg-[#F5F1EB] border-t border-[#2D2D2D]/10 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Your 6-Week Easter Content Calendar</h2>
              <p className="text-[#2D2D2D]/70 text-lg max-w-2xl mx-auto">
                Start now. Easter is 6 weeks away — exactly the right time to build momentum and fill your feed through April.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {weeklyPlan.map((phase, i) => (
                <div key={i} className={`rounded-2xl p-8 border ${phase.color}`}>
                  <div className={`text-xs font-bold uppercase tracking-wider ${phase.accent} mb-1`}>{phase.week}</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">{phase.label}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-[#2D2D2D]/40 flex-shrink-0 mt-1" />
                        <span className="text-[#2D2D2D]/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 bg-[#2D2D2D] text-[#F5F1EB] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2D2D2D]/80 transition-colors"
              >
                Get Started — First Sermon Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-[#2D2D2D]/50 text-sm mt-3">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>

        {/* Multilingual Easter */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#2D2D2D]/5 border border-[#2D2D2D]/10 rounded-full px-4 py-2 text-sm text-[#2D2D2D]/70 mb-6">
                <Globe className="w-4 h-4" />
                Multilingual Easter Outreach
              </div>
              <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
                Reach Your Whole Community<br />in Their Language
              </h2>
              <p className="text-[#2D2D2D]/70 text-lg mb-8">
                30% of U.S. churches serve significant non-English-speaking populations. Easter is the highest-impact moment to publish in Spanish, Mandarin, Portuguese, Korean, or any of 30+ languages.
              </p>
              <div className="space-y-4">
                {[
                  "Upload one Easter sermon, get clips in 30+ languages",
                  "AI translation + lip-synced dubbing (optional)",
                  "Translated captions for silent-watch viewers",
                  "Reach diaspora communities who search in their native language",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2D2D]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#C8A97E]/20 to-[#8B7355]/20 rounded-3xl p-10 text-center">
              <div className="text-6xl mb-6">🌍</div>
              <div className="grid grid-cols-3 gap-3 text-sm text-[#2D2D2D]/70">
                {["Español", "中文", "Português", "한국어", "Français", "Deutsch", "العربية", "हिन्दी", "Tagalog"].map((lang) => (
                  <div key={lang} className="bg-white rounded-lg py-2 px-3 text-center font-medium text-[#2D2D2D]">
                    {lang}
                  </div>
                ))}
              </div>
              <p className="text-[#2D2D2D]/60 text-sm mt-4">+ 21 more languages</p>
            </div>
          </div>
        </section>

        {/* Platform Specs */}
        <section className="bg-[#2D2D2D] text-[#F5F1EB] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Easter Clips, Ready for Every Platform</h2>
              <p className="text-[#F5F1EB]/70 text-lg">Perfect specs, auto-formatted. No manual resizing.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { platform: "Instagram Reels", spec: "9:16 vertical, 15–90 sec", emoji: "📱" },
                { platform: "TikTok", spec: "9:16 vertical, up to 10 min", emoji: "🎵" },
                { platform: "YouTube Shorts", spec: "9:16 vertical, up to 3 min", emoji: "▶️" },
                { platform: "Facebook", spec: "9:16 or 4:5, up to 20 min", emoji: "👥" },
                { platform: "LinkedIn", spec: "4:5 or 1:1, up to 10 min", emoji: "💼" },
              ].map((p, i) => (
                <div key={i} className="bg-[#F5F1EB]/5 rounded-2xl p-6 border border-[#F5F1EB]/10 text-center">
                  <div className="text-3xl mb-3">{p.emoji}</div>
                  <h3 className="font-bold mb-2">{p.platform}</h3>
                  <p className="text-[#F5F1EB]/60 text-xs">{p.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] rounded-3xl p-12 text-center text-[#F5F1EB]">
            <Sparkles className="w-12 h-12 text-[#C8A97E] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Don&apos;t Let Easter Pass Without a Clip Strategy</h2>
            <p className="text-[#F5F1EB]/70 text-xl mb-8 max-w-2xl mx-auto">
              Start free — process your first sermon (Easter or any sermon) at no cost. 
              If you want unlimited sermons, plans start at $29/month.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { plan: "Free", price: "$0", features: ["1 sermon", "3 clips per sermon", "Captions included", "Try before Easter"] },
                { plan: "Starter", price: "$29/mo", features: ["Unlimited sermons", "5 clips per sermon", "All platforms", "All features"] },
                { plan: "Growth", price: "$59/mo", features: ["Everything in Starter", "Priority processing", "Advanced B-roll", "Translation/dubbing"] },
              ].map((tier, i) => (
                <div key={i} className={`rounded-2xl p-6 text-left ${i === 1 ? 'bg-[#C8A97E] text-[#2D2D2D]' : 'bg-[#F5F1EB]/5 border border-[#F5F1EB]/10'}`}>
                  <div className="font-bold text-lg mb-1">{tier.plan}</div>
                  <div className="text-3xl font-bold mb-4">{tier.price}</div>
                  <ul className="space-y-2">
                    {tier.features.map((f, j) => (
                      <li key={j} className={`flex items-center gap-2 text-sm ${i === 1 ? 'text-[#2D2D2D]' : 'text-[#F5F1EB]/70'}`}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#C8A97E] text-[#2D2D2D] px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#C8A97E]/90 transition-colors"
            >
              Start Free — First Sermon On Us
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-[#F5F1EB]/40 text-sm mt-4">No credit card required. Easter is April 5 — start today.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-12 text-center">Easter Sermon Clips FAQ</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#2D2D2D]/10">
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{faq.name}</h3>
                <p className="text-[#2D2D2D]/70 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-[#2D2D2D]/5 border-t border-[#2D2D2D]/10 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/easter-sermon-clips-content-plan" className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10 hover:border-[#2D2D2D]/30 transition-colors">
                <div className="text-2xl mb-3">📅</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">Easter Content Plan for Churches (Blog)</h3>
                <p className="text-sm text-[#2D2D2D]/60">Week-by-week social media plan for Easter 2026 with platform-specific strategy.</p>
              </Link>
              <Link href="/sermon-transcription" className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10 hover:border-[#2D2D2D]/30 transition-colors">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">AI Sermon Transcription</h3>
                <p className="text-sm text-[#2D2D2D]/60">Turn your Easter sermon into a full transcript — for blog posts, study guides, and captions.</p>
              </Link>
              <Link href="/blog/sermon-shorts-complete-guide" className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10 hover:border-[#2D2D2D]/30 transition-colors">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">Sermon Shorts: Complete Guide</h3>
                <p className="text-sm text-[#2D2D2D]/60">Everything about creating YouTube Shorts from sermons — perfect for Easter reach.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2D2D2D] text-[#F5F1EB] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E] to-[#8B7355] rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <span className="text-lg font-bold">Sermon Clips</span>
              </Link>
              <div className="flex gap-6 text-sm text-[#F5F1EB]/60">
                <Link href="/blog" className="hover:text-[#F5F1EB]">Blog</Link>
                <Link href="/pricing" className="hover:text-[#F5F1EB]">Pricing</Link>
                <Link href="/sermon-transcription" className="hover:text-[#F5F1EB]">Transcription</Link>
                <Link href="/alternatives/opus-clip" className="hover:text-[#F5F1EB]">vs Opus Clip</Link>
                <Link href="/sign-up" className="hover:text-[#F5F1EB]">Sign Up</Link>
              </div>
              <p className="text-[#F5F1EB]/40 text-sm">© 2026 Sermon Clips. Easter is April 5.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
