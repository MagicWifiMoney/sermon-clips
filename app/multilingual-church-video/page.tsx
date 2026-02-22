import { CheckCircle2, ArrowRight, Globe, Languages, Users, Zap, Play, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Multilingual Church Video: Sermon Clips in 30+ Languages | Sermon Clips",
  description: "Reach your entire congregation — English, Spanish, Korean, Mandarin, Portuguese, and 25+ more languages. One sermon upload. AI-translated clips ready for every platform.",
  keywords: "multilingual church video, church video in spanish, translate sermon to spanish, sermon clips spanish, church spanish video, multilingual ministry, church translation social media, bilingual church content",
};

const LANGUAGES = [
  { name: "Spanish", flag: "🇪🇸", stat: "41M Hispanic Americans attend church" },
  { name: "Korean", flag: "🇰🇷", stat: "3,700+ Korean churches in the US" },
  { name: "Mandarin", flag: "🇨🇳", stat: "Fastest-growing diaspora church community" },
  { name: "Portuguese", flag: "🇧🇷", stat: "1M+ Brazilian Christians in the US" },
  { name: "Tagalog", flag: "🇵🇭", stat: "4M+ Filipino Americans" },
  { name: "French", flag: "🇫🇷", stat: "Haitian, West African congregations" },
  { name: "Arabic", flag: "🇸🇦", stat: "Arab Christian diaspora communities" },
  { name: "Hindi", flag: "🇮🇳", stat: "South Asian Christian communities" },
];

const ALL_LANGUAGES = [
  "Spanish", "French", "Portuguese", "German", "Italian",
  "Korean", "Japanese", "Mandarin Chinese", "Cantonese", "Vietnamese",
  "Tagalog", "Hindi", "Arabic", "Swahili", "Haitian Creole",
  "Polish", "Romanian", "Russian", "Ukrainian", "Dutch",
  "Turkish", "Indonesian", "Thai", "Hebrew", "Amharic",
  "Yoruba", "Igbo", "Twi", "Somali", "Nepali",
];

