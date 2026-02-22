import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  Video,
  Mic,
  FileText,
  Image,
  Mail,
  Play,
  Share2,
  Zap,
  BookOpen,
  MessageSquare,
  Users,
  TrendingUp,
  Smartphone,
} from 'lucide-react';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'How to Repurpose One Sermon Into 30+ Pieces of Content (2026)',
  description:
    'Turn every Sunday sermon into 30+ pieces of content across video, audio, written, and visual channels. Complete church content repurposing guide with templates and weekly workflow.',
  keywords:
    'repurpose sermon content, sermon content ideas, church content strategy, repurpose sermons, sermon to content, church social media content, sermon repurposing',
  openGraph: {
    title: 'How to Repurpose One Sermon Into 30+ Pieces of Content (2026)',
    description:
      'Turn every Sunday sermon into 30+ pieces of content. Complete guide: video clips, audio, blog posts, graphics, email, and more — with weekly workflow.',
    type: 'article',
    url: 'https://sermonclips.com/blog/repurpose-sermon-content',
    images: [
      {
        url: 'https://sermonclips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Repurpose One Sermon Into 30+ Pieces of Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Repurpose One Sermon Into 30+ Pieces of Content (2026)',
    description:
      'One sermon → 30+ content pieces. Complete repurposing guide for church media teams.',
  },
  alternates: {
    canonical: 'https://sermonclips.com/blog/repurpose-sermon-content',
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Repurpose One Sermon Into 30+ Pieces of Content (2026)',
  description:
    'Complete guide to turning every Sunday sermon into 30+ pieces of content across video, audio, written, and visual channels.',
  datePublished: '2026-02-22',
  dateModified: '2026-02-22',
  author: {
    '@type': 'Organization',
    name: 'Sermon Clips',
    url: 'https://sermonclips.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sermon Clips',
    url: 'https://sermonclips.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sermonclips.com/logo.png',
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I repurpose sermon content for social media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with your sermon recording. Extract 3–5 short clips (30–90 seconds) for Instagram Reels, TikTok, and YouTube Shorts. Then pull key quotes for graphics, write a summary for your blog, send a highlight email, and export audio for your podcast. With AI tools, this whole process takes under 30 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best ways to repurpose a sermon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The highest-impact sermon repurposing formats are: (1) short video clips for social media, (2) podcast/audio excerpt, (3) blog post or transcript, (4) quote graphics for Instagram, (5) email newsletter with the key point. AI tools can handle all five in one automated workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to repurpose a sermon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manually, repurposing a full sermon typically takes 4–6 hours per week. With AI-powered tools like Sermon Clips, the same workflow takes 20–30 minutes — you review and approve rather than build from scratch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I repurpose a sermon into a podcast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most sermon recordings can be exported as audio-only podcast episodes with minimal editing. You can also create shorter "sermon highlight" podcast episodes (10–15 minutes) from a longer message — these often perform better than full-length episodes for first-time listeners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many content pieces can I get from one sermon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 45-minute sermon can realistically yield 30–40 pieces of content: 5–8 video clips, 3–5 audio clips, 1 full podcast episode, 1 blog post, 1 email, 5–10 quote graphics, 5–7 social captions, Instagram Stories, a discussion guide, and more. The key is building a system so you capture everything consistently.",
      },
    },
  ],
};

// ─── Content Items Data ───────────────────────────────────────────────────────
const videoContent = [
  { num: 1, title: 'Full sermon recording (YouTube, website, app)', time: '0 min — already exists' },
  { num: 2, title: 'Short clip #1: Opening hook / story (60–90 sec)', time: '2 min with AI' },
  { num: 3, title: 'Short clip #2: Key teaching moment (60–90 sec)', time: '2 min with AI' },
  { num: 4, title: 'Short clip #3: Conviction/challenge moment (60 sec)', time: '2 min with AI' },
  { num: 5, title: 'Short clip #4: Closing / call to action (45–60 sec)', time: '2 min with AI' },
  { num: 6, title: 'YouTube Shorts (≤60 sec, vertical, reframed)', time: '1 min with AI' },
  { num: 7, title: 'Instagram Reel (vertical, captioned)', time: '1 min with AI' },
  { num: 8, title: 'TikTok (captioned, trending audio optional)', time: '1 min with AI' },
  { num: 9, title: 'Facebook short video (square or 16:9)', time: '1 min with AI' },
  { num: 10, title: 'Sermon recap video (2–3 min highlight reel)', time: '5 min review' },
  { num: 11, title: 'Spanish/translated clip (auto-dubbed)', time: '2 min with AI' },
];

