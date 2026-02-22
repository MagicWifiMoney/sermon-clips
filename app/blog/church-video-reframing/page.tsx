import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Smartphone, Monitor, Zap, AlertCircle, Play, ArrowRight, Settings, Target } from 'lucide-react';

export const metadata = {
  title: 'Church Video Reframing: How to Convert Landscape Sermon Footage to Portrait (2026)',
  description: 'Learn how to convert your 16:9 sermon recording to 9:16 vertical for Reels, TikTok, and YouTube Shorts — manually or with AI auto-reframing that tracks your speaker.',
  keywords: 'church video reframing, portrait mode sermon video, landscape to vertical church video, sermon clips for TikTok, auto reframe church video, 9:16 sermon clips',
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Church Video Reframing: How to Convert Landscape Sermon Footage to Portrait (2026)',
        description: 'Complete guide to converting 16:9 church video to 9:16 vertical format for social media — manual methods, AI auto-reframing, and best practices.',
        datePublished: '2026-02-22',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: 'Sermon Clips' },
        publisher: {
          '@type': 'Organization',
          name: 'Sermon Clips',
          logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sermonclips.com/blog/church-video-reframing' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best aspect ratio for church video on social media?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '9:16 (vertical/portrait) is the standard for Instagram Reels, TikTok, and YouTube Shorts — the three highest-reach short-form platforms. 1:1 (square) works for Instagram feed posts. 16:9 (landscape/horizontal) is best for YouTube long-form and church website embeds. For maximum reach in 2026, 9:16 is the priority format.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I just crop my landscape sermon video to vertical?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can, but a static center-crop loses significant quality and often cuts off the speaker at the edges of the frame. Better options are: (1) manual keyframe-based reframing in Premiere or DaVinci — effective but time-consuming, or (2) AI auto-reframing that tracks the speaker\'s face and dynamically adjusts the crop throughout the clip. AI reframing produces much smoother results with no editing skill required.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does AI reframing actually do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI reframing uses computer vision to track the primary subject (your pastor) across every frame of the video. As the speaker moves — stepping to one side, gesturing, walking the stage — the AI dynamically repositions the crop window to keep them centered in the vertical frame. The result looks like a dedicated portrait-mode camera was recording the clip, even though it was derived from a wide landscape shot.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does reframing reduce video quality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Reframing always involves some crop, which means the final resolution depends on your original recording resolution. A 4K original reframed to 9:16 retains full 1080p quality. A 1080p original reframed to 9:16 results in roughly 608×1080 — still acceptable for social media but at reduced fidelity. Always record at the highest resolution your camera allows if you plan to reframe for vertical.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does AI reframing take compared to manual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Manual keyframe reframing in Premiere or DaVinci takes 20–45 minutes per 60-second clip, depending on how much the speaker moves. AI auto-reframing processes a 60-second clip in under 2 minutes. For churches posting 3–5 clips per week, that\'s 2–3 hours saved weekly — time that compounds significantly over a year.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
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

      {/* Article */}
      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Church Video Reframing: How to Convert Landscape Sermon Footage to Portrait (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Your church records in 16:9 landscape. Every short-form platform in 2026 — Reels, TikTok, Shorts — demands 9:16 vertical. The gap between what you have and what social media wants is called reframing. Here's every method to bridge it, from free manual workflows to AI that does it in 90 seconds.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-vertical" className="hover:text-[#E8725A] transition-colors">Why Vertical Video Is No Longer Optional for Churches</a></li>
              <li><a href="#aspect-ratios" className="hover:text-[#E8725A] transition-colors">Aspect Ratio Cheat Sheet: What Goes Where</a></li>
              <li><a href="#the-problem" className="hover:text-[#E8725A] transition-colors">Why a Simple Crop Doesn't Work</a></li>
              <li><a href="#manual-methods" className="hover:text-[#E8725A] transition-colors">Manual Reframing: Premiere, DaVinci, CapCut</a></li>
              <li><a href="#ai-reframing" className="hover:text-[#E8725A] transition-colors">AI Auto-Reframing: How It Works</a></li>
              <li><a href="#comparison" className="hover:text-[#E8725A] transition-colors">Manual vs. AI: Time & Quality Comparison</a></li>
              <li><a href="#best-practices" className="hover:text-[#E8725A] transition-colors">Best Practices for Reframed Church Video</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* Why Vertical */}
            <section id="why-vertical" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-[#E8725A]" />
                Why Vertical Video Is No Longer Optional for Churches
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                In 2020, posting landscape church clips to social media was fine. In 2026, it's the fastest way to get your content demoted.
              </p>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Instagram Reels, TikTok, and YouTube Shorts together account for the majority of short-form video consumption worldwide. All three platforms:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { point: 'Default to 9:16 full-screen display', detail: 'Landscape videos display with black bars top and bottom — immediately signaling "old content" to viewers.' },
                  { point: 'Algorithmically penalize non-vertical video', detail: 'All three platforms confirmed in creator documentation that native vertical content receives preferential distribution.' },
                  { point: 'Show landscape content at fraction of screen real estate', detail: 'A landscape clip in a vertical feed occupies ~35% of screen space vs. 100% for a vertical clip. Scroll likelihood increases dramatically.' },
                  { point: 'Auto-play vertical clips with sound off by default', detail: 'Text overlays and burned-in captions matter more when vertical — another reason landscape clips underperform.' },
                ].map((item) => (
                  <div key={item.point} className="bg-white rounded-xl p-5 shadow-sm flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#2D2D2D] text-sm mb-1">{item.point}</div>
                      <div className="text-sm text-[#5c5c5c]">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#2D2D2D] mb-1">The landscape tax is real</div>
                    <div className="text-sm text-[#5c5c5c] leading-relaxed">
                      Church social media managers consistently report 40–70% lower reach on landscape clips vs. vertical clips with identical content. Your pastor's message is equally good in both formats — but the algorithm doesn't see it that way.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Aspect Ratio Cheat Sheet */}
            <section id="aspect-ratios" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Monitor className="w-8 h-8 text-[#E8725A]" />
                Aspect Ratio Cheat Sheet: What Goes Where
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Before diving into reframing, know what format each platform actually wants:
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                <div className="grid grid-cols-5 bg-[#2D2D2D] text-white text-xs font-semibold uppercase tracking-wider p-4">
                  <div>Platform</div>
                  <div>Format</div>
                  <div>Ratio</div>
                  <div>Resolution</div>
                  <div>Priority</div>
                </div>
                {[
                  { platform: 'Instagram Reels', format: 'Vertical', ratio: '9:16', res: '1080×1920', priority: '🔴 Highest', bg: false },
                  { platform: 'TikTok', format: 'Vertical', ratio: '9:16', res: '1080×1920', priority: '🔴 Highest', bg: true },
                  { platform: 'YouTube Shorts', format: 'Vertical', ratio: '9:16', res: '1080×1920', priority: '🔴 Highest', bg: false },
                  { platform: 'Instagram Feed', format: 'Square', ratio: '1:1', res: '1080×1080', priority: '🟡 High', bg: true },
                  { platform: 'Facebook Reels', format: 'Vertical', ratio: '9:16', res: '1080×1920', priority: '🟡 High', bg: false },
                  { platform: 'YouTube Long-form', format: 'Landscape', ratio: '16:9', res: '1920×1080', priority: '🟢 Standard', bg: true },
                  { platform: 'Church Website', format: 'Landscape', ratio: '16:9', res: '1920×1080', priority: '🟢 Standard', bg: false },
                  { platform: 'LinkedIn Video', format: 'Landscape or Square', ratio: '16:9 / 1:1', res: 'Either', priority: '🟢 Standard', bg: true },
                ].map((row) => (
                  <div key={row.platform} className={`grid grid-cols-5 text-sm p-4 border-t border-[#F5F1EB] ${row.bg ? 'bg-[#F5F1EB]/50' : ''}`}>
                    <div className="font-medium text-[#2D2D2D]">{row.platform}</div>
                    <div className="text-[#5c5c5c]">{row.format}</div>
                    <div className="font-mono text-[#E8725A] font-semibold">{row.ratio}</div>
                    <div className="text-[#5c5c5c] text-xs">{row.res}</div>
                    <div className="text-xs">{row.priority}</div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                For most churches, the priority workflow is: record in 16:9 → reframe to 9:16 for Reels/TikTok/Shorts → also export 16:9 for YouTube and website. One recording, two formats. Reframing is the step that makes it work.
              </p>
            </section>

            {/* Why a Simple Crop Doesn't Work */}
            <section id="the-problem" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-[#E8725A]" />
                Why a Simple Crop Doesn't Work
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The obvious approach: crop the center third of your landscape video. It's fast, it's free, and it produces terrible results. Here's why:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">What a static center crop does</h3>
                  <div className="space-y-3">
                    {[
                      { issue: 'Speaker walks left → exits frame', severity: 'Critical' },
                      { issue: 'Wide gesture clips both hands', severity: 'High' },
                      { issue: 'Two-person stage loses one person', severity: 'Critical' },
                      { issue: 'Pulpit/lectern blocks lower frame', severity: 'Medium' },
                      { issue: 'Head room wrong — too much ceiling', severity: 'Medium' },
                      { issue: 'Any camera pan ruins the crop entirely', severity: 'Critical' },
                    ].map((item) => (
                      <div key={item.issue} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-[#5c5c5c]">
                          <span className="text-red-400">✕</span>
                          {item.issue}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.severity === 'Critical' ? 'bg-red-100 text-red-600' :
                          item.severity === 'High' ? 'bg-orange-100 text-orange-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>{item.severity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">What good reframing does</h3>
                  <div className="space-y-3">
                    {[
                      { fix: 'Tracks speaker face across entire clip', quality: 'Smooth' },
                      { fix: 'Dynamic crop follows movement', quality: 'Professional' },
                      { fix: 'Maintains proper head room throughout', quality: 'Consistent' },
                      { fix: 'Handles stage walking without jumps', quality: 'Cinematic' },
                      { fix: 'Auto-adjusts when speaker gestures wide', quality: 'Natural' },
                      { fix: 'Compensates for camera operator pans', quality: 'Seamless' },
                    ].map((item) => (
                      <div key={item.fix} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-[#5c5c5c]">
                          <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
                          {item.fix}
                        </div>
                        <span className="text-xs font-semibold text-[#E8725A]">{item.quality}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The difference is subject tracking. A good reframe isn't a fixed window — it's a moving crop that follows your pastor wherever they go in the frame. You need either manual keyframing (time-consuming) or AI subject tracking (automated).
              </p>
            </section>

            {/* Manual Methods */}
            <section id="manual-methods" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-[#E8725A]" />
                Manual Reframing: Premiere, DaVinci, CapCut
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                If you have an editor comfortable with these tools, manual reframing produces excellent results. Here's how each workflow works:
              </p>

              <div className="space-y-6 mb-8">

                {/* Premiere */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2D2D2D]">Adobe Premiere Pro — Auto Reframe</h3>
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Best quality</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">$55/mo</span>
                    </div>
                  </div>
                  <ol className="space-y-2 text-sm text-[#5c5c5c] mb-4">
                    {[
                      'Import your clip into the timeline',
                      'Right-click clip → Auto Reframe Sequence',
                      'Select target aspect ratio: Vertical 9:16',
                      'Choose motion preset: Slower (best for sermon clips)',
                      'Premiere analyzes clip and sets keyframes automatically',
                      'Review in Program Monitor — adjust any keyframes manually',
                      'Export at 1080×1920',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-bold text-[#E8725A] flex-shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-semibold text-green-700 mb-1">✓ Pros</div>
                      <div className="text-green-600">Excellent AI subject tracking, handles complex movement, familiar interface for editors</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-red-700 mb-1">✕ Cons</div>
                      <div className="text-red-600">Requires Premiere subscription, still needs manual review and touch-ups, 15–25 min per clip</div>
                    </div>
                  </div>
                </div>

                {/* DaVinci */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2D2D2D]">DaVinci Resolve — Dynamic Zoom + Tracker</h3>
                    <div className="flex gap-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Free tier available</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">$295 one-time Studio</span>
                    </div>
                  </div>
                  <ol className="space-y-2 text-sm text-[#5c5c5c] mb-4">
                    {[
                      'Import clip, change timeline settings to 1080×1920',
                      'Add clip to timeline — it will appear letterboxed',
                      'In Inspector: set Transform → Zoom to fill frame',
                      'In Color page, use Object Tracker to track speaker\'s face',
                      'Apply tracked motion to a Rect or Power Window',
                      'Link window position to tracker output',
                      'Manually keyframe edge cases where tracker drifts',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-bold text-[#E8725A] flex-shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-semibold text-green-700 mb-1">✓ Pros</div>
                      <div className="text-green-600">Free version available, powerful color grading alongside reframe, no subscription</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-red-700 mb-1">✕ Cons</div>
                      <div className="text-red-600">Steeper learning curve, tracking setup is manual, 30–45 min per clip for beginners</div>
                    </div>
                  </div>
                </div>

                {/* CapCut */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2D2D2D]">CapCut — Smart Crop (Mobile + Desktop)</h3>
                    <div className="flex gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Free</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">Easiest</span>
                    </div>
                  </div>
                  <ol className="space-y-2 text-sm text-[#5c5c5c] mb-4">
                    {[
                      'Import clip → set canvas to 9:16',
                      'Tap clip → select Smart Crop (beta)',
                      'CapCut auto-detects subject and reframes',
                      'Review preview — scrub timeline for any missed moments',
                      'Manually adjust clips where Smart Crop loses the subject',
                      'Export at 1080p',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-bold text-[#E8725A] flex-shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-semibold text-green-700 mb-1">✓ Pros</div>
                      <div className="text-green-600">Free, mobile-friendly, fastest manual option, good for occasional use</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-semibold text-red-700 mb-1">✕ Cons</div>
                      <div className="text-red-600">Smart Crop less reliable than Premiere, watermark on free exports, TikTok ownership concerns for some churches</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Reframing */}
            <section id="ai-reframing" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                AI Auto-Reframing: How It Works
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The manual methods above all share a bottleneck: a human has to open editing software, set up the reframe, review the result, and fix any tracking errors. For a church posting 3–5 clips per week, that's 1.5–3 hours every Monday just on reframing.
              </p>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                AI reframing built into a clip generation pipeline eliminates that bottleneck. Here's what happens under the hood when Sermon Clips reframes your sermon clips:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: '01',
                    title: 'Speaker Detection',
                    description: 'Computer vision identifies the primary subject (your pastor) in the first frame. It distinguishes the speaker from background elements — congregation, choir, stage decor — and locks onto the face and body as the primary track target.',
                  },
                  {
                    step: '02',
                    title: 'Motion Path Analysis',
                    description: 'The AI traces the speaker\'s movement across every frame of the clip, building a motion path. Fast movements get damped (smooth follow); slow drifts get real-time correction. The result is camera-like movement, not jittery repositioning.',
                  },
                  {
                    step: '03',
                    title: 'Crop Window Optimization',
                    description: 'The 9:16 crop window is sized to give proper head room and include hand gestures where possible. As the speaker moves, the window follows smoothly — similar to a cinematographer following a subject with a shoulder rig.',
                  },
                  {
                    step: '04',
                    title: 'Edge Case Handling',
                    description: 'When the speaker walks to the frame edge (near or beyond the crop window limits), the AI applies a predictive offset — slightly leading the direction of movement to anticipate where the speaker is heading, not just reacting to where they are.',
                  },
                  {
                    step: '05',
                    title: 'Multi-Format Export',
                    description: 'The reframed output is exported in platform-specific sizes: 1080×1920 for Reels/TikTok/Shorts, 1080×1080 for Instagram feed, and 1920×1080 original retained for YouTube/website — all from the same processing pass.',
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm flex gap-6">
                    <div className="text-4xl font-bold text-[#E8725A]/20 flex-shrink-0 w-12">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#2D2D2D] rounded-2xl p-6 mb-8">
                <div className="font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#E8725A]" />
                  Why this matters for sermon footage specifically
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Pastors move differently than other video subjects. They gesture emphatically, walk the stage for emphasis, lean into the camera for intensity, then step back. Generic reframing AI (built for vlogs, cooking videos, fitness) doesn't handle sermon-style movement well.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Sermon Clips is trained specifically on ministry video. The tracking model knows the difference between a preacher stepping forward for impact (follow quickly) and swaying slightly while reading Scripture (hold position). The result looks intentional, not mechanical.
                </p>
              </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A]" />
                Manual vs. AI: Time & Quality Comparison
              </h2>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                <div className="grid grid-cols-5 bg-[#2D2D2D] text-white text-xs font-semibold p-4 gap-2">
                  <div className="col-span-1">Method</div>
                  <div>Time/clip</div>
                  <div>Cost</div>
                  <div>Tracking quality</div>
                  <div>Skill needed</div>
                </div>
                {[
                  { method: 'Static center crop', time: '2 min', cost: 'Free', quality: '⭐ Poor', skill: 'None', bg: false },
                  { method: 'CapCut Smart Crop', time: '10–15 min', cost: 'Free', quality: '⭐⭐ Fair', skill: 'Basic', bg: true },
                  { method: 'DaVinci Resolve', time: '30–45 min', cost: 'Free / $295', quality: '⭐⭐⭐ Good', skill: 'Intermediate', bg: false },
                  { method: 'Premiere Auto Reframe', time: '20–30 min', cost: '$55/mo', quality: '⭐⭐⭐⭐ Very Good', skill: 'Intermediate', bg: true },
                  { method: 'Sermon Clips AI', time: '90 sec', cost: 'Included', quality: '⭐⭐⭐⭐⭐ Excellent', skill: 'None', highlight: true, bg: false },
                ].map((row) => (
                  <div key={row.method} className={`grid grid-cols-5 text-sm p-4 gap-2 border-t border-[#F5F1EB] items-center ${row.highlight ? 'bg-[#E8725A]/5 border-l-4 border-l-[#E8725A]' : row.bg ? 'bg-[#F5F1EB]/40' : ''}`}>
                    <div className={`font-medium col-span-1 ${row.highlight ? 'text-[#E8725A]' : 'text-[#2D2D2D]'}`}>{row.method}</div>
                    <div className={`font-semibold ${row.highlight ? 'text-[#E8725A]' : 'text-[#2D2D2D]'}`}>{row.time}</div>
                    <div className="text-[#5c5c5c]">{row.cost}</div>
                    <div className="text-sm">{row.quality}</div>
                    <div className="text-[#5c5c5c]">{row.skill}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-xl p-6 mb-8">
                <div className="font-semibold text-[#2D2D2D] mb-2">The compound math</div>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">
                  At 4 clips per week using Premiere: 4 × 25 min = <strong>100 minutes every week on reframing alone</strong>. Using AI: 4 × 90 sec = <strong>6 minutes</strong>. Over a year, that's 85+ hours returned to ministry work — roughly 2 full work weeks.
                </p>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#E8725A]" />
                Best Practices for Reframed Church Video
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Whether you're reframing manually or with AI, these practices improve the output quality significantly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    title: '🎥 Record at 4K if possible',
                    tip: 'A 4K (3840×2160) recording reframed to 9:16 retains full 1080p resolution after the crop. 1080p originals reframe to ~608px wide — noticeably softer. 4K headroom makes the biggest single quality difference.',
                  },
                  {
                    title: '🎙️ Keep the speaker in the center third',
                    tip: 'Coach your camera operators to keep the pastor in the center third of the frame during clip-worthy moments. This gives reframing AI more to work with and reduces how aggressively the crop window needs to move.',
                  },
                  {
                    title: '💡 Favor medium shots for clips',
                    tip: 'Wide establishing shots reframe poorly — too little face detail. Extreme close-ups reframe well but feel claustrophobic in portrait. A medium shot (waist to just above head) reframes to portrait with ideal framing.',
                  },
                  {
                    title: '✂️ Cut before and after big movements',
                    tip: 'If the pastor walks across the full stage, cut the clip so it doesn\'t include the walk. Use a moment of stillness — peak illustration, landing the point. Movement during reframe looks smoother when the clip starts and ends static.',
                  },
                  {
                    title: '📱 Add text overlays after reframing',
                    tip: 'Place captions and text overlays after reframing is complete. Placing them before can interfere with tracking (AI may follow text instead of face) and they need to be positioned for the final vertical frame anyway.',
                  },
                  {
                    title: '🔍 Always review the output',
                    tip: 'Even the best AI reframing occasionally drifts — especially when multiple people are in frame or there\'s dramatic lighting change. A 30-second review scrub before posting catches 95% of issues.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm">
                    <h3 className="font-semibold text-[#2D2D2D] mb-2 text-sm">{item.title}</h3>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-3">What to pair with your reframed clips</h3>
                <p className="text-sm text-[#5c5c5c] mb-4 leading-relaxed">
                  A well-reframed clip is the foundation. The complete vertical clip package that performs best on social also includes:
                </p>
                <div className="space-y-2">
                  {[
                    { item: 'Burned-in captions', desc: '85% of social video watched without sound', link: '/blog/sermon-clips-with-captions', label: 'Captions guide' },
                    { item: 'B-roll inserted every 20–30 sec', desc: '3–4× watch-through improvement', link: '/blog/church-video-b-roll-generator', label: 'B-roll guide' },
                    { item: 'Hook-optimized opening 3 seconds', desc: 'First moment determines whether they scroll', link: '/blog/how-to-make-sermon-clips', label: 'Clip guide' },
                    { item: 'Platform-specific social caption', desc: 'Reframing gets views; captions get saves/shares', link: '/blog/church-social-media-captions-ai', label: 'Captions guide' },
                  ].map((item) => (
                    <div key={item.item} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F1EB] transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-[#2D2D2D]">{item.item}</div>
                          <div className="text-xs text-[#5c5c5c]">{item.desc}</div>
                        </div>
                      </div>
                      <Link href={item.link} className="text-xs text-[#E8725A] hover:underline whitespace-nowrap">
                        {item.label} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the best aspect ratio for church video on social media?',
                    a: '9:16 (vertical/portrait) is the standard for Instagram Reels, TikTok, and YouTube Shorts — the three highest-reach short-form platforms. 1:1 (square) works for Instagram feed posts. 16:9 (landscape/horizontal) is best for YouTube long-form and church website embeds. For maximum reach in 2026, 9:16 is the priority format.',
                  },
                  {
                    q: 'Can I just crop my landscape sermon video to vertical?',
                    a: "You can, but a static center-crop loses significant quality and often cuts off the speaker at the edges of the frame. Better options are: (1) manual keyframe-based reframing in Premiere or DaVinci — effective but time-consuming, or (2) AI auto-reframing that tracks the speaker's face and dynamically adjusts the crop throughout the clip. AI reframing produces much smoother results with no editing skill required.",
                  },
                  {
                    q: 'What does AI reframing actually do?',
                    a: "AI reframing uses computer vision to track the primary subject (your pastor) across every frame of the video. As the speaker moves — stepping to one side, gesturing, walking the stage — the AI dynamically repositions the crop window to keep them centered in the vertical frame. The result looks like a dedicated portrait-mode camera was recording the clip, even though it was derived from a wide landscape shot.",
                  },
                  {
                    q: 'Does reframing reduce video quality?',
                    a: 'Reframing always involves some crop, which means the final resolution depends on your original recording resolution. A 4K original reframed to 9:16 retains full 1080p quality. A 1080p original reframed to 9:16 results in roughly 608×1080 — still acceptable for social media but at reduced fidelity. Always record at the highest resolution your camera allows if you plan to reframe for vertical.',
                  },
                  {
                    q: 'How long does AI reframing take compared to manual?',
                    a: "Manual keyframe reframing in Premiere or DaVinci takes 20–45 minutes per 60-second clip, depending on how much the speaker moves. AI auto-reframing processes a 60-second clip in under 2 minutes. For churches posting 3–5 clips per week, that's 2–3 hours saved weekly — time that compounds significantly over a year.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{item.q}</h3>
                    <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-[#2D2D2D] rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stop posting landscape clips with black bars.
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                Sermon Clips reframes your landscape footage to portrait automatically — AI-tracked, smooth, no editing software required. Upload → 9:16 clips ready in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#pricing" className="bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors">
                  Start Free — First Sermon on Us
                </Link>
                <Link href="/blog/how-to-make-sermon-clips" className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 justify-center">
                  <ArrowRight className="w-4 h-4" />
                  Full Clip Creation Guide
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-4">No credit card required</p>
            </div>

          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/60 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <rect x="15" y="0" width="10" height="40" fill="white" />
              <rect x="5" y="12" width="30" height="8" fill="white" />
              <polygon points="18,22 26,26 18,30" fill="#E8725A" />
            </svg>
            <span className="text-white font-semibold">Sermon Clips</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/blog/how-to-make-sermon-clips" className="hover:text-white transition-colors">Clip Guide</Link>
            <Link href="/blog/church-video-b-roll-generator" className="hover:text-white transition-colors">B-Roll Guide</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
