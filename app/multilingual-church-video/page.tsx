import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Globe,
  Languages,
  CheckCircle2,
  Zap,
  Users,
  Volume2,
  Type,
  Mic,
  Play,
  Star,
} from 'lucide-react';
import EmailCapturePopup from '@/components/EmailCapturePopup';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Multilingual Sermon Clips — Translate & Dub Church Videos into 30+ Languages',
  description:
    'Automatically translate and dub your sermon videos into Spanish, French, Portuguese, Mandarin, Korean, and 25+ more languages. Reach every family in your congregation — in their heart language.',
  keywords:
    'multilingual sermon clips, sermon video translation, church video translation AI, translate sermon video, Spanish sermon clips, multilingual church video, AI sermon dubbing, church video subtitles translation, sermon translation software',
  openGraph: {
    title: 'Multilingual Sermon Clips — Reach Every Family in Their Heart Language',
    description:
      'AI-powered sermon translation and dubbing in 30+ languages. One upload, every language, automatically.',
    type: 'website',
    url: 'https://sermonclips.com/multilingual-church-video',
    images: [
      {
        url: 'https://sermonclips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Multilingual Sermon Clips — 30+ Languages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multilingual Sermon Clips — 30+ Languages',
    description: 'Translate and dub your church videos automatically. Reach every family in their heart language.',
  },
  alternates: {
    canonical: 'https://sermonclips.com/multilingual-church-video',
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Multilingual Sermon Clips — Translate & Dub Church Videos into 30+ Languages',
      description:
        'Automatically translate and dub your sermon videos into 30+ languages. Reach every family in your congregation in their heart language.',
      url: 'https://sermonclips.com/multilingual-church-video',
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
          name: 'How many languages does Sermon Clips support for sermon translation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermon Clips supports 30+ languages including Spanish, French, Portuguese, Mandarin Chinese, Cantonese, Korean, Tagalog, Arabic, Hindi, Swahili, German, Italian, Japanese, Vietnamese, and more. New languages are added regularly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the AI dubbing replace the pastor\'s voice or add a separate voice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermon Clips uses AI voice synthesis to dub the translated audio in a natural-sounding voice in the target language. You can choose from multiple voice options per language. The original audio track is retained for the original-language version.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I add translated captions without full audio dubbing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Translated captions (subtitles) are available on all plans that include translation. Full AI audio dubbing is available on the Auto-Pilot plan. You can publish the same clip with dubbed audio for some platforms and captioned-only for others.',
          },
        },
        {
          '@type': 'Question',
          name: 'How accurate is the sermon translation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our translation engine is trained on theological and pastoral vocabulary — not just general language models. Common sermon terms, Scripture references, and church-specific language are handled correctly. We recommend a native speaker review for high-stakes contexts like baptism or ordination services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which churches benefit most from multilingual sermon clips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Multilingual features are especially valuable for: immigrant-majority congregations, churches in multilingual cities, denominations with international church plants, missionaries posting content for native communities, and any church whose surrounding neighborhood speaks a different primary language than the congregation.',
          },
        },
      ],
    },
  ],
};

