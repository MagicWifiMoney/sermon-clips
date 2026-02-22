import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Play,
  Layers,
  Type,
  Palette,
  Sliders,
  Star,
  Film,
} from 'lucide-react';
import EmailCapturePopup from '@/components/EmailCapturePopup';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Motion Graphics for Church Videos — AI-Animated Sermon Clips',
  description:
    'Automatically add broadcast-quality motion graphics to your sermon clips. Animated captions, lower thirds, quote cards, and title sequences — applied by AI in minutes, not hours.',
  keywords:
    'church video motion graphics, motion graphics sermon clips, animated church video, sermon clip animation, church video lower thirds, animated captions church, motion graphics AI church, church video templates animated',
  openGraph: {
    title: 'Motion Graphics for Church Videos — AI-Animated Sermon Clips',
    description:
      'Broadcast-quality motion graphics applied automatically. Animated captions, lower thirds, quote cards — no designer needed.',
    type: 'website',
    url: 'https://sermonclips.com/use-cases/church-video-motion-graphics',
    images: [{ url: 'https://sermonclips.com/og-image.jpg', width: 1200, height: 630, alt: 'Motion Graphics for Church Videos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motion Graphics for Church Videos — AI-Animated',
    description: 'Broadcast-quality motion graphics on your sermon clips — automatically. No designer. No After Effects.',
  },
  alternates: { canonical: 'https://sermonclips.com/use-cases/church-video-motion-graphics' },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Motion Graphics for Church Videos — AI-Animated Sermon Clips',
      description: 'Broadcast-quality motion graphics applied automatically to sermon clips — animated captions, lower thirds, quote cards, and title sequences.',
      url: 'https://sermonclips.com/use-cases/church-video-motion-graphics',
      publisher: { '@type': 'Organization', name: 'Sermon Clips', url: 'https://sermonclips.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What types of motion graphics does Sermon Clips apply to sermon clips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermon Clips applies five categories of motion graphics automatically: (1) animated captions — word-by-word or phrase-by-phrase caption animation synced to speech; (2) lower thirds — pastor name, church name, and series title overlays; (3) quote cards — animated text treatments for key sermon quotes; (4) title sequences — branded intro and outro animations; (5) transitions — smooth cuts and scene changes between B-roll and sermon footage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my own church branding in the motion graphics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Upload your church logo, set your brand colors and fonts, and every motion graphic template will apply your branding automatically. Lower thirds will display your pastor\'s name and church name in your exact brand style. Intros and outros will use your logo animation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need After Effects or motion design skills to use this?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Sermon Clips handles all motion graphics automatically — you choose a template style and the AI applies it to your clips. No After Effects, no Premiere Pro, no design software. If you want to customize beyond the template options, you can adjust colors, font size, animation speed, and position from a simple settings panel.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes animated captions different from static captions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Static captions display the full sentence at once. Animated captions highlight each word or phrase as the pastor speaks it — karaoke-style. Research shows animated (word-by-word) captions increase viewer attention and retention compared to static text blocks, because the eye is naturally drawn to movement and the visual rhythm matches the audio.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are motion graphics included on all plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Animated captions are included on all plans. Lower thirds, quote cards, and title sequences are available on Starter and above. Full branded motion graphics customization (custom colors, fonts, logo animations) is available on Growth and Auto-Pilot plans.',
          },
        },
      ],
    },
  ],
};

// ─── Motion graphic types ─────────────────────────────────────────────────────
const MG_TYPES = [
  {
    icon: Type,
    name: 'Animated captions',
    desc: 'Word-by-word or phrase-by-phrase caption animation synced precisely to the pastor\'s speech. Karaoke-style highlighting keeps eyes on the screen and improves retention.',
    detail: 'Available on all plans',
    example: '"Grace isn\'t a reward" highlights word by word as Pastor speaks',
  },
  {
    icon: Layers,
    name: 'Lower thirds',
    desc: 'Branded name-and-title overlays that appear at the start of each clip — pastor name, church name, series title — in your exact brand style.',
    detail: 'Starter plan and above',
    example: 'Pastor John Smith | Grace Church | "Undeserved" Series',
  },
  {
    icon: Star,
    name: 'Quote cards',
    desc: 'When the AI detects a quotable moment, it applies an animated text treatment that makes the quote pop — centered, styled, with a subtle animation entrance.',
    detail: 'Starter plan and above',
    example: 'Full-screen animated treatment: "God\'s grace isn\'t earned. It\'s received."',
  },
  {
    icon: Play,
    name: 'Branded intro & outro',
    desc: 'A 2–3 second animated logo reveal at the start and branded end card at the close. Every clip feels like it came from the same professional media team.',
    detail: 'Growth plan and above',
    example: 'Church logo animates in → sermon title → "Watch more at [url]"',
  },
  {
    icon: Film,
    name: 'Transitions',
    desc: 'Smooth, intentional cuts between B-roll and sermon footage. No jarring jump cuts. The AI applies the right transition style based on the emotional tone of each moment.',
    detail: 'Growth plan and above',
    example: 'Subtle dip-to-black between B-roll clip and return to pastor',
  },
];

