import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  Play,
  Scissors,
  Video,
  Smartphone,
  TrendingUp,
  Users,
  Lightbulb,
  Zap,
  Target,
  FileVideo,
  Share2,
} from 'lucide-react';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'How to Create Sermon Clips: The Complete 2026 Guide',
  description:
    "Learn how to create sermon clips that grow your church's reach. Complete workflow: recording → transcription → editing → distribution. Platform specs, AI tools, and real church case studies.",
  keywords:
    'how to make sermon clips, sermon clips, create sermon clips, sermon clips for social media, church video clips, sermon clip maker',
  openGraph: {
    title: 'How to Create Sermon Clips: The Complete 2026 Guide',
    description:
      'Complete guide to creating viral sermon clips. Platform specs, tools comparison, church case studies, and step-by-step workflow.',
    type: 'article',
    url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips',
    images: [
      {
        url: 'https://sermon-clips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Create Sermon Clips — Complete 2026 Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Sermon Clips: The Complete 2026 Guide',
    description:
      'Complete guide to creating viral sermon clips — platform specs, AI tools, and real church case studies.',
  },
  alternates: {
    canonical: 'https://sermon-clips.com/blog/how-to-make-sermon-clips',
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create Sermon Clips',
  description:
    'Complete workflow for turning your weekly sermons into scroll-stopping social media clips — from recording setup to viral distribution.',
  image: 'https://sermon-clips.com/og-image.jpg',
  totalTime: 'PT2H',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Sermon recording (1080p minimum)' },
    { '@type': 'HowToSupply', name: 'Lavalier / lapel microphone' },
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Video editing software (CapCut, Descript, or Sermon Clips AI)',
    },
    { '@type': 'HowToTool', name: 'Transcription tool (sermon-transcription.com)' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Record with quality audio',
      text: 'Capture your sermon in landscape (16:9) at minimum 1080p. Use a lapel mic on the pastor for clear audio. Frame chest-up with room to crop for vertical.',
      url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips#recording',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Transcribe the message',
      text: 'Upload to a transcription tool to get a searchable text document. This makes finding powerful quotes instant and provides ready-made captions.',
      url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips#transcription',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Identify highlight moments',
      text: 'Scan your transcript for hook statements, quotable truths, vulnerable moments, practical applications, story peaks, and congregation reactions. Mark 4–6 potential clips.',
      url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips#highlights',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Cut, crop to 9:16, and add captions',
      text: 'Extract 20–45 second segments, crop to vertical, auto-generate captions, then review for accuracy. Captions are non-negotiable — 85% of social video is watched without sound.',
      url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips#editing',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Export and distribute',
      text: 'Export at 1080×1920, 30fps, MP4. Post natively to TikTok, Instagram Reels, YouTube Shorts, and Facebook Reels. Engage with comments in the first hour.',
      url: 'https://sermon-clips.com/blog/how-to-make-sermon-clips#distribution',
    },
  ],
};

