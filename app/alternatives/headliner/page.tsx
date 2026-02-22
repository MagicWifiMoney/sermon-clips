import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Zap,
  Globe,
  Video,
  Mic,
  Scissors,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Share2,
  Captions,
  Languages,
} from 'lucide-react';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Headliner Alternative for Churches: Sermon Clips vs Headliner App',
  description:
    'Comparing Headliner vs Sermon Clips for church video content. Headliner is great for podcast audiograms. Sermon Clips is built for video sermons — AI clips, captions, reframing, 30+ language translation.',
  keywords:
    'headliner alternative, headliner app alternative, headliner for churches, sermon video clips, church video tool, headliner vs sermon clips',
  openGraph: {
    title: 'Headliner Alternative for Churches | Sermon Clips',
    description:
      'Headliner excels at podcast audiograms. Sermon Clips is purpose-built for video sermons — AI moment detection, vertical reframing, captions, and 30+ language dubbing.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sermonclips.com/alternatives/headliner',
  },
};

// ─── Schema ──────────────────────────────────────────────────────────────────
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Headliner Alternative for Churches — Sermon Clips',
      description:
        'Detailed comparison of Headliner vs Sermon Clips for church media teams creating sermon clips and social media video content.',
      url: 'https://sermonclips.com/alternatives/headliner',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Headliner good for churches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Headliner is excellent for podcast audiograms — turning audio clips into video cards with waveform animations. For churches that are audio-first (podcast, radio ministry), it works well. But for churches with video sermons who want AI clip detection, vertical reframing for Reels/Shorts/TikTok, multilingual dubbing, and B-roll, Sermon Clips is the better fit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Headliner not do for church video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Headliner has no AI moment detection (you choose the clip manually), no automatic vertical reframing for mobile, no speaker-tracking zoom, no language translation or dubbing, and no direct social publishing to church platforms. These are all core features in Sermon Clips.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Headliner pricing compare to Sermon Clips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Headliner's Pro plan is $7.99/mo for 1 hour of content per month. Sermon Clips Starter is $29/mo for unlimited sermons with AI features. Headliner's Pro+ ($19.99/mo) gets you 3 hours/month — still no AI, still no translation, still no vertical reframing.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use Headliner for sermon clips on Instagram Reels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Headliner can export vertical video, but you have to manually crop and position content. Sermon Clips automatically reframes your sermon video to vertical (9:16) using AI that tracks the speaker's face, adjusting the crop in real time so the pastor is always centered.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Headliner support multiple languages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Headliner supports automatic captions but only in the source language. Sermon Clips offers translation and dubbing into 30+ languages — your English sermon can be automatically dubbed into Spanish, Portuguese, Mandarin, Korean, and more, with lip-sync audio.',
          },
        },
      ],
    },
  ],
};

// ─── Comparison Data ─────────────────────────────────────────────────────────
const features = [
  { feature: 'AI moment detection (auto-find best clips)', sermonClips: true, headliner: false },
  { feature: 'Automatic vertical reframing (9:16)', sermonClips: true, headliner: false },
  { feature: 'Speaker-tracking zoom', sermonClips: true, headliner: false },
  { feature: 'AI captions / subtitles', sermonClips: true, headliner: 'partial' },
  { feature: 'Caption style customization', sermonClips: true, headliner: true },
  { feature: 'Podcast audiogram / waveform video', sermonClips: false, headliner: true },
  { feature: 'B-roll auto-insertion', sermonClips: true, headliner: false },
  { feature: 'Motion graphics overlays', sermonClips: true, headliner: false },
  { feature: 'Color grading / correction', sermonClips: true, headliner: false },
  { feature: 'Music library (licensed)', sermonClips: true, headliner: true },
  { feature: 'Translation (30+ languages)', sermonClips: true, headliner: false },
  { feature: 'AI dubbing / voice sync', sermonClips: true, headliner: false },
  { feature: 'Direct social publishing', sermonClips: true, headliner: true },
  { feature: 'Free tier available', sermonClips: true, headliner: true },
  { feature: 'Built for video sermons', sermonClips: true, headliner: false },
  { feature: 'Built for podcast audio', sermonClips: false, headliner: true },
];