const audioContent = [
  { num: 12, title: 'Full sermon podcast episode (MP3 export)', time: '5 min' },
  { num: 13, title: 'Sermon highlight episode (10–15 min best moments)', time: '15 min' },
  { num: 14, title: 'Audiogram #1 — key quote with waveform animation', time: '5 min' },
  { num: 15, title: 'Audiogram #2 — story moment for podcast promotion', time: '5 min' },
];

const writtenContent = [
  { num: 16, title: 'Sermon transcript (full, for accessibility + SEO)', time: '0 min with AI' },
  { num: 17, title: 'Blog post: Key sermon points expanded (800–1,200 words)', time: '20 min' },
  { num: 18, title: 'Email newsletter (main point + 3 takeaways + CTA)', time: '15 min' },
  { num: 19, title: 'Small group discussion guide (5–7 questions)', time: '10 min' },
  { num: 20, title: 'Devotional (5-day plan from sermon points)', time: '20 min' },
  { num: 21, title: 'Social caption #1 — for Reel/TikTok (hook + CTA)', time: '2 min' },
  { num: 22, title: 'Social caption #2 — for Facebook post', time: '2 min' },
  { num: 23, title: 'Social caption #3 — for LinkedIn (pastoral leadership angle)', time: '2 min' },
  { num: 24, title: 'Thread / Twitter/X breakdown (5–7 tweet thread)', time: '5 min' },
];

const visualContent = [
  { num: 25, title: 'Quote graphic #1 — key scripture (Instagram square)', time: '3 min' },
  { num: 26, title: 'Quote graphic #2 — memorable sermon quote', time: '3 min' },
  { num: 27, title: 'Quote graphic #3 — sermon title / series art', time: '3 min' },
  { num: 28, title: 'Instagram Story (clip highlight + swipe-up CTA)', time: '2 min' },
  { num: 29, title: 'Pinterest pin (scripture or quote graphic + description)', time: '2 min' },
];

const communityContent = [
  { num: 30, title: 'App/website "Message Notes" page (interactive transcript)', time: '5 min' },
  { num: 31, title: 'YouTube chapter markers from transcript timestamps', time: '5 min' },
  { num: 32, title: 'Next Sunday teaser post ("Coming this week...")', time: '2 min' },
  { num: 33, title: 'Prayer request post tied to sermon theme', time: '2 min' },
  { num: 34, title: 'Behind-the-scenes / sermon prep Story or Reel', time: '3 min' },
];

