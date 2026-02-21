import { CheckCircle2, ArrowRight, Clock, DollarSign, Globe, FileText, Scissors, Zap, Mic, Languages } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sermon Transcription for Churches | Sermon Clips",
  description: "Transcribe any sermon in minutes — not days. AI-powered sermon transcription that's 95%+ accurate, 10x cheaper than human services, and feeds directly into clips, captions, blog posts, and study guides.",
  keywords: "sermon transcription, ai sermon transcription, transcribe sermon, church sermon transcription, sermon to text, sermon transcription service, automated sermon transcription",
  openGraph: {
    title: "AI Sermon Transcription — Faster, Cheaper, and Clips-Ready",
    description: "95%+ accuracy. Minutes not days. One transcript that powers your clips, captions, blog posts, and study guides. Free to try.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is AI sermon transcription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With a decent microphone setup, AI sermon transcription achieves 95–98% accuracy. The biggest variable is audio quality — a lapel mic or headset in a treated room will outperform a podium mic in a reverberant sanctuary. Accuracy improves further when the AI is trained on spoken-word theological content, as Sermon Clips is."
      }
    },
    {
      "@type": "Question",
      "name": "How long does AI sermon transcription take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 45-minute sermon is transcribed in approximately 3–5 minutes. Human transcription services typically return results in 24–48 hours. AI transcription is available immediately after upload."
      }
    },
    {
      "@type": "Question",
      "name": "What languages does Sermon Clips transcription support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sermon Clips supports transcription and caption translation in 30+ languages, including Spanish, French, Portuguese, Korean, Mandarin, Japanese, Arabic, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How much does sermon transcription cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sermon Clips plans start at $29/month for up to 4 sermons — that's $7.25 per sermon including transcription, clip generation, captions, and publishing. Human transcription services like Rev charge $1.50–$2.00 per minute, putting a 45-minute sermon at $67–$90 just for the transcript."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the transcript to create blog posts and study guides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sermon Clips generates a full transcript that you can export and use to create blog posts, email newsletters, discussion guides, quote cards, and study materials. The transcript is also used to automatically generate captions for every clip."
      }
    }
  ]
};

const humanVsAi = [
  { feature: "45-min sermon turnaround", human: "24–48 hours", ai: "3–5 minutes" },
  { feature: "Cost per sermon", human: "$67–$90 (Rev @ $1.50/min)", ai: "$7.25 (Starter plan)" },
  { feature: "Accuracy (good audio)", human: "99%+", ai: "95–98%" },
  { feature: "Clip generation", human: "❌ Separate tool needed", ai: "✅ Included" },
  { feature: "Auto-captions for clips", human: "❌ Separate tool needed", ai: "✅ Included" },
  { feature: "30+ language translation", human: "❌ Extra cost", ai: "✅ Included" },
  { feature: "Blog post generation", human: "❌ Manual repurposing", ai: "✅ From transcript" },
  { feature: "Available at 6 AM Monday", human: "❌ Business hours", ai: "✅ Always on" },
];

const useCases = [
  {
    icon: <Scissors className="w-6 h-6 text-[#E8725A]" />,
    title: "Sermon clips",
    body: "The transcript drives clip detection. Our AI reads the full text, identifies the highest-value moments, and cuts them — no manual scrubbing required.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#E8725A]" />,
    title: "Blog posts",
    body: "Export the transcript and turn it into a 600–1,200 word blog post in minutes. Your sermon is already structured — intro, points, conclusion. The blog post writes itself.",
  },
  {
    icon: <Mic className="w-6 h-6 text-[#E8725A]" />,
    title: "Captions for every clip",
    body: "Every clip we generate comes with time-synced captions pulled directly from the transcript. 85% of short-form video is watched muted — captions are the message.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#E8725A]" />,
    title: "Discussion & study guides",
    body: "The transcript gives you a full record of what was said, including the scripture references, illustrations, and discussion questions your pastor included. Feed it into a study guide with one click.",
  },
  {
    icon: <Languages className="w-6 h-6 text-[#E8725A]" />,
    title: "Multilingual content",
    body: "Translate the transcript into 30+ languages and generate captions for your Spanish, Korean, Mandarin, or Portuguese-speaking congregation members — automatically.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#E8725A]" />,
    title: "SEO & sermon archive",
    body: "A searchable transcript archive makes your sermon library discoverable by search engines. Someone Googling 'sermon on grief' or 'what does the Bible say about anxiety' can find your church.",
  },
];

