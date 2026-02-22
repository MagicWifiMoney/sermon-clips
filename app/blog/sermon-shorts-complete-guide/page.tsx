import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, ArrowRight, Play, Smartphone, TrendingUp, Zap, Youtube, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermon Shorts: The Complete Guide for Churches (2026) | Sermon Clips',
  description: 'Learn how to create YouTube Shorts, Instagram Reels, and TikToks from your sermons. Formats, best practices, what works, what doesn\'t — the definitive 2026 guide for church media teams.',
  keywords: 'sermon shorts, sermon youtube shorts, church youtube shorts, sermon clips for youtube shorts, church short form video, sermon reels, tiktok sermon clips, sermon short videos',
  openGraph: {
    title: 'Sermon Shorts: The Complete Guide for Churches (2026)',
    description: 'YouTube Shorts gets 200 billion views per day. Your sermons should be in the feed. Here\'s how to do it right.',
    type: 'article',
    publishedTime: '2026-02-21T00:00:00.000Z',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are sermon shorts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sermon shorts are vertical, short-form video clips (15–90 seconds) taken from a full-length sermon and optimized for YouTube Shorts, Instagram Reels, and TikTok. They typically feature captions, are reframed to 9:16 aspect ratio, and highlight a single compelling moment or teaching from the sermon."
      }
    },
    {
      "@type": "Question",
      "name": "How long should sermon shorts be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ideal length for sermon shorts is 30–60 seconds for TikTok and Instagram Reels, and up to 3 minutes for YouTube Shorts (the platform extended its limit in 2024). Most high-performing sermon clips on YouTube Shorts are under 90 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "How many sermon shorts should a church post per week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with 3–5 shorts per week — one per platform per day is a sustainable rhythm for most church media teams. Consistency matters more than frequency: three posts per week every week outperforms seven posts one week and nothing the next."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI automatically create sermon shorts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AI tools like Sermon Clips can process a full-length sermon, identify the best 30–90 second moments, reframe the video to vertical, add captions, and prepare clips for publishing — all without manual editing. This reduces clip creation from 3–4 hours per sermon to under 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Do YouTube Shorts help church channels grow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, significantly. YouTube's algorithm actively promotes Shorts to non-subscribers, making them one of the most effective discovery tools for churches. Channels that consistently post Shorts see faster subscriber growth than those relying on long-form videos alone."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sermon Shorts: The Complete Guide for Churches (2026)",
  "datePublished": "2026-02-21",
  "dateModified": "2026-02-21",
  "author": { "@type": "Organization", "name": "Sermon Clips" },
  "publisher": { "@type": "Organization", "name": "Sermon Clips" },
  "description": "Learn how to create YouTube Shorts, Instagram Reels, and TikToks from your sermons in 2026.",
  "keywords": "sermon shorts, church youtube shorts, sermon clips, short form video church"
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
            </div>
          </Link>
          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
            Try Free
          </Link>
        </nav>
      </header>

      {/* Article */}
      <main className="pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#5c5c5c] mb-8">
            <Link href="/blog" className="flex items-center gap-1 hover:text-[#E8725A] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Blog
            </Link>
            <span>/</span>
            <span>Sermon Shorts</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> February 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min read</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Shorts: The Complete Guide for Churches (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8">
            YouTube Shorts gets <strong>200 billion views per day</strong>. Instagram Reels reaches 2 billion monthly users. TikTok serves faith content to millions of people who have never set foot in a church.
          </p>
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-10">
            Your sermons belong in that feed. Here&apos;s how to get them there — and how to do it without burning out your media team.
          </p>

          {/* TOC */}
          <div className="bg-white rounded-2xl p-6 mb-12 border border-[#2D2D2D]/10">
            <p className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wider mb-4">In this guide</p>
            <ol className="space-y-2 text-sm text-[#5c5c5c]">
              {[
                "What are sermon shorts?",
                "Why every church should be posting shorts in 2026",
                "Platform breakdown: YouTube Shorts vs Reels vs TikTok",
                "The anatomy of a high-performing sermon short",
                "How to find the best moments in your sermon",
                "Technical specs for every platform",
                "Captions: the non-negotiable",
                "Your weekly sermon shorts workflow",
                "AI vs manual: a real comparison",
                "Common mistakes and how to avoid them",
                "FAQ",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#E8725A] font-medium">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">1. What are sermon shorts?</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            Sermon shorts are short-form vertical video clips — typically 15 to 90 seconds — cut from a full-length sermon and published to YouTube Shorts, Instagram Reels, or TikTok.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            They&apos;re not promotional clips. They&apos;re not church announcements. They&apos;re the actual content of the sermon — one powerful moment, one question, one story — delivered in a format that works on mobile feeds.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            Done right, sermon shorts extend the reach of your message beyond Sunday morning, bring new people to your church&apos;s content, and build a digital congregation that grows alongside your physical one.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">2. Why every church should be posting shorts in 2026</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { stat: "200B", label: "YouTube Shorts daily views", icon: <Youtube className="w-5 h-5 text-[#E8725A]" /> },
              { stat: "2B+", label: "Monthly YouTube Shorts users", icon: <TrendingUp className="w-5 h-5 text-[#E8725A]" /> },
              { stat: "5.91%", label: "Average Shorts engagement rate", icon: <Star className="w-5 h-5 text-[#E8725A]" /> },
              { stat: "85%", label: "Short-form video watched with sound off", icon: <Smartphone className="w-5 h-5 text-[#E8725A]" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#2D2D2D]/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8725A]/10 flex items-center justify-center shrink-0">{item.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-[#2D2D2D]">{item.stat}</p>
                  <p className="text-xs text-[#5c5c5c]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            The numbers matter, but the real reason is simpler: <strong>short-form video is where unchurched people spend their time</strong>. Long-form sermon recordings on YouTube are valuable for your existing congregation. Shorts are how you reach people who don&apos;t know you exist.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            YouTube&apos;s algorithm actively promotes Shorts to non-subscribers. That means a compelling 60-second clip from Sunday&apos;s sermon can appear in the feed of someone who has never heard of your church — and who might need exactly what your pastor said.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            Stories like this happen constantly: a pastor posts a Shorts clip about grief. Someone going through a divorce sees it at midnight. They search for more. They show up on Easter Sunday. That&apos;s not an edge case — it&apos;s the regular fruit of a consistent sermon shorts strategy.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">3. Platform breakdown: YouTube Shorts vs Reels vs TikTok</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-6">
            Each platform has a different audience, algorithm, and content culture. You don&apos;t have to be everywhere — but you should know where your church&apos;s people are.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-3 rounded-tl-xl">Platform</th>
                  <th className="text-left p-3">Max Length</th>
                  <th className="text-left p-3">Best For</th>
                  <th className="text-left p-3 rounded-tr-xl">Church Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { platform: "YouTube Shorts", length: "Up to 3 min", best: "Discovery + long-term archive", priority: "🔥 Highest" },
                  { platform: "Instagram Reels", length: "Up to 90 sec", best: "Visual community, ages 25–45", priority: "🔥 High" },
                  { platform: "TikTok", length: "Up to 10 min", best: "Reaching unchurched under 35", priority: "⚡ High (if resourced)" },
                  { platform: "Facebook Reels", length: "Up to 90 sec", best: "Existing congregation, 45+", priority: "📌 Medium" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/60"}>
                    <td className="p-3 font-medium text-[#2D2D2D]">{row.platform}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.length}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.best}</td>
                    <td className="p-3">{row.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            <strong>Start with YouTube Shorts.</strong> YouTube is the second largest search engine in the world, and Shorts feed directly into your channel&apos;s subscriber growth. Every Short you post is also permanently discoverable via search — unlike TikTok or Instagram, where content has a shorter shelf life.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            Once you have a YouTube Shorts rhythm, repurpose the same clips to Instagram Reels. The format is identical (9:16, vertical, captioned). You&apos;re not creating new content — you&apos;re distributing the same clip to a second platform.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">4. The anatomy of a high-performing sermon short</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-6">
            After studying hundreds of viral church clips, the pattern is consistent. High-performing sermon shorts share these five elements:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                num: "01",
                title: "Hook in the first 3 seconds",
                body: "The first three seconds determine whether someone watches or scrolls. The best hooks are questions ('What would you do if you knew God was watching?'), bold statements ('Most Christians have never actually read the Bible'), or mid-sentence clips that create curiosity ('...and that's when everything changed').",
              },
              {
                num: "02",
                title: "One idea, fully delivered",
                body: "The best sermon shorts make exactly one point — and make it well. Don't summarize the whole sermon. Find the 60 seconds where your pastor lands one truth with clarity and weight. That's your clip.",
              },
              {
                num: "03",
                title: "Captions throughout",
                body: "85% of short-form video is watched with sound off. If your clip doesn't have captions, most viewers will scroll past without ever hearing your message. Captions aren't optional — they're the difference between being heard and being ignored.",
              },
              {
                num: "04",
                title: "Vertical framing (9:16)",
                body: "Horizontal sermon footage doesn't perform on mobile feeds. Vertical clips fill the screen and feel native to the platform. AI tools can auto-reframe horizontal footage to vertical — tracking the speaker's face and keeping them centered.",
              },
              {
                num: "05",
                title: "No CTA required (but allowed)",
                body: "Sermon shorts don't need 'subscribe and hit the bell.' The clip itself is the value. If it's good, people will watch more. That said, a soft close ('This was from Sunday's message on [topic]') performs well and contextualizes the clip without being pushy.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#2D2D2D]/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8725A]/10 text-[#E8725A] flex items-center justify-center shrink-0 text-sm font-bold">{item.num}</div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-1">{item.title}</h3>
                    <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">5. How to find the best moments in your sermon</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            This is where most church media teams spend the most time — scrubbing through a 45-minute recording looking for the moments worth clipping. Here&apos;s a faster approach.
          </p>

          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">The manual method</h3>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            Watch the sermon with a notepad. Mark timestamps when:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "The room reacts (laughter, silence, applause)",
              "The pastor asks a rhetorical question",
              "A story begins and resolves within 60–90 seconds",
              "A key phrase gets repeated for emphasis",
              "A personal illustration lands emotionally",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[#5c5c5c]">
                <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            Expect to watch 45 minutes and mark 8–12 potential moments. Then review each and select 3–5. Total time: 2–3 hours before you&apos;ve even started editing.
          </p>

          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">The AI method</h3>
          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            AI sermon clip tools (like Sermon Clips) transcribe the full recording, analyze the text for emotional peaks, questions, key teaching moments, and audience-reaction patterns, then automatically select and cut the top clips. The same selection process that takes 2–3 hours manually takes 5–10 minutes. You review and approve — the AI does the finding.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">6. Technical specs for every platform</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-3 rounded-tl-xl">Spec</th>
                  <th className="text-left p-3">YouTube Shorts</th>
                  <th className="text-left p-3">Instagram Reels</th>
                  <th className="text-left p-3 rounded-tr-xl">TikTok</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { spec: "Aspect Ratio", yt: "9:16", ig: "9:16", tt: "9:16" },
                  { spec: "Resolution", yt: "1080 × 1920", ig: "1080 × 1920", tt: "1080 × 1920" },
                  { spec: "Max Length", yt: "3 minutes", ig: "90 seconds", tt: "10 minutes" },
                  { spec: "Ideal Length", yt: "30–90 sec", ig: "30–60 sec", tt: "30–60 sec" },
                  { spec: "File Format", yt: "MP4, MOV", ig: "MP4, MOV", tt: "MP4, MOV" },
                  { spec: "Max File Size", yt: "256 GB", ig: "4 GB", tt: "500 MB" },
                  { spec: "Captions", yt: "Auto + manual", ig: "Auto (required)", tt: "Auto + stickers" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/60"}>
                    <td className="p-3 font-medium text-[#2D2D2D]">{row.spec}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.yt}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.ig}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.tt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            <strong>Safe zone rule:</strong> Keep important text and your pastor&apos;s face within the center 80% of the frame. Platform UI (progress bars, buttons, captions) will cover the edges. Captions should sit between 15% and 70% up from the bottom.
          </p>

          {/* Section 7 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">7. Captions: the non-negotiable</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            We say this in every guide, and we&apos;ll keep saying it: <strong>85% of short-form video is watched with no sound</strong>. Scrolling through a feed in a waiting room, on a subway, at work — people watch without listening.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            For sermon content specifically, captions do more than accommodate silent viewing. They reinforce the message for viewers who are watching with sound. They make the content accessible for the deaf and hard-of-hearing. They improve performance in YouTube&apos;s search index (the transcript content gets crawled). And on TikTok, styled captions that sync with the speaker&apos;s rhythm have become their own form of visual engagement.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            <strong>Caption style recommendations for sermon content:</strong>
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "White text on a semi-transparent dark background — maximum readability",
              "2–5 words per line — don't crowd the screen",
              "Large enough to read on a small phone (minimum 40pt)",
              "Sync with natural speech rhythm — don't show mid-sentence breaks",
              "Highlight key words in a second color (your brand color) for emphasis",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[#5c5c5c]">
                <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 8 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">8. Your weekly sermon shorts workflow</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-6">
            Here&apos;s what a sustainable weekly rhythm looks like for a church media team of 1–2 people:
          </p>

          <div className="space-y-3 mb-8">
            {[
              { day: "Sunday", task: "Record + export sermon video. Upload to clip tool or cloud storage." },
              { day: "Monday", task: "Review AI-selected clips (or manually mark timestamps). Approve top 5." },
              { day: "Tuesday", task: "Captions reviewed and corrected. First clip published to YouTube Shorts + Reels." },
              { day: "Wednesday", task: "Second clip published. Wednesday is high-engagement for church audiences." },
              { day: "Thursday", task: "Third clip + any repurposed older content." },
              { day: "Friday", task: "Fourth clip — lighter day for posting, but good for testimonial or behind-scenes clips." },
              { day: "Saturday", task: "Schedule Sunday's best clip for 7 PM — church audiences are high-engagement on Saturday evenings." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-28 shrink-0 text-sm font-semibold text-[#E8725A]">{item.day}</div>
                <div className="text-sm text-[#5c5c5c] leading-relaxed">{item.task}</div>
              </div>
            ))}
          </div>

          <p className="text-[#5c5c5c] leading-relaxed mb-8">
            With AI clip tools, the Monday–Tuesday step compresses from ~4 hours to under 30 minutes. That&apos;s the difference between a workflow that burns out a volunteer and one that&apos;s genuinely sustainable.
          </p>

          {/* Section 9 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">9. AI vs manual: a real comparison</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-3 rounded-tl-xl">Task</th>
                  <th className="text-left p-3">Manual (CapCut/Premiere)</th>
                  <th className="text-left p-3 rounded-tr-xl">AI (Sermon Clips)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { task: "Watch full sermon", manual: "45–60 min", ai: "Not required" },
                  { task: "Find clip moments", manual: "60–90 min", ai: "Automated (~5 min)" },
                  { task: "Cut and trim clips", manual: "30–60 min", ai: "Automated" },
                  { task: "Add captions", manual: "30–60 min", ai: "Automated" },
                  { task: "Reframe to vertical", manual: "20–30 min", ai: "Automated" },
                  { task: "Review + approve", manual: "Included above", ai: "15–20 min" },
                  { task: "Publish to platforms", manual: "15–30 min", ai: "1-click from dashboard" },
                  { task: "Total per sermon", manual: "3–5 hours", ai: "20–30 minutes" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/60"}>
                    <td className="p-3 font-medium text-[#2D2D2D]">{row.task}</td>
                    <td className="p-3 text-[#5c5c5c]">{row.manual}</td>
                    <td className={`p-3 font-medium ${row.ai.includes('Automated') || row.ai.includes('20–30') || row.ai.includes('1-click') ? 'text-[#E8725A]' : 'text-[#5c5c5c]'}`}>{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 10 */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">10. Common mistakes and how to avoid them</h2>

          <div className="space-y-6 mb-10">
            {[
              {
                mistake: "Starting with the sermon introduction",
                fix: "Intros are for live audiences who just sat down. For Shorts, start mid-thought — drop viewers into the moment where something interesting is already happening.",
              },
              {
                mistake: "Clips that are too long",
                fix: "For Reels and TikTok, 60 seconds is the ceiling. For YouTube Shorts, 90 seconds is ideal. If the clip needs more time to make its point, it's not the right clip — or it needs tighter editing.",
              },
              {
                mistake: "No captions",
                fix: "Non-negotiable. See Section 7.",
              },
              {
                mistake: "Posting once and giving up",
                fix: "Sermon shorts compound. The first 20 clips rarely go viral. Churches that commit to 3–5 shorts per week for 6+ months consistently report meaningful subscriber growth and real visitor traffic from social.",
              },
              {
                mistake: "Posting the same clip on every platform simultaneously",
                fix: "YouTube Shorts and Instagram Reels penalize content that is detected as a cross-post with exact metadata. Change the caption, posting time, and cover frame for each platform. The video file can be identical — the metadata should differ.",
              },
              {
                mistake: "Making the clip about the church brand, not the message",
                fix: "Intros like 'Welcome to First Baptist! Here's Pastor John...' kill retention immediately. Start with the content. If the clip is good, people will find out which church it's from.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#2D2D2D]/10">
                <p className="text-sm font-semibold text-red-500 mb-1">❌ Mistake: {item.mistake}</p>
                <p className="text-sm text-[#5c5c5c]"><span className="text-[#E8725A] font-semibold">✓ Fix:</span> {item.fix}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-[#2D2D2D] rounded-3xl p-8 mb-12 text-center">
            <Zap className="w-10 h-10 text-[#E8725A] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Turn Sunday&apos;s sermon into 5 shorts — automatically</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Upload your sermon. Sermon Clips finds the best moments, adds captions, reframes to vertical, and prepares every clip for YouTube Shorts, Reels, and TikTok.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Get 3 Free Clips
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/40 text-sm mt-3">No credit card required.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently asked questions</h2>
          <div className="space-y-6 mb-12">
            {[
              {
                q: "What are sermon shorts?",
                a: "Sermon shorts are vertical, short-form video clips (15–90 seconds) cut from a full-length sermon and optimized for YouTube Shorts, Instagram Reels, and TikTok. They highlight a single moment — a question, illustration, or key truth — in a format designed for mobile feeds.",
              },
              {
                q: "How long should sermon shorts be?",
                a: "30–60 seconds for TikTok and Instagram Reels. Up to 3 minutes for YouTube Shorts, though most high-performing church clips are under 90 seconds. Shorter is almost always better — cut until you can't cut anymore.",
              },
              {
                q: "How many should a church post per week?",
                a: "Start with 3 per week — one Monday, one Wednesday, one Saturday. Consistency beats volume. Three clips per week, every week, for six months will outperform seven clips in one week followed by silence.",
              },
              {
                q: "Can AI automatically create sermon shorts?",
                a: "Yes. AI tools like Sermon Clips process the full sermon, find the best moments, add captions, reframe to vertical, and prepare clips for publishing — all without manual editing. The process takes 20–30 minutes per sermon instead of 3–5 hours.",
              },
              {
                q: "Do YouTube Shorts help church channels grow?",
                a: "Yes. YouTube actively promotes Shorts to non-subscribers, making them one of the most effective discovery tools available to churches. Channels that post Shorts consistently see faster subscriber growth than those relying only on full-length sermon uploads.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#2D2D2D]/10 pb-6">
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div className="bg-[#F5F1EB] rounded-2xl p-6">
            <h3 className="font-bold text-[#2D2D2D] mb-4">Related guides</h3>
            <div className="space-y-3">
              {[
                { href: "/blog/ai-sermon-transcription-guide", label: "AI Sermon Transcription: The Complete Guide for Churches" },
                { href: "/blog/easter-sermon-clips-content-plan", label: "Easter Sermon Clips: Your Complete AI Content Plan for Easter 2026" },
                { href: "/blog/church-social-media-strategy-repurpose-sermon", label: "Church Social Media Strategy: How to Repurpose Your Sermon" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="flex items-center gap-2 text-sm text-[#E8725A] hover:underline">
                  <Play className="w-3 h-3 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F1EB] border-t border-[#2D2D2D]/10 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="text-sm text-[#5c5c5c]">© 2026 Sermon Clips. All rights reserved.</span>
          </Link>
          <div className="flex gap-6 text-sm text-[#5c5c5c]">
            <Link href="/blog" className="hover:text-[#2D2D2D] transition-colors">Blog</Link>
            <Link href="/#pricing" className="hover:text-[#2D2D2D] transition-colors">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
