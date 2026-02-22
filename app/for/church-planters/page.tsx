import Link from 'next/link';
import { CheckCircle2, Zap, ArrowRight, Play, Star, Rocket, MapPin, Users, Clock, TrendingUp, Heart, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Sermon Clips for Church Planters — Build Your Audience Before You Have a Building',
  description: 'Church planters use Sermon Clips to turn every sermon into a social media presence — building an audience, attracting founding members, and establishing brand identity from day one. Free to start.',
  keywords: 'church planting tools, church planter social media, church launch video content, church planting software, sermon clips church plant, church planter content strategy',
};

export default function ChurchPlantersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sermon Clips for Church Planters',
    description: 'AI-powered sermon clipping platform for church planters building an audience from scratch.',
    url: 'https://sermonclips.com/for/church-planters',
    mainEntity: {
      '@type': 'Product',
      name: 'Sermon Clips — Church Planter',
      description: 'Turn every sermon into a social presence. Build your audience before you have a building.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '0',
        description: 'Free to start. First sermon processed at no cost.',
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
            <Rocket className="w-4 h-4" />
            For Church Planters & Launch Teams
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-8 max-w-4xl">
            Build your audience{' '}
            <span className="text-[#E8725A]">before you have a building.</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed max-w-2xl">
            Every sermon you preach is a preview. The person who'll become your most committed founding member might find you on TikTok three months before your launch Sunday. Sermon Clips turns each message into a social presence — automatically, while you're busy building everything else.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/#pricing"
              className="bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors text-center"
            >
              Start Free — First Sermon on Us
            </Link>
            <Link
              href="/blog/repurpose-sermon-content"
              className="bg-white text-[#2D2D2D] font-semibold px-8 py-4 rounded-xl border border-[#2D2D2D]/10 hover:bg-white/80 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#E8725A]" />
              See What One Sermon Creates
            </Link>
          </div>

          {/* Launch timeline visual */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#5c5c5c] mb-6">Your church planting content timeline</p>
            <div className="flex items-center gap-0 overflow-x-auto">
              {[
                { phase: 'Month 1–3', label: 'Preview Sermons', desc: 'Living room, coffee shop, or rented space. Every message → clips. Building an audience who doesn\'t know you yet.' },
                { phase: 'Month 4–6', label: 'Soft Launch', desc: 'Preview services begin. Social proof compounds. Clips from preview sermons are your best recruitment tool.' },
                { phase: 'Month 7–9', label: 'Launch Series', desc: 'Launch Sunday approaching. Clip archive shows momentum. New visitors find you through months of consistent content.' },
                { phase: 'Month 10+', label: 'Established', desc: 'Ongoing — clips keep reaching people who will never hear about your church any other way.' },
              ].map((item, i) => (
                <div key={item.phase} className="flex items-start flex-shrink-0" style={{ width: '25%', minWidth: '160px' }}>
                  <div className="flex-1 pr-2">
                    <div className="text-xs font-bold text-[#E8725A] mb-1">{item.phase}</div>
                    <div className="font-semibold text-[#2D2D2D] text-sm mb-2">{item.label}</div>
                    <div className="text-xs text-[#5c5c5c] leading-relaxed">{item.desc}</div>
                  </div>
                  {i < 3 && (
                    <div className="pt-1 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#E8725A]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The church planter reality */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            You're doing everything. Content can't also take 4 hours.
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Church planters wear every hat. The last thing you have is 3 hours on Monday morning to edit video clips.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { role: 'Lead Pastor', icon: '📖' },
              { role: 'Vision Caster', icon: '🎯' },
              { role: 'Lead Fundraiser', icon: '💰' },
              { role: 'Counselor', icon: '🤝' },
              { role: 'Operations Director', icon: '📋' },
              { role: 'Social Media Manager', icon: '📱' },
              { role: 'Volunteer Coordinator', icon: '🙌' },
              { role: 'Worship Planner', icon: '🎵' },
              { role: 'Video Editor', icon: '✂️' },
            ].map((item) => (
              <div key={item.role} className={`bg-white/5 rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 ${item.role === 'Video Editor' ? 'opacity-30 line-through border-red-500/30' : ''}`}>
                <span className="text-xl">{item.icon}</span>
                <span className={`text-sm font-medium ${item.role === 'Video Editor' ? 'text-white/30' : 'text-white/80'}`}>{item.role}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 text-sm italic">
            Sermon Clips removes one hat. The one that was never yours to wear.
          </p>
        </div>
      </section>

      {/* Why social presence matters pre-launch */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Your pre-launch content is your best launch strategy
            </h2>
            <p className="text-[#5c5c5c] max-w-2xl mx-auto leading-relaxed">
              People don't show up to launch Sunday from a flyer. They show up because they've been watching your clips for three months and finally decided to come in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                stage: 'They find a clip',
                detail: 'Someone in your city scrolls past a 60-second sermon clip. It resonates. They don\'t come to church yet — but they follow you.',
                icon: <Play className="w-6 h-6" />,
              },
              {
                stage: 'They watch for weeks',
                detail: 'Over 6–8 weeks, they watch 20–30 more clips. They develop trust. They feel like they know you and your theology before ever stepping foot in your building.',
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                stage: 'They come on launch day',
                detail: 'Launch Sunday, they walk through the door as a warm lead — not a cold visitor. They already know the pastor, the vibe, the theology. Assimilation happens faster.',
                icon: <MapPin className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div key={item.stage} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-[#E8725A] mb-3">{item.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5c5c5c] mb-2">Step {i + 1}</div>
                <h3 className="font-bold text-[#2D2D2D] mb-3">{item.stage}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#2D2D2D] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Star className="w-5 h-5 text-[#E8725A] mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold text-white mb-2">The consistency advantage</div>
                <p className="text-sm text-white/70 leading-relaxed">
                  The algorithm rewards consistency above everything else. A church planter posting 3–4 clips per week for 12 months will out-reach a church with 10× the budget that posts sporadically. Sermon Clips makes consistent posting possible for a solo operator — because it takes 15 minutes a week, not 15 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The imperfect recording problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
              "But our setup isn't professional enough."
            </h2>
            <p className="text-[#5c5c5c] max-w-2xl mx-auto leading-relaxed">
              You're meeting in a school gym, a living room, or a rented community space. The lighting isn't great. The camera is a phone or a mid-range camcorder. That's fine. Here's why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#F5F1EB] rounded-2xl p-6">
              <h3 className="font-bold text-[#2D2D2D] mb-4">What Sermon Clips does with imperfect footage</h3>
              <div className="space-y-3">
                {[
                  { fix: 'Auto color correction and exposure balancing', desc: 'Evens out the flat lighting in most non-studio spaces' },
                  { fix: 'B-roll inserts cover weak visual moments', desc: '30,000+ assets cut over your footage — viewers see polished visuals even when your recording isn\'t' },
                  { fix: 'Auto-reframing centers the speaker', desc: 'Poor camera placement or a moving speaker gets corrected in the crop' },
                  { fix: 'Captions carry the message when audio is muddy', desc: 'Most social video watched on mute anyway — captions bridge imperfect room acoustics' },
                  { fix: 'Motion graphics add production value', desc: 'Lower-thirds, transitions, and overlays signal professionalism regardless of source footage' },
                ].map((item) => (
                  <div key={item.fix} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-[#2D2D2D] text-sm">{item.fix}</div>
                      <div className="text-xs text-[#5c5c5c] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F1EB] rounded-2xl p-6">
              <h3 className="font-bold text-[#2D2D2D] mb-4">What actually builds a church plant audience</h3>
              <div className="space-y-4 text-sm text-[#5c5c5c]">
                <p className="leading-relaxed">
                  People don't follow church planters because the production is polished. They follow because the preaching is real, the theology is clear, and they can tell the pastor genuinely believes what they're saying.
                </p>
                <p className="leading-relaxed">
                  The #1 thing that kills church planter social presence isn't bad video quality — it's <strong className="text-[#2D2D2D]">inconsistency</strong>. Going 3 weeks without posting because editing is overwhelming. AI solves that problem permanently.
                </p>
                <p className="leading-relaxed">
                  Some of the fastest-growing church plants on TikTok post iPhone footage with AI-generated captions. The message travels. The production quality is a distant second.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-[#2D2D2D] mb-1">One recommendation</p>
                  <p className="text-[#5c5c5c] text-xs leading-relaxed">
                    If you're choosing between spending $200 on a lighting kit vs. 6 months of Sermon Clips: get the lighting kit first. Good light matters more than professional editing. Then add Sermon Clips to turn that improved footage into consistent content automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            One upload. A week of content.
          </h2>
          <p className="text-[#5c5c5c] text-center mb-12 max-w-xl mx-auto">
            Every sermon you preach becomes a complete content package. Here's what Sermon Clips creates from a single recording.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                category: 'For Social Media',
                outputs: [
                  '3–5 vertical clips (9:16) for Reels, TikTok, Shorts',
                  'Auto-reframed from your landscape recording',
                  'Burned-in captions on every clip',
                  'B-roll inserted at key moments',
                  'Instagram, TikTok, Facebook captions written',
                ],
                icon: <Zap className="w-5 h-5" />,
              },
              {
                category: 'For Community Building',
                outputs: [
                  'Full sermon transcript (accurate, time-stamped)',
                  'Small group discussion guide — OIA format',
                  '5-day devotional from the sermon text',
                  'Email newsletter content',
                  'Quote graphics for Instagram Stories',
                ],
                icon: <Users className="w-5 h-5" />,
              },
              {
                category: 'For Your Church Website',
                outputs: [
                  'Landscape clip for YouTube channel',
                  'SEO-ready sermon description',
                  'Full transcript for accessibility',
                  'Sermon series artwork assets',
                  'Chapter markers for long-form video',
                ],
                icon: <MapPin className="w-5 h-5" />,
              },
              {
                category: 'For Your Launch Campaign',
                outputs: [
                  'Translated clips for multilingual launch cities',
                  'Short "meet the pastor" style cuts',
                  'Highlight reels from preview series',
                  'Vision Sunday clip packages',
                  'Motion graphics matched to your brand',
                ],
                icon: <Rocket className="w-5 h-5" />,
              },
            ].map((item) => (
              <div key={item.category} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#E8725A]">{item.icon}</div>
                  <h3 className="font-bold text-[#2D2D2D]">{item.category}</h3>
                </div>
                <ul className="space-y-2">
                  {item.outputs.map((output, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8725A] mt-0.5 flex-shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-[#5c5c5c] mb-2">
              See the full breakdown:{' '}
              <Link href="/blog/repurpose-sermon-content" className="text-[#E8725A] hover:underline font-medium">
                30+ pieces of content from one sermon →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-3xl mb-4">🚀</div>
              <blockquote className="text-white/90 font-medium leading-relaxed mb-4">
                "We were six months from launch Sunday, meeting in my living room with 12 people. Sermon Clips meant we had a TikTok presence from week one. By launch, we had 1,200 followers who'd never been to a service — and 40 of them showed up on day one."
              </blockquote>
              <p className="text-white/40 text-sm">— Church planter, suburban Chicago, 2025</p>
            </div>

            <div className="flex flex-col justify-center gap-6">
              {[
                { stat: '6 months', label: 'average pre-launch content runway for successful church plants', icon: <Clock className="w-5 h-5" /> },
                { stat: '15 min', label: 'weekly time commitment with Sermon Clips', icon: <Zap className="w-5 h-5" /> },
                { stat: '$0', label: 'to start — first sermon processed free', icon: <DollarSign className="w-5 h-5" /> },
                { stat: '3–4×', label: 'higher reach with vertical clips vs landscape', icon: <TrendingUp className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.stat} className="flex items-center gap-4">
                  <div className="text-[#E8725A] flex-shrink-0">{item.icon}</div>
                  <div>
                    <span className="text-2xl font-bold text-[#E8725A]">{item.stat}</span>
                    <span className="text-white/60 text-sm ml-2">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
            Church planting is expensive enough.
          </h2>
          <p className="text-[#5c5c5c] mb-10 leading-relaxed max-w-xl mx-auto">
            Start free. Your first sermon is on us. When you're ready to scale, Starter is $29/month — less than a single Facebook ad boost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                plan: 'Free',
                price: '$0',
                period: 'forever',
                features: ['1 sermon/month', '5 clips max', 'Captions + reframing', 'No credit card'],
                cta: 'Start Here',
                highlight: false,
              },
              {
                plan: 'Starter',
                price: '$29',
                period: '/month',
                features: ['Unlimited sermons', 'Unlimited clips', 'B-roll auto-insert', 'Social captions AI', 'Discussion guides', 'Priority processing'],
                cta: 'Best for Pre-Launch',
                highlight: true,
              },
              {
                plan: 'Growth',
                price: '$59',
                period: '/month',
                features: ['Everything in Starter', 'Up to 10 languages', 'Motion graphics', 'Advanced analytics', 'Team access'],
                cta: 'Post-Launch Growth',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.plan} className={`rounded-2xl p-6 ${item.highlight ? 'bg-[#2D2D2D] shadow-lg' : 'bg-white border border-[#2D2D2D]/10'}`}>
                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${item.highlight ? 'text-[#E8725A]' : 'text-[#5c5c5c]'}`}>{item.plan}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-3xl font-bold ${item.highlight ? 'text-white' : 'text-[#2D2D2D]'}`}>{item.price}</span>
                  <span className={`text-sm ${item.highlight ? 'text-white/50' : 'text-[#5c5c5c]'}`}>{item.period}</span>
                </div>
                <ul className="space-y-2 my-5">
                  {item.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-2 text-xs ${item.highlight ? 'text-white/70' : 'text-[#5c5c5c]'}`}>
                      <CheckCircle2 className="w-3 h-3 flex-shrink-0 text-[#E8725A]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#pricing"
                  className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-colors ${item.highlight ? 'bg-[#E8725A] text-white hover:bg-[#E8725A]/90' : 'bg-[#F5F1EB] text-[#2D2D2D] hover:bg-[#2D2D2D]/10'}`}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-[#5c5c5c] text-sm">
            No contracts. Cancel anytime. Auto-Pilot ($149/mo) available for fully automated publishing.{' '}
            <Link href="/#pricing" className="text-[#E8725A] underline">See all plans.</Link>
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-6 text-center">Resources for church planters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'How to Repurpose One Sermon Into 30+ Pieces of Content', href: '/blog/repurpose-sermon-content', label: 'Content strategy' },
              { title: 'Church Social Media Captions AI — 50+ Templates', href: '/blog/church-social-media-captions-ai', label: 'Social copy' },
              { title: 'B-Roll for Church Videos — Complete Guide', href: '/blog/church-video-b-roll-generator', label: 'Video production' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider mb-2">{item.label}</div>
                <h3 className="font-bold text-[#2D2D2D] mb-3 group-hover:text-[#E8725A] transition-colors leading-snug text-sm">{item.title}</h3>
                <div className="flex items-center gap-1 text-[#E8725A] text-xs font-medium">
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-[#5c5c5c]">
            Running a small established church?{' '}
            <Link href="/for/small-churches" className="text-[#E8725A] hover:underline font-medium">See Sermon Clips for small churches →</Link>
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
            <Link href="/for/small-churches" className="hover:text-white transition-colors">Small Churches</Link>
            <Link href="/for/multilingual-churches" className="hover:text-white transition-colors">Multilingual</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <p className="text-sm">© 2026 Sermon Clips</p>
        </div>
      </footer>
    </div>
  );
}
