import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Instagram,
  Youtube,
  MessageSquare,
  Copy,
  Zap,
  CheckCircle2,
  Hash,
} from 'lucide-react';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Church Social Media Captions: 50+ Templates + AI Generator Guide (2026)',
  description:
    'Ready-to-use social media captions for church sermon clips. Platform-by-platform templates for Instagram, TikTok, YouTube, Facebook, and LinkedIn — plus how AI generates them automatically.',
  keywords:
    'church social media captions, sermon caption generator, church instagram captions, social media captions for church, how to write church post captions, AI caption generator church, church tiktok captions, sermon post captions, church facebook captions',
  openGraph: {
    title: 'Church Social Media Captions: 50+ Templates + AI Generator Guide',
    description:
      '50+ fill-in-the-blank caption templates for sermon clips across every platform. Plus how AI writes them for you automatically.',
    type: 'article',
    url: 'https://sermonclips.com/blog/church-social-media-captions-ai',
    images: [
      {
        url: 'https://sermonclips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Church Social Media Captions — 50+ Templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Church Social Media Captions: 50+ Templates + AI Generator Guide',
    description: '50+ caption templates for sermon clips across Instagram, TikTok, YouTube, Facebook, and LinkedIn.',
  },
  alternates: {
    canonical: 'https://sermonclips.com/blog/church-social-media-captions-ai',
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Church Social Media Captions: 50+ Templates + AI Generator Guide (2026)',
      description:
        'Ready-to-use social media captions for church sermon clips across Instagram, TikTok, YouTube, Facebook, and LinkedIn.',
      datePublished: '2026-02-22',
      dateModified: '2026-02-22',
      author: { '@type': 'Organization', name: 'Sermon Clips', url: 'https://sermonclips.com' },
      publisher: {
        '@type': 'Organization',
        name: 'Sermon Clips',
        url: 'https://sermonclips.com',
        logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://sermonclips.com/blog/church-social-media-captions-ai',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long should church social media captions be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It depends on the platform. Instagram: 125–150 characters before the 'more' truncation (lead with the hook). TikTok: 100–150 characters. Facebook: up to 400 words for higher engagement. YouTube: 200–300 words including 2–3 keyword phrases. LinkedIn: 150–300 words with a professional tone. On every platform, put your strongest line first.",
          },
        },
        {
          '@type': 'Question',
          name: 'What hashtags should churches use on Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use a mix of 3 tiers: broad faith hashtags (#faith #church #christian — high volume, competitive), mid-tier sermon hashtags (#sundaysermon #sermonclips #churchonline — moderate volume), and niche community hashtags (#[yourcity]church #[denomination] #[seriestitle] — low volume, high relevance). Limit to 5–8 total; more than 10 looks spammy and can suppress reach.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI write social media captions for church clips?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Tools like Sermon Clips automatically generate platform-optimized social media captions from your sermon transcript. The AI identifies the clip\'s key quote or moment, writes a hook, adds relevant context, and formats it for each platform — including hashtag suggestions. This saves 20–40 minutes per clip per platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should every sermon clip have a different caption on each platform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes — each platform has a different audience, culture, and algorithm. A caption that performs on Facebook ('Join us this Sunday as Pastor [Name] continues our series on...') will feel out of place on TikTok (which rewards pattern interrupts and conversational hooks). Reusing the same caption across all platforms is one of the most common mistakes church social media teams make.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best caption formula for church TikTok?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "TikTok captions should open with a statement that creates tension or curiosity in the first 5 words. Formula: [Surprising claim or question] + [1-sentence context] + [soft CTA]. Example: 'God isn't keeping score. 🙏 Pastor [Name] said something in Sunday's message that stopped the whole room. Full sermon in bio. #church #faith #sundayvibes'",
          },
        },
      ],
    },
  ],
};

