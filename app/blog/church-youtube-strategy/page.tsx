import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Play, TrendingUp, Search, Zap, ArrowRight, Star, Target, Layers, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Church YouTube Strategy: How to Build a Sermon Library That Grows (2026)',
  description: 'YouTube is the #2 search engine and the best long-term home for your sermon archive. Learn the complete church YouTube strategy — channel setup, SEO, Shorts, and turning years of recordings into a discovery engine.',
  keywords: 'church YouTube strategy, sermon YouTube channel, church video YouTube, YouTube SEO church, sermon archive YouTube, church YouTube growth',
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Church YouTube Strategy: How to Build a Sermon Library That Grows (2026)',
        description: 'Complete guide to building a YouTube presence for your church — channel setup, SEO, long-form vs. Shorts strategy, and turning your sermon archive into a discovery engine.',
        datePublished: '2026-02-22',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: 'Sermon Clips' },
        publisher: {
          '@type': 'Organization',
          name: 'Sermon Clips',
          logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sermonclips.com/blog/church-youtube-strategy' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Should churches post full sermons or just clips on YouTube?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both — with different purposes. Full sermons (16:9, 30–60 min) build a searchable sermon library and serve existing congregation members who missed service. Clips via YouTube Shorts (9:16, under 60 sec) reach new audiences through algorithm discovery. The most effective church YouTube channels run both strategies simultaneously from the same sermon recording.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do churches get found on YouTube search?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'YouTube SEO for churches works through: (1) keyword-rich titles that match what people actually search ("sermon on anxiety," "what does the Bible say about forgiveness"), (2) detailed descriptions with timestamps and Scripture references, (3) accurate transcripts/captions that YouTube indexes for search, (4) consistent topic-based playlists that signal channel authority on specific subjects.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should a church post to YouTube?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum: one full sermon upload per week (same day as service, or Monday). Optimal: one full sermon + 2–3 Shorts clips per week. Consistency matters more than volume — YouTube\'s algorithm rewards channels that post on a predictable schedule. A church that uploads every Monday for 52 weeks will significantly out-perform a church that posts sporadically.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you upload old sermons to YouTube?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — and this is one of the highest-ROI activities for established churches. Back-catalog uploads benefit from YouTube\'s long-tail search discovery. A well-optimized sermon on "dealing with grief" uploaded today can start receiving search traffic within weeks and accumulate views for years. Process 5–10 back-catalog sermons per week using AI transcription and metadata generation to build your library quickly.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes a good church YouTube thumbnail?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The highest-performing church YouTube thumbnails follow a consistent formula: (1) pastor\'s face with a clear, expressive emotion, (2) large bold text with 3–5 words max (the sermon topic, not the title), (3) high contrast against a solid or blurred background, (4) consistent color/font branding across all thumbnails. Avoid: cluttered designs, small text, church logos as the main element, or stock photo backgrounds.',
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

      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />February 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />11 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Church YouTube Strategy: How to Build a Sermon Library That Grows (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            YouTube is the second-largest search engine in the world. Every week, millions of people type "sermon on anxiety," "what does the Bible say about forgiveness," and "how to pray when you don't feel like it." They're not searching on Google — they're searching on YouTube. Here's how your church becomes the answer.
          </p>

          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-youtube" className="hover:text-[#E8725A] transition-colors">Why YouTube Is Different From Every Other Platform</a></li>
              <li><a href="#two-strategies" className="hover:text-[#E8725A] transition-colors">The Two YouTube Strategies: Long-Form + Shorts</a></li>
              <li><a href="#channel-setup" className="hover:text-[#E8725A] transition-colors">Church YouTube Channel Setup (Done Right)</a></li>
              <li><a href="#seo" className="hover:text-[#E8725A] transition-colors">YouTube SEO for Sermon Content</a></li>
              <li><a href="#thumbnails" className="hover:text-[#E8725A] transition-colors">Thumbnail Formula That Gets Clicks</a></li>
              <li><a href="#archive" className="hover:text-[#E8725A] transition-colors">Turning Your Sermon Archive Into a Discovery Engine</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">The Weekly Upload Workflow</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* Why YouTube */}
            <section id="why-youtube" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-[#E8725A]" />
                Why YouTube Is Different From Every Other Platform
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Every other social platform — Instagram, TikTok, Facebook — is a <em>feed</em>. Content gets pushed to people who follow you or match an interest profile. Reach is strong for a few days, then the content effectively disappears.
              </p>
              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                YouTube is a <em>search engine</em>. Content gets indexed and can be discovered for years. A sermon you upload today about dealing with grief can receive its first view in 2031 from someone who just lost their mother and searched "sermon grief and hope."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#5c5c5c]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Feed Platforms (Instagram, TikTok)</h3>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    {['Peak reach in first 24–48 hours','Then algorithmic burial','Followers drive distribution','Entertainment-optimized','Content lifespan: days'].map(p => (
                      <li key={p} className="flex items-center gap-2"><span className="text-yellow-500">→</span>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">YouTube (Search + Algorithm)</h3>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    {['Discovery starts at upload and never stops','Search intent drives traffic','Keywords drive distribution','Information-optimized','Content lifespan: years'].map(p => (
                      <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] flex-shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '2B+', label: 'Monthly logged-in YouTube users', sub: '#2 website in the world after Google' },
                  { stat: '500hrs', label: 'Video uploaded to YouTube every minute', sub: 'The competition is real — SEO is essential' },
                  { stat: '#1', label: 'Platform for religious & spiritual content', sub: 'Highest engagement per view of any category' },
                ].map(item => (
                  <div key={item.stat} className="bg-[#2D2D2D] rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-[#E8725A] mb-1">{item.stat}</div>
                    <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                    <div className="text-white/40 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The strategic implication: YouTube is where you build a permanent, compounding library. TikTok and Instagram are where you build short-term reach. Both matter. But YouTube content you upload today will still be working for your church in 5 years — feed content won't.
              </p>
            </section>

            {/* Two Strategies */}
            <section id="two-strategies" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-[#E8725A]" />
                The Two YouTube Strategies: Long-Form + Shorts
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Most churches treat YouTube as one thing. The strongest church YouTube channels actually run two distinct strategies simultaneously — from the same sermon recording.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Strategy 1: Full Sermon Upload (Long-Form)</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">16:9 · 30–60 min</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Purpose</p>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed mb-4">Serve your existing congregation (replays for those who missed), build a searchable archive, and capture people searching for long-form teaching on specific topics.</p>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Audience</p>
                      <p className="text-sm text-[#5c5c5c]">People already interested in your church + people searching for teaching on specific Bible topics</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Optimization targets</p>
                      <ul className="space-y-1.5 text-sm text-[#5c5c5c]">
                        {['Keyword-rich title: "Sermon: [Topic] — [Series Name]"','Timestamps in description (every 5–10 min)','Full transcript in description','Cards linking to related sermons','End screen with subscribe + related video'].map(t => (
                          <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] mt-0.5 flex-shrink-0" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Strategy 2: YouTube Shorts (Clips)</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">9:16 · Under 60 sec</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Purpose</p>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed mb-4">Algorithm-driven discovery. Shorts are pushed to people who've never heard of your church based on topic interest. Every Short is a trailer for your long-form content and your church.</p>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Audience</p>
                      <p className="text-sm text-[#5c5c5c]">People who've never heard of your church — cold discovery via YouTube Shorts feed</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-2">Optimization targets</p>
                      <ul className="space-y-1.5 text-sm text-[#5c5c5c]">
                        {['Hook in first 2 seconds (question or bold claim)','Captions burned in (watched mute in feed)','B-roll to prevent scroll-past','Description links to full sermon','Pinned comment: "Full sermon in bio/link"'].map(t => (
                          <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] mt-0.5 flex-shrink-0" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#2D2D2D] mb-1">The flywheel</div>
                    <div className="text-sm text-[#5c5c5c] leading-relaxed">Shorts drive cold discovery → viewers subscribe → they watch long-form sermons → they become regular attendees. The funnel runs entirely within YouTube. Sermon Clips generates both the long-form upload package (transcript, description, timestamps) and the Shorts clips (reframed, captioned, B-roll inserted) from one upload.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Channel Setup */}
            <section id="channel-setup" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#E8725A]" />
                Church YouTube Channel Setup (Done Right)
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Most church YouTube channels are set up incorrectly — missing metadata, poorly structured playlists, weak channel page. Fix these before uploading anything else.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    element: 'Channel Name',
                    do: '"[Church Name] — Sermons & Teaching" or just "[Church Name]"',
                    dont: '"First Baptist Church of [City] Official YouTube Channel HD"',
                    why: 'Clean names index better. The word "Sermons" in your channel name helps YouTube categorize your content.',
                  },
                  {
                    element: 'Channel Description',
                    do: 'First 2 sentences: what you preach, where you\'re located, when services are. Then keywords: "weekly sermons, Bible teaching, [city] church, [denomination if applicable]"',
                    dont: 'Generic mission statement copy-pasted from your website that contains zero searchable terms',
                    why: 'YouTube indexes the first 200 characters of your channel description for search.',
                  },
                  {
                    element: 'Playlists',
                    do: 'Organize by: Sermon Series, Topic (Anxiety, Marriage, Grief, Purpose), and Book of the Bible. Each playlist = its own discovery surface.',
                    dont: 'One giant "All Sermons" playlist, or no playlists at all',
                    why: 'Topic-based playlists rank in YouTube search independently. "Sermons on anxiety" as a playlist title can rank for that search term.',
                  },
                  {
                    element: 'Channel Trailer',
                    do: '60–90 seconds: who you are, what you believe, what kind of content you post. Ends with subscribe CTA.',
                    dont: 'Full-length Sunday service recording as the trailer',
                    why: 'Non-subscribers see this first. It\'s your one chance to convert a cold visitor into a subscriber.',
                  },
                  {
                    element: 'Featured Sections',
                    do: 'Section 1: Latest uploads. Section 2: Most popular sermons. Section 3: Curated topic playlists (Anxiety, Faith, Purpose).',
                    dont: 'Default YouTube layout with no curation',
                    why: 'A curated homepage signals an active, organized channel — increases subscription rate from visitors.',
                  },
                ].map(item => (
                  <div key={item.element} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-3">{item.element}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-green-700 mb-1">✓ Do</div>
                        <div className="text-sm text-green-800">{item.do}</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-red-700 mb-1">✕ Don't</div>
                        <div className="text-sm text-red-800">{item.dont}</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#5c5c5c] flex items-start gap-1.5">
                      <span className="font-semibold text-[#2D2D2D] flex-shrink-0">Why:</span> {item.why}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* YouTube SEO */}
            <section id="seo" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-[#E8725A]" />
                YouTube SEO for Sermon Content
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                YouTube SEO is fundamentally different from Google SEO. The signals that drive YouTube ranking are: title keyword match, watch time percentage, click-through rate on thumbnails, and engagement (comments, likes, saves). Here's how each applies to sermon content.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Title formula for church YouTube videos</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { template: '"[Topic people search for] — Sermon by [Pastor Name]"', example: '"Dealing With Anxiety — Sermon by Pastor James"', why: 'Leads with search intent, not church branding' },
                    { template: '"What Does the Bible Say About [Topic]?"', example: '"What Does the Bible Say About Forgiveness?"', why: 'Direct match to high-volume question queries' },
                    { template: '"[Book Chapter:Verse] — [Sermon Title] | [Church Name]"', example: '"John 15:1-8 — Abiding in Christ | Riverside Church"', why: 'Captures people searching specific passages' },
                    { template: '"[Series Name] Week [#]: [Topic]"', example: '"Unshakeable Week 3: When Your World Falls Apart"', why: 'Series consistency builds watch-time chains' },
                  ].map(item => (
                    <div key={item.template} className="border border-[#F5F1EB] rounded-xl p-4">
                      <div className="text-sm font-mono text-[#5c5c5c] mb-1">{item.template}</div>
                      <div className="text-sm font-semibold text-[#2D2D2D] mb-1">{item.example}</div>
                      <div className="text-xs text-[#E8725A]">{item.why}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Description formula (copy this template)</h3>
                <div className="bg-[#F5F1EB] rounded-xl p-5 font-mono text-xs text-[#5c5c5c] leading-relaxed">
                  <p className="mb-3">[2–3 sentence sermon summary with main keyword in first sentence]</p>
                  <p className="mb-3">📖 Scripture: [Book Chapter:Verse]<br />🗓️ Date: [Month Day, Year]<br />🏛️ Series: [Series Name]</p>
                  <p className="mb-3">⏱️ TIMESTAMPS<br />0:00 — Introduction<br />3:45 — [First major point]<br />12:30 — [Second major point]<br />24:00 — [Application]<br />38:00 — Prayer + Invitation</p>
                  <p className="mb-3">📋 RESOURCES<br />→ Discussion Guide: [link]<br />→ Full transcript: [link]<br />→ More sermons on [topic]: [playlist link]</p>
                  <p>🔔 Subscribe for weekly sermons from [Church Name] in [City].<br />[Church website] | [Social links]</p>
                </div>
                <p className="text-xs text-[#5c5c5c] mt-3 italic">Sermon Clips auto-generates timestamps and transcripts — paste directly into this template.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Tags strategy</h3>
                <p className="text-sm text-[#5c5c5c] mb-4 leading-relaxed">YouTube's tag system is less important than titles but still contributes. Use this layered approach:</p>
                <div className="space-y-3">
                  {[
                    { tier: 'Tier 1 — Exact topic', tags: '"anxiety sermon", "sermon on anxiety", "dealing with anxiety Bible"', count: '3–4 tags' },
                    { tier: 'Tier 2 — Related topics', tags: '"fear sermon", "worry Bible", "peace of mind Christianity"', count: '3–4 tags' },
                    { tier: 'Tier 3 — Evergreen church terms', tags: '"Christian sermon", "Bible teaching", "Sunday sermon", "church service"', count: '3–4 tags' },
                    { tier: 'Tier 4 — Church identity', tags: '"[Church Name]", "[Pastor Name]", "[City] church", "[denomination]"', count: '3–4 tags' },
                  ].map(item => (
                    <div key={item.tier} className="flex items-start gap-4 text-sm">
                      <div className="font-semibold text-[#2D2D2D] w-36 flex-shrink-0">{item.tier}</div>
                      <div className="text-[#5c5c5c] flex-1 italic">{item.tags}</div>
                      <div className="text-[#E8725A] font-semibold flex-shrink-0">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Thumbnails */}
            <section id="thumbnails" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A]" />
                Thumbnail Formula That Gets Clicks
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Thumbnail click-through rate (CTR) is one of YouTube's primary ranking signals. A video with great SEO but a bad thumbnail underperforms. The formula for church thumbnails is specific — and different from what most churches do.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">✅ High-performing church thumbnail elements</h3>
                  <div className="space-y-3">
                    {[
                      { element: 'Pastor\'s face, clearly visible', detail: 'Expressive emotion — urgency, hope, seriousness. Not neutral.' },
                      { element: 'Bold text: 3–5 words max', detail: 'The topic, not the sermon title. "WHEN GOD FEELS DISTANT" not "Hiding in the Storm: Pt. 3 of Unshakeable"' },
                      { element: 'High contrast color background', detail: 'Solid color or blurred stage background. Must stand out at thumbnail size (120×90px).' },
                      { element: 'Consistent branding across all thumbnails', detail: 'Same font, same color palette. Subscribers recognize your thumbnails in their feed instantly.' },
                    ].map(item => (
                      <div key={item.element} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-[#2D2D2D] text-sm">{item.element}</div>
                          <div className="text-xs text-[#5c5c5c] mt-0.5">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">❌ Thumbnail mistakes most churches make</h3>
                  <div className="space-y-3">
                    {[
                      { mistake: 'Church logo as the primary element', fix: 'People don\'t click logos — they click faces and text that speaks to them' },
                      { mistake: 'Auto-generated YouTube screenshot', fix: 'Mid-sentence expression, bad framing. Always custom design.' },
                      { mistake: 'Overly designed / crowded', fix: '5+ elements competing. Viewed at thumbnail size, it reads as noise.' },
                      { mistake: 'Text matches the title exactly', fix: 'Thumbnail text and title should complement, not repeat. Different entry points.' },
                    ].map(item => (
                      <div key={item.mistake} className="flex items-start gap-3">
                        <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
                        <div>
                          <div className="font-medium text-[#2D2D2D] text-sm">{item.mistake}</div>
                          <div className="text-xs text-[#5c5c5c] mt-0.5">{item.fix}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#2D2D2D] rounded-xl p-5 mb-8">
                <p className="text-sm text-white/80 leading-relaxed">
                  <span className="font-bold text-white">Tool recommendation:</span> Design thumbnails in Canva using a locked template (brand colors, font, layout). Only the photo and text change each week. Thumbnail creation takes 5 minutes per sermon when the template is locked — not 45.
                </p>
              </div>
            </section>

            {/* Archive */}
            <section id="archive" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Turning Your Sermon Archive Into a Discovery Engine
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                If your church has been recording sermons for 5, 10, or 20 years — you have an extraordinary content asset sitting on hard drives. Uploading that archive to YouTube is one of the highest-ROI activities you can do for long-term digital reach.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Why back-catalog uploads compound over time</h3>
                <div className="space-y-3 text-sm text-[#5c5c5c]">
                  <p className="leading-relaxed">YouTube's search algorithm gives equal weight to new uploads and older content. A well-optimized 2019 sermon on "how to find purpose" competes equally with a 2026 sermon on the same topic. What determines ranking: title, description, watch time, and engagement — not upload date.</p>
                  <p className="leading-relaxed">The compounding effect: each sermon you upload is a new entry point into your church. Someone searching "sermon on loneliness" might land on a message your pastor preached in 2021 — and that becomes their introduction to your church in 2026.</p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4">
                    <p className="font-semibold text-[#2D2D2D] mb-2">Archive upload math</p>
                    <p className="text-[#5c5c5c]">50 sermons in archive × average 200 views/year per optimized upload = 10,000 views/year from content you've already preached. Fully passive discovery.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Archive upload workflow (AI-assisted)</h3>
                <div className="space-y-3">
                  {[
                    { step: '1', task: 'Batch upload recordings to Sermon Clips', detail: 'Process 5–10 older sermons per week rather than all at once' },
                    { step: '2', task: 'AI generates transcript + description + timestamps', detail: 'For each sermon — the metadata that makes old recordings searchable' },
                    { step: '3', task: 'Assign to topic-based playlists', detail: '"Sermons on Anxiety," "Marriage," "Faith Foundations" — organize on upload' },
                    { step: '4', task: 'Extract 1 Short per archive sermon', detail: 'One 60-second clip per old sermon gives Shorts feed a steady stream of content' },
                    { step: '5', task: 'Design thumbnail (5 min each)', detail: 'Use locked Canva template — batch 10 thumbnails in one sitting' },
                  ].map(item => (
                    <div key={item.step} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F5F1EB] transition-colors">
                      <div className="w-7 h-7 rounded-full bg-[#E8725A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                      <div>
                        <div className="font-medium text-[#2D2D2D] text-sm">{item.task}</div>
                        <div className="text-xs text-[#5c5c5c] mt-0.5">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Weekly Workflow */}
            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                The Weekly Upload Workflow
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Consistency is the single most important YouTube growth factor for churches. Here's a repeatable Monday workflow that covers everything — long-form upload + 3 Shorts — in under 30 minutes using Sermon Clips.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { time: '0–2 min', task: 'Upload Sunday recording to Sermon Clips', detail: 'Or paste the livestream link. Processing starts automatically.' },
                  { time: '2–7 min', task: 'Review transcript + timestamps', detail: 'AI generates both. Fix any names or Scripture references if needed.' },
                  { time: '7–12 min', task: 'Upload long-form to YouTube', detail: 'Paste AI-generated description. Apply pre-made thumbnail template. Set to premiere (Tuesday at 9am) so subscribers get notified.' },
                  { time: '12–17 min', task: 'Review 3 AI-selected Shorts clips', detail: 'Approve or swap. Each is already reframed 9:16, captioned, B-roll inserted.' },
                  { time: '17–22 min', task: 'Upload 3 Shorts to YouTube', detail: 'Schedule: Monday, Wednesday, Friday. Consistent cadence signals active channel to algorithm.' },
                  { time: '22–27 min', task: 'Add to playlist + archive upload (1 sermon)', detail: 'Add new sermon to series playlist. Process 1 back-catalog sermon with AI-generated metadata.' },
                ].map(item => (
                  <div key={item.time} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                    <div className="text-sm font-bold text-[#E8725A] w-20 flex-shrink-0">{item.time}</div>
                    <div>
                      <div className="font-semibold text-[#2D2D2D] text-sm mb-1">{item.task}</div>
                      <div className="text-xs text-[#5c5c5c]">{item.detail}</div>
                    </div>
                  </div>
                ))}
                <div className="bg-[#E8725A] rounded-xl p-5 text-white flex items-center justify-between">
                  <span className="font-bold">Total weekly YouTube workflow</span>
                  <span className="text-2xl font-bold">~27 minutes</span>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Pair this with the rest of your content workflow:{' '}
                <Link href="/blog/repurpose-sermon-content" className="text-[#E8725A] hover:underline">30+ pieces of content from one sermon</Link>{' '}
                covers the full picture — YouTube is one channel in a larger system that includes{' '}
                <Link href="/blog/church-social-media-captions-ai" className="text-[#E8725A] hover:underline">social captions</Link>,{' '}
                <Link href="/blog/sermon-discussion-guide-ai" className="text-[#E8725A] hover:underline">discussion guides</Link>, and{' '}
                <Link href="/blog/how-to-turn-sermon-into-devotional" className="text-[#E8725A] hover:underline">5-day devotionals</Link>{' '}
                — all from the same upload.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: 'Should churches post full sermons or just clips on YouTube?', a: 'Both — with different purposes. Full sermons (16:9, 30–60 min) build a searchable sermon library and serve existing congregation members who missed service. Clips via YouTube Shorts (9:16, under 60 sec) reach new audiences through algorithm discovery. The most effective church YouTube channels run both strategies simultaneously from the same sermon recording.' },
                  { q: 'How do churches get found on YouTube search?', a: 'YouTube SEO for churches works through: (1) keyword-rich titles that match what people actually search ("sermon on anxiety," "what does the Bible say about forgiveness"), (2) detailed descriptions with timestamps and Scripture references, (3) accurate transcripts/captions that YouTube indexes for search, (4) consistent topic-based playlists that signal channel authority on specific subjects.' },
                  { q: 'How often should a church post to YouTube?', a: "Minimum: one full sermon upload per week (same day as service, or Monday). Optimal: one full sermon + 2–3 Shorts clips per week. Consistency matters more than volume — YouTube's algorithm rewards channels that post on a predictable schedule. A church that uploads every Monday for 52 weeks will significantly out-perform a church that posts sporadically." },
                  { q: 'Can you upload old sermons to YouTube?', a: 'Yes — and this is one of the highest-ROI activities for established churches. Back-catalog uploads benefit from YouTube\'s long-tail search discovery. A well-optimized sermon on "dealing with grief" uploaded today can start receiving search traffic within weeks and accumulate views for years. Process 5–10 back-catalog sermons per week using AI transcription and metadata generation to build your library quickly.' },
                  { q: 'What makes a good church YouTube thumbnail?', a: "The highest-performing church YouTube thumbnails follow a consistent formula: (1) pastor's face with a clear, expressive emotion, (2) large bold text with 3–5 words max (the sermon topic, not the title), (3) high contrast against a solid or blurred background, (4) consistent color/font branding across all thumbnails. Avoid: cluttered designs, small text, church logos as the main element, or stock photo backgrounds." },
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
              <h2 className="text-3xl font-bold text-white mb-4">Your sermon archive is a content goldmine. Start mining it.</h2>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                Upload any sermon. Sermon Clips generates the transcript, timestamps, Shorts clips, and long-form description automatically — everything you need for a complete YouTube upload in under 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#pricing" className="bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors">
                  Start Free — First Sermon on Us
                </Link>
                <Link href="/sermon-transcription" className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 justify-center">
                  <ArrowRight className="w-4 h-4" />
                  See Transcription Features
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-4">No credit card required</p>
            </div>

          </div>
        </div>
      </article>

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
            <Link href="/blog/church-video-reframing" className="hover:text-white transition-colors">Reframing Guide</Link>
            <Link href="/sermon-transcription" className="hover:text-white transition-colors">Transcription</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
