import { CheckCircle2, XCircle, ArrowRight, Zap, Globe, DollarSign, Star, Play, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Clips vs SermonShots — Honest Comparison & Alternative (2026)",
  description: "Comparing Sermon Clips vs SermonShots? See the full feature and pricing breakdown. Sermon Clips starts at $29/mo vs SermonShots' $49.99/mo for clips — plus 30+ language translation they don't offer.",
  keywords: "sermonshots alternative, sermon shots alternative, sermonshots pricing, sermon shots pricing, sermonshots vs sermon clips, church clip software comparison",
  openGraph: {
    title: "Sermon Clips vs SermonShots — Full Comparison (2026)",
    description: "Same sermon clips. 40% less. Plus 30 languages and direct social publishing SermonShots doesn't have.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does SermonShots cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SermonShots pricing (as of 2026): Free plan (2 clips, manually created), Plus at $49.99/month (unlimited clips, transcription, podcast audio), Silver Suite at $67/month (adds blog posts, discussion guides, devotionals, quote images, thumbnails), and Gold Suite at $97/month (adds 20 hour uploads and upcoming SermonLive streaming)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good SermonShots alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sermon Clips is a direct SermonShots alternative with lower pricing — starting at $29/month for clips and transcription vs SermonShots' $49.99/month. Sermon Clips also includes 30+ language caption translation and direct social media publishing that SermonShots doesn't offer."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sermon Clips cheaper than SermonShots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sermon Clips Starter is $29/month for unlimited clips and transcription. SermonShots Plus (equivalent clip-only tier) is $49.99/month — about 40% more for the same core functionality."
      }
    },
    {
      "@type": "Question",
      "name": "Does SermonShots support multiple languages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SermonShots supports a limited number of languages. Sermon Clips supports 30+ languages for caption translation, including Spanish, Korean, Mandarin, Portuguese, French, Arabic, Hindi, and more — making it a better fit for multilingual congregations."
      }
    }
  ]
};

const comparisonRows = [
  { feature: "Starting price (clips + transcription)", us: "$29/mo", them: "$49.99/mo", winner: "us", note: "We're 40% cheaper for equivalent clip functionality" },
  { feature: "AI sermon clip detection", us: true, them: true, winner: "tie" },
  { feature: "Sermon transcription", us: true, them: true, winner: "tie" },
  { feature: "Auto-captions", us: true, them: true, winner: "tie" },
  { feature: "Vertical reframing (9:16)", us: true, them: true, winner: "tie" },
  { feature: "30+ language translation", us: true, them: false, winner: "us", note: "They list 'multiple languages'; we support 30+ including Spanish, Korean, Mandarin, Arabic" },
  { feature: "Direct social publishing", us: true, them: false, winner: "us", note: "We publish directly to Instagram, TikTok, YouTube Shorts, Facebook" },
  { feature: "B-roll overlay", us: true, them: false, winner: "us", note: "AI-matched visual B-roll over sermon footage" },
  { feature: "Motion graphics & color grading", us: true, them: false, winner: "us", note: "Powered by Mosaic AI video engine" },
  { feature: "Music underlay", us: true, them: true, winner: "tie" },
  { feature: "Blog post generation", us: false, them: true, winner: "them", note: "SermonShots Silver ($67/mo); we have this on our roadmap" },
  { feature: "5-Day Devotional", us: false, them: true, winner: "them", note: "SermonShots Silver ($67/mo)" },
  { feature: "Discussion guide", us: false, them: true, winner: "them", note: "SermonShots Silver ($67/mo)" },
  { feature: "Quote image generator", us: false, them: true, winner: "them", note: "SermonShots Silver ($67/mo)" },
  { feature: "Podcast audio export", us: false, them: true, winner: "them", note: "SermonShots Plus and above" },
  { feature: "Free plan (self-serve)", us: true, them: false, winner: "us", note: "Their free plan requires manual human processing with a wait time" },
];

const pricingComparison = [
  {
    label: "Clips only",
    them: { plan: "SermonShots Plus", price: "$49.99/mo", note: "Unlimited clips, transcription, 10hr uploads" },
    us: { plan: "Sermon Clips Starter", price: "$29/mo", note: "Unlimited clips, transcription, 30+ languages" },
  },
  {
    label: "Clips + content generation",
    them: { plan: "SermonShots Silver", price: "$67/mo", note: "Adds blog, devotional, guide, quote images, thumbnails" },
    us: { plan: "Sermon Clips Growth", price: "$59/mo", note: "Adds multi-platform publishing, priority processing (content gen coming soon)" },
  },
  {
    label: "Full suite",
    them: { plan: "SermonShots Gold", price: "$97/mo", note: "Silver + 20hr uploads + SermonLive (coming soon)" },
    us: { plan: "Sermon Clips Auto-Pilot", price: "$149/mo", note: "Unlimited + B-roll + motion graphics + 30+ languages + full publishing" },
  },
];

