import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle2, Play } from 'lucide-react';

export const metadata: Metadata = {
  title: "What a Week of Sermon Content Looks Like With AI (Church of 300) | Sermon Clips",
  description: "A realistic look at what the AI sermon content workflow looks like for a 300-person church with a volunteer media team — from Sunday morning to the following Saturday. Hours, tools, output.",
  keywords: "church social media strategy, repurpose sermon content, church content workflow, sermon clips workflow, church media team workflow, how to repurpose sermons, church of 300 social media",
  openGraph: {
    title: "What a Week of Sermon Content Looks Like With AI (Church of 300)",
    description: "Sunday to Saturday. One sermon. Five clips. A blog post. A study guide. Two volunteers. Here's what the AI workflow actually looks like.",
    type: "article",
    publishedTime: '2026-02-21T00:00:00.000Z',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What a Week of Sermon Content Looks Like With AI (Church of 300)",
  "datePublished": "2026-02-21",
  "author": { "@type": "Organization", "name": "Sermon Clips" },
  "publisher": { "@type": "Organization", "name": "Sermon Clips" },
  "description": "A realistic week-by-week sermon content workflow for a 300-person church using AI.",
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10">
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

      <main className="pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#5c5c5c] mb-8">
            <Link href="/blog" className="flex items-center gap-1 hover:text-[#E8725A] transition-colors">
              <ArrowLeft className="w-4 h-4" />Blog
            </Link>
            <span>/</span>
            <span>Workflow</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />February 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            What a week of sermon content looks like with AI
            <span className="block text-[#5c5c5c] text-2xl md:text-3xl font-medium mt-2">For a church of 300, with two volunteers</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
            This is a realistic walkthrough. Not a case study with cherry-picked numbers — a plain account of what the workflow actually looks like for a mid-sized church that has adopted AI sermon content tools.
          </p>
          <p className="text-lg text-[#5c5c5c] leading-relaxed mb-10">
            The church: about 300 in Sunday attendance. Media team: two volunteers, neither of whom has a video production background. Budget: $29/month for Sermon Clips. Time: Sunday to Saturday.
          </p>

          {/* The church profile */}
          <div className="bg-white rounded-2xl p-6 mb-10 border border-[#2D2D2D]/10">
            <p className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wider mb-4">The church profile</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["Attendance", "~300 on Sunday mornings"],
                ["Services", "One English, one Spanish"],
                ["Media team", "2 volunteers (Sunday-only availability)"],
                ["Recording setup", "Fixed camera, podium mic"],
                ["Current social presence", "Facebook page (active), Instagram (sporadic)"],
                ["Sermon length", "40–50 minutes"],
                ["Previous workflow", "Occasional clips, manually edited, 3–4 hrs each"],
                ["Budget", "$29/month (Sermon Clips Starter)"],
              ].map(([label, value], i) => (
                <div key={i}>
                  <span className="text-[#5c5c5c]">{label}: </span>
                  <span className="font-medium text-[#2D2D2D]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The old way */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Before: what Sunday afternoons used to look like</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            Marcus, the lead volunteer, would spend his Sunday afternoon in CapCut. He&apos;d watch the full sermon — 45 minutes — marking timestamps on a notepad. Then he&apos;d pull one or two clips, add captions manually (30 minutes per clip), reframe to vertical, and upload to Instagram.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            Total time: <strong>3.5 to 4.5 hours. Every Sunday.</strong> For one or two clips.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            The Spanish service — Pastor Carlos&apos;s congregation — got nothing. Marcus didn&apos;t speak Spanish. The clips from the English service went up. The Spanish congregation, about 80 of the 300 members, wasn&apos;t in any of it.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed mb-10">
            By February, Marcus was burned out. He&apos;d missed two Sundays of posting. The Instagram account had 340 followers and was going quiet.
          </p>

          {/* The new workflow */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">After: the full week with AI</h2>

          <div className="space-y-8 mb-12">

            {/* Sunday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Sunday — during or right after service</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~10 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                The camera runs the whole service. After the final song, Marcus pulls the SD card, exports the sermon footage to his laptop (the one the church uses for ProPresenter), and uploads it to Sermon Clips. He pastes the YouTube link for the English service, selects Spanish as a secondary language, and hits start.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                Then he goes to the post-service lunch. The AI processes while he eats.
              </p>
              <div className="bg-[#F5F1EB] rounded-xl p-4 text-sm">
                <p className="font-medium text-[#2D2D2D] mb-2">What gets uploaded Sunday:</p>
                <ul className="space-y-1 text-[#5c5c5c]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A]" />Full 47-minute sermon video</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A]" />Language setting: English + Spanish captions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A]" />Auto-processing starts immediately</li>
                </ul>
              </div>
            </div>

            {/* Monday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Monday morning — review and approve</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~20 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                Marcus opens the Sermon Clips dashboard on his phone before work. Eight clips are waiting — the AI pulled the strongest moments from Sunday&apos;s sermon on doubt and faith. He watches each at 1.5x speed, skipping the ones that feel too mid-sentence or lack a natural ending.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                He approves five clips. Each one already has:
              </p>
              <div className="bg-[#F5F1EB] rounded-xl p-4 text-sm mb-3">
                <ul className="space-y-1 text-[#5c5c5c]">
                  {[
                    "English captions, synced to speech",
                    "Spanish captions (auto-translated)",
                    "9:16 vertical crop with Pastor David centered",
                    "Clip length: 34–71 seconds each",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                He spots one caption error — the AI transcribed &ldquo;Corinthians&rdquo; as &ldquo;Corintheans&rdquo; in one clip. He edits it inline in 10 seconds.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                He schedules Clip 1 to post Monday at 6 PM. Done before his first work meeting.
              </p>
            </div>

            {/* Tuesday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Tuesday — Spanish clip drops</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~5 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                The second clip goes out Tuesday at 4 PM — this time, Marcus schedules it with the Spanish caption version first. He posts it to the church&apos;s Instagram with a caption in Spanish (he runs it through Google Translate and Pastor Carlos reviews it in 2 minutes).
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                This is the first week the Spanish congregation has seen themselves in the church&apos;s content. Two members share it in the church WhatsApp group before dinner.
              </p>
            </div>

            {/* Wednesday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Wednesday — mid-week clip + small group prep</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~10 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                Clip 3 posts Wednesday afternoon — the most emotionally charged moment from Sunday, a story about a father and his son that made the room go quiet. It&apos;s 58 seconds. It gets more shares than anything they&apos;ve posted in six months.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                The youth pastor emails Marcus asking for the full transcript so she can write small group questions. He exports it from the Sermon Clips dashboard as a PDF and sends it in 90 seconds.
              </p>
            </div>

            {/* Thursday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Thursday — clip 4, YouTube Shorts</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~5 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                The second volunteer, Priya, takes Thursday. She logs into Sermon Clips, picks Clip 4 from the approved queue, and publishes it directly to YouTube Shorts from the dashboard. No download, no upload, no format conversion.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                A non-member finds it through YouTube search — they searched &ldquo;sermon on doubt&rdquo; after a rough week. They watch three more clips. They show up Sunday.
              </p>
            </div>

            {/* Friday / Saturday */}
            <div className="relative pl-8 border-l-2 border-[#E8725A]/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <div className="mb-1">
                <span className="font-bold text-[#2D2D2D] text-lg">Friday–Saturday — final clip + next week prep</span>
                <span className="ml-3 text-sm text-[#5c5c5c]">~5 minutes of work</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-3">
                Clip 5 — the most quotable one-liner from the sermon — goes out Saturday evening at 7 PM, when church audience engagement peaks. Marcus schedules it before his family&apos;s Friday movie night.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                He also checks the dashboard. The following Sunday&apos;s sermon is already scheduled in the system. He&apos;ll just re-upload Monday morning.
              </p>
            </div>

          </div>

          {/* The numbers */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">The numbers, week over week</h2>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-3 rounded-tl-xl">Metric</th>
                  <th className="text-left p-3">Before (manual)</th>
                  <th className="text-left p-3 rounded-tr-xl text-[#E8725A]">After (AI)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Clips posted per week", "1–2", "5"],
                  ["Languages covered", "English only", "English + Spanish"],
                  ["Volunteer hours per week", "3.5–4.5 hrs", "~45 minutes"],
                  ["Platforms published to", "Instagram only", "Instagram + YouTube Shorts + Facebook"],
                  ["Transcript available", "No", "Yes (exported PDF)"],
                  ["Posting consistency", "Missed 2 of last 8 Sundays", "0 missed weeks in 3 months"],
                  ["Monthly cost", "$0 (volunteer time only)", "$29/month"],
                  ["New visitors from social", "~1/month (estimated)", "~4/month (tracked link)"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/60"}>
                    <td className="p-3 font-medium text-[#2D2D2D]">{row[0]}</td>
                    <td className="p-3 text-[#5c5c5c]">{row[1]}</td>
                    <td className="p-3 font-medium text-[#E8725A]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What Marcus would tell you */}
          <div className="bg-[#2D2D2D] rounded-2xl p-6 mb-10">
            <p className="text-white/60 text-sm mb-3">What Marcus said after 3 months</p>
            <blockquote className="text-white text-lg leading-relaxed italic">
              &ldquo;The clips are actually better than what I was making manually. I was spending 4 hours to make something mediocre. The AI does it in 20 minutes and I spend the rest of the time on stuff that actually matters — like talking to people after service.&rdquo;
            </blockquote>
          </div>

          {/* What this doesn't solve */}
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">What AI doesn&apos;t solve (yet)</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-4">
            This is an honest account, so here&apos;s what the AI workflow doesn&apos;t handle automatically yet:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              { item: "Blog posts from the sermon", note: "Marcus still writes these manually, about once a month. Content generation tools (including what we're building) will close this." },
              { item: "Discussion/small group guides", note: "The transcript gets exported and the youth pastor writes them by hand. Structured guide generation is on the roadmap." },
              { item: "Graphic quote cards", note: "Priya designs these in Canva occasionally. An integrated quote card generator would save her 30 min/week." },
              { item: "Audio podcast extraction", note: "The church doesn't run a podcast, but several members have asked. Podcast audio export is a feature gap." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#2D2D2D]/10">
                <span className="text-[#E8725A] font-bold text-sm mt-0.5">—</span>
                <div>
                  <p className="text-sm font-semibold text-[#2D2D2D]">{item.item}</p>
                  <p className="text-xs text-[#5c5c5c] mt-0.5">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-[#5c5c5c] leading-relaxed mb-12">
            These are real limitations — and they&apos;re features most churches will eventually want. But the core workflow (clips, captions, multilingual, direct publishing) handles 80% of the weekly content need, and for $29/month, that&apos;s where almost every church should start.
          </p>

          {/* CTA */}
          <div className="bg-[#E8725A] rounded-3xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-3">Start with one sermon</h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Upload your next sermon and see what the AI finds. Free — no credit card, no commitment, no waiting period.
            </p>
            <Link href="/sign-up" className="inline-flex items-center gap-2 bg-white text-[#E8725A] hover:bg-white/90 px-8 py-3 rounded-full font-bold transition-all">
              Get 3 Free Clips
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Related */}
          <div className="bg-[#F5F1EB] rounded-2xl p-6">
            <h3 className="font-bold text-[#2D2D2D] mb-4">Related reading</h3>
            <div className="space-y-3">
              {[
                { href: "/blog/sermon-shorts-complete-guide", label: "Sermon Shorts: The Complete Guide for Churches (2026)" },
                { href: "/blog/ai-sermon-transcription-guide", label: "AI Sermon Transcription: The Complete Guide for Churches" },
                { href: "/blog/easter-sermon-clips-content-plan", label: "Easter Sermon Clips: Complete AI Content Plan for 2026" },
                { href: "/sermon-transcription", label: "Sermon Transcription Service →" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="flex items-center gap-2 text-sm text-[#E8725A] hover:underline">
                  <Play className="w-3 h-3 shrink-0" />{link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-[#F5F1EB] border-t border-[#2D2D2D]/10 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="text-sm text-[#5c5c5c]">© 2026 Sermon Clips. All rights reserved.</span>
          </Link>
          <div className="flex gap-6 text-sm text-[#5c5c5c]">
            <Link href="/blog" className="hover:text-[#2D2D2D]">Blog</Link>
            <Link href="/#pricing" className="hover:text-[#2D2D2D]">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
