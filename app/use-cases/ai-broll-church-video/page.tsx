import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Film,
  Sparkles,
  CheckCircle2,
  Zap,
  Play,
  Eye,
  Clock,
  Search,
  Layers,
  TrendingUp,
} from 'lucide-react';
import EmailCapturePopup from '@/components/EmailCapturePopup';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'AI B-Roll for Church Videos — Auto-Match Sermon Footage from 30,000+ Assets',
  description:
    'Automatically add cinematic B-roll to your sermon clips. AI reads your transcript, finds the right footage from 30,000+ assets, and inserts it at the perfect moment — no stock site needed.',
  keywords:
    'church video B-roll, AI B-roll sermon video, B-roll for church videos, sermon video B-roll generator, church video production AI, AI stock footage church, church video editing B-roll, sermon clip B-roll',
  openGraph: {
    title: 'AI B-Roll for Church Videos — 30,000+ Assets, Automatically Matched',
    description:
      'Stop searching stock sites. AI reads your sermon and inserts the right B-roll at the right moment — automatically.',
    type: 'website',
    url: 'https://sermonclips.com/use-cases/ai-broll-church-video',
    images: [
      {
        url: 'https://sermonclips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI B-Roll for Church Videos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI B-Roll for Church Videos — 30,000+ Assets, Automatically Matched',
    description: 'AI reads your sermon and inserts cinematic B-roll at the right moment. No stock site. No editor.',
  },
  alternates: {
    canonical: 'https://sermonclips.com/use-cases/ai-broll-church-video',
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'AI B-Roll for Church Videos',
      description:
        'Automatically add cinematic B-roll to sermon clips from a library of 30,000+ assets — matched to your content by AI.',
      url: 'https://sermonclips.com/use-cases/ai-broll-church-video',
      publisher: {
        '@type': 'Organization',
        name: 'Sermon Clips',
        url: 'https://sermonclips.com',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is B-roll in the context of church video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "B-roll is supplemental footage that plays over the main video (the 'A-roll' — your pastor speaking). In sermon clips, B-roll might be nature footage during a message on creation, city scenes during a series on mission, or people in prayer during a teaching on intercession. B-roll breaks up the talking-head format, increases watch time, and makes clips look professionally produced.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does the AI know which B-roll to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sermon Clips reads your sermon transcript and identifies key themes, topics, and visual metaphors in the text. When the pastor says 'running this race with endurance,' the AI searches the library for relevant footage — athletes, running, forward movement — and inserts it at that exact moment. You can review and swap any clip before publishing.",
          },
        },
        {
          '@type': 'Question',
          name: 'How many B-roll assets are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermon Clips has a library of 30,000+ licensed B-roll assets — all royalty-free and cleared for commercial and ministry use. Categories include nature, community, worship, family, prayer, urban/city, missions, and more. The library is updated regularly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I choose my own B-roll instead of letting AI pick?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. You can let the AI select and place B-roll automatically, or you can review each clip and swap in alternatives from the library. You can also upload your own footage — worship service B-roll, congregation photos, or church-specific video — and the AI will incorporate it.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does B-roll really make a difference for sermon clips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Significantly. A talking-head video holds attention for an average of 6–8 seconds on social media before viewers scroll. Clips with B-roll inserted every 5–10 seconds see 3–4× higher watch-through rates. For sermon content specifically, B-roll also reinforces the message visually — helping viewers retain the key point, not just hear it.",
          },
        },
      ],
    },
  ],
};