// ─── CTA Component ─────────────────────────────────────────────────────────
function InlineCTA({
  headline,
  body,
  cta,
}: {
  headline: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="not-prose my-10 bg-[#E8725A]/10 border border-[#E8725A]/30 rounded-2xl p-8 text-center">
      <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{headline}</h3>
      <p className="text-[#5c5c5c] mb-5">{body}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-7 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
      >
        {cta} <Play className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HowToMakeSermonClipsPage() {
  return (
    <>
      {/* JSON-LD */}
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
                <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">
                  Clips
                </span>
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

        {/* ── Article ─────────────────────────────────────────────────────── */}
        <article className="pt-28 pb-20 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Meta row */}
            <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                February 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              How to Make Sermon Clips for Social Media: The Ultimate 2026 Guide
            </h1>

            {/* Lede */}
            <p className="text-xl text-[#5c5c5c] mb-6 leading-relaxed">
              Your pastor just delivered a message that could change someone&apos;s life. But if that
              message stays trapped in a 45-minute YouTube video, it might never reach the person
              who needs it most.
            </p>
            <p className="text-xl font-bold text-[#2D2D2D] mb-6">That&apos;s where sermon clips come in.</p>
            <p className="text-lg text-[#5c5c5c] mb-6 leading-relaxed">
              Churches that master the art of sermon clips are seeing explosive growth — not just in
              followers, but in actual visitors walking through their doors. Elevation Church reaches
              millions weekly through short-form content. Transformation Church&apos;s clips regularly
              hit 10+ million views. Life.Church has built an entire digital ministry strategy
              around repurposed sermon content.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
              The good news? You don&apos;t need a massive production team or Hollywood budget. In 2026,
              creating powerful sermon clips is more accessible than ever. This guide walks through
              the complete workflow — from recording your sermon to watching your clips go viral.
            </p>

            {/* Table of Contents */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
              <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You&apos;ll Learn</h2>
              <ol className="space-y-2 text-[#5c5c5c] list-decimal list-inside">
                <li><a href="#why-clips-matter" className="hover:text-[#E8725A] transition-colors">Why Sermon Clips Matter in 2026</a></li>
                <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">The Complete Sermon Clip Workflow</a></li>
                <li><a href="#platform-guides" className="hover:text-[#E8725A] transition-colors">Platform-Specific Guides</a></li>
                <li><a href="#tools" className="hover:text-[#E8725A] transition-colors">Tools Comparison: Manual vs. AI Editing</a></li>
                <li><a href="#best-practices" className="hover:text-[#E8725A] transition-colors">Best Practices for Viral Sermon Clips</a></li>
                <li><a href="#content-strategy" className="hover:text-[#E8725A] transition-colors">Content Strategy: Types of Sermon Highlights</a></li>
                <li><a href="#tech-specs" className="hover:text-[#E8725A] transition-colors">Technical Specifications</a></li>
                <li><a href="#engagement" className="hover:text-[#E8725A] transition-colors">Engagement Tactics That Actually Work</a></li>
                <li><a href="#analytics" className="hover:text-[#E8725A] transition-colors">Analytics and Growth Benchmarks</a></li>
                <li><a href="#case-studies" className="hover:text-[#E8725A] transition-colors">Case Studies: Churches Winning with Sermon Clips</a></li>
                <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">Frequently Asked Questions</a></li>
              </ol>
            </div>

            {/* ── Section 1: Why Clips Matter ─────────────────────────────── */}
            <section id="why-clips-matter" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Why Sermon Clips Matter in 2026
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Here&apos;s a reality check: <strong className="text-[#2D2D2D]">the average attention span on social media is 8 seconds.</strong> That
                45-minute sermon — no matter how anointed — isn&apos;t getting watched in full by someone
                scrolling Instagram at 11 PM.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                But a 30-second clip with a powerful hook? That stops thumbs. That gets shared. That plants seeds.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The Numbers Don&apos;t Lie</h3>
              <ul className="space-y-3 mb-8">
                {[
                  '91% of consumers want to see more video content from brands — including churches.',
                  'Short-form video has the highest ROI of any content type.',
                  'TikTok and Instagram Reels are where Gen Z and Millennials discover new content — including spiritual content.',
                  'Churches using consistent sermon clips report 3–5× higher engagement than those posting only full-length services.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5c5c5c]">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Beyond Vanity Metrics</h3>
              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Views are nice. Here&apos;s what actually matters:</p>
                <ul className="space-y-2 text-[#5c5c5c]">
                  <li><strong className="text-[#2D2D2D]">First-time visitors</strong> who say &ldquo;I saw your pastor on TikTok.&rdquo;</li>
                  <li><strong className="text-[#2D2D2D]">Salvations</strong> from people who found hope in a 60-second clip.</li>
                  <li><strong className="text-[#2D2D2D]">Community building</strong> with members sharing clips to their networks.</li>
                  <li><strong className="text-[#2D2D2D]">Discipleship</strong> opportunities when clips spark conversations.</li>
                </ul>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                Your sermon clips aren&apos;t just content — they&apos;re digital missionaries going where your building can&apos;t.
              </p>
            </section>

            {/* CTA #1 */}
            <InlineCTA
              headline="Ready to create your first sermon clip?"
              body="Upload your sermon recording and let our AI identify the most shareable moments — automatically cropped, captioned, and ready for every platform."
              cta="Try Sermon Clips Free"
            />

            {/* ── Section 2: Workflow ──────────────────────────────────────── */}
            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                The Complete Sermon Clip Workflow
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Creating sermon clips doesn&apos;t have to be chaotic. Here&apos;s the streamlined workflow used by the most effective church media teams:
              </p>

              <div className="space-y-10">

                {/* Step 1 */}
                <div id="recording" className="relative pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-sm">1</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Recording — Setting Yourself Up for Success</h3>
                  <p className="text-[#5c5c5c] mb-4">Everything starts with a clean recording. Garbage in, garbage out.</p>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] mb-3">Essential Recording Setup:</p>
                    <ul className="space-y-2 text-[#5c5c5c] text-sm">
                      <li><strong className="text-[#2D2D2D]">Camera:</strong> At minimum 1080p (4K preferred for cropping flexibility)</li>
                      <li><strong className="text-[#2D2D2D]">Audio:</strong> Lapel mic on the pastor + room audio backup</li>
                      <li><strong className="text-[#2D2D2D]">Framing:</strong> Capture from chest up with room to crop for vertical</li>
                      <li><strong className="text-[#2D2D2D]">Lighting:</strong> Consistent, avoiding harsh shadows on the face</li>
                    </ul>
                    <p className="mt-4 text-sm text-[#E8725A] font-medium">
                      Pro Tip: Record in landscape (16:9) but frame your shot knowing you&apos;ll crop to vertical (9:16). Keep your speaker centered with headroom.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div id="transcription" className="relative pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-sm">2</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Transcription — The Hidden Superpower</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Here&apos;s the secret weapon most churches overlook: <strong className="text-[#2D2D2D]">transcription makes everything easier.</strong> When you transcribe your sermon, you can search for powerful quotes instantly, identify clip-worthy moments without watching the full video, and your captions are already done — crucial for accessibility and silent viewing.
                  </p>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] mb-3">Tools for Transcription:</p>
                    <ul className="space-y-2 text-[#5c5c5c] text-sm">
                      <li><a href="https://sermon-transcription.com" className="text-[#E8725A] underline">sermon-transcription.com</a> — Built specifically for church content with speaker identification</li>
                      <li>Descript — Transcription + editing combo</li>
                      <li>Otter.ai — Fast, affordable transcription</li>
                      <li>YouTube Auto-Captions — Free but requires cleanup</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div id="highlights" className="relative pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-sm">3</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Identifying Highlights</h3>
                  <p className="text-[#5c5c5c] mb-4">Now for the gold mining. You&apos;re looking for moments that:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Stand alone without context',
                      'Deliver a complete thought in 15–60 seconds',
                      'Evoke emotion (inspiration, conviction, humor, hope)',
                      'Have a natural hook in the first 3 seconds',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#5c5c5c]">
                        <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] mb-2">Where to Look:</p>
                    <ul className="space-y-1 text-[#5c5c5c] text-sm">
                      <li>→ Opening illustrations or stories</li>
                      <li>→ Key points delivered with passion</li>
                      <li>→ Memorable one-liners and quotable moments</li>
                      <li>→ Practical application statements</li>
                      <li>→ Altar call or invitation moments</li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div id="editing" className="relative pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-sm">4</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Creating the Clips</h3>
                  <p className="text-[#5c5c5c] mb-4">This is where raw footage becomes scroll-stopping content. The anatomy of a perfect sermon clip:</p>
                  <div className="space-y-3 mb-5">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-[#2D2D2D]">Hook (0–3 seconds)</p>
                      <p className="text-[#5c5c5c] text-sm">The most compelling moment FIRST. No slow builds.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-[#2D2D2D]">Content (3–45 seconds)</p>
                      <p className="text-[#5c5c5c] text-sm">The meat of the message delivered with energy.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-[#2D2D2D]">Payoff (45–60 seconds)</p>
                      <p className="text-[#5c5c5c] text-sm">A conclusion that lands — optional but powerful when present.</p>
                    </div>
                  </div>
                  <div className="bg-[#2D2D2D]/5 rounded-xl p-5">
                    <p className="font-semibold text-[#2D2D2D] mb-2">Essential Edits:</p>
                    <ul className="space-y-1 text-[#5c5c5c] text-sm">
                      <li>• Crop to 9:16 vertical (reframe to keep speaker centered)</li>
                      <li>• Add captions (80% watch without sound)</li>
                      <li>• Include subtle branding (church logo, handles)</li>
                      <li>• Clean up audio (normalize, remove background noise)</li>
                      <li>• Add background music if appropriate (subtle, not distracting)</li>
                    </ul>
                  </div>
                </div>

                {/* Step 5 */}
                <div id="distribution" className="relative pl-14">
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-sm">5</div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Distribution — One Clip, Multiple Platforms</h3>
                  <p className="text-[#5c5c5c] mb-4">Work smarter, not harder. One sermon can yield 5–10 clips across every platform.</p>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] mb-3">Distribution Checklist:</p>
                    <ul className="space-y-2 text-[#5c5c5c] text-sm">
                      {[
                        'Instagram Reels (primary discovery platform)',
                        'TikTok (younger demographic, viral potential)',
                        'YouTube Shorts (algorithm pushes these hard)',
                        'Facebook Reels (surprisingly effective for 35+)',
                        'Church story / status features',
                        'Embed in email newsletters',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded border border-[#E8725A] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* ── Section 3: Platform Guides ───────────────────────────────── */}
            <section id="platform-guides" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Platform-Specific Guides
              </h2>
              <p className="text-[#5c5c5c] mb-8">Each platform has quirks. Here&apos;s how to optimize for each:</p>

              <div className="space-y-6">

                {/* Instagram */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Instagram Reels</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5c5c5c] mb-4">
                    <div>
                      <p><strong>Length:</strong> Up to 90 seconds (60s optimal)</p>
                      <p><strong>Aspect ratio:</strong> 9:16 vertical</p>
                      <p><strong>Resolution:</strong> 1080×1920</p>
                      <p><strong>Max file size:</strong> 4 GB</p>
                    </div>
                    <div>
                      <p><strong>Best times:</strong> Tue–Fri, 11 AM–1 PM and 7–9 PM</p>
                      <p><strong>Hashtags:</strong> 3–5 targeted tags</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">What works:</strong> Emotional moments, quotable lines, pastor&apos;s personality shining through. Use the &ldquo;Add Topics&rdquo; feature for discoverability. Engage in comments within the first hour.
                  </p>
                </div>

                {/* TikTok */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">TikTok</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5c5c5c] mb-4">
                    <div>
                      <p><strong>Length:</strong> 15 seconds–10 minutes (15–60s optimal)</p>
                      <p><strong>Aspect ratio:</strong> 9:16 vertical</p>
                      <p><strong>Resolution:</strong> 1080×1920</p>
                      <p><strong>Max file size:</strong> 287 MB (mobile), 500 MB (desktop)</p>
                    </div>
                    <div>
                      <p><strong>Best times:</strong> Tue–Thu, 7–9 PM</p>
                      <p><strong>Strategy:</strong> Hook in first second (seriously — ONE second)</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">What works:</strong> Unpolished authenticity, humor, controversy-free hot takes, relationship advice, anxiety/mental health content. Post consistently (daily if possible).
                  </p>
                </div>

                {/* YouTube Shorts */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">YouTube Shorts</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5c5c5c] mb-4">
                    <div>
                      <p><strong>Length:</strong> Up to 3 minutes (60s or less recommended)</p>
                      <p><strong>Aspect ratio:</strong> 9:16 vertical</p>
                      <p><strong>Resolution:</strong> 1080×1920 minimum</p>
                    </div>
                    <div>
                      <p><strong>Best times:</strong> Weekday evenings</p>
                      <p><strong>Tip:</strong> Hashtag #Shorts still helps discovery</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">What works:</strong> Teaching moments, verse explanations, apologetics, sermon series teasers. Shorts feed into your main channel growth. Link to full sermon in comments.
                  </p>
                </div>

                {/* Facebook Reels */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Facebook Reels</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5c5c5c] mb-4">
                    <div>
                      <p><strong>Length:</strong> Up to 90 seconds</p>
                      <p><strong>Aspect ratio:</strong> 9:16 vertical</p>
                      <p><strong>Resolution:</strong> 1080×1920</p>
                    </div>
                    <div>
                      <p><strong>Best times:</strong> Wed–Fri, 1–4 PM</p>
                      <p><strong>Audience:</strong> Older demographic (35+)</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">What works:</strong> Family-focused content, practical life advice, inspirational quotes, testimony clips. Facebook&apos;s algorithm is pushing Reels hard — use this window. Captions are crucial; more sound-off viewers here.
                  </p>
                </div>

              </div>
            </section>

            {/* ── Section 4: Tools ─────────────────────────────────────────── */}
            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <FileVideo className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Tools Comparison: Manual vs. AI Editing
              </h2>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Manual Editing Tools</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    name: 'iMovie',
                    cost: 'Free (Mac)',
                    pros: ['Free', 'Easy to learn', 'Good for basic cuts'],
                    cons: ['Limited captions', 'Time-consuming at volume'],
                  },
                  {
                    name: 'Adobe Premiere Pro',
                    cost: '$22.99/month',
                    pros: ['Industry standard', 'Powerful auto-captioning', 'Templates'],
                    cons: ['Steep learning curve', 'Overkill for simple clips'],
                  },
                  {
                    name: 'CapCut',
                    cost: 'Free',
                    pros: ['Made for short-form', 'Excellent auto-captions', 'Mobile + desktop'],
                    cons: ['Some premium features locked'],
                  },
                  {
                    name: 'DaVinci Resolve',
                    cost: 'Free',
                    pros: ['Professional-grade', 'Best color grading', 'Fairlight audio'],
                    cons: ['Resource-intensive', 'Complex for beginners'],
                  },
                ].map((tool) => (
                  <div key={tool.name} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-[#2D2D2D]">{tool.name}</h4>
                      <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full">{tool.cost}</span>
                    </div>
                    <ul className="text-sm space-y-1 mb-2">
                      {tool.pros.map((p) => (
                        <li key={p} className="text-green-700">✓ {p}</li>
                      ))}
                    </ul>
                    <ul className="text-sm space-y-1">
                      {tool.cons.map((c) => (
                        <li key={c} className="text-red-600">✗ {c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">AI-Powered Tools</h3>
              <div className="space-y-4 mb-8">
                {[
                  {
                    name: 'Descript',
                    cost: '$12–24/month',
                    desc: 'Edit video by editing text — a genuine game-changer. Automatic transcription, remove filler words automatically, Overdub for fixing mistakes. Best for churches who want text-based editing.',
                  },
                  {
                    name: 'OpusClip',
                    cost: '$19–57/month',
                    desc: 'AI identifies viral moments automatically. Creates clips with captions and auto-reframing. Best for churches processing lots of sermon content quickly.',
                  },
                  {
                    name: 'Vizard.ai',
                    cost: '$20–60/month',
                    desc: 'Specifically built for repurposing long-form video. Auto-generates clips with hooks and multi-platform export.',
                  },
                  {
                    name: 'Sermon Clips AI (sermon-clips.com)',
                    cost: 'Church-specific pricing',
                    desc: 'Built specifically for churches. Understands sermon structure. Auto-identifies spiritual highlights. Church-specific captioning styles. Integrates with church workflows.',
                    highlight: true,
                  },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className={`rounded-xl p-5 shadow-sm ${
                      tool.highlight
                        ? 'bg-[#E8725A]/10 border border-[#E8725A]/30'
                        : 'bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[#2D2D2D]">{tool.name}</h4>
                      <span className="text-xs text-[#5c5c5c]">{tool.cost}</span>
                    </div>
                    <p className="text-sm text-[#5c5c5c]">{tool.desc}</p>
                    {tool.highlight && (
                      <Link href="/" className="inline-block mt-3 text-sm text-[#E8725A] font-semibold underline">
                        Try it free →
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Which Should You Choose?</h4>
                <table className="w-full text-sm text-[#5c5c5c]">
                  <thead>
                    <tr className="border-b border-[#2D2D2D]/10">
                      <th className="text-left py-2 pr-4 font-semibold text-[#2D2D2D]">Situation</th>
                      <th className="text-left py-2 font-semibold text-[#2D2D2D]">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Zero budget, low volume', 'iMovie or CapCut'],
                      ['Budget available, learning curve OK', 'Premiere Pro'],
                      ['Speed is priority, high volume', 'OpusClip or AI tools'],
                      ['Text-based editing appeals to you', 'Descript'],
                      ['Want church-specific features', 'Sermon Clips AI'],
                    ].map(([situation, rec]) => (
                      <tr key={situation} className="border-b border-[#2D2D2D]/5">
                        <td className="py-2 pr-4">{situation}</td>
                        <td className="py-2 font-medium text-[#2D2D2D]">{rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-[#5c5c5c] italic">
                  Our recommendation: Start with CapCut to learn the fundamentals, then graduate to AI tools when volume increases.
                </p>
              </div>
            </section>

            {/* CTA #2 */}
            <InlineCTA
              headline="Skip the manual work — let AI do the heavy lifting"
              body="Sermon Clips AI identifies your best moments, auto-captions every clip, and formats for every platform. Most churches save 3+ hours per week."
              cta="See How It Works"
            />

            {/* ── Section 5: Best Practices ────────────────────────────────── */}
            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Best Practices for Viral Sermon Clips
              </h2>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Hook Creation: The First 3 Seconds</h3>
              <p className="text-[#5c5c5c] mb-5">Your hook determines everything. Here are patterns that work:</p>
              <div className="space-y-3 mb-8">
                {[
                  { pattern: 'Bold Statement', example: '"Everything you\'ve been taught about forgiveness is wrong."' },
                  { pattern: 'Question', example: '"What if I told you God\'s already answered that prayer?"' },
                  { pattern: 'Story Opener', example: '"A woman came to me crying after service last week..."' },
                  { pattern: 'Relatable Struggle', example: '"If you\'ve ever felt like God isn\'t listening..."' },
                  { pattern: 'Counter-Intuitive Truth', example: '"The worst thing that happened to you might be your greatest blessing."' },
                ].map(({ pattern, example }) => (
                  <div key={pattern} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs font-bold text-[#E8725A] uppercase tracking-wider mb-1">{pattern}</p>
                    <p className="text-[#5c5c5c] italic text-sm">{example}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Caption Overlays</h3>
              <p className="text-[#5c5c5c] mb-4">
                <strong className="text-[#2D2D2D]">80% of people watch without sound.</strong> Captions aren&apos;t optional.
              </p>
              <div className="bg-white rounded-xl p-5 shadow-sm mb-8">
                <p className="font-semibold text-[#2D2D2D] mb-3">Caption Best Practices:</p>
                <ul className="space-y-2 text-[#5c5c5c] text-sm">
                  <li>• Use bold, readable fonts (no script fonts)</li>
                  <li>• High contrast colors (white with black outline works everywhere)</li>
                  <li>• 2–3 lines max per frame</li>
                  <li>• Emphasize KEY words with color or size</li>
                  <li>• Position in the safe zone (not too close to edges)</li>
                  <li>• Word-by-word animation (engaging, TikTok-native) or full sentence display (cleaner, more accessible)</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Calls to Action (CTAs)</h3>
              <p className="text-[#5c5c5c] mb-4">Every clip should have a purpose. Soft CTAs outperform hard sells.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  '"Follow for more encouragement"',
                  '"Tag someone who needs to hear this"',
                  '"Comment \'HOPE\' if this spoke to you"',
                  '"Join us Sunday at [time]"',
                  '"Full message link in bio"',
                ].map((cta) => (
                  <div key={cta} className="bg-[#E8725A]/10 rounded-lg px-4 py-3">
                    <p className="text-sm text-[#2D2D2D] font-medium">{cta}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 6: Content Strategy ──────────────────────────────── */}
            <section id="content-strategy" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Share2 className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Content Strategy: Types of Sermon Highlights
              </h2>
              <p className="text-[#5c5c5c] mb-6">
                Not all clips should be the same. Variety keeps your audience engaged.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { type: 'Motivational Moments', desc: 'High energy, inspirational declarations. These get shared most.', best: 'Instagram, TikTok' },
                  { type: 'Teaching Moments', desc: 'Theological explanations, verse breakdowns, concept clarity.', best: 'YouTube Shorts, Facebook' },
                  { type: 'Storytelling Clips', desc: 'Illustrations, personal stories, testimonies from the pastor.', best: 'All platforms' },
                  { type: 'Practical Application', desc: '"How to" content — how to pray, forgive, trust God in difficulty.', best: 'TikTok, YouTube Shorts' },
                  { type: 'Testimony Clips', desc: 'Real stories from church members (with permission).', best: 'All platforms' },
                  { type: 'Behind-the-Scenes', desc: 'Pastor prep, worship team practice, church life moments.', best: 'Instagram Stories, TikTok' },
                ].map(({ type, desc, best }) => (
                  <div key={type} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-[#2D2D2D] mb-1">{type}</h4>
                    <p className="text-sm text-[#5c5c5c] mb-2">{desc}</p>
                    <p className="text-xs text-[#E8725A] font-medium">Best for: {best}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#2D2D2D] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">The 4-1-1 Framework</h3>
                <p className="text-white/70 text-sm mb-4">For every 6 clips you post:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                    <span>Value-driven clips (teaching, encouragement, stories)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                    <span>Promotional clip (church invite, event announcement)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                    <span>Personality/culture clip (behind-the-scenes, humor)</span>
                  </li>
                </ul>
                <p className="text-white/50 text-xs mt-4">This keeps your feed from feeling like constant advertising.</p>
              </div>
            </section>

            {/* ── Section 7: Tech Specs ────────────────────────────────────── */}
            <section id="tech-specs" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Technical Specifications
              </h2>

              <div className="bg-white rounded-xl shadow-sm overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Platform</th>
                      <th className="text-left px-4 py-3 font-semibold">Max Length</th>
                      <th className="text-left px-4 py-3 font-semibold">Aspect Ratio</th>
                      <th className="text-left px-4 py-3 font-semibold">Resolution</th>
                      <th className="text-left px-4 py-3 font-semibold">Max File Size</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5c5c5c]">
                    {[
                      ['Instagram Reels', '90s', '9:16', '1080×1920', '4 GB'],
                      ['TikTok', '10 min', '9:16', '1080×1920', '287 MB (mobile)'],
                      ['YouTube Shorts', '3 min', '9:16', '1080×1920', '256 GB'],
                      ['Facebook Reels', '90s', '9:16', '1080×1920', '4 GB'],
                    ].map(([platform, length, ratio, res, size]) => (
                      <tr key={platform} className="border-b border-[#2D2D2D]/5">
                        <td className="px-4 py-3 font-medium text-[#2D2D2D]">{platform}</td>
                        <td className="px-4 py-3">{length}</td>
                        <td className="px-4 py-3">{ratio}</td>
                        <td className="px-4 py-3">{res}</td>
                        <td className="px-4 py-3">{size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Export Settings (Premiere / DaVinci)</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#5c5c5c]">
                  <li><strong className="text-[#2D2D2D]">Codec:</strong> H.264</li>
                  <li><strong className="text-[#2D2D2D]">Bitrate:</strong> 10–20 Mbps for 1080p</li>
                  <li><strong className="text-[#2D2D2D]">Frame Rate:</strong> 30fps (match source)</li>
                  <li><strong className="text-[#2D2D2D]">Audio:</strong> AAC, 320 kbps</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Recommended File Organization</h3>
                <pre className="text-xs text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4 overflow-x-auto">{`/Sermons
  /2026-02-09-Series-Name
    /Full-Service.mp4
    /Transcript.txt
    /Clips
      /clip-01-hook-forgiveness.mp4
      /clip-02-testimony.mp4
      /clip-03-altar-call.mp4`}</pre>
              </div>
            </section>

            {/* ── Section 8: Engagement ────────────────────────────────────── */}
            <section id="engagement" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Engagement Tactics That Actually Work
              </h2>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Posting Times (2026 Data)</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { platform: 'Instagram', times: 'Tue–Fri, 11 AM–1 PM and 7–9 PM. Sunday catches post-church scrolling.' },
                  { platform: 'TikTok', times: 'Tue–Thu, 7–9 PM. Late night (10 PM–12 AM) can work for certain content.' },
                  { platform: 'YouTube Shorts', times: 'Consistency matters more than timing. Weekday evenings perform well.' },
                  { platform: 'Facebook', times: 'Wed–Fri, 1–4 PM. Sunday afternoon has strong engagement.' },
                ].map(({ platform, times }) => (
                  <div key={platform} className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-[#2D2D2D] mb-1">{platform}</h4>
                    <p className="text-sm text-[#5c5c5c]">{times}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Hashtag Strategy for Churches</h3>
              <p className="text-[#5c5c5c] mb-4">
                <strong className="text-[#2D2D2D]">Don&apos;t use 30 hashtags.</strong> That strategy died in 2022. Use 3–5 targeted hashtags.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  '#SermonClip',
                  '#ChurchOnline',
                  '#SundaySermon',
                  '#Faith',
                  '#ChristianContent',
                  '#BibleTeaching',
                  '#[YourCityChurch]',
                  '#[SeriesName]',
                ].map((tag) => (
                  <span key={tag} className="bg-[#E8725A]/10 text-[#E8725A] text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Comment Management</h3>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-[#5c5c5c] mb-3">Comments build community. Don&apos;t ignore them.</p>
                <ul className="space-y-2 text-sm text-[#5c5c5c]">
                  <li>→ Reply to comments within 1 hour of posting (algorithm boost)</li>
                  <li>→ Heart every genuine comment</li>
                  <li>→ Ask follow-up questions to drive more engagement</li>
                  <li>→ Pin the best comment or your CTA</li>
                  <li>→ Address criticism gracefully or hide trolls</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-[#2D2D2D]/10">
                  <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Comment prompt ideas:</p>
                  <ul className="space-y-1 text-sm text-[#5c5c5c] italic">
                    <li>&ldquo;What stood out to you?&rdquo;</li>
                    <li>&ldquo;Type &lsquo;AMEN&rsquo; if you needed this&rdquo;</li>
                    <li>&ldquo;Where are you watching from?&rdquo;</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Section 9: Analytics ─────────────────────────────────────── */}
            <section id="analytics" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Analytics and Growth Benchmarks
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-[#5c5c5c] mb-3 text-sm uppercase tracking-wider">Vanity Metrics (nice to know)</h3>
                  <ul className="space-y-1 text-[#5c5c5c] text-sm">
                    <li>• Views</li>
                    <li>• Likes</li>
                    <li>• Follower count</li>
                  </ul>
                </div>
                <div className="bg-[#E8725A]/10 rounded-xl p-5 border border-[#E8725A]/30">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 text-sm uppercase tracking-wider">Meaningful Metrics (track these)</h3>
                  <ul className="space-y-1 text-[#5c5c5c] text-sm">
                    <li>• <strong className="text-[#2D2D2D]">Watch time/retention</strong> — Are people finishing?</li>
                    <li>• <strong className="text-[#2D2D2D]">Shares</strong> — This is the gospel spreading</li>
                    <li>• <strong className="text-[#2D2D2D]">Saves</strong> — Content people return to</li>
                    <li>• <strong className="text-[#2D2D2D]">Profile visits → follows</strong> — Are clips converting?</li>
                    <li>• <strong className="text-[#2D2D2D]">Link clicks</strong> — Traffic to your church site</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Growth Benchmarks for Church Accounts</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Starting Out (0–1,000 followers)', metrics: 'Celebrate 100+ views per clip. Focus on consistency over virality. Aim for 2–3 clips per week minimum.' },
                  { stage: 'Building Momentum (1,000–10,000 followers)', metrics: '500–2,000 views average. Engagement rate of 5–10%. Occasional clip breaks 10K views.' },
                  { stage: 'Growing Church (10,000–100,000 followers)', metrics: '2,000–20,000 views average. Clear content pillars established. Monthly viral moments (100K+ views).' },
                  { stage: 'Thriving Ministry (100,000+ followers)', metrics: '20,000+ average views. Community-driven sharing. Multiple clips weekly hitting 100K+.' },
                ].map(({ stage, metrics }) => (
                  <div key={stage} className="bg-white rounded-xl p-5 shadow-sm">
                    <h4 className="font-bold text-[#2D2D2D] mb-1">{stage}</h4>
                    <p className="text-sm text-[#5c5c5c]">{metrics}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#2D2D2D] text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">The Truth About Growth</h3>
                <p className="text-white/70 text-sm mb-3">
                  Most churches won&apos;t go viral overnight. That&apos;s okay. The real wins: a consistent viewer who eventually visits. A clip shared to someone in crisis. A teenager who finds faith through TikTok.
                </p>
                <p className="text-white font-semibold text-sm">Don&apos;t chase numbers. Chase faithfulness.</p>
              </div>
            </section>

            {/* ── Section 10: Case Studies ─────────────────────────────────── */}
            <section id="case-studies" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Case Studies: Churches Winning with Sermon Clips
              </h2>

              <div className="space-y-6">
                {/* Elevation */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Elevation Church</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">4M+ followers</span>
                  </div>
                  <p className="text-[#5c5c5c] mb-4 text-sm">
                    Steven Furtick&apos;s megachurch has mastered short-form content with millions of followers across platforms. Their clips regularly hit 1–10M views, and their global reach extends far beyond their Charlotte location.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-[#2D2D2D] text-sm mb-2">What they do right:</p>
                    <ul className="space-y-1 text-sm text-[#5c5c5c]">
                      {[
                        'Multiple clips per sermon (not just one)',
                        'Strong hook-first editing',
                        'Consistent branding across platforms',
                        'Clips feel native to each platform',
                      ].map((item) => <li key={item}>✓ {item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-[#E8725A]/10 rounded-lg p-3 text-sm">
                    <strong className="text-[#2D2D2D]">Takeaway:</strong>{' '}
                    <span className="text-[#5c5c5c]">Volume + quality + consistency = compound growth.</span>
                  </div>
                </div>

                {/* Transformation Church */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Transformation Church (Tulsa, OK)</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">3.9M+ followers</span>
                  </div>
                  <p className="text-[#5c5c5c] mb-4 text-sm">
                    Pastor Michael Todd built a massive online presence through authentic, relatable content. Multiple clips have hit 10M+ views. The church speaks to real struggles — anxiety, relationships, identity — and does it without sounding preachy.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-[#2D2D2D] text-sm mb-2">What they do right:</p>
                    <ul className="space-y-1 text-sm text-[#5c5c5c]">
                      {[
                        'Unafraid of personality and humor',
                        'High production value without feeling corporate',
                        'Clips feel like conversations, not lectures',
                      ].map((item) => <li key={item}>✓ {item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-[#E8725A]/10 rounded-lg p-3 text-sm">
                    <strong className="text-[#2D2D2D]">Takeaway:</strong>{' '}
                    <span className="text-[#5c5c5c]">Authenticity and relevance beat religious-sounding content every time.</span>
                  </div>
                </div>

                {/* Life.Church */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Life.Church (Nationwide)</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">700K+ followers</span>
                  </div>
                  <p className="text-[#5c5c5c] mb-4 text-sm">
                    Multi-site church with a comprehensive digital strategy. Clips feed into a larger content ecosystem (Bible App, sermon series). Consistent engagement drives app downloads and church visits.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-[#2D2D2D] text-sm mb-2">What they do right:</p>
                    <ul className="space-y-1 text-sm text-[#5c5c5c]">
                      {[
                        'Clips feed into larger content ecosystem',
                        'Clear calls to action throughout',
                        'Excellent caption design',
                        'Strategic repurposing across platforms',
                      ].map((item) => <li key={item}>✓ {item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-[#E8725A]/10 rounded-lg p-3 text-sm">
                    <strong className="text-[#2D2D2D]">Takeaway:</strong>{' '}
                    <span className="text-[#5c5c5c]">Integration — clips work best as part of a bigger strategy.</span>
                  </div>
                </div>

                <div className="bg-[#2D2D2D] text-white rounded-xl p-6">
                  <h3 className="font-bold mb-3">What Small Churches Can Learn</h3>
                  <p className="text-white/70 text-sm mb-4">You don&apos;t need millions of followers. You need:</p>
                  <ol className="space-y-2 text-sm">
                    {[
                      ['Consistency', 'Post regularly, even imperfectly'],
                      ['Authenticity', 'Your pastor\'s genuine moments'],
                      ['Relevance', 'Content that meets people where they are'],
                      ['Persistence', 'Growth compounds over time'],
                    ].map(([key, value]) => (
                      <li key={key} className="flex items-start gap-2">
                        <span className="text-[#E8725A] font-bold">{key}:</span>
                        <span className="text-white/70">{value}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* ── Section 11: FAQ ──────────────────────────────────────────── */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: "What's the best length for sermon clips?",
                    a: "30–45 seconds for TikTok and Reels, up to 60 seconds for YouTube Shorts. The best length is however long it takes to deliver one complete thought with impact. A 20-second clip can outperform a 60-second one if it's tighter. Trim ruthlessly.",
                  },
                  {
                    q: 'How often should we post sermon clips?',
                    a: 'Minimum: 3–4 times per week. Optimal: Daily or more. One sermon can yield 5–10 clips. You have more content than you think. Quality over quantity once you\'re posting daily.',
                  },
                  {
                    q: 'What equipment do we need?',
                    a: 'Bare minimum: smartphone with 1080p video, lapel mic ($20–50), ring light or window light, free editing app (CapCut). Better: DSLR, wireless lapel mic, softbox lighting. Pro: multi-camera, professional audio board, dedicated media team and AI tools. Start where you are. Upgrade as you grow.',
                  },
                  {
                    q: 'Should we use trending audio?',
                    a: "Use it when it fits naturally. Don't force it. Your pastor's voice is your best audio. Instrumental trends that complement your message are great. Audio that overshadows the sermon content is not.",
                  },
                  {
                    q: 'Do captions really matter?',
                    a: '85% of Facebook video and similar percentages on Instagram and TikTok are watched without sound. Captions are non-negotiable. They also improve accessibility and SEO when transcripts are posted alongside clips.',
                  },
                  {
                    q: "What if our pastor isn't 'good on camera'?",
                    a: "Most pastors who think they're bad on camera are actually fine — they just haven't seen themselves clipped well. Good editing makes everyone look better. Focus on moments of genuine passion and authenticity, not performance.",
                  },
                  {
                    q: 'How long until we see results?',
                    a: 'Realistic timeline: months 1–2 are learning and experimenting (low views), months 3–4 you\'ll find what works and views increase, month 6+ brings consistent growth if you stay committed. Most churches give up in month 2. Don\'t be most churches.',
                  },
                  {
                    q: 'Can we post the same clip to all platforms?',
                    a: 'Yes, but consider: native posting performs slightly better, each platform has different optimal lengths, and TikTok/Instagram especially favor native uploads. Repurposing is fine — just don\'t cross-post with watermarks from other platforms visible.',
                  },
                  {
                    q: 'How do we come up with hook ideas?',
                    a: "Review your transcript. Find moments that made the congregation react (laugh, clap, 'amen'), surprised you when you heard them, or that you'd want to text to a friend. Those are your hooks.",
                  },
                  {
                    q: 'Should we watermark our clips?',
                    a: 'Light branding is good (small logo, handle). Heavy watermarks are distracting. Your content should be shareable, not locked down.',
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="bg-white rounded-xl shadow-sm group">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#2D2D2D] list-none">
                      {q}
                      <span className="text-[#E8725A] text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-5 text-[#5c5c5c] text-sm leading-relaxed">
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Next Steps ───────────────────────────────────────────────── */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Your Next Steps</h2>
              <p className="text-[#5c5c5c] mb-6">You&apos;ve got the knowledge. Now it&apos;s time to execute.</p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    period: 'This Week',
                    steps: [
                      'Record your next sermon with clips in mind',
                      'Get it transcribed for easy clip identification',
                      'Create 3 clips using the workflow above',
                      'Post consistently for 30 days',
                    ],
                  },
                  {
                    period: 'This Month',
                    steps: [
                      'Establish your posting rhythm (aim for daily)',
                      'Track what\'s working in analytics',
                      'Experiment with different clip types',
                      'Engage with every comment',
                    ],
                  },
                  {
                    period: 'This Quarter',
                    steps: [
                      'Refine your style and branding',
                      'Consider AI tools to increase volume',
                      'Build a library of evergreen clips',
                      'Start seeing compound growth',
                    ],
                  },
                ].map(({ period, steps }) => (
                  <div key={period} className="bg-white rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{period}</h3>
                    <ol className="space-y-2 text-sm text-[#5c5c5c] list-decimal list-inside">
                      {steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F1EB] border border-[#2D2D2D]/10 rounded-xl p-6">
                <h3 className="font-bold text-[#2D2D2D] mb-3">The Bottom Line</h3>
                <p className="text-[#5c5c5c] mb-3 leading-relaxed">
                  Making sermon clips isn&apos;t about chasing virality or building your pastor&apos;s platform. It&apos;s about stewardship. Every Sunday, God speaks through your church. Those words have the power to change lives, heal wounds, and transform eternities. Sermon clips put those words where people actually are — on their phones, in their feeds, during their lunch breaks.
                </p>
                <p className="font-bold text-[#2D2D2D]">
                  Your next clip might reach the person who&apos;s been searching for hope. Start today. Start imperfect. Just start.
                </p>
              </div>
            </section>

            {/* ── Cross-link to sister site ─────────────────────────────────── */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
              <h3 className="font-bold text-[#2D2D2D] mb-2">Need to transcribe your sermon first?</h3>
              <p className="text-[#5c5c5c] text-sm mb-3">
                Transcription is the secret weapon for finding clip-worthy moments fast. Our sister site is built specifically for church content.
              </p>
              <a
                href="https://sermon-transcription.com"
                className="text-[#E8725A] text-sm font-semibold underline"
              >
                sermon-transcription.com — Built for churches →
              </a>
            </div>

            {/* ── Related Articles ─────────────────────────────────────────── */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
              <h3 className="font-bold text-[#2D2D2D] mb-4">Related Articles</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/sermon-clips-for-tiktok" className="text-[#E8725A] hover:underline">Sermon Clips for TikTok: Complete Guide</Link></li>
                <li><Link href="/blog/sermon-clips-for-instagram-reels" className="text-[#E8725A] hover:underline">Best Practices for Instagram Reels (Church Edition)</Link></li>
                <li><Link href="/blog/best-sermon-clip-maker-software" className="text-[#E8725A] hover:underline">Best Sermon Clip Maker Software 2026</Link></li>
                <li><Link href="/blog/ai-sermon-clip-generator" className="text-[#E8725A] hover:underline">AI Sermon Clip Generator: How It Works</Link></li>
                <li>
                  <a href="https://sermon-transcription.com/blog/how-to-transcribe-sermons-2026" className="text-[#E8725A] hover:underline">
                    How to Transcribe Sermons (Sister Guide)
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA #3 — Final */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Multiply Your Message?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Stop spending hours editing clips manually. Let AI handle the heavy lifting so you can focus on what matters: reaching more people with the gospel. Sermon Clips makes it easy — upload your sermon, approve the best moments, and watch your reach grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Start Creating Clips Free
                  <Play className="w-5 h-5" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Browse More Guides
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="bg-[#2D2D2D] text-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect x="15" y="0" width="10" height="40" fill="white" />
                  <rect x="5" y="12" width="30" height="8" fill="white" />
                  <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                </svg>
              </div>
              <span className="font-bold text-lg">Sermon Clips</span>
            </Link>
            <p className="text-white/60 text-sm">
              © 2026 Sermon Clips. Helping churches multiply their message.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