// ─── Template styles ──────────────────────────────────────────────────────────
const TEMPLATE_STYLES = [
  { name: 'Modern Minimal', desc: 'Clean white type on subtle gradient. Bold weight, generous spacing. Works for any denomination.', vibe: 'Clean · Contemporary' },
  { name: 'Bold Impact', desc: 'Large, condensed type with high-contrast color fills. Built for TikTok and Reels — stops the scroll.', vibe: 'High energy · Youth' },
  { name: 'Warm Classic', desc: 'Serif accents, warm color palette, script-style series titles. Feels established and trustworthy.', vibe: 'Traditional · Community' },
  { name: 'Dark Cinematic', desc: 'Dark background, dramatic lighting in B-roll, gold or white type. Broadcast television feel.', vibe: 'Premium · Large church' },
  { name: 'Earthy Organic', desc: 'Muted tones, textured backgrounds, hand-lettered style. Great for missional and community-focused churches.', vibe: 'Authentic · Missions' },
  { name: 'Custom Brand', desc: 'Upload your church\'s exact colors, fonts, and logo. Every template auto-applies your visual identity.', vibe: 'Your brand, exactly' },
];

export default function ChurchVideoMotionGraphicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
              Try Free
            </Link>
          </nav>
        </header>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Motion Graphics — AI Applied
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Broadcast-quality motion graphics.{' '}
              <span className="text-[#E8725A]">Zero designers needed.</span>
            </h1>

            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-3xl mx-auto">
              Animated captions, lower thirds, branded intros, quote cards, and smooth transitions —
              applied to every sermon clip automatically. The AI reads your transcript, detects
              the key moments, and chooses the right motion graphic treatment for each one.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-2xl mx-auto">
              What used to take a motion graphics designer 4–6 hours per video now happens in
              the same pipeline that clips and captions your sermon. One upload. Everything out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
                Try Free — First Sermon on Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#types" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
                <Layers className="w-4 h-4" />
                See All Motion Types
              </Link>
            </div>
            <p className="text-sm text-[#5c5c5c]">No credit card required &bull; No After Effects &bull; No motion designer</p>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '5', label: 'Motion graphic types applied automatically' },
                { num: '6', label: 'Template style presets to choose from' },
                { num: '4–6 hrs', label: 'Saved vs. hiring a motion designer per video' },
                { num: '0', label: 'After Effects, Premiere, or design tools needed' },
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
                The gap between what churches post and what looks professional
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Static white captions on a flat background used to be fine. In 2026, with platforms
                saturated with creator content, your sermon clips are competing against motion-graphic-rich
                videos from studios with design teams. You don&apos;t need a design team. You need AI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '$150–500',
                  label: 'Cost to hire a motion designer per video',
                  sub: 'Even one clip per week adds up to $600–2,000/month. Most churches simply go without.',
                },
                {
                  stat: '4–6 hrs',
                  label: 'Time to animate one sermon clip in After Effects',
                  sub: 'Motion graphics require specialized software skills your church media volunteer almost certainly doesn\'t have.',
                },
                {
                  stat: '0',
                  label: 'Other sermon platforms with motion graphics',
                  sub: 'OpusClip, SermonShots, and Headliner all output clips with static captions only. Motion graphics are ours to own.',
                },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">{item.stat}</p>
                  <p className="font-semibold text-white mb-3">{item.label}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MG Types ────────────────────────────────────────────────────── */}
        <section id="types" className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                What Gets Applied
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Five types of motion graphics — automatically
              </h2>
              <p className="text-lg text-[#5c5c5c] max-w-2xl mx-auto">
                Each type serves a different role in the clip. The AI applies all five in the right
                places, in the right order, with the right timing.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {MG_TYPES.map((type, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-xl transition-all grid md:grid-cols-3 gap-6 items-start">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-[#E8725A]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] mb-1">{type.name}</h3>
                      <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full font-medium">{type.detail}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{type.desc}</p>
                  <div className="bg-[#F5F1EB] rounded-xl p-4">
                    <p className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-1">Example</p>
                    <p className="text-xs text-[#5c5c5c] italic">{type.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Template styles ──────────────────────────────────────────────── */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                Template Styles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Choose your look. Set it once. Apply it forever.
              </h2>
              <p className="text-[#5c5c5c] max-w-xl mx-auto">
                Pick a template style that fits your church&apos;s visual identity — or upload your own
                brand assets and we&apos;ll build a custom preset for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {TEMPLATE_STYLES.map((style, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-lg transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">{style.name}</h3>
                  </div>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed mb-3">{style.desc}</p>
                  <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full font-medium">{style.vibe}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#2D2D2D] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <p className="text-white font-semibold mb-1">Want your exact church brand?</p>
                <p className="text-white/60 text-sm">Upload your logo, colors, and fonts. We&apos;ll build a custom motion graphics preset that matches your identity exactly — and apply it to every clip automatically.</p>
              </div>
              <Link href="/sign-up" className="flex-shrink-0 bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap">
                Set Up Custom Brand
              </Link>
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                One upload. Every motion graphic applied.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { num: '01', title: 'Upload your sermon', desc: 'YouTube link, MP4, Google Drive, or Dropbox. Same upload as always.' },
                { num: '02', title: 'Choose your template style', desc: 'Pick a preset or use your saved brand settings. One click — applies to every clip from this sermon.' },
                { num: '03', title: 'AI applies all five graphic types', desc: 'Animated captions sync to speech. Lower thirds appear at the open. Quote cards trigger on key moments. Intro and outro wrap the clip.' },
                { num: '04', title: 'Review, adjust, or auto-publish', desc: 'Scrub through each clip to review placements. Adjust animation speed or font size from the panel. Approve and post — or let Auto-Pilot handle it.' },
              ].map((step, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-[#E8E4DC]">
                  <span className="font-mono text-[#E8725A] font-bold text-sm block mb-4">{step.num}</span>
                  <h3 className="font-bold text-[#2D2D2D] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#F5F1EB] border-2 border-[#E8E4DC]">
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold mb-4">Without motion graphics</div>
                <div className="space-y-3">
                  {[
                    'Static white text, flat background',
                    'Same look as every other church post',
                    'No visual hierarchy — everything competes equally',
                    'No branded identity across clips',
                    'No quote emphasis — key moments are invisible',
                    'Looks like it was edited on a phone',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      <p className="text-sm text-[#5c5c5c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white border-2 border-[#E8725A]/30">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-xs font-semibold mb-4">With AI motion graphics</div>
                <div className="space-y-3">
                  {[
                    'Animated captions that move with the message',
                    'Instantly recognizable as your church\'s style',
                    'Visual hierarchy: key quotes pop, context supports',
                    'Consistent branded identity across every clip',
                    'Quote cards make shareworthy moments unmissable',
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

        {/* ── Competitor table ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#F5F1EB] px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">How We Compare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                The only sermon platform with built-in motion graphics
              </h2>
              <p className="text-[#5c5c5c] max-w-xl mx-auto">
                Static captions are table stakes in 2026. Motion graphics are the differentiator —
                and right now, only Sermon Clips has them built into the sermon clip workflow.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden">
              <div className="grid grid-cols-5 bg-[#2D2D2D] px-6 py-4 text-sm font-medium">
                <div className="col-span-2 text-white/60">Feature</div>
                <div className="text-center text-[#E8725A]">Sermon Clips</div>
                <div className="text-center text-white/40">SermonShots</div>
                <div className="text-center text-white/40">OpusClip</div>
              </div>
              <div className="divide-y divide-[#E8E4DC]">
                {[
                  ['Static captions', true, true, true],
                  ['Multi-platform export', true, true, true],
                  ['AI clip selection', true, true, true],
                  ['Animated (word-by-word) captions', true, false, false],
                  ['Branded lower thirds', true, false, false],
                  ['Quote card animation', true, false, false],
                  ['Branded intro & outro', true, false, false],
                  ['Custom brand preset', true, false, false],
                  ['B-roll auto-insert', true, false, false],
                  ['Translation & dubbing', true, false, false],
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
          </div>
        </section>

        {/* ── Plan breakdown ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">What you get on each plan</h2>
              <p className="text-[#5c5c5c]">Every plan includes animated captions. More motion graphic types unlock as you scale.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden">
              <div className="grid grid-cols-5 bg-[#2D2D2D] px-6 py-4 text-sm font-medium">
                <div className="col-span-2 text-white/60">Motion graphic type</div>
                <div className="text-center text-white/60 text-xs">Free</div>
                <div className="text-center text-white/60 text-xs">Starter / Growth</div>
                <div className="text-center text-[#E8725A] text-xs">Auto-Pilot</div>
              </div>
              {[
                ['Animated captions', true, true, true],
                ['Lower thirds (name & church)', false, true, true],
                ['Quote card animations', false, true, true],
                ['Branded intro & outro', false, true, true],
                ['Custom brand preset (colors, fonts, logo)', false, false, true],
                ['Logo animation upload', false, false, true],
              ].map(([feature, free, starter, auto], i) => (
                <div key={i} className={`grid grid-cols-5 px-6 py-4 items-center ${i % 2 === 0 ? '' : 'bg-[#F5F1EB]'}`}>
                  <div className="col-span-2 text-sm text-[#2D2D2D]">{feature}</div>
                  <div className="flex justify-center">{free ? <CheckCircle2 className="w-4 h-4 text-[#5c5c5c]/60" /> : <span className="text-[#2D2D2D]/20">—</span>}</div>
                  <div className="flex justify-center">{starter ? <CheckCircle2 className="w-4 h-4 text-[#5c5c5c]/60" /> : <span className="text-[#2D2D2D]/20">—</span>}</div>
                  <div className="flex justify-center">{auto ? <CheckCircle2 className="w-4 h-4 text-[#E8725A]" /> : <span className="text-[#2D2D2D]/20">—</span>}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">Questions about motion graphics</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What types of motion graphics does Sermon Clips apply?',
                  a: 'Five types: (1) animated captions — word-by-word synced to speech; (2) lower thirds — pastor and church name overlays; (3) quote cards — animated text treatments for key moments; (4) branded intro/outro; (5) transitions between B-roll and sermon footage. All applied automatically from your uploaded sermon.',
                },
                {
                  q: 'Can I use my own church branding?',
                  a: "Yes. Upload your church logo, set your brand colors and fonts, and every motion graphic template applies your visual identity automatically. Lower thirds use your church's exact name and style. Intros use your logo animation.",
                },
                {
                  q: 'Do I need After Effects or motion design skills?',
                  a: "No. Everything is automated — you choose a template style and the AI applies it. Optionally adjust colors, font size, animation speed, and positioning from a simple settings panel. No design software required.",
                },
                {
                  q: 'What makes animated captions different from static captions?',
                  a: "Static captions display the full sentence at once. Animated captions highlight each word or phrase as the pastor speaks — keeping the eye engaged and matching the visual rhythm to the audio. Research shows this increases viewer attention and retention.",
                },
                {
                  q: 'Are motion graphics included on all plans?',
                  a: "Animated captions are on every plan including Free. Lower thirds, quote cards, and branded intros are on Starter and above. Full custom brand preset (your exact colors, fonts, and logo) is on Growth and Auto-Pilot.",
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

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-[#E8725A]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
              Your message is powerful.
              <br />
              <span className="text-[#E8725A]">Your visuals should match.</span>
            </h2>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
              Upload Sunday&apos;s sermon. Get clips with animated captions, lower thirds, quote cards,
              and branded intros — ready in minutes, not hours.
            </p>
            <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
              Try Free — No Card Required
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#5c5c5c] mt-6">First sermon free &bull; Motion graphics included &bull; Cancel anytime</p>
          </div>
        </section>

        {/* ── Related ─────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">More exclusive features</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'AI B-Roll Generation', desc: '30,000+ assets matched to your sermon by AI — automatically inserted.', href: '/use-cases/ai-broll-church-video' },
                { title: 'Multilingual Sermon Clips', desc: 'Translation + AI dubbing in 30+ languages. No translators needed.', href: '/multilingual-church-video' },
                { title: 'Multi-Platform Distribution', desc: 'One clip → every format → every platform. Automatically.', href: '/use-cases/multi-platform' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="p-5 rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/40 hover:shadow-lg transition-all group">
                  <p className="font-semibold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-2">{link.title}</p>
                  <p className="text-sm text-[#5c5c5c]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
