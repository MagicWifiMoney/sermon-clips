import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Globe, Users, Clock, Zap, ArrowRight, Play, Star, Heart } from 'lucide-react';

export const metadata = {
  title: 'Sermon Clips for Multilingual Churches — One Sermon, Every Language',
  description: 'Built for bilingual and multilingual congregations. Upload your sermon once — Sermon Clips delivers clips, captions, and content in Spanish, Mandarin, Tagalog, and 30+ more languages automatically.',
  keywords: 'multilingual church tools, bilingual church software, Spanish sermon clips, church video translation, bilingual congregation tools, multicultural church media',
};

export default function MultilingualChurchesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sermon Clips for Multilingual Churches',
    description: 'AI-powered sermon clipping and translation platform built for bilingual and multilingual congregations.',
    url: 'https://sermonclips.com/for/multilingual-churches',
    mainEntity: {
      '@type': 'Product',
      name: 'Sermon Clips — Multilingual',
      description: 'Upload once. Clips, captions, and full sermon content automatically translated and dubbed into 30+ languages.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '0',
        description: 'First sermon free. No credit card required.',
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
            <Link href="/multilingual-church-video" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] hidden md:block">
              Feature Details
            </Link>
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
            <Globe className="w-4 h-4" />
            For Multilingual & Bilingual Congregations
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-8 max-w-4xl">
            Your congregation speaks more than one language.{' '}
            <span className="text-[#E8725A]">Your content should too.</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed max-w-2xl">
            Upload Sunday's sermon once. Sermon Clips automatically creates clips, captions, and full content packages in Spanish, Mandarin, Tagalog, Haitian Creole, and 30+ more languages — without a separate workflow for each language.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/#pricing"
              className="bg-[#E8725A] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#E8725A]/90 transition-colors text-center"
            >
              Start Free — First Sermon on Us
            </Link>
            <Link
              href="/multilingual-church-video"
              className="bg-white text-[#2D2D2D] font-semibold px-8 py-4 rounded-xl hover:bg-white/80 transition-colors text-center border border-[#2D2D2D]/10 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#E8725A]" />
              See How Translation Works
            </Link>
          </div>

          {/* Language badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { lang: 'Español', flag: '🇪🇸', note: '67M US speakers' },
              { lang: 'Mandarin', flag: '🇨🇳', note: '3.4M US speakers' },
              { lang: 'Tagalog', flag: '🇵🇭', note: '1.8M US speakers' },
              { lang: 'Haitian Creole', flag: '🇭🇹', note: '890K US speakers' },
              { lang: 'Korean', flag: '🇰🇷', note: '1.1M US speakers' },
              { lang: 'French', flag: '🇫🇷', note: '1.3M US speakers' },
              { lang: 'Portuguese', flag: '🇧🇷', note: '700K US speakers' },
              { lang: '+ 24 more', flag: '🌍', note: '' },
            ].map((item) => (
              <div key={item.lang} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
                <span>{item.flag}</span>
                <span className="font-medium text-[#2D2D2D]">{item.lang}</span>
                {item.note && <span className="text-[#5c5c5c] text-xs hidden md:block">· {item.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Running a bilingual church means doing everything twice.
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Every piece of content — social posts, video clips, bulletin copy, sermon recaps — has to be produced in two (or more) languages. Most churches either skip non-English content or burn out the bilingual staff member who handles it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                problem: 'Double the production time',
                detail: 'Every clip, caption, and post created twice. English workflow takes 4 hours; bilingual workflow takes 8.',
                icon: <Clock className="w-6 h-6" />,
              },
              {
                problem: 'One person carries it all',
                detail: 'Bilingual staff become a bottleneck. When they\'re unavailable, Spanish content doesn\'t go out. The congregation notices.',
                icon: <Users className="w-6 h-6" />,
              },
              {
                problem: 'English gets priority by default',
                detail: 'When time is short, Spanish content gets cut first. Non-English speaking members receive less — which sends the wrong message.',
                icon: <Heart className="w-6 h-6" />,
              },
            ].map((item) => (
              <div key={item.problem} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-[#E8725A] mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.problem}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              One upload. Every language. Same workflow.
            </h2>
            <p className="text-[#5c5c5c] max-w-2xl mx-auto leading-relaxed">
              Sermon Clips processes your sermon once and outputs a complete content package in every language you need — no bilingual bottleneck, no double production time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-sm font-bold text-[#5c5c5c] uppercase tracking-wider mb-4">Before Sermon Clips</div>
              <div className="space-y-3">
                {[
                  'Record sermon → edit clips → export (English): 4 hrs',
                  'Translate transcript manually: 45 min',
                  'Record or subtitle Spanish version: 2 hrs',
                  'Write English social captions: 30 min',
                  'Write Spanish social captions: 30 min',
                  'Create English graphics: 20 min',
                  'Create Spanish graphics: 20 min',
                  'Post on schedule across platforms: 30 min',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#5c5c5c]">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </div>
                ))}
                <div className="border-t border-[#F5F1EB] pt-3 flex justify-between font-bold text-sm">
                  <span className="text-[#2D2D2D]">Total per sermon</span>
                  <span className="text-red-500">8+ hours</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-[#E8725A]/5 rounded-2xl p-8 shadow-sm border border-[#E8725A]/20">
              <div className="text-sm font-bold text-[#E8725A] uppercase tracking-wider mb-4">With Sermon Clips</div>
              <div className="space-y-3">
                {[
                  'Upload sermon video or paste YouTube link: 2 min',
                  'AI transcribes + identifies clip moments: auto',
                  'AI generates English + Spanish clips simultaneously: auto',
                  'AI dubs audio in selected languages: auto',
                  'AI generates captions in all languages: auto',
                  'Review and approve outputs: 10 min',
                  'Schedule across platforms: 5 min',
                  'Coffee while it all exports: ☕',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#5c5c5c]">
                    <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
                <div className="border-t border-[#E8725A]/20 pt-3 flex justify-between font-bold text-sm">
                  <span className="text-[#2D2D2D]">Total per sermon</span>
                  <span className="text-[#E8725A]">~17 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Church Type */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            Built for how multilingual churches actually work
          </h2>
          <p className="text-[#5c5c5c] text-center mb-12 max-w-xl mx-auto">
            No two bilingual congregations are the same. Sermon Clips adapts to your model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: 'Bilingual English + Spanish Church',
                flag: '🇺🇸🇪🇸',
                scenario: 'One English service, one Spanish service — or a simultaneous bilingual service. Content needs to reach both communities equally.',
                howWeHelp: [
                  'One upload → English and Spanish clips generated simultaneously',
                  'Pastor speaks in English → AI dubs Spanish version automatically',
                  'Separate social post queues per language, same posting schedule',
                  'Spanish captions burned into vertical clips for Reels/TikTok',
                ],
              },
              {
                type: 'Immigrant Church (Single Language)',
                flag: '🌍',
                scenario: 'Congregation primarily speaks a language other than English. Wants to reach English-speaking children and second-generation members.',
                howWeHelp: [
                  'Primary content in home language (Tagalog, Mandarin, Amharic, etc.)',
                  'English versions auto-generated for second-generation outreach',
                  'Website SEO content in both languages from same transcript',
                  'Clips formatted for diaspora communities abroad',
                ],
              },
              {
                type: 'Multicultural Church (3+ Languages)',
                flag: '🌐',
                scenario: 'Diverse urban congregation. Weekly service attended by people who speak 5–10 different languages. No single dominant secondary language.',
                howWeHelp: [
                  'Single English sermon → up to 30+ language outputs per upload',
                  'Each language community gets their own translated clip package',
                  'Captioned clips in native script (Chinese characters, Arabic, Hindi)',
                  'Mission-ready: export translated sermons for international partners',
                ],
              },
              {
                type: 'Church Plant in Emerging Community',
                flag: '🌱',
                scenario: 'New church in a neighborhood with significant immigrant population. Building community trust across language groups.',
                howWeHelp: [
                  'Demonstrate cultural commitment through consistent native-language content',
                  'No translator salary needed — AI handles translation at fraction of cost',
                  'Grow bilingual social following simultaneously from day one',
                  'Free tier: test with first sermon before committing',
                ],
              },
            ].map((item) => (
              <div key={item.type} className="bg-[#F5F1EB] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.flag}</span>
                  <h3 className="font-bold text-[#2D2D2D]">{item.type}</h3>
                </div>
                <p className="text-sm text-[#5c5c5c] mb-4 leading-relaxed italic">{item.scenario}</p>
                <ul className="space-y-2">
                  {item.howWeHelp.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Spanish Opportunity */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#2D2D2D] rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[#E8725A] font-semibold text-sm uppercase tracking-wider mb-4">The Opportunity No One Is Talking About</div>
                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                  67 million Spanish speakers in the US. Most churches post zero Spanish content.
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Hispanic Americans are the fastest-growing segment of evangelical Christianity in the United States. Spanish-speaking churchgoers are actively seeking faith content on social media — and finding almost none from US churches.
                </p>
                <p className="text-white/70 mb-8 leading-relaxed">
                  No competitor offers automated Spanish sermon clips. Most churches posting Spanish content are doing it manually — a process so painful that most give up after a few months. Sermon Clips makes it as easy as English.
                </p>
                <Link
                  href="/multilingual-church-video"
                  className="inline-flex items-center gap-2 bg-[#E8725A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#E8725A]/90 transition-colors"
                >
                  See Translation in Action
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { stat: '67M', label: 'Spanish speakers in the US', sub: 'Second-largest Spanish-speaking nation in the world' },
                  { stat: '30+', label: 'Languages supported', sub: 'Including minority languages with no other automated solution' },
                  { stat: '0', label: 'Competitors offering this', sub: 'OpusClip, Headliner, Descript — none offer automated church video translation' },
                  { stat: '8×', label: 'Faster than manual translation', sub: '17 min vs. 2.5 hrs for bilingual content workflow' },
                ].map((item) => (
                  <div key={item.stat} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-bold text-[#E8725A]">{item.stat}</span>
                      <span className="text-white font-semibold">{item.label}</span>
                    </div>
                    <p className="text-sm text-white/50">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            Everything your multilingual church media team needs
          </h2>
          <p className="text-[#5c5c5c] text-center mb-12 max-w-xl mx-auto">
            One sermon upload creates a full content package across every language you serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'AI Voice Dubbing',
                desc: 'Pastor\'s message dubbed in natural-sounding voices — not robotic TTS. Listeners hear a real voice in their language.',
                icon: <Play className="w-5 h-5" />,
              },
              {
                title: 'Native Script Captions',
                desc: 'Burned-in captions in the target language. Chinese characters, Arabic script, Hindi Devanagari — not just Latin alphabet translations.',
                icon: <Globe className="w-5 h-5" />,
              },
              {
                title: 'Multi-Language Clips',
                desc: 'The same 3 best clips from your sermon, exported in English + Spanish (or any language pair) simultaneously.',
                icon: <Zap className="w-5 h-5" />,
              },
              {
                title: 'Translated Transcripts',
                desc: 'Full sermon transcript in every language. Use for discussion guides, devotionals, or website SEO in multiple languages.',
                icon: <CheckCircle2 className="w-5 h-5" />,
              },
              {
                title: 'Portrait + Landscape Formats',
                desc: '9:16 for Reels/TikTok, 16:9 for YouTube — all in every language. Auto-reframed to keep the speaker centered.',
                icon: <Star className="w-5 h-5" />,
              },
              {
                title: 'Social Captions in All Languages',
                desc: 'AI writes Instagram captions, TikTok hooks, and Facebook copy in every output language. Not just translated — culturally adapted.',
                icon: <Heart className="w-5 h-5" />,
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F5F1EB] rounded-2xl p-6">
                <div className="text-[#E8725A] mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#5c5c5c] mb-4 text-sm">
              Want the full technical breakdown?{' '}
              <Link href="/multilingual-church-video" className="text-[#E8725A] hover:underline font-medium">
                See the multilingual features page →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof Placeholder */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
            <div className="text-4xl mb-6">🌍</div>
            <blockquote className="text-xl text-[#2D2D2D] font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
              "We went from posting Spanish content once a month — when we had time — to every single week. Same workflow as English. The congregation noticed immediately."
            </blockquote>
            <p className="text-[#5c5c5c] text-sm">— Church media director, bilingual English/Spanish congregation, Texas</p>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-20 px-6 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start this Sunday.
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed text-lg">
            Upload this week's sermon free. See your sermon in English and Spanish — clips, captions, social posts — before you commit to anything.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { plan: 'Free', price: '$0', feature: '1 sermon · 2 languages · Basic clips', cta: 'Start Free' },
              { plan: 'Growth', price: '$59/mo', feature: 'Unlimited sermons · 10 languages · Full outputs', cta: 'Most Popular', highlight: true },
              { plan: 'Auto-Pilot', price: '$149/mo', feature: 'Unlimited · 30+ languages · Auto-publish', cta: 'Full Automation' },
            ].map((item) => (
              <div key={item.plan} className={`rounded-2xl p-6 ${item.highlight ? 'bg-[#E8725A]' : 'bg-white/5 border border-white/10'}`}>
                <div className={`font-bold mb-1 ${item.highlight ? 'text-white' : 'text-white'}`}>{item.plan}</div>
                <div className={`text-2xl font-bold mb-3 ${item.highlight ? 'text-white' : 'text-white'}`}>{item.price}</div>
                <div className={`text-xs mb-4 leading-relaxed ${item.highlight ? 'text-white/80' : 'text-white/50'}`}>{item.feature}</div>
                <Link
                  href="/#pricing"
                  className={`block text-sm font-semibold py-2 px-4 rounded-lg text-center transition-colors ${item.highlight ? 'bg-white text-[#E8725A] hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm">No credit card required for free tier. Cancel anytime.</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-6 bg-[#F5F1EB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-6 text-center">Related resources for multilingual churches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'AI Translation & Dubbing — Full Feature Guide',
                desc: 'Technical breakdown of 30+ language support, dubbing quality, and workflow.',
                href: '/multilingual-church-video',
                label: 'Feature page',
              },
              {
                title: 'How to Repurpose One Sermon Into 30+ Content Pieces',
                desc: 'The complete inventory of content you can generate from a single recording.',
                href: '/blog/repurpose-sermon-content',
                label: 'Blog post',
              },
              {
                title: 'Church Social Media Captions AI',
                desc: '50+ caption templates — available in your language.',
                href: '/blog/church-social-media-captions-ai',
                label: 'Blog post',
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-xs font-semibold text-[#E8725A] uppercase tracking-wider mb-2">{item.label}</div>
                <h3 className="font-bold text-[#2D2D2D] mb-2 group-hover:text-[#E8725A] transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1 text-[#E8725A] text-sm font-medium mt-3">
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
            <Link href="/multilingual-church-video" className="hover:text-white transition-colors">Multilingual Features</Link>
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
