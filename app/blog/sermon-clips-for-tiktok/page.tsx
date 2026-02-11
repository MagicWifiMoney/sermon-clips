import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, Play, Music, Hash, Users, TrendingUp, MessageCircle, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermon Clips for TikTok: Complete Setup Guide | Sermon Clips',
  description: 'Learn how to create and optimize sermon clips specifically for TikTok. Includes technical specs, content strategy, hashtags, and posting best practices for churches.',
  keywords: 'sermon clips for tiktok, church tiktok, tiktok for churches, christian tiktok, church social media',
  openGraph: {
    title: 'Sermon Clips for TikTok: Complete Setup Guide',
    description: 'Learn how to create and optimize sermon clips specifically for TikTok. Complete guide for churches.',
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
      "name": "Should churches be on TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TikTok has over 1 billion active users, with 60% aged 16-34. If your church wants to reach younger generations, TikTok is where they spend their time. Many churches report their TikTok content reaching 10-50x more people than other platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ideal length for sermon clips on TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The sweet spot is 21-34 seconds. TikTok's algorithm favors videos that are watched to completion, so shorter clips with strong hooks perform better than longer ones. You can go up to 60 seconds for powerful content, but completion rates drop significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to use trending sounds on church TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. While trending sounds can boost discoverability, sermon clips with just the pastor's voice perform well because TikTok's algorithm prioritizes watch time and engagement over sound trends. Your message is the content—audio is supporting cast."
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
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Clips for TikTok: Complete Setup Guide
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            TikTok isn't just for dance videos and Gen Z trends. It's become one of the most powerful platforms for churches to reach new audiences—especially younger generations who might never walk through your doors on their own. This guide covers everything you need to know to turn your sermons into TikTok content that actually performs.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-tiktok" className="hover:text-[#E8725A] transition-colors">Why Your Church Should Be on TikTok</a></li>
              <li><a href="#specs" className="hover:text-[#E8725A] transition-colors">TikTok Technical Specs for Sermon Clips</a></li>
              <li><a href="#content-style" className="hover:text-[#E8725A] transition-colors">Content Style That Works</a></li>
              <li><a href="#hooks" className="hover:text-[#E8725A] transition-colors">Writing TikTok Hooks</a></li>
              <li><a href="#hashtags" className="hover:text-[#E8725A] transition-colors">Hashtag Strategy</a></li>
              <li><a href="#posting" className="hover:text-[#E8725A] transition-colors">Posting Schedule & Best Times</a></li>
              <li><a href="#engagement" className="hover:text-[#E8725A] transition-colors">Building Community & Engagement</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-tiktok" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why Your Church Should Be on TikTok
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Let's address the elephant in the room: many church leaders are skeptical of TikTok. "It's just silly videos." "Our congregation isn't on there." "It feels too secular." We hear you. But consider these numbers:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">1B+</p>
                  <p className="text-sm text-[#5c5c5c]">Monthly active users</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">60%</p>
                  <p className="text-sm text-[#5c5c5c]">Users aged 16-34</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">52 min</p>
                  <p className="text-sm text-[#5c5c5c]">Avg. daily time spent</p>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                TikTok's algorithm is uniquely democratic. Unlike Instagram or Facebook where your reach is limited by follower count, TikTok shows your content to people based on whether it's engaging—not who you are. A church with 50 followers can get 100,000 views if the content resonates.
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-8">
                <p className="text-[#2D2D2D] font-medium mb-2">Real Church Results</p>
                <p className="text-[#5c5c5c]">
                  Churches actively posting sermon clips on TikTok report:<br/>
                  • 10-50x more reach than Instagram/Facebook<br/>
                  • First-time visitors mentioning "I found you on TikTok"<br/>
                  • Clips going viral months after posting (the algorithm is long-lasting)<br/>
                  • Young adults re-engaging with faith content
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The #ChristianTikTok Community</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                There's a thriving faith community on TikTok. The #ChristianTikTok hashtag has billions of views. People are actively searching for spiritual content, asking faith questions, and engaging with Christian creators. Your church's message belongs in this conversation.
              </p>
            </section>

            <section id="specs" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A]" />
                TikTok Technical Specs for Sermon Clips
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Getting the technical details right ensures your clips look professional and perform well in the algorithm.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Video Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-[#5c5c5c]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Aspect Ratio:</strong> 9:16 (vertical)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Resolution:</strong> 1080 x 1920 pixels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Format:</strong> MP4 or MOV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Frame Rate:</strong> 30fps</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-[#5c5c5c]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Max Length:</strong> 10 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Optimal Length:</strong> 21-34 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Max File Size:</strong> 287.6 MB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Bitrate:</strong> Minimum 516 kbps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Safe Zones</h4>
                <p className="text-[#5c5c5c] mb-3">TikTok's UI covers parts of your video. Keep important content away from:</p>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• <strong>Top:</strong> Leave ~150px for the status bar</li>
                  <li>• <strong>Bottom:</strong> Leave ~270px for captions, buttons, and description</li>
                  <li>• <strong>Right side:</strong> Leave ~100px for the like/comment/share buttons</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Caption Requirements</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Captions are absolutely essential. 85% of TikTok viewers watch without sound, and the platform itself favors videos with on-screen text. For sermon clips specifically:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Use word-by-word or phrase-by-phrase captions (TikTok style)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Bold, high-contrast fonts (no thin or script fonts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Position in center-bottom, avoiding the safe zone</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Add emphasis (color, size, emoji) to key words</span>
                </li>
              </ul>

              <p className="text-sm text-[#5c5c5c]">
                Learn more about caption best practices in our <Link href="/blog/sermon-clips-with-captions" className="text-[#E8725A] hover:underline">guide to sermon clips with captions</Link>.
              </p>
            </section>

            <section id="content-style" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                Content Style That Works
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                TikTok has its own content culture. Understanding it will help your sermon clips feel native to the platform—not like repurposed content.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What Performs Well on Church TikTok</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">🔥 Raw Over Polished</p>
                  <p className="text-sm text-[#5c5c5c]">TikTok favors authentic content. A passionate moment filmed with decent lighting beats a slick production with no soul.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">💡 Counter-Cultural Takes</p>
                  <p className="text-sm text-[#5c5c5c]">Clips that challenge mainstream thinking get shared. "Culture says X, but here's what's actually true..."</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">❤️ Vulnerable Moments</p>
                  <p className="text-sm text-[#5c5c5c]">When pastors share struggles, failures, or raw emotion—viewers connect deeply.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">✨ Practical Wisdom</p>
                  <p className="text-sm text-[#5c5c5c]">Actionable life advice grounded in Scripture. People come back for content that improves their daily life.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">😄 Holy Humor</p>
                  <p className="text-sm text-[#5c5c5c]">Light-hearted moments that show your church's personality. Faith can be joyful.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">📖 Story Peaks</p>
                  <p className="text-sm text-[#5c5c5c]">The climax of a powerful illustration or testimony. Emotional resonance drives shares.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What to Avoid</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Preachy without payoff.</strong> Don't lecture—invite. The tone should feel like a friend sharing wisdom, not a finger pointing.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Inside jokes.</strong> "If you've been here the last three weeks..." immediately excludes new viewers.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Slow builds.</strong> You have 2-3 seconds to hook someone. No gentle intros—start with the punch.</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Context-dependent content.</strong> If it doesn't make sense without watching the full sermon, it won't work.</span>
                </div>
              </div>
            </section>

            <section id="hooks" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-[#E8725A]" />
                Writing TikTok Hooks
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The first 1-2 seconds determine whether someone keeps watching or scrolls past. For sermon clips, you have two types of hooks to master:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">The Natural Hook</h4>
                  <p className="text-sm text-[#5c5c5c] mb-3">The first words your pastor says in the clip. Choose clips that already start with a compelling statement:</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• "The biggest lie you believe is..."</li>
                    <li>• "Here's what nobody tells you about..."</li>
                    <li>• "I was wrong about this for 20 years."</li>
                    <li>• "This changed everything for me."</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">The Added Hook</h4>
                  <p className="text-sm text-[#5c5c5c] mb-3">A text overlay you add in editing to prime the viewer:</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• "Wait for it... 🔥"</li>
                    <li>• "This hit different"</li>
                    <li>• "POV: You finally hear the truth"</li>
                    <li>• "If you needed to hear this today..."</li>
                    <li>• "The sermon clip that went viral"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Hook Formula</p>
                <p className="text-[#5c5c5c]">
                  <strong>Pattern interrupt + Promised value + Curiosity gap</strong><br/><br/>
                  "Everyone gets this wrong [pattern interrupt]. Here's what actually works [promised value]. And the third thing surprised me [curiosity gap]."
                </p>
              </div>
            </section>

            <section id="hashtags" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Hash className="w-8 h-8 text-[#E8725A]" />
                Hashtag Strategy
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Hashtags on TikTok work differently than Instagram. They're more about topic categorization than discovery—but they still matter for getting your content to the right audience.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Recommended Hashtag Stack</h3>
                <p className="text-sm text-[#5c5c5c] mb-4">Use 4-6 hashtags per post. Mix these categories:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Community Tags</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#ChristianTikTok</li>
                      <li>#FaithTikTok</li>
                      <li>#ChurchTikTok</li>
                      <li>#Christian</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Content Tags</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#SermonClip</li>
                      <li>#PreachIt</li>
                      <li>#SundaySermon</li>
                      <li>#BibleTeaching</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Topic Tags</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#Faith</li>
                      <li>#Prayer</li>
                      <li>#Grace</li>
                      <li>#Forgiveness</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  Hashtag Don'ts
                </p>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• Don't use #FYP or #ForYou (TikTok has said these don't help)</li>
                  <li>• Don't stuff 15+ hashtags (looks spammy)</li>
                  <li>• Don't use unrelated trending hashtags (hurts credibility)</li>
                </ul>
              </div>
            </section>

            <section id="posting" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#E8725A]" />
                Posting Schedule & Best Times
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Consistency matters more than perfection. TikTok's algorithm rewards regular posting, and your audience will learn when to expect content from you.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Best Posting Times (General)</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Tuesday:</strong> 9 AM, 12 PM, 7 PM</li>
                    <li><strong>Wednesday:</strong> 7 AM, 11 AM, 7 PM</li>
                    <li><strong>Thursday:</strong> 9 AM, 12 PM, 7 PM</li>
                    <li><strong>Friday:</strong> 5 AM, 1 PM, 3 PM</li>
                    <li><strong>Saturday:</strong> 11 AM, 7 PM, 8 PM</li>
                    <li><strong>Sunday:</strong> 7 AM, 8 AM, 4 PM</li>
                  </ul>
                  <p className="text-xs text-[#5c5c5c] mt-3 italic">Based on 2026 TikTok analytics data. Check your own analytics for your specific audience.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Recommended Frequency</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Minimum:</strong> 3 posts/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimal:</strong> 1-2 posts/day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Growth mode:</strong> 2-3 posts/day</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#5c5c5c] mt-3 italic">More posts = more chances for one to go viral. Quality still matters—don't post filler.</p>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Sample Weekly Schedule</p>
                <p className="text-sm text-[#5c5c5c]">
                  <strong>Sunday:</strong> Post the "main clip" from today's sermon (early evening after service)<br/>
                  <strong>Tuesday:</strong> Second clip from Sunday's sermon<br/>
                  <strong>Thursday:</strong> Third clip (or throwback from previous sermon)<br/>
                  <strong>Saturday:</strong> Teaser for tomorrow's sermon or evergreen clip from your library
                </p>
              </div>
            </section>

            <section id="engagement" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-[#E8725A]" />
                Building Community & Engagement
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Posting is only half the equation. TikTok's algorithm heavily weights engagement, and building a community around your content drives long-term growth.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Respond to Comments—Fast</h4>
                  <p className="text-sm text-[#5c5c5c]">The first hour after posting is critical. Set aside time to respond to every comment. Even simple responses ("Thank you! 🙏") signal to the algorithm that your content drives conversation.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Reply with Video</h4>
                  <p className="text-sm text-[#5c5c5c]">TikTok lets you respond to comments with a new video. This is incredibly powerful for church accounts—answer faith questions, elaborate on sermon points, or address pushback thoughtfully.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Engage with Other Christian Creators</h4>
                  <p className="text-sm text-[#5c5c5c]">Duet, stitch, and comment on other faith-based content. This exposes your account to their audiences and builds relationships within the #ChristianTikTok community.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Pin Your Best Comments</h4>
                  <p className="text-sm text-[#5c5c5c]">When someone leaves a powerful testimony or question, pin it. This encourages more meaningful engagement and shows new viewers the impact your content has.</p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should churches be on TikTok?</h3>
                  <p className="text-[#5c5c5c]">Yes. TikTok has over 1 billion active users, with 60% aged 16-34. If your church wants to reach younger generations, TikTok is where they spend their time. Many churches report their TikTok content reaching 10-50x more people than other platforms.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What is the ideal length for sermon clips on TikTok?</h3>
                  <p className="text-[#5c5c5c]">The sweet spot is 21-34 seconds. TikTok's algorithm favors videos that are watched to completion, so shorter clips with strong hooks perform better than longer ones. You can go up to 60 seconds for powerful content, but completion rates drop significantly.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Do I need to use trending sounds on church TikTok?</h3>
                  <p className="text-[#5c5c5c]">Not necessarily. While trending sounds can boost discoverability, sermon clips with just the pastor's voice perform well because TikTok's algorithm prioritizes watch time and engagement over sound trends. Your message is the content—audio is supporting cast.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How do I handle negative comments?</h3>
                  <p className="text-[#5c5c5c]">Expect some pushback—that's normal for faith content. Respond graciously to genuine questions, ignore trolls, and use TikTok's filter settings to auto-hide certain keywords. Don't delete critical comments unless they're abusive—civil disagreement can actually boost engagement.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Go Viral?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Creating TikTok-ready sermon clips takes time. With Sermon Clips, we handle the clipping, formatting, and captions—so you can focus on posting and engaging. Try it free.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/60 text-sm mt-4">TikTok-optimized clips in 24 hours</p>
            </section>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/sermon-clips-for-instagram-reels" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Next Platform</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Sermon Clips for Instagram Reels: 2026 Strategy</h3>
            </Link>
            <Link href="/blog/church-social-media-strategy" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Complete Guide</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Church Social Media Strategy: 2026 Complete Guide</h3>
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