const weeklyWorkflow = [
  {
    day: 'Sunday',
    icon: '🎤',
    task: 'Record service + upload raw file',
    duration: '0 extra min',
    note: 'Just hit record — AI does the rest',
  },
  {
    day: 'Monday',
    icon: '✂️',
    task: 'Review AI-generated clips + approve transcript',
    duration: '20 min',
    note: 'AI presents best moments; you select and approve',
  },
  {
    day: 'Tuesday',
    icon: '📱',
    task: 'Schedule Reel + TikTok + Facebook short video',
    duration: '10 min',
    note: 'Clips ready; add captions in app',
  },
  {
    day: 'Wednesday',
    icon: '📧',
    task: 'Send weekly email newsletter',
    duration: '15 min',
    note: 'Transcript + AI summary = ready-to-edit draft',
  },
  {
    day: 'Thursday',
    icon: '🎵',
    task: 'Post YouTube Shorts + publish blog post',
    duration: '10 min',
    note: 'SEO content already drafted from transcript',
  },
  {
    day: 'Friday',
    icon: '🖼️',
    task: 'Queue quote graphics for weekend posts',
    duration: '10 min',
    note: 'Canva templates + AI-extracted quotes',
  },
  {
    day: 'Saturday',
    icon: '🎙️',
    task: 'Publish podcast episode + teaser for next week',
    duration: '5 min',
    note: 'MP3 export already ready; upload to RSS',
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function RepurposeSermonContentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* ── Nav ── */}
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </Link>
            <Link href="/" className="text-sm font-semibold text-gray-900">
              Sermon Clips
            </Link>
          </div>
        </nav>

        {/* ── Hero ── */}
        <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium mb-4">
            <Share2 className="w-4 h-4" />
            Content Strategy · Church Media
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            How to Repurpose One Sermon Into 30+ Pieces of Content (2026)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Most church media teams squeeze 2–3 posts out of a Sunday sermon. With the right system, that same sermon becomes 30+ pieces across every platform — with less than 30 minutes of work.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 22, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Sermon Clips Team
            </span>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="max-w-4xl mx-auto px-6 pb-20">

          {/* Intro */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              A 45-minute sermon is not just a sermon. It&apos;s raw material. Inside that recording are viral moments, quotable lines, teaching illustrations, podcast episodes, email content, small group questions, and enough social posts to fill an entire month — if you know how to extract them.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The problem isn&apos;t ideas. It&apos;s time. Manually cutting clips, writing captions, transcribing, formatting posts — it&apos;s 5–6 hours of media team work per sermon. Most churches simply don&apos;t have that capacity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This guide breaks down every piece of content you can extract from one sermon — organized by type — and shows you how to produce all of it in under 30 minutes a week with the right tools.
            </p>
          </section>

          {/* Quick Stat Bar */}
          <div className="grid grid-cols-3 gap-4 bg-indigo-50 rounded-2xl p-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-700">34</div>
              <div className="text-sm text-gray-600 mt-1">Content pieces from 1 sermon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-700">&lt;30 min</div>
              <div className="text-sm text-gray-600 mt-1">Total weekly production time (AI-assisted)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-700">6 hrs</div>
              <div className="text-sm text-gray-600 mt-1">What this takes manually</div>
            </div>
          </div>

          {/* The 30+ List — Video */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Video Content (11 pieces)</h2>
                <p className="text-gray-500 text-sm">Clips, shorts, reels, and translated versions</p>
              </div>
            </div>
            <div className="space-y-3">
              {videoContent.map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm text-red-800">
                <strong>Pro tip:</strong> Items 2–11 can all be generated in one pass with{' '}
                <Link href="/" className="underline font-medium">Sermon Clips</Link>. Upload once; AI identifies the best moments, reframes for vertical, adds captions, and exports to each platform spec automatically.
              </p>
            </div>
          </section>

          {/* Audio */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Mic className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Audio Content (4 pieces)</h2>
                <p className="text-gray-500 text-sm">Podcast, audiograms, and highlight reels</p>
              </div>
            </div>
            <div className="space-y-3">
              {audioContent.map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-sm text-purple-800">
                <strong>Church Podcast Stat:</strong> Podcast listeners are 20% more likely to donate than non-listeners (Barna, 2025). If you&apos;re not shipping a podcast from your sermon, you&apos;re leaving engagement on the table.
              </p>
            </div>
          </section>

          {/* Written */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Written Content (9 pieces)</h2>
                <p className="text-gray-500 text-sm">Blog, email, study guides, and social captions</p>
              </div>
            </div>
            <div className="space-y-3">
              {writtenContent.map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>SEO note:</strong> A blog post from your sermon transcript targets search terms your congregation is already Googling (e.g., &quot;anxiety and faith&quot;, &quot;how to forgive&quot;). This is how smaller churches build organic reach — content that exists 24/7, not just on Sunday morning. See our{' '}
                <Link href="/sermon-transcription" className="underline font-medium">sermon transcription guide</Link> for how AI handles this automatically.
              </p>
            </div>
          </section>

          {/* Visual */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Image className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Visual & Graphics (5 pieces)</h2>
                <p className="text-gray-500 text-sm">Quote cards, Stories, and Pinterest pins</p>
              </div>
            </div>
            <div className="space-y-3">
              {visualContent.map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Community */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Community & Engagement (5 pieces)</h2>
                <p className="text-gray-500 text-sm">Notes pages, chapters, teasers, and engagement posts</p>
              </div>
            </div>
            <div className="space-y-3">
              {communityContent.map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-2 py-1 flex-shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Divider / Total Count */}
          <div className="text-center py-8 mb-12 border-t border-b border-gray-100">
            <p className="text-5xl font-bold text-gray-900 mb-2">34</p>
            <p className="text-xl text-gray-600">pieces of content from one Sunday sermon</p>
            <p className="text-sm text-gray-400 mt-2">And you can add more: multilingual dubs, denominational publications, app push notifications, bulletin inserts, and screen slides.</p>
          </div>

          {/* Weekly Workflow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Weekly Workflow</h2>
            <p className="text-gray-600 mb-6">
              Here&apos;s how a church media team turns Sunday&apos;s sermon into a full week of content — with AI handling the heavy lifting.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Day</th>
                    <th className="px-4 py-3 text-left">Task</th>
                    <th className="px-4 py-3 text-left">Time</th>
                    <th className="px-4 py-3 text-left rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyWorkflow.map((row, i) => (
                    <tr
                      key={row.day}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 font-semibold whitespace-nowrap">
                        <span className="mr-2">{row.icon}</span>
                        {row.day}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{row.task}</td>
                      <td className="px-4 py-3 font-medium text-indigo-600 whitespace-nowrap">{row.duration}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                  <tr className="bg-indigo-900 text-white">
                    <td className="px-4 py-3 font-bold rounded-bl-xl">Total</td>
                    <td className="px-4 py-3 font-medium">34 pieces across 7 channels</td>
                    <td className="px-4 py-3 font-bold text-indigo-200">~70 min</td>
                    <td className="px-4 py-3 text-indigo-300 text-xs rounded-br-xl">vs 6 hrs manually</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Most Churches Get Stuck */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Most Church Teams Only Get to 5</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  problem: 'No system',
                  detail: 'Content lives in a volunteer\'s head. When they\'re out, nothing gets posted.',
                  fix: 'Build a template-based workflow. Same steps every Sunday.',
                },
                {
                  problem: 'Manual editing is a bottleneck',
                  detail: 'One volunteer spending 4 hrs on clips limits the whole pipeline.',
                  fix: 'AI handles clip selection and captioning. Volunteer reviews and approves in 20 min.',
                },
                {
                  problem: 'Platform silos',
                  detail: 'Team posts on Instagram but forgets YouTube Shorts, LinkedIn, and Pinterest entirely.',
                  fix: 'Export platform-specific versions once. Publish with a scheduling tool.',
                },
                {
                  problem: 'Starting from scratch each week',
                  detail: 'Rewriting captions, reformatting videos — same effort every sermon.',
                  fix: 'Templates + AI drafts. Review, don\'t rebuild.',
                },
              ].map((item) => (
                <div key={item.problem} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">❌ {item.problem}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.detail}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 font-medium">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Content Multiplier: Smaller Churches */}
          <section className="mb-12 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What This Looks Like for a Church of 150
            </h2>
            <p className="text-gray-700 mb-6">
              You don&apos;t need a media team to do this. One part-time communications volunteer (5–8 hrs/week) running the right tools can cover the full 34-piece content plan. Here&apos;s a realistic before and after:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-red-100">
                <h3 className="font-bold text-gray-900 mb-3 text-red-700">Before (current state)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 2 clips/week, English only</li>
                  <li>• 1 Facebook post on Sundays</li>
                  <li>• No podcast</li>
                  <li>• No blog</li>
                  <li>• No YouTube Shorts</li>
                  <li>• Volunteer spends 4 hrs — feels behind</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-3 text-green-700">After (with AI workflow)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 4 vertical clips + 1 recap Reel</li>
                  <li>• Posts M–Sat across 4 platforms</li>
                  <li>• Full podcast episode + audiogram</li>
                  <li>• SEO blog post from transcript</li>
                  <li>• Weekly email newsletter</li>
                  <li>• Volunteer spends 70 min — feels ahead</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Multilingual Note */}
          <section className="mb-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Bonus: Add Multilingual Content
                </h2>
                <p className="text-gray-700 mb-3">
                  If your church serves non-English-speaking congregants — or you want to reach diaspora communities online — you can double your content output with translated and dubbed clips.
                </p>
                <p className="text-gray-700">
                  AI dubbing tools can produce Spanish, Portuguese, Mandarin, French, and 27+ other languages from your English recording. One sermon becomes two sermon content stacks: your primary language and your secondary language community. Learn more:{' '}
                  <Link href="/multilingual-church-video" className="text-indigo-700 underline font-medium">
                    Multilingual Church Video →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I repurpose sermon content for social media?',
                  a: 'Start with your sermon recording. Extract 3–5 short clips (30–90 seconds) for Instagram Reels, TikTok, and YouTube Shorts. Then pull key quotes for graphics, write a summary for your blog, send a highlight email, and export audio for your podcast. With AI tools, this whole process takes under 30 minutes.',
                },
                {
                  q: 'What are the best ways to repurpose a sermon?',
                  a: 'The highest-impact formats are: (1) short video clips for social media, (2) podcast/audio excerpt, (3) blog post or transcript, (4) quote graphics for Instagram, and (5) email newsletter with the key point. AI tools can handle all five in one automated workflow.',
                },
                {
                  q: 'How long does it take to repurpose a sermon?',
                  a: 'Manually, repurposing a full sermon typically takes 4–6 hours per week. With AI-powered tools like Sermon Clips, the same workflow takes 20–30 minutes — you review and approve rather than build from scratch.',
                },
                {
                  q: 'Can I repurpose a sermon into a podcast?',
                  a: 'Yes. Most sermon recordings export cleanly as audio-only podcast episodes. You can also create shorter "sermon highlight" episodes (10–15 min) from a longer message — these often perform better for first-time listeners.',
                },
                {
                  q: 'How many content pieces can I get from one sermon?',
                  a: 'A 45-minute sermon can realistically yield 30–40 pieces of content: 5–8 video clips, audio podcast, transcript/blog, email, quote graphics, social captions, Instagram Stories, discussion guide, and more. The key is building a consistent system so you capture everything each week.',
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  href: '/blog/how-to-make-sermon-clips',
                  title: 'How to Make Sermon Clips',
                  desc: 'Complete step-by-step walkthrough for creating your first clips',
                  icon: Scissors,
                },
                {
                  href: '/sermon-transcription',
                  title: 'AI Sermon Transcription',
                  desc: 'Turn sermon audio into searchable text in minutes',
                  icon: FileText,
                },
                {
                  href: '/blog/sermon-shorts-complete-guide',
                  title: 'Sermon Shorts: Complete Guide',
                  desc: 'YouTube Shorts and Reels strategy for churches',
                  icon: Smartphone,
                },
                {
                  href: '/multilingual-church-video',
                  title: 'Multilingual Church Video',
                  desc: 'Reach non-English communities with auto-dubbed clips',
                  icon: MessageSquare,
                },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">{link.title}</p>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-indigo-900 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop Leaving 28 Content Pieces on the Table
            </h2>
            <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
              Upload your next sermon to Sermon Clips. AI identifies the best moments, captions every clip, reframes for vertical, and publishes to every platform — in one workflow, under 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#pricing"
                className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Start Free — 1 sermon included
              </Link>
              <Link
                href="/#how-it-works"
                className="border border-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-800 transition-colors flex items-center gap-2 justify-center"
              >
                <Play className="w-4 h-4" />
                See how it works
              </Link>
            </div>
            <p className="text-indigo-400 text-sm mt-4">No credit card required · Setup in 3 minutes</p>
          </section>
        </main>
      </div>
    </>
  );
}
