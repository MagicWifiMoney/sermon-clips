import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, FileText, Mic, Globe, Zap, Target, BookOpen, Share2, TrendingUp, AlertCircle, Lightbulb, Play } from 'lucide-react';

export const metadata = {
  title: 'AI Sermon Transcription: The Complete Guide for Churches (2026)',
  description: 'How to use AI to automatically transcribe sermons, generate captions, and turn your message into weeks of content. Step-by-step guide for church media teams.',
  keywords: 'sermon transcription, AI sermon transcription, transcribe sermon, church video captions, sermon to text, automatic sermon transcript',
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
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            AI Sermon Transcription: The Complete Guide for Churches (2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Your pastor pours 10–15 hours into every sermon. The words disappear the moment the service ends. AI sermon transcription changes that—turning every message into searchable text, auto-generated captions, social media clips, and shareable content. Here's everything your church needs to know.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#what-is" className="hover:text-[#E8725A] transition-colors">What Is AI Sermon Transcription?</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#why-it-matters" className="hover:text-[#E8725A] transition-colors">Why Every Church Needs a Transcript</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#how-it-works" className="hover:text-[#E8725A] transition-colors">How AI Transcription Works</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#accuracy" className="hover:text-[#E8725A] transition-colors">Accuracy: What to Expect</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#use-cases" className="hover:text-[#E8725A] transition-colors">10 Ways to Use Your Sermon Transcript</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#captions" className="hover:text-[#E8725A] transition-colors">Transcription + Captions = More Reach</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#translation" className="hover:text-[#E8725A] transition-colors">Translation: Reach a Multilingual Community</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#getting-started" className="hover:text-[#E8725A] transition-colors">How to Get Started Today</a></li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8725A] flex-shrink-0" /><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-16">

            {/* Section 1 */}
            <section id="what-is">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Mic className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                What Is AI Sermon Transcription?
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                AI sermon transcription is the automatic conversion of spoken sermon audio or video into written text—using artificial intelligence instead of a person typing it out. What used to take a skilled typist 3–4 hours now takes a machine less than 5 minutes.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Modern AI transcription models are trained on millions of hours of audio. They recognize church-specific vocabulary—Scripture references, theological terms, pastor names, congregation sounds—and handle it with impressive accuracy.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                The output is more than just text. A good AI transcription system produces word-level timestamps (so you can search by what was said <em>and</em> when), speaker identification, and export formats ready for captions, blog posts, or sermon clips.
              </p>
            </section>

            {/* Section 2 */}
            <section id="why-it-matters">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Why Every Church Needs a Sermon Transcript
              </h2>

              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-2xl p-6 mb-8">
                <p className="text-[#2D2D2D] font-semibold text-lg mb-2">📊 The Numbers Don't Lie</p>
                <ul className="space-y-2 text-[#5c5c5c]">
                  <li>• 85% of Facebook video is watched without sound — captions are non-negotiable</li>
                  <li>• Videos with captions get 40% more views on average</li>
                  <li>• 73% of new visitors discover churches through online video content</li>
                  <li>• Churches that post weekly sermon clips grow their online reach 3× faster</li>
                </ul>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                A sermon transcript is the foundation of your entire content strategy. Once you have the text, you can generate captions for social clips, write a blog summary for SEO, pull quotes for Instagram graphics, draft the weekly email newsletter, and create study guide questions—all from one source of truth.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed">
                Without a transcript, every piece of content requires someone to rewatch the video or rely on memory. With one, your media team can work faster and smarter. It's the difference between a church that posts once a week and one that shows up daily across every platform.
              </p>
            </section>

            {/* Section 3 */}
            <section id="how-it-works">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                How AI Transcription Works
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                You don't need to understand the technology to use it—but knowing the basics helps you get better results.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Audio Extraction',
                    desc: 'The AI separates the audio track from your sermon video. Background music, congregation sounds, and ambient noise are identified and reduced.',
                  },
                  {
                    step: '2',
                    title: 'Speech Recognition',
                    desc: 'A large language model converts speech to text in real time. Current models handle accents, regional dialects, and speaking styles with 95%+ accuracy on clear recordings.',
                  },
                  {
                    step: '3',
                    title: 'Word-Level Timestamps',
                    desc: 'Every word is linked to its exact moment in the video. This is what makes AI-generated captions possible—and what lets the system automatically find clip-worthy moments.',
                  },
                  {
                    step: '4',
                    title: 'Speaker Detection',
                    desc: 'If multiple speakers are present (pastor, worship leader, guest), the AI labels each voice separately so the transcript stays organized.',
                  },
                  {
                    step: '5',
                    title: 'Content Export',
                    desc: 'You get the transcript as a document, SRT caption file, and structured data the AI uses to generate sermon clips.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A] text-white font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">{item.title}</p>
                      <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="accuracy">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Accuracy: What to Expect
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Accuracy depends on audio quality more than anything else. Here's a realistic breakdown:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Studio/lapel mic, quiet room', accuracy: '98–99%', color: 'text-green-600', bg: 'bg-green-50' },
                  { label: 'Podium mic, typical sanctuary', accuracy: '94–97%', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { label: 'Smartphone recording, crowd noise', accuracy: '85–92%', color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((item) => (
                  <div key={item.label} className={`${item.bg} rounded-xl p-5 text-center`}>
                    <p className={`text-3xl font-bold ${item.color} mb-2`}>{item.accuracy}</p>
                    <p className="text-sm text-[#5c5c5c]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#2D2D2D]/5 rounded-2xl p-6">
                <p className="font-semibold text-[#2D2D2D] mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#E8725A]" />
                  Pro Tips for Better Transcription Accuracy
                </p>
                <ul className="space-y-2 text-[#5c5c5c] text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />Use a lapel or headset mic on your pastor whenever possible</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />Record a separate clean audio feed from your soundboard (not just the camera)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />Avoid background music under speaking sections—it confuses the AI</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />Always do a quick proofread before publishing; Scripture references occasionally need correction</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="use-cases">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                10 Ways to Use Your Sermon Transcript
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Once you have a transcript, the real value unlocks. Here's how forward-thinking church media teams are using them:
              </p>

              <div className="space-y-4">
                {[
                  {
                    num: '01',
                    title: 'Auto-Generated Social Clips',
                    desc: 'The AI scans the transcript for high-engagement moments—emotional peaks, quotable lines, key teaching points—and automatically cuts clips with captions baked in. No manual editing needed.',
                  },
                  {
                    num: '02',
                    title: 'Captioned Video for Every Platform',
                    desc: 'Export your SRT caption file and attach it to your full sermon on YouTube, Facebook, and your church website. Accessibility plus reach.',
                  },
                  {
                    num: '03',
                    title: 'SEO-Optimized Blog Post',
                    desc: 'Turn the transcript into a blog post summary. Search engines can\'t index a video—but they can index text. Rank for the topics your pastor preached on.',
                  },
                  {
                    num: '04',
                    title: 'Weekly Email Newsletter',
                    desc: 'Pull the top 3 takeaways from the transcript and send them to your email list by Monday morning. Keeps your congregation engaged all week long.',
                  },
                  {
                    num: '05',
                    title: 'Sermon Archive & Search',
                    desc: 'Build a searchable library of every sermon your church has ever delivered. Congregants can search "anxiety" or "forgiveness" and find the exact moment it was addressed.',
                  },
                  {
                    num: '06',
                    title: 'Small Group Study Guide',
                    desc: 'Use the transcript as source material for AI-generated discussion questions and devotional prompts your small groups can use Monday through Saturday.',
                  },
                  {
                    num: '07',
                    title: 'Quote Graphics for Instagram',
                    desc: 'Pull powerful one-liners from the transcript and turn them into branded quote cards. One sermon typically yields 5–10 shareable quotes.',
                  },
                  {
                    num: '08',
                    title: 'Podcast Show Notes',
                    desc: 'If your church has a sermon podcast, the transcript becomes instant show notes with timestamps—boosting your podcast SEO and listener retention.',
                  },
                  {
                    num: '09',
                    title: 'Translations for Multilingual Congregations',
                    desc: 'Many AI systems can translate the transcript into Spanish, Mandarin, Portuguese, or 30+ other languages—enabling subtitled versions for your whole community.',
                  },
                  {
                    num: '10',
                    title: 'Sermon Review & Quality Improvement',
                    desc: 'Pastors can read their own transcripts and spot verbal tics, unclear explanations, or sections that needed more development. It\'s coaching without a camera crew.',
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-white rounded-xl p-6 shadow-sm flex gap-5">
                    <div className="text-3xl font-bold text-[#E8725A]/30 font-mono flex-shrink-0 leading-tight">{item.num}</div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-2">{item.title}</p>
                      <p className="text-[#5c5c5c] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="captions">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Transcription + Captions = More Reach
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                The single biggest impact of sermon transcription isn't the text document—it's what happens when that text becomes captions on your video clips.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Captions serve three audiences at once:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: '🔇', title: 'Silent scrollers', desc: 'The 85% watching without sound on Facebook, Instagram, and TikTok.' },
                  { icon: '♿', title: 'Deaf and hard-of-hearing viewers', desc: 'Making your message accessible is ministry, not just marketing.' },
                  { icon: '🌍', title: 'Non-native speakers', desc: 'People who understand English better when they can read along.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#2D2D2D]">{item.title}</p>
                      <p className="text-sm text-[#5c5c5c]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                Word-by-word animated captions—also called "kinetic captions"—have become the standard on TikTok and Reels. Viewers expect them. Without captions, your clip is invisible to the majority of your potential audience. With them, you become the church that speaks their language, literally.
              </p>
            </section>

            {/* Section 7 */}
            <section id="translation">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                Translation: Reach a Multilingual Community
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Once your sermon is transcribed, translation is just one more step. AI can convert your English transcript into 30+ languages in minutes—Spanish, French, Mandarin, Portuguese, Korean, Hindi, and more.
              </p>
              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-2xl p-6 mb-6">
                <p className="font-semibold text-[#2D2D2D] mb-3">Real-world impact:</p>
                <p className="text-[#5c5c5c] leading-relaxed">
                  A church in Houston with a growing Spanish-speaking congregation used AI translation to publish bilingual sermon clips every week. Within 3 months, their Spanish-language posts were outperforming their English clips in engagement—reaching a community they'd previously been unable to serve at scale.
                </p>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                You don't need a bilingual media team. You need AI that can take your transcript and do the work for you. This is what makes AI-powered church media fundamentally different from the old model of "hire a video editor."
              </p>
            </section>

            {/* Section 8 */}
            <section id="getting-started">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A] flex-shrink-0" />
                How to Get Started Today
              </h2>
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                You don't need a big budget or a technical background. Here's the path from zero to automated transcription in one Sunday:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    step: 'Step 1: Record this Sunday',
                    desc: 'Start with whatever camera or phone you have. Audio quality matters more than video quality for transcription. If you can plug into your soundboard, do it.',
                  },
                  {
                    step: 'Step 2: Upload your video',
                    desc: 'Drop your sermon file into Sermon Clips. The AI handles transcription automatically—no manual upload to a separate service, no copy-pasting.',
                  },
                  {
                    step: 'Step 3: Review the transcript',
                    desc: 'Spend 5–10 minutes scanning for errors. Scripture references and proper nouns are the most common corrections. One-time pass is usually enough.',
                  },
                  {
                    step: 'Step 4: Generate your clips',
                    desc: 'The AI uses the transcript to identify your best 60-second moments and auto-edit them with animated captions, music, and proper aspect ratios for each platform.',
                  },
                  {
                    step: 'Step 5: Publish and repeat',
                    desc: 'Schedule posts for the week. Your media team goes from spending 5 hours on clips to 30 minutes. Rinse and repeat every Sunday.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#E8725A] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">{item.step}</p>
                      <p className="text-sm text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#2D2D2D] rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Start Transcribing Your Sermons for Free</h3>
                <p className="text-white/70 mb-6">
                  Upload your first sermon. Get a full transcript, captions, and AI-generated clips—no credit card required.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#E8725A]/30"
                >
                  Try Sermon Clips Free →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How long does AI sermon transcription take?',
                    a: 'Typically 3–5 minutes for a 45-minute sermon. Some platforms process faster depending on server load. Either way, you\'re getting back hours compared to manual transcription.',
                  },
                  {
                    q: 'Does the AI understand theological terms and Scripture references?',
                    a: 'Modern AI models handle Scripture references (e.g., "John 3:16") and common theological terms with good accuracy. Uncommon denominational terminology or names of local people may need a quick correction. A 5-minute proofread is still recommended before publishing.',
                  },
                  {
                    q: 'What file formats are supported?',
                    a: 'Most AI transcription services accept MP4, MOV, MP3, WAV, and M4A. If your church records in a different format, free tools like HandBrake can convert it quickly.',
                  },
                  {
                    q: 'Is the transcript private? Who can see it?',
                    a: 'Reputable platforms keep your content private by default. Only your team can access the transcript unless you choose to publish it. Check your provider\'s privacy policy—especially important for sermons that touch on sensitive pastoral topics.',
                  },
                  {
                    q: 'Can I transcribe old sermon archives?',
                    a: 'Absolutely. Many churches have years of sermon recordings sitting on hard drives or YouTube. AI can batch-process these, giving you a searchable archive and fresh content to repurpose.',
                  },
                  {
                    q: 'How is this different from YouTube\'s auto-captions?',
                    a: 'YouTube\'s auto-captions are a starting point, but they can\'t be exported easily, they\'re not word-by-word animated captions for social clips, they don\'t feed into a clip-generation workflow, and they often mishandle theological vocabulary. A dedicated transcription tool gives you structured, usable data—not just a caption file you have to wrestle with.',
                  },
                  {
                    q: 'What if my pastor moves around a lot or steps away from the mic?',
                    a: 'Audio quality drops when the pastor moves away from the microphone. A wireless lapel mic solves this completely. If that\'s not an option, recording a clean audio feed from your soundboard (separate from the camera audio) dramatically improves results.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="font-semibold text-[#2D2D2D] mb-3 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                      {item.q}
                    </p>
                    <p className="text-[#5c5c5c] leading-relaxed pl-7">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section>
              <div className="bg-[#E8725A]/10 border border-[#E8725A]/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">The Bottom Line</h3>
                <p className="text-[#5c5c5c] leading-relaxed mb-4">
                  AI sermon transcription isn't a nice-to-have for well-funded megachurches. It's a practical tool any church with a camera can use to multiply their message, serve their congregation better, and stop letting great sermons disappear the moment the service ends.
                </p>
                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Your pastor put in the work. The transcript unlocks it.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    Start For Free
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F1EB] text-[#2D2D2D] px-6 py-3 rounded-full font-semibold border border-[#2D2D2D]/10 transition-all"
                  >
                    Read More Guides
                  </Link>
                </div>
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
