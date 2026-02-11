import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, Type, Eye, Volume2, Users, Accessibility, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermon Clip Maker with Captions: Why It Matters | Sermon Clips',
  description: 'Learn why captions are essential for sermon clips, how they boost engagement by 80%, and best practices for styling captions that convert scrollers into viewers.',
  keywords: 'sermon clips with captions, captioned sermon clips, auto captions church, subtitles for sermons, accessibility church videos',
  openGraph: {
    title: 'Sermon Clip Maker with Captions: Why It Matters',
    description: 'Learn why captions are essential for sermon clips and how they boost engagement by 80%.',
    type: 'article',
    publishedTime: '2026-02-01T00:00:00.000Z',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are captions important for sermon clips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "85% of social media videos are watched without sound. Captions make your sermon clips accessible to the sound-off majority, people in public spaces, and those with hearing impairments. Videos with captions see 80% higher completion rates and significantly more engagement."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best caption style for sermon clips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use bold, sans-serif fonts (like Montserrat or Inter) in white with a black outline or shadow. Position captions in the center-bottom of the frame. Word-by-word or phrase-by-phrase animation helps maintain attention. Make sure text is large enough to read on mobile devices."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are auto-generated captions for sermons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern auto-caption tools are 90-95% accurate for clear speech. However, they often struggle with Biblical names (Isaiah, Ecclesiastes), theological terms, and pastor-specific phrases. Always review auto-generated captions before publishing and manually correct errors."
      }
    }
  ]
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
              7 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Clip Maker with Captions: Why It Matters
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            You've created a powerful sermon clip. The moment is perfect, the message is clear, your pastor delivers it with conviction. But if you post it without captions, you're losing 85% of your potential audience before they even hear the first word.
          </p>

          {/* Key Stat */}
          <div className="bg-[#E8725A]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#E8725A] text-center">
            <p className="text-5xl font-bold text-[#E8725A] mb-2">85%</p>
            <p className="text-lg text-[#2D2D2D]">of social media videos are watched with sound off</p>
            <p className="text-sm text-[#5c5c5c] mt-2">Source: Verizon Media, Social Media Today</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-captions" className="hover:text-[#E8725A] transition-colors">Why Captions Are Non-Negotiable</a></li>
              <li><a href="#engagement" className="hover:text-[#E8725A] transition-colors">How Captions Boost Engagement</a></li>
              <li><a href="#accessibility" className="hover:text-[#E8725A] transition-colors">Accessibility & Inclusivity</a></li>
              <li><a href="#best-practices" className="hover:text-[#E8725A] transition-colors">Caption Best Practices</a></li>
              <li><a href="#tools" className="hover:text-[#E8725A] transition-colors">Caption Tools for Churches</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-captions" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Volume2 className="w-8 h-8 text-[#E8725A]" />
                Why Captions Are Non-Negotiable
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Think about how you scroll through Instagram, TikTok, or Facebook. You're probably not wearing headphones. You're on the bus, in a waiting room, lying in bed next to a sleeping partner, or sneaking a scroll at work. Sound? Off.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This is the reality for the majority of your potential viewers. When they scroll past your sermon clip:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Without Captions</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li>❌ They see a person talking</li>
                    <li>❌ No idea what the topic is</li>
                    <li>❌ No hook to stop scrolling</li>
                    <li>❌ They keep scrolling</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#E8725A]">
                  <h4 className="font-bold text-[#E8725A] mb-3">With Captions</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li>✅ They read the first line</li>
                    <li>✅ It hooks their interest</li>
                    <li>✅ They stop scrolling</li>
                    <li>✅ They turn on sound OR read along</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Captions aren't just helpful—they're the first line of your hook. They're what stops the scroll when sound can't.
              </p>
            </section>

            <section id="engagement" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-[#E8725A]" />
                How Captions Boost Engagement
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The numbers are compelling. Adding captions to video content consistently improves every meaningful metric:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">80%</p>
                  <p className="text-sm text-[#5c5c5c]">Higher completion rates</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">26%</p>
                  <p className="text-sm text-[#5c5c5c]">More likes & reactions</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">15%</p>
                  <p className="text-sm text-[#5c5c5c]">More shares</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Why This Matters for Sermon Clips</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Sermon clips are uniquely dependent on words. Unlike a dance video or cooking clip where visuals tell the story, sermon content IS the words. Without captions, the visual is just a person talking—no context, no hook, no message.
              </p>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mb-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Algorithm Boost</p>
                <p className="text-sm text-[#5c5c5c]">
                  Both TikTok and Instagram use machine learning to analyze video content—including caption text. Captions make your clip searchable and help the algorithm understand what your content is about, improving discoverability for relevant keywords.
                </p>
              </div>
            </section>

            <section id="accessibility" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Accessibility className="w-8 h-8 text-[#E8725A]" />
                Accessibility & Inclusivity
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Beyond convenience, captions serve a deeper purpose: making your message accessible to everyone.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Deaf and Hard of Hearing</p>
                    <p className="text-sm text-[#5c5c5c]">15% of adults have some trouble hearing. For them, uncaptioned video is literally inaccessible. Your sermon clips without captions exclude this community entirely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Non-Native English Speakers</p>
                    <p className="text-sm text-[#5c5c5c]">Many people understand written English better than spoken. Captions help ESL speakers follow along, especially with theological vocabulary.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Sound-Sensitive Environments</p>
                    <p className="text-sm text-[#5c5c5c]">People in hospitals, offices, libraries, or homes with sleeping children can engage with your content silently—if you give them captions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Ministry Perspective</p>
                <p className="text-[#5c5c5c]">
                  The gospel is for everyone. When we fail to caption our content, we're unintentionally excluding the very people Jesus consistently sought out—those on the margins. Accessibility isn't just good marketing; it's good ministry.
                </p>
              </div>
            </section>

            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Type className="w-8 h-8 text-[#E8725A]" />
                Caption Best Practices
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Not all captions are created equal. Here's how to style captions that are readable, engaging, and effective:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">📝 Font Choice</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Use:</strong> Bold, sans-serif fonts (Montserrat, Inter, Arial Bold)</li>
                    <li><strong>Avoid:</strong> Thin, script, or decorative fonts</li>
                    <li><strong>Why:</strong> Readability on small mobile screens is paramount</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">🎨 Colors & Contrast</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Standard:</strong> White text with black outline/stroke</li>
                    <li><strong>Alternative:</strong> Yellow or white text on semi-transparent black box</li>
                    <li><strong>Avoid:</strong> Light colors on light backgrounds, or colors that blend with your video</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">📍 Position</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Best:</strong> Center-bottom (above platform UI elements)</li>
                    <li><strong>Alternative:</strong> Center-middle (if speaker's face isn't blocked)</li>
                    <li><strong>Avoid:</strong> Too low (covered by like buttons) or over speaker's face</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">⏱️ Timing & Animation</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Word-by-word:</strong> Modern TikTok style, high engagement, karaoke-like</li>
                    <li><strong>Phrase-by-phrase:</strong> More readable for longer content</li>
                    <li><strong>Static blocks:</strong> Simpler but less engaging</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">✨ Emphasis</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Color pops:</strong> Highlight key words in your brand color</li>
                    <li><strong>Size variation:</strong> Make important words larger</li>
                    <li><strong>Emoji:</strong> Use sparingly for emphasis (🔥, ⚡, 🙏)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Caption Safe Zone Reminder</p>
                <p className="text-sm text-[#5c5c5c]">
                  Platform UI covers parts of your video. On TikTok and Instagram, leave ~270-300px at the bottom for buttons and captions. On YouTube Shorts, leave ~200px. Place your captions above these zones.
                </p>
              </div>
            </section>

            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                Caption Tools for Churches
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The good news: auto-caption technology has gotten remarkably good. Here are your best options:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-[#2D2D2D]">CapCut</h4>
                      <p className="text-sm text-[#5c5c5c]">Best free option with excellent auto-captions and styling</p>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Free</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-[#2D2D2D]">Descript</h4>
                      <p className="text-sm text-[#5c5c5c]">Edit video by editing the transcript—excellent accuracy</p>
                    </div>
                    <span className="text-[#5c5c5c] text-sm">From $12/mo</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-[#2D2D2D]">Opus Clip</h4>
                      <p className="text-sm text-[#5c5c5c]">AI finds clips AND adds captions automatically</p>
                    </div>
                    <span className="text-[#5c5c5c] text-sm">From $19/mo</span>
                  </div>
                </div>

                <div className="bg-[#E8725A]/5 rounded-xl p-6 border-2 border-[#E8725A]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-[#E8725A]">Sermon Clips</h4>
                      <p className="text-sm text-[#5c5c5c]">Full-service: upload sermon, receive captioned clips in 24 hours</p>
                    </div>
                    <span className="text-[#5c5c5c] text-sm">From $29/mo</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#5c5c5c]">
                  <p className="font-medium text-[#2D2D2D] mb-1">Always Review Auto-Captions</p>
                  <p>AI captions struggle with: Biblical names (Isaiah → "eye say uh"), theological terms, unique phrases your pastor uses. A 30-second review before posting prevents embarrassing errors.</p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Why are captions important for sermon clips?</h3>
                  <p className="text-[#5c5c5c]">85% of social media videos are watched without sound. Captions make your sermon clips accessible to the sound-off majority, people in public spaces, and those with hearing impairments. Videos with captions see 80% higher completion rates and significantly more engagement.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What is the best caption style for sermon clips?</h3>
                  <p className="text-[#5c5c5c]">Use bold, sans-serif fonts (like Montserrat or Inter) in white with a black outline or shadow. Position captions in the center-bottom of the frame. Word-by-word or phrase-by-phrase animation helps maintain attention. Make sure text is large enough to read on mobile devices.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How accurate are auto-generated captions for sermons?</h3>
                  <p className="text-[#5c5c5c]">Modern auto-caption tools are 90-95% accurate for clear speech. However, they often struggle with Biblical names (Isaiah, Ecclesiastes), theological terms, and pastor-specific phrases. Always review auto-generated captions before publishing and manually correct errors.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Do captions help with SEO on social media?</h3>
                  <p className="text-[#5c5c5c]">Yes. TikTok, Instagram, and YouTube use machine learning to analyze video content, including caption text. Captions make your content searchable and help algorithms understand what your video is about, improving discoverability for relevant topics.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Professional Captions, Zero Effort</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Every clip from Sermon Clips comes with professionally styled captions—accurate, readable, and on-brand. Upload your sermon, receive captioned clips in 24 hours.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/60 text-sm mt-4">Captions included • No extra work</p>
            </section>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/how-to-create-sermon-clips-fast" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Related</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">How to Create Sermon Clips in Under 10 Minutes</h3>
            </Link>
            <Link href="/blog/ai-sermon-clip-generator" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Up Next</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">AI Sermon Clip Generator: Top 7 Tools Compared</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