// ─── B-roll category data ─────────────────────────────────────────────────────
const BROLL_CATEGORIES = [
  { emoji: '🌿', name: 'Nature & Creation', count: '4,200+', desc: 'Sunrise, forests, water, skies — for sermons on creation, peace, and God\'s provision' },
  { emoji: '🏙️', name: 'Urban & Mission', count: '3,800+', desc: 'City streets, diverse communities, people in motion — for sermons on outreach and mission' },
  { emoji: '🙏', name: 'Prayer & Worship', count: '3,500+', desc: 'Hands in prayer, worship moments, quiet reflection — for messages on faith and surrender' },
  { emoji: '👨‍👩‍👧', name: 'Family & Community', count: '4,100+', desc: 'Diverse families, generations together, community gatherings' },
  { emoji: '✝️', name: 'Faith & Scripture', count: '2,900+', desc: 'Open Bibles, crosses, candles, communion — for foundational faith content' },
  { emoji: '🌅', name: 'Hope & New Beginnings', count: '3,200+', desc: 'Dawn, open roads, seeds growing — for sermons on renewal and transformation' },
  { emoji: '🤝', name: 'Relationships', count: '2,800+', desc: 'Friendship, reconciliation, mentorship — for messages on love and forgiveness' },
  { emoji: '🌍', name: 'Global & Missions', count: '2,600+', desc: 'International communities, unreached peoples, cross-cultural service' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AIBrollChurchVideoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#F5F1EB]">
        {/* ── Header ──────────────────────────────────────────────────────── */}
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
            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25"
            >
              Try Free
            </Link>
          </nav>
        </header>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Film className="w-4 h-4" />
              AI B-Roll Generator
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Stop the scroll with{' '}
              <span className="text-[#E8725A]">cinematic B-roll</span>
              <br />
              your AI picks automatically
            </h1>

            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-3xl mx-auto">
              A talking-head sermon clip holds attention for 6 seconds. The same clip with B-roll
              inserted every 8 seconds gets watched 3–4× longer. Sermon Clips reads your transcript,
              finds the right footage from 30,000+ assets, and inserts it at the exact right
              moment — automatically.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-2xl mx-auto">
              No stock site subscription. No editor. No hours browsing footage that doesn&apos;t quite fit.
              Just upload and get professionally produced clips — every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/sign-up"
                className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2"
              >
                Try Free — First Sermon on Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-[#5c5c5c]">No credit card required &bull; 30,000+ licensed assets &bull; Royalty-free for ministry use</p>
          </div>
        </section>

        {/* ── Stats bar ───────────────────────────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '30,000+', label: 'Licensed B-roll assets' },
                { num: '3–4×', label: 'Higher watch-through with B-roll' },
                { num: '8 sec', label: 'Average B-roll insert interval' },
                { num: '0', label: 'Stock sites or editors needed' },
              ].map((s, i) => (
                <div key={i} className="p-4">
                  <p className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-1">{s.num}</p>
                  <p className="text-sm text-[#5c5c5c]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem ─────────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#2D2D2D] px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The talking-head problem every church video team knows
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Your pastor delivers a powerful message. You record it. You post it. And it gets
                7 seconds of attention before someone keeps scrolling. Not because the message
                wasn&apos;t good — because the format wasn&apos;t built for mobile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'The scroll death spiral',
                  desc: 'A static frame — one person, one angle, no visual variety — is the lowest-performing format on every social platform. The algorithm reads low watch time and stops distributing the clip. Your message never reaches the people who need it.',
                  icon: TrendingUp,
                },
                {
                  title: 'B-roll is expensive the old way',
                  desc: 'Stock sites charge $50–500/month for access to footage that\'s not even church-relevant. Filming your own B-roll takes equipment, planning, and editing hours your team doesn\'t have. Most churches just give up and post talking heads.',
                  icon: Clock,
                },
                {
                  title: 'Finding relevant footage takes forever',
                  desc: 'Even when you have a stock site subscription, finding footage that actually matches "the race of faith" or "light in darkness" — in the right tone, color grade, and length — takes 30–60 minutes per clip. Every week.',
                  icon: Search,
                },
                {
                  title: 'Timing is everything',
                  desc: 'B-roll inserted at the wrong moment feels jarring. It needs to match the word, the metaphor, the emotional beat of the sentence. Doing that by hand requires an editor who actually listened to the sermon. AI can do this at scale.',
                  icon: Layers,
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#E8725A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#E8725A]/10 border border-[#E8725A]/30 rounded-2xl p-6 text-center">
              <p className="text-white text-lg font-semibold mb-1">
                No other sermon clipping platform has automated B-roll.
              </p>
              <p className="text-white/60">
                OpusClip, Headliner, and SermonShots all output talking-head clips. We don&apos;t.
              </p>
            </div>
          </div>
        </section>

        {/* ── How It Works ────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                From transcript to cinematic clip — automatically
              </h2>
              <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
                The AI does the work a video editor would do — but in seconds, not hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  num: '01',
                  title: 'Reads your sermon transcript',
                  desc: 'The AI transcribes your sermon and analyzes every sentence for visual themes, metaphors, emotional tone, and topic keywords. "Running the race" → athletics. "Light in darkness" → dawn, candles. "Community" → people together.',
                },
                {
                  num: '02',
                  title: 'Searches 30,000+ assets by meaning, not keyword',
                  desc: 'The AI doesn\'t just search for the word "faith" — it understands the emotional and visual context of each moment and finds footage that matches the feeling, not just the label. Semantic search, not tag matching.',
                },
                {
                  num: '03',
                  title: 'Places B-roll at the right visual moments',
                  desc: 'B-roll is inserted at natural pause points and visual transition moments in the sermon — not randomly. The cut timing follows the rhythm of the pastor\'s speech, so it feels like it was edited by a human.',
                },
                {
                  num: '04',
                  title: 'You review, swap, or approve',
                  desc: 'See every B-roll placement before you publish. Swap any clip from the library, upload your own footage, or approve the AI\'s selections as-is. Full control — or full automation.',
                },
              ].map((step, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#E8E4DC] flex gap-5">
                  <span className="font-mono text-[#E8725A] font-bold text-xl flex-shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#F5F1EB] border-2 border-[#E8E4DC]">
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold mb-4">
                  Without B-roll
                </div>
                <div className="space-y-3">
                  {[
                    'Static talking-head frame for 60 seconds',
                    '6–8 seconds average watch time on mobile',
                    'Algorithm stops distributing at low watch time',
                    'Viewers lose the visual context of the message',
                    'Looks like every other church post',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <p className="text-sm text-[#5c5c5c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white border-2 border-[#E8725A]/30">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-xs font-semibold mb-4">
                  With AI B-roll
                </div>
                <div className="space-y-3">
                  {[
                    'Visual variety every 5–10 seconds',
                    '3–4× higher watch-through rate',
                    'Algorithm rewards high retention with wider reach',
                    'Visuals reinforce the message — viewers retain more',
                    'Looks like a professional media team produced it',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#5c5c5c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Library ─────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                The Library
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                30,000+ assets built for church content
              </h2>
              <p className="text-[#5c5c5c] max-w-2xl mx-auto">
                Not generic stock footage. Every asset is curated for pastoral and ministry context —
                the kind of visual language that actually fits what happens inside a sermon.
                All assets are royalty-free and licensed for ministry use.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BROLL_CATEGORIES.map((cat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-3">{cat.emoji}</div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-[#2D2D2D] text-sm">{cat.name}</p>
                    <span className="text-xs text-[#E8725A] font-medium">{cat.count}</span>
                  </div>
                  <p className="text-xs text-[#5c5c5c] leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#F5F1EB] rounded-2xl border border-[#E8E4DC] text-center">
              <p className="text-sm text-[#5c5c5c]">
                <strong className="text-[#2D2D2D]">You can also upload your own footage.</strong>{' '}
                Have great worship service videos, congregational moments, or community event clips?
                Add them to your personal library and the AI will incorporate them into your clips automatically.
              </p>
            </div>
          </div>
        </section>

        {/* ── Competitive moat ────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8 bg-[#F5F1EB]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                How We Compare
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                The only sermon tool that adds B-roll automatically
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden mb-8">
              <div className="grid grid-cols-5 bg-[#2D2D2D] px-6 py-4 text-sm font-medium">
                <div className="col-span-2 text-white/60">Feature</div>
                <div className="text-center text-[#E8725A]">Sermon Clips</div>
                <div className="text-center text-white/40">SermonShots</div>
                <div className="text-center text-white/40">OpusClip</div>
              </div>
              <div className="divide-y divide-[#E8E4DC]">
                {[
                  ['AI clip selection', true, true, true],
                  ['Auto captions', true, true, true],
                  ['Multi-platform formats', true, true, true],
                  ['Auto-posting to social', true, false, true],
                  ['B-roll auto-insert (30,000+ assets)', true, false, false],
                  ['Semantic B-roll matching (by meaning)', true, false, false],
                  ['Upload custom B-roll library', true, false, false],
                  ['Translation & dubbing (30+ languages)', true, false, false],
                  ['Motion graphics', true, false, false],
                ].map(([feature, sc, ss, oc], i) => (
                  <div key={i} className="grid grid-cols-5 px-6 py-4 items-center">
                    <div className="col-span-2 text-sm text-[#2D2D2D]">{feature}</div>
                    <div className="flex justify-center">
                      {sc ? <CheckCircle2 className="w-5 h-5 text-[#E8725A]" /> : <span className="text-[#2D2D2D]/20 text-lg">—</span>}
                    </div>
                    <div className="flex justify-center">
                      {ss ? <CheckCircle2 className="w-5 h-5 text-[#5c5c5c]/40" /> : <span className="text-[#2D2D2D]/20 text-lg">—</span>}
                    </div>
                    <div className="flex justify-center">
                      {oc ? <CheckCircle2 className="w-5 h-5 text-[#5c5c5c]/40" /> : <span className="text-[#2D2D2D]/20 text-lg">—</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-[#5c5c5c]">
              B-roll, translation, and motion graphics are three features exclusive to Sermon Clips.
              Every other platform stops at clips and captions.
            </p>
          </div>
        </section>

        {/* ── Who it's for ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Production quality — without a production team
              </h2>
              <p className="text-[#5c5c5c] max-w-xl mx-auto">
                AI B-roll is most valuable for churches that want their content to look professional
                but don&apos;t have the budget or staff to make it happen manually.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎬',
                  title: 'Small churches with no media team',
                  desc: "You're posting from a phone and a laptop. B-roll automation gives your clips the same production quality as churches with a 3-person media team — without hiring anyone.",
                },
                {
                  icon: '🏃',
                  title: 'Media directors who are already stretched',
                  desc: "You're editing, scheduling, managing 3 social accounts, and handling announcements. Automated B-roll removes the most time-intensive step in clip production.",
                },
                {
                  icon: '📈',
                  title: 'Growing churches building a social presence',
                  desc: "You're trying to grow reach and you know watch time matters. B-roll is the single highest-impact edit you can make to sermon clips — and now it takes zero extra time.",
                },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-xl transition-all">
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">
              Questions about AI B-roll
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is B-roll in the context of church video?',
                  a: "B-roll is supplemental footage that plays over the main video (the 'A-roll' — your pastor speaking). In sermon clips, B-roll might be nature footage during a message on creation, city scenes during a series on mission, or hands in prayer during a teaching on intercession. B-roll breaks up the talking-head format, increases watch time, and makes clips look professionally produced.",
                },
                {
                  q: 'How does the AI know which B-roll to use?',
                  a: "Sermon Clips reads your sermon transcript and identifies key themes, visual metaphors, and emotional tone. When the pastor says 'running this race with endurance,' the AI searches for relevant footage — athletes, forward motion, open roads — and inserts it at that moment. It understands meaning, not just keywords.",
                },
                {
                  q: 'How many B-roll assets are available?',
                  a: '30,000+ licensed assets — all royalty-free and cleared for commercial and ministry use. Categories include nature, worship, family, prayer, urban, missions, hope, and more. The library is updated regularly.',
                },
                {
                  q: 'Can I choose my own B-roll instead of letting AI pick?',
                  a: "Yes. Review every placement before publishing and swap any clip. You can also upload your own footage — worship service B-roll, congregation moments, community events — and the AI will incorporate it alongside the library.",
                },
                {
                  q: 'Does B-roll really make a measurable difference?',
                  a: "Significantly. A static talking-head clip averages 6–8 seconds watch time on social. Clips with B-roll inserted every 5–10 seconds see 3–4× higher watch-through. For the algorithm, higher retention = wider distribution. For the message, visual reinforcement = better retention of the key point.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F5F1EB] border border-[#E8E4DC]">
                  <h3 className="font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-8">
              <Film className="w-10 h-10 text-[#E8725A]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
              Your sermon deserves more than a talking head.
            </h2>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
              Upload Sunday&apos;s sermon. Get clips with cinematic B-roll, dynamic captions, and
              multi-platform formatting — ready in minutes.
            </p>
            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Try Free — No Card Required
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#5c5c5c] mt-6">
              First sermon free &bull; B-roll included &bull; Cancel anytime
            </p>
          </div>
        </section>

        {/* ── Related ─────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Explore more features</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Multilingual Sermon Clips', desc: 'Reach every family in their heart language — 30+ languages.', href: '/multilingual-church-video' },
                { title: 'Multi-Platform Distribution', desc: 'One clip, every format — TikTok, Instagram, YouTube, Facebook.', href: '/use-cases/multi-platform' },
                { title: 'How to Repurpose One Sermon Into 30+ Pieces', desc: 'The complete content multiplication playbook.', href: '/blog/repurpose-sermon-content' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="p-5 rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/40 hover:shadow-lg transition-all group">
                  <p className="font-semibold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-2">{link.title}</p>
                  <p className="text-sm text-[#5c5c5c]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </div>
          </div>
        </footer>

        <EmailCapturePopup />
      </div>
    </>
  );
}
