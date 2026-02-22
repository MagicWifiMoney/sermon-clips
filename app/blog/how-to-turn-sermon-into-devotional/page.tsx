import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  MessageSquare,
  Sun,
  Star,
  Layers,
} from 'lucide-react';

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'How to Turn Any Sermon Into a 5-Day Devotional (Using AI) — Sermon Clips',
  description:
    'Transform one Sunday sermon into a full week of devotional content. Step-by-step guide: extract key moments, structure a 5-day plan, and automate delivery — with and without AI.',
  keywords:
    'how to turn sermon into devotional, sermon devotional generator, AI devotional from sermon, sermon to devotional, daily devotional from sermon, church devotional content, sermon devotional plan',
  openGraph: {
    title: 'How to Turn Any Sermon Into a 5-Day Devotional (Using AI)',
    description:
      'One sermon → five days of devotional content your congregation will actually read. Complete workflow with AI and manual methods.',
    type: 'article',
    url: 'https://sermonclips.com/blog/how-to-turn-sermon-into-devotional',
    images: [
      {
        url: 'https://sermonclips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Turn a Sermon Into a 5-Day Devotional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Turn Any Sermon Into a 5-Day Devotional (Using AI)',
    description:
      'One sermon → five days of devotional content. Complete step-by-step workflow.',
  },
  alternates: {
    canonical: 'https://sermonclips.com/blog/how-to-turn-sermon-into-devotional',
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Turn Any Sermon Into a 5-Day Devotional (Using AI)',
      description:
        'Transform one Sunday sermon into a full week of devotional content — step-by-step guide with AI and manual methods.',
      image: 'https://sermonclips.com/og-image.jpg',
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
        logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://sermonclips.com/blog/how-to-turn-sermon-into-devotional',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long should each day of a sermon devotional be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep each day to 200–350 words. That is roughly a 2-minute read — long enough to be substantive, short enough that busy people actually finish it. Include one Scripture, one reflection paragraph, and one action prompt or prayer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I turn one sermon into a devotional every week?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — and you should. A weekly devotional series keeps your congregation engaged Monday through Friday, not just on Sundays. Churches that publish weekly devotionals see significantly higher mid-week engagement and stronger sermon retention.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best AI tool for generating devotionals from sermons?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermon Clips can generate a 5-day devotional series directly from your sermon transcript or upload. It identifies the five strongest thematic moments and structures them into daily devotional format — Scripture, reflection, and prayer — automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I distribute a devotional series to my congregation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective channels are email (schedule Mon–Fri sends), a private Facebook group, a church app push notification, or a simple landing page on your church website. Email consistently outperforms social for devotional content because it arrives in a focused, distraction-free context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do devotionals need to be exactly five days?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Five days (Mon–Fri) is the sweet spot — it aligns with the work week, feels complete, and keeps weekends free. Some churches do three days (Mon/Wed/Fri) for lighter sermon content or smaller teams. Avoid seven days; it creates production pressure without proportional engagement benefit.',
          },
        },
      ],
    },
  ],
};