export default function MultilingualChurchVideoPage() {
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
          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            Start Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Multilingual Church Video
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            One sermon.<br />
            <span className="text-[#E8725A]">Every language your church speaks.</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-2xl mx-auto">
            Upload Sunday's sermon once. Get AI-translated clips in Spanish, Korean, Mandarin, Portuguese — and 26 more languages — formatted and captioned for every social platform.
          </p>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            No bilingual staff. No separate workflow. No extra budget. Just one upload.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2 text-lg">
              Start Free — No Card Required
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/#how-it-works" className="border-2 border-[#2D2D2D] text-[#2D2D2D] px-8 py-4 rounded-full font-medium hover:bg-[#2D2D2D] hover:text-white transition-all text-lg inline-flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              See How It Works
            </Link>
          </div>

          {/* Language flags strip */}
          <div className="flex flex-wrap justify-center gap-3 text-2xl">
            {["🇪🇸", "🇰🇷", "🇨🇳", "🇧🇷", "🇵🇭", "🇫🇷", "🇩🇪", "🇮🇳", "🇸🇦", "🇯🇵", "🇻🇳", "🇺🇦", "🇳🇬", "🇰🇪", "🇮🇩"].map((flag, i) => (
              <span key={i} className="text-3xl">{flag}</span>
            ))}
            <span className="text-lg text-[#5c5c5c] self-center ml-1">+ 15 more</span>
          </div>
        </div>
      </section>

      {/* The reality section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            30% of US churches serve non-English-speaking communities
          </h2>
          <p className="text-lg text-[#5c5c5c] text-center mb-12 max-w-2xl mx-auto">
            But most churches produce English-only content — leaving millions of people in their own congregation unreached on social media.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4 bg-[#F5F1EB] rounded-xl p-4">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <div className="font-bold text-[#2D2D2D]">{lang.name}</div>
                  <div className="text-sm text-[#5c5c5c]">{lang.stat}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#2D2D2D] rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-medium mb-2">
              Your congregation is already bilingual.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              The Spanish-speaking family in row 4, the Korean grandparents who watch the stream, the Brazilian visitors who found you on Instagram — they're part of your community. They just can't share your content with their networks. Until now.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              How multilingual clips work
            </h2>
            <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
              This is post-production translation for social media — not a live service tool. Upload once after Sunday, get clips in every language by Monday.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                icon: <Play className="w-5 h-5 text-[#E8725A]" />,
                title: "Upload Sunday's sermon",
                desc: "Upload your video file or paste a YouTube/Vimeo link. Any format, any length. AI processes the full audio.",
              },
              {
                step: "2",
                icon: <Zap className="w-5 h-5 text-[#E8725A]" />,
                title: "AI finds the best moments — in any language",
                desc: "Our system identifies the 5–10 most shareable moments from the sermon: emotional peaks, key teaching points, memorable quotes. This works regardless of source language.",
              },
              {
                step: "3",
                icon: <Languages className="w-5 h-5 text-[#E8725A]" />,
                title: "Select your translation languages",
                desc: "Choose Spanish, Korean, Mandarin, Portuguese, or any of 30+ supported languages. Each clip gets accurate AI translation with styled captions burned in.",
              },
              {
                step: "4",
                icon: <TrendingUp className="w-5 h-5 text-[#E8725A]" />,
                title: "Clips delivered in platform-ready formats",
                desc: "9:16 for Reels/TikTok/Shorts, 16:9 for YouTube, 1:1 for Facebook — each language version formatted separately. Auto-publish or download.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-[#E8725A]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#E8725A] bg-[#E8725A]/10 px-2 py-0.5 rounded-full">Step {item.step}</span>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">{item.title}</h3>
                  </div>
                  <p className="text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vs live translation tools */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            Not a live translation tool. Something better for social.
          </h2>
          <p className="text-lg text-[#5c5c5c] text-center mb-12 max-w-2xl mx-auto">
            Tools like Wordly and OneAccord translate your service for in-person attendees in real time. That's a different use case. We handle what happens after Sunday — when your content needs to reach people who weren't in the room.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Live Tools<br /><span className="text-[#9ca3af] text-xs font-normal">(Wordly, OneAccord)</span></th>
                  <th className="text-center p-4 font-semibold text-[#E8725A]">Sermon Clips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1EB] bg-white">
                {[
                  ["Translates during live service", "✅", "—"],
                  ["Translates sermon clips for social media", "—", "✅"],
                  ["9:16 vertical video for Reels/TikTok", "—", "✅"],
                  ["Captioned clips with styled text", "—", "✅"],
                  ["Auto-selects best sermon moments", "—", "✅"],
                  ["Publishes directly to Instagram/Facebook/YouTube", "—", "✅"],
                  ["Works for recorded/uploaded video", "Limited", "✅"],
                  ["30+ languages supported", "✅", "✅"],
                  ["No hardware required", "✅", "✅"],
                  ["Reaches people who weren't in the building", "—", "✅"],
                ].map(([feature, live, ours], i) => (
                  <tr key={i} className="hover:bg-[#F5F1EB]/50">
                    <td className="p-4 text-[#2D2D2D]">{feature}</td>
                    <td className="p-4 text-center text-[#5c5c5c]">{live}</td>
                    <td className="p-4 text-center font-medium text-[#E8725A]">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use cases by congregation type */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4 text-center">
            Built for how real multilingual churches work
          </h2>
          <p className="text-lg text-[#5c5c5c] text-center mb-12 max-w-xl mx-auto">
            Every multilingual church situation is different. Here's how churches use it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "English-primary with Spanish members",
                flag: "🇺🇸🇪🇸",
                desc: "Your service is in English, but 30–40% of your congregation is Spanish-speaking. Upload Sunday's sermon, get Spanish-captioned clips by Monday. Spanish-speaking members can share with their networks — reaching people you never could with English-only content.",
                example: "\"Our Spanish clips get 3x the shares from our Latino members.\"",
              },
              {
                title: "Korean or Chinese diaspora church",
                flag: "🇰🇷🇨🇳",
                desc: "Your services are already in Korean or Mandarin, but you want to reach second-generation members who prefer English — or grow your presence with English-speaking visitors. Translate your clips to English and reach people who wouldn't watch the full Korean service.",
                example: "\"We finally have content our American-born kids can share.\"",
              },
              {
                title: "Multisite with diverse campuses",
                flag: "🌐",
                desc: "One campus is primarily English, another is primarily Spanish. One sermon upload, two sets of clips automatically. Both campuses post in the language their community speaks, with no extra coordination.",
                example: "\"Consistency across campuses without extra work.\"",
              },
              {
                title: "Missionary or international church",
                flag: "🌍",
                desc: "You minister to immigrants and refugees from multiple countries. Swahili, French, Arabic, Amharic — your congregation spans dozens of backgrounds. One sermon can reach all of them with clips in their heart language.",
                example: "\"Our refugee families share clips with their home countries.\"",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.flag}</div>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-3">{item.title}</h3>
                <p className="text-[#5c5c5c] leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-[#F5F1EB] rounded-xl p-3">
                  <p className="text-sm text-[#5c5c5c] italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 30+ languages */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">30+ languages supported</h2>
          <p className="text-lg text-[#5c5c5c] mb-10">
            If your congregation speaks it, we can translate your clips into it.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ALL_LANGUAGES.map((lang) => (
              <span key={lang} className="bg-[#F5F1EB] text-[#5c5c5c] px-3 py-1.5 rounded-full text-sm">
                {lang}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#5c5c5c]">
            Don't see your language? <Link href="/feedback" className="text-[#E8725A] hover:underline">Request it →</Link>
          </p>
        </div>
      </section>

      {/* Stats / impact */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-12 text-center">Why multilingual clips matter</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "85%", desc: "of social video is watched without sound — captions in the viewer's native language close the gap" },
              { stat: "30%", desc: "of US churches serve communities where English is not the primary home language" },
              { stat: "3×", desc: "higher share rate when content is in the viewer's native language, per social media research" },
            ].map((item) => (
              <div key={item.stat} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[#E8725A] mb-3">{item.stat}</div>
                <p className="text-[#5c5c5c] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E8725A]/5 border border-[#E8725A]/20 rounded-2xl p-8">
            <h3 className="font-bold text-[#2D2D2D] text-xl mb-4">The biggest unlock: your congregation becomes your distribution network</h3>
            <p className="text-[#5c5c5c] leading-relaxed mb-4">
              When your Spanish-speaking members get a clip in Spanish, they share it with their Spanish-speaking friends and family — who aren't yet part of your church. That organic reach is impossible if you only post in English.
            </p>
            <p className="text-[#5c5c5c] leading-relaxed">
              Every clip in a community's native language is a low-friction invitation. Not a translation — an <em>invitation</em>, in the language they feel at home in.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Translation is included — no add-on pricing</h2>
          <p className="text-lg text-[#5c5c5c] mb-12 max-w-xl mx-auto">
            Multilingual clips are part of the Growth plan and above. No per-language fees. No translation credits to manage.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$29/mo", langs: "English only", highlight: false },
              { name: "Growth", price: "$59/mo", langs: "30+ languages ✓", highlight: true },
              { name: "Auto-Pilot", price: "$149/mo", langs: "30+ languages ✓", highlight: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 ${plan.highlight ? "bg-[#E8725A] text-white" : "bg-[#F5F1EB]"}`}>
                <div className={`font-bold text-xl mb-2 ${plan.highlight ? "text-white" : "text-[#2D2D2D]"}`}>{plan.name}</div>
                <div className={`text-3xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-[#2D2D2D]"}`}>{plan.price}</div>
                <div className={`text-sm font-medium ${plan.highlight ? "text-white/90" : "text-[#5c5c5c]"}`}>{plan.langs}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5c5c5c] mt-6">
            <Link href="/#pricing" className="text-[#E8725A] hover:underline">See full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-10 text-center">Common questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "How accurate is the AI translation?",
                a: "Very good for sermon content — clear speech, standard theological vocabulary, minimal slang. For languages like Spanish, French, and Korean the accuracy is production-ready. For less common languages, we recommend a bilingual member do a quick review before posting.",
              },
              {
                q: "Can I translate a sermon that's already in Spanish or Korean to English?",
                a: "Yes. Translation works in both directions. Upload a sermon in any of the 30+ supported languages and translate it to any other language, including English.",
              },
              {
                q: "Does translation include AI voice dubbing or just subtitles?",
                a: "Currently, translation produces accurately translated caption overlays (subtitles burned into the video). AI voice dubbing in the pastor's voice is on our roadmap. Subtitles are the industry standard for social media clips — most platforms play with captions, not audio.",
              },
              {
                q: "What if my sermon has code-switching (mixing English and Spanish)?",
                a: "The AI handles code-switching well. It detects the primary language and translates accordingly, handling natural bilingual speech patterns common in many Latino and diaspora churches.",
              },
              {
                q: "Do I need separate accounts for English vs Spanish content?",
                a: "No. One Sermon Clips account handles all languages. You manage English and Spanish clip sets from the same dashboard and publish to whichever social accounts you choose for each language.",
              },
              {
                q: "How is this different from just turning on YouTube auto-translate?",
                a: "YouTube auto-translate is notoriously bad for sermon content — theological terms, names, and spiritual concepts translate poorly. We also add styled caption overlays, reformat for vertical video, and identify the most shareable moments first. YouTube auto-translate is raw; this is production-ready.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-bold text-[#2D2D2D] mb-6 text-center">Related guides</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/sermon-transcription" className="bg-[#F5F1EB] rounded-xl p-4 hover:bg-[#E8725A]/5 transition-colors group">
              <div className="font-medium text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-1">AI Sermon Transcription</div>
              <div className="text-sm text-[#5c5c5c]">Auto-transcript in any language, ready for captions and search</div>
            </Link>
            <Link href="/blog/church-video-strategy-2026" className="bg-[#F5F1EB] rounded-xl p-4 hover:bg-[#E8725A]/5 transition-colors group">
              <div className="font-medium text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-1">Church Video Strategy 2026</div>
              <div className="text-sm text-[#5c5c5c]">What Barna's new data says about reaching your community</div>
            </Link>
            <Link href="/easter-2026" className="bg-[#F5F1EB] rounded-xl p-4 hover:bg-[#E8725A]/5 transition-colors group">
              <div className="font-medium text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors mb-1">Easter 2026 Content Plan</div>
              <div className="text-sm text-[#5c5c5c]">6-week calendar — multilingual Easter clips included</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
            Every language. One upload. This Sunday.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
            Start free — no credit card required. Upload your first sermon and see multilingual clips in action.
          </p>
          <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-5 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2 text-xl">
            Start Free
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-sm text-[#9ca3af] mt-4">Free plan · No card required · English + 30+ languages on Growth plan</p>
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
              "name": "Multilingual Church Video: Sermon Clips in 30+ Languages",
              "description": "AI-translated sermon clips in Spanish, Korean, Mandarin, Portuguese and 27 more languages. One upload, every platform.",
              "url": "https://sermonclips.com/multilingual-church-video",
              "publisher": { "@type": "Organization", "name": "Sermon Clips", "url": "https://sermonclips.com" }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How accurate is the AI translation for sermon clips?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Very good for sermon content — clear speech, standard theological vocabulary. For Spanish, French, and Korean the accuracy is production-ready. For less common languages, a quick review by a bilingual member is recommended." }
                },
                {
                  "@type": "Question",
                  "name": "Can I translate a sermon in Spanish or Korean to English?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. Translation works in both directions. Upload a sermon in any supported language and translate to any other language, including English." }
                },
                {
                  "@type": "Question",
                  "name": "How is this different from YouTube auto-translate?",
                  "acceptedAnswer": { "@type": "Answer", "text": "YouTube auto-translate is notoriously inaccurate for theological content. Sermon Clips adds styled caption overlays, reformats for vertical video, and identifies the most shareable moments first. Production-ready vs raw auto-captions." }
                },
                {
                  "@type": "Question",
                  "name": "What languages does Sermon Clips support?",
                  "acceptedAnswer": { "@type": "Answer", "text": "30+ languages including Spanish, French, Portuguese, German, Korean, Japanese, Mandarin, Cantonese, Vietnamese, Tagalog, Hindi, Arabic, Swahili, Haitian Creole, and more." }
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