export default function SermonTranscriptionPage() {
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
          <div className="flex items-center gap-4">
            <Link href="/blog/ai-sermon-transcription-guide" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] hidden md:block">
              Transcription Guide
            </Link>
            <Link href="/sign-up" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
              Try Free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            AI Sermon Transcription
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon transcription in{" "}
            <span className="text-[#E8725A]">minutes, not days</span>
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-4 max-w-2xl mx-auto">
            Human transcription services charge $67–$90 per sermon and take 48 hours. AI transcription is 95%+ accurate, available in 3–5 minutes, and comes bundled with clips, captions, and 30-language translation.
          </p>

          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            One upload. Full transcript + 5 ready-to-post clips. Free to start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/sign-up"
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2"
            >
              Transcribe Your First Sermon Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog/ai-sermon-transcription-guide"
              className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
            >
              Read the Guide
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { stat: "3–5 min", label: "per 45-min sermon" },
              { stat: "95%+", label: "accuracy" },
              { stat: "30+", label: "languages" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 border border-[#2D2D2D]/10">
                <p className="text-2xl font-bold text-[#E8725A]">{item.stat}</p>
                <p className="text-xs text-[#5c5c5c]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Human transcription is expensive, slow, and a dead end
          </h2>
          <p className="text-center text-[#5c5c5c] mb-14 max-w-2xl mx-auto">
            You pay $67–$90, wait two days, and get a Word doc. That&apos;s it. You still have to manually pull clips, add captions, create a blog post, and build study materials — all separately.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left p-4 rounded-tl-2xl">What you need</th>
                  <th className="text-left p-4">Human Service (Rev, Scribie)</th>
                  <th className="text-left p-4 rounded-tr-2xl">
                    <span className="text-[#E8725A]">Sermon Clips AI</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {humanVsAi.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F1EB]/60"}>
                    <td className="p-4 font-medium text-[#2D2D2D]">{row.feature}</td>
                    <td className="p-4 text-[#5c5c5c]">{row.human}</td>
                    <td className="p-4 font-medium text-[#E8725A]">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What you get from one transcript */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            One transcript. Six types of content.
          </h2>
          <p className="text-center text-[#5c5c5c] mb-14 max-w-2xl mx-auto">
            Human transcription gives you a document. Sermon Clips gives you a full content pipeline.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10">
                <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-14">
            How it works
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Upload your sermon",
                body: "Drop in an MP4, MOV, or audio file — or paste a YouTube/Vimeo link. We accept any format your camera or streaming platform produces.",
              },
              {
                step: "02",
                title: "AI transcribes in 3–5 minutes",
                body: "Our transcription engine processes your sermon and returns a time-coded, speaker-labeled transcript. 95%+ accuracy with a standard microphone setup.",
              },
              {
                step: "03",
                title: "Review and edit",
                body: "The transcript is fully editable. Correct any names, scripture references, or technical terms the AI might have misheard. Most churches need fewer than 5 corrections per sermon.",
              },
              {
                step: "04",
                title: "AI generates clips, captions, and content",
                body: "From the transcript, Sermon Clips automatically identifies your top 5–10 clip moments, generates time-synced captions for each, and prepares the transcript for export to blog posts and study guides.",
              },
              {
                step: "05",
                title: "Download, publish, or do both",
                body: "Download the transcript as a PDF or Word doc. Publish clips directly to Instagram, TikTok, YouTube Shorts, and Facebook. Or export everything and use it however your team needs.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 text-[#E8725A] flex items-center justify-center shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-1">{item.title}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            Accuracy: what to expect
          </h2>
          <p className="text-center text-[#5c5c5c] mb-14 max-w-2xl mx-auto">
            AI transcription accuracy is driven primarily by audio quality. Here&apos;s what to expect across common church setups.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                setup: "Lapel mic / headset",
                accuracy: "97–99%",
                rating: "Excellent",
                color: "text-green-600",
                note: "Direct-to-mouth pickup eliminates room noise. Best setup for sermon transcription.",
              },
              {
                setup: "Podium / gooseneck mic",
                accuracy: "93–97%",
                rating: "Very Good",
                color: "text-blue-600",
                note: "Good clarity if the pastor stays near the mic. Accuracy drops if they move around.",
              },
              {
                setup: "Room / overhead mics",
                accuracy: "85–93%",
                rating: "Good",
                color: "text-yellow-600",
                note: "Works well in acoustically treated rooms. Reverberant sanctuaries reduce accuracy.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#2D2D2D]/10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#2D2D2D]">{item.setup}</h3>
                  <span className={`text-sm font-semibold ${item.color}`}>{item.rating}</span>
                </div>
                <p className="text-3xl font-bold text-[#2D2D2D] mb-3">{item.accuracy}</p>
                <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#5c5c5c] mt-8 text-sm">
            Even at 85% accuracy, AI transcription is faster and cheaper to correct than waiting 48 hours for a human service. Most churches report fewer than 5 corrections per sermon at standard accuracy levels.
          </p>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-12 h-12 text-[#E8725A] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transcribe your first sermon free
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            No credit card required. Upload any sermon — we&apos;ll return a full transcript and 3 ready-to-post clips, free.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
            {[
              {
                plan: "Free",
                price: "$0",
                features: ["1 sermon", "Full transcript", "3 clips", "Auto-captions"],
              },
              {
                plan: "Starter",
                price: "$29/mo",
                features: ["4 sermons/mo", "Full transcripts", "Unlimited clips", "30+ languages"],
                highlight: true,
              },
              {
                plan: "Growth",
                price: "$59/mo",
                features: ["12 sermons/mo", "Everything in Starter", "Multi-platform publish", "Priority processing"],
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${
                  p.highlight
                    ? "border-[#E8725A] bg-[#E8725A]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{p.plan}</p>
                <p className="text-white font-bold text-2xl mb-3">{p.price}</p>
                <ul className="space-y-1">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-[#E8725A] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 text-lg"
          >
            Start Free — No Card Required
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2D2D] text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How accurate is AI sermon transcription?",
                a: "With a standard lapel mic or headset, 97–99%. With a podium or gooseneck mic, 93–97%. With room/overhead mics, 85–93%. Audio quality is the biggest factor. Even at 85%, most churches report fewer than 5 corrections per sermon.",
              },
              {
                q: "How long does transcription take?",
                a: "A 45-minute sermon is transcribed in approximately 3–5 minutes. Compare to 24–48 hours for human transcription services.",
              },
              {
                q: "How much does it cost compared to Rev or Scribie?",
                a: "Rev charges $1.50/minute — a 45-minute sermon costs $67.50. Scribie charges $0.80/minute — still $36. Sermon Clips Starter is $29/month for 4 sermons ($7.25/sermon), and that includes clip generation, captions, and multi-language translation.",
              },
              {
                q: "What languages are supported?",
                a: "Transcription is optimized for English, Spanish, French, Portuguese, Korean, Mandarin, Japanese, Arabic, and Hindi, with support for 30+ languages total for caption translation.",
              },
              {
                q: "Can I use the transcript to make blog posts and study guides?",
                a: "Yes. Export the transcript and use it as a foundation for blog posts, email newsletters, discussion guides, quote cards, and sermon archives. The transcript is yours — no restrictions on how you use it.",
              },
              {
                q: "What if I'm not happy with the transcription accuracy?",
                a: "Every transcript is fully editable in our dashboard. Correct any errors inline before approving clips. You control the final output.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#2D2D2D]/10 pb-6">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-6 lg:px-8 bg-[#F5F1EB] border-t border-[#2D2D2D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#2D2D2D] uppercase tracking-wider mb-4">Related resources</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/blog/ai-sermon-transcription-guide", label: "Complete Transcription Guide →" },
              { href: "/blog/sermon-shorts-complete-guide", label: "Sermon Shorts Guide →" },
              { href: "/alternatives/opus-clip", label: "Opus Clip Alternative →" },
              { href: "/#pricing", label: "View Pricing →" },
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
            <Link href="/blog" className="hover:text-[#2D2D2D] transition-colors">Blog</Link>
            <Link href="/#pricing" className="hover:text-[#2D2D2D] transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-[#2D2D2D] transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