export default function SermonShotsAlternativePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
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
          <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            Try Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/8 text-[#2D2D2D] text-sm font-medium mb-6">
            Honest comparison · Updated February 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Clips vs{" "}
            <span className="text-[#E8725A]">SermonShots</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-2xl mx-auto">
            SermonShots is the most widely used sermon clip tool — and for good reason. This comparison is honest about where they&apos;re stronger and where we are.
          </p>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Short version: same clips, 40% lower price, better language support, and direct social publishing they don&apos;t have.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
              Try Sermon Clips Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#comparison" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
              See Full Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-10">Where each tool wins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Us */}
            <div className="bg-[#E8725A]/5 border-2 border-[#E8725A]/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                    <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                    <polygon points="18,22 26,26 18,30" fill="#E8725A" />
                  </svg>
                </div>
                <span className="font-bold text-[#2D2D2D]">Sermon Clips is better for:</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Budget-conscious churches ($29 vs $49.99 for clips)",
                  "Multilingual congregations (30+ languages)",
                  "Churches that want to publish directly to social platforms",
                  "More cinematic clips (B-roll, motion graphics, color grading)",
                  "Getting started quickly (fully self-serve free tier)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                    <CheckCircle2 className="w-4 h-4 text-[#E8725A] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Them */}
            <div className="bg-[#F5F1EB] border border-[#2D2D2D]/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-[#2D2D2D]">SermonShots is better for:</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Content generation bundles (blog posts, devotionals, study guides)",
                  "Quote card and thumbnail image generation",
                  "Podcast audio export",
                  "Live stream auto-capture (Silver plan)",
                  "Churches already deep in their ecosystem (SermonSend email + SermonLive)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#5c5c5c]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D2D2D]/40 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Pricing: side by side
          </h2>
          <p className="text-center text-[#5c5c5c] mb-12 max-w-xl mx-auto">
            SermonShots pricing as of February 2026. Both tools offer monthly billing.
          </p>

          <div className="space-y-4">
            {pricingComparison.map((row, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#2D2D2D]/10 overflow-hidden">
                <div className="bg-[#2D2D2D]/5 px-5 py-2.5">
                  <p className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-widest">{row.label}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-5 border-b md:border-b-0 md:border-r border-[#2D2D2D]/8">
                    <p className="text-xs text-[#5c5c5c] mb-1">SermonShots</p>
                    <p className="text-2xl font-bold text-[#2D2D2D] mb-1">{row.them.price}</p>
                    <p className="text-xs text-[#5c5c5c]">{row.them.plan} — {row.them.note}</p>
                  </div>
                  <div className="p-5 bg-[#E8725A]/3">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs text-[#E8725A] font-medium">Sermon Clips</p>
                      {i === 0 && <span className="text-xs bg-[#E8725A] text-white px-2 py-0.5 rounded-full">40% less</span>}
                      {i === 1 && <span className="text-xs bg-[#E8725A] text-white px-2 py-0.5 rounded-full">$8 less</span>}
                    </div>
                    <p className="text-2xl font-bold text-[#E8725A] mb-1">{row.us.price}</p>
                    <p className="text-xs text-[#5c5c5c]">{row.us.plan} — {row.us.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature comparison */}
      <section id="comparison" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Full feature comparison
          </h2>
          <p className="text-center text-[#5c5c5c] mb-12">No spin — including where SermonShots has features we don&apos;t.</p>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#2D2D2D]/10">
            <div className="grid grid-cols-3 bg-[#2D2D2D] text-white p-4">
              <div className="text-sm font-medium">Feature</div>
              <div className="text-sm font-medium text-center text-[#E8725A]">Sermon Clips</div>
              <div className="text-sm font-medium text-center text-white/70">SermonShots</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={i} className={`border-b border-[#2D2D2D]/8 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/40"}`}>
                <div className="grid grid-cols-3 p-4">
                  <div>
                    <p className="text-sm font-medium text-[#2D2D2D]">{row.feature}</p>
                    {row.note && <p className="text-xs text-[#5c5c5c] mt-0.5">{row.note}</p>}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.us === "boolean" ? (
                      row.us
                        ? <CheckCircle2 className={`w-5 h-5 ${row.winner === "us" ? "text-[#E8725A]" : "text-[#2D2D2D]/50"}`} />
                        : <XCircle className="w-5 h-5 text-[#2D2D2D]/20" />
                    ) : (
                      <span className={`text-sm font-bold ${row.winner === "us" ? "text-[#E8725A]" : "text-[#2D2D2D]"}`}>{row.us}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.them === "boolean" ? (
                      row.them
                        ? <CheckCircle2 className="w-5 h-5 text-[#2D2D2D]/50" />
                        : <XCircle className="w-5 h-5 text-[#2D2D2D]/20" />
                    ) : (
                      <span className={`text-sm font-bold ${row.winner === "them" ? "text-green-700" : "text-[#2D2D2D]"}`}>{row.them}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#5c5c5c] mt-4">
            SermonShots is a trademark of its respective owner. Comparison based on published features and pricing as of February 2026.
          </p>
        </div>
      </section>

      {/* The multilingual difference */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#2D2D2D] rounded-3xl p-8 md:p-12">
            <Globe className="w-10 h-10 text-[#E8725A] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              30+ languages. Not "multiple languages."
            </h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl">
              SermonShots lists &ldquo;multiple languages&rdquo; in their feature set without specifying which ones or how many. Sermon Clips supports 30+ languages for caption generation and translation — including the most common languages in US multilingual congregations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {["Spanish", "Korean", "Mandarin", "Portuguese", "French", "Arabic", "Hindi", "Japanese", "Vietnamese", "Tagalog", "Haitian Creole", "Russian"].map((lang, i) => (
                <div key={i} className="bg-white/10 rounded-xl px-3 py-2 text-sm text-white text-center">
                  {lang}
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm">
              + 18 more languages. One upload — captions for your whole congregation.
            </p>
          </div>
        </div>
      </section>

      {/* Migration note */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Clock className="w-10 h-10 text-[#E8725A] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Switching takes one sermon</h2>
          <p className="text-[#5c5c5c] leading-relaxed mb-6 max-w-xl mx-auto">
            There&apos;s no contract, no migration, no data export headache. Upload your next sermon to Sermon Clips and see what you get. If the clips are better, switch. If they&apos;re not, stay where you are.
          </p>
          <p className="text-[#5c5c5c] mb-8 max-w-md mx-auto">
            Your first sermon is free. No credit card required.
          </p>
          <Link href="/sign-up" className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30">
            Try It on Your Next Sermon
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-[#F5F1EB]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: "How much does SermonShots cost?", a: "SermonShots' Plus plan (clips only) is $49.99/month. Their Silver Suite (clips + content generation: blog, devotional, guide, quote images) is $67/month. Gold Suite is $97/month and adds 20 hours of uploads plus their upcoming SermonLive streaming product." },
              { q: "Is Sermon Clips cheaper than SermonShots?", a: "Yes, significantly on clips. Our Starter plan is $29/month for unlimited clips and transcription — vs SermonShots Plus at $49.99/month for equivalent functionality. That's about 40% less for the same core output." },
              { q: "Does SermonShots support Spanish and other languages?", a: "SermonShots lists 'multiple languages' in their feature set but doesn't publish a specific language list. Sermon Clips explicitly supports 30+ languages including Spanish, Korean, Mandarin, Portuguese, French, Arabic, Hindi, and Japanese." },
              { q: "What does SermonShots have that Sermon Clips doesn't?", a: "SermonShots' Silver plan ($67/month) includes blog post generation, 5-day devotionals, discussion guides, quote image generators, and thumbnail generators. These are content generation features we have on our roadmap but haven't shipped yet. If those features are your primary need today, SermonShots Silver may be the right choice." },
              { q: "Can I publish clips directly to Instagram or TikTok from SermonShots?", a: "SermonShots produces downloadable clips — you then upload them to social platforms manually. Sermon Clips includes direct publishing to Instagram Reels, TikTok, YouTube Shorts, and Facebook, saving several steps in your weekly workflow." },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#2D2D2D]/10 pb-6">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-6 lg:px-8 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wider mb-4">More comparisons</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/alternatives/opus-clip", label: "Sermon Clips vs Opus Clip →" },
              { href: "/sermon-transcription", label: "Sermon Transcription →" },
              { href: "/blog/sermon-shorts-complete-guide", label: "Sermon Shorts Guide →" },
              { href: "/#pricing", label: "View Our Pricing →" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-sm text-[#E8725A] hover:underline font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F1EB] border-t border-[#2D2D2D]/10 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
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
            <Link href="/blog" className="hover:text-[#2D2D2D]">Blog</Link>
            <Link href="/#pricing" className="hover:text-[#2D2D2D]">Pricing</Link>
            <Link href="/alternatives/opus-clip" className="hover:text-[#2D2D2D]">Alternatives</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