const pricing = [
  {
    tool: 'Headliner',
    plans: [
      { name: 'Free', price: '$0', limit: '5 min/month', ai: false },
      { name: 'Pro', price: '$7.99/mo', limit: '1 hr/month', ai: false },
      { name: 'Pro+', price: '$19.99/mo', limit: '3 hrs/month', ai: false },
    ],
  },
  {
    tool: 'Sermon Clips',
    plans: [
      { name: 'Free', price: '$0', limit: '1 sermon (full)', ai: true },
      { name: 'Starter', price: '$29/mo', limit: 'Unlimited sermons', ai: true },
      { name: 'Growth', price: '$59/mo', limit: 'Unlimited + translation', ai: true },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeadlinerAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-[#F5F1EB]">
        {/* Header */}
        <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                  <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                  <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl text-[#2D2D2D]">Sermon</span>
                <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
              </div>
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#2D2D2D]/10 rounded-full px-4 py-2 text-sm text-[#5c5c5c] mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E8725A]" />
              Headliner Alternative
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Headliner is built for podcasts.
              <br />
              <span className="text-[#E8725A]">Your sermons are on video.</span>
            </h1>

            <p className="text-xl text-[#5c5c5c] max-w-2xl mx-auto mb-10 leading-relaxed">
              Headliner does audiograms brilliantly — waveform animations, podcast clips, audio-first content. But if your Sunday service is on video, you need AI clip detection, automatic vertical reframing, and 30+ language dubbing. That's Sermon Clips.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-[#E8725A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4614a] transition-colors text-lg"
              >
                Try Sermon Clips Free
              </Link>
              <a
                href="#comparison"
                className="border-2 border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 rounded-full font-semibold hover:bg-[#2D2D2D] hover:text-white transition-colors text-lg"
              >
                See the Full Comparison
              </a>
            </div>
          </div>
        </section>

        {/* The Core Difference */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-4">
              Two different tools for two different jobs
            </h2>
            <p className="text-[#5c5c5c] text-center max-w-2xl mx-auto mb-12 text-lg">
              This isn't a "better or worse" story. Headliner and Sermon Clips solve different problems. Here's how to know which one you need.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Headliner */}
              <div className="bg-[#F5F1EB] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2D2D2D] rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#2D2D2D] text-lg">Headliner</div>
                    <div className="text-sm text-[#5c5c5c]">headliner.app</div>
                  </div>
                </div>
                <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                  Purpose-built for podcasters and radio ministries. Turns audio into shareable video content with animated waveforms, clip cards, and quote images. If your ministry distributes via podcast, Headliner is excellent.
                </p>
                <div className="font-semibold text-[#2D2D2D] mb-3">Best for:</div>
                <ul className="space-y-2">
                  {[
                    'Podcast-first ministry (audio recordings)',
                    'Waveform audiograms for social',
                    'Radio and audio sermon distribution',
                    'Podcast episode promotion clips',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sermon Clips */}
              <div className="bg-[#2D2D2D] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E8725A] rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Sermon Clips</div>
                    <div className="text-sm text-white/60">sermonclips.com</div>
                  </div>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Built for churches with video sermons. AI watches your recording, finds the most shareable moments, reformats them for every platform, adds captions, and publishes — in the language your community speaks.
                </p>
                <div className="font-semibold text-white mb-3">Best for:</div>
                <ul className="space-y-2">
                  {[
                    'Sunday video service recordings',
                    'AI-selected clip moments (no manual review)',
                    'Vertical Reels/Shorts/TikTok auto-reframing',
                    'Multilingual churches (30+ languages)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Headliner Doesn't Do for Video */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
              What Headliner can't do with your video sermon
            </h2>
            <p className="text-[#5c5c5c] mb-10 text-lg leading-relaxed">
              Headliner was designed for audio. When you upload a video sermon recording, here's where it hits its limits:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Scissors,
                  title: 'No AI clip selection',
                  description:
                    'You have to watch your 45-minute sermon and manually mark where clips start and end. Sermon Clips AI identifies the 3–5 most shareable moments automatically.',
                },
                {
                  icon: Video,
                  title: 'No intelligent vertical reframing',
                  description:
                    'Headliner can export vertical, but you manually adjust the crop. Sermon Clips tracks the pastor\'s face and auto-adjusts the crop frame-by-frame so they\'re always centered.',
                },
                {
                  icon: Languages,
                  title: 'No translation or dubbing',
                  description:
                    'Headliner captions are source-language only. Sermon Clips can dub your English sermon into Spanish, Portuguese, Korean, Mandarin, or 27 other languages with synced audio.',
                },
                {
                  icon: TrendingUp,
                  title: 'No B-roll or motion graphics',
                  description:
                    'Headliner is a canvas tool — what you upload is what you get. Sermon Clips can insert contextual B-roll footage and animated motion graphics to punctuate key moments.',
                },
                {
                  icon: Share2,
                  title: 'No multi-platform auto-publishing',
                  description:
                    'Headliner exports files for you to upload manually. Sermon Clips publishes directly to Instagram, Facebook, YouTube, TikTok, and more with platform-specific formatting.',
                },
                {
                  icon: Zap,
                  title: 'No full-sermon workflow automation',
                  description:
                    'With Headliner, every step is manual. With Sermon Clips, you upload once on Monday and clips are ready across every platform — formatted, captioned, and scheduled.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="font-bold text-[#2D2D2D] mb-1">{title}</div>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section id="comparison" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-4">
              Feature-by-feature comparison
            </h2>
            <p className="text-[#5c5c5c] text-center mb-12 text-lg">
              Headliner vs Sermon Clips — every major feature
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#2D2D2D]/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2D2D2D]">
                    <th className="text-left px-6 py-4 text-white font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 text-white font-semibold">Sermon Clips</th>
                    <th className="text-center px-6 py-4 text-white font-semibold">Headliner</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-[#F5F1EB]' : 'bg-white'}
                    >
                      <td className="px-6 py-4 text-sm text-[#2D2D2D]">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.sermonClips === true ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : row.sermonClips === 'partial' ? (
                          <AlertCircle className="w-5 h-5 text-amber-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.headliner === true ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : row.headliner === 'partial' ? (
                          <AlertCircle className="w-5 h-5 text-amber-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#5c5c5c] text-center mt-4">
              <AlertCircle className="w-4 h-4 inline mr-1 text-amber-500" />
              Headliner offers automated captions for audio-first content; advanced AI caption styling is limited compared to Sermon Clips.
            </p>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-4">
              Pricing compared
            </h2>
            <p className="text-[#5c5c5c] text-center mb-12 text-lg">
              Headliner charges by the minute. Sermon Clips charges by the sermon.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Headliner Pricing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#2D2D2D] rounded-lg flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[#2D2D2D] text-lg">Headliner</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Free', price: '$0/mo', note: '5 min of content/month', highlight: false },
                    { name: 'Pro', price: '$7.99/mo', note: '1 hour of content/month — no AI features', highlight: false },
                    { name: 'Pro+', price: '$19.99/mo', note: '3 hours/month — still no AI detection, no translation', highlight: false },
                  ].map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-2xl p-5 border ${
                        plan.highlight
                          ? 'bg-[#2D2D2D] border-[#2D2D2D] text-white'
                          : 'bg-white border-[#2D2D2D]/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-semibold ${plan.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>
                          {plan.name}
                        </span>
                        <span className={`font-bold text-lg ${plan.highlight ? 'text-[#E8725A]' : 'text-[#2D2D2D]'}`}>
                          {plan.price}
                        </span>
                      </div>
                      <p className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-[#5c5c5c]'}`}>{plan.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#5c5c5c] mt-4">
                  ⚠️ A 45-min sermon = 45 mins of content. Pro plan runs out after 1 sermon per month.
                </p>
              </div>

              {/* Sermon Clips Pricing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#E8725A] rounded-lg flex items-center justify-center">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[#2D2D2D] text-lg">Sermon Clips</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Free', price: '$0/mo', note: '1 full sermon — all AI features included', highlight: false },
                    { name: 'Starter', price: '$29/mo', note: 'Unlimited sermons — AI clips, captions, reframing, B-roll', highlight: true },
                    { name: 'Growth', price: '$59/mo', note: 'Everything + 30+ language translation & dubbing', highlight: false },
                  ].map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-2xl p-5 border ${
                        plan.highlight
                          ? 'bg-[#E8725A] border-[#E8725A] text-white'
                          : 'bg-white border-[#2D2D2D]/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-semibold ${plan.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>
                          {plan.name}
                        </span>
                        <span className={`font-bold text-lg ${plan.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>
                          {plan.price}
                        </span>
                      </div>
                      <p className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-[#5c5c5c]'}`}>{plan.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#5c5c5c] mt-4">
                  ✓ Process 4 sermons/month and you pay ~$7.25/sermon — less than a coffee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use What */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
              Which tool is right for your church?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F5F1EB] rounded-2xl p-8">
                <div className="text-2xl mb-4">🎙️</div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
                  Stick with Headliner if you're...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Producing a podcast and need audiogram clips',
                    'Working with audio-only sermons (no video recording)',
                    'Building waveform animations for radio ministry',
                    'Need simple quote card images from audio',
                    'Budget under $8/mo and audio-only is fine',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#5c5c5c]">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2D2D2D] rounded-2xl p-8">
                <div className="text-2xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Switch to Sermon Clips if you're...
                </h3>
                <ul className="space-y-3">
                  {[
                    'Recording video sermons (any camera/livestream)',
                    'Manually clipping your sermon every week (takes hours)',
                    'Posting to Instagram Reels, YouTube Shorts, or TikTok',
                    'Serving Spanish, Portuguese, or other language communities',
                    'Tired of manually reuploading to every platform',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Workflow Difference */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
              The weekly workflow difference
            </h2>
            <p className="text-[#5c5c5c] mb-10 text-lg">
              Here's what Monday morning looks like at a typical 200-member church using each tool.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Headliner workflow */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="font-bold text-[#2D2D2D] text-lg mb-6 flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  With Headliner
                  <span className="ml-auto text-sm font-normal text-[#5c5c5c] bg-[#F5F1EB] px-3 py-1 rounded-full">~3–4 hrs</span>
                </div>
                <ol className="space-y-4">
                  {[
                    'Export sermon recording from camera/livestream platform',
                    'Watch recording, write down timestamps of good moments',
                    'Upload audio/video clip to Headliner',
                    'Manually crop vertical frame, add text overlay',
                    'Add captions manually or wait for auto-captions',
                    'Download file, re-upload to Instagram',
                    'Repeat for YouTube Shorts (different format)',
                    'Repeat for Facebook (different format)',
                    'If Spanish ministry: translate manually, redo captions',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#F5F1EB] text-[#5c5c5c] rounded-full text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-[#5c5c5c]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sermon Clips workflow */}
              <div className="bg-[#2D2D2D] rounded-2xl p-8">
                <div className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  With Sermon Clips
                  <span className="ml-auto text-sm font-normal text-white/60 bg-white/10 px-3 py-1 rounded-full">~20 min</span>
                </div>
                <ol className="space-y-4">
                  {[
                    'Upload Sunday sermon recording (or connect livestream)',
                    'AI selects top 3–5 clip moments automatically',
                    'Review clips in dashboard, approve or adjust',
                    'Platform-formatted clips ready: vertical, horizontal, square',
                    'Captions burned in. Spanish dub ready if enabled.',
                    'Publish to all platforms with one click',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#E8725A] text-white rounded-full text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-white/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is Headliner good for churches?',
                  a: "Headliner is excellent for podcast audiograms — turning audio clips into video cards with waveform animations. For churches that are audio-first (podcast, radio ministry), it works well. But for churches with video sermons who want AI clip detection, vertical reframing for Reels/Shorts/TikTok, multilingual dubbing, and B-roll, Sermon Clips is the better fit.",
                },
                {
                  q: "What does Headliner not do for church video?",
                  a: "Headliner has no AI moment detection (you choose the clip manually), no automatic vertical reframing for mobile, no speaker-tracking zoom, no language translation or dubbing, and no direct social publishing to church platforms. These are all core features in Sermon Clips.",
                },
                {
                  q: "How does Headliner pricing compare to Sermon Clips?",
                  a: "Headliner's Pro plan is $7.99/mo for 1 hour of content per month — but a 45-minute sermon uses almost all of that. Sermon Clips Starter is $29/mo for unlimited sermons with full AI features. At 4 sermons/month, that's $7.25/sermon with AI doing all the work.",
                },
                {
                  q: "Can I use Headliner for sermon clips on Instagram Reels?",
                  a: "Headliner can export vertical video, but you have to manually crop and position content. Sermon Clips automatically reframes your sermon video to vertical (9:16) using AI that tracks the speaker's face, adjusting the crop in real time so the pastor is always centered.",
                },
                {
                  q: "Does Headliner support multiple languages?",
                  a: "Headliner supports automatic captions but only in the source language. Sermon Clips offers translation and dubbing into 30+ languages — your English sermon can be automatically dubbed into Spanish, Portuguese, Mandarin, Korean, and more, with synced audio.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-[#F5F1EB] rounded-2xl p-6">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">{q}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
              Your sermon is on video.
              <br />
              Use the tool built for it.
            </h2>
            <p className="text-[#5c5c5c] text-lg mb-10 leading-relaxed">
              Process your first sermon free — no credit card, no setup. See exactly what AI clip detection, vertical reframing, and captions look like for your church.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/sign-up"
                className="bg-[#E8725A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d4614a] transition-colors text-lg"
              >
                Start Free — No Credit Card
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 rounded-full font-semibold hover:bg-[#2D2D2D] hover:text-white transition-colors text-lg"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-sm text-[#5c5c5c]">
              Also see:{' '}
              <Link href="/alternatives/opus-clip" className="text-[#E8725A] hover:underline">
                vs OpusClip
              </Link>{' '}
              ·{' '}
              <Link href="/alternatives/sermonshots" className="text-[#E8725A] hover:underline">
                vs SermonShots
              </Link>{' '}
              ·{' '}
              <Link href="/alternatives/churchsocial" className="text-[#E8725A] hover:underline">
                vs ChurchSocial
              </Link>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2D2D2D]/10 py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                  <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                  <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                </svg>
              </div>
              <span className="font-semibold text-[#2D2D2D]">Sermon Clips</span>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm text-[#5c5c5c]">
              <Link href="/" className="hover:text-[#2D2D2D]">Home</Link>
              <Link href="/pricing" className="hover:text-[#2D2D2D]">Pricing</Link>
              <Link href="/blog" className="hover:text-[#2D2D2D]">Blog</Link>
              <Link href="/sermon-transcription" className="hover:text-[#2D2D2D]">Transcription</Link>
              <Link href="/multilingual-church-video" className="hover:text-[#2D2D2D]">Multilingual</Link>
              <Link href="/sign-up" className="hover:text-[#2D2D2D]">Sign Up</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
