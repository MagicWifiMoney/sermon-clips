import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'ChurchSocial Alternative: Sermon Clips vs ChurchSocial.ai (2026)',
  description: 'Comparing Sermon Clips vs ChurchSocial.ai (formerly Discipls) for church video clips and social media. Pricing, features, and who wins where — honest breakdown.',
  keywords: 'churchsocial alternative, churchsocial pricing, discipls alternative, church social media scheduler alternative, sermon clips vs churchsocial',
};

const COMPARISON_ROWS = [
  // Pricing
  { category: "Pricing", feature: "Starting price (clips included)", us: "$29/mo", them: "~$78–99/mo", usWins: true, note: "Base plan + $49 Sermon Studio addon required" },
  { category: "Pricing", feature: "Free tier", us: "✅ 1 sermon free", them: "❌ No free tier", usWins: true },
  { category: "Pricing", feature: "Clips without addon purchase", us: "✅ Included", them: "❌ Requires +$49/mo Sermon Studio", usWins: true },
  { category: "Pricing", feature: "Pricing transparency", us: "✅ All-in plans", them: "⚠️ Addons stack (Studio +$49, Design +$15)", usWins: true },

  // Video quality
  { category: "Video", feature: "AI clip identification", us: "✅", them: "✅", usWins: null },
  { category: "Video", feature: "Auto-captions / subtitles", us: "✅", them: "✅", usWins: null },
  { category: "Video", feature: "Speaker tracking / auto-crop", us: "✅", them: "✅", usWins: null },
  { category: "Video", feature: "B-roll insertion", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Motion graphics / lower thirds", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Color grading", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Cinematic zoom / reframing", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Background music", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Translation / dubbing (30+ languages)", us: "✅", them: "❌", usWins: true },
  { category: "Video", feature: "Vertical 9:16 + square + horizontal", us: "✅", them: "✅", usWins: null },

  // Publishing
  { category: "Publishing", feature: "Direct publish to Instagram / Facebook / YouTube / TikTok", us: "✅", them: "✅", usWins: null },
  { category: "Publishing", feature: "Social post scheduling", us: "✅", them: "✅", usWins: null },
  { category: "Publishing", feature: "Planning Center Online integration", us: "❌", them: "✅", usWins: false },
  { category: "Publishing", feature: "Analytics / post performance", us: "⚠️ Coming", them: "✅", usWins: false },

  // Content
  { category: "Content", feature: "Blog post from sermon", us: "⚠️ Coming", them: "✅ (Sermon Studio)", usWins: false },
  { category: "Content", feature: "Devotional from sermon", us: "⚠️ Coming", them: "✅ (Sermon Studio)", usWins: false },
  { category: "Content", feature: "Email recap from sermon", us: "⚠️ Coming", them: "✅ (Sermon Studio)", usWins: false },
  { category: "Content", feature: "AI graphics / design studio", us: "⚠️ Coming", them: "✅ (+$15/mo Design Studio)", usWins: false },
  { category: "Content", feature: "Social caption AI writer", us: "✅", them: "✅", usWins: null },

  // Team
  { category: "Team", feature: "Multi-user / team collaboration", us: "✅", them: "✅", usWins: null },
  { category: "Team", feature: "Volunteer access", us: "✅", them: "✅", usWins: null },
];

const CATEGORIES = ["Pricing", "Video", "Publishing", "Content", "Team"];

export default function ChurchSocialAlternativePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
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
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/5 text-[#5c5c5c] text-sm font-medium mb-6">
            Honest Comparison · Updated February 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Clips vs ChurchSocial.ai
          </h1>
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            ChurchSocial (formerly Discipls) is a capable tool. But most churches comparing the two are focused on one question: <strong className="text-[#2D2D2D]">what do I actually pay to get great video clips?</strong> Here's the real answer.
          </p>

          {/* The headline number */}
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-[#5c5c5c] mb-2">ChurchSocial (clips included)</div>
                <div className="text-4xl font-bold text-[#2D2D2D]">~$78–99</div>
                <div className="text-sm text-[#5c5c5c] mt-1">/month</div>
                <div className="text-xs text-[#9ca3af] mt-2">Base plan + $49/mo Sermon Studio addon</div>
              </div>
              <div className="text-center border-l border-[#F5F1EB]">
                <div className="text-sm text-[#E8725A] mb-2 font-medium">Sermon Clips (clips included)</div>
                <div className="text-4xl font-bold text-[#E8725A]">$29</div>
                <div className="text-sm text-[#5c5c5c] mt-1">/month</div>
                <div className="text-xs text-[#9ca3af] mt-2">Everything included. No addons required.</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#9ca3af]">
            ChurchSocial's base plan does <em>not</em> include video clips. Clips require adding their Sermon Studio addon at +$49/mo on top of the base subscription.
          </p>
        </div>
      </section>

      {/* Who wins where — honest summary */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">Who wins where (honest)</h2>
          <p className="text-[#5c5c5c] text-center mb-10 max-w-xl mx-auto">
            Neither tool is best at everything. Here's where each genuinely shines.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E8725A]/5 border border-[#E8725A]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-4">
                <span className="text-[#E8725A]">Sermon Clips</span> is better for…
              </h3>
              <ul className="space-y-3">
                {[
                  "Churches where clips & video quality are the priority",
                  "Budgets under $60/mo (we're 40–70% cheaper for clips)",
                  "Multilingual congregations (30+ language translation)",
                  "Churches that want B-roll, motion graphics, color grading",
                  "Getting started free (1 sermon, no card required)",
                  "Simple pricing — one plan, no addon math",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#5c5c5c] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F1EB] rounded-2xl p-6">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-4">
                ChurchSocial is better for…
              </h3>
              <ul className="space-y-3">
                {[
                  "Churches already using Planning Center Online (PCO integration)",
                  "Teams that want social scheduling + clips in one dashboard",
                  "Churches that need AI-generated blog posts and devotionals today",
                  "Communications teams managing multiple social accounts and team members",
                  "Churches that want AI graphics without a separate tool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#5c5c5c] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2D2D2D] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The addon pricing problem */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 text-center">
            The addon pricing problem
          </h2>
          <p className="text-[#5c5c5c] text-center mb-10 max-w-2xl mx-auto">
            ChurchSocial's base plan is a social media scheduler. Video clips, design tools, and text content are sold separately. By the time you add what most churches actually need, the cost adds up fast.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="font-bold text-[#2D2D2D] mb-6">ChurchSocial: what you're actually buying</h3>
            <div className="space-y-4">
              {[
                { item: "Base plan (Solo)", cost: "~$29–49/mo", included: "Scheduler, captions, PCO integration — no clips" },
                { item: "+ Sermon Studio addon", cost: "+$49/mo", included: "AI clips, text content (blogs, devotionals)" },
                { item: "+ Design Studio addon", cost: "+$15/mo", included: "Graphics templates, AI image generation" },
                { item: "Total (clips + design)", cost: "~$93–113/mo", included: "Everything a full-stack comms team needs", highlight: true },
              ].map((row) => (
                <div key={row.item} className={`flex items-center justify-between p-4 rounded-xl ${row.highlight ? "bg-[#2D2D2D] text-white" : "bg-[#F5F1EB]"}`}>
                  <div>
                    <div className={`font-medium ${row.highlight ? "text-white" : "text-[#2D2D2D]"}`}>{row.item}</div>
                    <div className={`text-sm ${row.highlight ? "text-[#9ca3af]" : "text-[#5c5c5c]"}`}>{row.included}</div>
                  </div>
                  <div className={`font-bold text-lg ${row.highlight ? "text-[#E8725A]" : "text-[#2D2D2D]"}`}>{row.cost}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-[#2D2D2D] mb-6">Sermon Clips: what you're actually buying</h3>
            <div className="space-y-4">
              {[
                { item: "Starter", cost: "$29/mo", included: "Clips, captions, B-roll, motion graphics, color — everything" },
                { item: "Growth", cost: "$59/mo", included: "Everything in Starter + 30+ language translation + more sermons" },
                { item: "Auto-Pilot", cost: "$149/mo", included: "Everything + automated publishing + priority processing", highlight: true },
              ].map((row) => (
                <div key={row.item} className={`flex items-center justify-between p-4 rounded-xl ${row.highlight ? "bg-[#E8725A] text-white" : "bg-[#F5F1EB]"}`}>
                  <div>
                    <div className={`font-medium ${row.highlight ? "text-white" : "text-[#2D2D2D]"}`}>{row.item}</div>
                    <div className={`text-sm ${row.highlight ? "text-white/80" : "text-[#5c5c5c]"}`}>{row.included}</div>
                  </div>
                  <div className={`font-bold text-lg ${row.highlight ? "text-white" : "text-[#2D2D2D]"}`}>{row.cost}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#9ca3af] mt-4">No addons. No stacking. One price, everything included.</p>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">Full feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-4 font-semibold w-1/2">Feature</th>
                  <th className="text-center p-4 font-semibold text-[#E8725A]">Sermon Clips</th>
                  <th className="text-center p-4 font-semibold text-[#9ca3af]">ChurchSocial</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat) => {
                  const rows = COMPARISON_ROWS.filter((r) => r.category === cat);
                  return (
                    <>
                      <tr key={`cat-${cat}`} className="bg-[#F5F1EB]">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-[#5c5c5c] uppercase tracking-wider">{cat}</td>
                      </tr>
                      {rows.map((row, i) => (
                        <tr key={`${cat}-${i}`} className="border-b border-[#F5F1EB] hover:bg-[#F5F1EB]/40 bg-white">
                          <td className="p-4 text-[#2D2D2D] text-sm">
                            {row.feature}
                            {row.note && <div className="text-xs text-[#9ca3af] mt-0.5">{row.note}</div>}
                          </td>
                          <td className="p-4 text-center">
                            <span className={`text-sm font-medium ${row.usWins === true ? "text-[#E8725A]" : row.usWins === false ? "text-[#5c5c5c]" : "text-[#5c5c5c]"}`}>
                              {row.us}
                            </span>
                          </td>
                          <td className="p-4 text-center text-sm text-[#5c5c5c]">{row.them}</td>
                        </tr>
                      ))}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#9ca3af] mt-4 text-center">
            Pricing and features verified February 2026. ChurchSocial base plan price estimated at $29–49/mo (not publicly listed without signup).
          </p>
        </div>
      </section>

      {/* What we're honest about */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2D2D2D] text-white rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
              <h2 className="text-2xl font-bold">What we're honest about</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#E8725A] mb-3">ChurchSocial has things we don't (yet)</h3>
                <ul className="space-y-2 text-[#9ca3af] text-sm">
                  <li>• <strong className="text-white">Planning Center Online integration</strong> — big moat for PCO churches. If your whole workflow lives in PCO, ChurchSocial fits naturally.</li>
                  <li>• <strong className="text-white">AI blog posts + devotionals today</strong> — we have these on our roadmap; they ship now. If text content is your immediate need, they have an edge.</li>
                  <li>• <strong className="text-white">Social analytics</strong> — post performance tracking. Our analytics UI exists but isn't live-data yet.</li>
                  <li>• <strong className="text-white">AI design studio</strong> — quote cards, event graphics. We're working on this; their Design Studio addon covers it today.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#E8725A] mb-3">Where we're genuinely stronger</h3>
                <ul className="space-y-2 text-[#9ca3af] text-sm">
                  <li>• <strong className="text-white">Video quality</strong> — B-roll, motion graphics, color grading, cinematic zoom. ChurchSocial does clips; we do production-level clips.</li>
                  <li>• <strong className="text-white">30+ language translation</strong> — they don't do this at all. If your church has Spanish, Korean, or any other-language community, it's not a comparison.</li>
                  <li>• <strong className="text-white">Pricing</strong> — $29 all-in vs $78–99 with addons for comparable features. 40–70% less.</li>
                  <li>• <strong className="text-white">Free tier</strong> — try with one full sermon before paying anything.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Does ChurchSocial's base plan include video clips?",
                a: "No. ChurchSocial's base plan is a social media scheduler with AI captions and Planning Center integration. Video clips require adding their Sermon Studio addon at +$49/mo on top of the base subscription. So the minimum to get clips through ChurchSocial is their base plan fee plus $49."
              },
              {
                q: "What's the real price difference for a church that just wants clips?",
                a: "Sermon Clips Starter is $29/mo with clips fully included. ChurchSocial's equivalent (base + Sermon Studio addon) runs approximately $78–99/mo. That's 2.5–3× more for the same core clips capability — with ChurchSocial having better text content tools (blog posts, devotionals) and us having better video production quality and translation."
              },
              {
                q: "We use Planning Center Online. Should we go with ChurchSocial?",
                a: "Planning Center integration is ChurchSocial's strongest differentiator. If your content calendar and team workflow lives in PCO and seamless sync matters more than video quality, ChurchSocial fits naturally. We don't have PCO integration today. If clips + translation quality + pricing matter more, choose us."
              },
              {
                q: "Does Sermon Clips have social post scheduling?",
                a: "Yes — we publish directly to Instagram, Facebook, YouTube, and TikTok. Auto-publish on your clip schedule is included. ChurchSocial additionally has a visual content calendar and broader social management features beyond clip publishing."
              },
              {
                q: "Can I switch from ChurchSocial to Sermon Clips easily?",
                a: "Yes. There's no proprietary format lock-in. Your sermon video files stay yours. Start a free Sermon Clips account, upload your first sermon, and evaluate the clip quality directly. Takes about 20 minutes."
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#F5F1EB] rounded-2xl p-6">
                <h3 className="font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-bold text-[#2D2D2D] mb-6 text-center">Other comparisons</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/alternatives/opus-clip" className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow group">
              <div className="font-medium text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-1">Sermon Clips vs OpusClip →</div>
              <div className="text-sm text-[#5c5c5c]">General AI clips tool vs church-built — features, pricing, and who each is for</div>
            </Link>
            <Link href="/alternatives/sermonshots" className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow group">
              <div className="font-medium text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-1">Sermon Clips vs SermonShots →</div>
              <div className="text-sm text-[#5c5c5c]">The clips-only comparison — pricing, content output, and video quality</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
            Switching takes one sermon
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
            Free plan. No credit card. Upload your first sermon and compare the clip quality yourself — takes about 20 minutes.
          </p>
          <Link
            href="/sign-up"
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-5 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2 text-xl"
          >
            Start Free
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-sm text-[#9ca3af] mt-4">1 sermon free · No card required · Cancel anytime</p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sermon Clips vs ChurchSocial.ai — Honest Comparison 2026",
              "description": "Side-by-side comparison of Sermon Clips vs ChurchSocial (formerly Discipls) — pricing, features, video quality, and who each tool is best for.",
              "url": "https://sermonclips.com/alternatives/churchsocial",
              "publisher": { "@type": "Organization", "name": "Sermon Clips", "url": "https://sermonclips.com" }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Does ChurchSocial's base plan include video clips?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. ChurchSocial's base plan is a social media scheduler. Video clips require adding their Sermon Studio addon at +$49/mo on top of the base subscription." }
                },
                {
                  "@type": "Question",
                  "name": "What is the real price difference between Sermon Clips and ChurchSocial?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Sermon Clips Starter is $29/mo with clips fully included. ChurchSocial's equivalent (base plan + Sermon Studio addon) runs approximately $78–99/mo — about 2.5–3× more." }
                },
                {
                  "@type": "Question",
                  "name": "Is Sermon Clips a good ChurchSocial alternative?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes for churches focused on video clip quality and pricing. Sermon Clips offers better video production (B-roll, motion graphics, color grading), 30+ language translation, and significantly lower pricing. ChurchSocial is better for churches using Planning Center Online or needing AI text content (blogs, devotionals) today." }
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