// ─── Language data ─────────────────────────────────────────────────────────────
const LANGUAGES = [
  { name: 'Spanish', flag: '🇪🇸', speakers: '500M+' },
  { name: 'Portuguese', flag: '🇧🇷', speakers: '260M+' },
  { name: 'French', flag: '🇫🇷', speakers: '280M+' },
  { name: 'Mandarin', flag: '🇨🇳', speakers: '920M+' },
  { name: 'Korean', flag: '🇰🇷', speakers: '77M+' },
  { name: 'Tagalog', flag: '🇵🇭', speakers: '90M+' },
  { name: 'Arabic', flag: '🇸🇦', speakers: '310M+' },
  { name: 'Hindi', flag: '🇮🇳', speakers: '600M+' },
  { name: 'Swahili', flag: '🇰🇪', speakers: '200M+' },
  { name: 'German', flag: '🇩🇪', speakers: '130M+' },
  { name: 'Italian', flag: '🇮🇹', speakers: '65M+' },
  { name: 'Japanese', flag: '🇯🇵', speakers: '125M+' },
  { name: 'Vietnamese', flag: '🇻🇳', speakers: '95M+' },
  { name: 'Haitian Creole', flag: '🇭🇹', speakers: '12M+' },
  { name: 'Amharic', flag: '🇪🇹', speakers: '57M+' },
  { name: 'Yoruba', flag: '🇳🇬', speakers: '45M+' },
  { name: 'Igbo', flag: '🇳🇬', speakers: '44M+' },
  { name: 'Zulu', flag: '🇿🇦', speakers: '12M+' },
  { name: 'Romanian', flag: '🇷🇴', speakers: '24M+' },
  { name: 'Polish', flag: '🇵🇱', speakers: '45M+' },
  { name: 'Russian', flag: '🇷🇺', speakers: '150M+' },
  { name: 'Ukrainian', flag: '🇺🇦', speakers: '40M+' },
  { name: 'Dutch', flag: '🇳🇱', speakers: '25M+' },
  { name: 'Turkish', flag: '🇹🇷', speakers: '88M+' },
  { name: 'Indonesian', flag: '🇮🇩', speakers: '270M+' },
  { name: 'Malay', flag: '🇲🇾', speakers: '33M+' },
  { name: 'Thai', flag: '🇹🇭', speakers: '61M+' },
  { name: 'Burmese', flag: '🇲🇲', speakers: '33M+' },
  { name: 'Khmer', flag: '🇰🇭', speakers: '16M+' },
  { name: 'Somali', flag: '🇸🇴', speakers: '22M+' },
  { name: '+ more', flag: '🌍', speakers: '' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MultilingualChurchVideoPage() {
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
              <Globe className="w-4 h-4" />
              Multilingual Sermon Translation
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Your sermon,{' '}
              <span className="text-[#E8725A]">every language</span>
              <br />
              automatically
            </h1>

            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-3xl mx-auto">
              Upload one sermon in English. Get translated clips in Spanish, Portuguese, Mandarin,
              Korean, Tagalog, and 25+ more — with dubbed audio and translated captions — ready to
              post in minutes.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-2xl mx-auto">
              No translators on payroll. No separate recording sessions. No extra hours.
              Just one upload that reaches every family in your congregation — in their heart language.
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
                href="#languages"
                className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
              >
                <Languages className="w-4 h-4" />
                See All 30+ Languages
              </Link>
            </div>
            <p className="text-sm text-[#5c5c5c]">No credit card required &bull; No translators needed &bull; Available on Auto-Pilot plan</p>
          </div>
        </section>

        {/* ── The Problem ─────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#2D2D2D] px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Every church has families who can&apos;t fully follow Sunday&apos;s message
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                The fastest-growing churches in the U.S. are multilingual. But most of them are still
                publishing clips in English only — leaving entire families underserved every single week.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '67M+',
                  label: 'Spanish speakers in the U.S.',
                  sub: 'The largest non-English language group — and massively underserved by church digital content.',
                },
                {
                  stat: '1 in 5',
                  label: 'U.S. households speak a language other than English at home',
                  sub: 'In cities like Miami, Houston, and LA, that number is closer to 1 in 2.',
                },
                {
                  stat: '0',
                  label: 'Competitors offering sermon translation + dubbing',
                  sub: "OpusClip, Headliner, and SermonShots don't offer this. It's ours to own.",
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

        {/* ── How It Works ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                One sermon in. Every language out.
              </h2>
              <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
                The entire pipeline is automated. You upload once and choose your target languages —
                everything else happens without you.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  num: '01',
                  icon: Play,
                  title: 'Upload your sermon',
                  desc: 'YouTube link, MP4, Google Drive, or Dropbox. Any format works.',
                },
                {
                  num: '02',
                  icon: Type,
                  title: 'AI transcribes & translates',
                  desc: 'Full transcript generated, then translated into your chosen languages with theological vocabulary intact.',
                },
                {
                  num: '03',
                  icon: Volume2,
                  title: 'AI dubs the audio',
                  desc: 'Natural-sounding voice synthesis in each target language. Choose from multiple voice options per language.',
                },
                {
                  num: '04',
                  icon: Languages,
                  title: 'Download or auto-post',
                  desc: "Clips with dubbed audio and translated captions — ready for each platform, in every language you chose.",
                },
              ].map((step, i) => (
                <div key={i} className="relative p-6 bg-white rounded-2xl border border-[#E8E4DC]">
                  <span className="font-mono text-[#E8725A] font-bold text-sm block mb-4">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#E8725A]" />
                  </div>
                  <h3 className="font-bold text-[#2D2D2D] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* What you get callout */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Type,
                  title: 'Translated captions',
                  desc: 'Word-for-word captions in the target language, timed precisely to the original audio. Available on all translation-enabled plans.',
                },
                {
                  icon: Mic,
                  title: 'AI audio dubbing',
                  desc: 'Full voice synthesis in the target language. The clip sounds native — not like a text-to-speech robot. Auto-Pilot plan.',
                },
                {
                  icon: Zap,
                  title: 'All formats, all languages',
                  desc: 'Every translated clip is exported in vertical (9:16), landscape (16:9), and square (1:1) — ready for every platform simultaneously.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F5F1EB] rounded-2xl border border-[#E8E4DC] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#E8725A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Language Grid ───────────────────────────────────────────────── */}
        <section id="languages" className="py-24 bg-white px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                30+ Languages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Your message crosses every language barrier
              </h2>
              <p className="text-[#5c5c5c] max-w-xl mx-auto">
                From Spanish to Swahili, from Mandarin to Amharic — if your congregation speaks it,
                we can reach them in it.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
              {LANGUAGES.map((lang, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-[#F5F1EB] rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{lang.flag}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#2D2D2D] truncate">{lang.name}</p>
                    {lang.speakers && (
                      <p className="text-xs text-[#5c5c5c]">{lang.speakers}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#5c5c5c]">
              Don&apos;t see your language?{' '}
              <Link href="mailto:hello@sermonclips.com" className="text-[#E8725A] hover:underline">
                Contact us
              </Link>{' '}
              — we add new languages regularly.
            </p>
          </div>
        </section>

        {/* ── Who It's For ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                Who It&apos;s For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Built for the reality of modern church communities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🌎',
                  title: 'Immigrant-majority congregations',
                  desc: "Your service is in English, but half your families are more comfortable in Spanish, Tagalog, or Portuguese. Now every family can watch the full sermon recap in their language — without hiring a translation team.",
                  example: 'Example: A Houston church uploads one sermon and auto-posts Spanish clips every Tuesday.',
                },
                {
                  icon: '🌍',
                  title: 'Churches with international outreach',
                  desc: 'You have church plants or partner churches in Mexico, Brazil, the Philippines, or West Africa. Send them the same content — automatically translated and dubbed — without coordinating separate recordings.',
                  example: 'Example: A missions-focused church in Atlanta shares dubbed clips with 3 partner churches in Nigeria and Ghana.',
                },
                {
                  icon: '🏙️',
                  title: 'Multilingual urban churches',
                  desc: "Your neighborhood speaks 12 languages. Your social content speaks one. Multilingual clips let you run geo-targeted social ads in Spanish, Mandarin, or Vietnamese — reaching your actual neighbors.",
                  example: 'Example: A Los Angeles church runs Spanish and Korean clips targeting specific zip codes.',
                },
                {
                  icon: '✈️',
                  title: 'Missionaries and diaspora ministers',
                  desc: "You're posting content for a community in their native language, but you're producing in English. AI dubbing bridges the gap without a second recording session or a translation contractor.",
                  example: 'Example: A missionary posting Swahili-dubbed clips for a Kenyan YouTube audience from the U.S.',
                },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/30 hover:shadow-xl transition-all">
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-sm text-[#E8725A] italic">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Competitive Comparison ──────────────────────────────────────── */}
        <section className="py-24 bg-[#F5F1EB] px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                How We Compare
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                The only sermon clipping platform with built-in translation
              </h2>
              <p className="text-[#5c5c5c] max-w-xl mx-auto">
                Every other tool in this space requires you to translate and dub separately — at
                significant cost and effort. We&apos;re the only one that does it automatically, inside
                the same workflow.
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
                  ['AI sermon clipping', true, true, true],
                  ['Automatic captions', true, true, true],
                  ['Multi-platform formats', true, true, true],
                  ['Auto-posting to social', true, false, true],
                  ['Translated captions (30+ languages)', true, false, false],
                  ['AI audio dubbing', true, false, false],
                  ['B-roll generation', true, false, false],
                  ['Motion graphics', true, false, false],
                  ['Church-specific AI (devotionals, blogs)', 'Soon', false, false],
                ].map(([feature, sc, ss, oc], i) => (
                  <div key={i} className="grid grid-cols-5 px-6 py-4 items-center">
                    <div className="col-span-2 text-sm text-[#2D2D2D]">{feature}</div>
                    <div className="flex justify-center">
                      {sc === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                      ) : sc === 'Soon' ? (
                        <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full font-medium">Soon</span>
                      ) : (
                        <span className="text-[#2D2D2D]/20 text-lg">—</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {ss === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#5c5c5c]/40" />
                      ) : (
                        <span className="text-[#2D2D2D]/20 text-lg">—</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {oc === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#5c5c5c]/40" />
                      ) : (
                        <span className="text-[#2D2D2D]/20 text-lg">—</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2D2D2D]">
                Questions about multilingual sermon clips
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How many languages does Sermon Clips support?',
                  a: 'Sermon Clips supports 30+ languages including Spanish, French, Portuguese, Mandarin Chinese, Cantonese, Korean, Tagalog, Arabic, Hindi, Swahili, German, Italian, Japanese, Vietnamese, Haitian Creole, Amharic, Yoruba, and more. New languages are added regularly.',
                },
                {
                  q: "Does the AI dubbing replace the pastor's voice or add a separate voice?",
                  a: 'AI dubbing adds a separate synthesized voice in the target language. The original English audio is preserved in the original-language version. For dubbed versions, you can choose from multiple voice styles per language.',
                },
                {
                  q: 'Can I add translated captions without full audio dubbing?',
                  a: 'Yes. Translated captions (subtitles only) are available on translation-enabled plans. Full AI audio dubbing is on the Auto-Pilot plan. You can also mix — dubbed audio for some platforms, caption-only for others.',
                },
                {
                  q: 'How accurate is the translation for theological terms?',
                  a: "Our translation engine is specifically tuned for pastoral and theological vocabulary — Scripture references, church-specific terms, and sermon language are handled correctly. For high-stakes services, we recommend a native speaker review.",
                },
                {
                  q: 'Which churches benefit most from this feature?',
                  a: 'Immigrant-majority congregations, multilingual urban churches, churches with international outreach, missionaries posting for diaspora communities, and any church whose surrounding neighborhood speaks a different primary language than the English-language service.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
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
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-[#E8725A]/10 flex items-center justify-center">
                <Globe className="w-10 h-10 text-[#E8725A]" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
              The Gospel has no language barrier.
              <br />
              <span className="text-[#E8725A]">Your clips shouldn&apos;t either.</span>
            </h2>
            <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
              Upload Sunday&apos;s sermon. We handle every language, every format, every platform —
              automatically.
            </p>

            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Try Free — No Card Required
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#5c5c5c] mt-6">
              First sermon free &bull; Translation included &bull; Cancel anytime
            </p>
          </div>
        </section>

        {/* ── Related ─────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">More from Sermon Clips</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: 'Multi-Platform Distribution',
                  desc: 'TikTok, Instagram, YouTube, Facebook — one clip, every format.',
                  href: '/use-cases/multi-platform',
                },
                {
                  title: 'How to Repurpose One Sermon Into 30+ Content Pieces',
                  desc: "Complete playbook for getting max value from every Sunday's message.",
                  href: '/blog/repurpose-sermon-content',
                },
                {
                  title: 'How to Turn a Sermon Into a 5-Day Devotional',
                  desc: 'Keep your congregation engaged all week — not just on Sundays.',
                  href: '/blog/how-to-turn-sermon-into-devotional',
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="p-5 rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/40 hover:shadow-lg transition-all group"
                >
                  <p className="font-semibold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-2">
                    {link.title}
                  </p>
                  <p className="text-sm text-[#5c5c5c]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
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