// ─── Day card component ───────────────────────────────────────────────────────
function DayCard({
  day,
  theme,
  scripture,
  reflection,
  prompt,
  color = 'orange',
}: {
  day: string;
  theme: string;
  scripture: string;
  reflection: string;
  prompt: string;
  color?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden">
      <div className={`px-6 py-4 ${color === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#E8725A]/10'}`}>
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-bold uppercase tracking-widest ${
              color === 'dark' ? 'text-[#E8725A]' : 'text-[#E8725A]'
            }`}
          >
            {day}
          </span>
          <span
            className={`text-sm font-semibold ${
              color === 'dark' ? 'text-white' : 'text-[#2D2D2D]'
            }`}
          >
            {theme}
          </span>
        </div>
      </div>
      <div className="px-6 py-5 space-y-4">
        <div className="flex items-start gap-2">
          <BookOpen className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-[#5c5c5c] italic">{scripture}</p>
        </div>
        <p className="text-sm text-[#5c5c5c] leading-relaxed">{reflection}</p>
        <div className="pt-2 border-t border-[#E8E4DC]">
          <p className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-1">
            Today&apos;s prompt
          </p>
          <p className="text-sm text-[#5c5c5c] italic">{prompt}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SermonToDevotionalPage() {
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
                10 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              How to Turn Any Sermon Into a 5-Day Devotional (Using AI)
            </h1>

            {/* Lede */}
            <p className="text-xl text-[#5c5c5c] mb-6 leading-relaxed">
              Sunday&apos;s sermon took your pastor 10–15 hours to prepare. It was preached once. And
              by Tuesday, most of your congregation has forgotten the three main points.
            </p>
            <p className="text-xl font-bold text-[#2D2D2D] mb-6">
              That&apos;s not a people problem — it&apos;s a content distribution problem.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-6 leading-relaxed">
              The solution isn&apos;t a better sermon. It&apos;s a devotional series that keeps the
              message alive Monday through Friday — arriving in your congregation&apos;s inbox or church
              app every morning, one focused reflection at a time.
            </p>
            <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
              In this guide you&apos;ll get the complete workflow: how to extract five devotional threads
              from any sermon, how to write each day in under 300 words, and how to use AI to do
              the whole thing in minutes instead of hours.
            </p>

            {/* Table of Contents */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
              <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You&apos;ll Learn</h2>
              <ol className="space-y-2 text-[#5c5c5c] list-decimal list-inside">
                <li>
                  <a href="#why-devotionals" className="hover:text-[#E8725A] transition-colors">
                    Why devotionals work better than clips alone
                  </a>
                </li>
                <li>
                  <a href="#five-threads" className="hover:text-[#E8725A] transition-colors">
                    How to find 5 devotional threads in any sermon
                  </a>
                </li>
                <li>
                  <a href="#structure" className="hover:text-[#E8725A] transition-colors">
                    The 5-day structure that actually gets read
                  </a>
                </li>
                <li>
                  <a href="#example" className="hover:text-[#E8725A] transition-colors">
                    Full example: sermon → 5-day plan
                  </a>
                </li>
                <li>
                  <a href="#manual-vs-ai" className="hover:text-[#E8725A] transition-colors">
                    Manual vs. AI: time comparison
                  </a>
                </li>
                <li>
                  <a href="#distribution" className="hover:text-[#E8725A] transition-colors">
                    How to distribute your devotional series
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#E8725A] transition-colors">
                    Frequently asked questions
                  </a>
                </li>
              </ol>
            </div>

            {/* ── Section 1: Why devotionals ──────────────────────────────── */}
            <section id="why-devotionals" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Why Devotionals Work Better Than Clips Alone
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Sermon clips are powerful for reaching new people. A 60-second clip can stop a
                scroll, spark curiosity, and drive someone to visit your church. But for the people
                already in your congregation, clips aren&apos;t the right format. They need depth, not
                hooks.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Devotionals serve a completely different function:{' '}
                <strong className="text-[#2D2D2D]">spiritual formation through repetition.</strong>{' '}
                Research consistently shows that people need to engage with a concept at least 3–5
                times before it shifts their behavior. One Sunday sermon — however powerful — rarely
                achieves that. Five days of focused reflection does.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Sun,
                    title: 'Daily touchpoint',
                    desc: 'Shows up in their morning routine — not buried in a church feed.',
                  },
                  {
                    icon: Layers,
                    title: 'Deepens retention',
                    desc: '5 exposures to the same message = 5× more likely to change behavior.',
                  },
                  {
                    icon: Users,
                    title: 'Builds community',
                    desc: 'Congregation is studying the same passage all week — great for small groups.',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Generates engagement',
                    desc: 'Email devotionals get 3–4× higher open rates than general church newsletters.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white rounded-2xl border border-[#E8E4DC] flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#E8725A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">{item.title}</p>
                      <p className="text-sm text-[#5c5c5c]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The churches seeing the fastest mid-week engagement growth aren&apos;t just posting
                clips — they&apos;re publishing devotionals. SermonShots reports that churches using
                weekly devotional series see 40% higher mid-week app opens compared to churches
                that only share clips and announcements.
              </p>
            </section>

            {/* ── Section 2: 5 threads ────────────────────────────────────── */}
            <section id="five-threads" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                How to Find 5 Devotional Threads in Any Sermon
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Every sermon contains far more devotional material than the pastor has time to
                unpack from the pulpit. Your job is to find the five threads that got left on the
                floor and give each one its own day to breathe.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Read or listen through the sermon with fresh ears, looking for these five
                categories:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    num: '01',
                    label: 'The thesis moment',
                    desc: "The single sentence that the whole sermon builds toward. If your pastor said it once, slowly, while making eye contact — that's Monday's devotional.",
                  },
                  {
                    num: '02',
                    label: 'The story or illustration',
                    desc: "Every good sermon has one story the congregation will remember. Pull it out, add the scriptural backing, and let it stand alone on Tuesday.",
                  },
                  {
                    num: '03',
                    label: 'The hard truth',
                    desc: "The moment where the pastor said something the congregation needed to hear but didn't necessarily want to. Convicting moments drive the deepest devotional engagement.",
                  },
                  {
                    num: '04',
                    label: 'The practical application',
                    desc: "Most sermons include a 'so what do we do?' moment. Thursday devotionals work best when they're action-oriented — give people something specific to do.",
                  },
                  {
                    num: '05',
                    label: 'The hope anchor',
                    desc: "The moment of encouragement, promise, or Gospel grace that the sermon lands on. End the week here. Friday is for sending people into the weekend with hope.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-5 p-6 bg-white rounded-2xl border border-[#E8E4DC]"
                  >
                    <span className="font-mono text-[#E8725A] font-bold text-lg flex-shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">{item.label}</p>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#2D2D2D] rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Pro tip</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  If you have a sermon transcript, run a search for emotional signal words:{' '}
                  <em>&quot;but God,&quot;</em> <em>&quot;here&apos;s the thing,&quot;</em>{' '}
                  <em>&quot;I need you to hear this,&quot;</em> <em>&quot;the truth is.&quot;</em>{' '}
                  Pastors unconsciously flag their most important moments with these phrases. Each
                  one is a potential devotional thread.
                </p>
              </div>
            </section>

            {/* ── Section 3: Structure ────────────────────────────────────── */}
            <section id="structure" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                The 5-Day Structure That Actually Gets Read
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Devotionals fail when they&apos;re too long, too vague, or too disconnected from daily
                life. The format below has been refined by church communicators across hundreds of
                congregations. Keep every single day inside this template — consistency is what
                builds the habit.
              </p>

              <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden mb-8">
                <div className="bg-[#E8725A] px-6 py-3">
                  <p className="text-white font-semibold">The Daily Devotional Template</p>
                </div>
                <div className="divide-y divide-[#E8E4DC]">
                  {[
                    {
                      part: 'Subject line',
                      length: '6–10 words',
                      notes: 'Question or tension statement. Never just "Day 2: Faith."',
                    },
                    {
                      part: 'Opening hook',
                      length: '1–2 sentences',
                      notes: 'Drop them into a moment, feeling, or question immediately.',
                    },
                    {
                      part: 'Scripture',
                      length: '1–3 verses',
                      notes: 'One passage only. More than three verses kills momentum.',
                    },
                    {
                      part: 'Reflection',
                      length: '150–200 words',
                      notes: 'Connect the verse to the sermon thread. Personal, not preachy.',
                    },
                    {
                      part: 'Action prompt or prayer',
                      length: '1–3 sentences',
                      notes: 'Something they can do or pray today. Be specific.',
                    },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 px-6 py-4">
                      <p className="font-semibold text-[#2D2D2D] text-sm">{row.part}</p>
                      <p className="text-sm text-[#E8725A] font-medium">{row.length}</p>
                      <p className="text-sm text-[#5c5c5c]">{row.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                Total word count per day: <strong className="text-[#2D2D2D]">200–280 words.</strong>{' '}
                That&apos;s a 90-second read. Short enough that people finish it before their coffee
                cools. Long enough to actually move them.
              </p>
            </section>

            {/* ── Section 4: Full example ─────────────────────────────────── */}
            <section id="example" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Full Example: Grace Sunday → 5-Day Devotional
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Imagine Sunday&apos;s sermon was on Ephesians 2:8–9 — salvation by grace through faith,
                not by works. Here&apos;s how that single text becomes five distinct devotional days:
              </p>

              <div className="space-y-4 mb-8">
                <DayCard
                  day="Monday"
                  theme="What grace actually means"
                  scripture="Ephesians 2:8 — 'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.'"
                  reflection="We use the word grace constantly in church, but most of us secretly treat it like a reward we're earning on the side. Pastor [Name] said it plainly Sunday: grace by definition cannot be earned. The moment you try, it stops being grace. Today, notice how many times you catch yourself trying to earn God's approval — through your prayer length, your behavior, your good deeds. That subtle scorekeeping is the opposite of what Ephesians 2 describes."
                  prompt="Write down one way you've been trying to earn what God is already freely giving you."
                />
                <DayCard
                  day="Tuesday"
                  theme="The problem with being 'good enough'"
                  scripture="Ephesians 2:9 — 'not by works, so that no one can boast.'"
                  reflection="Paul doesn't just say grace is a gift — he explains why works can't save us: because if they could, we'd spend eternity boasting about our good behavior. God designed the system to produce gratitude, not pride. The story Pastor [Name] told about his father's unconditional forgiveness wasn't sentimental — it was theological. That's what grace looks like from the human side: receiving what you know you didn't earn."
                  prompt="Think of someone in your life who showed you unearned grace. Send them a thank-you message today."
                />
                <DayCard
                  day="Wednesday"
                  theme="Why this is hard to believe"
                  scripture="Romans 5:8 — 'But God demonstrates his own love for us in this: while we were still sinners, Christ died for us.'"
                  reflection="Grace is intellectually easy to affirm and emotionally hard to receive. Most of us are walking around with a lingering sense that God is mildly disappointed in us — that we're on probation. Pastor [Name] called this 'orphan thinking': living as a child of God but feeling like a hired hand. Romans 5:8 cuts right through it. 'While we were still sinners' means the timing of God's love had nothing to do with our improvement."
                  prompt="Pray for 2 minutes using only these words: 'Thank you. I receive this. I don't have to earn it.'"
                />
                <DayCard
                  day="Thursday"
                  theme="Living from grace, not for it"
                  scripture="Galatians 5:1 — 'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.'"
                  reflection="Sunday's sermon wasn't just about how we get saved — it was about how we live after. Paul's warning in Galatians 5 is for believers, not seekers. Once you understand grace, the temptation isn't to go sin freely — it's to quietly drift back into performance. One practical test: do you approach prayer as a duty or a conversation? Duty is works. Conversation is grace."
                  prompt="Identify one area of your life where you're striving out of fear instead of moving from freedom. What would it look like to act from grace in that area this week?"
                />
                <DayCard
                  day="Friday"
                  theme="Grace that overflows"
                  scripture="2 Corinthians 9:8 — 'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.'"
                  reflection="Grace isn't just the beginning of the Christian life — it's the operating system. Paul ends his reflection on grace not with a call to rest, but with a call to overflow. When you truly receive grace — when you stop trying to earn it and start trusting it — something changes. The energy you were spending on scorekeeping gets redirected. You start giving grace away. That's the design: receive grace, become grace. Go into this weekend as someone who gives away what they've been given."
                  prompt="Before Monday, identify one person in your life who could use some unearned grace from you. Deliver it."
                />
              </div>

              <div className="bg-[#E8725A]/10 rounded-2xl p-6 border border-[#E8725A]/20">
                <p className="font-semibold text-[#2D2D2D] mb-2">What just happened</p>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">
                  One 45-minute sermon on Ephesians 2:8–9 became five distinct devotionals — each
                  with its own angle, Scripture, reflection, and action. None of them repeated the
                  sermon. All of them deepened it. Total write time manually: about 3 hours.{' '}
                  <Link href="/" className="text-[#E8725A] hover:underline font-medium">
                    With Sermon Clips AI: under 5 minutes.
                  </Link>
                </p>
              </div>
            </section>

            {/* ── Section 5: Manual vs AI ─────────────────────────────────── */}
            <section id="manual-vs-ai" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Manual vs. AI: Time Comparison
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Writing a 5-day devotional manually is absolutely doable — especially if you have a
                communications director or volunteer writer on staff. Here&apos;s an honest comparison of
                what both approaches cost:
              </p>

              <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden mb-8">
                <div className="grid grid-cols-3 bg-[#2D2D2D] px-6 py-3">
                  <p className="text-white/60 text-sm font-medium">Step</p>
                  <p className="text-white text-sm font-medium">Manual</p>
                  <p className="text-[#E8725A] text-sm font-medium">AI (Sermon Clips)</p>
                </div>
                <div className="divide-y divide-[#E8E4DC]">
                  {[
                    ['Transcribe the sermon', '30–60 min', 'Automatic'],
                    ['Identify 5 devotional threads', '20–40 min', 'Automatic'],
                    ['Find matching Scriptures', '20–30 min', 'Automatic'],
                    ['Write 5 reflections (200 words each)', '90–120 min', 'Automatic'],
                    ['Write 5 action prompts / prayers', '20–30 min', 'Automatic'],
                    ['Format and review', '20–30 min', '5–10 min'],
                  ].map(([step, manual, ai], i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 px-6 py-4">
                      <p className="text-sm text-[#2D2D2D]">{step}</p>
                      <p className="text-sm text-[#5c5c5c]">{manual}</p>
                      <p className="text-sm text-[#E8725A] font-medium">{ai}</p>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-[#F5F1EB]">
                    <p className="text-sm font-bold text-[#2D2D2D]">Total</p>
                    <p className="text-sm font-bold text-[#2D2D2D]">3–4.5 hours</p>
                    <p className="text-sm font-bold text-[#E8725A]">5–10 minutes</p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The manual approach is viable once a month. It&apos;s not viable every week — which is
                why most churches that try it manually burn out by week six and stop entirely. The
                point of using AI isn&apos;t to remove the human voice; it&apos;s to remove the parts that
                don&apos;t require a human voice. Your communications director&apos;s time is best spent
                reviewing, personalizing, and publishing — not transcribing and scaffolding.
              </p>
            </section>

            {/* ── Section 6: Distribution ─────────────────────────────────── */}
            <section id="distribution" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                How to Distribute Your Devotional Series
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                The best devotional goes unread if it shows up in the wrong place at the wrong
                time. Here are the four distribution channels that consistently outperform, ranked
                by engagement rate:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    rank: '🥇',
                    channel: 'Email (daily send, Mon–Fri, 6–8 AM local)',
                    why: 'Arrives before the day gets loud. No algorithm. No competing posts. Open rates for devotional emails average 38–45% — 3× higher than typical church newsletters.',
                    tip: 'Use a subject line formula: "[Day theme] — [Question or tension]" e.g., "Grace isn\'t what you think it is — Day 1"',
                  },
                  {
                    rank: '🥈',
                    channel: 'Church app push notification (with deep link to full text)',
                    why: 'Highest immediacy. The notification itself can be the hook; tap to read the full devotional. Works especially well for younger congregations.',
                    tip: 'Keep the push notification text to 60 characters. Use a question or cliffhanger.',
                  },
                  {
                    rank: '🥉',
                    channel: 'Private Facebook Group (post Mon–Fri with image)',
                    why: 'Enables discussion. Commenting on a devotional post is a natural small-group starter. The group format creates accountability to return daily.',
                    tip: 'Post a quote card image with the opening line — the text version in the comments.',
                  },
                  {
                    rank: '4️⃣',
                    channel: 'Church website devotional page (for SEO)',
                    why: "Doesn't drive direct engagement but builds long-term searchability. Devotionals indexed by Google can attract people searching for specific passages your pastor preached on.",
                    tip: 'Add the series to a /devotionals or /blog path. Link each day to the sermon recording.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-[#E8E4DC]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.rank}</span>
                      <p className="font-semibold text-[#2D2D2D]">{item.channel}</p>
                    </div>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed mb-3">{item.why}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#5c5c5c] italic">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The highest-engagement churches use all four simultaneously — the email for depth,
                the app for immediacy, the Facebook group for community, and the website for reach.
                But if you&apos;re just starting, begin with email only. Get the habit consistent before
                you expand the distribution.
              </p>
            </section>

            {/* ── CTA block ───────────────────────────────────────────────── */}
            <div className="bg-[#2D2D2D] rounded-3xl p-10 mb-16 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-[#E8725A]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Generate your first 5-day devotional in minutes
              </h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Upload Sunday&apos;s sermon. Sermon Clips identifies the five strongest devotional
                threads, writes each day&apos;s reflection, matches Scripture, and formats everything
                ready to send — automatically.
              </p>
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30"
              >
                Try Free — First Sermon on Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/40 text-sm mt-4">No credit card required</p>
            </div>

            {/* ── FAQ ─────────────────────────────────────────────────────── */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'How long should each day of a sermon devotional be?',
                    a: 'Keep each day to 200–350 words — roughly a 2-minute read. Include one Scripture, one reflection paragraph, and one action prompt or prayer. Long enough to be substantive; short enough that busy people actually finish it.',
                  },
                  {
                    q: 'Can I turn one sermon into a devotional every week?',
                    a: "Yes — and you should. A weekly devotional series keeps your congregation engaged Monday through Friday, not just on Sundays. Churches that publish weekly devotionals see significantly higher mid-week engagement and stronger sermon retention.",
                  },
                  {
                    q: 'What is the best AI tool for generating devotionals from sermons?',
                    a: "Sermon Clips generates a 5-day devotional series directly from your sermon transcript or audio upload. It identifies the five strongest thematic moments and structures each into devotional format — Scripture, reflection, and prayer — automatically.",
                  },
                  {
                    q: 'How do I distribute a devotional series to my congregation?',
                    a: "Email (scheduled Mon–Fri, 6–8 AM) consistently outperforms every other channel for devotional content. It arrives in a focused, distraction-free context and gets open rates 3× higher than typical church newsletters. Layer in a church app or Facebook group once the email habit is established.",
                  },
                  {
                    q: 'Do devotionals need to be exactly five days?',
                    a: "Five days (Mon–Fri) is the sweet spot — it aligns with the work week and feels complete. Some churches do three days (Mon/Wed/Fri) for lighter sermon content or smaller teams. Avoid seven days; it creates production pressure without proportional engagement benefit.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                    <h3 className="font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                    <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Related posts ───────────────────────────────────────────── */}
            <section>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Keep reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'How to Repurpose One Sermon Into 30+ Pieces of Content',
                    href: '/blog/repurpose-sermon-content',
                    tag: 'Content Strategy',
                  },
                  {
                    title: 'How to Make Sermon Clips for Social Media: The 2026 Guide',
                    href: '/blog/how-to-make-sermon-clips',
                    tag: 'Clips',
                  },
                  {
                    title: 'Church Social Media Strategy: Repurposing Sermons',
                    href: '/blog/church-social-media-strategy-repurpose-sermon',
                    tag: 'Social Media',
                  },
                  {
                    title: 'How to Create Sermon Clips Quickly (Step-by-Step)',
                    href: '/blog/how-to-create-sermon-clips-fast',
                    tag: 'Workflow',
                  },
                ].map((post, i) => (
                  <Link
                    key={i}
                    href={post.href}
                    className="p-5 bg-white rounded-2xl border border-[#E8E4DC] hover:border-[#E8725A]/40 hover:shadow-lg transition-all group"
                  >
                    <span className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <p className="font-semibold text-[#2D2D2D] mt-2 group-hover:text-[#E8725A] transition-colors">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
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
