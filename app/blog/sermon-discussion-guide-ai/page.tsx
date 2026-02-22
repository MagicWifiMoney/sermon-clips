import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Users, BookOpen, MessageSquare, Lightbulb, Zap, Brain, Target, ArrowRight, Star } from 'lucide-react';

export const metadata = {
  title: 'How to Create Small Group Discussion Guides from Sermons Using AI (2026)',
  description: 'Learn how AI can automatically generate small group discussion guides from any sermon in minutes. Save 2–3 hours per week and deepen Bible study engagement.',
  keywords: 'sermon discussion guide AI, small group questions from sermon, sermon study guide generator, AI church tools, small group guide generator',
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Create Small Group Discussion Guides from Sermons Using AI (2026)',
        description: 'How to use AI to generate small group discussion guides from any sermon, saving 2–3 hours per week while deepening community engagement.',
        datePublished: '2026-02-22',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: 'Sermon Clips' },
        publisher: {
          '@type': 'Organization',
          name: 'Sermon Clips',
          logo: { '@type': 'ImageObject', url: 'https://sermonclips.com/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sermonclips.com/blog/sermon-discussion-guide-ai' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can AI really generate good small group discussion questions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Modern AI trained on theological content can extract sermon themes, Scripture references, and application points — then generate layered questions (observation, interpretation, application) that rival what a skilled pastor would write manually. Quality depends on the transcript quality and how specific your prompt is.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to generate a discussion guide with AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'With a sermon transcript and AI tool like Sermon Clips, generating a full 5–7 question discussion guide with opening activity, key Scripture, and takeaways takes 5–10 minutes. The manual process typically takes 2–3 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'What format should a church small group discussion guide follow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A strong discussion guide includes: (1) a 5-minute opening icebreaker, (2) 2–3 observation questions about what the sermon said, (3) 2–3 interpretation questions about what it means, (4) 2–3 application questions about how to live it out, and (5) a closing prayer prompt. Total: 6–8 questions covering 45–60 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need theological training to use AI for discussion guides?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. AI handles the extraction and framing. Your job is to review the output — checking that questions align with your church\'s theology and culture. Most churches find they edit <20% of AI-generated questions before publishing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can the same discussion guide work for different age groups?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. A good AI workflow generates a "core" guide and then adapts it for different audiences (youth, young adults, seniors) in separate passes. Each adapted version uses the same Scripture and theme but adjusts vocabulary, illustrations, and application scenarios.',
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
              10 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            How to Create Small Group Discussion Guides from Sermons Using AI (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Writing a small group discussion guide from Sunday's sermon used to mean 2–3 hours on Monday. Extracting themes, crafting layered questions, matching application points to real life — all before your next pastoral obligation hit. AI now does the extraction in minutes. Here's the exact workflow churches are using in 2026 to turn any sermon into a ready-to-use discussion guide.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-it-matters" className="hover:text-[#E8725A] transition-colors">Why Discussion Guides Drive Retention — Not Just Engagement</a></li>
              <li><a href="#manual-problem" className="hover:text-[#E8725A] transition-colors">The Manual Creation Problem (2–3 Hours Every Week)</a></li>
              <li><a href="#ai-how" className="hover:text-[#E8725A] transition-colors">How AI Generates Discussion Questions from a Sermon</a></li>
              <li><a href="#anatomy" className="hover:text-[#E8725A] transition-colors">Anatomy of a Great Discussion Guide</a></li>
              <li><a href="#worked-example" className="hover:text-[#E8725A] transition-colors">Worked Example: John 15:1-8 → Full Discussion Guide</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">The 15-Minute Monday Workflow</a></li>
              <li><a href="#adapting" className="hover:text-[#E8725A] transition-colors">Adapting One Guide for Multiple Groups</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Why It Matters */}
            <section id="why-it-matters" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A]" />
                Why Discussion Guides Drive Retention — Not Just Engagement
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Sunday morning is the top of the funnel. The sermon plants a seed. Small group discussion is where it takes root.
              </p>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Research from the Barna Group consistently shows that people who participate in small groups alongside weekend services retain their faith engagement at nearly twice the rate of weekend-only attenders. The sermon isn't complete until it's processed in community.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '2×', label: 'Higher retention for small group participants', icon: <Target className="w-5 h-5" /> },
                  { stat: '78%', label: 'Of small group leaders want pre-made discussion materials', icon: <Users className="w-5 h-5" /> },
                  { stat: '40%', label: 'Of churches don\'t publish weekly discussion guides — time barrier', icon: <Clock className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                    <div className="text-[#E8725A] mb-2 flex justify-center">{item.icon}</div>
                    <div className="text-3xl font-bold text-[#2D2D2D] mb-2">{item.stat}</div>
                    <div className="text-sm text-[#5c5c5c]">{item.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The barrier isn't desire — it's time. Most churches that don't publish discussion guides say they want to. They just can't staff it consistently. AI removes the staffing bottleneck entirely.
              </p>
            </section>

            {/* Manual Problem */}
            <section id="manual-problem" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#E8725A]" />
                The Manual Creation Problem (2–3 Hours Every Week)
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Here's what creating a discussion guide manually looks like for most church communicators:
              </p>

              <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Manual Discussion Guide Workflow</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', task: 'Re-watch or re-listen to the sermon to capture key points', time: '45–60 min' },
                    { step: '2', task: 'Identify 3–4 core themes and the central Scripture passage', time: '20–30 min' },
                    { step: '3', task: 'Draft opening icebreaker question relevant to the topic', time: '10–15 min' },
                    { step: '4', task: 'Write observation questions ("What did the pastor say about...")', time: '20–25 min' },
                    { step: '5', task: 'Write interpretation questions ("What does this mean for...")', time: '20–25 min' },
                    { step: '6', task: 'Write application questions ("How will you apply this week?")', time: '20–25 min' },
                    { step: '7', task: 'Add prayer prompt, format, and publish', time: '15–20 min' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F5F1EB] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-[#2D2D2D] font-medium">{item.task}</div>
                      </div>
                      <div className="text-[#E8725A] font-bold text-sm flex-shrink-0">{item.time}</div>
                    </div>
                  ))}
                  <div className="border-t border-[#F5F1EB] pt-4 flex justify-between font-bold">
                    <span className="text-[#2D2D2D]">Total time per sermon</span>
                    <span className="text-[#E8725A]">2–3 hours</span>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                That's 2–3 hours that most church comms teams don't have — especially when social posts, clip editing, bulletins, and email newsletters are all due on the same Monday morning. Something always gets cut. Discussion guides are usually first.
              </p>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The AI workflow described below cuts this to 15 minutes — including review and light editing.
              </p>
            </section>

            {/* How AI Works */}
            <section id="ai-how" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-[#E8725A]" />
                How AI Generates Discussion Questions from a Sermon
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                AI discussion guide generation works in two stages: <strong>extraction</strong> then <strong>generation</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#E8725A]" />
                    Stage 1: Extraction
                  </h3>
                  <p className="text-[#5c5c5c] text-sm mb-4 leading-relaxed">
                    The AI reads the sermon transcript and identifies:
                  </p>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    {[
                      'Central thesis and supporting arguments',
                      'Primary and secondary Scripture references',
                      'Illustrations and stories (emotional hooks)',
                      'Direct application statements',
                      'Call-to-action moments',
                      'Repeated phrases (often signal importance)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#E8725A]" />
                    Stage 2: Generation
                  </h3>
                  <p className="text-[#5c5c5c] text-sm mb-4 leading-relaxed">
                    Using extraction data, AI generates layered questions across three levels:
                  </p>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    {[
                      'Observation: "What did you hear?" (recall)',
                      'Interpretation: "What does it mean?" (meaning)',
                      'Application: "What will you do?" (action)',
                      'Icebreaker: relatable entry point question',
                      'Prayer prompt: tied to sermon\'s invitation',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                The key insight: AI doesn't "make up" discussion content. It surfaces what's already in the sermon — things the pastor already said — and frames them as questions rather than statements. This is why theologically trained review takes less than 5 minutes: the content is the pastor's own words, reframed for dialogue.
              </p>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#2D2D2D] mb-2">Input quality determines output quality</div>
                    <div className="text-sm text-[#5c5c5c] leading-relaxed">
                      A sermon transcript with timestamps and clear paragraph breaks yields better discussion guides than a rough transcript. Sermon Clips generates accurate transcripts automatically from uploaded video — these then feed directly into the discussion guide generator.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Anatomy */}
            <section id="anatomy" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#E8725A]" />
                Anatomy of a Great Discussion Guide
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Not all discussion guides are equal. The best ones follow a proven flow that takes a group from cold open to deep application in 60 minutes — without the leader having to improvise.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    section: 'Opening Icebreaker',
                    duration: '5 min',
                    purpose: 'Lower the temperature, get everyone talking',
                    example: '"What\'s one thing you\'ve worked hard to maintain in your life? How\'s that going?"',
                    tip: 'Not sermon-specific. Relatable to non-Christians in the room.',
                  },
                  {
                    section: 'Scripture Reading',
                    duration: '5 min',
                    purpose: 'Anchor the discussion in the text',
                    example: 'Read John 15:1-8 aloud. Have a different person read it a second time in a different translation.',
                    tip: 'Two readings surfaces different details. Use a contemporary translation for the second.',
                  },
                  {
                    section: 'Observation Questions (2–3)',
                    duration: '15 min',
                    purpose: 'What did the text/sermon say?',
                    example: '"What metaphor does Jesus use for his relationship with us? What surprised you about it?"',
                    tip: 'These have "right answers" — they\'re recall questions. Good for warming up quieter members.',
                  },
                  {
                    section: 'Interpretation Questions (2–3)',
                    duration: '15 min',
                    purpose: 'What does it mean?',
                    example: '"Why does Jesus say the Father prunes even fruitful branches? What does \'pruning\' represent in your experience?"',
                    tip: 'These invite diverse perspectives. No single right answer — creates rich dialogue.',
                  },
                  {
                    section: 'Application Questions (2–3)',
                    duration: '15 min',
                    purpose: 'How do we live this out?',
                    example: '"What is one area of your life where you sense God pruning something right now? What would \'abiding\' look like for you this week — practically?"',
                    tip: 'End with specific, this-week actions. Vague application = vague transformation.',
                  },
                  {
                    section: 'Prayer Prompt',
                    duration: '5 min',
                    purpose: 'Close in Scripture-tied prayer',
                    example: '"Spend 2 minutes in silence asking God: \'What in me needs pruning?\' Then share one word that came to mind."',
                    tip: 'Brief, accessible, non-intimidating for people new to prayer in groups.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E8725A] text-white flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </div>
                        <h3 className="font-bold text-[#2D2D2D]">{item.section}</h3>
                      </div>
                      <span className="text-sm font-semibold text-[#E8725A] bg-[#E8725A]/10 px-3 py-1 rounded-full">{item.duration}</span>
                    </div>
                    <p className="text-sm text-[#5c5c5c] mb-3"><strong className="text-[#2D2D2D]">Purpose:</strong> {item.purpose}</p>
                    <div className="bg-[#F5F1EB] rounded-lg p-3 mb-3">
                      <p className="text-sm text-[#2D2D2D] italic">{item.example}</p>
                    </div>
                    <p className="text-xs text-[#5c5c5c]">💡 {item.tip}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#2D2D2D] rounded-2xl p-6 mb-8 text-white">
                <div className="text-sm font-semibold text-[#E8725A] mb-2">TOTAL: 60 MINUTES, 8–10 QUESTIONS</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  A guide this structured lets small group leaders facilitate confidently — even first-timers. They follow the flow; the AI does the prep. The leader's job is to ask the questions and hold the space.
                </p>
              </div>
            </section>

            {/* Worked Example */}
            <section id="worked-example" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-[#E8725A]" />
                Worked Example: John 15:1-8 → Complete Discussion Guide
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Here's an AI-generated discussion guide for a sermon on John 15:1-8 ("The Vine and the Branches"). This is what Sermon Clips generates in about 8 minutes from a transcript — lightly edited, ready to distribute.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8 border border-[#2D2D2D]/10">
                {/* Header */}
                <div className="bg-[#2D2D2D] p-6">
                  <div className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider mb-2">Small Group Discussion Guide</div>
                  <h3 className="text-xl font-bold text-white mb-1">Abide: Staying Connected to Jesus</h3>
                  <p className="text-white/60 text-sm">Based on John 15:1-8 • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <div className="p-6 space-y-8">
                  {/* Icebreaker */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E8725A]">Opening</span>
                      <span className="text-xs text-[#5c5c5c]">5 min</span>
                    </div>
                    <p className="text-[#2D2D2D] font-medium mb-1">Icebreaker</p>
                    <p className="text-[#5c5c5c] italic">"What's one relationship in your life that you've had to intentionally invest in to keep alive? What makes it different from relationships that faded?"</p>
                  </div>

                  {/* Scripture */}
                  <div className="bg-[#F5F1EB] rounded-xl p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5c5c5c] mb-3">Scripture Reading</p>
                    <p className="text-[#2D2D2D] font-medium mb-2">John 15:1-8 (NIV)</p>
                    <p className="text-sm text-[#5c5c5c] leading-relaxed italic">
                      "I am the true vine, and my Father is the gardener. He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful. You are already clean because of the word I have spoken to you. Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me. I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing."
                    </p>
                    <p className="text-xs text-[#5c5c5c] mt-3 italic">Read once, then have a different person read it again in a different translation.</p>
                  </div>

                  {/* Observation */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E8725A]">Observation</span>
                      <span className="text-xs text-[#5c5c5c]">15 min</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { q: '1.', text: 'Jesus mentions three roles in this passage: the vine, the gardener, and the branches. Who does each role represent? What does each one do?' },
                        { q: '2.', text: 'Jesus says the Father prunes "every branch that does bear fruit." Why would a fruitful branch still be pruned? What is the stated purpose?' },
                        { q: '3.', text: 'What phrase does Jesus repeat most often in this passage? Why do you think he emphasizes it?' },
                      ].map((item) => (
                        <div key={item.q} className="flex gap-3">
                          <span className="font-bold text-[#E8725A] flex-shrink-0">{item.q}</span>
                          <p className="text-[#5c5c5c] italic">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interpretation */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E8725A]">Interpretation</span>
                      <span className="text-xs text-[#5c5c5c]">15 min</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { q: '4.', text: 'Jesus says "apart from me you can do nothing." That sounds extreme. Do you think he means it literally — or is he making a specific point about spiritual fruitfulness? What\'s the difference?' },
                        { q: '5.', text: 'The passage describes both cutting (removal) and pruning (refinement). Have you experienced either of these in your own spiritual life? What did they feel like in the moment vs. looking back?' },
                        { q: '6.', text: 'If "abiding" is the condition for fruitfulness, what does abiding actually look like — day to day? What makes someone a "branch" that stays connected vs. one that drifts?' },
                      ].map((item) => (
                        <div key={item.q} className="flex gap-3">
                          <span className="font-bold text-[#E8725A] flex-shrink-0">{item.q}</span>
                          <p className="text-[#5c5c5c] italic">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E8725A]">Application</span>
                      <span className="text-xs text-[#5c5c5c]">15 min</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { q: '7.', text: 'Is there an area of your life right now where you sense God might be pruning something? What is it — and what would you need to let go of for more fruit to grow?' },
                        { q: '8.', text: 'What is one specific habit, practice, or relationship that helps you "abide" — stay connected to Jesus? If you\'re honest, how consistently are you doing it?' },
                        { q: '9.', text: 'What would look different in your week if you took "remain in me" seriously? Name one concrete thing you\'ll do differently before next Sunday.' },
                      ].map((item) => (
                        <div key={item.q} className="flex gap-3">
                          <span className="font-bold text-[#E8725A] flex-shrink-0">{item.q}</span>
                          <p className="text-[#5c5c5c] italic">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prayer */}
                  <div className="bg-[#2D2D2D] rounded-xl p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E8725A] mb-3">Closing Prayer</p>
                    <p className="text-white/80 text-sm leading-relaxed italic">
                      "Take 2 minutes in silence. Ask God: 'What in my life is keeping me from remaining in you?' Then, if you're willing, share one word or phrase that came to you. Close by reading John 15:5 together: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.'"
                    </p>
                  </div>

                  <div className="text-center text-xs text-[#5c5c5c] italic">
                    Generated by Sermon Clips from sermon transcript • 8 minutes • Ready to distribute
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                That guide took under 10 minutes to generate. It's theologically sound, follows the OIA framework (Observation → Interpretation → Application), and gives any small group leader a 60-minute structure they can facilitate confidently. Light editing (maybe swap one illustration for something more culturally specific to your congregation) and it's ready to send.
              </p>
            </section>

            {/* Workflow */}
            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                The 15-Minute Monday Workflow
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Here's the exact sequence for getting a discussion guide from sermon recording to small group leaders' hands — in 15 minutes on Monday morning.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: '01',
                    title: 'Upload Sunday's Sermon',
                    time: '1 min',
                    description: 'Drop the video file (or paste a YouTube/Vimeo link) into Sermon Clips. Transcription starts automatically.',
                    output: 'Accurate timestamped transcript',
                  },
                  {
                    step: '02',
                    title: 'Transcript Review',
                    time: '3 min',
                    description: 'Scan the transcript for accuracy. Fix any names or Scripture references the AI may have phonetically miscaptured (e.g., "Ephesus" vs. "Emphasis").',
                    output: 'Clean, reviewed transcript',
                  },
                  {
                    step: '03',
                    title: 'Generate Discussion Guide',
                    time: '1 min',
                    description: 'Click "Generate Discussion Guide." AI extracts themes, Scripture, and application points. Formats into the OIA structure automatically.',
                    output: '8–10 questions, icebreaker, prayer prompt',
                  },
                  {
                    step: '04',
                    title: 'Theological Review',
                    time: '5 min',
                    description: 'Read through the guide. Check that application questions match your church\'s culture. Adjust any question that doesn\'t fit. Most churches edit <20% of questions.',
                    output: 'Theologically vetted guide',
                  },
                  {
                    step: '05',
                    title: 'Distribute',
                    time: '5 min',
                    description: 'Export to PDF or Google Doc. Send to small group leaders via email, Planning Center, or your church app. Done.',
                    output: 'Leaders ready for Thursday or Sunday night',
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm flex gap-6">
                    <div className="text-4xl font-bold text-[#E8725A]/20 flex-shrink-0 w-12">{item.step}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-[#2D2D2D]">{item.title}</h3>
                        <span className="text-sm font-semibold text-[#E8725A]">{item.time}</span>
                      </div>
                      <p className="text-sm text-[#5c5c5c] mb-3 leading-relaxed">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[#2D2D2D]">
                        <ArrowRight className="w-3 h-3 text-[#E8725A]" />
                        <span className="font-medium">Output:</span>
                        <span className="text-[#5c5c5c]">{item.output}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8725A] rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-bold text-lg">Total: 15 minutes vs. 2–3 hours</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  The same Monday that used to eat half your morning now gets a discussion guide done before your first coffee is finished. That's the difference between churches that publish weekly guides and churches that mean to.
                </p>
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                Want to see this in action? Sermon Clips uses the same transcript that drives your video clips to generate discussion guides — one upload, everything comes out the other side. Check out how the{' '}
                <Link href="/sermon-transcription" className="text-[#E8725A] hover:underline">sermon transcription</Link>{' '}
                feeds into multiple outputs, including{' '}
                <Link href="/blog/repurpose-sermon-content" className="text-[#E8725A] hover:underline">30+ pieces of repurposed content</Link>{' '}
                from a single recording.
              </p>
            </section>

            {/* Adapting */}
            <section id="adapting" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#E8725A]" />
                Adapting One Guide for Multiple Groups
              </h2>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                One of the most underused capabilities of AI discussion guide generation: the same transcript can produce multiple guides tailored for different audiences — all in under 20 minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    audience: 'General Adults',
                    focus: 'Depth + application',
                    adjustments: ['Standard OIA framework', 'Work/family application examples', 'Both long-time believers and newer Christians'],
                  },
                  {
                    audience: 'Young Adults (20s–30s)',
                    focus: 'Identity + culture questions',
                    adjustments: ['Career and relationship framing', 'Skeptic-friendly observation questions', 'Social media / ambition as modern illustrations'],
                  },
                  {
                    audience: 'Youth (Middle/High School)',
                    focus: 'Simplicity + peer honesty',
                    adjustments: ['Simpler vocabulary', 'School/friendship illustration swaps', 'Shorter question list (5–6 total)', 'More icebreaker weight'],
                  },
                  {
                    audience: 'Senior Adults',
                    focus: 'Experience + wisdom sharing',
                    adjustments: ['Life-stage application framing', 'Generational wisdom invited explicitly', 'Longer discussion time on 2–3 key questions', 'Prayer emphasis increased'],
                  },
                ].map((item) => (
                  <div key={item.audience} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-[#2D2D2D] mb-1">{item.audience}</h3>
                    <p className="text-xs text-[#E8725A] font-semibold mb-3">{item.focus}</p>
                    <ul className="space-y-1.5">
                      {item.adjustments.map((adj, i) => (
                        <li key={i} className="text-sm text-[#5c5c5c] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                          {adj}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] mb-6 leading-relaxed">
                With Sermon Clips, you generate the base guide once, then run an "Adapt for Youth" or "Adapt for Young Adults" pass. The AI remixes the same questions using age-appropriate framing without losing the theological content. Four audiences, one upload, 20 minutes.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-3">What to Pair With Your Discussion Guide</h3>
                <p className="text-sm text-[#5c5c5c] mb-4 leading-relaxed">
                  A discussion guide lands better when small group leaders have supporting content. The same Sermon Clips workflow that generates your guide also produces:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { item: 'Short sermon clip (2–3 min highlight)', link: '/blog/how-to-make-sermon-clips', label: 'How to make sermon clips' },
                    { item: '5-day devotional from the same text', link: '/blog/how-to-turn-sermon-into-devotional', label: 'Devotional generation guide' },
                    { item: 'Social captions for promoting your group', link: '/blog/church-social-media-captions-ai', label: 'Caption generation guide' },
                    { item: 'Translated guide for Spanish/multilingual groups', link: '/multilingual-church-video', label: 'Multilingual church video' },
                  ].map((item) => (
                    <Link key={item.item} href={item.link} className="flex items-start gap-2 text-sm group">
                      <ArrowRight className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">{item.item}</span>
                        <span className="block text-xs text-[#5c5c5c]">→ {item.label}</span>
                      </div>
                    </Link>
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
                    q: 'Can AI really generate good small group discussion questions?',
                    a: 'Yes. Modern AI trained on theological content can extract sermon themes, Scripture references, and application points — then generate layered questions (observation, interpretation, application) that rival what a skilled pastor would write manually. Quality depends on the transcript quality and how specific your prompt is.',
                  },
                  {
                    q: 'How long does it take to generate a discussion guide with AI?',
                    a: 'With a sermon transcript and AI tool like Sermon Clips, generating a full 5–7 question discussion guide with opening activity, key Scripture, and takeaways takes 5–10 minutes. The manual process typically takes 2–3 hours.',
                  },
                  {
                    q: 'What format should a church small group discussion guide follow?',
                    a: 'A strong discussion guide includes: (1) a 5-minute opening icebreaker, (2) 2–3 observation questions about what the sermon said, (3) 2–3 interpretation questions about what it means, (4) 2–3 application questions about how to live it out, and (5) a closing prayer prompt. Total: 6–8 questions covering 45–60 minutes.',
                  },
                  {
                    q: 'Do I need theological training to use AI for discussion guides?',
                    a: "No. AI handles the extraction and framing. Your job is to review the output — checking that questions align with your church's theology and culture. Most churches find they edit <20% of AI-generated questions before publishing.",
                  },
                  {
                    q: 'Can the same discussion guide work for different age groups?',
                    a: 'Yes. A good AI workflow generates a "core" guide and then adapts it for different audiences (youth, young adults, seniors) in separate passes. Each adapted version uses the same Scripture and theme but adjusts vocabulary, illustrations, and application scenarios.',
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
                Your small groups deserve better prep.
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                Upload Sunday's sermon. Get a discussion guide, video clips, social captions, and a 5-day devotional — all from one recording. Distribute by Monday noon.
              </p>
              <Link
                href="/#pricing"
                className="inline-block bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors"
              >
                Start Free — First Sermon on Us
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
            <Link href="/sermon-transcription" className="hover:text-white transition-colors">Transcription</Link>
            <Link href="/multilingual-church-video" className="hover:text-white transition-colors">Multilingual</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
