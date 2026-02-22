import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Video, Play, TrendingUp, Zap, AlertCircle, Star, ArrowRight, DollarSign, Layers } from 'lucide-react';

export const metadata = {
  title: 'B-Roll for Church Videos: What It Is, Why It Matters, and How AI Generates It (2026)',
  description: 'B-roll is the #1 difference between church videos people skip and videos they watch through. Learn what it is, where to get it, and how AI now generates it automatically.',
  keywords: 'church video b-roll, b-roll for sermon videos, church video production, b-roll generator church, AI b-roll church video, church video tips',
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'B-Roll for Church Videos: What It Is, Why It Matters, and How AI Generates It (2026)',
        description: 'Everything churches need to know about B-roll — what it is, why it triples watch time, and how AI now generates it automatically from sermon transcripts.',
        datePublished: '2026-02-22',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: 'Sermon Clips' },
        publisher: {
          '@type': 'Organization',
          name: 'Sermon Clips',
          logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sermonclips.com/blog/church-video-b-roll-generator' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is B-roll in church videos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'B-roll is supplemental footage cut over the primary "A-roll" (the pastor speaking). In church videos it includes worship footage, Scripture text overlays, nature imagery, community shots, and visual illustrations that match what the pastor is saying. B-roll is what prevents "talking head syndrome" — static single-camera footage that viewers scroll past.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does church video B-roll cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stock B-roll can cost $50–$150 per clip from premium libraries like Shutterstock or Getty. A monthly Storyblocks subscription runs $149–$299/year but requires manual searching and downloading. AI B-roll generation (via Sermon Clips) is included in your subscription — no per-clip fees, no manual searching, auto-inserted at the right moments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does B-roll really improve church video watch time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Videos with B-roll inserted every 20–30 seconds see 3–4× higher watch-through rates than talking-head-only videos on social platforms. Instagram and TikTok algorithms reward watch time, so B-roll directly impacts reach — not just engagement.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of B-roll work best for sermon clips?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best B-roll for sermon clips falls into 5 categories: (1) Scripture text animations that display the verse being quoted, (2) nature imagery matching themes (storms → chaos, sunrise → hope), (3) community/people footage showing everyday life scenarios the pastor references, (4) worship footage from your own church, and (5) abstract/cinematic visuals for emotional emphasis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can AI automatically insert B-roll into my sermon video?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Sermon Clips analyzes your sermon transcript to identify key themes, Scripture references, and emotional beats — then automatically inserts contextually relevant B-roll from a library of 30,000+ assets. No manual searching, no timeline editing. Upload → B-roll inserted → export ready.',
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            B-Roll for Church Videos: What It Is, Why It Matters, and How AI Generates It (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Most church video clips get scrolled past in 3 seconds. The ones that don't all have one thing in common: B-roll. Here's what it is, why it triples watch time, where churches have been getting it wrong, and how AI now handles the entire process automatically.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#what-is-broll" className="hover:text-[#E8725A] transition-colors">What Is B-Roll (and What Is A-Roll)?</a></li>
              <li><a href="#why-it-matters" className="hover:text-[#E8725A] transition-colors">Why B-Roll Triples Church Video Watch Time</a></li>
              <li><a href="#types" className="hover:text-[#E8725A] transition-colors">5 Types of B-Roll That Work for Sermons</a></li>
              <li><a href="#old-ways" className="hover:text-[#E8725A] transition-colors">The 3 Ways Churches Get B-Roll Today (and Their Problems)</a></li>
              <li><a href="#ai-broll" className="hover:text-[#E8725A] transition-colors">How AI B-Roll Generation Works</a></li>
              <li><a href="#before-after" className="hover:text-[#E8725A] transition-colors">Before & After: Same Sermon, Different Results</a></li>
              <li><a href="#getting-started" className="hover:text-[#E8725A] transition-colors">Getting Started With AI B-Roll</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* What Is B-Roll */}
            <section id="what-is-broll" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-[#E8725A]" />
                What Is B-Roll (and What Is A-Roll)?
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Every video has two layers of footage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#2D2D2D]">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">A-Roll</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed mb-4">
                    The primary footage. In church video, this is the pastor speaking — the main camera shot you recorded during the sermon or when creating a clip.
                  </p>
                  <div className="text-xs text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">Example:</strong> Pastor speaking directly to camera, locked-off tripod shot, pulpit or stage framing.
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">B-Roll</h3>
                  <p className="text-sm text-[#5c5c5c] leading-relaxed mb-4">
                    Supplemental footage cut <em>over</em> the A-roll. The pastor's voice keeps playing; the visuals switch to something that illustrates what they're saying.
                  </p>
                  <div className="text-xs text-[#5c5c5c]">
                    <strong className="text-[#2D2D2D]">Example:</strong> Pastor says "in the storm" → footage cuts to crashing waves. Voice continues uninterrupted.
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                A-roll is the content. B-roll is what makes people watch it. Without B-roll, you have a talking head. Talking heads get scrolled past. B-roll creates the visual rhythm that holds attention through a 60-second clip.
              </p>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#2D2D2D] mb-1">The 3-second test</div>
                    <div className="text-sm text-[#5c5c5c] leading-relaxed">
                      Scroll your Instagram or TikTok feed and count how long you give each video before scrolling. Static talking heads — even compelling speakers — get 2–3 seconds. Videos with visual variety (B-roll, text overlays, cuts) get 8–15+ seconds. On algorithmic feeds, those extra seconds determine everything.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Matters */}
            <section id="why-it-matters" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why B-Roll Triples Church Video Watch Time
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Watch time is the metric that matters most on every social platform in 2026. Instagram Reels, TikTok, YouTube Shorts — all of them rank content based primarily on how long viewers watch. A video that holds 60% of viewers to the end beats a video that holds 10%, regardless of likes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '3–4×', label: 'Higher watch-through rate with B-roll vs. talking head only', color: 'bg-[#E8725A]' },
                  { stat: '60%', label: 'Of viewers decide whether to keep watching in the first 3 seconds', color: 'bg-[#2D2D2D]' },
                  { stat: '30s', label: 'Optimal B-roll frequency: insert new visuals every 20–30 seconds', color: 'bg-[#E8725A]' },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-2xl p-6 text-white text-center`}>
                    <div className="text-4xl font-bold mb-2">{item.stat}</div>
                    <div className="text-sm opacity-80 leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The mechanics are straightforward: every time a new visual element appears, the brain's attention system resets. Viewers who were about to scroll get re-engaged. B-roll is essentially a series of micro-interrupts that buy more watch time — which the algorithm rewards with more reach.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Platform-Specific B-Roll Behavior</h3>
                <div className="space-y-3">
                  {[
                    { platform: 'TikTok / Reels', guidance: 'Cut every 2–5 seconds. Fast visual rhythm matches the platform tempo. Text overlays count as B-roll.' },
                    { platform: 'YouTube Shorts', guidance: 'Slightly longer cuts OK (3–8 sec). B-roll can be more cinematic. Less frantic than TikTok.' },
                    { platform: 'Facebook Video', guidance: 'Older demographic tolerates longer A-roll runs. B-roll every 20–30 sec sufficient. Subtitles more important here.' },
                    { platform: 'LinkedIn', guidance: 'Professional context. Scripture text animations + community shots perform well. Avoid overly cinematic nature B-roll.' },
                    { platform: 'Church Website', guidance: 'Full sermon with B-roll can be 30–45 min. Insert B-roll at key illustration moments, not constantly.' },
                  ].map((item) => (
                    <div key={item.platform} className="flex gap-4 items-start">
                      <div className="text-sm font-bold text-[#2D2D2D] w-32 flex-shrink-0">{item.platform}</div>
                      <div className="text-sm text-[#5c5c5c]">{item.guidance}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Types of B-Roll */}
            <section id="types" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-[#E8725A]" />
                5 Types of B-Roll That Work for Sermons
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Not all B-roll is equal. The type you use needs to match both the sermon content and the platform. Here's the full taxonomy of what works for church video:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    type: '1. Scripture Text Animations',
                    best: 'All platforms',
                    description: 'The verse being quoted appears on screen as the pastor reads it. Simple text animation over a background — or the verse floating over nature footage.',
                    why: 'Extremely high engagement. Viewers pause to read. Shareable as a standalone still. Zero production cost with AI text overlays.',
                    example: 'Pastor quotes John 3:16 → animated verse text appears word by word over a dark gradient background.',
                  },
                  {
                    type: '2. Nature / Thematic Imagery',
                    best: 'Instagram, YouTube, website',
                    description: 'Cinematic footage that illustrates the sermon\'s theme or metaphor: storms for chaos, light breaking through clouds for hope, open roads for journey/calling.',
                    why: 'Creates emotional resonance. The visual reinforces the verbal. Viewers feel the sermon, not just hear it.',
                    example: 'Pastor talks about "walking through the valley" → timelapse of fog filling a mountain valley.',
                  },
                  {
                    type: '3. Community / People Footage',
                    best: 'TikTok, Reels, Facebook',
                    description: 'Everyday life scenarios the sermon references: a parent with a child for "prodigal son" themes, someone at a desk for "work as worship," a group around a table for community/fellowship points.',
                    why: 'Relatability triggers. Viewers see themselves in the footage. Increases share rate ("this is exactly me").',
                    example: 'Pastor talks about forgiveness in relationships → two people hugging, a handshake, someone looking out a window.',
                  },
                  {
                    type: '4. Your Own Church Footage',
                    best: 'All platforms — highest trust',
                    description: 'Worship service shots, congregation singing, people praying, kids in ministry, baptisms, missions trips. Real footage of your actual community.',
                    why: 'Highest authenticity. Invites viewers into your specific church. Strongest community-building effect. Cannot be replicated by stock.',
                    example: 'Full congregation worship shot over pastor\'s closing invitation. Makes distant viewers feel the room.',
                  },
                  {
                    type: '5. Abstract / Cinematic B-Roll',
                    best: 'Instagram, YouTube',
                    description: 'Macro shots (water drops, fire, light particles), slow motion, bokeh-heavy footage that creates mood without literal illustration.',
                    why: 'Adds visual texture without competing with the message. Good for emotional moments where literal footage would feel heavy-handed.',
                    example: 'Slow motion candle flame during a quiet moment in the sermon. Burning embers for "refining fire" themes.',
                  },
                ].map((item) => (
                  <div key={item.type} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-[#2D2D2D]">{item.type}</h3>
                      <span className="text-xs font-semibold text-[#E8725A] bg-[#E8725A]/10 px-3 py-1 rounded-full">Best for: {item.best}</span>
                    </div>
                    <p className="text-sm text-[#5c5c5c] mb-3 leading-relaxed">{item.description}</p>
                    <p className="text-xs text-[#2D2D2D] mb-2"><strong>Why it works:</strong> {item.why}</p>
                    <div className="bg-[#F5F1EB] rounded-lg px-4 py-3 text-xs text-[#5c5c5c] italic">
                      <strong className="text-[#2D2D2D] not-italic">Example:</strong> {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Old Ways */}
            <section id="old-ways" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-[#E8725A]" />
                The 3 Ways Churches Get B-Roll Today (and Their Problems)
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Before AI B-roll generation existed, churches had three options. All of them had significant cost or time problems.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    method: 'Option 1: Stock Video Libraries',
                    cost: '$149–$599/year (Storyblocks, Envato)',
                    timePerSermon: '45–90 min',
                    problems: [
                      'Manual searching — you have to find the right clip yourself',
                      'Generic imagery that doesn\'t match your church\'s aesthetic',
                      'No contextual awareness — you pick clips based on vibes, not transcript',
                      'Subscription cost on top of everything else in the media budget',
                      'Per-clip licensing fees if you go outside your subscription tier',
                    ],
                    verdict: 'Viable for large churches with dedicated media staff. Too slow for weekly volume.',
                  },
                  {
                    method: 'Option 2: Shoot Your Own B-Roll',
                    cost: 'Staff time (camera person, editor)',
                    timePerSermon: '2–4 hrs per clip session',
                    problems: [
                      'Requires a second camera operator during service',
                      'Limited by what you can actually capture in your building',
                      'Editing time to pull usable B-roll from raw footage',
                      'Difficult to illustrate abstract themes (hope, eternity, the cross) with in-church footage',
                      'Continuity issues: same hallway shot used 8 weeks in a row',
                    ],
                    verdict: 'Best for authenticity but doesn\'t scale without production staff.',
                  },
                  {
                    method: 'Option 3: Hire a Video Editor',
                    cost: '$150–$500 per video',
                    timePerSermon: '3–5 day turnaround',
                    problems: [
                      'High cost at weekly sermon volume',
                      'Turnaround time means content is stale by the time it posts',
                      'Editor doesn\'t understand theology — picks thematically wrong B-roll',
                      'Brief and review cycle adds more time',
                      'No scalability: Sunday sermon clips need to post Monday, not Thursday',
                    ],
                    verdict: 'Quality ceiling is high but cost and speed make it impractical for weekly operations.',
                  },
                ].map((item) => (
                  <div key={item.method} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{item.method}</h3>
                    <div className="flex gap-6 mb-4">
                      <div className="text-sm">
                        <span className="text-[#5c5c5c]">Cost: </span>
                        <span className="font-semibold text-[#2D2D2D]">{item.cost}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-[#5c5c5c]">Time/sermon: </span>
                        <span className="font-semibold text-[#2D2D2D]">{item.timePerSermon}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {item.problems.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                          <span className="text-[#E8725A] font-bold mt-0.5 flex-shrink-0">✕</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#F5F1EB] rounded-lg px-4 py-2 text-xs">
                      <span className="font-semibold text-[#2D2D2D]">Verdict: </span>
                      <span className="text-[#5c5c5c]">{item.verdict}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The core problem with all three approaches: they require a human to manually match B-roll to sermon content. That's the bottleneck AI removes.
              </p>
            </section>

            {/* AI B-Roll */}
            <section id="ai-broll" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                How AI B-Roll Generation Works
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                AI B-roll generation flips the workflow. Instead of a human watching the sermon and manually searching for matching footage, the AI reads the transcript and does the matching automatically.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: '01',
                    title: 'Transcript Analysis',
                    description: 'The AI reads your sermon transcript and identifies key moments: Scripture quotations, thematic keywords (hope, fear, forgiveness, family, calling), emotional peaks (rising volume/emphasis), and illustration points.',
                  },
                  {
                    step: '02',
                    title: 'Semantic Matching',
                    description: 'Each identified moment is mapped to a visual category. "Storm" → nature/weather category. "Father running" → community/relationship category. Scripture quote → text animation trigger. The AI understands theological context, not just literal keywords.',
                  },
                  {
                    step: '03',
                    title: 'Library Search + Selection',
                    description: 'From a curated library of 30,000+ assets (cleared for commercial church use), the AI selects clips that match each moment — considering duration, aesthetic consistency, and platform format.',
                  },
                  {
                    step: '04',
                    title: 'Timeline Insertion',
                    description: 'B-roll is inserted at precise timestamps with smooth transitions. Pacing is optimized per platform: faster cuts for TikTok/Reels, longer holds for YouTube. Audio (pastor\'s voice) remains uninterrupted throughout.',
                  },
                  {
                    step: '05',
                    title: 'Human Review',
                    description: 'You review the assembled clip. Swap any B-roll segment you don\'t love with alternatives. Most users accept 85–90% of AI selections without changes.',
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
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-[#E8725A]" />
                  <span className="font-bold text-white">What makes Sermon Clips different</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Generic AI video tools (OpusClip, Descript) treat church video like any other content. They don't understand theological context — they won't know that "the narrow path" needs different B-roll than "the broad road," or that a pastor quoting Isaiah 40 is probably going somewhere emotionally significant.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Sermon Clips is built specifically for church video. The B-roll library is curated for ministry content. The AI is trained on sermon structure. The matching is theologically aware, not just keyword-based.
                </p>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                See the full feature breakdown and B-roll library categories on the{' '}
                <Link href="/use-cases/ai-broll-church-video" className="text-[#E8725A] hover:underline">AI B-roll for church video</Link>{' '}
                feature page — including the 8-category asset library and before/after examples.
              </p>
            </section>

            {/* Before / After */}
            <section id="before-after" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A]" />
                Before & After: Same Sermon, Different Results
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Here's what happens to the same 60-second sermon clip — identical audio — with and without AI B-roll:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-[#2D2D2D]/20">
                  <div className="bg-[#2D2D2D]/10 p-4 border-b border-[#2D2D2D]/10">
                    <h3 className="font-bold text-[#2D2D2D]">❌ Without B-Roll</h3>
                    <p className="text-xs text-[#5c5c5c] mt-1">Talking head only</p>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { metric: 'Average watch time', value: '8–12 sec', note: 'of 60-sec clip' },
                      { metric: 'Watch-through rate', value: '12–18%', note: 'reach the end' },
                      { metric: 'Share rate', value: '0.8%', note: 'of viewers share' },
                      { metric: 'Algorithm reach', value: 'Limited', note: 'low engagement signal' },
                      { metric: 'Production time', value: '15 min', note: 'just the clip, no B-roll' },
                    ].map((item) => (
                      <div key={item.metric} className="flex items-center justify-between text-sm">
                        <span className="text-[#5c5c5c]">{item.metric}</span>
                        <div className="text-right">
                          <span className="font-bold text-[#2D2D2D]">{item.value}</span>
                          <span className="text-xs text-[#5c5c5c] ml-1">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-[#E8725A]/30">
                  <div className="bg-[#E8725A]/10 p-4 border-b border-[#E8725A]/10">
                    <h3 className="font-bold text-[#2D2D2D]">✅ With AI B-Roll</h3>
                    <p className="text-xs text-[#5c5c5c] mt-1">B-roll inserted every 20–30 sec</p>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      { metric: 'Average watch time', value: '35–45 sec', note: 'of 60-sec clip', better: true },
                      { metric: 'Watch-through rate', value: '42–55%', note: 'reach the end', better: true },
                      { metric: 'Share rate', value: '3.2%', note: 'of viewers share', better: true },
                      { metric: 'Algorithm reach', value: '3–4× higher', note: 'reward for watch time', better: true },
                      { metric: 'Production time', value: '10 min total', note: 'upload → export', better: true },
                    ].map((item) => (
                      <div key={item.metric} className="flex items-center justify-between text-sm">
                        <span className="text-[#5c5c5c]">{item.metric}</span>
                        <div className="text-right">
                          <span className="font-bold text-[#E8725A]">{item.value}</span>
                          <span className="text-xs text-[#5c5c5c] ml-1">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The watch time improvement cascades: more watch time → better algorithm ranking → more impressions → more first-time visitors finding your church's content. B-roll isn't just an aesthetic upgrade. It's a distribution lever.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-3">What this means for a real church</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed mb-4">
                  If your church posts 4 sermon clips per week and currently gets 200 views per clip (talking head average), adding AI B-roll at 3–4× watch time improvement projects to:
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: 'Views per clip', before: '200', after: '600–800' },
                    { label: 'Monthly reach', before: '3,200', after: '10,000+' },
                    { label: 'New visitors/mo from video', before: '~4', after: '~15–20' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#F5F1EB] rounded-xl p-4">
                      <div className="text-xs text-[#5c5c5c] mb-2">{item.label}</div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-[#5c5c5c] line-through">{item.before}</span>
                        <ArrowRight className="w-3 h-3 text-[#E8725A]" />
                        <span className="text-sm font-bold text-[#E8725A]">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5c5c5c] mt-4 italic">
                  *Projections based on platform-reported B-roll engagement lift data. Individual results vary by audience, niche, and posting consistency.
                </p>
              </div>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#E8725A]" />
                Getting Started With AI B-Roll (This Week)
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                You don't need a media team or a stock subscription. Here's how to go from Sunday recording to B-roll-enhanced clips on Monday:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: '1',
                    title: 'Upload this week\'s sermon recording',
                    description: 'MP4, MOV, or YouTube link. Sermon Clips processes it and generates a timestamped transcript automatically.',
                    time: '2 min',
                  },
                  {
                    step: '2',
                    title: 'Select clip moments',
                    description: 'AI identifies the highest-engagement moments in your sermon. Choose which clips to generate — typically 2–4 per sermon for social.',
                    time: '3 min',
                  },
                  {
                    step: '3',
                    title: 'Enable AI B-roll',
                    description: 'Turn on B-roll generation. Select your preferred visual style (cinematic, minimal, Scripture-forward). AI matches footage to your transcript automatically.',
                    time: '1 min',
                  },
                  {
                    step: '4',
                    title: 'Review and export',
                    description: 'Watch the assembled clips. Swap any B-roll segment you want to change. Export in platform-optimized formats (9:16 for Reels/TikTok, 16:9 for YouTube).',
                    time: '5 min',
                  },
                  {
                    step: '5',
                    title: 'Schedule and post',
                    description: 'Publish directly to Instagram, TikTok, YouTube, and Facebook — or download and schedule via your preferred tool.',
                    time: '3 min',
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-[#2D2D2D]">{item.title}</h3>
                        <span className="text-sm font-semibold text-[#E8725A]">{item.time}</span>
                      </div>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8725A] rounded-2xl p-6 mb-8 text-white">
                <div className="text-lg font-bold mb-2">Total: ~14 minutes from upload to B-roll-enhanced clips ready to post</div>
                <p className="text-white/90 text-sm">
                  Compare to the old approach: 45–90 minutes manually searching stock libraries + editor time. AI B-roll generation doesn't just save money — it collapses the time from Sunday recording to Monday post.
                </p>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                B-roll is part of the same workflow that generates your{' '}
                <Link href="/blog/sermon-discussion-guide-ai" className="text-[#E8725A] hover:underline">small group discussion guide</Link>,{' '}
                <Link href="/blog/how-to-turn-sermon-into-devotional" className="text-[#E8725A] hover:underline">5-day devotional</Link>, and{' '}
                <Link href="/blog/church-social-media-captions-ai" className="text-[#E8725A] hover:underline">social media captions</Link> — all from the same sermon upload.{' '}
                See the full picture of{' '}
                <Link href="/blog/repurpose-sermon-content" className="text-[#E8725A] hover:underline">30+ pieces of content from one sermon</Link>.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'What is B-roll in church videos?',
                    a: 'B-roll is supplemental footage cut over the primary "A-roll" (the pastor speaking). In church videos it includes worship footage, Scripture text overlays, nature imagery, community shots, and visual illustrations that match what the pastor is saying. B-roll is what prevents "talking head syndrome" — static single-camera footage that viewers scroll past.',
                  },
                  {
                    q: 'How much does church video B-roll cost?',
                    a: 'Stock B-roll can cost $50–$150 per clip from premium libraries like Shutterstock or Getty. A monthly Storyblocks subscription runs $149–$299/year but requires manual searching and downloading. AI B-roll generation (via Sermon Clips) is included in your subscription — no per-clip fees, no manual searching, auto-inserted at the right moments.',
                  },
                  {
                    q: 'Does B-roll really improve church video watch time?',
                    a: 'Yes. Videos with B-roll inserted every 20–30 seconds see 3–4× higher watch-through rates than talking-head-only videos on social platforms. Instagram and TikTok algorithms reward watch time, so B-roll directly impacts reach — not just engagement.',
                  },
                  {
                    q: 'What types of B-roll work best for sermon clips?',
                    a: 'The best B-roll for sermon clips falls into 5 categories: (1) Scripture text animations that display the verse being quoted, (2) nature imagery matching themes (storms → chaos, sunrise → hope), (3) community/people footage showing everyday life scenarios the pastor references, (4) worship footage from your own church, and (5) abstract/cinematic visuals for emotional emphasis.',
                  },
                  {
                    q: 'Can AI automatically insert B-roll into my sermon video?',
                    a: 'Yes. Sermon Clips analyzes your sermon transcript to identify key themes, Scripture references, and emotional beats — then automatically inserts contextually relevant B-roll from a library of 30,000+ assets. No manual searching, no timeline editing. Upload → B-roll inserted → export ready.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{item.q}</h3>
                    <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <div className="bg-[#2D2D2D] rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stop posting talking heads.
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                Upload Sunday's sermon. AI generates clips with B-roll auto-inserted, captions burned in, and platform formats ready. First sermon free.
              </p>
              <Link
                href="/use-cases/ai-broll-church-video"
                className="inline-block bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors mr-4"
              >
                See AI B-Roll in Action
              </Link>
              <Link
                href="/#pricing"
                className="inline-block bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                Start Free
              </Link>
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
            <Link href="/use-cases/ai-broll-church-video" className="hover:text-white transition-colors">AI B-Roll</Link>
            <Link href="/multilingual-church-video" className="hover:text-white transition-colors">Multilingual</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
