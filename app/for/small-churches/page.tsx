import Link from 'next/link';
import { CheckCircle2, Clock, DollarSign, Users, Zap, Heart, ArrowRight, Star, Shield, Play } from 'lucide-react';

export const metadata = {
  title: 'Sermon Clips for Small Churches — No Media Team Required',
  description: 'Built for small congregations. Upload your sermon and AI creates your social clips, captions, and content — no editor, no video skills, no media budget needed. From $29/month.',
  keywords: 'small church social media tools, church video software small church, sermon clips small congregation, church media tools no staff, affordable church video editing',
};

export default function SmallChurchesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sermon Clips for Small Churches',
    description: 'AI-powered sermon clipping platform built for small congregations with no dedicated media staff.',
    url: 'https://sermonclips.com/for/small-churches',
    mainEntity: {
      '@type': 'Product',
      name: 'Sermon Clips — Small Church Plan',
      description: 'Upload once. AI creates clips, captions, and social content. No video editing skills required.',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '0',
        highPrice: '29',
        priceCurrency: 'USD',
        offerCount: '2',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <Link href="/#pricing" className="bg-[#2D2D2D] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2D2D2D]/90 transition-colors">
              Start Free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8725A]/10 text-[#E8725A] text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <Heart className="w-4 h-4" />
            For Small Churches & Solo Pastors
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-8 max-w-4xl">
            Social media for your church{' '}
            <span className="text-[#E8725A]">doesn't require a media team.</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed max-w-2xl">
            90% of US churches have fewer than 200 people. Most have zero paid media staff. Sermon Clips was built for you — upload Sunday's recording and AI handles clips, captions, and social content. No editing skills. No video budget. No extra staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/#pricing"
              className="bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors text-center"
            >
              Start Free — First Sermon on Us
            </Link>
            <Link
              href="/blog/how-to-make-sermon-clips"
              className="bg-white text-[#2D2D2D] font-semibold px-8 py-4 rounded-xl border border-[#2D2D2D]/10 hover:bg-white/80 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#E8725A]" />
              See How It Works
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-sm text-[#5c5c5c]">
            {[
              { icon: <Shield className="w-4 h-4 text-[#E8725A]" />, text: 'No credit card required' },
              { icon: <Clock className="w-4 h-4 text-[#E8725A]" />, text: 'First sermon processed free' },
              { icon: <Star className="w-4 h-4 text-[#E8725A]" />, text: 'Cancel anytime, no contracts' },
              { icon: <DollarSign className="w-4 h-4 text-[#E8725A]" />, text: 'From $29/month — less than one editor hour' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The real situation */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            You know your church should be on social media.
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed text-lg">
            You just don't have the time, the skills, or the person to make it happen consistently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                scenario: '"I\'m the pastor, worship leader, AND the one who posts on Instagram."',
                reality: 'You\'re already doing 3 jobs. Adding video editing to the list means it never actually gets done.',
              },
              {
                scenario: '"We tried hiring a college student to edit clips. They graduated."',
                reality: 'Staff turnover is real. A tool that works without institutional knowledge stays consistent.',
              },
              {
                scenario: '"I looked at editing software. It would take me 6 months to learn."',
                reality: 'You shouldn\'t have to learn Premiere to share Sunday\'s message. Upload. Done.',
              },
              {
                scenario: '"Our clips look unprofessional compared to bigger churches."',
                reality: 'AI-generated clips with B-roll, captions, and motion graphics — the same output big church media teams produce.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white/90 font-medium italic mb-4 text-sm leading-relaxed">"{item.scenario.replace(/"/g, '')}"</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it actually works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Here's what Monday looks like with Sermon Clips
            </h2>
            <p className="text-[#5c5c5c] max-w-2xl mx-auto leading-relaxed">
              You record Sunday's sermon. That's the hard part. Everything after that is automated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            {/* Before */}
            <div>
              <div className="text-sm font-bold text-[#5c5c5c] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-red-400">●</span> Sunday night / Monday morning (before)
              </div>
              <div className="space-y-3">
                {[
                  { task: 'Re-watch the recording to find good moments', time: '45 min', pain: true },
                  { task: 'Open editing software (Premiere, iMovie, whatever)', time: '15 min setup', pain: true },
                  { task: 'Trim the clip, export a rough cut', time: '30 min', pain: true },
                  { task: 'Convert to vertical (or post landscape and get 60% fewer views)', time: '20 min', pain: true },
                  { task: 'Add captions manually word by word', time: '60 min', pain: true },
                  { task: 'Write Instagram caption, TikTok caption, Facebook post', time: '30 min', pain: true },
                  { task: 'Upload to each platform separately', time: '20 min', pain: true },
                  { task: 'Remember you still have a sermon to prep for next Sunday', time: '😮‍💨', pain: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span className="text-[#5c5c5c] flex-1">{item.task}</span>
                    <span className="text-red-400 font-medium flex-shrink-0 text-xs">{item.time}</span>
                  </div>
                ))}
                <div className="border-t border-[#2D2D2D]/10 pt-3 flex justify-between font-bold text-sm">
                  <span className="text-[#2D2D2D]">Total Monday morning</span>
                  <span className="text-red-500">3–4 hours</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="text-sm font-bold text-[#E8725A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-[#E8725A]">●</span> Sunday night / Monday morning (with Sermon Clips)
              </div>
              <div className="space-y-3">
                {[
                  { task: 'Upload the recording (or paste YouTube link)', time: '2 min' },
                  { task: 'AI identifies the best 3–5 clip moments automatically', time: 'auto' },
                  { task: 'Review suggested clips (tweak if you want)', time: '3 min' },
                  { task: 'AI reframes to vertical, adds captions, inserts B-roll', time: 'auto' },
                  { task: 'Review finished clips', time: '5 min' },
                  { task: 'AI writes social captions for each platform', time: 'auto' },
                  { task: 'Schedule and publish to all platforms', time: '5 min' },
                  { task: 'Go prep next Sunday\'s sermon', time: '✅' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
                    <span className="text-[#5c5c5c] flex-1">{item.task}</span>
                    <span className="text-[#E8725A] font-medium flex-shrink-0 text-xs">{item.time}</span>
                  </div>
                ))}
                <div className="border-t border-[#E8725A]/20 pt-3 flex justify-between font-bold text-sm">
                  <span className="text-[#2D2D2D]">Total Monday morning</span>
                  <span className="text-[#E8725A]">~15 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The cost comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
              What you'd pay otherwise
            </h2>
            <p className="text-[#5c5c5c] max-w-xl mx-auto">
              The alternatives to Sermon Clips aren't free — they're just hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                option: 'Freelance Video Editor',
                cost: '$150–500',
                per: 'per video',
                monthly: '$600–2,000/mo at 4 clips/week',
                verdict: 'Expensive, slow turnaround, no institutional knowledge',
                highlight: false,
              },
              {
                option: 'Part-Time Media Hire',
                cost: '$1,500+',
                per: 'per month',
                monthly: 'Plus benefits, training, turnover risk',
                verdict: 'Most small churches can\'t afford a dedicated hire',
                highlight: false,
              },
              {
                option: 'DIY with Premiere',
                cost: '$55',
                per: 'per month',
                monthly: 'Plus 3–4 hrs/week of your time at pastor\'s hourly rate',
                verdict: 'The real cost is your time — which is finite',
                highlight: false,
              },
              {
                option: 'Sermon Clips',
                cost: '$29',
                per: 'per month',
                monthly: '~15 min/week. Full clips, captions, B-roll, social posts.',
                verdict: 'Built for small churches. No skills required.',
                highlight: true,
              },
            ].map((item) => (
              <div key={item.option} className={`rounded-2xl p-6 ${item.highlight ? 'bg-[#E8725A] text-white shadow-lg' : 'bg-[#F5F1EB]'}`}>
                <h3 className={`font-bold mb-2 ${item.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>{item.option}</h3>
                <div className={`text-3xl font-bold mb-1 ${item.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>{item.cost}</div>
                <div className={`text-sm mb-3 ${item.highlight ? 'text-white/80' : 'text-[#5c5c5c]'}`}>{item.per}</div>
                <div className={`text-xs mb-4 leading-relaxed ${item.highlight ? 'text-white/70' : 'text-[#5c5c5c]'}`}>{item.monthly}</div>
                <div className={`text-xs font-medium p-3 rounded-lg ${item.highlight ? 'bg-white/20 text-white' : 'bg-white text-[#5c5c5c]'}`}>
                  {item.verdict}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#2D2D2D] rounded-2xl p-6 text-center">
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">
              A single freelance-edited video clip costs more than an entire month of Sermon Clips. At 4 clips per week, the comparison isn't close. The question isn't whether you can afford Sermon Clips — it's whether you can afford <em>not</em> to have consistent social presence.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            Everything a big church media team produces — automated
          </h2>
          <p className="text-[#5c5c5c] text-center mb-12 max-w-xl mx-auto">
            One sermon upload. Here's what comes out the other side.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                output: 'Vertical Clips (9:16)',
                desc: 'AI finds the best 3–5 moments from your sermon and cuts them to 60-second clips, auto-reframed for Reels, TikTok, and Shorts.',
                icon: <Play className="w-5 h-5" />,
                link: '/blog/church-video-reframing',
              },
              {
                output: 'Burned-In Captions',
                desc: 'Accurate word-for-word captions auto-generated from transcript and burned into the video. 85% of social video is watched without sound.',
                icon: <Zap className="w-5 h-5" />,
                link: '/blog/sermon-clips-with-captions',
              },
              {
                output: 'B-Roll Auto-Inserted',
                desc: 'AI pulls from 30,000+ assets and inserts contextually relevant footage — nature, Scripture text, community shots — matched to what your pastor is saying.',
                icon: <Star className="w-5 h-5" />,
                link: '/blog/church-video-b-roll-generator',
              },
              {
                output: 'Social Captions Written',
                desc: 'Instagram caption, TikTok hook, Facebook post — AI writes them all. Hashtag sets included. Ready to copy-paste or schedule.',
                icon: <Heart className="w-5 h-5" />,
                link: '/blog/church-social-media-captions-ai',
              },
              {
                output: 'Full Transcript',
                desc: 'Accurate, time-stamped transcript of the entire sermon. Use for sermon notes, discussion guides, blog posts, email newsletters.',
                icon: <CheckCircle2 className="w-5 h-5" />,
                link: '/sermon-transcription',
              },
              {
                output: 'Small Group Guide',
                desc: 'AI generates a 60-minute discussion guide from the sermon — observation, interpretation, and application questions ready for small group leaders.',
                icon: <Users className="w-5 h-5" />,
                link: '/blog/sermon-discussion-guide-ai',
              },
            ].map((item) => (
              <Link key={item.output} href={item.link} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-[#E8725A] mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2 group-hover:text-[#E8725A] transition-colors">{item.output}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center gap-1 text-[#E8725A] text-xs font-medium">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real talk section */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                Your congregation is already on social media. Your church doesn't have to be invisible there.
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                The people in your pews — and the people who will never walk through your doors on their own — are scrolling Instagram, TikTok, and YouTube every day. That's where sermons go to find people who need them most.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                You don't need a production team. You need a system that makes Sunday's message findable every day of the week. That's Sermon Clips.
              </p>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-[#E8725A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#E8725A]/90 transition-colors"
              >
                Start with your next sermon
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { stat: '90%', label: 'of US churches have fewer than 200 members', sub: 'You\'re not the exception. You\'re the majority.' },
                { stat: '15 min', label: 'average weekly time with Sermon Clips', sub: 'vs. 3–4 hours for manual workflows' },
                { stat: '$29', label: 'per month for unlimited sermons', sub: 'Less than one hour of a freelance editor\'s time' },
                { stat: '30+', label: 'pieces of content from every sermon', sub: 'Clips, transcript, guide, devotional, captions, and more' },
              ].map((item) => (
                <div key={item.stat} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-bold text-[#E8725A]">{item.stat}</span>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
            <div className="text-5xl mb-6">⛪</div>
            <blockquote className="text-xl text-[#2D2D2D] font-medium mb-6 leading-relaxed">
              "We're a congregation of 85. I'm the pastor and the entire communications department. Sermon Clips means I actually post clips every week now — instead of meaning to and never getting to it."
            </blockquote>
            <p className="text-[#5c5c5c] text-sm">— Lead Pastor, community church, rural Ohio</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Priced for small church budgets</h2>
          <p className="text-white/60 mb-10">
            Start free. Process your first sermon at no cost. Then decide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                plan: 'Free',
                price: '$0',
                forever: 'Forever',
                features: ['1 sermon per month', 'Up to 5 clips', 'Captions included', 'Vertical reframing', 'No credit card needed'],
                cta: 'Start Free',
                highlight: false,
              },
              {
                plan: 'Starter',
                price: '$29',
                forever: '/month',
                features: ['Unlimited sermons', 'Unlimited clips', 'B-roll auto-insertion', 'Discussion guide generation', 'Social captions AI', 'Priority processing'],
                cta: 'Most Popular for Small Churches',
                highlight: true,
              },
            ].map((item) => (
              <div key={item.plan} className={`rounded-2xl p-8 text-left ${item.highlight ? 'bg-[#E8725A]' : 'bg-white/5 border border-white/10'}`}>
                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${item.highlight ? 'text-white/80' : 'text-white/60'}`}>{item.plan}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-bold ${item.highlight ? 'text-white' : 'text-white'}`}>{item.price}</span>
                  <span className={`text-sm ${item.highlight ? 'text-white/70' : 'text-white/50'}`}>{item.forever}</span>
                </div>
                <ul className="space-y-2 my-6">
                  {item.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${item.highlight ? 'text-white/90' : 'text-white/60'}`}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#pricing"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${item.highlight ? 'bg-white text-[#E8725A] hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-sm">Need more? Growth ($59/mo) and Auto-Pilot ($149/mo) plans available. <Link href="/#pricing" className="text-white/50 underline">See all plans.</Link></p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-6 text-center">Guides built for small church realities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'How to Repurpose One Sermon Into 30+ Pieces of Content',
                desc: 'One recording. Clips, podcast, email, discussion guide, quote graphics, and more — with minimal extra time.',
                href: '/blog/repurpose-sermon-content',
              },
              {
                title: 'Church Video Reframing: Landscape to Portrait',
                desc: 'How to get your existing sermon footage into the vertical format that social media actually rewards.',
                href: '/blog/church-video-reframing',
              },
              {
                title: 'Small Group Discussion Guides from Sermons — Using AI',
                desc: '2–3 hours of guide writing → 15 minutes. How AI generates OIA questions from any sermon transcript.',
                href: '/blog/sermon-discussion-guide-ai',
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="font-bold text-[#2D2D2D] mb-2 group-hover:text-[#E8725A] transition-colors leading-snug text-sm">{item.title}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center gap-1 text-[#E8725A] text-xs font-medium">
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/60 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <rect x="15" y="0" width="10" height="40" fill="white" />
              <rect x="5" y="12" width="30" height="8" fill="white" />
              <polygon points="18,22 26,26 18,30" fill="#E8725A" />
            </svg>
            <span className="text-white font-semibold">Sermon Clips</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/for/multilingual-churches" className="hover:text-white transition-colors">Multilingual</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/sermon-transcription" className="hover:text-white transition-colors">Transcription</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
