import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Zap, Target, Share2, TrendingUp, Users, AlertCircle, Lightbulb, Play, BarChart3, Mail, Video, Instagram, Youtube, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Easter Sermon Clips: Your Complete AI Content Plan for Easter 2026',
  description: 'Easter is the biggest Sunday of the year. Here\'s how to use AI to turn one Easter sermon into a full month of content — clips, reels, emails, and more. Start now.',
  keywords: 'Easter sermon clips, Easter church social media, Easter sermon content, church Easter video, Easter content plan church, Easter church marketing 2026',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
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
          {/* Urgency Banner */}
          <div className="bg-[#E8725A] text-white rounded-2xl px-6 py-4 mb-8 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐣</span>
              <div>
                <p className="font-bold">Easter Sunday is April 5, 2026</p>
                <p className="text-white/80 text-sm">6 weeks away — your content window starts now</p>
              </div>
            </div>
            <Link
              href="/sign-up"
              className="bg-white text-[#E8725A] px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/90 transition-all flex-shrink-0"
            >
              Get Ready →
            </Link>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Easter Sermon Clips: Your Complete AI Content Plan for Easter 2026
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Easter is the single biggest Sunday of the year — more first-time visitors, more Google searches for "churches near me," more social media impressions than any other week. Most churches show up with a great sermon and a few rushed posts. This year, use AI to turn one Easter message into a full month of content. Here's the exact plan.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">Your Easter Content Playbook</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#why-easter" className="hover:text-[#E8725A] transition-colors">Why Easter Is Your Biggest Content Opportunity</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#before-easter" className="hover:text-[#E8725A] transition-colors">Weeks 1–5: Building Pre-Easter Momentum</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#easter-week" className="hover:text-[#E8725A] transition-colors">Easter Week: The 7-Day Content Sprint</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#easter-sunday" className="hover:text-[#E8725A] transition-colors">Easter Sunday: Upload Once, Post Everywhere</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#after-easter" className="hover:text-[#E8725A] transition-colors">Post-Easter: Convert Visitors to Regulars</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#ai-workflow" className="hover:text-[#E8725A] transition-colors">The AI Workflow: One Sermon → 30+ Pieces</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#platform-guide" className="hover:text-[#E8725A] transition-colors">Platform-by-Platform Easter Strategy</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#checklist" className="hover:text-[#E8725A] transition-colors">Easter Content Checklist</a></li>
            </ul>
          </div>

          <div className="space-y-16">

            {/* Section 1 */}
            <section id="why-easter">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Why Easter Is Your Biggest Content Opportunity
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '2–3×', label: 'more first-time visitors on Easter Sunday vs. a typical week' },
                  { stat: '400%', label: 'increase in searches for "church near me" the week before Easter' },
                  { stat: '6 weeks', label: 'of content opportunity, not just one Sunday' },
                ].map((item) => (
                  <div key={item.stat} className="bg-white rounded-xl p-5 text-center shadow-sm">
                    <p className="text-3xl font-bold text-[#E8725A] mb-2">{item.stat}</p>
                    <p className="text-sm text-[#5c5c5c] leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Easter is not just a Sunday. It's a season. People who haven't been to church in years start thinking about faith in March and April. They search "Easter church service" and "church near me" at rates that dwarf any other time of year. Your social media reach — if you do it right — can be the thing that brings them in the door.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                The problem is most church media teams are too stretched to capitalize on it. They're running the same 3-week sermon series promotion they do every year, posting a few graphics, and scrambling to clip the Easter sermon sometime on Monday after the holiday rush.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                This year is different. AI handles the heavy lifting. Your team focuses on the message, the people, the moment. The content pipeline runs itself.
              </p>
            </section>

            {/* Section 2 */}
            <section id="before-easter">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Weeks 1–5: Building Pre-Easter Momentum
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                The churches that see the biggest Easter attendance spike start building content in early March. Here's a week-by-week pre-Easter content plan:
              </p>

              <div className="space-y-4">
                {[
                  {
                    week: 'Week 1 (March 8)',
                    title: 'Announce Your Easter Sermon Series',
                    items: [
                      'Post your sermon series title + graphic on all channels',
                      'Short Reel/Short: pastor teaser — "This Easter, we\'re talking about..."',
                      '3-sentence email to your list: save the date, service times, what to expect',
                      'Update your Google Business profile with Easter service times',
                    ],
                  },
                  {
                    week: 'Week 2 (March 15)',
                    title: 'Week 1 Sermon Clips + Curiosity Content',
                    items: [
                      'Upload your Week 1 series sermon → AI generates 3–5 clips',
                      'Post Mon/Wed/Fri clips from the sermon',
                      'Social question post: "What\'s one question you\'d ask if you could get a direct answer from God?"',
                      'Behind-the-scenes: show setup, rehearsal, your team',
                    ],
                  },
                  {
                    week: 'Week 3 (March 22)',
                    title: 'Week 2 Clips + Social Proof',
                    items: [
                      'Post clips from Week 2 sermon',
                      'Share a congregation reaction or quote (with permission)',
                      'Invite post: customizable graphic with service info for members to share',
                      'Email: reminder + what Week 3 sermon will cover',
                    ],
                  },
                  {
                    week: 'Week 4 (March 29)',
                    title: 'Palm Sunday + Final Countdown',
                    items: [
                      'Palm Sunday clips — emotional, redemptive moments perform best',
                      'Countdown content: "7 days until Easter"',
                      'First-time visitor FAQ: parking, childcare, what to wear',
                      'Invite your congregation to share: "This Easter, bring someone with you"',
                    ],
                  },
                  {
                    week: 'Week 5 (April 1–4)',
                    title: 'Holy Week Daily Content',
                    items: [
                      'Daily posts Mon–Sat with devotional questions or Scripture',
                      'Good Friday moment — reflective, quiet, meaningful content',
                      'Saturday post: "Tomorrow. We\'ll see you there." (simple, anticipatory)',
                      'Final email: service times, how to watch online, bring a friend',
                    ],
                  },
                ].map((item) => (
                  <div key={item.week} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#E8725A]/10 text-[#E8725A] text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 mt-0.5">{item.week}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#2D2D2D] mb-3">{item.title}</p>
                        <ul className="space-y-1.5">
                          {item.items.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                              <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="easter-week">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Easter Week: The 7-Day Content Sprint (March 29 – April 5)
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                The seven days before Easter are when organic reach spikes. People are actively looking. Every post matters.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { day: 'Sun March 29', label: 'Palm Sunday', content: 'Clip from Palm Sunday sermon — focus on the crowd moments, triumph, expectation' },
                  { day: 'Mon March 30', label: 'Monday', content: '"We\'re 6 days away" countdown. Share one powerful quote from Sunday\'s message.' },
                  { day: 'Tue March 31', label: 'Tuesday', content: 'First-time visitor info. Make it easy: parking, times, dress code, children\'s ministry.' },
                  { day: 'Wed April 1', label: 'Wednesday', content: 'Scripture share + reflection question. What does resurrection mean for real life?' },
                  { day: 'Thu April 2', label: 'Thursday', content: 'Invite graphic + reminder. "Share this with someone who needs to hear it."' },
                  { day: 'Fri April 3', label: 'Good Friday', content: 'Quiet, reverent post. Cross imagery, Scripture, simple caption. No self-promotion.' },
                  { day: 'Sat April 4', label: 'Holy Saturday', content: '"Tomorrow." One word. Service times. The anticipation post. Highest share rate of the week.' },
                ].map((item) => (
                  <div key={item.day} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs font-bold text-[#E8725A] mb-1">{item.day} — {item.label}</div>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="easter-sunday">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Easter Sunday: Upload Once, Post Everywhere
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                This is where AI changes everything for your media team. Easter Sunday is exhausting — multiple services, extended team hours, a building full of first-time visitors. Nobody has time to sit down and edit video.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Here's how Sermon Clips handles it: your team uploads the Easter sermon recording (or a livestream feed) and the AI does the rest.
              </p>

              <div className="bg-[#2D2D2D] rounded-2xl p-8 text-white mb-8">
                <h3 className="text-xl font-bold mb-6">What AI Generates from One Easter Sermon Upload</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '🎬', label: '5–8 short video clips', desc: 'Auto-selected peak moments with captions burned in' },
                    { icon: '📱', label: 'Platform-ready formats', desc: '9:16 for TikTok/Reels, 16:9 for YouTube, 1:1 for Facebook' },
                    { icon: '✍️', label: 'Captions for every clip', desc: 'Animated word-by-word, branded to your colors' },
                    { icon: '🎵', label: 'Background music', desc: 'Auto-matched mood to the clip\'s emotional tone' },
                    { icon: '📝', label: 'Sermon transcript', desc: 'Full searchable text, ready for blog/email use' },
                    { icon: '🌍', label: 'Translations', desc: '30+ languages — reach your whole multilingual community' },
                    { icon: '📤', label: 'Social publishing', desc: 'Schedule to Instagram, TikTok, YouTube, Facebook at once' },
                    { icon: '🔍', label: 'SEO summary', desc: 'Short description suitable for YouTube + blog post' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-white/60 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-2xl p-6">
                <p className="font-semibold text-[#2D2D2D] mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#E8725A]" />
                  Easter Sunday Timing Tip
                </p>
                <p className="text-[#5c5c5c] leading-relaxed">
                  Upload your Easter sermon recording by 2 PM Sunday. By the time your team is home for dinner, the clips are ready to schedule for the week. Your Monday–Sunday post-Easter content is done before Sunday night ends.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="after-easter">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Post-Easter: Convert Visitors to Regulars
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Most churches drop the ball here. They pour everything into Easter Sunday, then go quiet the following week. That's exactly when the people who just visited are deciding whether to come back.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Your Easter sermon clips, posted Monday through Friday after Easter, serve a critical re-engagement function. They remind first-timers why they came, give them something to share with their friends, and invite them to the next Sunday before they forget.
              </p>

              <div className="space-y-3">
                {[
                  {
                    label: '📬 Monday Email',
                    content: '"Thanks for joining us Easter Sunday. Here\'s what we\'re talking about next Sunday..." + 1 clip from the Easter message.',
                  },
                  {
                    label: '📸 Monday–Wednesday Clips',
                    content: 'Post 2–3 clips from the Easter sermon. Use the moments where you see people visibly moved — that\'s what newcomers connect with.',
                  },
                  {
                    label: '💬 Wednesday Engagement Post',
                    content: '"What\'s one thing from Easter that stuck with you?" Simple, conversational, invites comments from both members and first-timers.',
                  },
                  {
                    label: '📣 Thursday Invite',
                    content: '"This Sunday we\'re continuing the conversation. Here\'s what\'s coming..." Short clip teaser of next week\'s topic.',
                  },
                  {
                    label: '🤝 Friday / Saturday Social Proof',
                    content: 'Share a quote or reaction from the congregation (with permission). Real people responding to real messages is more powerful than polished graphics.',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] text-sm flex-shrink-0 w-44">{item.label}</p>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="ai-workflow">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                The AI Workflow: One Easter Sermon → 30+ Pieces of Content
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Here's exactly what comes out of one Easter sermon upload — and how long it takes without AI vs. with AI:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#2D2D2D]/10">
                      <th className="text-left py-3 pr-4 text-[#2D2D2D] font-semibold">Content Output</th>
                      <th className="text-center py-3 px-4 text-[#5c5c5c]">Without AI</th>
                      <th className="text-center py-3 pl-4 text-[#E8725A] font-semibold">With AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2D2D2D]/5">
                    {[
                      ['5–8 short video clips', '8–12 hours', '5 minutes'],
                      ['Platform-formatted versions (3 aspect ratios)', '2–3 hours', 'Automatic'],
                      ['Animated captions on every clip', '2–4 hours', 'Automatic'],
                      ['Full sermon transcript', '3–4 hours', '5 minutes'],
                      ['Blog post summary', '1–2 hours', '2 minutes'],
                      ['Email newsletter copy', '45 minutes', '2 minutes'],
                      ['Social captions for each post', '1 hour', '1 minute'],
                      ['Translated subtitle files (30+ languages)', 'Not feasible', 'Automatic'],
                      ['Scheduled posts across all platforms', '30 minutes', '5 minutes'],
                    ].map(([task, without, with_]) => (
                      <tr key={task} className="py-3">
                        <td className="py-3 pr-4 text-[#2D2D2D]">{task}</td>
                        <td className="py-3 px-4 text-center text-[#5c5c5c]">{without}</td>
                        <td className="py-3 pl-4 text-center text-[#E8725A] font-semibold">{with_}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-[#2D2D2D]/10 font-bold">
                      <td className="py-3 pr-4 text-[#2D2D2D]">Total time</td>
                      <td className="py-3 px-4 text-center text-[#5c5c5c]">20–30 hours</td>
                      <td className="py-3 pl-4 text-center text-[#E8725A]">&lt; 30 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="platform-guide">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Share2 className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Platform-by-Platform Easter Strategy
              </h2>

              <div className="space-y-4">
                {[
                  {
                    platform: 'Instagram Reels',
                    icon: <Instagram className="w-5 h-5" />,
                    bestFor: 'New audience reach — Reels get shown to non-followers',
                    clipLength: '30–60 seconds',
                    strategy: 'Use the most emotionally resonant moment from the sermon. Lead with the punchline, not the setup. Animated captions required — 85% watch without sound.',
                    timing: 'Post Tuesday, Thursday, Saturday pre-Easter. Post Monday and Wednesday post-Easter.',
                    bgColor: 'bg-purple-50',
                    textColor: 'text-purple-700',
                  },
                  {
                    platform: 'TikTok',
                    icon: <Video className="w-5 h-5" />,
                    bestFor: 'Discovery by people with no church background — your broadest outreach tool',
                    clipLength: '45–90 seconds',
                    strategy: 'Hook in the first 3 seconds. Clip moments that are relatable to non-churchgoers — life struggle, questions about meaning, not denominational language.',
                    timing: 'Post daily in Holy Week. TikTok rewards high-frequency during high-engagement windows.',
                    bgColor: 'bg-slate-50',
                    textColor: 'text-slate-700',
                  },
                  {
                    platform: 'YouTube Shorts',
                    icon: <Youtube className="w-5 h-5" />,
                    bestFor: 'Search discovery — people searching "resurrection meaning" or "Easter church"',
                    clipLength: '60 seconds max',
                    strategy: 'Use sermon moments that answer direct questions. Title your Short with the question (e.g., "What Does Easter Actually Mean?"). This shows up in search.',
                    timing: 'Upload 3–5 Shorts in the week leading up to Easter. YouTube\'s algorithm favors consistency.',
                    bgColor: 'bg-red-50',
                    textColor: 'text-red-700',
                  },
                  {
                    platform: 'Facebook',
                    icon: <Share2 className="w-5 h-5" />,
                    bestFor: 'Your existing congregation — sharing with family and friends',
                    clipLength: '60–90 seconds',
                    strategy: 'Facebook Reels reach non-followers too, but your existing audience is the real value here. Focus on invite-able content — things your members will want to share with their parents and coworkers.',
                    timing: 'Sunday afternoon + Tuesday + Thursday. Facebook post timing matters more than other platforms.',
                    bgColor: 'bg-blue-50',
                    textColor: 'text-blue-700',
                  },
                  {
                    platform: 'Email',
                    icon: <Mail className="w-5 h-5" />,
                    bestFor: 'Your most engaged audience — highest conversion to in-person attendance',
                    clipLength: 'Embed video or link to clip',
                    strategy: 'Email is still your highest-ROI channel for existing contacts. Embed or link to one clip per email. Keep the email short — 3–4 sentences + clip + service time.',
                    timing: 'Send Monday of Holy Week, Thursday of Holy Week, and the Tuesday after Easter (re-engagement).',
                    bgColor: 'bg-green-50',
                    textColor: 'text-green-700',
                  },
                ].map((item) => (
                  <div key={item.platform} className={`${item.bgColor} rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${item.textColor}`}>{item.icon}</div>
                      <p className={`font-bold ${item.textColor}`}>{item.platform}</p>
                      <span className="text-xs text-[#5c5c5c] bg-white px-2 py-0.5 rounded-full">{item.clipLength}</span>
                    </div>
                    <p className="text-xs font-semibold text-[#5c5c5c] uppercase tracking-wide mb-1">Best for</p>
                    <p className="text-sm text-[#5c5c5c] mb-3">{item.bestFor}</p>
                    <p className="text-xs font-semibold text-[#5c5c5c] uppercase tracking-wide mb-1">Strategy</p>
                    <p className="text-sm text-[#5c5c5c] mb-3">{item.strategy}</p>
                    <p className="text-xs font-semibold text-[#5c5c5c] uppercase tracking-wide mb-1">Timing</p>
                    <p className="text-sm text-[#5c5c5c]">{item.timing}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 — Checklist */}
            <section id="checklist">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                The Easter Content Checklist
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Print this out, pin it to your media team's wall, and check off each item as you go.
              </p>

              {[
                {
                  phase: '6 Weeks Out (Now)',
                  color: 'bg-orange-50 border-orange-200',
                  labelColor: 'text-orange-700',
                  items: [
                    'Confirm your Easter sermon series title and schedule',
                    'Set up Sermon Clips account if you haven\'t already',
                    'Draft your Easter content calendar (use this article)',
                    'Design your Easter series graphic (or use AI graphics)',
                    'Identify and confirm your best microphone/camera setup for recording',
                  ],
                },
                {
                  phase: '4 Weeks Out',
                  color: 'bg-yellow-50 border-yellow-200',
                  labelColor: 'text-yellow-700',
                  items: [
                    'Announce Easter series on all platforms',
                    'Update Google Business Profile with Easter service times',
                    'Upload Week 1 sermon → generate first clips',
                    'Schedule clips for Mon/Wed/Fri',
                    'Send first Easter email to your list',
                  ],
                },
                {
                  phase: 'Holy Week (April 1–4)',
                  color: 'bg-blue-50 border-blue-200',
                  labelColor: 'text-blue-700',
                  items: [
                    'Post daily — Mon–Sat minimum',
                    'Good Friday: reflective post (no sales, no CTAs)',
                    'Holy Saturday: simple anticipation post with service times',
                    'Final email: service times + what to bring/expect',
                    'Pre-upload any clips you can from Palm Sunday recording',
                  ],
                },
                {
                  phase: 'Easter Sunday (April 5)',
                  color: 'bg-green-50 border-green-200',
                  labelColor: 'text-green-700',
                  items: [
                    'Record sermon with best audio setup (lapel or soundboard feed)',
                    'Upload recording to Sermon Clips by early afternoon',
                    'Review and approve AI-generated clips',
                    'Schedule posts for Mon–Fri of the following week',
                    'Send "We\'re live!" social post during service (if doing livestream)',
                  ],
                },
                {
                  phase: 'Post-Easter (April 6–12)',
                  color: 'bg-purple-50 border-purple-200',
                  labelColor: 'text-purple-700',
                  items: [
                    'Send Monday email: thank you + next Sunday invite + 1 clip',
                    'Post Mon/Wed/Fri Easter sermon clips',
                    'Wednesday engagement post: reflection question',
                    'Thursday: preview of next Sunday\'s message',
                    'Review analytics: which clip got the most reach? Replicate it.',
                  ],
                },
              ].map((section) => (
                <div key={section.phase} className={`border ${section.color} rounded-xl p-6 mb-4`}>
                  <p className={`font-bold ${section.labelColor} mb-4`}>{section.phase}</p>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 border-2 border-[#2D2D2D]/20 rounded flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#5c5c5c]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* CTA */}
            <section>
              <div className="bg-[#2D2D2D] rounded-2xl p-8 text-center text-white">
                <div className="text-4xl mb-4">🐣</div>
                <h3 className="text-2xl font-bold mb-3">Easter Is 6 Weeks Away</h3>
                <p className="text-white/70 mb-2">
                  The churches that show up strongest on Easter start their content plan now — not the week before.
                </p>
                <p className="text-white/70 mb-8">
                  Upload your next sermon. Start building your Easter content library today.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#E8725A]/30 mb-4"
                >
                  Start For Free — Easter Ready in Minutes →
                </Link>
                <p className="text-white/40 text-sm">No credit card required. First sermon free.</p>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
  );
}