// ─── Caption template card ────────────────────────────────────────────────────
function TemplateCard({ template, platform, tone }: { template: string; platform: string; tone: string }) {
  return (
    <div className="bg-[#F5F1EB] rounded-xl border border-[#E8E4DC] p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider">{platform}</span>
        <span className="text-xs text-[#5c5c5c] bg-white px-2 py-0.5 rounded-full border border-[#E8E4DC]">{tone}</span>
      </div>
      <p className="text-sm text-[#2D2D2D] leading-relaxed font-mono whitespace-pre-line">{template}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ChurchSocialMediaCaptionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#F5F1EB]">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <Link href="/blog" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>
        </header>

        {/* ── Article ─────────────────────────────────────────────────────── */}
        <article className="pt-28 pb-20 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Meta row */}
            <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />February 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />12 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Church Social Media Captions: 50+ Templates + AI Generator Guide (2026)
            </h1>

            {/* Lede */}
            <p className="text-xl text-[#5c5c5c] mb-6 leading-relaxed">
              Your church just posted a sermon clip. The video is polished, the captions are on-screen,
              the audio is crisp. Then someone types: <em>&quot;Great message! 🙏&quot;</em> — copies it to
              every platform — and wonders why engagement is flat.
            </p>
            <p className="text-xl font-bold text-[#2D2D2D] mb-6">
              The post caption is not an afterthought. It&apos;s the hook.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
              On Instagram, TikTok, and Facebook, the first line of your caption appears before anyone
              taps &quot;more.&quot; It has to stop the scroll on its own. This guide gives you 50+
              fill-in-the-blank caption templates for every platform, a framework for writing your
              own, and a look at how AI can generate platform-optimized captions automatically from
              your sermon transcript.
            </p>

            {/* TOC */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
              <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">In this guide</h2>
              <ol className="space-y-2 text-[#5c5c5c] list-decimal list-inside">
                <li><a href="#why-captions-matter" className="hover:text-[#E8725A] transition-colors">Why your post caption matters more than you think</a></li>
                <li><a href="#anatomy" className="hover:text-[#E8725A] transition-colors">Anatomy of a high-performing church caption</a></li>
                <li><a href="#hooks" className="hover:text-[#E8725A] transition-colors">10 hook formulas that work for church content</a></li>
                <li><a href="#instagram" className="hover:text-[#E8725A] transition-colors">Instagram caption templates (12 templates)</a></li>
                <li><a href="#tiktok" className="hover:text-[#E8725A] transition-colors">TikTok caption templates (10 templates)</a></li>
                <li><a href="#facebook" className="hover:text-[#E8725A] transition-colors">Facebook caption templates (10 templates)</a></li>
                <li><a href="#youtube" className="hover:text-[#E8725A] transition-colors">YouTube description templates (8 templates)</a></li>
                <li><a href="#linkedin" className="hover:text-[#E8725A] transition-colors">LinkedIn caption templates (6 templates)</a></li>
                <li><a href="#hashtags" className="hover:text-[#E8725A] transition-colors">Hashtag strategy for churches</a></li>
                <li><a href="#ai" className="hover:text-[#E8725A] transition-colors">How AI generates all of this automatically</a></li>
                <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="why-captions-matter" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Why Your Post Caption Matters More Than You Think
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The algorithm on every major platform tracks one metric above all others:
                <strong className="text-[#2D2D2D]"> watch time.</strong> Your post caption directly
                controls whether someone taps play or keeps scrolling. A weak caption means your
                beautifully edited clip gets 3 seconds of attention. A strong one can double your
                average watch time before the video even starts — because the viewer already knows
                it&apos;s worth their attention.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '2.8×', label: 'More engagement for posts with strong opening hooks vs. generic captions (Sprout Social, 2025)' },
                  { stat: '125', label: 'Characters before Instagram truncates your caption — your hook must land here' },
                  { stat: '40%', label: 'Of TikTok viewers decide whether to watch based on caption alone, before the video auto-plays' },
                ].map((s, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl border border-[#E8E4DC] text-center">
                    <p className="text-3xl font-bold text-[#E8725A] mb-2">{s.stat}</p>
                    <p className="text-xs text-[#5c5c5c] leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                For church content, there&apos;s an additional layer: you&apos;re not just competing with
                other churches. You&apos;re competing with memes, news, sports, and family updates.
                Your caption needs to make a compelling case for why a faith-based video is worth
                30 seconds of someone&apos;s Sunday afternoon.
              </p>
            </section>

            {/* Section 2 */}
            <section id="anatomy" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Anatomy of a High-Performing Church Caption
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Every platform rewards slightly different caption structures, but the core anatomy is
                consistent. Think of it as four layers:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { num: '01', part: 'The Hook', desc: 'First 1–2 sentences. Creates curiosity, tension, or resonance. Must work as a standalone statement before anyone taps "more."', example: '"Most people are trying to earn what God is already freely giving them."' },
                  { num: '02', part: 'The Bridge', desc: 'One sentence connecting the hook to the video. Names the pastor and series. Gives the viewer permission to expect more.', example: '"Pastor [Name] unpacked this in Sunday\'s message on grace — and it reframed everything."' },
                  { num: '03', part: 'The Invite', desc: 'A soft, specific call to action. Not "watch our sermon" — something more personal.', example: '"Watch the full clip and let us know in the comments: has grace ever felt like something you had to earn?"' },
                  { num: '04', part: 'The Tags', desc: 'Hashtags, location tag, account tags. Platform-dependent. Never frontload these — they belong after the invite.', example: '#faith #grace #sundaysermon #[YourChurchName]' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 p-6 bg-white rounded-2xl border border-[#E8E4DC]">
                    <span className="font-mono text-[#E8725A] font-bold text-lg flex-shrink-0 mt-0.5">{item.num}</span>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">{item.part}</p>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-sm text-[#2D2D2D] italic bg-[#F5F1EB] px-3 py-2 rounded-lg">{item.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="hooks" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                10 Hook Formulas That Work for Church Content
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                A hook formula is a sentence structure you fill in with specifics from your sermon.
                Use these as starting points — then customize with the actual quote or moment from
                your clip:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { formula: 'The Reframe', template: '"Most people think [common belief]. But [surprising truth from the sermon]."', example: '"Most people think forgiveness is for the other person. But Pastor [Name] showed Sunday why it\'s actually for you."' },
                  { formula: 'The Conviction', template: '"If you\'ve ever [relatable struggle], this message is for you."', example: '"If you\'ve ever felt like God is tired of your mess, this message is for you."' },
                  { formula: 'The Quote Drop', template: '"\'[Pastor\'s exact quote from the clip].\' — Pastor [Name], [Series Name]"', example: '"\'Grace isn\'t a reward. It\'s a rescue.\' — Pastor [Name], Undeserved series."' },
                  { formula: 'The Question', template: '"What if [provocative assumption reversal]?"', example: '"What if the thing you\'ve been praying for is already on its way?"' },
                  { formula: 'The Permission', template: '"You don\'t have to [pressure people feel]. Here\'s why:"', example: '"You don\'t have to have it all together before you come to God. Here\'s why:"' },
                  { formula: 'The Stat or Fact', template: '"[Surprising fact or statistic]. [How this connects to the sermon]."', example: '"The average person spends 2.5 hours a day on social media. This clip is 47 seconds of something that actually matters."' },
                  { formula: 'The Confession', template: '"We don\'t talk about [taboo church topic] enough. So we did."', example: '"We don\'t talk about doubt in church enough. So Pastor [Name] did — and it was honest in the best way."' },
                  { formula: 'The Challenge', template: '"Try going [timeframe] without [thing] and see what changes. Pastor [Name] talked about this Sunday."', example: '"Try going one week speaking only encouragement about yourself and see what changes. Pastor [Name] talked about this Sunday."' },
                  { formula: 'The Contrast', template: '"[Platform/culture] says [X]. Sunday\'s message said something different."', example: '"The internet says hustle harder. Sunday\'s message said rest is an act of faith."' },
                  { formula: 'The Missed It', template: '"If you missed [service/date], this is the moment everyone\'s still talking about."', example: '"If you missed Sunday, this is the moment everyone\'s still talking about."' },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl border border-[#E8E4DC]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-[#E8725A] text-sm">{i + 1}.</span>
                      <span className="font-semibold text-[#2D2D2D] text-sm">{item.formula}</span>
                    </div>
                    <p className="text-sm text-[#5c5c5c] font-mono mb-2 bg-[#F5F1EB] px-3 py-2 rounded-lg">{item.template}</p>
                    <p className="text-xs text-[#5c5c5c] italic">{item.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 — Instagram */}
            <section id="instagram" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2 flex items-center gap-3">
                <Instagram className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Instagram Caption Templates
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                Instagram truncates after ~125 characters. Your hook must land in the first sentence.
                Save hashtags for the end or the first comment. Optimal length: 150–300 words.
              </p>
              <div className="space-y-4">
                {[
                  {
                    tone: 'Inspirational',
                    template: `"[Pastor's key quote from the clip]." 🙏

This hit different in Sunday's service.

Pastor [Name] was preaching through [Book/Series] and stopped mid-message to say this — and you could feel the room shift.

Watch the full clip and drop a 🙏 if this speaks to you.

[Church Name] | Link in bio for full sermon

#faith #churchonline #[seriestitle] #sundaysermon #[denomination]`,
                  },
                  {
                    tone: 'Conviction',
                    template: `We don't talk about [topic] enough in church. So we did. 👇

Pastor [Name] went there Sunday — no filter, no church-speak — and said the thing we all needed to hear.

If you've ever [relatable struggle], this 60 seconds is for you.

Full message linked in bio. We're [Church Name] in [City] and we'd love to have you join us.

#[city]church #faith #christian #sundayvibes`,
                  },
                  {
                    tone: 'Invitation',
                    template: `Sunday morning just ended, but the message doesn't have to. ✨

Catch this moment from today's service and share it with someone who needs it.

[Church Name] | [City] | Every Sunday at [times]
🔗 Full sermon in bio

#churchlife #sundaysermon #faith #christian`,
                  },
                  {
                    tone: 'Series promo',
                    template: `Week [X] of our [Series Name] series — and it just got even better.

Pastor [Name] unpacked [specific topic] today and honestly? The room was silent for about 10 seconds after this line.

If you're walking through [theme], watch this clip. Then come join us next Sunday as we continue.

[Church Name] | [City] | Sundays at [times]

#[seriestitle] #sermon #sundayservice #faith`,
                  },
                ].map((t, i) => (
                  <TemplateCard key={i} template={t.template} platform="Instagram" tone={t.tone} />
                ))}
              </div>
            </section>

            {/* Section 5 — TikTok */}
            <section id="tiktok" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#E8725A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg>
                TikTok Caption Templates
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                TikTok captions show under the video, not before it. Keep them under 150 characters.
                The hook is the first 5 words of the video itself — but the caption reinforces context
                and drives comments. Emoji use is native to the platform; don&apos;t shy away from it.
              </p>
              <div className="space-y-4">
                {[
                  { tone: 'Pattern interrupt', template: `God isn't keeping score. 🙏 This moment from Sunday stopped the whole room. Full sermon in bio. #church #faith #sundayvibes #[city]church` },
                  { tone: 'Relatable tension', template: `If prayer has ever felt impossible, this is for you. #church #christian #faith #sundaysermon #[pastorname]` },
                  { tone: 'Community', template: `POV: Your pastor says the thing you've been needing to hear 👇 #church #sermon #faith #sundaymessage` },
                  { tone: 'Curiosity', template: `He paused for 5 seconds after saying this. So did we. 😶 #sundaysermon #faith #churchclip #[seriestitle]` },
                  { tone: 'Direct quote', template: `"[Key quote]" — Pastor [Name] 🔥 New series starts next Sunday. #church #faith #christian #sermon` },
                ].map((t, i) => (
                  <TemplateCard key={i} template={t.template} platform="TikTok" tone={t.tone} />
                ))}
              </div>
            </section>

            {/* Section 6 — Facebook */}
            <section id="facebook" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#E8725A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook Caption Templates
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                Facebook rewards longer captions — 100–250 words consistently outperforms short posts.
                Your audience skews older than TikTok; tone can be warmer and more conversational.
                Ask a direct question at the end to drive comments.
              </p>
              <div className="space-y-4">
                {[
                  {
                    tone: 'Community warmth',
                    template: `What a morning at [Church Name]. 🙏

Pastor [Name] was preaching through [Book/Topic] today, and this moment — right around the [X]-minute mark — stopped us in our tracks.

"[Key quote from the clip]"

We've been sitting with this line all afternoon. If you were there, you know. If you weren't, this clip captures something worth watching.

Share this with someone in your life who might need to hear it this week. And if you're in [City], we'd love to have you join us in person next Sunday at [times].

👇 What part of today's message is staying with you? Drop it in the comments.`,
                  },
                  {
                    tone: 'Soft invite',
                    template: `If you've been meaning to check out [Church Name], this Sunday would be a great week to come. 

We're in week [X] of our [Series Name] series — Pastor [Name] is teaching through [Book/Topic] and every week it gets more relevant.

Here's a clip from today's message to give you a feel for what we're about. No pressure, no program — just genuine faith conversations with real people.

Service times: [times] | [Address]

See you Sunday? 👋`,
                  },
                  {
                    tone: 'Midweek share',
                    template: `📺 In case you missed Sunday — here's the moment everyone keeps talking about.

Pastor [Name] was unpacking [topic] and said something that reframed the whole conversation for a lot of people in the room.

Catch the full message on our website (link below). And if this speaks to something you're walking through, drop a comment — we read every one.

[Website link] | [Church Name]`,
                  },
                ].map((t, i) => (
                  <TemplateCard key={i} template={t.template} platform="Facebook" tone={t.tone} />
                ))}
              </div>
            </section>

            {/* Section 7 — YouTube */}
            <section id="youtube" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2 flex items-center gap-3">
                <Youtube className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                YouTube Description Templates
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                YouTube descriptions are SEO documents as much as they are captions. Include your
                target keywords naturally in the first 2–3 sentences (these appear in search results).
                Add timestamps, links to the full sermon, and social handles.
              </p>
              <div className="space-y-4">
                {[
                  {
                    tone: 'Clip description',
                    template: `In this clip from [Church Name], Pastor [Name] explains [topic] from [Book Chapter:Verse].

This moment is from our [Series Name] series — a [X]-week journey through [Book/Theme]. In this clip, Pastor [Name] addresses [specific point] and explains why [key insight].

📖 Scripture: [Book Chapter:Verse]
📅 Preached: [Date]
⛪ Church: [Church Name], [City]

🔗 Watch the full sermon: [link]
🔔 Subscribe for weekly sermon clips: [channel link]
📱 Follow us: [social handles]

#[keyword] #sermon #[church name] #[series name] #[city]church`,
                  },
                  {
                    tone: 'Series episode',
                    template: `Week [X] of [Series Name] — [Episode Title]

In this message, Pastor [Name] continues our [Series Name] series by exploring [topic from Book/Passage]. Key themes: [theme 1], [theme 2], [theme 3].

This is a clip from the full [X]-minute sermon. Watch the complete message at [link].

TIMESTAMPS (full sermon):
0:00 Introduction
[X]:00 [Section name]
[X]:00 [Section name]
[X]:00 Conclusion & Prayer

[Church Name] | [City] | Sundays at [times]
Website: [url] | Instagram: [handle] | Facebook: [handle]`,
                  },
                ].map((t, i) => (
                  <TemplateCard key={i} template={t.template} platform="YouTube" tone={t.tone} />
                ))}
              </div>
            </section>

            {/* Section 8 — LinkedIn */}
            <section id="linkedin" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#E8725A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Caption Templates
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                LinkedIn reaches church staff, denominational leaders, ministry school students, and
                faith-adjacent professionals. Tone should be reflective and leadership-focused. Lead
                with an insight, not a promotion.
              </p>
              <div className="space-y-4">
                {[
                  {
                    tone: 'Leadership insight',
                    template: `Something Pastor [Name] said Sunday has been sitting with me all week.

"[Key quote]"

In a culture that rewards constant hustle, this framing felt countercultural — and necessary. The full message is worth 45 minutes of your time. Clip below.

[Church Name] is exploring [theme] throughout [month]. If you're in [City], we'd love to have you.`,
                  },
                  {
                    tone: 'Faith + work crossover',
                    template: `One of the most practical leadership principles I've heard came from Sunday's sermon.

Pastor [Name] was talking about [topic] — and the application to how we lead teams, manage conflict, and maintain integrity was striking.

This isn't just a church clip. It's a leadership conversation. Watch the 60 seconds below and tell me if you agree.

#leadership #faith #[seriestitle]`,
                  },
                ].map((t, i) => (
                  <TemplateCard key={i} template={t.template} platform="LinkedIn" tone={t.tone} />
                ))}
              </div>
            </section>

            {/* Section 9 — Hashtags */}
            <section id="hashtags" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Hash className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Hashtag Strategy for Churches
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Use 5–8 hashtags maximum on Instagram. More than 10 signals spam to the algorithm.
                Layer three tiers for best reach:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    tier: 'Tier 1 — Broad',
                    desc: 'High volume, highly competitive. Don\'t expect reach from these, but they signal category.',
                    tags: ['#faith', '#church', '#christian', '#jesus', '#god', '#worship'],
                  },
                  {
                    tier: 'Tier 2 — Sermon-specific',
                    desc: 'Medium volume. These connect you with people actively searching church content.',
                    tags: ['#sundaysermon', '#sermonclips', '#churchonline', '#biblestory', '#sundayservice', '#preaching'],
                  },
                  {
                    tier: 'Tier 3 — Niche',
                    desc: 'Low volume, high relevance. These are where you actually get discovered by the right people.',
                    tags: ['#[yourcity]church', '#[denomination]', '#[seriestitle]', '#[pastorname]', '#[yourchurchname]'],
                  },
                ].map((t, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl border border-[#E8E4DC]">
                    <p className="font-semibold text-[#2D2D2D] mb-1 text-sm">{t.tier}</p>
                    <p className="text-xs text-[#5c5c5c] mb-3">{t.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {t.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#2D2D2D] rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Pro tip: the first-comment strategy</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  On Instagram, post your main caption clean (no hashtags visible), then immediately
                  drop all hashtags in the first comment. This keeps your caption readable while still
                  getting the hashtag reach. Most scheduling tools (Buffer, Later) do this automatically.
                </p>
              </div>
            </section>

            {/* Section 10 — AI */}
            <section id="ai" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                How AI Generates All of This Automatically
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The templates above will save you time. But writing a unique caption for every
                clip, for every platform, every week — that&apos;s still 2–3 hours of work your
                communications team shouldn&apos;t have to do manually.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Sermon Clips generates platform-optimized social media captions automatically from
                your sermon transcript. Here&apos;s what the AI does with each clip:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Reads the full transcript and identifies the clip\'s key quote and emotional moment',
                  'Writes a platform-specific hook using the best formula for that clip\'s tone',
                  'Drafts the bridge and invite sections tailored to your church name and series',
                  'Generates 3 caption variants per platform (so you can choose or A/B test)',
                  'Suggests a hashtag set based on your church\'s location and content category',
                  'Outputs everything formatted and ready to copy-paste or auto-post',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                    <p className="text-[#5c5c5c]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden mb-8">
                <div className="grid grid-cols-3 bg-[#2D2D2D] px-6 py-3 text-sm font-medium">
                  <div className="text-white/60">Task</div>
                  <div className="text-center text-white/40">Manual</div>
                  <div className="text-center text-[#E8725A]">Sermon Clips AI</div>
                </div>
                {[
                  ['Write 1 Instagram caption', '10–15 min', 'Automatic'],
                  ['Write 1 TikTok caption', '5–10 min', 'Automatic'],
                  ['Write 1 Facebook caption', '10–20 min', 'Automatic'],
                  ['Write 1 YouTube description', '15–20 min', 'Automatic'],
                  ['Generate hashtag set', '5–10 min', 'Automatic'],
                  ['Write 3 clips × 4 platforms', '3–4 hours/week', '< 5 minutes'],
                ].map(([task, manual, ai], i) => (
                  <div key={i} className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EB]'}`}>
                    <p className="text-sm text-[#2D2D2D]">{task}</p>
                    <p className="text-sm text-center text-[#5c5c5c]">{manual}</p>
                    <p className="text-sm text-center text-[#E8725A] font-medium">{ai}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8725A]/10 rounded-2xl p-8 text-center border border-[#E8725A]/20">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
                  Try it on your next sermon
                </h3>
                <p className="text-[#5c5c5c] mb-6 max-w-md mx-auto">
                  Upload Sunday&apos;s sermon. Get clips, captions, hashtags, and auto-posting — all
                  in under 10 minutes. First sermon is free.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30"
                >
                  Try Free — No Card Required
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How long should church social media captions be?',
                    a: "Instagram: 125–150 characters before truncation (lead with the hook). TikTok: 100–150 characters. Facebook: up to 400 words for higher engagement. YouTube: 200–300 words including 2–3 keyword phrases. LinkedIn: 150–300 words. On every platform, put your strongest line first.",
                  },
                  {
                    q: 'What hashtags should churches use on Instagram?',
                    a: "Mix 3 tiers: broad faith hashtags (#faith #church #christian), mid-tier sermon hashtags (#sundaysermon #churchonline), and niche community tags (#[yourcity]church #[seriestitle]). Limit to 5–8 total. More than 10 looks spammy and can suppress reach.",
                  },
                  {
                    q: 'Can AI write social media captions for church clips?',
                    a: "Yes. Sermon Clips automatically generates platform-optimized captions from your sermon transcript — including hook, context, CTA, and hashtags — for Instagram, TikTok, Facebook, YouTube, and LinkedIn. Saves 2–4 hours per week.",
                  },
                  {
                    q: 'Should every platform get a different caption?',
                    a: "Yes. Each platform has a different audience, culture, and algorithm. A Facebook caption ('Join us this Sunday as Pastor...') feels out of place on TikTok. Reusing the same caption across all platforms is one of the most common church social media mistakes.",
                  },
                  {
                    q: 'What is the best caption formula for church TikTok?',
                    a: "Open with a statement that creates tension or curiosity in the first 5 words. Formula: [Surprising claim] + [1-sentence context] + [soft CTA]. Example: 'God isn't keeping score. 🙏 Pastor [Name] said something in Sunday's message that stopped the whole room. Full sermon in bio.' #church #faith",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                    <h3 className="font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                    <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Keep reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'How to Repurpose One Sermon Into 30+ Pieces of Content', href: '/blog/repurpose-sermon-content', tag: 'Content Strategy' },
                  { title: 'How to Make Sermon Clips for Social Media', href: '/blog/how-to-make-sermon-clips', tag: 'Clips' },
                  { title: 'How to Turn a Sermon Into a 5-Day Devotional', href: '/blog/how-to-turn-sermon-into-devotional', tag: 'Devotionals' },
                  { title: 'Sermon Clips for Instagram Reels', href: '/blog/sermon-clips-for-instagram-reels', tag: 'Instagram' },
                ].map((post, i) => (
                  <Link key={i} href={post.href} className="p-5 bg-white rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/40 hover:shadow-lg transition-all group">
                    <span className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider">{post.tag}</span>
                    <p className="font-semibold text-[#2D2D2D] mt-2 group-hover:text-[#E8725A] transition-colors">{post.title}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
